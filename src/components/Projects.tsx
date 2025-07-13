// src/components/Projects.tsx
"use client";

import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen pt-24 md:pt-32 px-4 md:px-6 flex flex-col items-center bg-gray-50 dark:bg-gray-950"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
        Projetos
      </h2>

      {/* Mobile: carrossel horizontal */}
      <div className="flex md:hidden gap-6 overflow-x-auto px-2 snap-x snap-mandatory scroll-smooth w-full">
        <div className="flex-shrink-0 snap-center w-[90%] h-[calc(100vh-180px)]">
          <ProjectCard
            title="Projeto 1"
            description="Descrição breve do projeto 1."
          />
        </div>
        <div className="flex-shrink-0 snap-center w-[90%] h-[calc(100vh-180px)]">
          <ProjectCard
            title="Projeto 2"
            description="Descrição breve do projeto 2."
          />
        </div>
        <div className="flex-shrink-0 snap-center w-[90%] h-[calc(100vh-180px)]">
          <ProjectCard
            title="Projeto 3"
            description="Descrição breve do projeto 3."
          />
        </div>
        {/* Adicione mais cards conforme necessário */}
      </div>

      {/* Desktop: grid de 3 colunas */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <ProjectCard
          title="Projeto 1"
          description="Descrição breve do projeto 1."
        />
        <ProjectCard
          title="Projeto 2"
          description="Descrição breve do projeto 2."
        />
        <ProjectCard
          title="Projeto 3"
          description="Descrição breve do projeto 3."
        />
      </div>
    </section>
  );
}
