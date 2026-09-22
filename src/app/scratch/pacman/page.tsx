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

        <div className="scratch-block scratch-block--neutral space-y-4">
          <h2 className="text-xl font-bold tracking-tight">
            Como esse projeto nasceu
          </h2>
          <p className="text-sm opacity-90">
            Antes de levar pra sala de aula, pesquisei bastante — vídeos no
            YouTube e outros projetos de Pac-Man feitos por outras pessoas
            direto na plataforma do Scratch. Vi várias formas diferentes de
            construir o jogo, e escolhi a abordagem que me pareceu mais
            simples de explicar passo a passo.
          </p>
          <p className="text-sm opacity-90">
            A primeira aula já me ensinou uma coisa importante: não dava pra
            apresentar o projeto inteiro de uma vez. Abri a tela do Scratch
            com os sprites prontos, mas sem nenhum código, e montamos juntos
            os primeiros blocos — foi ali que percebi que cada aula precisava
            entregar algo pequeno, mas funcional: uma novidade que os alunos
            pudessem jogar na hora, mesmo com o jogo ainda incompleto, pra
            sentirem o progresso de verdade.
          </p>
          <p className="text-sm opacity-90">
            A partir daí, o método virou sempre o mesmo: construir e testar.
            Não adianta encaixar um bloco sem entender pra que ele serve —
            então cada peça nova era testada na hora, ali mesmo, pra fazer
            sentido pra quem estava montando.
          </p>
          <p className="text-sm opacity-90">
            O projeto foi crescendo aula a aula, com as dúvidas e sugestões
            dos próprios alunos moldando o caminho. O que está documentado
            aqui, até o Capítulo 7, é o ponto em que o projeto está agora —
            não é um projeto fechado. Mais aulas ao vivo estão por vir, e
            mais capítulos serão adicionados conforme o jogo continuar
            evoluindo com a turma.
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
