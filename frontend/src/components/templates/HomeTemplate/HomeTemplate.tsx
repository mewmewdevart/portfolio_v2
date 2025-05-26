import { useContext } from "react";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";
import { TranslationContext } from "../../../context/TranslationContext";

const HomeTemplate = () => {
  const { texts } = useContext(TranslationContext)!;

  return (
    <section className="w-full min-h-screen bg-dark flex items-center justify-center  px-4 lg:px-40 transition-all duration-200 ease-in-out" aria-labelledby="home-title">
      <div className="flex flex-col w-full mx-auto gap-6 justify-center  items-start">
        <article className="flex justify-between items-center w-full mx-auto h-full">
          <div className="w-full lg:w-1/2 text-white flex flex-col">
            <p className="text-small">{texts.welcome}</p>
            <h1 id="intro-title" className="text-4xl font-bold text-primary">
              Larissa Cristina Benedito
            </h1>
            <h2 className="text-2xl font-bold text-gray">
              {texts.introduction}
            </h2>
            <p className="text-small text-gray">{texts.presentation}</p>
            <ButtonComponent
              className="max-w-[13rem] mt-4 focus-visible:outline-none focus-visible:px-2 focus-visible:py-1
          focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed"
              aria-label="View my Resume"
              onClick={() => window.open("#", "_blank")}
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