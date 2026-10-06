"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";

export default function ContactSection() {
  const { personal } = portfolioData;
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  return (
    <section id="contact" className="w-full mt-24 pt-12">
      {/* Editorial Number & Status Tag (Free & Borderless) */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-mono text-[var(--soft)] tracking-wider">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[var(--ink)]">07 / CONTACT</span>
          <span className="opacity-50">·</span>
          <span lang="ar" dir="rtl" className="font-serif text-base text-[var(--ink)]">
            تواصل
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-[var(--ink)]">
            AVAILABLE FOR ROLES & ARCHITECTURE
          </span>
          <span className="opacity-50 hidden sm:inline">·</span>
          <span className="hidden sm:inline">Addis Ababa & Remote Worldwide</span>
        </div>
      </div>

      {/* Grand Open Invitation Headline */}
      <div className="mt-8 max-w-4xl">
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-[-0.015em] text-[var(--ink)]">
          Have an ambitious platform to build, or looking for an engineering leader?
        </h2>
        <p className="font-serif italic text-lg sm:text-2xl text-[var(--soft)] mt-4 max-w-2xl leading-relaxed">
          Whether it&apos;s high-throughput microservices, multi-agent AI orchestration, or leading a world-class engineering team, let&apos;s talk.
        </p>
      </div>

      {/* Massive Free-Floating Email Link */}
      <div className="mt-10 sm:mt-14">
        <a
          href={`mailto:${personal.email}`}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--ink)] hover:underline inline-block break-all transition-colors"
          title={`Send an email to ${personal.email}`}
        >
          {personal.email} <span className="inline-block font-sans font-light">↗</span>
        </a>

        {/* Quick Action Pills */}
        <div className="flex flex-wrap items-center gap-3 mt-4 text-xs sm:text-sm font-mono">
          <button
            type="button"
            onClick={() => copyToClipboard(personal.email, "email")}
            className="px-3 py-1.5 bg-[var(--ink)] text-[var(--bg)] font-semibold hover:opacity-90 cursor-pointer transition-opacity"
          >
            {copiedItem === "email" ? "COPIED TO CLIPBOARD ✓" : "COPY EMAIL"}
          </button>

          <a
            href={`mailto:${personal.email}?subject=Engineering%20Inquiry`}
            className="px-3 py-1.5 border border-[var(--ink)]/40 hover:border-[var(--ink)] text-[var(--ink)] cursor-pointer transition-colors"
          >
            COMPOSE EMAIL ↗
          </a>

          <span className="text-[var(--soft)] text-xs ml-1">
            Usually replies within 24 hours
          </span>
        </div>
      </div>

      {/* Wide Open Channels Grid (Free & Borderless) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mt-16 pt-8 border-t border-[var(--ink)]/20">
        {/* Telephone / WhatsApp */}
        <div>
          <span className="block text-xs uppercase font-mono tracking-widest text-[var(--soft)] mb-1">
            Telephone & WhatsApp
          </span>
          <div className="flex items-baseline gap-2">
            <a
              href={`tel:${personal.phone.replace(/\s+/g, "")}`}
              className="font-serif text-xl sm:text-2xl font-bold hover:underline text-[var(--ink)]"
            >
              {personal.phone}
            </a>
            <button
              type="button"
              onClick={() => copyToClipboard(personal.phone, "phone")}
              className="text-xs font-mono text-[var(--soft)] hover:text-[var(--ink)] cursor-pointer"
            >
              {copiedItem === "phone" ? "(Copied)" : "(Copy)"}
            </button>
          </div>
          <p className="text-xs font-mono text-[var(--soft)] mt-1">
            Addis Ababa, Ethiopia · UTC+3 (EAT)
          </p>
        </div>

        {/* Public Profiles */}
        <div>
          <span className="block text-xs uppercase font-mono tracking-widest text-[var(--soft)] mb-1">
            Public Profiles & Code
          </span>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-base font-serif font-bold text-[var(--ink)] mt-1">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub ↗
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn ↗
            </a>
            <a
              href={personal.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              X (Twitter) ↗
            </a>
          </div>
          <p className="text-xs font-mono text-[var(--soft)] mt-1">
            Active repositories & contributions
          </p>
        </div>

        {/* Status & Scope */}
        <div>
          <span className="block text-xs uppercase font-mono tracking-widest text-[var(--soft)] mb-1">
            Engagement Scope
          </span>
          <p className="font-serif text-lg font-normal text-[var(--ink)] leading-snug">
            Full-Time Engineering · Technical Architecture · Advisory
          </p>
          <p className="text-xs font-mono text-[var(--soft)] mt-1">
            Open to relocations & remote worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
