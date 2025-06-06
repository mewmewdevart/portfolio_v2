import React, { useContext } from "react";
import { TranslationContext } from "../../../context/TranslationContext";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";

const ContactTemplate: React.FC = () => {
  const context = useContext(TranslationContext);

  if (!context) {
    return <p className="text-white">Loading...</p>;
  }

  const { texts } = context;

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="w-full bg-dark my-10"
      aria-labelledby="contact-section-title"
      id="contact"
    >
      <div className="flex flex-col w-full mx-auto gap-6 justify-center px-4 lg:px-40 transition-all duration-200 ease-in-out">
        <div className="flex flex-row items-center w-full">
          <h3 id="contact-section-title" className="text-2xl font-semibold">
            <span className="text-primary"># </span>
            {texts.contactMeTitle}
          </h3>
          <div aria-hidden="true" className="border-b border-primary w-[40%] mx-4" />
        </div>

        <p className="text-lg text-white">{texts.contactMeDescription}</p>

        <div className="flex gap-4 w-full items-center justify-center">
          <ButtonComponent
            className="w-full sm:w-[12.5rem] focus-visible:outline-none focus-visible:px-2 focus-visible:py-1 focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed"
            aria-label={texts.sendEmail}
            onClick={() => openLink("mailto:mewmewdevart@gmail.com")}
          >
            {texts.sendEmail}
          </ButtonComponent>

          <ButtonComponent
            className="w-full sm:w-[12.5rem] focus-visible:outline-none focus-visible:px-2 focus-visible:py-1 focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed"
            aria-label={texts.btnCurriculum}
            onClick={() =>
              openLink(
                "https://drive.google.com/drive/folders/1z4r5m8AN2afei71LQ4TQ8lVcCBUqBjN6?usp=sharing"
              )
            }
          >
            {texts.btnCurriculum}
          </ButtonComponent>

          {/* Se quiser usar futuramente, descomente e adapte
          <ButtonComponent
            className="w-full sm:w-[12.5rem] focus-visible:outline-none focus-visible:px-2 focus-visible:py-1 focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed"
            aria-label={texts.btnLinkedIn}
            onClick={() =>
              openLink("https://www.linkedin.com/in/mewmewdevart/")
            }
          >
            {texts.contractServices}
          </ButtonComponent>
          */}
        </div>
      </div>
    </section>
  );
};

export default ContactTemplate;
