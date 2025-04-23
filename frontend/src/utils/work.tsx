import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const work = [
  {
    icon: (
      <FontAwesomeIcon icon={faBriefcase} className="w-5 h-5 text-primary" />
    ),
    category: "Experiência Profissional",
    skills: [
      {
        companyName: "MewmewDevArt — Freelancer",
        jobName: "Web Designer Developer",
        jobDescription:
"- Desenvolvimento de interfaces web acessíveis, responsivas e otimizadas, com foco em usabilidade, performance e SEO.<br>" +
"- Especializada em JavaScript, HTML5, CSS3, React e WordPress, aplicando técnicas como Lazy Loading e atuando também em UX/UI Design no Figma.<br>" +
"- Experiência colaborando com equipes multidisciplinares e liderando projetos em parceria com áreas como Marketing, Produto e Design.<br>",
        date: "Jan 2023 - Present",
      },
      {
        companyName: "MewmewDevArt — Freelancer",
        jobName: "Ilustradora Digital",
jobDescription: `
  - Desenvolvimento de identidades visuais em PixelArt personalizadas para streamers em diversas plataformas, como Twitch, Facebook e YouTube, atuando principalmente com clientes estrangeiros falantes de inglês, francês e espanhol. <br>
  - Criação de assets para jogos, contribuindo com ilustrações e elementos visuais exclusivos para projetos digitais. <br>
  - Designer para redes sociais, desenvolvendo peças gráficas para Instagram, Facebook e Twitter, incluindo designs para stories, feed, banners e outras artes promocionais.
`,
        date: "Jan 2023 - Presente",
      },
      {
        companyName: "Clarke Energia",
        jobName: "Fullstack Developer (PJ — Tempo integral)",
        jobDescription:
          "- Desenvolvimento front-end com React, TypeScript, Radix UI e Tailwind CSS, seguindo Design System no Figma.<br>" +
          "- Contribuí com testes E2E (Cypress), correção de PRs e boas práticas de acessibilidade.<br>" +
          "- Destaque para o Marketplace, biblioteca FotonUI e site institucional.<br>" +
          "- Tudo isso com autonomia, criatividade e colaboração em um time remoto e diverso.",
        date: "Fev 2024 - Out 2024",
      },
      {
        companyName: "Ubiquo Techs",
        jobName: "JavaScript Developer (PJ — Tempo integral)",
        jobDescription:
          "- Desenvolvimento de experiências interativas com JavaScript na Ubox Engine.<br>" +
          "- Responsável pela criação visual e codificação de jogos educativos e experiências sensoriais com foco em usabilidade.<br>" +
          "- Destaque para o Tocate (autoexame de mama) e projetos educacionais com captura de movimento para ensino de inglês.",
        date: "Out 2023 - Dez 2023",
      },
    ],
  },
];
