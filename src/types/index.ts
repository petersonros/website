// src/types/index.ts

import { ReactElement } from "react";
import { JSXElementConstructor } from "react";

export type Technology = {
  icon?: () => ReactElement;
  name: string;
};

export type TechnologyIcon = ReactElement | JSXElementConstructor<object>;

export type ProjectStatus = "EM USO" | "DEPLOY" | "SPRINT 1";

export type ProjectCardProps = {
  id: number;
  title: string;
  description: string;
  technologies: Technology[];
  status: ProjectStatus;
  repoUrl?: string;
  liveDemoUrl?: string;
  link: string;
  slug: string;
};

export type Project = ProjectCardProps;

export type ContentStatus = "em-breve" | "publicado";
export type ScratchCategory = "movement" | "control" | "operators";

export type ContentEntryMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  status: ContentStatus;
  tags?: string[];
  category?: ScratchCategory;
  aula?: number;
  sb3Download?: string;
  project?: string;
};

export type ShufflingTitleProps = {
  text: string;
  className?: string;
  delay?: number;
};

export type SectionWrapperProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
};

export type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
  id?: string;
  children: React.ReactNode;
};
