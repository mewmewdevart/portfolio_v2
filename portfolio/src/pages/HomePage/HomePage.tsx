import { useContext } from "react";
import ButtonComponent from "@atoms/ButtonComponent/ButtonComponent";
import NavbarComponent from "@molecules/NavbarComponent/NavbarComponent";
import { TranslationContext } from "../../context/TranslationContext";

const HomePage = () => {
  const { texts } = useContext(TranslationContext)!;

  return (
    <div className="w-full h-screen bg-dark">
      <NavbarComponent />
      <section
        className="flex justify-center items-center w-full h-[90%]"
        aria-labelledby="intro-title"
      >
        <div className="flex justify-between items-center w-[80%] mx-auto h-full">
          <div className="w-1/2 text-white flex flex-col">
            <p className="text-[18px]">{texts.welcome}</p>
            <h1 id="intro-title" className="text-[32px] font-bold text-primary">
              Larissa Cristina Benedito
            </h1>
            <h2 className="text-[14px]">
              {texts.apresentation}
            </h2>
            <ButtonComponent className="w-[150px] mt-10">
              Ver Currículo
            </ButtonComponent>
          </div>

          {/* <figure className="flex justify-end w-1/2 h-[500px]">
		<img src={PortraitImage} alt="Retrato de Larissa Cristina Benedito" className="bg-primary" />
	  </figure> */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
