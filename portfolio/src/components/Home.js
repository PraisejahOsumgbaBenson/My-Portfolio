import React, { useEffect } from "react";
import Header from "./Header";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { gsap } from "gsap";

import hoverSound from "../assets/namee.mp3";

function Home() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    // Entry animations
    tl.fromTo(
      ".gradien-bg",
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 1.5 }
    )
      .fromTo(".hi-text", { opacity: 0, y: -50 }, { opacity: 1, y: 0 }, "<0.3")
      .fromTo(
        ".collaboration-text",
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1 },
        "<0.3"
      )
      .fromTo(".name-text", { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "<0.3")
      .fromTo(
        ".social-icon",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, stagger: 0.2 },
        "<"
      )
      .fromTo(
        ".footer-text",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "<0.5"
      )
      .fromTo(
        ".f-text",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "<0.5"
      );
  }, []);

  const handleHover = () => {
    gsap.fromTo(
      ".praisejah-letter",
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power3.out" }
    );
  };

  const playHoverSound = () => {
    const audio = new Audio(hoverSound);
    audio.play();
  };

  return (
    <>
      <Header />
      <div className="gradien-bg"></div>
      <div className="gif-container fade-in">
        <div className="container">
          <div className="text">
            {/* Praisejah with letter spans */}
            <div
              className="hi-text"
              onMouseEnter={() => {
                handleHover();
                playHoverSound(); // Play sound on hover
              }} // Trigger animation on hover
              style={{ display: "flex", gap: "2px" }}
            >
              {"Praisejah".split("").map((letter, index) => (
                <span
                  key={index}
                  className="praisejah-letter"
                  style={{ display: "inline-block" }}
                >
                  {letter}
                </span>
              ))}
              <sup>(OB)</sup>
            </div>
            <br />
            {/* Collaboration Section */}
            <div className="collaboration-section">
              <span className="collaboration-text">
                Open for any collaboration and offer /{" "}
                <a
                  className="github"
                  href="https://github.com/PraisejahOsumgbaBenson"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </a>
              </span>
            </div>
            <br />
            <div className="down-section">
              <span className="name-text">
                Building impactful software and exploring efficient solutions
                excite me. Open-source contributor and problem-solver.
              </span>
              {/* Download CV Button */}
              <a
                href="https://docs.google.com/document/d/1EbcNjwS7MV_L7YGUTaiuXubdN51vSlOXLhCvCRp7ylQ/edit?usp=sharing"
                download
                className="cv"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => {
                  playHoverSound(); // Play sound on hover
                }}
              >
                <span className="cv-text">My CV</span>
              </a>
            </div>
          </div>
        </div>
        <div className="socials-container">
          <div className="socials">
            <div className="social-icon">
              <a
                href="https://github.com/PraisejahOsumgbaBenson"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={12} />
              </a>
            </div>
            <div className="social-icon">
              <a
                href="www.linkedin.com/in/praisejah-osumgba-benson"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="f-text">Designed by ME / Developed by ME</div>
      <div className="footer-text">
        PRAISEJAH (HER/SHE) AKA PJ IS AN INDEPENDENT ENGINEER FROM NIGERIA.
      </div>
    </>
  );
}

export default Home;
