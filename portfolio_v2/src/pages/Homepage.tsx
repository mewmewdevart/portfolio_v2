import React from 'react';

import HeaderHomeComponent from '@components/organisms/header-home/HeaderComponent';
import imageBackground from '@assets/images/bgMe.png';

function HomePage() {
  return (
    <>
      <HeaderHomeComponent
        textTitle={
          <>
            Larissa é{' '}
            <span className="text-brandPrimary">Desenvolvedora Web</span>
          </>
        }
        styleTitle="text-[32px] lg:text-[32px] font-bold"
        textDescription="Ela cria experiências, mesclando a tecnologia com o design. Apaixonada pelas pessoas e pelo mundo tecnológico, dedica-se ao desenvolvimento de aplicações que cativem o usuário." 
        styleDescription='text-brandGrayLight'
        textStatus="Atualmente, procurando por oportunidades" 
        imgPath={imageBackground}
        textButton="Entrar em contato!"
        styleButton="w-fit"
      />
    </>
  );
}

export default HomePage;
