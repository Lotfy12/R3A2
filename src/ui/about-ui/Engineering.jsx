import "./Engineering.css";

const Engineering = () => {
  return (
    <section className="engineering">
      <div className="cards-container">
        <div className="card card--mission">
          <div className="card__icon">
            <img src="/public/assets/about/Icon.png" alt="rock-icon" />
          </div>
          <h3 className="card__title">Our Mission</h3>
          <p className="card__text">
            To build meaningful digital products that solve real-world problems
            while fostering an environment of growth and innovation
          </p>
        </div>

        <div className="card card--vision">
          <div className="card__icon">
            <img src="/public/assets/about/Icon2.png" alt="rock-icon" />
          </div>
          <h3 className="card__title">Our Vision</h3>
          <p className="card__text">
            To grow into a globally recognized collaborative team known for
            pushing the boundaries of what's possible in web and mobile
            experiences
          </p>
        </div>
      </div>
      <div className="engineering__container">
        <div className="engineering__image">
          <img src="/public/assets/about/engineer-img.png" alt="Team" />
        </div>

        <div className="engineering__content">
          <p className="engineering__label">
            ENGINEERING EXCELLENCEPhilosophy/Our Values
          </p>
          <h2 className="engineering__title">Human-Centric Engineering</h2>
          <p className="engineering__text">
            We believe that technology should serve people, not the other way
            around. Our philosophy is rooted in empathy, clean code, and user-
            centric design. Every line of code we write is a bridge between a
            business challenge and a user's success.{" "}
          </p>

          <div className="engineering__features">
            <div className="feature">
              <span className="feature__number">01</span>
              <h4 className="feature__title">Transparency</h4>
              <p className="feature__description">
                Open communication at every step of development.
              </p>
            </div>

            <div className="feature">
              <span className="feature__number">02</span>
              <h4 className="feature__title">Excellence</h4>
              <p className="feature__description">
                Pushing the boundaries of what's possible with tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engineering;
