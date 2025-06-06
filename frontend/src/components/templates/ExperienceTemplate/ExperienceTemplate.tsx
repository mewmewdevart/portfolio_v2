import * as React from "react";
import { useContext } from "react";
import TabsComponent, { Tab } from "../../atoms/TabsComponent/TabsComponent";
import WorkComponent from "../../organisms/WorkComponent/WorkComponent";
import SkillComponent from "../../molecules/SkillComponent/SkillComponent";
import { TranslationContext } from "../../../context/TranslationContext";

const ExperienceTemplate: React.FC = () => {
  const { texts } = useContext(TranslationContext)!;

  const tabs: Tab[] = [
    {
      label: texts.experienceProfessional,
      content: (
        <div>
          <WorkComponent />
        </div>
      ),
    },
    {
      label: texts.skills,
      content: <SkillComponent />,
    },
  ];

  return (
    <section
      className="w-full bg-dark px-4 lg:px-40 transition-all duration-200 ease-in-out mt-10"
      aria-labelledby="experience-title"
      id="experience"
    >
      <header className="flex justify-center items-center w-full text-white ">
        <div className="flex flex-col w-full mx-auto h-full gap-6">
          <div className="flex flex-row items-center">
            <h3 id="experience-title" className="text-2xl font-semibold">
              <span className="text-primary"># </span>{texts.experience}
            </h3>
            <div
              aria-hidden="true"
              className="border-b border-primary w-[40%] mx-4"
            ></div>
          </div>
          <TabsComponent tabs={tabs} />
        </div>
      </header>
    </section>
  );
};

export default ExperienceTemplate;