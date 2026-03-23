import "./Community.css";

const Community = () => {
  return (
    <section class="commitment">
      <div class="commitment__container">
        <div class="commitment__content">
          <p class="commitment__label">EXCELLENCE DEFINED</p>
          <h2 class="commitment__title">
            <span>Our</span>
            <span class="commitment__highlight">Commit</span>
            <span class="commitment__highlight">ment</span>
          </h2>
          <p class="commitment__text">
            We don't just build software, we architect digital legacies. Every
            line of code and every design decision is crafted to our pursuit of
            perfection.
          </p>

          <div class="commitment__stats">
            <div class="stat">
              <span class="stat__value">99.9%</span>
              <span class="stat__label">Uptime</span>
            </div>
            <div class="stat">
              <span class="stat__value">24/7</span>
              <span class="stat__label">Support</span>
            </div>
          </div>
        </div>

        <div class="commitment__features">
          <div class="feature-card">
            <div class="feature-card__icon">
              <i class="fas fa-trophy"></i>
            </div>

            <img src="/public/assets/about/Icon3.png" alt="icon" />
            <h3 class="feature-card__title">Quality Excellence</h3>
            <p class="feature-card__text">
              We maintain rigorous quality standards and implement automated and
              manual testing. We follow industry best practices and continuously
              optimize our code.
            </p>
            <ul class="feature-card__list">
              <li>Automated Testing</li>
              <li>Code Review Process</li>
              <li>Performance Optimization</li>
            </ul>
          </div>

          <div class="feature-card">
            <div class="feature-card__icon">
              <i class="fas fa-handshake"></i>
            </div>
            <img src="/public/assets/about/Icon4.png" alt="icon" />
            <h3 class="feature-card__title">Client Partnership</h3>
            <p class="feature-card__text">
              We operate with uncompromising transparency, ensuring you're
              informed at every step. We're invested in your success and
              committed to delivering results.
            </p>
            <div class="feature-card__links">
              <a href="#" class="link-btn">
                Get Started
              </a>
              <a href="#" class="link-btn">
                Schedule Call
              </a>
              <a href="#" class="link-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
