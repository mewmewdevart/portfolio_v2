"use client";
import React, { useContext } from "react";
import ButtonComponent from "@atoms/ButtonComponent/ButtonComponent";
import { TranslationContext } from "../../../context/TranslationContext";

const HomeTemplate = () => {
  const { texts } = useContext(TranslationContext)!;

  return (
    <section className="w-full h-screen bg-dark  " aria-labelledby="home-title">
      <div className="flex flex-col w-full mx-auto h-full gap-6 flex justify-center w-full h-full mx-auto items-start py-2 px-4 md:px-40">
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
              className="max-w-[13rem] mt-10"
              aria-label="View my Resume"
            >
              {texts.btnCurriculum}
            </ButtonComponent>
          </div>
        </article>
      </div>
    </section>
  );
};

export default HomeTemplate;
