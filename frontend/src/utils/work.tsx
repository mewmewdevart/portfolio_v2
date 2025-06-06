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
          companyName: "MewmewDevArt",
          jobName: texts.webDesignerDeveloper,
          jobDescription: texts.webDesignerDeveloperDescription,
          date: texts.webDate,
        },
        {
          companyName: "MewmewDevArt",
          jobName: texts.digitalIllustrator,
          jobDescription: texts.digitalIllustratorDescription,
          date: texts.digitalDate,
        },
        {
          companyName: "Clarke Energia",
          jobName: texts.fullstackDeveloper,
          jobDescription: texts.fullstackDeveloperDescription,
          date: texts.fullDate,
        },
        {
          companyName: "Ubiquo Techs",
          jobName: texts.javascriptDeveloper,
          jobDescription: texts.javascriptDeveloperDescription,
          date: texts.javascriptDate,
        },
      ],
    },
  ];
};

export default useWork;
