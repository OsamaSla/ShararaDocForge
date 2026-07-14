// ═══════════════════════════════════════════════
//  CUSTOMER-PROJECT DATABASE (Firestore)
//  Real-time sync via onSnapshot
// ═══════════════════════════════════════════════

import {
  db,
  ensureAuthenticated,
  waitForFirebase,
} from "./firebase.js";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

const CUSTOMERS_COLLECTION = "customers";
const PROJECTS_COLLECTION = "projects";

let customersCache = [];

// ───────────────────────────────────────────────
//  subscribeToCustomers(onUpdate)
//  Listens to /customers in real-time.
//  Returns an unsubscribe function.
// ───────────────────────────────────────────────
export function subscribeToCustomers(onUpdate) {
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

    const q = query(collection(db, CUSTOMERS_COLLECTION), orderBy("name"));
    unsub = onSnapshot(
      q,
      (snapshot) => {
        customersCache = snapshot.docs.map((d) => {
          const data = d.data();
          return {
            name: data.name || d.id,
            phone: data.phone || "",
            fax: data.fax || "",
          };
        });
        if (onUpdate) onUpdate(customersCache);
      },
      (err) => {
        console.warn("subscribeToCustomers error:", err && err.message ? err.message : err);
      }
    );
  })();

  return () => {
    cancelled = true;
    unsub();
  };
}

// ───────────────────────────────────────────────
//  getCustomerDetails(customerName)
//  Synchronous read from the local cache.
// ───────────────────────────────────────────────
export function getCustomerDetails(customerName) {
  if (!customerName || !customerName.trim()) return null;
  return (
    customersCache.find(
      (c) => c.name.trim().toLowerCase() === customerName.trim().toLowerCase()
    ) || null
  );
}

// ───────────────────────────────────────────────
//  getProjectsForCustomer(customerName)
//  Reads from the projects subcollection (async).
// ───────────────────────────────────────────────
export async function getProjectsForCustomer(customerName) {
  if (!customerName || !customerName.trim() || !db) return [];
  try {
    const col = collection(db, CUSTOMERS_COLLECTION, customerName, PROJECTS_COLLECTION);
    const q = query(col, orderBy("name"));
    return new Promise((resolve) => {
      const timeout = setTimeout(() => resolve([]), 10000);
      const unsub = onSnapshot(
        q,
        (snap) => {
          clearTimeout(timeout);
          resolve(snap.docs.map((d) => d.data().name));
          unsub();
        },
        () => {
          clearTimeout(timeout);
          resolve([]);
          unsub();
        }
      );
    });
  } catch {
    return [];
  }
}

// ───────────────────────────────────────────────
//  harvestCustomerProject(clientName, projectName, phone, fax)
//  Writes customer details + project to Firestore.
//  Idempotent (uses merge, checks for duplicates).
// ───────────────────────────────────────────────
export async function harvestCustomerProject(clientName, projectName, phone, fax) {
  if (!clientName || !clientName.trim() || !db) return;

  const trimmedClient = clientName.trim();
  const trimmedProject = projectName ? projectName.trim() : "";
  const trimmedPhone = phone ? phone.trim() : "";
  const trimmedFax = fax ? fax.trim() : "";

  try {
    await ensureAuthenticated();
  } catch {
    return;
  }

  // Write/update customer details
  const customerRef = doc(db, CUSTOMERS_COLLECTION, trimmedClient);
  try {
    await setDoc(
      customerRef,
      { name: trimmedClient, phone: trimmedPhone, fax: trimmedFax },
      { merge: true }
    );
  } catch (err) {
    console.warn("harvestCustomerProject write customer error:", err && err.message ? err.message : err);
    return;
  }

  // Add project to subcollection if new
  if (trimmedProject) {
    const projectRef = doc(db, CUSTOMERS_COLLECTION, trimmedClient, PROJECTS_COLLECTION, trimmedProject);
    try {
      const existing = await getDoc(projectRef);
      if (!existing.exists()) {
        await setDoc(projectRef, { name: trimmedProject });
      }
    } catch (err) {
      console.warn("harvestCustomerProject write project error:", err && err.message ? err.message : err);
    }
  }
}
