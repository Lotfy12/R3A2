import Engineering from "../ui/about-ui/Engineering";
import About_Team from "../ui/about-ui/About_Team";
import Ask from "../common/Ask";
import NavBar from "../common/NavBar";
import Main_Title from "../common/Main_Title";
import Footer from "../common/Footer";
import "./About.css";
import Community from "../ui/about-ui/Community";

const About = () => {
  return (
    <>
      <section className="about-session">
        <div className=" container ">
          <NavBar />
          <div className="projects-container">
            <Main_Title
              title={"About Us "}
              first_heading={"Powered by Collaboration"}
              second_heading={" Powered by "}
              paragraph={
                "A team of developers and designers building impactful digital experiences together"
              }
            />
          </div>
        </div>
      </section>
      <About_Team />

      <Engineering />

      <Community/>
      <Ask
        title="Have an Idea? 
        Let’s Build It Together"
        paragraph="We are always excited to collaborate on innovative projects and digital solutions
that push boundaries"
        main_btn="Start the project"
        alt_btn=" Discuss Your Idea"
      />
      
      <Footer />
    </>
  );
};

export default About;
