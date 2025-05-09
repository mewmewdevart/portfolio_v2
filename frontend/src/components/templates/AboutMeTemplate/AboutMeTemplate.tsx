import * as React from "react";
import { useContext } from "react";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";
import { TranslationContext } from "../../../context/TranslationContext";

const AboutMeTemplate: React.FC = () => {
  const { texts } = useContext(TranslationContext)!;

  return (
    <section
      className="w-full bg-dark "
      aria-labelledby="about-me-title"
    >
      <div className="flex flex-col w-full mx-auto h-full gap-6 justify-center items-start py-2 px-4 lg:px-40 transition-all duration-200 ease-in-out">
        <div className="flex flex-row items-center w-full">
          <h3 id="about-me-title" className="text-2xl font-semibold ">
            <span className="text-primary"># </span>{texts.aboutMeTitle}
          </h3>
          <div
            aria-hidden="true"
            className="border-b border-primary w-[5rem] sm:w-[20rem] mx-4"
          ></div>
        </div>
        <article className="text-gray text-sm sm:text-base">
          <div className="space-y-4">
            <p dangerouslySetInnerHTML={{ __html: texts.aboutMeParagraph1 }}></p>
            <p dangerouslySetInnerHTML={{ __html: texts.aboutMeParagraph2 }}></p>
            <p dangerouslySetInnerHTML={{ __html: texts.aboutMeParagraph3 }}></p>
            <p dangerouslySetInnerHTML={{ __html: texts.aboutMeParagraph4 }}></p>
            <p dangerouslySetInnerHTML={{ __html: texts.aboutMeParagraph5 }}></p>
            <p dangerouslySetInnerHTML={{ __html: texts.aboutMeParagraph6 }}></p>
          </div>
        </article>
        <div className="flex flex-col sm:flex-row gap-4">
          <ButtonComponent
            className="w-full sm:w-[12.5rem]"
            aria-label={texts.btnHireMe}
            onClick={() => window.open("#", "_blank")}
          >
            {texts.btnHireMe}
          </ButtonComponent>
          <ButtonComponent
            className="w-full sm:w-[12.5rem]"
            aria-label={texts.btnLinkedIn}
            onClick={() => window.open("https://www.linkedin.com/in/mewmewdevart/", "_blank")}
          >
            {texts.btnLinkedIn}
          </ButtonComponent>
        </div>
      </div>
    </section>
  );
};

export default AboutMeTemplate;
