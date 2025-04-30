import React, { createContext, useContext, useState, useEffect } from "react";

interface AccessibilityContextProps {
  textSize: number;
  increaseTextSize: () => void;
  decreaseTextSize: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextProps | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [textSize, setTextSize] = useState(1); // 1rem = 16px

  const increaseTextSize = () => {
    setTextSize((prev) => Math.min(prev + 0.125, 1.5)); // até 1.5rem (24px)
  };

  const decreaseTextSize = () => {
    setTextSize((prev) => Math.max(prev - 0.125, 0.75)); // até 0.75rem (12px)
  };

  // Aplica o tamanho da fonte para todos os <p>
  useEffect(() => {
    const paragraphs = document.querySelectorAll("p");
    const liLinks = document.querySelectorAll("li");
    paragraphs.forEach((p) => {
      p.style.fontSize = `${textSize}rem`;
    });
    liLinks.forEach((li) => {
      li.style.fontSize = `${textSize}rem`;
    });
  }, [textSize]);
  // Aplica o tamanho da fonte para todos os <li>

  // Atalhos de teclado: Ctrl + e Ctrl -
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "+") {
        event.preventDefault();
        increaseTextSize();
      } else if (event.ctrlKey && event.key === "-") {
        event.preventDefault();
        decreaseTextSize();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AccessibilityContext.Provider
      value={{ textSize, increaseTextSize, decreaseTextSize }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = (): AccessibilityContextProps => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider");
  }
  return context;
};
