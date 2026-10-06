"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    media.removeEventListener("change", callback);
  };
}

function getSnapshot(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    return "dark";
  }
  return "light";
}

function getServerSnapshot(): "light" | "dark" {
  return "light";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="theme-toggle-btn"
      aria-label={`Switch to ${theme === "light" ? "Blue" : "White"} theme`}
      title={`Switch to ${theme === "light" ? "Blue (Blueprint)" : "White"} theme`}
    >
      {theme === "light" ? "BLUE" : "WHITE"}
    </button>
  );
}
