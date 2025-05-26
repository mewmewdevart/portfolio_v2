import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { TranslationContext } from "../context/TranslationContext";

const useWork = () => {
  const { texts } = useContext(TranslationContext)!;

  return [
    {
      icon: (
        <FontAwesomeIcon icon={faBriefcase} className="w-5 h-5 text-primary" />
      ),
      category: texts.experienceProfessional,
      skills: [
        {
          companyName: "MewmewDevArt — Freelancer",
          jobName: texts.webDesignerDeveloper,
          jobDescription: texts.webDesignerDeveloperDescription,
          date: "Jan 2023 - Present",
        },
        {
          companyName: "MewmewDevArt — Freelancer",
          jobName: texts.digitalIllustrator,
          jobDescription: texts.digitalIllustratorDescription,
          date: "Jan 2023 - Present",
        },
        {
          companyName: "Clarke Energia",
          jobName: texts.fullstackDeveloper,
          jobDescription: texts.fullstackDeveloperDescription,
          date: "Feb 2024 - Oct 2024",
        },
        {
          companyName: "Ubiquo Techs",
          jobName: texts.javascriptDeveloper,
          jobDescription: texts.javascriptDeveloperDescription,
          date: "Oct 2023 - Dec 2023",
        },
      ],
    },
  ];
};

export default useWork;
