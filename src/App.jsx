import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import {
  saveNewDocument,
  listDocuments,
  deleteDocument,
  restoreDocument,
  exportBackupToFirestore,
  resetAllActiveDocuments,
  getProjectedSerial,
  normalizeDoc,
} from "./firebase";
import { getAllCustomers, getProjectsForCustomer, getCustomerDetails, harvestCustomerProject } from "./customerProjectDB";
import { incrementSerial, getAllCounters, setSerial } from "./serialCounter";
import SearchableDropdown from "./SearchableDropdown";
import logoImg from "./logo.png";
import signatureImg from "./SHARARA SIGNATURE.png";

// ═══════════════════════════════════════════════
//  CONSTANTS & DEFAULTS
// ═══════════════════════════════════════════════

const DOCUMENT_TYPES = [
  { value: "quote", label: "הצעת מחיר" },
  { value: "work_order", label: "הזמנת עבודה" },
  { value: "agreement", label: "הסכם עבודה" },
];

const UNITS = ["יח'", "מ\"א", "גלובלי", "מ\"ר", "ימים", "מ\"ק", "שעות", "סט"];

const DEFAULT_COMPANY = {
  name: "עלי שרארה בע\"מ",
  subtitle: "תעשיות פח ומערכות אוורור ומיזוג אוויר",
  tradeDesc:
    "תכנון וביצוע מערכות מיזוג אוויר ואוורור פינוי עשן יצור תעלות פח צינורות 'ספירקל' ואביזרים תעלות נירוסטה ומנדפים תעלות פח שחור חיתוך וכיפוף פחים מכירה והתקנת כל סוגי המזגנים",
  phone: "04-6082264",
  fax: "04-6082263",
  mobile: "050-5215192",
  email: "ali@sharara.co.il",
  website: "www.sharara.co.il",
  address: "שכ' מזרחית, נצרת/ריינה",
};

const freshItem = () => ({
  id: crypto.randomUUID(),
  description: "",
  unit: "יח'",
  quantity: 1,
  unitPrice: 0,
});

const freshDocState = (docType = "quote") => ({
  docType,
  customDocType: "",
  useCustomDocType: false,
  serialNumber: "",
  clientName: "",
  projectName: "",
  contactPerson: "",
  contactPhone: "",
  contactFax: "",
  date: new Date().toISOString().split("T")[0],
  vatRate: 18,
  customVat: "",
  items: [freshItem()],
  notes: "",
});

// ═══════════════════════════════════════════════
//  MATH UTILITIES
// ═══════════════════════════════════════════════

