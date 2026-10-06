import { portfolioData } from "@/data/portfolioData";

export default function ExperienceSection() {
  const { experienceList } = portfolioData;

  return (
    <section className="blk" id="experience">
      <div className="side">
        04 Experience
        <span className="block text-[13px] opacity-75 font-normal">خبرة</span>
      </div>

      <div className="body">
        <div className="lead">
          <div className="cap" aria-hidden="true">
            E
          </div>
          <p>
            <span style={{ position: "absolute", left: "-9999px" }}>E</span>
            {"ngineering leadership and full-lifecycle delivery across national and enterprise systems."}
          </p>
        </div>

        <div className="rows">
          {experienceList.map((exp, idx) => (
            <div key={idx} className="row">
              <div className="y">
                <div>{exp.period}</div>
                <div className="text-[12px] opacity-75 font-mono">{exp.duration}</div>
              </div>

              <div>
                <h3>
                  {exp.role} <span className="font-normal opacity-85">· {exp.organization}</span>
                </h3>

                <p className="text-[13px] font-mono text-[var(--soft)]" style={{ marginTop: "2px" }}>
                  {exp.location} · {exp.workType}
                </p>

                <ul className="mt-3 space-y-1.5 list-disc pl-5">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>

                {exp.techTags && exp.techTags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-2">
                    {exp.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono border border-[var(--ink)]/25 px-1.5 py-0.5 rounded-[2px] text-[var(--soft)]"
                      >
                        {tag}
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
