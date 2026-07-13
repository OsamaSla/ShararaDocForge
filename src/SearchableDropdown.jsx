import { useState, useRef, useEffect, useCallback, useMemo } from "react";

export default function SearchableDropdown({
  value,
  onChange,
  options = [],
  placeholder = "",
  className = "",
  required = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const normalizedOptions = useMemo(
    () => options.map((o) => (typeof o === "string" ? o : o.value)),
    [options]
  );

  const displayValue = value || "";

  const filteredOptions = useMemo(() => {
    if (!query.trim()) return normalizedOptions;
    const q = query.trim().toLowerCase();
    return normalizedOptions.filter((opt) =>
      opt.toLowerCase().includes(q)
    );
  }, [normalizedOptions, query]);

  const highlightMatch = useCallback((text) => {
    if (!query.trim()) return text;
    const q = query.trim();
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <strong className="sd-highlight">{text.slice(idx, idx + q.length)}</strong>
        {text.slice(idx + q.length)}
      </>
    );
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputClick = () => {
    setIsOpen(true);
    setQuery("");
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (!isOpen) setIsOpen(true);
  };

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
    setQuery("");
  };

  const handleCreateNew = () => {
    const trimmed = query.trim();
    if (!trimmed) return;
    onChange(trimmed);
    setIsOpen(false);
    setQuery("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      setQuery("");
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (isOpen && filteredOptions.length > 0) {
        handleSelect(filteredOptions[0]);
      } else if (isOpen && query.trim()) {
        handleCreateNew();
      }
    }
  };

  return (
    <div ref={containerRef} className={`sd-container ${className}`}>
      <div
        className="sd-trigger"
        onClick={handleInputClick}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <input
          ref={inputRef}
          type="text"
          value={isOpen ? query : displayValue}
          onChange={handleInputChange}
          onFocus={() => {
            if (!isOpen) setIsOpen(true);
            setQuery("");
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="sd-input"
          autoComplete="off"
        />
        <span className={`sd-chevron ${isOpen ? "sd-chevron-open" : ""}`}>
          &#9662;
        </span>
      </div>
      {isOpen && (
        <ul className="sd-list" role="listbox">
          {filteredOptions.length === 0 ? (
            query.trim() ? (
              <li
                className="sd-option sd-option-create"
                onClick={handleCreateNew}
                role="option"
              >
                <span className="sd-create-icon">+</span> צור "{query.trim()}"
              </li>
            ) : (
              <li className="sd-empty">אין תוצאות</li>
            )
          ) : (
            filteredOptions.map((opt) => (
              <li
                key={opt}
                className={`sd-option ${
                  opt.toLowerCase() === displayValue.toLowerCase()
                    ? "sd-option-active"
                    : ""
                }`}
                onClick={() => handleSelect(opt)}
                role="option"
                aria-selected={opt === displayValue}
              >
                {highlightMatch(opt)}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
