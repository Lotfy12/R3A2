import SectionTitle from "../../common/SectionTitle";
import "./WhyUS.css";
const WhyUS = () => {
  const whyUSData = [
    {
      backgroundNumber: "01",
      icon: "../../public/assets/whyus/Icon1.png",
      text: "We Build Systems, Not Just Features",
      paragraph:
        "Every line of code is built for the bigger picture -  designed togrow with your business",
    },
    {
      backgroundNumber: "02",
      icon: "../../public/assets/whyus/Icon2.png",
      text: "Clarity Over Chaos",
      paragraph:
        "Structured development removes ambiguity, building scalablefoundations for faster team execution.",
    },
    {
      backgroundNumber: "03",
      icon: "../../public/assets/whyus/Icon3.png",
      text: "Performance Is Non-Negotiable",
      paragraph:
        "Built for performance first — fast loads and lean systems standard.",
    },
    {
      backgroundNumber: "04",
      icon: "../../public/assets/whyus/Icon4.png",
      text: "Ownership Mindset",
      paragraph:
        "We build with ownership, holding standards we expect ourselves.",
    },
  ];
  return (
    <section className="whyUs-section">
      <div className="container">
        <SectionTitle
          header="Why Choose US ?"
          main1="Built on Principles"
          main2="Proven by Results"
        />
        <div className="whyUs-content">
          {whyUSData.map((item, index) => {
            return (
              <div key={index} className="whyUS-card">
                <h2 className="whyUS-number">{item.backgroundNumber}</h2>
                <img className="whyUS-icon" src={item.icon} alt={item.icon} />
                <h4 className="whyUs-title">{item.text}</h4>
                <p className="whyUs-paragraph">{item.paragraph}</p>
              </div>
            );
          })}
        </div>

        <button className="main-button">Explore More</button>
      </div>
    </section>
  );
};

export default WhyUS;
