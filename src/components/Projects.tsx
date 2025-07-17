// src/components/Projects.tsx

"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ShufflingTitle } from "@/components/ShufflingTitle";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <SectionWrapper>
      <ShufflingTitle
        text="Projetos"
        className="text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400"
      />

      <div className="flex md:hidden gap-6 overflow-x-auto px-2 snap-x snap-mandatory scroll-smooth w-full">
        <div className="flex-shrink-0 snap-center w-[90%] h-[calc(100vh-180px)]">
          <ProjectCard
            title="Projeto 1"
            description="Descrição breve do projeto 1."
            link={""}
          />
        </div>
        <div className="flex-shrink-0 snap-center w-[90%] h-[calc(100vh-180px)]">
          <ProjectCard
            title="Projeto 2"
            description="Descrição breve do projeto 2."
            link={""}
          />
        </div>
        <div className="flex-shrink-0 snap-center w-[90%] h-[calc(100vh-180px)]">
          <ProjectCard
            title="Projeto 3"
            description="Descrição breve do projeto 3."
            link={""}
          />
        </div>
      </div>

      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <ProjectCard
          title="Projeto 1"
          description="Descrição breve do projeto 1."
          link={""}
        />
        <ProjectCard
          title="Projeto 2"
          description="Descrição breve do projeto 2."
          link={""}
        />
        <ProjectCard
          title="Projeto 3"
          description="Descrição breve do projeto 3."
          link={""}
        />
      </div>
    </SectionWrapper>
  );
}
