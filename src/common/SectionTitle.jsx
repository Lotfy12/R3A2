import "./SectionTitle.css";
const SectionTitle = ({ header, main1, main2 }) => {
  return (
    <div className="section-title">
      <h5> {header}</h5>
      <div>
        <h2> {main1} </h2>
        <h3> {main2}</h3>
      </div>
    </div>
  );
};

export default SectionTitle;
