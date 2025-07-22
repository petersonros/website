// src/types/index.ts

import { ReactElement } from "react";
import { JSXElementConstructor } from "react";

export type Technology = {
  icon: () => ReactElement;
  name: string;
};

export type TechnologyIcon = ReactElement | JSXElementConstructor<object>;

export type ProjectCardProps = {
  id: number;
  title: string;
  description: string;
  technologies: Technology[];
  repoUrl?: string;
  liveDemoUrl?: string;
  link: string;
  slug: string;
};

export type Project = ProjectCardProps;

export type ShufflingTitleProps = {
  text: string;
  className?: string;
  delay?: number;
};

export type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
  id?: number;
  children: React.ReactNode;
};
