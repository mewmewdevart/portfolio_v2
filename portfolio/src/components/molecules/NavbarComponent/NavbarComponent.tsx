import { useState, useContext, useEffect, useRef } from "react";
import LogoImage from "../../../assets/logo.svg";
import ArrowDownIcon from "../../../assets/icons/arrow-down.svg";
import LanguageIcon from "../../../assets/icons/world.svg"
import { TranslationContext } from "../../../context/TranslationContext";

interface NavItem {
  id: string;
  label: string;
}

type Language = "pt-BR" | "en-US";

const NavbarComponent: React.FC = () => {
  const { texts, setLanguage } = useContext(TranslationContext)!;
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
      setLanguage(language);
      setIsDropdownOpen(false);
    } else if (event.key === "Escape") {
      setIsDropdownOpen(false);
    }
  };

  const navItems: NavItem[] = [
    { id: "sobre", label: texts.about },
    { id: "experience", label: texts.experience },
    { id: "projetos", label: texts.projects },
    { id: "contato", label: texts.contact },
  ];

  const languages = [
    { code: "pt-BR" as const, label: "🇧🇷 pt-BR" },
    { code: "en-US" as const, label: "🇺🇸 En-US" },
  ];

  return (
    <header className="bg-dark flex justify-between w-[80%] mx-auto items-center py-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center text-primary gap-2 font-bold">
        <img
          src={LogoImage}
          alt="Logo da MewMewDev"
          className="w-[30px] h-[30px]"
        />
        <h1>MewMewDev</h1>
      </div>
      <nav>
        <ul className="flex justify-center gap-6 text-white">
          {navItems.map((item: NavItem) => (
            <li key={item.id} className="text-small hover:text-primary">
              <a href={`#${item.id}`}>
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
              className="hover:underline cursor-pointer flex gap-2 items-center hover:text-primary"
            >

              <img src={LanguageIcon} alt="World icon" className="w-5" />

              {texts.language}

              <span aria-hidden="true">
                <img src={ArrowDownIcon} alt="Dropdown arrow" className="w-5" />
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
                      className="block w-full text-left cursor-pointer hover:bg-primary p-2"
                    >
                      {lang.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarComponent;
