import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        {/* Logo */}
        <p className="logo">PJ</p>

        {/* Box for Home and About links */}
        <div className="nav-box">
          <div className="v-line"></div> {/* Left vertical line */}
          <Link to="/" className="nav-link home">
            HOME
          </Link>
          <div className="ve-line"></div> {/* Right vertical line */}
          <Link to="/about" className="nav-link">
            ABOUT
          </Link>
          <div className="v-line"></div> {/* Right vertical line */}
        </div>
      </div>

      <nav className="header-center">
        <ul className="nav-list">
          <li>
            <Link to="/projects" className="nav-link">
              PROJECT
            </Link>
          </li>
          <li>
            <Link to="/skills" className="nav-link">
              SKILLS
            </Link>
          </li>
          <li>
            <Link to="/qualifications" className="nav-link">
              QUALIFICATIONS
            </Link>
          </li>
        </ul>
      </nav>

      <div className="header-right">
        <Link to="/services" className="nav-link">
          SERVICES
        </Link>
      </div>

      {/* Horizontal line starts after the logo */}
      <div className="h-line"></div>
    </header>
  );
}

export default Header;
