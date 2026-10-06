import { portfolioData } from "@/data/portfolioData";

export default function ProjectsSection() {
  const { projectsLead, keyProjects, moreProjectsSummary } = portfolioData;

  return (
    <section className="blk" id="projects">
      <div className="side">Key projects</div>
      <div className="body">
        <div className="lead">
          <div className="cap" aria-hidden="true">
            E
          </div>
          <p>
            <span style={{ position: "absolute", left: "-9999px" }}>E</span>
            {projectsLead.slice(1)}
          </p>
        </div>

        <div className="rows">
          {keyProjects.map((p) => (
            <div key={p.title} className="row">
              <div className="y">{p.year}</div>
              <div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="t">
                  {p.tech}
                  <a
                    href={p.linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.linkText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="more">
          <b>More projects</b>
          <p className="small" style={{ margin: 0 }}>
            {moreProjectsSummary}
          </p>
        </div>
      </div>
    </section>
  );
}
