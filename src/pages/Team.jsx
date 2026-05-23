import Ask from "../common/Ask";
import Footer from "../common/Footer";
import Main_Title from "../common/Main_Title";
import NavBar from "../common/NavBar";
import Team_Skills from "../ui/team-ui/Team_Skills";
import "./Team.css";
const Team = () => {
  return (
    <>
      <section className="team-hero-section ">
        <div className="container">

          <NavBar />
          <Main_Title
            title={"Title-hero"}
            first_heading={"The People Behind"}
            second_heading={"R3A2"}
            paragraph={
              "Meet the designers and developers who collaborate to turn ideas into practical digital solutions"}
          />
        </div>
      </section>
      <Team_Skills />
      <Ask
        title="Ready to Build Something Remarkable?"
        paragraph="Our team combines design precision with technical expertise to create digital products that solve real-world problems."
        main_btn="Start a Conversation"
        alt_btn="View Case Studies"
      />
      <Footer />
    </>
  );
};

export default Team;
