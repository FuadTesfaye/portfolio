import { portfolioData } from "@/data/portfolioData";

export default function SkillsGridSection() {
  const { skillsCategories } = portfolioData;

  return (
    <section className="blk" id="skills">
      <div className="side">
        03 Stack
        <span className="block text-[13px] opacity-75 font-normal">مهارات</span>
      </div>

      <div className="body">
        <div className="lead">
          <div className="cap" aria-hidden="true">
            S
          </div>
          <p>
            <span style={{ position: "absolute", left: "-9999px" }}>S</span>
            {"tructured for maintainability, scalability, and long-term enterprise growth."}
          </p>
        </div>

        <div className="cols mt-8">
          {skillsCategories.map((cat) => (
            <div key={cat.title}>
              <h3>{cat.title}</h3>
              <p className="d">{cat.subtitle}</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium border border-[var(--ink)]/30 px-2 py-0.5 rounded-[2px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
