import { portfolioData } from "@/data/portfolioData";

export default function SkillsGridSection() {
  const { skillsLead, skillsCategories } = portfolioData;

  return (
    <section className="blk">
      <div className="side">Skills &amp; technologies</div>
      <div className="body">
        <div className="lead">
          <div className="cap" aria-hidden="true">
            S
          </div>
          <p>
            <span style={{ position: "absolute", left: "-9999px" }}>S</span>
            {skillsLead.slice(1)}
          </p>
        </div>

        <div className="cols">
          {skillsCategories.map((cat) => (
            <div key={cat.title}>
              <h3>{cat.title}</h3>
              <p className="d">{cat.subtitle}</p>
              <p>{cat.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
