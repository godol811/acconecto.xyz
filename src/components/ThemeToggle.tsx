"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeToggleProps = {
  readonly label: string;
};

function currentTheme(): Theme {
  if (typeof document === "undefined") {
    return "dark";
  }
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export function ThemeToggle({ label }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(currentTheme());
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem("aconecto-theme", next);
    } catch {
      // Ignore storage failures (private mode etc.)
    }
    setTheme(next);
  }

  return (
    <button
      aria-label={label}
      className="theme-toggle"
      onClick={toggle}
      title={label}
      type="button"
    >
      {theme === "dark" ? (
        <Sun aria-hidden="true" size={16} />
      ) : (
        <Moon aria-hidden="true" size={16} />
      )}
    </button>
  );
}
