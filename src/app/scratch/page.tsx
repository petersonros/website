// src/app/scratch/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { getAllEntries } from "@/lib/content";
import type { ScratchCategory } from "@/types";

export const metadata: Metadata = {
  title: "Scratch",
  description: "Tutoriais de Scratch para crianças, testados em sala de aula.",
};

const CATEGORY_CLASS: Record<ScratchCategory, string> = {
  movement: "scratch-block--movement",
  control: "scratch-block--control",
  operators: "scratch-block--operators",
};

const PROJECTS: Record<string, { title: string; description: string; href: string; className: string }> = {
  pacman: {
    title: "Pac-Man",
    description:
      "Um Pac-Man completo, construído ao vivo com a turma, capítulo por capítulo.",
    href: "/scratch/pacman",
    className: "scratch-block--control",
  },
};

export default function ScratchPage() {
  const entries = getAllEntries("scratch");
  const projectIds = Array.from(
    new Set(entries.filter((entry) => entry.project).map((entry) => entry.project as string))
  );
  const guides = entries.filter((entry) => !entry.project);

  return (
    <section className="scratch-panel pt-24 md:pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">Scratch</h1>
          <p className="text-lg opacity-90">
            Tutoriais de Scratch para crianças e professores, testados em sala
            de aula de informática.
          </p>
        </div>

        {projectIds.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight">Projetos</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {projectIds.map((projectId) => {
                const project = PROJECTS[projectId];
                const chapterCount = entries.filter(
                  (entry) => entry.project === projectId
                ).length;
                return (
                  <Link
                    key={projectId}
                    href={project?.href ?? `/scratch/${projectId}`}
                    className={`scratch-block ${
                      project?.className ?? "scratch-block--control"
                    } hover:brightness-110 transition-all`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold">
                        {project?.title ?? projectId}
                      </h3>
                      <span className="scratch-chapter-badge shrink-0">
                        {chapterCount} capítulos
                      </span>
                    </div>
                    <p className="text-sm opacity-90">{project?.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {guides.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight">Outros guias</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {guides.map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/scratch/${entry.slug}`}
                  className={`scratch-block ${
                    entry.category ? CATEGORY_CLASS[entry.category] : "scratch-block--movement"
                  } hover:brightness-110 transition-all`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold">{entry.title}</h3>
                    {entry.status === "em-breve" && (
                      <span className="font-mono text-[10px] uppercase tracking-wide bg-black/20 rounded-full px-2 py-0.5 shrink-0">
                        em breve
                      </span>
                    )}
                  </div>
                  <p className="text-sm opacity-90">{entry.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
