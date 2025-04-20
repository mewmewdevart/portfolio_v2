"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type AccessibilityContextType = {
  textSize: string;
  increaseTextSize: () => void;
  isDefaultTextSize: () => boolean;
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

const textSizeLevels = ["1rem", "1.25rem", "1.5rem"];

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLevel, setCurrentLevel] = useState(0);

  const increaseTextSize = () => {
    setCurrentLevel((prevLevel) => (prevLevel + 1) % textSizeLevels.length);
  };

  const isDefaultTextSize = () => currentLevel === 0;

  useEffect(() => {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((p) => {
      (p as HTMLElement).style.fontSize = textSizeLevels[currentLevel];
    });
  }, [currentLevel]);

  return (
    <AccessibilityContext.Provider
      value={{
        textSize: textSizeLevels[currentLevel],
        increaseTextSize,
        isDefaultTextSize,
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