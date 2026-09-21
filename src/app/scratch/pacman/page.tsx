// src/app/scratch/pacman/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { getAllEntries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Guia Pac-Man — Scratch",
  description:
    "Série de capítulos documentando a construção de um Pac-Man no Scratch, aula por aula, com a turma.",
};

export default function PacmanPage() {
  const chapters = getAllEntries("scratch")
    .filter((entry) => entry.project === "pacman")
    .sort((a, b) => (a.aula ?? 0) - (b.aula ?? 0));

  return (
    <section className="scratch-panel pt-24 md:pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <Link href="/scratch" className="text-primary hover:underline">
            ← Voltar para Scratch
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">Guia Pac-Man</h1>
          <p className="text-lg opacity-90">
            Série de capítulos documentando aulas reais de 45 minutos,
            decididas ao vivo com a turma.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {chapters.map((entry) => (
            <Link
              key={entry.slug}
              href={`/scratch/${entry.slug}`}
              className="scratch-block scratch-block--neutral hover:brightness-95 transition-all"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold">{entry.title}</h3>
                <span className="scratch-chapter-badge shrink-0">
                  Aula {entry.aula}
                </span>
              </div>
              <p className="text-sm opacity-90">{entry.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
