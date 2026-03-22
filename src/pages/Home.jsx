import Ask from "../common/Ask";
import Footer from "../common/Footer";
import NavBar from "../common/NavBar";
import JavaScript from "../ui/home-UI/JavaScript";
import OverView from "../ui/home-UI/OverView";
import Safety from "../ui/home-UI/Safety";
import Solution from "../ui/home-UI/Solution";
import Technology from "../ui/home-UI/Technology";
import WhyUS from "../ui/home-UI/WhyUS";
import "./Home.css";
const Home = () => {
  const heroData = [
    { title: "98%", description: "Uptime Guaranteed" },
    { title: "2+", description: "Experience" },
    { title: "15ms", description: "Avg. Response Time" },
    { title: "24/7", description: "Dedicated Support" },
  ];

  return (
    <section className="home-section">
      <div className="hero-section ">
        <NavBar />
        <div className="hero-body">
          <h4 className="hero-title">
            Built for Performance. Designed for Growth
          </h4>
          <h1 className="hero-header">
            We Design and Build
            <br />
          </h1>
          <h2 className="hero-description">
            A multidisciplinary team crafting high performance web
            <br />
            applications,intelligent systems, and elegant user experiences.{" "}
          </h2>
          <div className="hero-buttons">
            <button className="main-button">Explore Project</button>
            <button className="alternative-button">Meet The Team</button>
          </div>

          <div className="Team-statistics">
            {heroData.map((item, index) => {
              return (
                <div key={index}>
                  <div>
                    <h5>{item.title}</h5>
                    <span>{item.description}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <WhyUS />
        <Safety />
        <Technology />
        <Solution />
        <JavaScript />
        <OverView />
        <Ask
          title="Let’s Build Something Exceptional"
          paragraph="Ready to turn your ideas into scalable digital solutions? Our team is ready to architect your next breakthrough"
          main_btn="Start the project"
          alt_btn="Explore Project"
        />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
