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
  writeBatch,
  onSnapshot,
} from "firebase/firestore";
import {
  getAuth,
  signInAnonymously,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDY7s5xKop_oD1udFptnCVx7UwZfEsX0og",
  authDomain: "shararadocforge.firebaseapp.com",
  projectId: "shararadocforge",
  storageBucket: "shararadocforge.firebasestorage.app",
  messagingSenderId: "69588921017",
  appId: "1:69588921017:web:5c8446d1863d4964360968",
  measurementId: "G-B80JCHME86",
};

let db = null;
let auth = null;
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
    try {
      auth = getAuth(app);
    } catch {
      auth = null;
    }
    firebaseAvailable = true;
    try { getAnalytics(app); } catch { }
  }
} catch {
  firebaseAvailable = false;
}

const DOCUMENTS_COLLECTION = "documents";
const COUNTER_DOC_PATH = "counters/documents";
const BACKUPS_COLLECTION = "backups";

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
  } catch {}
}

function withTimeout(promise, ms = 15000, label = "Firebase") {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(
        () => reject(new Error(`timeout waiting for ${label} (${ms}ms)`)),
        ms
      )
    ),
  ]);
}

function describeError(e, context) {
  const code = e && e.code;
  if (code === "permission-denied") {
    return `חסרת הרשאה ל-${context}. ודא שהחוקים (Security Rules) מאפשרים קריאה/כתיבה למשתמש מחובר.`;
  }
  if (code === "unauthenticated") {
    return `לא מחובר ל-Firebase. ודא שהזדהות אנונימית מופעלת.`;
  }
  if (code === "failed-precondition") {
    return `שגיאת תצורה ב-Firebase (ייתכן חסר אינדקס או שהמסד לא הופעל): ${e.message}`;
  }
  if (code === "unavailable") {
    return `שירות Firebase אינו זמין כרגע (רשת/אזור). נסה שוב מאוחר יותר.`;
  }
  return (e && e.message) || `שגיאה ב-${context}`;
}

async function ensureAuthenticated() {
  if (!firebaseAvailable || !db) return;
  if (!auth) return;
  if (auth.currentUser) return;
  try {
    await withTimeout(signInAnonymously(auth), 15000, "Firebase Auth");
  } catch (e) {
    throw new Error(
      "הזדהות מול Firebase נכשלה: " +
        (e && e.message ? e.message : "ודא שאימות אנונימי מופעל בקונסולה")
    );
  }
}

function toIso(v) {
  if (v == null) return null;
  if (typeof v === "object" && typeof v.seconds === "number") {
    return new Date(v.seconds * 1000).toISOString();
  }
  if (v instanceof Date) return v.toISOString();
  const t = new Date(v);
  return isNaN(t.getTime()) ? null : t.toISOString();
}

export function normalizeDoc(raw, id, source) {
  if (!raw || typeof raw !== "object") {
    return { id, source: source || "unknown", items: [] };
  }

  const items = Array.isArray(raw.items)
    ? raw.items.map((it) => {
        const item = it && typeof it === "object" ? it : {};
        const qtyProvided =
          item.quantity !== undefined &&
          item.quantity !== null &&
          item.quantity !== "";
        return {
          id: item.id ? String(item.id) : crypto.randomUUID(),
          description: item.description != null ? String(item.description) : "",
          unit: item.unit ? String(item.unit) : "יח'",
          quantity: qtyProvided ? Number(item.quantity) || 0 : 1,
          unitPrice: Number(item.unitPrice) || 0,
        };
      })
    : [];

  return {
    id,
    docId: raw.docId || id,
    source: source || "firebase",
    docType: raw.docType || "quote",
    customDocType: raw.customDocType || "",
    useCustomDocType: !!raw.useCustomDocType,
    serialNumber: raw.serialNumber != null ? String(raw.serialNumber) : "",
    clientName: raw.clientName || "",
    projectName: raw.projectName || "",
    contactPerson: raw.contactPerson || "",
    contactPhone: raw.contactPhone || "",
    contactFax: raw.contactFax || "",
    date: raw.date || "",
    vatRate: raw.vatRate != null ? Number(raw.vatRate) : 18,
    customVat: raw.customVat || "",
    notes: raw.notes || "",
    simpleLayout: !!raw.simpleLayout,
    items,
    status: raw.status || "active",
    companySnapshot: raw.companySnapshot || null,
    createdAt: toIso(raw.createdAt),
    updatedAt: toIso(raw.updatedAt),
  };
}

