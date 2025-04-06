"use client";

import React, { useEffect } from "react";
import { useAccessibility } from "@/context/AccessibilityContext";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { textSize } = useAccessibility();

  useEffect(() => {
    document.body.style.setProperty("--text-size", textSize);
  }, [textSize]);

  return <>{children}</>;
};

export default ClientLayout;
