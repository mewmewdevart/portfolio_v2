"use client";
import React, { useContext } from "react";
import ButtonComponent from "@atoms/ButtonComponent/ButtonComponent";
import { TranslationContext } from "../../../context/TranslationContext";
import SocialsBarComponent from "@atoms/SocialsBarComponent/SocialsBarComponent";

const HomeTemplate = () => {
  const { texts } = useContext(TranslationContext)!;

  return (
    <div className="w-full h-screen bg-dark">
      <SocialsBarComponent />
      <section
        className="flex justify-center w-full h-full mx-auto items-center py-2 px-4 md:px-40"
        aria-labelledby="intro-title"
        role="main"
      >
        <article className="flex justify-between items-center w-full mx-auto h-full">
          <div className="w-full md:w-1/2 text-white flex flex-col">
            <p className="text-small">{texts.welcome}</p>
            <h1 id="intro-title" className="text-large font-bold text-primary">
              Larissa Cristina Benedito
            </h1>
            <h2 className="text-large font-bold text-gray">
              {texts.introduction}
            </h2>
            <h3 className="text-small text-gray">{texts.presentation}</h3>
            <ButtonComponent
              className="w-[9.375rem] mt-10"
              aria-label="View my Resume"
            >
              Ver Currículo
            </ButtonComponent>
          </div>

          {/* <div className="hidden md:flex flex-col justify-end relative text-white bg-red-400">
            <Image
              src="/portrait1.png"
              alt="A portrait of Larissa Cristina Benedito, a Fullstack Junior Developer"
              width={600}
              height={600}
            />
            <div
              id="developer-role"
              className="flex items-center justify-center text-center w-[21.875rem] h-[2.5rem] border-2 border-[#AA7EDF] absolute right-0 top-full gap-4"
            >
              <span className="w-3 h-3 bg-primary"></span>
              Desenvolvedora Fullstack Junior
            </div>
          </div> */}
        </article>
      </section>
    </div>
  );
};

export default HomeTemplate;
