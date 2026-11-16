"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  function toggleTheme() {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
    } catch {
      // Keep the current page's theme when storage is unavailable.
    }
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme}>
      <span className="theme-to-light">
        <Sun size={19} aria-hidden="true" />
        <span className="sr-only">Switch to light mode</span>
      </span>
      <span className="theme-to-dark">
        <Moon size={19} aria-hidden="true" />
        <span className="sr-only">Switch to dark mode</span>
      </span>
    </button>
  );
}
