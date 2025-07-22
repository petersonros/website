// src/data/projects.tsx
"use client";

import type { Project } from "@/types";
import { Icons } from "@/components/ui/Icon";

export const projects: Project[] = [
  {
    id: 1,
    title: "Meu Projeto Incrível",
    description: "Um projeto feito com TypeScript, JavaScript e Next.js.",
    technologies: [
      { icon: Icons.Next, name: "Next.js" },
      { icon: Icons.Tailwind, name: "JavaScript" },
      { icon: Icons.Ts, name: "TypeScript" },
    ],
    repoUrl: "https://github.com/petersonros",
    liveDemoUrl: "https://github.com/petersonros",
    link: "/meu-projeto-incrivel",
    slug: "meu-projeto-incrivel",
  },
  {
    id: 2,
    title: "Portfólio Pessoal",
    description: "Site pessoal com tema escuro/claro e layout responsivo.",
    technologies: [
      { icon: Icons.Next, name: "Next.js" },
      { icon: Icons.Tailwind, name: "Tailwind CSS" },
      { icon: Icons.Ts, name: "TypeScript" },
    ],
    repoUrl: "https://github.com/petersonros/website",
    liveDemoUrl: "https://github.com/petersonros/website",
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
    slug: "Loja Gamer",
    link: "",
  },
];