async function getNextSerialNumber(docType) {
  if (!firebaseAvailable || !db) return null;
  const key = docType || "quote";
  const counterRef = doc(db, COUNTER_DOC_PATH);
  try {
    const counterDoc = await withTimeout(getDoc(counterRef), 10000, "Firestore counter read");
    if (counterDoc.exists()) {
      return (counterDoc.data()[key] || 0) + 1;
    }
    return 1;
  } catch (e) {
    console.warn("Firestore serial read failed:", e);
    return null;
  }
}

export async function saveNewDocument(documentData, companySnapshot = null) {
  if (firebaseAvailable && db) {
    await ensureAuthenticated();
    const newId = doc(collection(db, DOCUMENTS_COLLECTION)).id;
    const docRef = doc(db, DOCUMENTS_COLLECTION, newId);

    const serial = await getNextSerialNumber(documentData.docType || "quote");
    const assignedSerial = serial !== null ? String(serial) : documentData.serialNumber || "";

    try {
      await withTimeout(
        setDoc(docRef, {
          ...documentData,
          serialNumber: assignedSerial,
          companySnapshot,
          status: "active",
          docId: newId,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        }),
        15000,
        "Firestore"
      );
    } catch (e) {
      throw new Error(describeError(e, "שמירת מסמך"));
    }
    return { id: newId, serial: assignedSerial, source: "firebase" };
  }

  const local = readLocalArchive();
  const localId = "local_" + Date.now() + "_" + crypto.randomUUID().slice(0, 8);
  const entry = {
    ...documentData,
    id: localId,
    docId: localId,
    status: "active",
    companySnapshot,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    source: "local",
  };
  local.unshift(entry);
  writeLocalArchive(local);
  return { id: localId, serial: entry.serialNumber, source: "local" };
}

export async function updateDocument(docId, documentData) {
  if (firebaseAvailable && db && !String(docId).startsWith("local_")) {
    await ensureAuthenticated();
    const docRef = doc(db, DOCUMENTS_COLLECTION, docId);
    await withTimeout(
      setDoc(
        docRef,
        { ...documentData, docId, updatedAt: serverTimestamp() },
        { merge: true }
      )
    );
    return docId;
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
    await ensureAuthenticated();
    const docRef = doc(db, DOCUMENTS_COLLECTION, docId);
    const snapshot = await withTimeout(getDoc(docRef), 15000, "Firestore");
    if (snapshot.exists()) {
      return normalizeDoc(snapshot.data(), snapshot.id, "firebase");
    }
    return null;
  }

  const local = readLocalArchive();
  const found = local.find((d) => d.id === docId);
  return found ? normalizeDoc(found, found.id, "local") : null;
}

export async function listDocuments(includeDeleted = false) {
  if (firebaseAvailable && db) {
    await ensureAuthenticated();
    const q = query(
      collection(db, DOCUMENTS_COLLECTION),
      orderBy("createdAt", "desc")
    );
    let snapshot;
    try {
      snapshot = await withTimeout(getDocs(q), 15000, "Firestore");
    } catch (e) {
      throw new Error(describeError(e, "טעינת הארכיון"));
    }
    const docs = snapshot.docs.map((d) =>
      normalizeDoc(d.data(), d.id, "firebase")
    );
    if (!includeDeleted) {
      return docs.filter((d) => d.status !== "deleted");
    }
    return docs;
  }

  const docs = readLocalArchive()
    .map((d) => normalizeDoc(d, d.id, "local"))
    .sort((a, b) => {
      const ta = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const tb = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return tb - ta;
    });
  if (!includeDeleted) {
    return docs.filter((d) => d.status !== "deleted");
  }
  return docs;
}

export async function deleteDocument(docId) {
  if (firebaseAvailable && db && !String(docId).startsWith("local_")) {
    await ensureAuthenticated();
    const docRef = doc(db, DOCUMENTS_COLLECTION, docId);
    try {
      await withTimeout(
        setDoc(docRef, { status: "deleted", updatedAt: serverTimestamp() }, { merge: true }),
        15000,
        "Firestore"
      );
      return;
    } catch (e) {
      throw new Error(describeError(e, "מחיקת מסמך"));
    }
  }

  const local = readLocalArchive();
  const idx = local.findIndex((d) => d.id === docId);
  if (idx !== -1) {
    local[idx].status = "deleted";
    local[idx].updatedAt = new Date().toISOString();
    writeLocalArchive(local);
  }
}

