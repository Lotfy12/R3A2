import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container footer-content">
        <div class="footer-brand">
          <div class="logo">
            <img src="/assets/logo.png" alt="logo" />
            <img
              src="/public/assets/footer/footer-logo.png"
              alt="footer-logo"
            />{" "}
          </div>

          <p class="tagline">Built for Performance. Designed for Growth</p>

          <p class="description">
            Engineering high-performance digital systems designed to scale,
            adapt, and lead. From concept to deployment, we build with clarity
            and long-term impact.
          </p>
        </div>

        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Case Studies</li>
            <li>About Us</li>
            <li>Case Studies</li>
            <li>Why Choose Us</li>
            <li>Our Team</li>
            <li>Insights</li>
          </ul>
        </div>

        <div class="footer-links">
          <h4>Services</h4>
          <ul>
            <li>Product Design</li>
            <li>Technical Architecture</li>
            <li>AI & Intelligence</li>
            <li>SEO Optimization</li>
            <li>Full-Stack Development</li>
          </ul>
        </div>

        <div class="footer-links">
          <h4>Resources</h4>
          <ul>
            <li>Case Studies</li>
            <li>Blog & Insights</li>
            <li>Technical Guides</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div class="footer-contact">
          <h4>GET IN TOUCH</h4>

          <div class="contact-item">
            <img src="/public/assets/footer/Link2.png" alt="footer-icon" />{" "}
            <p>hello@digitalstudio.com</p>
          </div>

          <div class="contact-item">
            <img src="/public/assets/footer/Link.png" alt="footer-icon" />{" "}
            <p>+91 9764312850</p>
          </div>

          <div class="contact-item">
            <img src="/public/assets/footer/Link3.png" alt="footer-icon" />{" "}
            <p>
              123 Innovation Drive,
              <br />
              San Francisco, CA 94103
            </p>
          </div>

          <div class="social-icons">
            <span> 𝕏 </span>
            <span>in</span>
            <span>f</span>
            <span>📷</span>
          </div>
        </div>
      </div>
        <div className="bug container">
          <span>© 2026 R3A2 . All rights reserved.</span>
          <div className="bug-items">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
