import SectionTitle from "../../common/SectionTitle";
import "./JavaScript.css";

const JavaScript = () => {
  const javascriptData = [
    {
      icon: "/public/assets/javascript/Overlay.png",
      title: "Full-Stack Control",
    },
    {
      icon: "/public/assets/javascript/Overlay2.png",
      title: "Faster Iteration",
    },
    {
      icon: "/public/assets/javascript/Overlay3.png",
      title: "Unified Ecosystem",
    },
    {
      icon: "/public/assets/javascript/Overlay4.png",
      title: "Scalable Architecture",
    },
    {
      icon: "/public/assets/javascript/Overlay5.png",
      title: "Tooling Efficiency",
    },
  ];

  return (
    <section className="javaScript-section">
      <SectionTitle header="OUR CORE STACK" main1="Built on JavaScript" />
      <div className="javaScript-title container">
        <h3 className="javaScript-header"> One language. Unified execution</h3>
        <p className="javaScript-paragraph">
          JavaScript powers every layer of our development ecosystem — from
          dynamic user interfaces to scalable backend systems and internal
          tooling. Working within a unified stack enables faster iteration,
          architectural consistency, and long-term scalability.
        </p>

        <div className="javaScript-features">
          {javascriptData.slice(0, 3).map((item, index) => {
            return (
              <div key={index}>
                <img src={item.icon} alt={item.title} />
                <h5>{item.title}</h5>
              </div>
            );
          })}
        </div>

        <div className="javaScript-features javaScript-features-2">
          {javascriptData.slice(3, 5).map((item, index) => {
            return (
              <div key={index}>
                <img src={item.icon} alt={item.title} />
                <h5>{item.title}</h5>
              </div>
            );
          })}
        </div>

        <h6 className="javaScript-enterprise"> Deep Expertise</h6>
        <div className="javaScript-web">
          <div>
            <h4 className="web-title">Frontend Excellence</h4>
            <p className="web-description">
              We specialize in building lightning-fast, highly interactive user
              experiences using React and Next.js. Our approach focuses on Core
              Web Vitals, server-side rendering, and seamless state management
              to deliver peak performance.
            </p>
          </div>
          <div>
            <h4 className="web-title">Backend Power</h4>
            <p className="web-description">
              Leveraging the full potential of Node.js, we architect scalable
              microservices and robust APIs. Our backend solutions are designed
              for high throughput, security, and effortless horizontal scaling
              to support growing user bases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JavaScript;
