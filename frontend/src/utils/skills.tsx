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

export const skills = [
  {
    icon: <FontAwesomeIcon icon={faCode} className="w-5 h-5 text-primary" />,
    category: "Linguagens e Tecnologias",
    skills: [
      {
        name: "HTML5",
        description: "Linguagem de marcação usada para estruturar conteúdo na web",
      },
      {
        name: "CSS3 (Grid, Flexbox, Media Queries, Animações)",
        description: "Estilos e layout de páginas web responsivas",
      },
      {
        name: "JavaScript (ES6+)",
        description: "Linguagem de programação para interação em páginas web",
      },
      {
        name: "TypeScript",
        description: "Versão tipada do JavaScript que melhora a segurança do código",
      },
      {
        name: "Node.js",
        description: "Ambiente para executar JavaScript no lado do servidor",
      },
      {
        name: "Python",
        description: "Linguagem de programação de alto nível e fácil leitura",
      },
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faLayerGroup} className="w-5 h-5 text-primary" />,
    category: "Frameworks e Bibliotecas - Frontend",
    skills: [
      {
        name: "React (Hooks, Componentes, Estado)",
        description: "Biblioteca para construir interfaces de usuário",
      },
      {
        name: "Angular",
        description: "Framework JavaScript para construir aplicações web dinâmicas",
      },
      { name: "AngularJS", description: "Versão anterior do Angular" },
      {
        name: "Next.js",
        description: "Framework React para renderização do lado do servidor",
      },
      {
        name: "Tailwind CSS",
        description: "Framework CSS utilitário para design rápido",
      },
      {
        name: "Material UI",
        description: "Biblioteca de componentes React baseada no Material Design",
      },
      {
        name: "Bootstrap",
        description: "Framework CSS para design responsivo e mobile-first",
      },
      {
        name: "PO-UI (TOTVS)",
        description: "Biblioteca de UI desenvolvida pela TOTVS",
      },
      {
        name: "Wordpress",
        description: "Sistema de gerenciamento de conteúdo popular para blogs e sites",
      },
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faCogs} className="w-5 h-5 text-primary" />,
    category: "Frameworks e Bibliotecas - Backend",
    skills: [
      {
        name: "Express.js (REST APIs)",
        description: "Framework minimalista para APIs RESTful em Node.js",
      },
      {
        name: "Jest",
        description: "Framework para testes unitários e integração em JavaScript",
      },
      {
        name: "Axios",
        description: "Biblioteca para fazer requisições HTTP em JavaScript",
      },
      {
        name: "Fetch API",
        description: "API nativa JavaScript para fazer requisições HTTP",
      },
      {
        name: "JWT (auth)",
        description: "JSON Web Tokens para autenticação e autorização",
      },
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faDatabase} className="w-5 h-5 text-primary" />,
    category: "Banco de Dados",
    skills: [
      {
        name: "PostgreSQL",
        description: "Sistema de gerenciamento de banco de dados relacional",
      },
      {
        name: "Prisma ORM",
        description: "ORM para Node.js para interagir com bancos de dados SQL",
      },
      {
        name: "ORM",
        description: "Mecanismo de mapeamento objeto-relacional",
      },
      {
        name: "SQL Intermediário",
        description: "Conhecimentos intermediários em SQL para consultas e manipulação de dados",
      },
      {
        name: "Zod (validação)",
        description: "Biblioteca de validação e análise de dados para TypeScript",
      },
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faShieldAlt} className="w-5 h-5 text-primary" />,
    category: "Boas práticas e performance",
    skills: [
      {
        name: "Acessibilidade (A11y)",
        description: "Práticas para garantir que os sites sejam acessíveis para todos",
      },
      {
        name: "Mobile First",
        description: "Abordagem de design onde o layout é projetado primeiro para dispositivos móveis",
      },
      {
        name: "Atomic Design",
        description: "Metodologia para construção de interfaces reutilizáveis",
      },
      {
        name: "Design System",
        description: "Conjunto de normas para criar um design consistente",
      },
      {
        name: "SEO Técnico",
        description: "Otimização de sites para motores de busca",
      },
      {
        name: "Web Vitals",
        description: "Métricas essenciais para medir a qualidade da experiência do usuário",
      },
      {
        name: "Lazy Loading",
        description: "Técnica de carregamento de recursos sob demanda",
      },
      {
        name: "UX/UI",
        description: "Design de experiência do usuário e interfaces visuais",
      },
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faClipboardCheck} className="w-5 h-5 text-primary" />,
    category: "Testes",
    skills: [
      {
        name: "Testes Unitários",
        description: "Testes que verificam o funcionamento correto de funções e métodos",
      },
      {
        name: "Integração",
        description: "Testes que verificam a interação entre diferentes partes do sistema",
      },
      {
        name: "End-to-End",
        description: "Testes que verificam a aplicação como um todo, do início ao fim",
      },
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faTools} className="w-5 h-5 text-primary" />,
    category: "Ferramentas e Automação",
    skills: [
      {
        name: "Git",
        description: "Sistema de controle de versão distribuído",
      },
      {
        name: "GitHub",
        description: "Plataforma de hospedagem para projetos Git",
      },
      {
        name: "Vite",
        description: "Ferramenta de build rápida para aplicações web",
      },
      {
        name: "ESLint/Prettier",
        description: "Ferramentas para manter o código limpo e formatado",
      },
      {
        name: "Husky",
        description: "Ferramenta para configurar ganchos no Git",
      },
      {
        name: "GitHub Actions (CI/CD)",
        description: "Automatização de workflows de integração contínua e entrega contínua",
      },
      {
        name: "Docker",
        description: "Plataforma para criar, distribuir e executar containers",
      },
      { name: "Postman", description: "Ferramenta para testar APIs" },
      {
        name: "Shell Script (básico)",
        description: "Scripts usados para automação de tarefas no terminal",
      },
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faTerminal} className="w-5 h-5 text-primary" />,
    category: "Complementares",
    skills: [
      {
        name: "Scrum",
        description: "Metodologia ágil para gestão de projetos",
      },
      {
        name: "Kanban",
        description: "Sistema de gerenciamento de tarefas baseado em cartões",
      },
      {
        name: "Inbound Marketing",
        description: "Estratégia de marketing baseada em conteúdo",
      },
      {
        name: "Linux (intermediário)",
        description: "Conhecimento intermediário no sistema operacional Linux",
      },
    ],
  },
];