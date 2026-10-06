"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";

export default function ProjectsSection() {
  const { projectCategories, projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState("All Works");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All Works") return true;
    return p.categoryGroup === activeFilter;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const catalogProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section className="blk" id="projects">
      <div className="side">
        06 Projects
        <span className="block text-[13px] opacity-75 font-normal">مشاريع</span>
      </div>

      <div className="body">
        <div className="lead">
          <div className="cap" aria-hidden="true">
            P
          </div>
          <p>
            <span style={{ position: "absolute", left: "-9999px" }}>P</span>
            {"roduction software systems, autonomous AI agents, and developer tooling."}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mt-6 pt-2">
          {projectCategories.map((cat) => {
            const isActive = activeFilter === cat.label;
            return (
              <button
                key={cat.label}
                type="button"
                onClick={() => setActiveFilter(cat.label)}
                className={`text-xs font-mono px-3 py-1.5 border transition-all cursor-pointer ${
                  isActive
                    ? "bg-[var(--ink)] text-[var(--bg)] border-[var(--ink)] font-semibold"
                    : "border-[var(--ink)]/30 text-[var(--soft)] hover:border-[var(--ink)]"
                }`}
              >
                {cat.label} <span className="opacity-75">({cat.count})</span>
              </button>
            );
          })}
        </div>

        {/* Top Featured Projects */}
        <div className="rows mt-8">
          {featuredProjects.map((p) => (
            <div key={p.id} className="row">
              <div className="y">
                <span className="text-xl font-bold font-serif">{p.number}</span>
                <div className="text-xs font-mono opacity-80 mt-1">{p.year}</div>
                <div className="text-[11px] font-mono opacity-70 uppercase tracking-wider mt-0.5">
                  {p.category}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-2xl font-bold">{p.title}</h3>
                  {p.badge && (
                    <span className="text-xs font-mono border border-[var(--ink)] px-2 py-0.5 text-[var(--ink)]">
                      {p.badge}
                    </span>
                  )}
                </div>

                <p className="font-semibold text-base mt-2 text-[var(--ink)] leading-snug">
                  {p.summary}
                </p>

                {p.bullets && (
                  <ul className="mt-3 space-y-1 list-disc pl-5 text-sm text-[var(--soft)] leading-relaxed">
                    {p.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-1.5 mt-3 pt-1">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono border border-[var(--ink)]/25 px-2 py-0.5 rounded-[2px] text-[var(--soft)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-4 pt-2 text-sm font-semibold">
                  {p.launchUrl && (
                    <a
                      href={p.launchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:opacity-75"
                    >
                      Launch Project ↗
                    </a>
                  )}
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:opacity-75"
                    >
                      Source Code ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Catalog Index of remaining systems */}
        {catalogProjects.length > 0 && (
          <div className="mt-12 pt-8 border-t border-[var(--ink)]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-serif font-bold text-lg">Catalog Index</span>
              <span className="font-mono text-xs text-[var(--soft)]">
                {catalogProjects.length} systems
              </span>
            </div>

            <div className="divide-y divide-[var(--ink)]/25 border-y border-[var(--ink)]/25">
              {catalogProjects.map((p) => {
                const isExpanded = expandedId === p.id;
                return (
                  <div key={p.id} className="py-2.5">
                    <button
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : p.id)}
                      className="w-full flex items-center justify-between text-left hover:opacity-75 transition-opacity cursor-pointer group"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs opacity-60 w-6">
                          {p.number}
                        </span>
                        <span className="font-serif text-lg font-medium group-hover:underline">
                          {p.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-xs font-mono text-[var(--soft)]">
                        <span className="hidden sm:inline border border-[var(--ink)]/20 px-1.5 py-0.5">
                          {p.category}
                        </span>
                        <span>{p.year}</span>
                        <span className="text-sm font-sans">{isExpanded ? "−" : "↗"}</span>
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="mt-2.5 pl-10 pr-2 pb-2 text-sm text-[var(--soft)] space-y-2">
                        <p>{p.summary}</p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {p.tech.map((t) => (
                            <span
                              key={t}
                              className="text-[11px] font-mono border border-[var(--ink)]/20 px-1.5 py-0.5"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        {p.githubUrl && (
                          <div className="pt-1">
                            <a
                              href={p.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-mono underline font-semibold text-[var(--ink)]"
                            >
                              View Repository ↗
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
