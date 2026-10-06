import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { personal, externalLinks } = portfolioData;

  return (
    <section className="hero" id="top">
      <div className="ext">
        <span>External</span>
        {externalLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="fig-wrap">
        <figure>
          <svg
            viewBox="0 0 190 220"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            role="img"
            aria-label="Exploded layered drawing of a software stack"
          >
            <path d="M30 60l50-22 70 28-50 24z" />
            <path d="M30 60v8l70 30 50-24v-8" />
            <path d="M45 92l48-20 62 25-45 21z" />
            <path d="M45 92v6l65 28 45-22v-6" />
            <path d="M60 128l40-17 50 20-38 17z" strokeDasharray="3 3" />
            <path d="M60 128v6l52 22 38-16v-6" />
            <path d="M70 150l6 14M110 156l-4 14M138 140l8 12" />
            <circle cx="80" cy="178" r="8" />
            <path d="M20 40l10 20M165 62l-4-18M100 30v8" strokeDasharray="2 3" />
          </svg>
        </figure>
        <div className="cap-t">Fig 1 — Frontend, backend, cloud.</div>
      </div>

      <div className="intro">
        <div className="lead">
          <div className="cap" aria-hidden="true">
            W
          </div>
          <p>
            <span style={{ position: "absolute", left: "-9999px" }}>W</span>
            {"elcome! I'm Fuad — a full-stack software engineer building modern web products, from polished interactive frontends to scalable backend systems."}
          </p>
        </div>

        <p className="small">{personal.introBio}</p>

        <div className="btns">
          <a href="#contact">Contact me</a>
          <a href="#projects">View projects</a>
        </div>
      </div>
    </section>
  );
}
