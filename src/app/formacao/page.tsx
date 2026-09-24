// src/app/formacao/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ShufflingTitle } from "@/components/ShufflingTitle";
import { tccTopics } from "@/data/formacao";

export const metadata: Metadata = {
  title: "Formação",
  description: "Trajetória de Peterson em Análise e Desenvolvimento de Sistemas.",
};

export default function FormacaoPage() {
  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto space-y-8">
        <ShufflingTitle
          text="Formação ADS"
          className="text-3xl font-bold tracking-tight text-primary"
        />

        <p className="text-lg leading-relaxed">
          Sou formado em <strong>Análise e Desenvolvimento de Sistemas</strong>{" "}
          pela Estácio, na modalidade EAD. Durante o curso, documentei parte
          dos estudos com a ideia de <em>&quot;learning in public&quot;</em> —
          material que aos poucos vem virando o conteúdo deste site.
        </p>

        <p className="text-lg leading-relaxed">
          Ao longo dos cinco semestres, desenvolvi trabalhos de extensão
          (TCCs) em diferentes áreas do curso:
        </p>

        <ul className="grid sm:grid-cols-2 gap-4">
          {tccTopics.map((topic) => (
            <li key={topic.slug}>
              <Link
                href={`/formacao/${topic.slug}`}
                className="hover-accent-border block h-full rounded-lg border border-border bg-card p-4 hover:shadow-lg transition-all"
              >
                <div className="font-mono text-xs uppercase tracking-wide text-primary mb-1">
                  TCC
                </div>
                <div className="font-semibold mb-1">{topic.title}</div>
                <p className="text-sm text-muted-foreground">
                  {topic.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
