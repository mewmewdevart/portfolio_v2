import React, { useState, useEffect } from "react";

const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: position.y - 125,
          left: position.x - 125,
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.01)", 
          boxShadow: "0 0 40px 20px rgba(255, 255, 255, 0.01)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "transform 0.1s linear, opacity 0.2s ease-out",
          filter: "blur(50px)",
          opacity: 0.8, 
        }}
      />
    </div>
  );
};

export default CursorGlow;
