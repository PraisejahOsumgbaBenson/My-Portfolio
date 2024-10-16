import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        {/* Logo section */}
        <p className="logo">PJ</p>

        {/* Navigation box containing Home and About links */}
        <div className="nav-box">
          <div className="v-line"></div>{" "}
          {/* Left vertical line before HOME link */}
          {/* Home link */}
          <Link to="/" className="nav-link home">
            HOME
          </Link>
          <div className="ve-line"></div>{" "}
          {/* Vertical line between HOME and ABOUT links */}
          {/* About link */}
          <Link to="/about" className="nav-link">
            ABOUT
          </Link>
          <div className="v-line"></div>{" "}
          {/* Right vertical line after ABOUT link */}
        </div>
      </div>

      {/* Centered navigation bar with links to Projects, Skills, and Qualifications */}
      <nav className="header-center">
        <ul className="nav-list">
          <li>
            {/* Projects link */}
            <Link to="/projects" className="nav-link">
              PROJECT
            </Link>
          </li>
          <li>
            {/* Skills link */}
            <Link to="/skills" className="nav-link">
              SKILLS
            </Link>
          </li>
          <li>
            {/* Qualifications link */}
            <Link to="/qualifications" className="nav-link">
              QUALIFICATIONS
            </Link>
          </li>
        </ul>
      </nav>

      {/* Right side of the header with Services link */}
      <div className="header-right">
        <Link to="/services" className="nav-link">
          SERVICES
        </Link>
      </div>

      {/* Horizontal line extending from the logo to the rest of the header */}
      <div className="h-line"></div>
    </header>
  );
}

export default Header;
