// src/components/sections/FeaturedProjects.tsx
"use client";

import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <div className="flex flex-wrap gap-6 justify-center md:justify-start">
      {featured.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
