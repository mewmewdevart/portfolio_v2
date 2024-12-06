import React, { useState } from "react";
import style from "./NavbarComponent.module.css";
import logo from "@assets/images/icons/logo.svg";

import { BeakerIcon } from "@heroicons/react/24/solid";

interface NavbarComponentProps {
  navItems: { label: string; link: string }[];
}

const NavbarComponent: React.FC<NavbarComponentProps> = ({ navItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className={style.navbar}>
      <a className={style.navbar__logo} href="#">
        <img src={logo} alt="Logo MewmewDev" className="w-8 h-8" />
        MewmewDev
      </a>
      <ul className={style.navbar__list}>
        {navItems.map((item, index) => (
          <li key={index} className={style.navbar__item}>
            <a href={item.link} className={style.navbar__link}>
              <span className={style.navbar__linkIcon}>#</span>
              {item.label}
            </a>
          </li>
        ))}
        <li className={style.navbar__custom}>Currículo</li>
        {/* <li className={style.navbar__item}>
          <button
            className={style.navbar__link}
            onClick={toggleDropdown}
            aria-haspopup="true"
            aria-expanded={isDropdownOpen ? "true" : "false"}
          >
            Pt-BR{" "}
            {isDropdownOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </button>
          {isDropdownOpen && (
            <ul className={style.navbar__dropdown}>
              <li>
                <a href="#" className={style.navbar__dropdownItem}>
                  English
                </a>
              </li>
            </ul>
          )}
        </li> */}
      </ul>
    </nav>
  );
};

export default NavbarComponent;
