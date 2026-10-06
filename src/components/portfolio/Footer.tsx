import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="mt-28 border-t border-[var(--ink)] pt-8 pb-12 text-sm text-[var(--soft)] flex flex-col gap-6">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <span className="font-serif font-bold text-lg text-[var(--ink)] block">
            {personal.name}
          </span>
          <span className="text-xs font-mono">{personal.title}</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
          <a
            href={`mailto:${personal.email}`}
            className="hover:underline text-[var(--ink)] font-semibold"
          >
            {personal.email} ↗
          </a>
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
            X ↗
          </a>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono pt-4 border-t border-[var(--ink)]/20">
        <span>© 2026 {personal.name} · Built in Addis Ababa</span>
        <div className="flex items-center gap-3">
          <span>build b753205</span>
          <span>·</span>
          <a href="/llms.txt" className="underline hover:opacity-75">
            llms.txt
          </a>
        </div>
      </div>
    </footer>
  );
}
