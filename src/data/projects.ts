// src/data/projects.ts

import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Clone do TERMO",
    description: "Jogo interativo estilo Termo, feito com Next.js e Tailwind.",
    imageUrl: "/images/termo-clone.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    repoUrl: "https://github.com/seuusuario/termo-clone",
    liveDemoUrl: "https://seusite.com/termo",
    slug: "termo-clone",
  },
  {
    id: 2,
    title: "Portfólio Pessoal",
    description: "Site pessoal com tema escuro/claro e layout responsivo.",
    imageUrl: "/images/portfolio.png",
    technologies: ["Next.js", "Tailwind CSS"],
    repoUrl: "https://github.com/seuusuario/portfolio",
    liveDemoUrl: "https://seusite.com",
    slug: "portfolio",
  },
  // adicione mais projetos...
];
