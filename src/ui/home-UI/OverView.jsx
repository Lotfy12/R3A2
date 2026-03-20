import { useState } from "react";
import "./OverView.css";

const OverView = () => {
  const [activeIndex, setActiveIndex] = useState(false);
  const FAQData = [
    {
      question: "What services do you provide?",
      answer:
        "We specialize in high-end UI/UX design, full-stack web development (React/Next.js), mobile app development, and technical consulting for startups.",
    },
    {
      question: "How long does a project usually take? ",
      answer: "it usually take from 20 to 25 days",
    },
    {
      question: "Do you work with startups or individuals?",
      answer: "Yes,We have made alot of work with start up teams",
    },
  ];

  return (
    <section>
      <div class="container">
        <div class="main-content">
          <div class="info-column">
            <div class="info-card">
              <span class="tagline">Teammates</span>
              <h1>
                Meet the Minds
                <br />
                <span class="highlight">Behind the Code</span>
              </h1>
              <p class="description">
                From strategy to deployment, we build scalable digital products
                driven by precision, performance, and innovation.
              </p>
            </div>

            <div class="info-card">
              <h2>
                What Sets <span class="highlight">Us Apart</span>
              </h2>
              <ul class="features-list">
                <li class="feature-item">
                  <div class="check-icon"></div>
                  <div class="feature-text">
                    <h3>Strategy First</h3>
                    <p>Clear goals before execution</p>
                  </div>
                </li>
                <li class="feature-item">
                  <div class="check-icon"></div>
                  <div class="feature-text">
                    <h3>Unified Teamwork</h3>
                    <p>Design, code, strategy aligned.</p>
                  </div>
                </li>
                <li class="feature-item">
                  <div class="check-icon"></div>
                  <div class="feature-text">
                    <h3>Scalable Systems</h3>
                    <p>Built to grow.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="team-grid">
            <div class="member-card ">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
                alt="Anant"
              />
              <div class="member-info">
                <span class="member-name">Anant</span>
                <span class="member-role">Founder</span>
              </div>
            </div>
            <div class="member-card">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600"
                alt="Sajim"
              />
              <div class="member-info">
                <span class="member-name">Sajim</span>
                <span class="member-role">Leader</span>
              </div>
            </div>
            <div class="member-card">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600"
                alt="Ashwani"
              />
              <div class="member-info member-card3">
                <span class="member-name">Ashwani</span>
                <span class="member-role">Developer</span>
              </div>
            </div>
            <div class="member-card">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600"
                alt="M.Lofty"
              />
              <div class="member-info">
                <span class="member-name">M.Lofty</span>
                <span class="member-role">Developer</span>
              </div>
            </div>
          </div>
        </div>

        <button button class="main-button explore-btn">
          Explore About Team
        </button>
        <div className="FAQ-team">
          {FAQData.map((item, index) => {
            return (
              <div className="FAQ-content" key={index}>
                <div className="FAQ-question-content">
                <h4 className="FAQ-question">{item.question}</h4>
                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                  >
                    <span>{activeIndex === index ? "-" : "+"}</span>
                  </button>
                </div>

                {activeIndex === index && (
                  <p className="FAQ-answer">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
        <button button class="main-button explore-btn">
          More Information
        </button>
      </div>
    </section>
  );
};

export default OverView;
