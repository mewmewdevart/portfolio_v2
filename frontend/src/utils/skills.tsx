import {
  faCode,
  faLayerGroup,
  faDatabase,
  faCogs,
  faShieldAlt,
  faClipboardCheck,
  faTerminal,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { TranslationContext } from "../context/TranslationContext";

const useSkills = () => {
  const { texts } = useContext(TranslationContext)!;

  return [
    {
      icon: <FontAwesomeIcon icon={faCode} className="w-5 h-5 text-primary" />,
      category: texts.languagesTechnologies,
      skills: [
        { name: "HTML5", description: texts.htmlDescription },
        { name: "CSS3", description: texts.cssDescription },
        { name: "JavaScript", description: texts.jsDescription },
        { name: "TypeScript", description: texts.tsDescription },
        { name: "Node.js", description: texts.nodeDescription },
        { name: "Python", description: texts.pythonDescription },
      ],
    },
    {
      icon: <FontAwesomeIcon icon={faLayerGroup} className="w-5 h-5 text-primary" />,
      category: texts.frontendFrameworks,
      skills: [
        { name: "React", description: texts.reactDescription },
        { name: "Angular", description: texts.angularDescription },
        { name: "Next.js", description: texts.nextDescription },
        { name: "Tailwind CSS", description: texts.tailwindDescription },
        { name: "Material UI", description: texts.materialUIDescription },
        { name: "Bootstrap", description: texts.bootstrapDescription },
        { name: "Wordpress", description: texts.wordpressDescription },
      ],
    },
    {
      icon: <FontAwesomeIcon icon={faCogs} className="w-5 h-5 text-primary" />,
      category: texts.backendFrameworks,
      skills: [
        { name: "Express.js", description: texts.expressDescription },
        { name: "Jest", description: texts.jestDescription },
        { name: "Axios", description: texts.axiosDescription },
        { name: "Fetch API", description: texts.fetchDescription },
        { name: "JWT", description: texts.jwtDescription },
      ],
    },
    {
      icon: <FontAwesomeIcon icon={faDatabase} className="w-5 h-5 text-primary" />,
      category: texts.databases,
      skills: [
        { name: "PostgreSQL", description: texts.postgresDescription },
        { name: "Prisma ORM", description: texts.prismaDescription },
        { name: "SQL", description: texts.sqlDescription },
        { name: "Zod", description: texts.zodDescription },
      ],
    },
    {
      icon: <FontAwesomeIcon icon={faShieldAlt} className="w-5 h-5 text-primary" />,
      category: texts.bestPractices,
      skills: [
        { name: texts.accessibility, description: texts.accessibilityDescription },
        { name: "Mobile First", description: texts.mobileFirstDescription },
        { name: "Atomic Design", description: texts.atomicDesignDescription },
        { name: "Design System", description: texts.designSystemDescription },
        { name: "SEO", description: texts.seoDescription },
        { name: "Web Vitals", description: texts.webVitalsDescription },
        { name: "Lazy Loading", description: texts.lazyLoadingDescription },
        { name: "UX/UI", description: texts.uxUiDescription },
      ],
    },
    {
      icon: <FontAwesomeIcon icon={faClipboardCheck} className="w-5 h-5 text-primary" />,
      category: texts.testing,
      skills: [
        { name: "Unit Tests", description: texts.unitTestsDescription },
        { name: "Integration Tests", description: texts.integrationTestsDescription },
        { name: "End-to-End Tests", description: texts.e2eTestsDescription },
      ],
    },
    {
      icon: <FontAwesomeIcon icon={faTools} className="w-5 h-5 text-primary" />,
      category: texts.toolsAutomation,
      skills: [
        { name: "Git", description: texts.gitDescription },
        { name: "GitHub", description: texts.githubDescription },
        { name: "Vite", description: texts.viteDescription },
        { name: "ESLint/Prettier", description: texts.eslintPrettierDescription },
        { name: "Husky", description: texts.huskyDescription },
        { name: "GitHub Actions", description: texts.githubActionsDescription },
        { name: "Docker", description: texts.dockerDescription },
        { name: "Postman", description: texts.postmanDescription },
        { name: "Shell Script", description: texts.shellScriptDescription },
      ],
    },
    {
      icon: <FontAwesomeIcon icon={faTerminal} className="w-5 h-5 text-primary" />,
      category: texts.complementary,
      skills: [
        { name: "Scrum", description: texts.scrumDescription },
        { name: "Kanban", description: texts.kanbanDescription },
        { name: "Inbound Marketing", description: texts.inboundMarketingDescription },
        { name: "Linux", description: texts.linuxDescription },
      ],
    },
  ];
};

export default useSkills;