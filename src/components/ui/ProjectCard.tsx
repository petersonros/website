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
    <div className="w-full max-w-sm rborder bg-[var(--color-bg)] text-[var(--color-text)] bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-transform md:hover:-translate-y-1 duration-300 md:hover:scale-[1.015] hover:shadow-md hover:border-white/80 hover:bg-white/5 dark:hover:border-zinc-300/60 dark:hover:bg-zinc-800/30 group relative p-0.5 rounded-xl bg-gradient-to-r from-gray-500 via-purple-300 to-gray-300 shadow-lg">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md overflow-hidden flex flex-col h-[260px] sm:h-[260px] p-4">
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
                className="text-gray-300 hover:text-white hover:scale-110 text-2xl sm:text-3xl transition-all duration-200 cursor-pointer"
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
                className="text-gray-300 hover:text-white hover:scale-110 text-2xl sm:text-3xl transition-all duration-200 cursor-pointer"
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
