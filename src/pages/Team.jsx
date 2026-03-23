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
            "Meet the designers and developers who collaborate to turn ideas into practical digital solutions" }
          />
          </div>
      </section>
      <Team_Skills />
      <Ask
        title="Want to Work With Our Team?"
        paragraph="Have a vision for a digital product? We're ready to help you bring it to life with precision and creativity"
        main_btn="Start a Conversation"
      />
      <Footer />
    </>
  );
};

export default Team;
