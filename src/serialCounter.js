// ═══════════════════════════════════════════════
//  SERIAL NUMBER COUNTER (Firestore)
//  Per-document-type auto-incrementing counters
//  Real-time sync via onSnapshot
// ═══════════════════════════════════════════════

import {
  db,
  ensureAuthenticated,
  waitForFirebase,
} from "./firebase.js";
import {
  doc,
  getDoc,
  setDoc,
  onSnapshot,
  increment,
} from "firebase/firestore";

const COUNTER_DOC = "counters/documents";

let countersCache = {};

// ───────────────────────────────────────────────
//  subscribeToCounters(onUpdate)
//  Listens to /counters/documents in real-time.
//  Returns an unsubscribe function.
// ───────────────────────────────────────────────
export function subscribeToCounters(onUpdate) {
  let unsub = () => {};
  let cancelled = false;

  (async () => {
    await waitForFirebase();
    if (cancelled) return;
    try {
      await ensureAuthenticated();
    } catch {
      return;
    }
    if (cancelled || !db) return;

    const ref = doc(db, COUNTER_DOC);
    unsub = onSnapshot(
      ref,
      (snap) => {
        countersCache = snap.exists() ? { ...snap.data() } : {};
        if (onUpdate) onUpdate(countersCache);
      },
      (err) => {
        console.warn("subscribeToCounters error:", err && err.message ? err.message : err);
      }
    );
  })();

  return () => {
    cancelled = true;
    unsub();
  };
}

// ───────────────────────────────────────────────
//  getNextSerial(docType)
//  Synchronous read from the local cache.
// ───────────────────────────────────────────────
export function getNextSerial(docType) {
  if (!docType) return 1;
  return (countersCache[docType] || 0) + 1;
}

// ───────────────────────────────────────────────
//  getAllCounters()
//  Synchronous read from the local cache.
// ───────────────────────────────────────────────
export function getAllCounters() {
  return { ...countersCache };
}

// ───────────────────────────────────────────────
//  incrementSerial(docType)
//  Atomic increment in Firestore using FieldValue.increment.
// ───────────────────────────────────────────────
export async function incrementSerial(docType) {
  if (!docType || !db) return;
  try {
    await ensureAuthenticated();
  } catch {
    return;
  }
  const ref = doc(db, COUNTER_DOC);
  try {
    await setDoc(ref, { [docType]: increment(1) }, { merge: true });
  } catch (err) {
    console.warn("incrementSerial error:", err && err.message ? err.message : err);
  }
}

// ───────────────────────────────────────────────
//  setSerial(docType, value)
//  Sets the counter value in Firestore.
// ───────────────────────────────────────────────
export async function setSerial(docType, value) {
  if (!docType || !db) return;
  const num = parseInt(value, 10);
  if (isNaN(num) || num < 0) return;
  try {
    await ensureAuthenticated();
  } catch {
    return;
  }
  const ref = doc(db, COUNTER_DOC);
  try {
    await setDoc(ref, { [docType]: num }, { merge: true });
  } catch (err) {
    console.warn("setSerial error:", err && err.message ? err.message : err);
  }
}
