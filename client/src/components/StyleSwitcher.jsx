import React, { useEffect, useRef, useState } from "react";
import "./styleSwitcher.css";
import { STYLES, useTheme } from "../context/ThemeContext.jsx";

function StyleSwitcher() {
  const { style, setStyle } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = STYLES.find((s) => s.id === style);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="style-switcher" ref={ref}>
      <button
        type="button"
        className="style-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className="style-dot" style={{ "--dot": current?.swatch }} />
        <span className="style-trigger-label">{current?.name}</span>
        <span className={`style-chevron ${open ? "is-open" : ""}`}>▾</span>
      </button>

      {open && (
        <ul className="style-menu" role="listbox" aria-label="Design style">
          {STYLES.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                role="option"
                aria-selected={s.id === style}
                className={`style-option ${s.id === style ? "is-active" : ""}`}
                onClick={() => {
                  setStyle(s.id);
                  setOpen(false);
                }}
              >
                <span className="style-dot" style={{ "--dot": s.swatch }} />
                <span>{s.name}</span>
                <span className="style-hint">
                  {s.layout === "top" ? "top nav" : "sidebar"}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StyleSwitcher;
