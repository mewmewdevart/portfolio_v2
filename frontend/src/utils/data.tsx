import { useContext } from "react";
import { TranslationContext } from "../context/TranslationContext";

import SueTheRealPrintscreen from "../assets/website-suethereal.png";
import ClarkeEnergiaPrintscreen from "../assets/website-clarkeenergia.png";
import GameSoLongPrintscreen from "../assets/game-solong.png";
import WebSIteForFunPrintscreen from "../assets/website-webforfun.png";
import CSSDrawingsForFunPrintscreen from "../assets/website-cssforfun.png"; 
import DojoPrintscreen from "../assets/website-dojo.png";
import CodePrintscreen from "../assets/code-42.png";
import HumanCoderXPrintscreen from "../assets/game-experience.png";

export interface Project {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  altText: string;
  tags?: string[];
  liveLink?: string; 
  repoLink?: string; 
}

const useData = (): Project[] => {
  const { texts } = useContext(TranslationContext)!;

  return [
  {
    id: 1,
    imageSrc: SueTheRealPrintscreen,
    title: "Landing Page: Sue The Real",
    description: texts.project1Description,
    altText: texts.project1AltText,
    tags: ["React", "TailwindCSS", "SEO", "Accessibility"],
    liveLink: "https://suethereal.com",
    repoLink: ""
  },
  {
    id: 2,
    imageSrc: ClarkeEnergiaPrintscreen,
    title: "Webpage: Clarke Energia",
    description: texts.project2Description,
    altText: texts.project2AltText,
    tags: ["React", "TailwindCSS",  "SEO", "Accessibility"],
    liveLink: "https://clarke.com.br/",
    repoLink: ""
  },
  {
    id: 3,
    imageSrc: GameSoLongPrintscreen,
    title: "Jogo So_long",
    description: texts.project3Description,
    altText: texts.project3AltText,
    tags: ["C", "Minilibx"],
    liveLink: "https://www.youtube.com/watch?v=tNngHctUoaY&feature=youtu.be",
    repoLink: "https://github.com/mewmewdevart/so_long"
  },
  {
    id: 4,
    imageSrc: WebSIteForFunPrintscreen, 
    title: "WebPages4Fun", 
    description: texts.project4Description,
    altText: texts.project4AltText,
    tags: ["HTML", "CSS", "JavaScript", "SEO", "Accessibility"], 
    liveLink: "https://mewmewdevart.github.io/WebDevelopment4Fun/",
    repoLink: "https://github.com/mewmewdevart/WebDevelopment4Fun"
  },
    {
    id: 5,
    imageSrc: CSSDrawingsForFunPrintscreen, 
    title: "CSSDrawings4Fun", 
    description: texts.project5Description,
    altText: texts.project5AltText,
    tags: ["HTML", "CSS", "JavaScript"], 
    liveLink: "https://mewmewdevart.github.io/CSSDrawings4Fun/",
    repoLink: "https://github.com/mewmewdevart/CSSDrawings4Fun"
  },
        {
    id: 6,
    imageSrc: DojoPrintscreen, 
    title: "42CSSDojo", 
    description: texts.project6Description,
    altText: texts.project6AltText,
    tags: ["HTML", "CSS", "Documentation"], 
    liveLink: "https://www.linkedin.com/feed/update/urn:li:activity:7110771835759140865/",
    repoLink: "https://github.com/42sp/dojos/tree/main/CSSDesafios/00_Gatinho"
  },
  {
    id: 7,
    imageSrc: CodePrintscreen, 
    title: "42Projects", 
    description: texts.project7Description,
    altText: texts.project7AltText,
    tags: ["Algorithms", "Data Structures"], 
    liveLink: "",
    repoLink: "https://github.com/mewmewdevart/42Projects"
  },
    {
    id: 8,
    imageSrc: HumanCoderXPrintscreen, 
    title: "HumanCoder Experience", 
    description: texts.project8Description,
    altText: texts.project8AltText,
    tags: ["Javascript"], 
    liveLink: "https://vp.ubox.world/application/test?id=7811BF26-421B-E407-2B4C-E8605B0A4CF4",
    repoLink: "https://www.behance.net/gallery/174139515/HumanCoder-Experience"
  },
  ];
};

export default useData;
