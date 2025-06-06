import { useState, useContext, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { TranslationContext } from "../../context/TranslationContext";

interface NavItem {
  id: string;
  label: string;
}

type Language = "pt-BR" | "en-US";

const NavbarClient: React.FC = () => {
  const context = useContext(TranslationContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent, language?: Language) => {
    if (event.key === "Enter" && language) {
      context?.setLanguage(language);
      setIsDropdownOpen(false);
    } else if (event.key === "Escape") {
      setIsDropdownOpen(false);
    }
  };

  if (!context || !context.texts) {
    console.error("TranslationContext is undefined or texts are missing. Ensure TranslationProvider wraps the component tree.");
    return null;
  }

  const { texts, setLanguage } = context;

  const navItems: NavItem[] = [
    { id: "about", label: texts.about },
    { id: "experience", label: texts.experience },
    { id: "projects", label: texts.projects },
    { id: "contact", label: texts.contact },
  ];

  const languages = [
    { code: "pt-BR" as const, label: "🇧🇷 pt-BR" },
    { code: "en-US" as const, label: "🇺🇸 En-US" },
  ];

  return (
    <ul className="flex justify-center items-center gap-6 text-white">
      {navItems.map((item: NavItem) => (
        <li key={item.id} className="text-small hover:text-primary ">
          <a href={`#${item.id}`} className="focus-visible:outline-none focus-visible:px-2 focus-visible:py-1
          focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed">
            <span className="text-primary"># </span>
            {item.label}
          </a>
        </li>
      ))}
      <li className="relative w-fit">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          onKeyDown={(e) => handleKeyDown(e)}
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
          aria-label="Select language"
          className="hover:underline cursor-pointer flex gap-2 items-center hover:text-primary focus-visible:outline-none focus-visible:px-2 
          focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed"
        >
          <FontAwesomeIcon icon={faLanguage} className="size-6 text-primary" />
          {texts.language}
          <span aria-hidden="true">
            <FontAwesomeIcon icon={faChevronDown} className="size-6 text-primary" />
          </span>
        </button>
        {isDropdownOpen && (
          <ul
            ref={dropdownRef}
            className="absolute bg-dark border mt-2 shadow-lg w-full right-0"
            role="menu"
            aria-labelledby="language-dropdown"
          >
            {languages.map((lang) => (
              <li key={lang.code} role="menuitem">
                <button
                  onClick={() => setLanguage(lang.code)}
                  onKeyDown={(e) => handleKeyDown(e, lang.code)}
                  className="block w-full text-left cursor-pointer hover:bg-primary p-2 focus-visible:outline-none focus-visible:px-2 focus-visible:py-1
          focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed"
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
};

export default NavbarClient;