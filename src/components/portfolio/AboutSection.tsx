import { portfolioData } from "@/data/portfolioData";

export default function AboutSection() {
  const { about } = portfolioData;

  return (
    <section className="blk" id="about">
      <div className="side">
        02 About
        <span className="block text-[13px] opacity-75 font-normal">عن</span>
      </div>

      <div className="body">
        <div className="lead">
          <div className="cap" aria-hidden="true">
            F
          </div>
          <p>
            <span style={{ position: "absolute", left: "-9999px" }}>F</span>
            {about.lead.slice(1)}
          </p>
        </div>

        <div className="space-y-3 mt-4">
          {about.paragraphs.map((p, idx) => (
            <p key={idx} className="small" style={{ margin: "10px 0 0" }}>
              {p}
            </p>
          ))}
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-[var(--ink)]/30">
          {about.metadata.map((item) => (
            <div key={item.label}>
              <span className="block text-xs uppercase tracking-wider text-[var(--soft)] font-mono">
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  className="font-semibold text-sm hover:underline block mt-0.5"
                >
                  {item.value}
                </a>
              ) : (
                <span className="font-semibold text-sm block mt-0.5">
                  {item.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
