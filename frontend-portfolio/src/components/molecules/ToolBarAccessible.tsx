"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import { useAccessibility } from "@/context/AccessibilityContext";

const ToolBarAccessible: React.FC = () => {
  const { increaseTextSize } = useAccessibility();

  return (
    <main className="flex justify-start w-full mx-auto items-center py-2 px-4 md:px-40">
      <button onClick={increaseTextSize}>
        <FontAwesomeIcon icon={faEyeLowVision} className="size-6 text-primary" />
      </button>
    </main>
  );
};

export default ToolBarAccessible;
