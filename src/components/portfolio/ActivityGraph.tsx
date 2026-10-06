"use client";

import { useState } from "react";
import { contributionDays, contributionMonths, totalContributions } from "@/data/contributions";

export default function ActivityGraph() {
  const [hoveredDay, setHoveredDay] = useState<{
    date: string;
    count: number;
    x: number;
    y: number;
  } | null>(null);

  // Group days into columns of 7 days (Sunday - Saturday)
  const columns: typeof contributionDays[] = [];
  for (let i = 0; i < contributionDays.length; i += 7) {
    columns.push(contributionDays.slice(i, i + 7));
  }

  return (
    <section className="blk" id="activity">
      <div className="side">
        01 Activity
        <span className="block text-[13px] opacity-75 font-normal">نشاط</span>
      </div>

      <div className="body">
        <div className="lead">
          <div className="cap" aria-hidden="true">
            A
          </div>
          <p>
            <span style={{ position: "absolute", left: "-9999px" }}>A</span>
            {"ctive open-source development and high-velocity engineering telemetry."}
          </p>
        </div>

        <p className="small">
          Real-time GitHub activity tracking across distributed repositories, open-source tooling, and client deliverables.
        </p>

        {/* The GitHub Heatmap Container */}
        <div className="mt-8 border border-[var(--ink)] p-5 sm:p-6 bg-transparent relative overflow-hidden">
          <div className="overflow-x-auto pb-2">
            <div className="min-w-[760px]">
              {/* Month Labels */}
              <div className="flex text-xs font-mono text-[var(--soft)] mb-2 pl-4">
                {contributionMonths.map((m) => (
                  <span
                    key={m.name}
                    className="inline-block"
                    style={{ width: `${100 / 12}%` }}
                  >
                    {m.name}
                  </span>
                ))}
              </div>

              {/* Grid of Squares */}
              <div className="flex gap-[3.5px] items-start">
                {columns.map((col, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-[3.5px]">
                    {col.map((day) => {
                      const levelClasses = [
                        "bg-[var(--ink)]/5 dark:bg-white/5 border border-[var(--ink)]/15",
                        "bg-[var(--ink)]/25 dark:bg-[var(--soft)]/40",
                        "bg-[var(--ink)]/50 dark:bg-[var(--soft)]/75",
                        "bg-[var(--ink)]/75 dark:bg-white/80",
                        "bg-[var(--ink)] dark:bg-white",
                      ][day.level] || "bg-[var(--ink)]/5";

                      return (
                        <div
                          key={day.date}
                          onMouseEnter={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            setHoveredDay({
                              date: day.date,
                              count: day.count,
                              x: rect.left + rect.width / 2,
                              y: rect.top - 8,
                            });
                          }}
                          onMouseLeave={() => setHoveredDay(null)}
                          className={`w-[11.5px] h-[11.5px] rounded-[1.5px] transition-transform duration-100 hover:scale-125 cursor-pointer ${levelClasses}`}
                          aria-label={`${day.count} contributions on ${day.date}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Tooltip */}
          {hoveredDay && (
            <div className="mt-3 text-xs font-mono text-[var(--ink)] bg-[var(--bg)] border border-[var(--ink)] px-2.5 py-1 inline-block">
              <span className="font-bold">
                {hoveredDay.count === 0
                  ? "No contributions"
                  : `${hoveredDay.count} contribution${hoveredDay.count === 1 ? "" : "s"}`}
              </span>{" "}
              on {hoveredDay.date}
            </div>
          )}

          {/* Footer Bar */}
          <div className="mt-5 pt-4 border-t border-[var(--ink)]/25 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[var(--soft)]">
            <span className="text-[var(--ink)] font-semibold text-sm">
              {totalContributions.toLocaleString()} contributions in the last year on GitHub
            </span>

            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="w-3 h-3 rounded-[1px] bg-[var(--ink)]/5 dark:bg-white/5 border border-[var(--ink)]/20" />
              <div className="w-3 h-3 rounded-[1px] bg-[var(--ink)]/25 dark:bg-[var(--soft)]/40" />
              <div className="w-3 h-3 rounded-[1px] bg-[var(--ink)]/50 dark:bg-[var(--soft)]/75" />
              <div className="w-3 h-3 rounded-[1px] bg-[var(--ink)]/75 dark:bg-white/80" />
              <div className="w-3 h-3 rounded-[1px] bg-[var(--ink)] dark:bg-white" />
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
