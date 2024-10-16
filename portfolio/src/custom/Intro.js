import React, { useEffect } from "react";
import "./Intro.css"; // Add a new CSS file for the intro screen
import Bow from'../assets/Bow.png';

function Intro({ onIntroEnd }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onIntroEnd(); // Notify parent when the intro ends
    }, 1800); // Match this duration with the CSS animation duration

    return () => clearTimeout(timer);
  }, [onIntroEnd]);

  return (
    <div className="intro-container">
      <h1 className="intro-text">P<img src={Bow} alt="bow" className="bow"/>J</h1>
    </div>
  );
}

export default Intro;
