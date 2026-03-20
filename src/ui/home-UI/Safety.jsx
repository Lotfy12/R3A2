import "./Safety.css";
const Safety = () => {
  const safetyData = [
    {
      icon: "../../public/assets/safety/safetyicon1.png",
      text: "Secure Development",
      paragraph:
        "Adhering to OWASP standards and implementing secure           SDLC practices throughout the lifecycle.",
    },
    {
      icon: "../../public/assets/safety/safetyicon2.png",
      text: "Data Protection",
      paragraph:
        "End-to-end encryption at rest and in transit using advanced AES-256 and TLS protocols.",
    },
    {
      icon: "../../public/assets/safety/safetyicon3.png",
      text: "Continuous Testing",
      paragraph:
        "Automated CI/CD pipelines with integrated unit, integration, and vulnerability scanning.",
    },
    {
      icon: "../../public/assets/safety/safetyicon4.png",
      text: "Speed & Scale",
      paragraph:
        "Horizontal scalability and load optimization to ensure performance even under extreme traffic.",
    },
  ];

  return (
    <section className="safety-section">
      <div className="container safety-content">
        <div className=" safety-inf">
          <h2 className="safety-header">
            Security &
            <br /> Quality Built Into <br /> Every Line of <br />
            Code
          </h2>
          <p className="safety-paragraph">
            We don't just build software; we engineer resilient digital
            ecosystems. Our defense-in-depth approach ensures your platform is
            protected from day one with automated testing and rigorous security
            audits.
          </p>
          <ul className="safety-items">
            <li>SOC2 Type II Compliant Architectures</li>
            <li>99.9% Automated Test Coverage</li>
            <li>Zero-Trust Infrastructure Modeling</li>
          </ul>
        </div>

        <div className="safety-extension">
          {safetyData.map((item, index) => {
            return (
              <div key={index}>
                <img className="safety-icon" src={item.icon} alt={item.text} />
                <h5 className="safety-text"> {item.text}</h5>
                <p className="safety-paragraph"> {item.paragraph}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Safety;
