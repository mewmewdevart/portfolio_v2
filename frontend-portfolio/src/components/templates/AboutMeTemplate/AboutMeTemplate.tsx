import * as React from "react";
import ButtonComponent from "@atoms/ButtonComponent/ButtonComponent";

const AboutMeTemplate: React.FC = () => {
  return (
    <section className="w-full" aria-labelledby="about-me-title">
      <header className="flex justify-center items-center w-full text-white py-4 lg:py-20">
        <div className="flex flex-col w-[90%] sm:w-[80%] mx-auto h-full gap-6">
          <div className="flex flex-row items-center">
            <h3 id="about-me-title" className="text-regular font-semibold">
              <span className="text-primary"># </span>Sobre Mim
            </h3>
            <div
              aria-hidden="true"
              className="border-b border-primary w-[2.5rem] sm:w-[1.875rem] mx-4"
            ></div>
          </div>
          <article className="text-gray text-sm sm:text-base">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta
              enim orci, non cursus lacus laoreet vel. Aliquam in risus diam.
              Donec pharetra blandit risus, in pharetra urna porta nec. Duis
              iaculis ut sem a commodo. Donec feugiat, quam sit amet dapibus
              tristique, quam nulla egestas eros, ut sagittis tortor leo quis
              diam. Proin facilisis tempus pretium. Ut magna nulla, gravida eu
              felis eu, consequat sollicitudin lectus. Mauris feugiat eros
              suscipit metus placerat, id posuere velit accumsan. Aliquam sit amet
              metus vehicula, mollis quam in, egestas arcu. Vestibulum semper
              fringilla tortor ac malesuada. Pellentesque porttitor, velit eget
              molestie finibus, ante dolor vulputate leo, id viverra dui dolor
              eget tortor. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos.
            </p>
            <br /> <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta
              enim orci, non cursus lacus laoreet vel. Aliquam in risus diam.
              Donec pharetra blandit risus, in pharetra urna porta nec. Duis
              iaculis ut sem a commodo. Donec feugiat, quam sit amet dapibus
              tristique, quam nulla egestas eros, ut sagittis tortor leo quis
              diam. Proin facilisis tempus pretium. Ut magna nulla, gravida eu
              felis eu, consequat sollicitudin lectus. Mauris feugiat eros
              suscipit metus placerat, id posuere velit accumsan. Aliquam sit amet
              metus vehicula, mollis quam in, egestas arcu. Vestibulum semper
              fringilla tortor ac malesuada. Pellentesque porttitor, velit eget
              molestie finibus, ante dolor vulputate leo, id viverra dui dolor
              eget tortor. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos.
            </p>
          </article>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonComponent
              className="w-full sm:w-[12.5rem]"
              aria-label="Contratar meus serviços"
            >
              Contratar Serviços
            </ButtonComponent>
            <ButtonComponent
              className="w-full sm:w-[12.5rem]"
              aria-label="Visitar meu LinkedIn"
            >
              Acessar o Linkedin
            </ButtonComponent>
          </div>
        </div>
      </header>
    </section>
  );
};

export default AboutMeTemplate;
