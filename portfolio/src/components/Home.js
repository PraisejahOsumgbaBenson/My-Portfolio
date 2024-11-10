import React, { useState, useEffect } from "react";
import Intro from "../custom/Intro"; // Import the Intro component
import Header from "./Header"; // Import the Header component
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
// import { BsChevronDoubleDown } from "react-icons/bs";
import { gsap } from "gsap/gsap-core";
import image from "../assets/imgg.png";

function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (!showIntro) {
      gsap.from(".hi-text", { duration: 1, opacity: 0, y: -50 });
      gsap.from(".name-text", { duration: 1, opacity: 0, y: -30, delay: 0.5 });
      gsap.from(".description-text", {
        duration: 1,
        opacity: 0,
        y: -20,
        delay: 1,
      });
    }
  }, [showIntro]);

  useEffect(() => {
    gsap.to(".circle-text", {
      rotation: 360,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });
  }, []);

  const handleIntroEnd = () => {
    setShowIntro(false);
  };

  return (
    <div>
      {showIntro ? (
        <Intro onIntroEnd={handleIntroEnd} />
      ) : (
        <>
          <Header />
          <div className="gif-container fade-in">
            <div className="container">
              <div className="red-ball"></div>
              <span className="text">
                <span className="hi-text">HELLO,</span>
                <br />
                <span className="name-text">I’M PJ!</span>
                <br />
                <span className="description-text">
                  Building impactful software and exploring efficient solutions
                  excite me. Open-source contributor and problem-solver—I'm a
                  great addition to any team!
                </span>
              </span>
             {/*  <div className="copyright">
                &copy; {new Date().getFullYear()}{" "}
                <span className="copyright_name">
                  Praisejah Osumgba-Benson.
                </span>{" "}
                All rights reserved.
              </div> */}
            </div>

            <div className="shape-container">
              <img src={image} alt="description" />
            </div>

            <div className="text-container">
              <h1 className="number">01</h1>
              <h2 className="name">PRAISEJAH</h2>
              <p className="title">SOFTWARE ENGINEER</p>
            </div>

            <div className="socials-container">
              <div className="socials">
                <div className="social-icon">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter size={10} />
                  </a>
                </div>
                <div className="social-icon">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
                <div className="social-icon">
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* News Ticker */}
            {/*  <div className="news-ticker-container">
              <div className="news-ticker">
                <p>
                  Breaking News: PJ is a Software Engineer and Open-Source
                  Contributor. Stay tuned for more updates!
                </p>
              </div>
            </div> */}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
