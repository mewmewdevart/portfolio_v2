import React from 'react';

interface SocialsBarComponentProps {
  socialsItem: { pathImg: string; label: string; link: string }[];
}

const SocialsBarComponent: React.FC<SocialsBarComponentProps> = ({ socialsItem }) => {
  return (
    <>
      <ul className="fixed bottom-0 left-0 ml-40 flex items-center flex-col">
        {socialsItem.map((item, index) => (
          <li key={index} className="mb-2">
            <a href={item.link} className="text-white">
              <img src={item.pathImg} alt={item.label} className='w-10'/>
            </a>
          </li>
        ))}
        <div className="w-1 h-32 bg-brandPrimary"></div>
      </ul>
    </>
  );
};

export default SocialsBarComponent;
