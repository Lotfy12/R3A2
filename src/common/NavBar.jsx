import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="container">
        <ul className="navBar-items">
          <div className="logo">
            <img src="/assets/logo.png" alt="logo" />
          </div>

          <button 
            className={`hamburger ${isOpen ? "open" : ""}`} 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <div className={`navBar-item ${isOpen ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/team" onClick={() => setIsOpen(false)}>Team</Link>
            </li>

            <li>
              <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
