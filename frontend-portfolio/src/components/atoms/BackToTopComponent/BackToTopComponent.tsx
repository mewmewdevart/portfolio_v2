import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const progressCircleStyle: React.CSSProperties = {
  position: "fixed",
  bottom: "1.25rem", // 20px to rem
  right: "1.25rem", // 20px to rem
  width: "2.8125rem", // 45px to rem
  height: "2.8125rem", // 45px to rem
  borderRadius: "50%",
  background: "transparent",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  opacity: 0,
  transition: "opacity 0.3s ease",
  outline: "none",
};

const circleFillStyle: React.CSSProperties = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  background: "conic-gradient(#AA7EDF 0%, #B6BCC8 0%)",
  transition: "background 0.3s ease",
};

const BackToTopComponent: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;

    setScrollProgress(scrollPercentage);

    if (scrollPosition > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      scrollToTop();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        ...progressCircleStyle,
        opacity: isVisible ? 1 : 0,
      }}
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      role="button"
      aria-label="Voltar ao topo"
      tabIndex={0}
      className="focus:ring-2 focus:ring-purple-500"
    >
      <div
        style={{
          ...circleFillStyle,
          background: `conic-gradient(#AA7EDF ${scrollProgress}%, #B6BCC8 ${scrollProgress}% 100%)`,
        }}
        className="flex items-center justify-center text-gray hover:text-white"
      >
        <div className="flex items-center justify-center bg-dark w-[2.5rem] h-[2.5rem] rounded-full">
          <FontAwesomeIcon
            icon={faArrowUp}
            className="text-[1.25rem] bg-dark" // 20px to rem
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default BackToTopComponent;