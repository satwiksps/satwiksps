"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  function toggleTheme() {
    const dark = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("portfolio-theme", dark ? "dark" : "light"); } catch { /* The toggle still works when storage is disabled. */ }
  }

  return (
    <button type="button" onClick={toggleTheme} aria-label="Toggle light and dark theme" title="Toggle light and dark theme" className="theme-toggle flex size-11 shrink-0 items-center justify-center rounded-full border bg1 text2 transition-colors hover:bg-[var(--bg2)] hover:text-[var(--accent)]">
      <Sun size={18} className="theme-sun" aria-hidden="true" />
      <Moon size={18} className="theme-moon" aria-hidden="true" />
    </button>
  );
}
