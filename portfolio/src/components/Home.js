import React, { useState } from "react";
import Intro from "../custom/Intro"; // Import the Intro component
import Header from "./Header"; // Import the Header component
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsChevronDoubleDown } from "react-icons/bs";
import image from "../assets/imgg.png";
function Home() {
  const [showIntro, setShowIntro] = useState(true);

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
                  A frontend developer focused on clean, scalable code using
                  React and JavaScript. I love painting and exploring tech.
                  Let’s connect!
                </span>
              </span>
              {/* Add Copyright Text */}
              {/* <div className="copyright">
                &copy; {new Date().getFullYear()}{" "}
                <span className="copyright_name">
                  Praisejah Osumgba-Benson.
                </span>{" "}
                All rights reserved.
              </div> */}
            </div>
            <div class="shape-container">
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
          </div>
          <div className="scroll-down-container">
            <div className="circle-text">
              {Array.from("SCROLL DOWN TO SEE").map((char, index) => (
                <span
                  key={index}
                  className="circle-letter"
                  style={{ transform: `rotate(${index * 20}deg)` }}
                >
                  {char}
                </span>
              ))}
              <BsChevronDoubleDown className="scroll-arrow" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
