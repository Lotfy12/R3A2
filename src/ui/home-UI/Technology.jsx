import SectionTitle from "../../common/SectionTitle";
import "./Technology.css";
const technologyIcons = [
  {
    icon: "/assets/technology/technology-icon (1).png",
    hoverIcon: "/assets/technology/Card 5.png",
  },
  {
    icon: "/assets/technology/technology-icon (11).png",
    hoverIcon: "/assets/technology/React.png",
  },
  {
    icon: "/assets/technology/technology-icon (2).png",
    hoverIcon: "/assets/technology/Express.png",
  },
  {
    icon: "/assets/technology/technology-icon (3).png",
    hoverIcon: "/assets/technology/Figma.png",
  },
  {
    icon: "/assets/technology/technology-icon (4).png",
    hoverIcon: "/assets/technology/sql.png",
  },
  {
    icon: "/assets/technology/technology-icon (5).png",
    hoverIcon: "/assets/technology/Vector.png",
  },
  {
    icon: "/assets/technology/technology-icon (6).png",
    hoverIcon: "/assets/technology/Github.png",
  },
  {
    icon: "/assets/technology/technology-icon (7).png",
    hoverIcon: "/assets/technology/Wordpress.png",
  },
  {
    icon: "/assets/technology/technology-icon (8).png",
    hoverIcon: "/assets/technology/Php.png",
  },
  {
    icon: "/assets/technology/technology-icon (9).png",
    hoverIcon: "/assets/technology/Firebase.png",
  },
  {
    icon: "/assets/technology/technology-icon (10).png",
    hoverIcon: "/assets/technology/Mongodb.png",
  },
  {
    icon: "/assets/technology/Frame 605.png",
    hoverIcon: "/assets/technology/Frame 606.png",
  },
];

const Technology = () => {
  return (
    <section className="Technology-section">
      <SectionTitle
        header="Our Tech Stack"
        main1="Technologies We"
        main2="Mostly Use"
      />

      <div className="Technology-content">
        {technologyIcons.map((item, index) => (
          <div className="tech-item" key={index}>
            <img src={item.icon} className="default-img" />
            <img src={item.hoverIcon} className="hover-img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
