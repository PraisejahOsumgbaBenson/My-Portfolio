import React, { useEffect, useState } from "react";
import "./cursor.css"; // Ensure to import the styles

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300); // Duration of the click animation
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleMouseClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseClick);
    };
  }, []);

  return (
    <div
      className={`cursor-ring ${isClicked ? "clicked" : ""}`} // Add the clicked class
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: "transform 0.1s ease", // Faster transition for position
      }}
    />
  );
};

export default Cursor;
