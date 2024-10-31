import React from 'react';
import style from './NavbarComponent.module.css';
import logo from '../../../assets/images/icons/logo.svg';

interface NavbarComponentProps {
  navItems: { label: string, link: string }[];
}

const NavbarComponent: React.FC<NavbarComponentProps> = ({ navItems }) => {
  return (
    <nav className={style.navbar}>
      <a className={style.navbar__logo} href='#'>
        <img src={logo} alt="Logo MewmewDev" className='w-10' />
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
        <li className={style.navbar__custom}>Curriculo</li>
      </ul>

    </nav>
  );
};

export default NavbarComponent;
