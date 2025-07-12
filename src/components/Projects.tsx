'use client'

import { ProjectCard } from "./ProjectCard"

const projects = [
  {
    title: "Clone do jogo TERMO",
    description:
      "Jogo web inspirado no Termo, feito com Next.js e Tailwind. Suporte a teclado físico e virtual, dicionário, acentos e tema escuro.",
    link: "https://github.com/petersonros/termo-clone"
  },
  {
    title: "Meu Site Pessoal",
    description:
      "Landing page moderna com Next.js 15 App Router, Tailwind, TypeScript, exportação estática e organização de pastas.",
    link: "https://github.com/petersonros/website"
  }
]

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-sky-50 dark:bg-gray-950 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Projetos
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
