import { useContext } from "react";
import { TranslationContext } from "../../../context/TranslationContext";
import useData, { Project as ProjectType } from "../../../utils/data"; // Altere aqui
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCode } from "@fortawesome/free-solid-svg-icons";

const ProjectsTemplate = () => {
  const { texts } = useContext(TranslationContext)!;
  const projects = useData();

  const openLink = (url?: string) => {
    if (url && url.trim() !== "") {
      window.open(url, "_blank", "noopener noreferrer");
    }
  };

  return (
    <section
      className="w-full bg-dark mt-10"
      aria-labelledby="projects-section-title"
      id="projects"
    >
      <div className="flex flex-col w-full mx-auto min-h-[500px] gap-6 justify-center items-center px-4 lg:px-40 transition-all duration-200 ease-in-out ">
        <div className="flex flex-row items-center w-full">
          <h3 id="projects-section-title" className="text-2xl font-semibold">
            <span className="text-primary"># </span>
            {texts.projects || "Projetos"}
          </h3>
          <div
            aria-hidden="true"
            className="border-b border-primary w-[40%] mx-4"
          ></div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-6 ">
          {projects.map((project: ProjectType) => {
            const isLiveLinkEmpty = !project.liveLink || project.liveLink.trim() === "";
            const isRepoLinkEmpty = !project.repoLink || project.repoLink.trim() === "";

            return (
              <div
                key={project.id}
                className="flex flex-col gap-2  border-2 border-primary overflow-hidden group hover:scale-105 transition-transform duration-500 cursor-pointer focus-visible:outline-none focus-visible:px-2 focus-visible:py-1
          focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed "
                tabIndex={0}
                role="article"
                aria-labelledby={`project-title-${project.id}`}
                aria-describedby={`project-description-${project.id} project-tags-${project.id}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault(); 
                    if (!isLiveLinkEmpty) {
                      openLink(project.liveLink);
                    } else if (!isRepoLinkEmpty) {
                      openLink(project.repoLink);
                    } else {
                      console.log(`Projeto ${project.title} ativado, sem links disponíveis.`);
                    }
                  }
                }}
              >
                <div className="w-full h-[200px] overflow-hidden flex items-center justify-center">
                  <img
                    src={project.imageSrc}
                    alt={project.altText}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col gap-2 p-4 justify-between">
                  <h4 id={`project-title-${project.id}`} className="text-xl font-semibold text-white">{project.title}</h4>
                  <p id={`project-description-${project.id}`} className="text-gray-200 text-sm">{project.description}</p>

                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2" id={`project-tags-${project.id}`}>
                      <h5 className="sr-only">{texts.tagsTitle || "Tecnologias utilizadas:"}</h5>
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-2 mt-4">
                    <ButtonComponent
                      className="w-full sm:w-auto flex-1 focus-visible:outline-none focus-visible:px-2 focus-visible:py-1
          focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed flex items-center gap-2 justify-center"
                      aria-label={`${texts.viewButtonLabel} ${project.title}`}
                      onClick={() => openLink(project.liveLink)}
                      disabled={isLiveLinkEmpty}
                    >
                      {texts.viewButtonLabel} <FontAwesomeIcon icon={faEye} aria-hidden="true" />
                    </ButtonComponent>

                    <ButtonComponent
                      className="w-full sm:w-auto flex-1 focus-visible:outline-none focus-visible:px-2 focus-visible:py-1
          focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed flex items-center gap-2 justify-center"
                      aria-label={`${texts.viewCodeButtonLabel} ${project.title}`}
                      onClick={() => openLink(project.repoLink)}
                      disabled={isRepoLinkEmpty}
                    >
                      {texts.viewCodeButtonLabel} <FontAwesomeIcon icon={faCode} aria-hidden="true" />
                    </ButtonComponent>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <ButtonComponent
          className="w-full sm:w-[12.5rem] mt-8 focus-visible:outline-none focus-visible:px-2 focus-visible:py-1
          focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed"
          disabled={true}
          onClick={() => {
            const allProjectsLink = "#";
            openLink(allProjectsLink);
          }}
        >
          🚧 {texts.btnShowMoreProjects}
        </ButtonComponent> */}
      </div>
    </section>
  );
};

export default ProjectsTemplate;