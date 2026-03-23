import "./Projects_Card.css";

const Projects_Card = () => {
  const cardData = [
    {
      img: "/public/assets/projects/project-card-img.png",
      technology1: "React",
      technology2: "AWS",
      technology3: "Node.js",

      type: "Live System",
      title: "E-Commerce Platform",
      paragraph:
        "A high-performance analytics engine for fintech scaling, featuring real-time data streaming and predictive modeling for institutional investors.",
    },
    {
      img: "/public/assets/projects/project-card-img.png",
      technology1: "React",
      technology2: "AWS",
      technology3: "Node.js",
      type: "Live System",

      title: "E-Commerce Platform",
      paragraph:
        "A high-performance analytics engine for fintech scaling, featuring real-time data streaming and predictive modeling for institutional investors.",
    },
    {
      img: "/public/assets/projects/project-card-img.png",
      technology1: "React",
      technology2: "AWS",
      technology3: "AWS",
      type: "Live System",

      title: "E-Commerce Platform",
      paragraph:
        "A high-performance analytics engine for fintech scaling, featuring real-time data streaming and predictive modeling for institutional investors.",
    },
    {
      img: "/public/assets/projects/project-card-img.png",
      technology1: "React",
      technology2: "AWS",
      technology3: "Node.js",
      type: "Live System",

      title: "E-Commerce Platform",
      paragraph:
        "A high-performance analytics engine for fintech scaling, featuring real-time data streaming and predictive modeling for institutional investors.",
    },
    {
      img: "/public/assets/projects/project-card-img.png",
      technology1: "React",
      technology2: "AWS",
      technology3: "Node.js",
      type: "Live System",

      title: "E-Commerce Platform",
      paragraph:
        "A high-performance analytics engine for fintech scaling, featuring real-time data streaming and predictive modeling for institutional investors.",
    },
  ];

  return (
    <section className="projects-card-session">
      <div className="projects-card-content container">
        <div className="projects-header">
          <h5>Featured Work</h5>
          <p>Our most impactful digital solutions</p>

          <div className="card-transition">
            <button>{"<"}</button>
            <button>{">"}</button>
          </div>
        </div>

        <div className="projects-card">
          {cardData.map((item, index) => (
            <div className="card" key={index}>
              <div className="project-img">
                <div >
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="technologies">
                  <span>{item.technology1}</span>
                  <span>{item.technology2}</span>
                  <span>{item.technology3}</span>
                </div>
              </div>

              <div>
                <h5>{item.type}</h5>
                <h4>{item.title}</h4>
                <p>{item.paragraph}</p>
                <button className="main-button"> View Project ➡ </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects_Card;
