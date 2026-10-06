import { portfolioData } from "@/data/portfolioData";

export default function ExperienceSection() {
  const { experienceLead, experienceList } = portfolioData;

  return (
    <section className="blk" id="experience">
      <div className="side">Experience &amp; background</div>
      <div className="body">
        <div className="lead">
          <div className="cap" aria-hidden="true">
            W
          </div>
          <p>
            <span style={{ position: "absolute", left: "-9999px" }}>W</span>
            {experienceLead.slice(1)}
          </p>
        </div>

        <div className="rows">
          {experienceList.map((item, index) => (
            <div key={index} className="row">
              <div className="y">{item.period}</div>
              <div>
                <h3>
                  {item.role}, {item.organization}
                </h3>
                {item.bullets && item.bullets.length > 0 && (
                  <ul>
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                )}
                {item.location && <p className="t">{item.location}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
