"use client";

import { useEffect, useState, useMemo } from "react";
import { portfolioData } from "@/data/portfolioData";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Social & Contact" | "Actions";
  action: () => void;
  shortcut?: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Global listener for Cmd+K and custom event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleOpenCommand = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleOpenCommand);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleOpenCommand);
    };
  }, []);

  const commands: CommandItem[] = useMemo(
    () => [
      {
        id: "nav-activity",
        title: "Go to 01 Activity (GitHub Graph)",
        category: "Navigation",
        action: () => {
          window.location.hash = "activity";
          setIsOpen(false);
        },
      },
      {
        id: "nav-about",
        title: "Go to 02 About",
        category: "Navigation",
        action: () => {
          window.location.hash = "about";
          setIsOpen(false);
        },
      },
      {
        id: "nav-skills",
        title: "Go to 03 Stack & Skills",
        category: "Navigation",
        action: () => {
          window.location.hash = "skills";
          setIsOpen(false);
        },
      },
      {
        id: "nav-experience",
        title: "Go to 04 Experience",
        category: "Navigation",
        action: () => {
          window.location.hash = "experience";
          setIsOpen(false);
        },
      },
      {
        id: "nav-education",
        title: "Go to 05 Education",
        category: "Navigation",
        action: () => {
          window.location.hash = "education";
          setIsOpen(false);
        },
      },
      {
        id: "nav-projects",
        title: "Go to 06 Projects",
        category: "Navigation",
        action: () => {
          window.location.hash = "projects";
          setIsOpen(false);
        },
      },
      {
        id: "social-github",
        title: "Open GitHub Profile (@FuadTesfaye)",
        category: "Social & Contact",
        action: () => {
          window.open(portfolioData.personal.githubUrl, "_blank");
          setIsOpen(false);
        },
      },
      {
        id: "social-linkedin",
        title: "Open LinkedIn Profile",
        category: "Social & Contact",
        action: () => {
          window.open(portfolioData.personal.linkedinUrl, "_blank");
          setIsOpen(false);
        },
      },
      {
        id: "social-twitter",
        title: "Open X / Twitter (@FuadTesfaye)",
        category: "Social & Contact",
        action: () => {
          window.open(portfolioData.personal.twitterUrl, "_blank");
          setIsOpen(false);
        },
      },
      {
        id: "action-copy-email",
        title: `Copy Email (${portfolioData.personal.email})`,
        category: "Actions",
        action: () => {
          navigator.clipboard.writeText(portfolioData.personal.email);
          setCopiedText("Email copied to clipboard!");
          setTimeout(() => setCopiedText(null), 2000);
        },
      },
      {
        id: "action-copy-phone",
        title: `Copy Phone (${portfolioData.personal.phone})`,
        category: "Actions",
        action: () => {
          navigator.clipboard.writeText(portfolioData.personal.phone);
          setCopiedText("Phone copied to clipboard!");
          setTimeout(() => setCopiedText(null), 2000);
        },
      },
      {
        id: "action-toggle-theme",
        title: "Toggle Theme (Blue / White)",
        category: "Actions",
        action: () => {
          const current = document.documentElement.getAttribute("data-theme");
          const next = current === "dark" ? "light" : "dark";
          localStorage.setItem("theme", next);
          document.documentElement.setAttribute("data-theme", next);
          window.dispatchEvent(new Event("storage"));
          setIsOpen(false);
        },
      },
    ],
    []
  );

  const filteredCommands = useMemo(() => {
    if (!query.trim()) return commands;
    const lower = query.toLowerCase();
    return commands.filter(
      (c) =>
        c.title.toLowerCase().includes(lower) ||
        c.category.toLowerCase().includes(lower)
    );
  }, [commands, query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-start justify-center pt-20 sm:pt-28 px-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-xl bg-[var(--bg)] border-2 border-[var(--ink)] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--ink)]">
          <span className="font-mono text-sm text-[var(--soft)]">⌘</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a command to run..."
            className="w-full bg-transparent text-[var(--ink)] font-serif text-lg placeholder:text-[var(--soft)] outline-none"
          />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="font-mono text-xs border border-[var(--ink)]/40 px-2 py-0.5 text-[var(--soft)] hover:text-[var(--ink)]"
          >
            ESC
          </button>
        </div>

        {/* Toast alert when copied */}
        {copiedText && (
          <div className="px-4 py-2 bg-[var(--ink)] text-[var(--bg)] text-xs font-mono font-bold text-center">
            {copiedText}
          </div>
        )}

        {/* Command List */}
        <div className="max-h-80 overflow-y-auto divide-y divide-[var(--ink)]/15">
          {filteredCommands.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm font-mono text-[var(--soft)]">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd) => (
              <button
                key={cmd.id}
                type="button"
                onClick={cmd.action}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs opacity-60 uppercase tracking-wider group-hover:text-[var(--bg)]">
                    {cmd.category}
                  </span>
                  <span className="font-serif text-base font-medium">
                    {cmd.title}
                  </span>
                </div>
                <span className="font-mono text-xs opacity-50 group-hover:opacity-100">
                  ↵
                </span>
              </button>
            ))
          )}
        </div>

        {/* Palette Footer */}
        <div className="px-4 py-2.5 bg-[var(--ink)]/5 border-t border-[var(--ink)]/20 flex items-center justify-between text-xs font-mono text-[var(--soft)]">
          <span>Navigate with mouse or tap</span>
          <span>Fuad Tesfaye · Portfolio OS</span>
        </div>
      </div>
    </div>
  );
}
