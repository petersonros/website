// src/components/ui/ProjectCard.tsx
"use client";

import { FC } from "react";
import type { ProjectCardProps } from "@/types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const STATUS_STYLES: Record<ProjectCardProps["status"], string> = {
  "EM USO": "status-badge--primary text-primary",
  DEPLOY: "status-badge--primary text-primary",
  "SPRINT 1": "bg-muted text-muted-foreground border-border",
};

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  repoUrl,
  liveDemoUrl,
  technologies,
  status,
}) => {
  return (
    <div className="hover-accent-border group w-full max-w-sm rounded-2xl border border-border bg-card text-foreground shadow-sm transition-all duration-300 md:hover:-translate-y-1 hover:shadow-lg">
      <div className="rounded-2xl overflow-hidden flex flex-col h-[280px] sm:h-[280px] p-4">
        <div className="flex-shrink-0 flex items-center justify-between gap-2 pt-2 mb-4">
          <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            REPO
          </span>
          <span
            className={`font-mono text-[10px] uppercase tracking-wide border rounded-full px-2 py-0.5 ${STATUS_STYLES[status]}`}
          >
            {status}
          </span>
        </div>
        <div className="flex-1"></div>
        <div className="flex-shrink-0">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech, index) => (
                <span
                  key={`${tech.name}-${index}`}
                  className="font-mono text-[11px] text-muted-foreground border border-border rounded px-2 py-0.5 inline-flex items-center gap-1"
                >
                  {tech.icon && <tech.icon />}
                  {tech.name}
                </span>
              ))}
            </div>
          )}
          <div className="flex gap-4 items-center">
            {liveDemoUrl && (
              <a
                href={liveDemoUrl}
                className="text-muted-foreground hover:text-primary hover:scale-110 text-2xl sm:text-2xl transition-all duration-200 cursor-pointer"
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
                className="text-muted-foreground hover:text-primary hover:scale-110 text-2xl sm:text-2xl transition-all duration-200 cursor-pointer"
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
