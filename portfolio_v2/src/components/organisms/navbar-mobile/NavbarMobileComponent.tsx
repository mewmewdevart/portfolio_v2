import React, { useState, useRef, useEffect } from 'react';
import logo from '../../../assets/images/icons/logo.svg';
import './NavbarMobileComponent.css';

interface NavbarMobileComponentProps {
    navItems: { label: string, link: string }[];
  }

const NavbarMobileComponent: React.FC<NavbarMobileComponentProps> = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const body = document.body;
    if (isMenuOpen) {
      body.classList.add('no-scroll');
    } else {
      const timer = setTimeout(() => {
        body.classList.remove('no-scroll');
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isMenuOpen]);

  return (
    <header className="header" role="banner">
      <a className="logo" href='#'>
        <img src={logo} alt="Logo MewmewDev" className='w-8 h-8' />
        MewmewDev
      </a>
      <nav ref={navRef} id="nav" className={`nav ${isMenuOpen ? 'nav--open' : ''}`} role="navigation">
        <button
          onClick={handleMenuToggle}
          className="nav__toggle"
          aria-expanded={isMenuOpen}
          aria-controls="menu"
        >
          <svg className="menuicon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
            <title>Toggle Menu</title>
            <g>
              <line className="menuicon__bar" x1="13" y1="16.5" x2="37" y2="16.5" />
              <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5" />
              <line className="menuicon__bar" x1="13" y1="32.5" x2="37" y2="32.5" />
              <circle className="menuicon__circle" r="23" cx="25" cy="25" />
            </g>
          </svg>
        </button>
        <ul className="nav__menu" id="menu" hidden={!isMenuOpen} aria-label="main navigation">
        {navItems.map((item) => (
            <li key={item.label} className="nav__item">
              <a href={item.link} className="nav__link">
              <span className="navbar__linkIcon">#</span>
                {item.label}
              </a>
            </li>
          ))}
          <li className="nav__item navbar__custom">Currículo</li>
        </ul>
        <div className="splash"></div>
      </nav>
    </header>
  );
};

export default NavbarMobileComponent;