export async function restoreDocument(docId) {
  if (firebaseAvailable && db && !String(docId).startsWith("local_")) {
    await ensureAuthenticated();
    const docRef = doc(db, DOCUMENTS_COLLECTION, docId);
    try {
      await withTimeout(
        setDoc(docRef, { status: "active", updatedAt: serverTimestamp() }, { merge: true }),
        15000,
        "Firestore"
      );
      return;
    } catch (e) {
      throw new Error(describeError(e, "שחזור מסמך"));
    }
  }

  const local = readLocalArchive();
  const idx = local.findIndex((d) => d.id === docId);
  if (idx !== -1) {
    local[idx].status = "active";
    local[idx].updatedAt = new Date().toISOString();
    writeLocalArchive(local);
  }
}

export function isFirebaseAvailable() {
  return firebaseAvailable;
}

export async function getProjectedSerial(docType = "quote") {
  if (!firebaseAvailable || !db) return null;
  const key = docType || "quote";
  const counterRef = doc(db, COUNTER_DOC_PATH);
  try {
    const counterDoc = await withTimeout(getDoc(counterRef), 10000, "Firestore counter read");
    if (counterDoc.exists()) {
      return (counterDoc.data()[key] || 0) + 1;
    }
    return 1;
  } catch (e) {
    console.warn("Failed to get projected serial:", e);
    return null;
  }
}

export async function exportBackupToFirestore(timestamp, backupData) {
  if (!firebaseAvailable || !db) {
    throw new Error("גיבוי לענן זמין רק כשחיבור Firebase פעיל");
  }
  await ensureAuthenticated();
  const backupRef = doc(db, BACKUPS_COLLECTION, timestamp);
  await withTimeout(
    setDoc(backupRef, {
      exportedAt: serverTimestamp(),
      backupDate: timestamp,
      documents: backupData,
      totalDocuments: backupData.length,
    }),
    30000,
    "Firestore backup"
  );
}

export async function resetAllActiveDocuments() {
  if (!firebaseAvailable || !db) {
    writeLocalArchive([]);
    return;
  }
  await ensureAuthenticated();
  const q = query(
    collection(db, DOCUMENTS_COLLECTION),
    orderBy("createdAt")
  );
  const snapshot = await withTimeout(getDocs(q), 60000, "Firestore fetch for reset");

  const batch = writeBatch(db);
  snapshot.docs.forEach((d) => {
    batch.delete(doc(db, DOCUMENTS_COLLECTION, d.id));
  });
  await batch.commit();

  const counterRef = doc(db, COUNTER_DOC_PATH);
  try {
    await setDoc(counterRef, { quote: 0, work_order: 0, agreement: 0 });
  } catch {}
}

// ═══════════════════════════════════════════════
//  CUSTOMER / PROJECT MANAGEMENT (Firestore Sync)
//  Parent-Child schema:
//    /customers/{customerName}       — { name }
//    /customers/{customerName}/projects/{projectName}  — { name }
//  Historical documents store names as plain strings
//  and are never affected by list changes.
// ═══════════════════════════════════════════════
const CUSTOMERS_COLLECTION = "customers";
const PROJECTS_COLLECTION = "projects";

export async function listCustomerNames() {
  if (!firebaseAvailable || !db) return [];
  await ensureAuthenticated();
  try {
    const q = query(collection(db, CUSTOMERS_COLLECTION), orderBy("name"));
    const snapshot = await withTimeout(getDocs(q), 15000, "Firestore customers");
    return snapshot.docs.map((d) => d.data().name);
  } catch (e) {
    console.warn("listCustomerNames failed:", describeError(e, "לקוחות"));
    return [];
  }
}

/** Returns projects stored under /customers/{customerName}/projects */
export async function listProjectNames(customerName) {
  if (!firebaseAvailable || !db) return [];
  if (!customerName) return [];
  await ensureAuthenticated();
  try {
    const col = collection(db, CUSTOMERS_COLLECTION, customerName, PROJECTS_COLLECTION);
    const q = query(col, orderBy("name"));
    const snapshot = await withTimeout(getDocs(q), 15000, "Firestore projects");
    return snapshot.docs.map((d) => d.data().name);
  } catch (e) {
    console.warn("listProjectNames failed:", describeError(e, "פרויקטים"));
    return [];
  }
}

