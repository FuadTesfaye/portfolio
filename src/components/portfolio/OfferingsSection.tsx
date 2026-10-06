import { portfolioData } from "@/data/portfolioData";

export default function OfferingsSection() {
  const { offeringsLead, offerings } = portfolioData;

  return (
    <section className="blk">
      <div className="side">What I offer</div>
      <div className="body">
        <div className="lead">
          <div className="cap" aria-hidden="true">
            H
          </div>
          <p>
            <span style={{ position: "absolute", left: "-9999px" }}>H</span>
            {offeringsLead.slice(1)}
          </p>
        </div>

        <div className="cols">
          {offerings.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
