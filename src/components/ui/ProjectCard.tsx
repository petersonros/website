// src/components/ui/ProjectCard.tsx
import Image from "next/image";
import { FC } from "react";
import type { ProjectCardProps } from "@/types";

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  repoUrl,
  demoUrl,
  technologies,
}) => {
  return (
    <div className="rounded-xl border p-4 shadow-sm transition hover:shadow-md">
      <Image src={imageUrl} alt={title} width={400} height={200} className="rounded" />
      <h3 className="mt-2 text-lg font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>

      {technologies && (
        <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
          {technologies.map((tech) => (
            <span key={tech} className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex gap-4">
        {demoUrl && (
          <a href={demoUrl} className="text-blue-500 underline" target="_blank">
            Demo
          </a>
        )}
        {repoUrl && (
          <a href={repoUrl} className="text-blue-500 underline" target="_blank">
            Código
          </a>
        )}
      </div>
    </div>
  );
};
