// src/app/tutoriais/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ShufflingTitle } from "@/components/ShufflingTitle";
import { getAllEntries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tutoriais",
  description: "Tutoriais e dicas de programação: git, deploy, arquitetura.",
};

export default function TutoriaisPage() {
  const entries = getAllEntries("tutoriais");

  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto space-y-8">
        <ShufflingTitle
          text="Tutoriais"
          className="text-3xl font-bold tracking-tight text-primary"
        />
        <p className="text-lg text-muted-foreground">
          Conteúdo técnico gerado a partir de conversas reais: git, deploy,
          arquitetura e organização de projetos.
        </p>

        <div className="space-y-4">
          {entries.map((entry) => (
            <Link
              key={entry.slug}
              href={`/tutoriais/${entry.slug}`}
              className="block rounded-lg border border-border bg-card p-5 hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <h2 className="text-xl font-semibold">{entry.title}</h2>
                {entry.status === "em-breve" && (
                  <span className="font-mono text-[10px] uppercase tracking-wide border border-border rounded-full px-2 py-0.5 text-muted-foreground shrink-0">
                    em breve
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-sm">{entry.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
