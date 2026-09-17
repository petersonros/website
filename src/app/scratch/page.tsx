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

export default function ScratchPage() {
  const entries = getAllEntries("scratch");

  return (
    <section className="scratch-panel pt-24 md:pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold tracking-tight">Scratch</h1>
        <p className="text-lg opacity-90">
          Tutoriais de Scratch para crianças e professores, testados em sala
          de aula de informática.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 pt-4">
          {entries.map((entry) => (
            <Link
              key={entry.slug}
              href={`/scratch/${entry.slug}`}
              className={`scratch-block ${
                entry.category ? CATEGORY_CLASS[entry.category] : "scratch-block--movement"
              } hover:brightness-110 transition-all`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <h2 className="text-lg font-bold">{entry.title}</h2>
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
    </section>
  );
}
