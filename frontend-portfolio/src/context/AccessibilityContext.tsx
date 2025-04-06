"use client";

import React, { createContext, useContext, useState } from "react";

type AccessibilityContextType = {
  textSize: string;
  increaseTextSize: () => void;
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

const textSizeLevels = ["1rem", "20px", "26px", "35px"];

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLevel, setCurrentLevel] = useState(0);

  const increaseTextSize = () => {
    setCurrentLevel((prevLevel) => (prevLevel + 1) % textSizeLevels.length);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        textSize: textSizeLevels[currentLevel],
        increaseTextSize,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = (): AccessibilityContextType => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider");
  }
  return context;
};
