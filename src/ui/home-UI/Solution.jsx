import "./Solution.css";
import SectionTitle from "../../common/SectionTitle";

const Solution = () => {
  return (
    <section className="solution-section">
      <div className="container">
        <SectionTitle
          header="OUR SERVICES"
          main1="Solutions Designed for"
          main2="Modern Digital Products"
        />

        <p className="solution-paragraph">
          We help businesses transform ideas into powerful digital products
          through modern design, scalable development, and reliable technology
          solutions.
        </p>

        <div className="solution-body">
          {/* 1 */}
          <div className="solution-item1">
            <img src="/assets/solution/Icon 3.png" alt="icon" />
            <h4>Web Development</h4>

            <p>
              Fast and scalable websites built with modern frameworks to ensure
              high performance and global reach. We specialize in React,
              Next.js, and high-concurrency systems.
            </p>

            <div className="solution-web">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Cloud Architecture</span>
            </div>

            <img
              src="/assets/solution/code-icon.png"
              alt="code"
              className="code-icon"
            />
          </div>

          {/* 2 */}
          <div className="solution-item2">
            <img src="/assets/solution/design-icon.png" alt="design" />

            <h4>UI/UX Design</h4>

            <p>
              Crafting intuitive and engaging user experiences focused on
              conversion and aesthetic excellence.
            </p>

            <button className="view-btn">
              View Design
              <img src="/assets/solution/view-icon.png" alt="view" />
            </button>
          </div>

          {/* 3 */}
          <div className="solution-item3">
            <img src="/assets/solution/backend-icon.png" alt="backend" />

            <h4>Backend Systems</h4>

            <p>
              Building secure, efficient, and robust server-side systems that
              scale with your business growth
            </p>

            <div className="lines">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* 4 */}
          <div className="solution-item4">
            <h4>Product Development</h4>

            <p>
              End-to-end support from initial concept to market launch. We turn
              your vision into a viable, market-ready digital product.
            </p>
            <div className="users">
              <div>
                <img src="/assets/solution/user1.png" alt="user1" />
                <img src="/assets/solution/user2.png" alt="user2" />
                <img src="/assets/solution/user3.png" alt="user3" />
              </div>

              <span className="trusted-text">Trusted by founders globally</span>
            </div>
          </div>
        </div>

        <button className="main-button solution-button">Explore More</button>
      </div>
    </section>
  );
};

export default Solution;
