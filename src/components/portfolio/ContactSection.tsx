import { portfolioData } from "@/data/portfolioData";

export default function ContactSection() {
  const { contactLead, personal } = portfolioData;

  return (
    <section className="blk" id="contact">
      <div className="side">Get in touch</div>
      <div className="body">
        <div className="lead">
          <div className="cap" aria-hidden="true">
            W
          </div>
          <p>
            <span style={{ position: "absolute", left: "-9999px" }}>W</span>
            {contactLead.slice(1)}
          </p>
        </div>

        <p className="small">
          Reach out on LinkedIn or GitHub. Open to opportunities, Addis Ababa, Ethiopia.
        </p>

        <div className="contact-links">
          LinkedIn:{" "}
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fuad Tesfaye
          </a>
          <br />
          GitHub:{" "}
          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            @FuadTesfaye
          </a>
        </div>

        <a
          className="big-cta"
          href={personal.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Say hello
        </a>
      </div>
    </section>
  );
}
