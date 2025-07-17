// src/components/sections/ProjectsSection.tsx
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { LinkButton } from "@/components/ui/LinkButton";


export const ProjectsSection = () => {
  const preview = projects.slice(0, 3);

  return (
    <section id="projects" className="py-16">
      <div className="container space-y-6">
        <h2 className="text-2xl font-bold">Projetos em Destaque</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        <LinkButton href="/projects">Ver todos os projetos</LinkButton>
      </div>
    </section>
  );
};
