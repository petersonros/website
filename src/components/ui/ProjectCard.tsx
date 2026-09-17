// src/components/ui/ProjectCard.tsx
"use client";

import { FC } from "react";
import type { ProjectCardProps } from "@/types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  repoUrl,
  liveDemoUrl,
  technologies,
}) => {
  return (
    <div className="group w-full max-w-sm rounded-2xl border border-border bg-card text-foreground shadow-sm transition-all duration-300 md:hover:-translate-y-1 hover:shadow-lg hover:border-primary/40">
      <div className="rounded-2xl overflow-hidden flex flex-col h-[260px] sm:h-[260px] p-4">
        <div className="flex-shrink-0">
          {technologies && (
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 pt-2">
              {technologies.map((tech, index) => (
                <span
                  key={`${"name" in tech ? tech.name : tech}-${index}`}
                  className="text-4xl sm:text-4xl text-primary"
                >
                  {"icon" in tech && <tech.icon />}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex-1"></div>
        <div className="flex-shrink-0">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>
          <div className="flex gap-4 items-center">
            {liveDemoUrl && (
              <a
                href={liveDemoUrl}
                className="text-muted-foreground hover:text-primary hover:scale-110 text-2xl sm:text-3xl transition-all duration-200 cursor-pointer"
                target="_blank"
                rel="noreferrer"
                title="Ver demo ao vivo"
              >
                <FaExternalLinkAlt />
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                className="text-muted-foreground hover:text-primary hover:scale-110 text-2xl sm:text-3xl transition-all duration-200 cursor-pointer"
                target="_blank"
                rel="noreferrer"
                title="Ver repositório"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
