import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

// ═══════════════════════════════════════════════
//  FIREBASE CONFIGURATION
//  Replace placeholder values with your project credentials.
// ═══════════════════════════════════════════════
const firebaseConfig = {
  apiKey: "AIzaSyDY7s5xKop_oD1udFptnCVx7UwZfEsX0og",
  authDomain: "shararadocforge.firebaseapp.com",
  projectId: "shararadocforge",
  storageBucket: "shararadocforge.firebasestorage.app",
  messagingSenderId: "69588921017",
  appId: "1:69588921017:web:5c8446d1863d4964360968",
  measurementId: "G-B80JCHME86",
};

// ═══════════════════════════════════════════════
//  SAFE FIREBASE INITIALIZATION
// ═══════════════════════════════════════════════
let db = null;
let firebaseAvailable = false;

try {
  const hasValidConfig =
    firebaseConfig.apiKey &&
    firebaseConfig.apiKey !== "YOUR_API_KEY" &&
    firebaseConfig.projectId &&
    firebaseConfig.projectId !== "YOUR_PROJECT_ID";

  if (hasValidConfig) {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    firebaseAvailable = true;
    try { getAnalytics(app); } catch { /* analytics optional */ }
  }
} catch {
  firebaseAvailable = false;
}

const DOCUMENTS_COLLECTION = "documents";

// ═══════════════════════════════════════════════
//  LOCAL STORAGE ENGINE
// ═══════════════════════════════════════════════
const LOCAL_KEY = "sharara_local_archive";

function readLocalArchive() {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeLocalArchive(arr) {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(arr));
  } catch {
    // storage full or unavailable — silently fail
  }
}

// ═══════════════════════════════════════════════
//  TIMEOUT WRAPPER
// ═══════════════════════════════════════════════
function withTimeout(promise, ms = 5000) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), ms)
    ),
  ]);
}

// ═══════════════════════════════════════════════
//  PUBLIC API
// ═══════════════════════════════════════════════

export async function saveNewDocument(documentData) {
  // Try Firebase first
  if (firebaseAvailable && db) {
    try {
      const newId = doc(collection(db, DOCUMENTS_COLLECTION)).id;
      const docRef = doc(db, DOCUMENTS_COLLECTION, newId);
      await withTimeout(
        setDoc(docRef, {
          ...documentData,
          docId: newId,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        })
      );
      return { id: newId, source: "firebase" };
    } catch {
      // Firebase failed — fall back to localStorage
    }
  }

  // LocalStorage fallback
  const local = readLocalArchive();
  const localId = "local_" + Date.now() + "_" + crypto.randomUUID().slice(0, 8);
  const entry = {
    ...documentData,
    id: localId,
    docId: localId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    source: "local",
  };
  local.unshift(entry);
  writeLocalArchive(local);
  return { id: localId, source: "local" };
}

export async function updateDocument(docId, documentData) {
  if (firebaseAvailable && db && !String(docId).startsWith("local_")) {
    try {
      const docRef = doc(db, DOCUMENTS_COLLECTION, docId);
      await withTimeout(
        setDoc(
          docRef,
          { ...documentData, docId, updatedAt: serverTimestamp() },
          { merge: true }
        )
      );
      return docId;
    } catch {
      // fall through
    }
  }

  const local = readLocalArchive();
  const idx = local.findIndex((d) => d.id === docId);
  if (idx !== -1) {
    local[idx] = { ...local[idx], ...documentData, updatedAt: new Date().toISOString() };
    writeLocalArchive(local);
  }
  return docId;
}

export async function loadDocument(docId) {
  if (firebaseAvailable && db && !String(docId).startsWith("local_")) {
    try {
      const docRef = doc(db, DOCUMENTS_COLLECTION, docId);
      const snapshot = await withTimeout(getDoc(docRef));
      if (snapshot.exists()) {
        return { id: snapshot.id, ...snapshot.data(), source: "firebase" };
      }
    } catch {
      // fall through
    }
  }

  const local = readLocalArchive();
  const found = local.find((d) => d.id === docId);
  return found ? { ...found, source: "local" } : null;
}

export async function listDocuments() {
  const results = [];

  // Try Firebase
  if (firebaseAvailable && db) {
    try {
      const q = query(
        collection(db, DOCUMENTS_COLLECTION),
        orderBy("createdAt", "desc")
      );
      const snapshot = await withTimeout(getDocs(q));
      snapshot.docs.forEach((d) => {
        results.push({ id: d.id, ...d.data(), source: "firebase" });
      });
    } catch {
      // Firebase unavailable — continue with locals only
    }
  }

  // Always include local documents
  const local = readLocalArchive();
  local.forEach((d) => {
    results.push({ ...d, source: "local" });
  });

  // Sort by createdAt descending
  results.sort((a, b) => {
    const toSeconds = (v) => {
      if (v && typeof v === "object" && typeof v.seconds === "number") return v.seconds;
      const t = new Date(v).getTime();
      return isNaN(t) ? 0 : t / 1000;
    };
    return toSeconds(b.createdAt) - toSeconds(a.createdAt);
  });

  return results;
}

export async function deleteDocument(docId) {
  if (firebaseAvailable && db && !String(docId).startsWith("local_")) {
    try {
      await withTimeout(deleteDoc(doc(db, DOCUMENTS_COLLECTION, docId)));
    } catch {
      // fall through to also remove local copy
    }
  }

  const local = readLocalArchive();
  const filtered = local.filter((d) => d.id !== docId);
  writeLocalArchive(filtered);
}

export function isFirebaseAvailable() {
  return firebaseAvailable;
}

export { db, serverTimestamp };
