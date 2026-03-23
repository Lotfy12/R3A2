import Footer from "../common/Footer";
import Main_Title from "../common/Main_Title";
import NavBar from "../common/NavBar";
import Contact_Session from "../ui/contact_us-ui/Frequently_Questions";
import Form from "../ui/contact_us-ui/Form";
import "./Contact_Us.css";

const Contact_Us = () => {
  return (
    <>
      <section className="contact-session">
        <div className="container">
          <NavBar />
          <Main_Title
            title="Contact"
            first_heading="Let’s Build Something"
            second_heading="Great Together"
            paragraph="We are always excited to collaborate on new ideas, projects,
          and digital experiences. Tell us about your project and let's start a conversation"
          />
          <div className="hero-buttons">
            <button className="main-button">Explore Project</button>
            <button className="alternative-button">Meet The Team</button>
          </div>
        </div>
      </section>
      <Form />
      <Contact_Session />

      <Footer />
    </>
  );
};

export default Contact_Us;
