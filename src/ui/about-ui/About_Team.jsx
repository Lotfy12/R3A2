import "./About_Team.css";
const About_Team = () => {
  return (
    <>
      <section className="about-team-session">
        <div className="about__container container">
          <h2 className="about__title">
            <span className="about__title-main">R3A2 is a technology-</span>
            <span className="about__title-highlight">driven team</span>
            <span className="about__title-main"> dedicated to building </span>
            <span className="about__title-highlight">
              smart digital solutions
            </span>
            <span className="about__title-main"> for modern businesses.</span>
          </h2>

          <p className="about__text">
            Since its inception, R3A2 has collaborated with clients to design
            and build impactful digital solutions. We transform ideas into
            reliable products that help businesses strengthen their digital
            presence and efficiency
          </p>

          <p className="about__text">
            Whether it’s building a website, developing a digital product, or
            solving technical challenges, we simplify the process through clear
            strategy and collaboration. By focusing on the right problems and
            using modern technologies, we deliver scalable and future-ready
            solutions for our clients
          </p>

          <button className="main-button">Explore Services</button>
        </div>
      </section>
    </>
  );
};

export default About_Team;
