import * as React from "react";
import TabsComponent, { Tab } from "@atoms/TabsComponent/TabsComponent";
import WorkComponent from "@molecules/WorkComponent/WorkComponent";
import SkillComponent from "@molecules/SkillComponent/SkillComponent";

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
    <section className="w-full bg-dark" aria-labelledby="experience-title">
      <header className="flex justify-center items-center w-full text-white py-4 lg:py-20">
        <div className="flex flex-col w-[90%] sm:w-[80%] mx-auto h-full gap-6">
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
