import { useNavigate } from "react-router-dom";
import "./Ask.css";
const Ask = ({ title, paragraph, main_btn, alt_btn, mainPath = "/contact", altPath = "/projects" }) => {
  const navigate = useNavigate();
  return (
    <section className="ask-section">
      <div className="ask-background container">
        <div className="ask-content">
          <h2 className="ask-title">{title}</h2>
          <p className="ask-paragraph">{paragraph}</p>
          <div className="ask-btn">
            <button className="main-button" onClick={() => navigate(mainPath)}>{main_btn}</button>
            <button className="alternative-button" onClick={() => navigate(altPath)}>{alt_btn}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ask;
