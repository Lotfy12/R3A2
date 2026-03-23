import "./Projects.css";
import NavBar from "../common/NavBar";
import Main_Title from "../common/Main_Title";
import Projects_Description from "../ui/projects-ui/Projects_Description";
import Projects_Card from "../ui/projects-ui/Projects_Card";
import Ask from "../common/Ask";
import Footer from "../common/Footer";

const Projects = () => {
  return (
    <>
      <section className="projects-session">
        <div className=" container ">
          <NavBar />
          <div className="projects-container">
            <Main_Title
              title={"Our Creativity"}
              first_heading={"Ideas into Reality"}
           second_heading={"Reality"}
              paragraph={
                "Discover the projects where our team transforms concepts into modern digital experiences"
              }
            />
          </div>
        </div>
      </section>
      <Projects_Description />
      <Projects_Card />
      <Ask
        title="Ready to Turn Your Idea Into Reality?"
        paragraph="From concept to launch, we help transform ideas into scalable and impactful digital products"
        main_btn="Work With Us"
        alt_btn="Contact Us"
      />
      <Footer />
    </>
  );
};

export default Projects;
