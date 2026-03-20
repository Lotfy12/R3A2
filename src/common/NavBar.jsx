import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <header>
      <nav className="container">
        <ul className="navBar-items">
          <div className="logo">
            <img src="/public/assets/logo.png" alt="logo" />
          </div>

          <div className="navBar-item">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>

            <li>
              <Link to="/projects">Projects</Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
