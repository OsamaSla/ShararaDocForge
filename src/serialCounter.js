// ═══════════════════════════════════════════════
//  SERIAL NUMBER COUNTER
//  Per-document-type auto-incrementing counters
// ═══════════════════════════════════════════════

const COUNTER_KEY = "sharara_serial_counters";

function readCounters() {
  try {
    const raw = localStorage.getItem(COUNTER_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeCounters(data) {
  try {
    localStorage.setItem(COUNTER_KEY, JSON.stringify(data));
  } catch {
    // storage full or unavailable
  }
}

export function getNextSerial(docType) {
  if (!docType) return 1;
  const counters = readCounters();
  return (counters[docType] || 0) + 1;
}

export function incrementSerial(docType) {
  if (!docType) return;
  const counters = readCounters();
  counters[docType] = (counters[docType] || 0) + 1;
  writeCounters(counters);
}

export function setSerial(docType, value) {
  if (!docType) return;
  const num = parseInt(value, 10);
  if (isNaN(num) || num < 0) return;
  const counters = readCounters();
  counters[docType] = num;
  writeCounters(counters);
}

export function getAllCounters() {
  return readCounters();
}
