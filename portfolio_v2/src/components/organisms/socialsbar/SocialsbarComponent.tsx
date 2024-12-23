import React from 'react';
import style from './SocialsbarComponent.module.css';

interface SocialsBarComponentProps {
  socialsItem: { pathImg: string; label: string; link: string }[];
}

const SocialsBarComponent: React.FC<SocialsBarComponentProps> = ({ socialsItem }) => {
  return (
    <div className={style.footer__lineSocials}>
      <ul>
        {socialsItem.map((item, index) => (
          <li key={index} className={style.footer_content}>
            <a href={item.link} className="text-white" aria-label={item.label} target="_blank">
              <img src={item.pathImg} alt={item.label} className='w-8 h-8' />
            </a>
          </li>
        ))}
      </ul>
      <div className="w-1 h-32 bg-brandPrimary"></div>
    </div>
  );
};

export default SocialsBarComponent;
