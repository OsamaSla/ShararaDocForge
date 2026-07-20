import {
  db,
  ensureAuthenticated,
  waitForFirebase,
  listDocuments,
} from "./firebase.js";
import {
  doc,
  setDoc,
  onSnapshot,
  increment,
} from "firebase/firestore";

const COUNTER_DOC = "counters/documents";

// Map Hebrew type labels to English keys for backward compatibility
// with documents saved using the Hebrew "type" field.
const TYPE_KEYS = {
  "הצעת מחיר": "quote",
  "הזמנת עבודה": "work_order",
  "הסכם עבודה": "agreement",
};

function normalizeTypeKey(raw) {
  if (!raw) return "quote";
  return TYPE_KEYS[raw] || raw;
}

let countersCache = {};

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

    // Seed cache from existing archive docs so getNextSerial()
    // reflects real data even when the counter doc hasn't been created yet.
    try {
      const docs = await listDocuments(true);
      initializeCountersFromArchive(docs);
    } catch {}
    if (onUpdate) onUpdate(countersCache);
    if (cancelled) return;

    const ref = doc(db, COUNTER_DOC);
    unsub = onSnapshot(
      ref,
      (snap) => {
        if (snap.exists()) {
          const serverData = snap.data();
          // Merge — never downgrade a counter that the archive
          // or a previous save computed as higher.
          Object.keys(serverData).forEach((key) => {
            countersCache[key] = Math.max(countersCache[key] || 0, serverData[key] || 0);
          });
        }
        if (onUpdate) onUpdate({ ...countersCache });
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

export function getNextSerial(docType) {
  if (!docType) return 1;
  return (countersCache[docType] || 0) + 1;
}

export function bumpCounterCache(docType, lastSerial) {
  if (!docType) return;
  const num = parseInt(lastSerial, 10);
  if (!isNaN(num) && num >= (countersCache[docType] || 0)) {
    countersCache[docType] = num;
  }
}

export function getAllCounters() {
  return { ...countersCache };
}

export function initializeCountersFromArchive(archive) {
  if (!Array.isArray(archive)) return;
  archive.forEach((d) => {
    const rawType = d.type || d.docType;
    const key = normalizeTypeKey(rawType);
    const serial = parseInt(d.serialNumber, 10);
    if (!isNaN(serial) && serial >= (countersCache[key] || 0)) {
      countersCache[key] = serial;
    }
  });
}

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