export async function addCustomerName(name) {
  if (!firebaseAvailable || !db) return;
  await ensureAuthenticated();
  try {
    await withTimeout(
      setDoc(doc(db, CUSTOMERS_COLLECTION, name), { name }),
      15000,
      "Firestore"
    );
  } catch (e) {
    throw new Error(describeError(e, "הוספת לקוח"));
  }
}

/** Adds a project under /customers/{customerName}/projects/{name} */
export async function addProjectName(name, customerName) {
  if (!firebaseAvailable || !db) return;
  if (!customerName) throw new Error("יש לבחור לקוח לפני הוספת פרויקט");
  await ensureAuthenticated();
  try {
    const ref = doc(db, CUSTOMERS_COLLECTION, customerName, PROJECTS_COLLECTION, name);
    await withTimeout(setDoc(ref, { name }), 15000, "Firestore");
  } catch (e) {
    throw new Error(describeError(e, "הוספת פרויקט"));
  }
}

export async function deleteCustomerName(name) {
  if (!firebaseAvailable || !db) return;
  await ensureAuthenticated();
  try {
    await withTimeout(
      deleteDoc(doc(db, CUSTOMERS_COLLECTION, name)),
      15000,
      "Firestore"
    );
  } catch (e) {
    throw new Error(describeError(e, "מחיקת לקוח"));
  }
}

/** Removes a project from /customers/{customerName}/projects/{name} */
export async function deleteProjectName(name, customerName) {
  if (!firebaseAvailable || !db) return;
  if (!customerName) throw new Error("יש לבחור לקוח");
  await ensureAuthenticated();
  try {
    const ref = doc(db, CUSTOMERS_COLLECTION, customerName, PROJECTS_COLLECTION, name);
    await withTimeout(deleteDoc(ref), 15000, "Firestore");
  } catch (e) {
    throw new Error(describeError(e, "מחיקת פרויקט"));
  }
}

/** Renames a customer: creates new doc, copies projects, deletes old */
export async function renameCustomer(oldName, newName) {
  if (!firebaseAvailable || !db) return;
  if (!oldName || !newName || oldName === newName) return;
  await ensureAuthenticated();
  try {
    const oldRef = doc(db, CUSTOMERS_COLLECTION, oldName);
    const newRef = doc(db, CUSTOMERS_COLLECTION, newName);
    const oldSnap = await withTimeout(getDoc(oldRef), 15000, "Firestore");
    if (oldSnap.exists()) {
      await withTimeout(setDoc(newRef, { name: newName, phone: oldSnap.data().phone || "", fax: oldSnap.data().fax || "" }, { merge: true }), 15000, "Firestore");
    }
    const projectsCol = collection(db, CUSTOMERS_COLLECTION, oldName, PROJECTS_COLLECTION);
    const projectsSnap = await withTimeout(getDocs(projectsCol), 15000, "Firestore");
    const batch = writeBatch(db);
    projectsSnap.docs.forEach((d) => {
      batch.set(doc(db, CUSTOMERS_COLLECTION, newName, PROJECTS_COLLECTION, d.id), d.data());
      batch.delete(d.ref);
    });
    batch.delete(oldRef);
    await batch.commit();
  } catch (e) {
    throw new Error(describeError(e, "שינוי שם לקוח"));
  }
}

/** Renames a project under a customer */
export async function renameProject(oldName, newName, customerName) {
  if (!firebaseAvailable || !db) return;
  if (!oldName || !newName || oldName === newName || !customerName) return;
  await ensureAuthenticated();
  try {
    const oldRef = doc(db, CUSTOMERS_COLLECTION, customerName, PROJECTS_COLLECTION, oldName);
    const newRef = doc(db, CUSTOMERS_COLLECTION, customerName, PROJECTS_COLLECTION, newName);
    const oldSnap = await withTimeout(getDoc(oldRef), 15000, "Firestore");
    if (oldSnap.exists()) {
      await withTimeout(setDoc(newRef, { name: newName }, { merge: true }), 15000, "Firestore");
      await withTimeout(deleteDoc(oldRef), 15000, "Firestore");
    }
  } catch (e) {
    throw new Error(describeError(e, "שינוי שם פרויקט"));
  }
}

