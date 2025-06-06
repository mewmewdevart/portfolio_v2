import React, { useState, useEffect } from "react";
import { TranslationProvider } from "./context/TranslationContext";
import NavbarComponent from "./components/molecules/NavbarComponent";
import HomeTemplate from "./components/templates/HomeTemplate/HomeTemplate";
import AboutMeTemplate from "./components/templates/AboutMeTemplate/AboutMeTemplate";
import SocialsBarComponent from "./components/atoms/SocialsBarComponent/SocialsBarComponent";
import ExperienceTemplate from "./components/templates/ExperienceTemplate/ExperienceTemplate";
import ProjectsTemplate from "./components/templates/ProjectsTemplate/ProjectsTemplate";
import ContactTemplate from "./components/templates/ContactTemplate/ContactTemplate";
import FooterTemplate from "./components/templates/FooterTemplate/FooterTemplate";

import logo from "../src/assets/logo.svg"; 

const spinnerContainerStyle: React.CSSProperties = {
  position: "relative",
  width: "80px",
  height: "80px",
  marginBottom: "20px",
};

const spinnerStyle: React.CSSProperties = {
  border: "6px solid #f3f3f3",
  borderTop: "6px solid #AA7EDF",
  borderRadius: "50%",
  width: "80px",
  height: "80px",
  animation: "spin 1s linear infinite",
};

const logoStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "40px",
  height: "40px",
  transform: "translate(-50%, -50%)",
  pointerEvents: "none",
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
        <div style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#282C34",
          color: "#AA7EDF",
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "center",
          padding: "0 20px",
        }}>
          <div style={spinnerContainerStyle}>
            <div style={spinnerStyle}></div>
            <img src={logo} alt="Logo" style={logoStyle} />
          </div>
          <p>O site está passando por manutenção para uma melhor experiência. Retorne mais tarde.</p>
        </div>
      </>
    );
  }

  return (
    <TranslationProvider>
      <NavbarComponent />
      <SocialsBarComponent />
      <HomeTemplate />
      <AboutMeTemplate />
      <ExperienceTemplate />
      <ProjectsTemplate />
      <ContactTemplate />
      <FooterTemplate />
    </TranslationProvider>
  );
};

export default App;
