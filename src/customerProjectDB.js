// ═══════════════════════════════════════════════
//  CUSTOMER-PROJECT DATABASE
//  localStorage-backed relational store
// ═══════════════════════════════════════════════

const DB_KEY = "sharara_customer_project_db";

function readDB() {
  try {
    const raw = localStorage.getItem(DB_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeDB(data) {
  try {
    localStorage.setItem(DB_KEY, JSON.stringify(data));
  } catch {
    // storage full or unavailable
  }
}

/**
 * Structure: Array of customer objects
 * [
 *   {
 *     name: "Client Name",
 *     phone: "050-1234567",
 *     fax: "04-1234567",
 *     projects: ["Project A", "Project B"]
 *   }
 * ]
 */

export function getAllCustomers() {
  return readDB().map((c) => c.name);
}

export function getCustomerDetails(customerName) {
  if (!customerName || !customerName.trim()) return null;
  const db = readDB();
  return db.find(
    (c) => c.name.trim().toLowerCase() === customerName.trim().toLowerCase()
  ) || null;
}

export function getProjectsForCustomer(customerName) {
  if (!customerName || !customerName.trim()) return [];
  const entry = getCustomerDetails(customerName);
  return entry ? entry.projects : [];
}

export function harvestCustomerProject(clientName, projectName, phone, fax) {
  if (!clientName || !clientName.trim()) return;

  const trimmedClient = clientName.trim();
  const trimmedProject = projectName ? projectName.trim() : "";
  const trimmedPhone = phone ? phone.trim() : "";
  const trimmedFax = fax ? fax.trim() : "";

  const db = readDB();
  const idx = db.findIndex(
    (c) => c.name.trim().toLowerCase() === trimmedClient.toLowerCase()
  );

  if (idx === -1) {
    const newEntry = {
      name: trimmedClient,
      phone: trimmedPhone,
      fax: trimmedFax,
      projects: [],
    };
    if (trimmedProject) {
      newEntry.projects.push(trimmedProject);
    }
    db.push(newEntry);
  } else {
    if (db[idx].name !== trimmedClient) {
      db[idx].name = trimmedClient;
    }
    db[idx].phone = trimmedPhone;
    db[idx].fax = trimmedFax;
    if (
      trimmedProject &&
      !db[idx].projects.some(
        (p) => p.trim().toLowerCase() === trimmedProject.toLowerCase()
      )
    ) {
      db[idx].projects.push(trimmedProject);
    }
  }

  writeDB(db);
}

export function removeCustomerProject(customerName, projectName) {
  if (!customerName || !customerName.trim()) return;

  const db = readDB();
  const idx = db.findIndex(
    (c) => c.name.trim().toLowerCase() === customerName.trim().toLowerCase()
  );

  if (idx === -1) return;

  if (projectName && projectName.trim()) {
    db[idx].projects = db[idx].projects.filter(
      (p) => p.trim().toLowerCase() !== projectName.trim().toLowerCase()
    );
    if (db[idx].projects.length === 0) {
      db.splice(idx, 1);
    }
  } else {
    db.splice(idx, 1);
  }

  writeDB(db);
}