// ═══════════════════════════════════════════════
//  ONE-TIME MIGRATION: populate /customers and
//  sub-collections from historical document fields.
//  Runs automatically on first subscribeCustomers
//  call. Idempotent (safe to re-run, uses merge).
// ═══════════════════════════════════════════════
export async function migrateCustomerProjectCollections() {
  if (!firebaseAvailable || !db) return { customers: 0, projects: 0 };
  await ensureAuthenticated();

  // Fetch all documents from the main collection
  const docsSnap = await withTimeout(
    getDocs(query(collection(db, DOCUMENTS_COLLECTION))),
    60000,
    "Firestore migration scan"
  );

  // Map: customerName → Set of projectNames
  const customerProjects = new Map();

  docsSnap.docs.forEach((d) => {
    const data = d.data();
    if (data.status === "deleted") return;
    const clientName =
      data.clientName && typeof data.clientName === "string"
        ? data.clientName.trim()
        : "";
    const projectName =
      data.projectName && typeof data.projectName === "string"
        ? data.projectName.trim()
        : "";
    if (clientName) {
      if (!customerProjects.has(clientName)) {
        customerProjects.set(clientName, new Set());
      }
      if (projectName) {
        customerProjects.get(clientName).add(projectName);
      }
    }
  });

  if (customerProjects.size === 0) {
    return { customers: 0, projects: 0 };
  }

  // Build all operations, then write in chunks of 500
  const ops = [];
  customerProjects.forEach((projects, customerName) => {
    ops.push({ type: "set", ref: doc(db, CUSTOMERS_COLLECTION, customerName), data: { name: customerName } });
    projects.forEach((projectName) => {
      const ref = doc(db, CUSTOMERS_COLLECTION, customerName, PROJECTS_COLLECTION, projectName);
      ops.push({ type: "set", ref, data: { name: projectName } });
    });
  });

  for (let i = 0; i < ops.length; i += 500) {
    const chunk = ops.slice(i, i + 500);
    const batch = writeBatch(db);
    chunk.forEach((op) => batch.set(op.ref, op.data, { merge: true }));
    await batch.commit();
  }

  let totalProjects = 0;
  customerProjects.forEach((p) => { totalProjects += p.size; });
  return { customers: customerProjects.size, projects: totalProjects };
}

// ═══════════════════════════════════════════════
//  REAL-TIME SUBSCRIBERS (onSnapshot)
//  Each returns an unsubscribe function.
//  Auth is ensured before the listener is attached.
//  Auto-migration runs once per session if
//  customers collection is empty.
// ═══════════════════════════════════════════════

function waitForFirebase() {
  if (firebaseAvailable && db) return Promise.resolve();
  return new Promise((resolve) => {
    const check = () => {
      if (firebaseAvailable && db) resolve();
      else setTimeout(check, 100);
    };
    check();
  });
}

let migrationDone = false;

export function subscribeCustomers(onData) {
  let unsub = () => {};
  let cancelled = false;

  (async () => {
    await waitForFirebase();
    if (cancelled) return;
    try {
      await ensureAuthenticated();
    } catch {
      onData([]);
      return;
    }
    if (cancelled || !db) { onData([]); return; }

    try {
      if (!migrationDone) {
        await migrateCustomerProjectCollections();
        migrationDone = true;
      }
    } catch (err) {
      console.warn("Migration failed (will retry):", err && err.message ? err.message : err);
      migrationDone = false;
    }

    if (cancelled) return;
    const q = query(collection(db, CUSTOMERS_COLLECTION), orderBy("name"));
    unsub = onSnapshot(
      q,
      (snapshot) => onData(snapshot.docs.map((d) => d.data().name)),
      (err) => {
        console.warn("subscribeCustomers error:", describeError(err, "לקוחות (real-time)"));
        onData([]);
      }
    );
  })();

  return () => {
    cancelled = true;
    unsub();
  };
}

export function subscribeProjects(customerName, onData) {
  let unsub = () => {};
  let cancelled = false;

  if (!customerName) {
    onData([]);
    return unsub;
  }

  (async () => {
    await waitForFirebase();
    if (cancelled) return;
    try {
      await ensureAuthenticated();
    } catch {
      onData([]);
      return;
    }
    if (cancelled || !db) { onData([]); return; }

    const col = collection(db, CUSTOMERS_COLLECTION, customerName, PROJECTS_COLLECTION);
    const q = query(col, orderBy("name"));
    unsub = onSnapshot(
      q,
      (snapshot) => onData(snapshot.docs.map((d) => d.data().name)),
      (err) => {
        console.warn("subscribeProjects error:", describeError(err, "פרויקטים (real-time)"));
        onData([]);
      }
    );
  })();

  return () => {
    cancelled = true;
    unsub();
  };
}

export { DOCUMENTS_COLLECTION, db, serverTimestamp, ensureAuthenticated, waitForFirebase };
