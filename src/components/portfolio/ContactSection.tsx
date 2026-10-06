"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";

export default function ContactSection() {
  const { personal } = portfolioData;
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      subject.trim() || `Inquiry from ${name || "Portfolio Visitor"}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="blk" id="contact">
      <div className="side">
        07 Contact
        <span className="block text-[13px] opacity-75 font-normal">تواصل</span>
      </div>

      <div className="body">
        {/* Editorial Lead Block */}
        <div className="lead">
          <div className="cap" aria-hidden="true">
            W
          </div>
          <p>
            <span style={{ position: "absolute", left: "-9999px" }}>W</span>
            {"hether you have an ambitious platform to build, an engineering opportunity, or a technical inquiry, I'm always open to discussing new work."}
          </p>
        </div>

        {/* Availability Pill */}
        <div className="mt-4 pt-3 border-t border-[var(--ink)]/20 text-xs sm:text-sm font-mono flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-[var(--ink)]">
            AVAILABLE FOR ROLES & HIGH-IMPACT ARCHITECTURE
          </span>
          <span className="opacity-50">·</span>
          <span className="text-[var(--soft)]">Remote Worldwide</span>
        </div>

        {/* Contact Grid: Direct Channels on Left, Clean Message Box on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-10 pt-6 border-t border-[var(--ink)]">
          {/* Direct Channels Column (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <span className="block text-xs uppercase font-mono tracking-wider text-[var(--soft)]">
                Direct Email
              </span>
              <div className="flex items-center gap-2 mt-1">
                <a
                  href={`mailto:${personal.email}`}
                  className="font-serif text-lg font-bold hover:underline"
                >
                  {personal.email}
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(personal.email, "email")}
                  className="text-xs font-mono border border-[var(--ink)]/30 hover:border-[var(--ink)] px-2 py-0.5 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedItem === "email" ? "COPIED ✓" : "COPY"}
                </button>
              </div>
              <p className="text-xs font-mono text-[var(--soft)] mt-1">
                Usually replies within 24 hours
              </p>
            </div>

            <div>
              <span className="block text-xs uppercase font-mono tracking-wider text-[var(--soft)]">
                Telephone & WhatsApp
              </span>
              <div className="flex items-center gap-2 mt-1">
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                  className="font-serif text-lg font-bold hover:underline"
                >
                  {personal.phone}
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(personal.phone, "phone")}
                  className="text-xs font-mono border border-[var(--ink)]/30 hover:border-[var(--ink)] px-2 py-0.5 cursor-pointer"
                  title="Copy phone to clipboard"
                >
                  {copiedItem === "phone" ? "COPIED ✓" : "COPY"}
                </button>
              </div>
              <p className="text-xs font-mono text-[var(--soft)] mt-1">
                Addis Ababa, Ethiopia · UTC+3 (EAT)
              </p>
            </div>

            <div>
              <span className="block text-xs uppercase font-mono tracking-wider text-[var(--soft)]">
                Public Profiles
              </span>
              <div className="flex flex-col gap-1.5 mt-2 text-sm font-mono">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center justify-between border-b border-[var(--ink)]/15 pb-1"
                >
                  <span>GitHub (@FuadTesfaye)</span>
                  <span>↗</span>
                </a>
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center justify-between border-b border-[var(--ink)]/15 pb-1"
                >
                  <span>LinkedIn (Fuad Tesfaye)</span>
                  <span>↗</span>
                </a>
                <a
                  href={personal.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center justify-between border-b border-[var(--ink)]/15 pb-1"
                >
                  <span>X / Twitter (@FuadTesfaye)</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Clean Message Box Form (7 cols) */}
          <div className="md:col-span-7 border border-[var(--ink)] p-6 bg-transparent">
            <h3 className="font-serif text-xl font-bold mb-1">
              Send a Direct Note
            </h3>
            <p className="text-xs font-mono text-[var(--soft)] mb-5">
              Draft a message below to launch in your preferred email client or copy directly.
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4 text-sm font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase text-[var(--soft)] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Jane Doe"
                    className="w-full bg-transparent border border-[var(--ink)]/40 px-3 py-2 text-[var(--ink)] placeholder:text-[var(--soft)]/50 focus:border-[var(--ink)] outline-none text-sm font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase text-[var(--soft)] mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. jane@company.com"
                    className="w-full bg-transparent border border-[var(--ink)]/40 px-3 py-2 text-[var(--ink)] placeholder:text-[var(--soft)]/50 focus:border-[var(--ink)] outline-none text-sm font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase text-[var(--soft)] mb-1">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. New Project / Engineering Role / Consultation"
                  className="w-full bg-transparent border border-[var(--ink)]/40 px-3 py-2 text-[var(--ink)] placeholder:text-[var(--soft)]/50 focus:border-[var(--ink)] outline-none text-sm font-sans"
                />
              </div>

              <div>
                <label className="block text-xs uppercase text-[var(--soft)] mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your project, timeline, or inquiry..."
                  className="w-full bg-transparent border border-[var(--ink)]/40 px-3 py-2 text-[var(--ink)] placeholder:text-[var(--soft)]/50 focus:border-[var(--ink)] outline-none text-sm font-sans resize-y"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  className="bg-[var(--ink)] text-[var(--bg)] px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider hover:opacity-90 cursor-pointer transition-opacity"
                >
                  Send via Email ↗
                </button>

                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(
                      `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
                      "form"
                    )
                  }
                  className="border border-[var(--ink)]/40 hover:border-[var(--ink)] px-3 py-2 text-xs font-mono cursor-pointer"
                >
                  {copiedItem === "form" ? "COPIED MESSAGE ✓" : "Copy Draft"}
                </button>
              </div>

              {submitted && (
                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-mono mt-2">
                  Draft opened in your email client! If it didn&apos;t open, you can send directly to {personal.email}.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Grand Editorial Call-To-Action */}
        <div className="mt-12 pt-8 border-t border-[var(--ink)] flex flex-wrap items-baseline justify-between gap-4">
          <a
            className="big-cta"
            href={`mailto:${personal.email}`}
            title="Send an email to Fuad Tesfaye"
          >
            Say hello ↗
          </a>

          <span className="text-xs font-mono text-[var(--soft)]">
            Open for worldwide remote roles & contracts
          </span>
        </div>
      </div>
    </section>
  );
}
