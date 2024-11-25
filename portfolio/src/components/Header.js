import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Sound file for hover effect
import hoverSound from "../assets/key.mp3";

function Header() {
  const [time, setTime] = useState("");

  // Function to fetch current Nigerian time
  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date().toLocaleTimeString("en-NG", {
        timeZone: "Africa/Lagos", // Nigerian time zone
        hour: "2-digit",
        minute: "2-digit",
        hour12: true, // 12-hour format
      });
      setTime(currentTime);
    };

    updateTime(); // Set initial time
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Function to play hover sound
  const playHoverSound = () => {
    const audio = new Audio(hoverSound);
    audio.play();
  };

  return (
    <header className="header">
      <div className="left-nav">
        <div className="header-left">
          {/* Logo section */}
          <p className="logo">PJ.</p>
        </div>
        <div className="time">
          <p>NIGERIA, {time} WAT</p>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="header-center">
        <ul className="nav-list">
          <li>
            <Link
              to="/"
              className="nav-link home"
              onMouseEnter={playHoverSound} // Add hover sound effect
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="nav-link"
              onMouseEnter={playHoverSound} // Add hover sound effect
            >
              PROJECT
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="nav-link"
              onMouseEnter={playHoverSound} // Add hover sound effect
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <div className="d-mode">
          <button
            className="darkmode"
            onMouseEnter={playHoverSound} // Add hover sound effect
          >
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
