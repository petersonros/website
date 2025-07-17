// src/components/ui/Projects.tsx
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};
