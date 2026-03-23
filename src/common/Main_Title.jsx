import "./Main_Title.css";
const Main_Title = ({ title, first_heading,second_heading , paragraph }) => {
  return (
    <div className="title-hero-content ">
      <div className="title-hero-info">
        <span> {title}</span>
        <h1> {first_heading}</h1>
        <h3> {second_heading}</h3>

        <p className="title-hero-paragraph">{paragraph}</p>
      </div>
      <div></div>
    </div>
  );
};

export default Main_Title;
