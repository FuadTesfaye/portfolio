import { portfolioData } from "@/data/portfolioData";

export default function AboutSection() {
  const { personal } = portfolioData;

  return (
    <section className="blk" id="about">
      <div className="side">About</div>
      <div className="body">
        <div className="lead">
          <div className="cap" aria-hidden="true">
            F
          </div>
          <p>
            <span style={{ position: "absolute", left: "-9999px" }}>F</span>
            ull-stack, MERN, Next.js and clean architecture. Over 3 years of building software that is meant to last.
          </p>
        </div>

        {personal.aboutParagraphs.map((para, i) => (
          <p key={i} className="small">
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}
