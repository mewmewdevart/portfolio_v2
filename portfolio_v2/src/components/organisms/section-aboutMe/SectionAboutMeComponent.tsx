import React from "react";
import MePhoto from "@assets/images/image.webp";
import style from "./SectionAboutMeComponent.module.css";
import TabsComponent from "@components/molecules/TabsComponent";

import cypressImagePath from '@assets/images/icons/cypress.svg'
import reactImagePath from '@assets/images/icons/react.svg'
import pythonImagePath from '@assets/images/icons/python.svg'
import djangoImagePath from '@assets/images/icons/django.svg'
import ButtonComponent from "@components/atoms/button/ButtonComponent";

export const tabs = [
  {
    id: 'tab1',
    label: 'FrontEnd',
    content: [
      {
        Name: 'React',
        imgPath: reactImagePath,
      },
      {
        Name: 'Cypress',
        imgPath: cypressImagePath,
      },
    ],
  },
  {
    id: 'tab2',
    label: 'BackEnd',
    content: [
      {
        Name: 'Python',
        imgPath: pythonImagePath,
      },
      {
        Name: 'Django',
        imgPath: djangoImagePath,
      },
    ],
  },
  {
    id: 'tab3',
    label: 'Outros',
    content: [
      {
        Name: 'Aseprite',
        imgPath: 'https://reactjs.org/logo-og.png',
      },
    ],
  },
];

const SectionAboutMeComponent: React.FC = () => {
  return (
    <section className={style.section}>
      <div className="flex justify-between">
        <div className="w-full">
          <h2 className="text-[32px]">
            <span className="text-brandPrimary">#</span>
            Sobre Mim</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            porta vitae leo vel imperdiet. Proin molestie eros quis dolor porta
            vestibulum. 
            <br></br><br></br>
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            porta vitae leo vel imperdiet. Proin molestie eros quis dolor porta
            vestibulum. Nulla nec leo pulvinar, viverra purus non, hendrerit neque.
            Donec cursus, nisl sed commodo pulvinar, est massa hendrerit orci, ac
            dignissim erat massa id nunc. Fusce vitae pellentesque mauris, et
            convallis sem. Nulla suscipit dolor sit amet semper viverra. Nam sed
            dolor nunc.
          </p>
        </div>
        {/* <div className="hidden sm:flex w-full sm:w-1/2 justify-end h-[480px]">
          <img src={MePhoto} alt="Photo of me" />
        </div> */}
      </div>
      <TabsComponent tabs={tabs} />
      <ButtonComponent>Saiba mais</ButtonComponent>
    </section>
  );
};

export default SectionAboutMeComponent;