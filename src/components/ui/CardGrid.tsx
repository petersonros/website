// src/components/ui/CardGrid.tsx
"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ShufflingTitle } from "@/components/ShufflingTitle";

export const CardGrid = () => {
  return (
    <section className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <ShufflingTitle
          text="Portfólio"
          className="text-3xl font-bold tracking-tight text-primary mb-10"
        />
        <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
