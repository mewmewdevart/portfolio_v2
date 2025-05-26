import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useAccessibility } from "../../context/AccessibilityContext";

const ToolBarAccessible: React.FC = () => {
  const { increaseTextSize, decreaseTextSize, textSize } = useAccessibility();

  const MIN_SIZE = 1;
  const MAX_SIZE = 1.5;

  return (
    <main className="flex justify-start w-full mx-auto items-center px-4 lg:px-40 gap-2 transition-all duration-200 ease-in-out">
      <button
        onClick={increaseTextSize}
        disabled={textSize >= MAX_SIZE}
        aria-label="Aumentar tamanho do texto"
        title="Aumentar fonte"
        className="flex items-center justify-center text-primary rounded-full h-10 w-10 transition duration-300 ease-in-out
          hover:bg-primary hover:text-neutral-100
          focus-visible:outline-none
          focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed
          disabled:opacity-40 disabled:cursor-not-allowed
          cursor-pointer
          "
      >
        A<FontAwesomeIcon icon={faPlus} className="size-6" />
      </button>

      <button
        onClick={decreaseTextSize}
        disabled={textSize <= MIN_SIZE}
        aria-label="Diminuir tamanho do texto"
        title="Diminuir fonte"
        className="flex items-center justify-center text-primary rounded-full h-10 w-10 transition duration-300 ease-in-out
          hover:bg-primary hover:text-neutral-100
          focus-visible:outline-none
          focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed
           cursor-pointer
          disabled:opacity-40 disabled:cursor-not-allowed"
      >
        A<FontAwesomeIcon icon={faMinus} className="size-6" />
      </button>
    </main>
  );
};

export default ToolBarAccessible;
