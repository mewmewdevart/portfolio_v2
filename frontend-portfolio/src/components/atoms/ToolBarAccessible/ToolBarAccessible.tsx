"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import { useAccessibility } from "../../../context/AccessibilityContext";

const ToolBarAccessible: React.FC = () => {
  const { increaseTextSize, isDefaultTextSize } = useAccessibility();

  const handleClick = () => {
    increaseTextSize();
  };

  return (
    <main className="flex justify-start items-center">
      <button
        onClick={handleClick}
        aria-label="Alterar tamanho do texto"
        title="Alterar fonte"
        className={`flex items-center p-2 rounded-full h-10 w-10 cursor-pointer transition duration-300 ease-in-out
          ${!isDefaultTextSize() ? "bg-red" : ""}
          focus-visible:outline-none
          focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed`}
      >
        <FontAwesomeIcon
          icon={faEyeLowVision}
          className="size-6 text-primary"
        />
      </button>
    </main>
  );
};

export default ToolBarAccessible;