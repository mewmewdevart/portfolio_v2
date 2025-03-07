import React from "react";

const ExperiencePage: React.FC = () => {
  const experiences = [
    {
      category: "FrontEnd",
      skills: ["React", "Angular", "jQuery"],
    },
    {
      category: "BackEnd",
      skills: ["Node.js", "Express", "Django"],
    },
	{
		category: "FrontEnd",
		skills: ["React", "Angular", "jQuery"],
	  },
	  {
		category: "BackEnd",
		skills: ["Node.js", "Express", "Django"],
	  },
  ];

  return (
    <section className="w-full bg-dark" aria-labelledby="experience-title">
      <header className="flex justify-center items-center w-full text-white py-20">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {experiences.map(({ category, skills }) => (
              <article
                key={category}
                className="border border-gray p-4 bg-dark"
                aria-labelledby={`${category}-skills`}
              >
                <h4 id={`${category}-skills`} className="text-lg font-medium text-primary mb-2">
                  {category}
                </h4>
                <ul className="space-y-1" role="list">
                  {skills.map((skill) => (
                    <li key={skill} className="text-gray">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </header>
    </section>
  );
};

export default ExperiencePage;
