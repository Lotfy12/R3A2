import "./Ask.css";
const Ask = ({ title, paragraph, main_btn, alt_btn }) => {
  return (
    <section className="ask-section">
      <div className="ask-background container">
        <div className="ask-content">

        <h2 className="ask-title">{title}</h2>
        <p className="ask-paragraph">{paragraph}</p>
        <div className="ask-btn">

        <button className="main-button">{main_btn}</button>
        <button className="alternative-button">{alt_btn}</button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Ask;
