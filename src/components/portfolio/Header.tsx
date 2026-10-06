"use client";

import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { personal, navLinks } = portfolioData;
  const [localTime, setLocalTime] = useState("21:51");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Africa/Addis_Ababa",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <header className="flex flex-col gap-4 pt-8">
      {/* Top Status Bar / Eyebrow */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono tracking-wider text-[var(--soft)] border-b border-[var(--ink)]/30 pb-3 w-full">
        <div className="flex items-center gap-2.5">
          <span className="font-semibold text-[var(--ink)]">ADDIS ABABA</span>
          <span className="opacity-50">·</span>
          <span>{localTime} LOCAL</span>
          <span className="opacity-50">·</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
            {personal.status}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openCommandPalette}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs border border-[var(--ink)]/30 hover:border-[var(--ink)] text-[var(--ink)] cursor-pointer transition-colors"
            title="Press Cmd+K or Ctrl+K to search"
          >
            <span>Search…</span>
            <kbd className="text-[10px] bg-[var(--ink)]/10 px-1 py-0.5 rounded-[2px]">
              ⌘K
            </kbd>
          </button>
          <ThemeToggle />
        </div>
      </div>

      {/* Main Header Row */}
      <div className="flex flex-wrap items-end justify-between gap-4 w-full pt-1">
        <div>
          <a className="logo" href="#top">
            <span className="flex items-baseline gap-2.5">
              <span>{personal.name}</span>
              <span
                lang="ar"
                dir="rtl"
                className="font-serif text-2xl font-normal opacity-85 select-none"
                title="Fu'ayd in Arabic"
              >
                {personal.arabicName}
              </span>
            </span>
            <small>{personal.title}</small>
          </a>
        </div>

        {/* Navigation Anchors */}
        <nav aria-label="Main" className="pt-2">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
