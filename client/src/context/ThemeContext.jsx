import { useState, useEffect, createContext, useContext } from "react";
const ThemeContext = createContext();

// Each style is a full visual identity (palette, fonts, shapes) plus a layout:
// "side" = left sidebar, "top" = horizontal top navigation.
export const STYLES = [
  { id: "aurora", name: "Aurora", layout: "side", swatch: "#0d8b72" },
  { id: "paper", name: "Paper", layout: "top", swatch: "#b4532a" },
  { id: "neon", name: "Neon", layout: "side", swatch: "#d946ef" },
  { id: "sunset", name: "Sunset", layout: "top", swatch: "#f97316" },
  { id: "brutal", name: "Brutal", layout: "side", swatch: "#facc15" },
  { id: "ocean", name: "Ocean", layout: "side", swatch: "#0ea5e9" },
  { id: "terminal", name: "Terminal", layout: "side", swatch: "#22c55e" },
  { id: "mono", name: "Mono", layout: "top", swatch: "#e5271b" },
  { id: "candy", name: "Candy", layout: "side", swatch: "#a78bfa" },
  { id: "luxe", name: "Luxe", layout: "top", swatch: "#d4af37" },
];

const read = (key, fallback, allowed) => {
  try {
    const value = localStorage.getItem(key);
    return allowed.includes(value) ? value : fallback;
  } catch {
    return fallback;
  }
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() =>
    read("portfolio-theme", "light", ["light", "dark"])
  );
  const [style, setStyle] = useState(() =>
    read("portfolio-style", "aurora", STYLES.map((s) => s.id))
  );

  useEffect(() => {
    try {
      localStorage.setItem("portfolio-theme", theme);
      localStorage.setItem("portfolio-style", style);
    } catch {
      /* storage unavailable */
    }
  }, [theme, style]);

  const layout = STYLES.find((s) => s.id === style)?.layout ?? "side";

  return (
    <ThemeContext.Provider value={{ theme, setTheme, style, setStyle, layout }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
