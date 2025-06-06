import * as React from "react";
import { useContext } from "react";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";
import { TranslationContext } from "../../../context/TranslationContext";

const AboutMeTemplate: React.FC = () => {
  const { texts } = useContext(TranslationContext)!;

  return (
    <section
      className="w-full bg-dark mt-10"
      aria-labelledby="projects-section-title"
      id="about"
    >
      <div className="flex flex-col w-full mx-auto  gap-6 justify-center  px-4 lg:px-40 transition-all duration-200 ease-in-out ">
        <div className="flex flex-row items-center w-full">
          <h3 id="projects-section-title" className="text-2xl font-semibold">
            <span className="text-primary"># </span>{texts.aboutMeTitle}
          </h3>
          <div
            aria-hidden="true"
            className="border-b border-primary w-[40%] mx-4"
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
            <p dangerouslySetInnerHTML={{ __html: texts.aboutMeParagraph7 }}></p>
            <p dangerouslySetInnerHTML={{ __html: texts.aboutMeParagraph8 }}></p>
          </div>
        </article>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* <ButtonComponent
            className="w-full sm:w-[12.5rem] focus-visible:outline-none focus-visible:px-2 focus-visible:py-1
          focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed"
            aria-label={texts.btnHireMe}
            onClick={() => window.open("#", "_blank")}
          >
            {texts.btnHireMe}
          </ButtonComponent> */}
          <ButtonComponent
            className="w-full sm:w-[12.5rem] focus-visible:outline-none focus-visible:px-2 focus-visible:py-1
          focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed"
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
