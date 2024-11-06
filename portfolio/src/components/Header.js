import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        {/* Logo section */}
        <p className="logo">PJ.</p>
      </div>

      {/* navigation bar*/}
      <nav className="header-center">
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link home">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              ABOUT
            </Link>
          </li>
          <li>
            {/* Projects link */}
            <Link to="/projects" className="nav-link">
              PROJECT
            </Link>
          </li>

          <li>
            {/* Skills link */}
            <Link to="/skills" className="nav-link">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;
