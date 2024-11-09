import React, { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import "./Intro.css"; // Ensure this file exists for styling

function Intro({ onIntroEnd }) {
  useEffect(() => {
    // Split the text into individual characters
    const splitText = new SplitType(".intro-text", { types: "chars" });

    // Animation timeline
    const tl = gsap.timeline();

    // GSAP animation to animate characters
    tl.from(".intro-text .char", {
      opacity: 0,
      x: -100, // Slide from left
      stagger: 0.05, // Delay between each character animation
      duration: 1,
      ease: "power3.out",
    });

    tl.to(".intro-text .char", {
      opacity: 0,
      x: 100, // Slide to the right
      stagger: 0.05, // Delay between each character animation
      duration: 1,
      ease: "power3.in",
      delay: 1, // Wait for the text to appear fully
    });

    // Notify the parent component when the intro ends
    const timer = setTimeout(() => {
      onIntroEnd(); // Notify parent when the intro ends
    }, 3200); // Ensure this matches the animation duration

    return () => {
      clearTimeout(timer);
      splitText.revert(); // Clean up SplitType when component unmounts
    };
  }, [onIntroEnd]);

  return (
    <div className="intro-container">
      <h1 className="intro-text">PJ.</h1>
    </div>
  );
}

export default Intro;
