import * as React from "react";
import TabsComponent, { Tab } from "../../atoms/TabsComponent/TabsComponent";
import WorkComponent from "../../organisms/WorkComponent/WorkComponent";
import SkillComponent from "../../molecules/SkillComponent/SkillComponent";

const ExperienceTemplate: React.FC = () => {
  const tabs: Tab[] = [
    {
      label: "Experiência Profissional",
      content: (
        <div>
          <WorkComponent />
        </div>
      ),
    },
    {
      label: "Habilidades",
      content: <SkillComponent />,
    },
  ];

  return (
    <section className="w-full min-h-screen bg-dark px-4 lg:px-40 transition-all duration-200 ease-in-out" aria-labelledby="experience-title">
      <header className="flex justify-center items-center w-full text-white ">
        <div className="flex flex-col w-full mx-auto h-full gap-6">
          <div className="flex flex-row items-center">
            <h3 id="experience-title" className="text-regular font-semibold">
              <span className="text-primary"># </span>Experiência
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