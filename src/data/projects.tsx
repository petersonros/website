// src/data/projects.tsx

import type { Project } from "@/types";
import { Icons } from "@/components/ui/Icon";

export const projects: Project[] = [
  {
    id: 10,
    title: "Conquista",
    description:
      "Sistema de agendamento de horários da sala de informática do colégio (sala-informatica) + CLI PowerShell de gestão da sala (conquista-cli).",
    technologies: [
      { icon: Icons.Next, name: "Next.js 14" },
      { icon: Icons.Ts, name: "TypeScript" },
      { name: "Prisma" },
      { name: "Neon PostgreSQL" },
      { name: "Vercel" },
      { name: "NextAuth" },
    ],
    status: "EM USO",
    slug: "conquista",
    link: "",
  },
  {
    id: 11,
    title: "Inventory Project",
    description:
      "Sistema de inventário de máquinas — backend de coleta + cliente via WMI para levantamento de hardware.",
    technologies: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "SQLite" },
      { name: "PowerShell" },
      { name: "Render" },
    ],
    status: "DEPLOY",
    slug: "inventory-project",
    link: "",
  },
  {
    id: 12,
    title: "PDF Search",
    description:
      "Busca local por linguagem natural nos materiais das 5 semestres do curso de ADS.",
    technologies: [
      { name: "Python" },
      { name: "Ollama" },
      { name: "Mistral" },
    ],
    status: "EM USO",
    slug: "pdf-search",
    link: "",
  },
  {
    id: 13,
    title: "yt-dlp Downloader",
    description:
      "Ferramenta com GUI para download de vídeos para uso offline em sala de aula, feita para outra professora. Roadmap: reescrita em Python/Electron.",
    technologies: [{ name: "PowerShell" }, { name: "Electron (roadmap)" }],
    status: "EM USO",
    slug: "ytdlp-downloader",
    link: "",
  },
  {
    id: 14,
    title: "Carregador de bateria LM317",
    description:
      "Projeto DIY de eletrônica: carregador de bateria de moto usando a fonte de um notebook.",
    technologies: [{ name: "Eletrônica" }],
    status: "EM USO",
    slug: "carregador-lm317",
    link: "",
  },
  {
    id: 15,
    title: "Git multi-conta",
    description:
      "Guia e configuração de múltiplas contas GitHub na mesma máquina (SSH, includeIf). Também disponível como tutorial.",
    technologies: [{ name: "Git" }, { name: "SSH" }],
    status: "EM USO",
    slug: "git-multi-conta",
    link: "/tutoriais/git-multiplas-contas",
  },
  {
    id: 16,
    title: "Jogos educativos / Jogo de plataforma",
    description:
      "Jogos de matemática no navegador e um jogo estilo Geometry Dash, construídos do zero para aprender desenvolvimento de jogos.",
    technologies: [{ icon: Icons.Js, name: "JavaScript" }, { name: "Canvas" }],
    status: "SPRINT 1",
    slug: "jogos-educativos",
    link: "",
  },
  {
    id: 2,
    title: "Portfólio Pessoal",
    description: "Este site: portfólio, formação, tutoriais e Scratch.",
    technologies: [
      { icon: Icons.Next, name: "Next.js" },
      { icon: Icons.Tailwind, name: "Tailwind CSS" },
      { icon: Icons.Ts, name: "TypeScript" },
    ],
    repoUrl: "https://github.com/petersonros/website",
    liveDemoUrl: "https://petersonros.github.io/website/",
    status: "EM USO",
    slug: "portfolio",
    link: "",
  },
  {
    id: 3,
    title: "Treinamento DevPlay",
    description:
      "Apresenta atividades desenvolvidas durante o treinamento DevPlay",
    technologies: [
      { icon: Icons.Html, name: "HTML" },
      { icon: Icons.Css, name: "CSS" },
      { icon: Icons.Js, name: "JavaScript" },
      { icon: Icons.Php, name: "PHP" },
    ],
    repoUrl: "https://github.com/petersonros/devplay",
    liveDemoUrl:
      "https://petersonros.github.io/devplay/desafios/desafio_css/index.html",
    status: "EM USO",
    slug: "portfolio-devplay",
    link: "",
  },
  {
    id: 4,
    title: "Challenge Alura, 7DaysOfCode",
    description: "Desenvolver um site em 7 dias, #7DaysOfCode.",
    technologies: [
      { icon: Icons.Html, name: "HTML" },
      { icon: Icons.Css, name: "CSS" },
    ],
    repoUrl: "https://github.com/petersonros/7DaysOfCode_HTML_CSS",
    liveDemoUrl: "https://github.com/petersonros/7DaysOfCode_HTML_CSS",
    status: "EM USO",
    slug: "7daysofcode-html-css",
    link: "",
  },
  {
    id: 5,
    title: "Alura Oracle Challenge AluraGeek",
    description: "Desafio Alura Oracle, desenvolvimento com HTML e CSS.",
    technologies: [
      { icon: Icons.Html, name: "HTML" },
      { icon: Icons.Css, name: "CSS" },
    ],
    repoUrl: "https://github.com/petersonros/Alura_Challenge_Oracle_AluraGeek",
    liveDemoUrl:
      "https://petersonros.github.io/Alura_Challenge_Oracle_AluraGeek/",
    status: "EM USO",
    slug: "AluraGeek",
    link: "",
  },
  {
    id: 6,
    title: "Alura Oracle Challenge Hangman",
    description:
      "Desafio Alura Oracle, desenvolvimento com HTML, CSS e JavaScript.",
    technologies: [
      { icon: Icons.Html, name: "HTML" },
      { icon: Icons.Css, name: "CSS" },
      { icon: Icons.Js, name: "JavaScript" },
    ],
    repoUrl: "https://github.com/petersonros/Alura_Challenge_Oracle_Hangman",
    liveDemoUrl:
      "https://petersonros.github.io/Alura_Challenge_Oracle_Hangman/",
    status: "EM USO",
    slug: "Hangman",
    link: "",
  },
  {
    id: 7,
    title: "B7Web Challenge JavaScript",
    description:
      "Desafio B7Web 7 projetos com HTML, CSS e JavaScript em 7 dias.",
    technologies: [
      { icon: Icons.Html, name: "HTML" },
      { icon: Icons.Css, name: "CSS" },
      { icon: Icons.Js, name: "JavaScript" },
    ],
    repoUrl: "https://github.com/petersonros/B7Web_Challenge",
    liveDemoUrl: "https://petersonros.github.io/B7Web_Challenge/",
    status: "EM USO",
    slug: "Desafio JavaScript",
    link: "",
  },
  {
    id: 8,
    title: "Site Loja Gamer",
    description: "Atividade do Curso Front-End do Senai.",
    technologies: [
      { icon: Icons.Html, name: "HTML" },
      { icon: Icons.Css, name: "CSS" },
      { icon: Icons.Js, name: "JavaScript" },
      { icon: Icons.Bootstrap, name: "Bootstrap" },
    ],
    repoUrl: "https://github.com/petersonros/site-games",
    liveDemoUrl: "https://petersonros.github.io/site-games/index-b.html",
    status: "EM USO",
    slug: "Loja Gamer",
    link: "",
  },
];
