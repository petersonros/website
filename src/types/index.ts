// src/types/index.ts

export type ShufflingTitleProps = {
  text: string;
  className?: string;
  delay?: number;
};

export type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  repoUrl?: string;
  demoUrl?: string;
  technologies?: string[];
};

export type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  repoUrl: string;
  liveDemoUrl: string;
};