const calcLine = (item) => Number(item.quantity) * Number(item.unitPrice);
const calcSubtotal = (items) => items.reduce((s, i) => s + calcLine(i), 0);
const calcVAT = (sub, rate) => sub * (Number(rate) / 100);
const calcGrand = (sub, rate) => sub + calcVAT(sub, rate);
const fmt = (n) =>
  n.toLocaleString("he-IL", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const fmtDate = (d) => {
  if (!d) return "";
  const [y, m, day] = d.split("-");
  if (!y || !m || !day) return d;
  return `${day}/${m}/${y}`;
};

const parseDateStr = (display) => {
  const parts = display.split("/").filter(Boolean);
  if (parts.length !== 3) return "";
  const [day, m, y] = parts;
  if (day.length !== 2 || m.length !== 2 || y.length !== 4) return "";
  const dd = parseInt(day, 10);
  const mm = parseInt(m, 10);
  const yyyy = parseInt(y, 10);
  if (dd < 1 || dd > 31 || mm < 1 || mm > 12 || yyyy < 1900) return "";
  return `${y}-${m}-${day}`;
};

function getEffectiveVatRate(doc) {
  const custom = parseFloat(doc.customVat);
  if (!isNaN(custom) && custom >= 0 && custom <= 100) {
    return custom;
  }
  return Number(doc.vatRate) || 0;
}

function resolveDocLabel(doc) {
  if (doc.useCustomDocType && doc.customDocType && doc.customDocType.trim()) {
    return doc.customDocType.trim();
  }
  return DOCUMENT_TYPES.find((t) => t.value === doc.docType)?.label || "מסמך";
}

function deepCopyDoc(doc) {
  return {
    ...doc,
    items: doc.items.map((it) => ({ ...it })),
  };
}

function deepCopyCompany(c) {
  return { ...c };
}

function validateDocument(doc) {
  const errors = {};
  const clientOk = doc.clientName && doc.clientName.trim().length > 0;
  if (!clientOk) errors.clientName = true;
  const hasAnyDescription = doc.items.some((it) => it.description && it.description.trim().length > 0);
  if (!hasAnyDescription) errors.noDescription = true;
  return { valid: Object.keys(errors).length === 0, errors };
}

// ═══════════════════════════════════════════════
//  TOAST SYSTEM
// ═══════════════════════════════════════════════

function Toast({ message, type }) {
  if (!message) return null;
  return (
    <div className="toast-container">
      <div className={`toast ${type || ""}`}>{message}</div>
    </div>
  );
}

// ═══════════════════════════════════════════════
//  MODULE 1 – DocumentPreview
// ═══════════════════════════════════════════════

function DocumentPreview({ company, doc }) {
  const headerCompany = doc.companySnapshot || company;
  const [projectedSerial, setProjectedSerial] = useState(null);

  useEffect(() => {
    if (doc.serialNumber && String(doc.serialNumber).trim()) {
      setProjectedSerial(null);
    } else {
      setProjectedSerial(null);
      getProjectedSerial().then((s) => setProjectedSerial(s)).catch(() => {});
    }
  }, [doc.serialNumber, doc.docId]);

  const serialValue = doc.serialNumber && String(doc.serialNumber).trim()
    ? String(doc.serialNumber).padStart(6, "0")
    : projectedSerial
      ? String(projectedSerial).padStart(6, "0")
      : null;
  const vatRate = getEffectiveVatRate(doc);
  const subtotal = useMemo(() => calcSubtotal(doc.items), [doc.items]);
  const vatAmt = useMemo(() => calcVAT(subtotal, vatRate), [subtotal, vatRate]);
  const grand = useMemo(() => calcGrand(subtotal, vatRate), [subtotal, vatRate]);
  const label = resolveDocLabel(doc);
  const filled = doc.items.filter((i) => i.description || i.unitPrice > 0);
  const padRow = Math.max(0, 8 - filled.length);
  const notes = doc.notes || "";

  return (
    <div className="print-sheet">
      {/* ── LETTERHEAD HEADER ── */}
      <div className="letterhead">
        <div className="letterhead-main">
          <div className="letterhead-titles">
            <h1>{headerCompany.name}</h1>
            <h2>{headerCompany.subtitle}</h2>
            <div className="letterhead-trade-wrap">
              <img src={logoImg} alt="לוגו" className="letterhead-logo" />
              <div className="letterhead-trade">{headerCompany.tradeDesc}</div>
            </div>
          </div>
        </div>
        <div className="letterhead-contact">
          <span>Tel: <span className="dir-ltr">{headerCompany.phone}</span></span>
          <span>Fax: <span className="dir-ltr">{headerCompany.fax}</span></span>
          <span>Mobile: <span className="dir-ltr">{headerCompany.mobile}</span></span>
          <span>{headerCompany.email}</span>
          <span>{headerCompany.website}</span>
          <span>{headerCompany.address}</span>
        </div>
      </div>

      {/* ── DOCUMENT TITLE ── */}
      <div className="doc-title">{label}</div>
      <div className="doc-serial">מס' סידורי: {serialValue || "———"}</div>

      {/* ── CLIENT META ── */}
      <div className="meta-grid">
        <div><span className="meta-label">שם המזמין:</span> {doc.clientName || <span className="meta-dash">—</span>}</div>
        <div><span className="meta-label">תאריך:</span> {fmtDate(doc.date)}</div>
        <div><span className="meta-label">שם הפרויקט:</span> {doc.projectName || <span className="meta-dash">—</span>}</div>
        <div><span className="meta-label">איש קשר:</span> {doc.contactPerson || <span className="meta-dash">—</span>}</div>
        <div><span className="meta-label">מס' טלפון:</span> {doc.contactPhone || <span className="meta-dash">—</span>}</div>
        <div><span className="meta-label">מס' פקס:</span> {doc.contactFax || <span className="meta-dash">—</span>}</div>
      </div>

      {/* ── ITEMS TABLE ── */}
      <table className="items-table">
        <thead>
          <tr>
            <th className="col-num">מס'</th>
            <th className="col-desc">תאור</th>
            <th className="col-unit">יח' מידה</th>
            <th className="col-qty">כמות</th>
            <th className="col-price">מחיר ליחידה</th>
            <th className="col-total">סה"כ לפני מע"מ</th>
          </tr>
        </thead>
        <tbody>
          {filled.map((item, idx) => (
            <tr key={item.id}>
              <td className="col-num">{idx + 1}</td>
              <td>{item.description}</td>
              <td className="col-unit">{item.unit}</td>
              <td className="col-qty">{item.quantity}</td>
              <td className="num-cell">{fmt(item.unitPrice)} ₪</td>
              <td className="num-cell">{fmt(calcLine(item))} ₪</td>
            </tr>
          ))}
          {filled.length === 0 && (
            <tr className="empty-row"><td colSpan={6}>—</td></tr>
          )}
          {Array.from({ length: padRow }).map((_, i) => (
            <tr key={`pad-${i}`} style={{ height: 26 }}>
              <td>&nbsp;</td><td /><td /><td /><td /><td />
            </tr>
          ))}
        </tbody>
      </table>

      {/* ── TOTALS CARD ── */}
      <div className="totals-card">
        <div className="totals-card-inner">
          <div className="totals-card-row">
            <span>סה"כ לפני מע"מ</span>
            <span className="dir-ltr">{fmt(subtotal)} ₪</span>
          </div>
          <div className="totals-card-row">
            <span>מע"מ ({vatRate}%)</span>
            <span className="dir-ltr">{fmt(vatAmt)} ₪</span>
          </div>
          <div className="totals-card-row grand">
            <span>סה"כ לתשלום</span>
            <span className="dir-ltr">{fmt(grand)} ₪</span>
          </div>
        </div>
      </div>

      {/* ── NOTES / TERMS ── */}
      {notes && (
        <div className="notes-section">
          <p className="notes-label">הערות / תנאים:</p>
          <p className="notes-content">{notes}</p>
        </div>
      )}

      {/* ── LEGAL TERMS ── */}
      <div className="legal-section">
        <p>
          נא לאשר את ההצעה תוך ___ ימים מיום קבלתה. תנאי תשלום: שוטף + 30 יום.
          לפי שמוסכם. שיק בזמן קבלת ההזמנה. ט.ל.ח
        </p>
        <p>
          החתום על הצעת מחיר זו ערב באופן אישי לפירעון התשלום.
          הסחורה בבעלות עלי שרארה בע"מ עד לפרעון התשלום.
        </p>
      </div>

      {/* ── SIGNATURE BLOCK ── */}
      <div className="signature-block">
        <div className="sig-box">
          <div className="sig-line">
            <span className="sig-client-label">לקוח</span>
            תעודת זהות / עוסק מורשה
          </div>
        </div>
        <div className="sig-box">
          <div className="sig-img-wrapper">
            <img src={signatureImg} alt="חתימה" style={{ width: 180, height: 90, objectFit: "contain" }} />
          </div>
          <div className="sig-line">חתימה &amp; חותמת</div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
//  MODULE 2 – DocumentForm (Tab 1: new doc)
// ═══════════════════════════════════════════════

function DocumentForm({ doc, onChange, showValidation, validationErrors }) {
  const set = (field, val) => onChange((p) => ({ ...p, [field]: val }));

  const [allCustomers, setAllCustomers] = useState([]);
  const [projectOptions, setProjectOptions] = useState([]);

  useEffect(() => {
    setAllCustomers(getAllCustomers());
  }, [doc]);

  useEffect(() => {
    if (doc.clientName && doc.clientName.trim()) {
      setProjectOptions(getProjectsForCustomer(doc.clientName));
    } else {
      setProjectOptions([]);
    }
  }, [doc.clientName]);

  const handleClientChange = (val) => {
    set("clientName", val);
    if (val && val.trim()) {
      const projects = getProjectsForCustomer(val);
      setProjectOptions(projects);
      if (projects.length > 0 && !projects.some(
        (p) => p.toLowerCase() === (doc.projectName || "").toLowerCase()
      )) {
        set("projectName", "");
      }
      const details = getCustomerDetails(val);
      if (details) {
        set("contactPhone", details.phone || "");
        set("contactFax", details.fax || "");
      }
    } else {
      setProjectOptions([]);
    }
  };

  const handleProjectChange = (val) => {
    set("projectName", val);
  };

  const setItem = (id, field, val) =>
    onChange((p) => ({
      ...p,
      items: p.items.map((it) => (it.id === id ? { ...it, [field]: val } : it)),
    }));

  const addRow = () => onChange((p) => ({ ...p, items: [...p.items, freshItem()] }));

  const delRow = (id) =>
    onChange((p) => ({ ...p, items: p.items.filter((it) => it.id !== id) }));

  const resetForm = () => onChange(freshDocState());

  const toggleCustomDocType = () => {
    onChange((p) => ({
      ...p,
      useCustomDocType: !p.useCustomDocType,
      customDocType: p.useCustomDocType ? "" : p.customDocType,
    }));
  };

  const effectiveVat = getEffectiveVatRate(doc);

  return (
    <div className="space-y-4">
      {/* ── Doc Type ── */}
      <div>
        <label className="form-label">סוג מסמך</label>
        <div className="flex items-center gap-2">
          <select
            value={doc.useCustomDocType ? "__custom__" : doc.docType}
            onChange={(e) => {
              if (e.target.value === "__custom__") {
                set("useCustomDocType", true);
              } else {
                const newType = e.target.value;
                set("docType", newType);
                set("useCustomDocType", false);
                set("customDocType", "");
              }
            }}
            className="form-input flex-1"
          >
            {DOCUMENT_TYPES.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
            <option value="__custom__">סוג מסמך מותאם אישית...</option>
          </select>
        </div>
        {doc.useCustomDocType && (
          <input
            type="text"
            value={doc.customDocType}
            onChange={(e) => set("customDocType", e.target.value)}
            className="form-input mt-2"
            placeholder="הזן שם מסמך מותאם אישית..."
            autoFocus
          />
        )}
        {doc.useCustomDocType && (
          <button
            onClick={toggleCustomDocType}
            className="mt-1.5 text-[10px] text-gray-400 hover:text-gray-600 underline"
          >
            חזור לסוג מסמך קבוע
          </button>
        )}
      </div>

      {/* ── Client Info Grid ── */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="form-label">שם המזמין <span className="text-red-500">*</span></label>
          <SearchableDropdown
            value={doc.clientName}
            onChange={handleClientChange}
            options={allCustomers}
            placeholder="הקלד או בחר שם לקוח..."
            className={`${showValidation && validationErrors?.clientName ? "form-input-error" : ""}`}
          />
          {showValidation && validationErrors?.clientName && (
            <p className="validation-hint">שדה חובה - הזן שם המזמין</p>
          )}
        </div>
        <div>
          <label className="form-label">שם הפרויקט</label>
          <SearchableDropdown
            value={doc.projectName}
            onChange={handleProjectChange}
            options={projectOptions}
            placeholder={doc.clientName ? "הקלד או בחר פרויקט..." : "בחר לקוח תחילה..."}
          />
        </div>
        <div>
          <label className="form-label">איש קשר</label>
          <input value={doc.contactPerson} onChange={(e) => set("contactPerson", e.target.value)} className="form-input" />
        </div>
        <div>
          <label className="form-label">תאריך</label>
          <input
            type="text"
            value={fmtDate(doc.date)}
            onChange={(e) => {
              let v = e.target.value.replace(/[^\d/]/g, "");
              if (v.length === 2 && !v.includes("/") && doc.date) v = v + "/";
              if (v.length === 5 && v.charAt(2) === "/" && v.charAt(5) !== "/") v = v + "/";
              set("date", parseDateStr(v));
            }}
            placeholder="DD/MM/YYYY"
            className="form-input"
            maxLength={10}
            dir="ltr"
            style={{ textAlign: "center" }}
          />
        </div>
        <div>
          <label className="form-label">טלפון</label>
          <input value={doc.contactPhone} onChange={(e) => set("contactPhone", e.target.value)} className="form-input" />
        </div>
        <div>
          <label className="form-label">פקס</label>
          <input value={doc.contactFax} onChange={(e) => set("contactFax", e.target.value)} className="form-input" />
        </div>
      </div>

      {/* ── VAT Rate Toggle + Custom Input ── */}
      <div className="flex items-center gap-3 flex-wrap">
        <label className="form-label mb-0">מע"מ:</label>
        {[17, 18].map((r) => (
          <button
            key={r}
            onClick={() => { set("vatRate", r); set("customVat", ""); }}
            className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
              doc.vatRate === r && !doc.customVat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {r}%
          </button>
        ))}
        <div className="flex items-center gap-1">
          <input
            type="number"
            min="0"
            max="100"
            step="0.1"
            placeholder="custom"
            value={doc.customVat}
            onChange={(e) => set("customVat", e.target.value)}
            className="vat-custom-input"
          />
          <span className="text-xs text-gray-500">%</span>
        </div>
        <span className="text-[10px] text-gray-400">
          ({effectiveVat}% פעיל)
        </span>
      </div>

      {/* ── Line Items ── */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide">סעיפים</h3>
          <button onClick={addRow} className="no-print bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-1.5 rounded transition-colors">
            + הוסף סעיף
          </button>
        </div>

        <div className="space-y-1.5">
          {doc.items.map((item, idx) => (
            <div key={item.id} className={`bg-gray-50 border rounded p-1.5 text-xs ${showValidation && validationErrors?.noDescription && (!item.description || !item.description.trim()) ? "border-red-400" : "border-gray-200"}`}>
              <div className="flex items-center gap-1">
                <span className="w-5 text-center text-gray-400 font-semibold shrink-0">{idx + 1}</span>
                <select
                  value={item.unit}
                  onChange={(e) => setItem(item.id, "unit", e.target.value)}
                  className="w-14 shrink-0 border border-gray-300 rounded px-1 py-1 text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  {UNITS.map((u) => <option key={u} value={u}>{u}</option>)}
                </select>
                <input
                  type="number"
                  min="0"
                  value={item.quantity}
                  onChange={(e) => setItem(item.id, "quantity", Number(e.target.value))}
                  className="w-12 shrink-0 border border-gray-300 rounded px-1 py-1 text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="number"
                  min="0"
                  value={item.unitPrice}
                  onChange={(e) => setItem(item.id, "unitPrice", Number(e.target.value))}
                  className="w-16 shrink-0 border border-gray-300 rounded px-1 py-1 text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <span className="w-16 shrink-0 text-center text-gray-500 font-medium tabular-nums text-[11px]">{fmt(calcLine(item))} ₪</span>
                <button
                  onClick={() => delRow(item.id)}
                  className="text-red-400 hover:text-red-600 text-base leading-none px-1 shrink-0"
                  title="מחק סעיף"
                >
                  &times;
                </button>
              </div>
              <input
                placeholder="תיאור פריט..."
                value={item.description}
                onChange={(e) => setItem(item.id, "description", e.target.value)}
                className={`mt-1.5 w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${showValidation && validationErrors?.noDescription && (!item.description || !item.description.trim()) ? "border-red-400" : "border-gray-300"}`}
              />
            </div>
          ))}
        </div>
        {showValidation && validationErrors?.noDescription && (
          <p className="validation-hint mt-1">חובה להזין תיאור לפחות בסעיף אחד</p>
        )}
      </div>

      {/* ── Notes ── */}
      <div>
        <label className="form-label">הערות / תנאים</label>
        <textarea
          rows={6}
          value={doc.notes || ""}
          onChange={(e) => set("notes", e.target.value)}
          className="form-input notes-textarea"
          placeholder="תנאים נוספים, תנאי תשלום וכו׳"
        />
      </div>

      {/* ── Reset ── */}
      <button onClick={resetForm} className="w-full bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold py-2 rounded transition-colors">
        אפס טופס
      </button>
    </div>
  );
}

// ═══════════════════════════════════════════════
//  MODULE 2b – ArchiveView (Tab 2)
// ═══════════════════════════════════════════════

function ArchiveView({ onLoadToForm, onPreview, refreshKey }) {
  const [allDocs, setAllDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("active");

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const list = await listDocuments(true);
      setAllDocs(list);
    } catch (err) {
      setError(err.message || "Failed to load archive");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { refresh(); }, [refresh, refreshKey]);

  const availableTypes = useMemo(() => {
    const typeSet = new Set();
    allDocs.forEach((d) => {
      const label = resolveDocLabel(d);
      if (label) typeSet.add(label);
    });
    return Array.from(typeSet).sort();
  }, [allDocs]);

  const activeDocs = useMemo(() => allDocs.filter((d) => d.status !== "deleted"), [allDocs]);
  const deletedDocs = useMemo(() => allDocs.filter((d) => d.status === "deleted"), [allDocs]);
  const statusDocs = filterStatus === "active" ? activeDocs : deletedDocs;

  const filteredDocs = useMemo(() => {
    if (filterType === "all") return statusDocs;
    return statusDocs.filter((d) => resolveDocLabel(d) === filterType);
  }, [statusDocs, filterType]);

  const handleDelete = async (docId, clientName) => {
    if (!window.confirm(`למחוק מסמך של "${clientName}"?`)) return;
    try {
      await deleteDocument(docId);
      refresh();
    } catch (err) {
      alert("שגיאה במחיקה: " + err.message);
    }
  };

  const handleRestore = async (docId, clientName) => {
    if (!window.confirm(`לשחזר מסמך של "${clientName}"?`)) return;
    try {
      await restoreDocument(docId);
      refresh();
    } catch (err) {
      alert("שגיאה בשחזור: " + err.message);
    }
  };

  const handleDuplicate = (entry) => {
    const copy = { ...entry };
    delete copy.id;
    delete copy.docId;
    delete copy.createdAt;
    delete copy.updatedAt;
    delete copy.source;
    delete copy.status;
    if (!copy.items || copy.items.length === 0) {
      copy.items = [freshItem()];
    }
    copy.items = copy.items.map((it) => ({
      ...it,
      id: crypto.randomUUID(),
      description: it.description || "",
      unit: it.unit || "יח'",
      quantity: Number(it.quantity) || 1,
      unitPrice: Number(it.unitPrice) || 0,
    }));
    copy.notes = copy.notes || "";
    copy.customVat = copy.customVat || "";
    copy.customDocType = copy.customDocType || "";
    copy.useCustomDocType = copy.useCustomDocType || false;
    copy.date = new Date().toISOString().split("T")[0];
    onLoadToForm(copy);
  };

  const formatCreatedAt = (d) => {
    if (!d.createdAt) return "";
    const date = new Date(d.createdAt);
    if (isNaN(date.getTime())) return "";
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48 text-gray-400 text-sm">
        טוען ארכיון...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center">
        <p className="text-red-500 text-sm mb-2">{error}</p>
        <button onClick={refresh} className="text-blue-600 text-xs underline">נסה שוב</button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterStatus("active")}
            className={`text-xs font-semibold px-3 py-1 rounded transition-colors ${
              filterStatus === "active"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            מסמכים פעילים ({activeDocs.length})
          </button>
          <button
            onClick={() => setFilterStatus("deleted")}
            className={`text-xs font-semibold px-3 py-1 rounded transition-colors ${
              filterStatus === "deleted"
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            נמחקו ({deletedDocs.length})
          </button>
        </div>
        <button onClick={refresh} className="text-xs text-blue-600 hover:underline">רענון</button>
      </div>

      {allDocs.length > 0 && (
        <div className="mb-3">
          <label className="form-label">סנן לפי סוג מסמך</label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="form-input"
          >
            <option value="all">הכל</option>
            {availableTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      )}

      {allDocs.length === 0 ? (
        <div className="text-center text-gray-400 text-sm py-12">אין מסמכים שמורים</div>
      ) : filteredDocs.length === 0 ? (
        <div className="text-center text-gray-400 text-sm py-12">אין מסמכים התואמים את הסינון</div>
      ) : (
        <div className="space-y-1.5">
          {filteredDocs.map((d) => {
            const typeLabel = resolveDocLabel(d);
            const sub = d.items ? calcSubtotal(d.items) : 0;
            const rate = getEffectiveVatRate(d);
            const grand = d.items ? calcGrand(sub, rate) : 0;
            const isLocal = d.source === "local";
            const createdAtStr = formatCreatedAt(d);
            return (
              <div key={d.id} className={`flex items-center gap-2 border rounded p-2 text-xs ${
                d.status === "deleted"
                  ? "bg-red-50 border-red-200"
                  : "bg-gray-50 border-gray-200"
              }`}>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <span className="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[10px] font-semibold">{typeLabel}</span>
                    {d.serialNumber && (
                      <span className="text-gray-400 font-mono text-[10px]">#{String(d.serialNumber).padStart(4, "0")}</span>
                    )}
                    {createdAtStr && (
                      <span className="text-gray-400 text-[10px]">{createdAtStr}</span>
                    )}
                    {typeof d.date === "string" && d.date && (
                      <span className="text-gray-500 text-[10px]">ת: {fmtDate(d.date)}</span>
                    )}
                    {isLocal && (
                      <span className="bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded text-[10px] font-semibold">מקומי</span>
                    )}
                  </div>
                  <div className="font-semibold text-gray-800 truncate">{d.clientName || "ללא שם"}</div>
                  <div className="text-gray-500 truncate">{d.projectName}</div>
                </div>
                <div className="text-left shrink-0" dir="ltr">
                  <div className="font-bold text-gray-800">{fmt(grand)}</div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button onClick={() => onPreview(d)} className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-2 py-1 rounded transition-colors" title="תצוגה">
                    👁
                  </button>
                  <button onClick={() => handleDuplicate(d)} className="bg-green-50 hover:bg-green-100 text-green-700 px-2 py-1 rounded transition-colors" title="שכפל">
                    📋
                  </button>
                  {d.status === "deleted" ? (
                    <button onClick={() => handleRestore(d.id, d.clientName)} className="bg-teal-50 hover:bg-teal-100 text-teal-700 px-2 py-1 rounded transition-colors" title="שחזר">
                      ↩️
                    </button>
                  ) : (
                    <button onClick={() => handleDelete(d.id, d.clientName)} className="bg-red-50 hover:bg-red-100 text-red-600 px-2 py-1 rounded transition-colors" title="מחק">
                      🗑
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════
//  MODULE 2c – CompanySettings (Tab 3)
// ═══════════════════════════════════════════════

function CompanySettings({ company, onChange }) {
  const set = (field, val) => onChange((p) => ({ ...p, [field]: val }));
  const [counters, setCountersState] = useState(getAllCounters());

  const handleCounterChange = (docType, val) => {
    const num = parseInt(val, 10);
    if (isNaN(num) || num < 0) return;
    setSerial(docType, num);
    setCountersState(getAllCounters());
  };

  const allDocTypes = [
    ...DOCUMENT_TYPES.map((t) => ({ key: t.value, label: t.label })),
  ];

  return (
    <div className="p-4">
      <h3 className="text-sm font-bold text-gray-700 mb-4">הגדרות חברה</h3>
      <div className="settings-grid">
        <div className="settings-field">
          <label className="form-label">שם החברה</label>
          <input
            value={company.name}
            onChange={(e) => set("name", e.target.value)}
            className="form-input"
          />
        </div>
        <div className="settings-field">
          <label className="form-label">תת-כותרת</label>
          <input
            value={company.subtitle}
            onChange={(e) => set("subtitle", e.target.value)}
            className="form-input"
          />
        </div>
        <div className="settings-field full-width">
          <label className="form-label">תיאור שירותים</label>
          <textarea
            rows={3}
            value={company.tradeDesc}
            onChange={(e) => set("tradeDesc", e.target.value)}
            className="form-input"
          />
        </div>
        <div className="settings-field">
          <label className="form-label">טלפון (Tel)</label>
          <input
            value={company.phone}
            onChange={(e) => set("phone", e.target.value)}
            className="form-input"
            dir="ltr"
          />
        </div>
        <div className="settings-field">
          <label className="form-label">פקס (Fax)</label>
          <input
            value={company.fax}
            onChange={(e) => set("fax", e.target.value)}
            className="form-input"
            dir="ltr"
          />
        </div>
        <div className="settings-field">
          <label className="form-label">נייד (Mobile)</label>
          <input
            value={company.mobile}
            onChange={(e) => set("mobile", e.target.value)}
            className="form-input"
            dir="ltr"
          />
        </div>
        <div className="settings-field">
          <label className="form-label">אימייל</label>
          <input
            value={company.email}
            onChange={(e) => set("email", e.target.value)}
            className="form-input"
            dir="ltr"
          />
        </div>
        <div className="settings-field">
          <label className="form-label">אתר</label>
          <input
            value={company.website}
            onChange={(e) => set("website", e.target.value)}
            className="form-input"
            dir="ltr"
          />
        </div>
        <div className="settings-field">
          <label className="form-label">כתובת</label>
          <input
            value={company.address}
            onChange={(e) => set("address", e.target.value)}
            className="form-input"
          />
        </div>
      </div>

      <button
        onClick={() => onChange(DEFAULT_COMPANY)}
        className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-semibold py-2 rounded transition-colors"
      >
        אפס להגדרות ברירת מחדל
      </button>

      {/* ── Serial Counters ── */}
      <div className="mt-6 border-t border-gray-200 pt-4">
        <h3 className="text-sm font-bold text-gray-700 mb-3">מספרי סידוריים</h3>
        <p className="text-[10px] text-gray-400 mb-3"> הגדר את המספר הבא שיוקצה לכל סוג מסמך</p>
        <div className="space-y-2">
          {allDocTypes.map((t) => (
            <div key={t.key} className="flex items-center gap-3">
              <label className="form-label w-32 shrink-0 mb-0">{t.label}</label>
              <input
                type="number"
                min="0"
                value={counters[t.key] || 0}
                onChange={(e) => handleCounterChange(t.key, e.target.value)}
                className="form-input w-24 serial-number-input"
                dir="ltr"
              />
              <span className="text-[10px] text-gray-400">
                הבא: #{String((counters[t.key] || 0) + 1).padStart(4, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
//  MODULE 2d – ManagementPanel (Tab 3)
// ═══════════════════════════════════════════════

function ManagementPanel({ company, onCompanyChange, showToast, onRefreshArchive }) {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [backupTaken, setBackupTaken] = useState(false);
  const [backupLoading, setBackupLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  const handleUnlock = () => {
    if (password === ADMIN_PASSWORD) {
      setUnlocked(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const handleBackup = async () => {
    setBackupLoading(true);
    try {
      const allDocs = await listDocuments(true);
      const timestamp = getTimestampStr();
      const payload = {
        exportedAt: new Date().toISOString(),
        exportedAtFormatted: timestamp,
        version: 1,
        totalDocuments: allDocs.length,
        documents: allDocs,
      };

      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `sharara_backup_${timestamp}.json`;
      a.click();
      URL.revokeObjectURL(url);

      try {
        await exportBackupToFirestore(timestamp, allDocs);
        showToast("גיבוי נשמר בהצלחה לענן והורד כמסמך מקומי", "success");
      } catch {
        showToast("גיבוי הורד למחשב (אך שמירה לענן נכ� himself, ייתכן שאין חיבור Firebase)", "local");
      }

      setBackupTaken(true);
    } catch (err) {
      showToast("שגיאה בייצוא גיבוי: " + err.message, "error");
    } finally {
      setBackupLoading(false);
    }
  };

  const handleReset = async () => {
    if (!backupTaken) {
      showToast("יש לבצע גיבוי לפני איפוס המערכת", "error");
      return;
    }
    if (!window.confirm("האם אתה בטוח שברצונך לאפס את המערכת?\nכל הנתונים יימחקו לצמיתות!")) return;
    if (!window.confirm("אישור סופי – איפוס ימחק את כל המסמכים.\nהאם להמשיך?")) return;

    setResetLoading(true);
    try {
      await resetAllActiveDocuments();
      showToast("המערכת אופסה בהצלחה", "success");
      setBackupTaken(false);
      onRefreshArchive();
    } catch (err) {
      showToast("שגיאה באיפוס: " + err.message, "error");
    } finally {
      setResetLoading(false);
    }
  };

  if (!unlocked) {
    return (
      <div className="p-4 max-w-sm mx-auto mt-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-bold text-gray-700 mb-4 text-center">גישה לפאנל הניהול</h3>
          <p className="text-xs text-gray-500 mb-4 text-center">הזן סיסמה כדי לגשת להגדרות הניהול</p>
          <input
            type="password"
            placeholder="סיסמה"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
            className="form-input text-center mb-2"
            autoFocus
          />
          {passwordError && (
            <p className="text-red-500 text-xs text-center mb-2">סיסמה שגויה</p>
          )}
          <button
            onClick={handleUnlock}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 rounded transition-colors"
          >
            כניסה
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-bold text-gray-700">פאנל ניהול</h3>
        <button
          onClick={() => setUnlocked(false)}
          className="text-xs text-red-500 hover:underline"
        >
          נעול
        </button>
      </div>

      <CompanySettings company={company} onChange={onCompanyChange} />

      <hr className="my-6 border-gray-200" />

      <h3 className="text-sm font-bold text-gray-700 mb-3">גיבוי ואיפוס</h3>

      <button
        onClick={handleBackup}
        disabled={backupLoading}
        className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 text-white text-xs font-semibold py-2 rounded transition-colors mb-2"
      >
        {backupLoading ? "מייצא..." : "שמור גיבוי לפני איפוס"}
      </button>

      <button
        onClick={handleReset}
        disabled={!backupTaken || resetLoading}
        className={`w-full text-xs font-semibold py-2 rounded transition-colors ${
          backupTaken && !resetLoading
            ? "bg-red-600 hover:bg-red-700 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        {resetLoading ? "מאפס..." : "איפוס מערכת"}
      </button>
      {!backupTaken && (
        <p className="text-[10px] text-red-500 mt-1">יש לבצע גיבוי תחילה</p>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════
//  MAIN APP
// ═══════════════════════════════════════════════

const COMPANY_STORAGE_KEY = "sharara_company_settings";
const ADMIN_PASSWORD = "Admin123";

function getTimestampStr() {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const yyyy = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  return `${dd}-${mm}-${yyyy}_${hh}-${min}`;
}

function loadCompany() {
  try {
    const raw = localStorage.getItem(COMPANY_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object" && parsed.name) return parsed;
    }
  } catch {}
  return DEFAULT_COMPANY;
}

export default function App() {
  const [doc, setDoc] = useState(freshDocState);
  const [company, setCompany] = useState(loadCompany);
  const [activeTab, setActiveTab] = useState("new");
  const [previewOverride, setPreviewOverride] = useState(null);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null);
  const [archiveRefreshKey, setArchiveRefreshKey] = useState(0);
  const [showValidation, setShowValidation] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const toastTimerRef = useRef(null);

  const displayDoc = previewOverride || doc;
  const isFormInvalid = useMemo(() => !validateDocument(doc).valid, [doc]);

  const showToast = useCallback((message, type) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToast({ message, type });
    toastTimerRef.current = setTimeout(() => setToast(null), 3000);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(COMPANY_STORAGE_KEY, JSON.stringify(company));
    } catch {}
  }, [company]);

  const handleSaveAndPrint = useCallback(async () => {
    if (saving) return;

    const { valid, errors } = validateDocument(doc);
    if (!valid) {
      setShowValidation(true);
      setValidationErrors(errors);
      showToast("נא למלא את כל שדות החובה המסומנים באדום", "error");
      return;
    }

    setSaving(true);
    setShowValidation(false);
    setValidationErrors({});

    try {
      const snapshot = deepCopyDoc(doc);
      const companySnap = deepCopyCompany(company);
      const result = await saveNewDocument(snapshot, companySnap);
      harvestCustomerProject(snapshot.clientName, snapshot.projectName, snapshot.contactPhone, snapshot.contactFax);
      if (result.source === "local") {
        const counterKey = snapshot.useCustomDocType ? snapshot.customDocType : snapshot.docType;
        if (counterKey) incrementSerial(counterKey);
        showToast(
          "המסמך נשמר בהצלחה באופן מקומי בדפדפן",
          "local"
        );
      } else {
        showToast("המסמך נשמר בהצלחה בענן (מס' " + (result.serial || "") + ")", "success");
      }
      setArchiveRefreshKey((k) => k + 1);
      setDoc(freshDocState());
      window.print();
    } catch (err) {
      showToast("שגיאה בשמירה: " + err.message);
    } finally {
      setSaving(false);
    }
  }, [doc, saving, showToast, company]);

  const handlePreviewArchive = useCallback((archiveEntry) => {
    const loaded = normalizeDoc(
      archiveEntry,
      archiveEntry.id,
      archiveEntry.source || "firebase"
    );
    if (!loaded.items || loaded.items.length === 0) {
      loaded.items = [freshItem()];
    }

    setDoc(loaded);
    setPreviewOverride(loaded);
    setShowValidation(false);
    setValidationErrors({});
    setActiveTab("new");
  }, []);

  const handleLoadToForm = useCallback((archiveEntry) => {
    const loaded = normalizeDoc(
      archiveEntry,
      archiveEntry.id,
      archiveEntry.source || "firebase"
    );
    delete loaded.id;
    delete loaded.docId;
    delete loaded.createdAt;
    delete loaded.updatedAt;
    delete loaded.source;
    if (!loaded.items || loaded.items.length === 0) {
      loaded.items = [freshItem()];
    }
    setDoc(loaded);
    setPreviewOverride(null);
    setActiveTab("new");
  }, []);

  const handleClearPreview = useCallback(() => {
    setPreviewOverride(null);
  }, []);

  useEffect(() => {
    if (showValidation) {
      const { valid, errors } = validateDocument(doc);
      if (valid) {
        setShowValidation(false);
        setValidationErrors({});
      } else {
        setValidationErrors(errors);
      }
    }
  }, [doc, showValidation]);

  const displayLabel = resolveDocLabel(displayDoc);

  return (
    <div className="h-screen flex flex-col">
      {/* ── TOAST ── */}
      <Toast message={toast?.message} type={toast?.type} />

      {/* ── APP HEADER ── */}
      <header className="no-print app-header bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between shrink-0 shadow-sm">
        <div className="flex items-center gap-3">
          <h1 className="text-base font-bold text-gray-800">ShararaDocForge</h1>
          <span className="text-gray-300">|</span>
          <span className="text-xs text-gray-500">{displayLabel}</span>
          {previewOverride && (
            <span className="bg-amber-100 text-amber-700 text-[10px] font-semibold px-2 py-0.5 rounded">
              תצוגה מארכיון
              <button onClick={handleClearPreview} className="mr-1 text-amber-500 hover:text-amber-700 font-bold">&times;</button>
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleSaveAndPrint}
            disabled={saving || isFormInvalid}
            className={`text-white text-xs font-semibold px-4 py-1.5 rounded transition-colors ${
              saving || isFormInvalid
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            title={isFormInvalid ? "נא למלא שם המזמין ולפחות תיאור סעיף אחד" : ""}
          >
            {saving ? "שומר..." : "שמירה & הדפסה"}
          </button>
        </div>
      </header>

      {/* ── SPLIT PANE ── */}
      <div className="flex flex-1 overflow-hidden">
        {/* ── LEFT: EDITOR PANEL ── */}
        <aside className="no-print editor-panel bg-white border-l border-gray-200 w-[380px] min-w-[340px] flex flex-col overflow-hidden">
          {/* Three Tabs */}
          <div className="no-print app-tabs flex border-b border-gray-200 shrink-0">
            <button
              onClick={() => setActiveTab("new")}
              className={`flex-1 py-2 text-xs font-semibold transition-colors ${
                activeTab === "new"
                  ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50/50"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              מסמך חדש
            </button>
            <button
              onClick={() => setActiveTab("archive")}
              className={`flex-1 py-2 text-xs font-semibold transition-colors ${
                activeTab === "archive"
                  ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50/50"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              ארכיון ומעקב
            </button>
            <button
              onClick={() => setActiveTab("management")}
              className={`flex-1 py-2 text-xs font-semibold transition-colors ${
                activeTab === "management"
                  ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50/50"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              ניהול
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto">
            {activeTab === "new" && (
              <div className="p-4">
                <DocumentForm
                  doc={doc}
                  onChange={setDoc}
                  showValidation={showValidation}
                  validationErrors={validationErrors}
                />
              </div>
            )}
            {activeTab === "archive" && (
              <ArchiveView
                onLoadToForm={handleLoadToForm}
                onPreview={handlePreviewArchive}
                refreshKey={archiveRefreshKey}
              />
            )}
            {activeTab === "management" && (
              <ManagementPanel
                company={company}
                onCompanyChange={setCompany}
                showToast={showToast}
                onRefreshArchive={() => setArchiveRefreshKey((k) => k + 1)}
              />
            )}
          </div>
        </aside>

        {/* ── RIGHT: PREVIEW PANEL ── */}
        <main className="preview-panel flex-1 overflow-y-auto bg-gray-100 p-6">
          <DocumentPreview company={company} doc={displayDoc} />
        </main>
      </div>
    </div>
  );
}
