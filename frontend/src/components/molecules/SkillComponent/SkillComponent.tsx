import React from "react";
import TooltipComponent from "../../atoms/TooltipComponent/TooltipComponent";
import useSkills from "../../../utils/skills";

const SkillComponent: React.FC = () => {
  const skills = useSkills();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {skills.map(({ icon, category, skills }, index) => {
        const safeCategory = category || `category-${index}`;
        const safeId = safeCategory.toLowerCase().replace(/[^\w]+/g, "-");

        return (
          <article
            key={safeCategory}
            className="border border-gray p-4 bg-dark"
            aria-labelledby={`${safeId}-skills`}
          >
            <div className="flex items-center gap-2 mb-4">
              {icon}
              <h4
                id={`${safeId}-skills`}
                className="text-lg font-medium text-primary"
              >
                {category}
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map(({ name, description }) => (
                <TooltipComponent key={name} description={description}>
                  <span className="bg-gray/20 text-gray text-sm px-3 py-1 rounded-full cursor-help">
                    {name}
                  </span>
                </TooltipComponent>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default SkillComponent;