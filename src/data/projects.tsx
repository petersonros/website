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
];
