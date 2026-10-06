import { portfolioData } from "@/data/portfolioData";

export default function EducationSection() {
  const { educationList } = portfolioData;

  return (
    <section className="blk" id="education">
      <div className="side">
        05 Education
        <span className="block text-[13px] opacity-75 font-normal">تعليم</span>
      </div>

      <div className="body">
        <div className="lead">
          <div className="cap" aria-hidden="true">
            D
          </div>
          <p>
            <span style={{ position: "absolute", left: "-9999px" }}>D</span>
            {"isciplined academic foundations and rigorous cybersecurity immersion."}
          </p>
        </div>

        <div className="rows">
          {educationList.map((edu, idx) => (
            <div key={idx} className="row">
              <div className="y">{edu.period}</div>
              <div>
                <h3>{edu.institution}</h3>
                <p className="d font-serif italic text-sm text-[var(--soft)]" style={{ margin: "2px 0 6px" }}>
                  {edu.degree}
                </p>

                <ul className="mt-2 space-y-1.5 list-disc pl-5">
                  {edu.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>

                {edu.tags && edu.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-1">
                    {edu.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono border border-[var(--ink)]/25 px-1.5 py-0.5 rounded-[2px] text-[var(--soft)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
