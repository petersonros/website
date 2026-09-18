// src/app/sobre/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ShufflingTitle } from "@/components/ShufflingTitle";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Trajetória de Peterson: de mais de 20 anos em usinagem CNC até Análise e Desenvolvimento de Sistemas.",
};

export default function SobrePage() {
  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto space-y-6">
        <ShufflingTitle
          text="Sobre Mim"
          className="text-3xl font-bold tracking-tight text-primary"
        />

        <p className="text-lg leading-relaxed">
          Olá! Meu nome é <strong>Peterson</strong> (Peter), de Indaiatuba/SP.
          Sou entusiasta de tecnologia desde a infância, com interesses fortes
          em eletrônica, administração de sistemas Linux e hardware DIY.
        </p>

        <p className="text-lg leading-relaxed">
          Minha trajetória profissional passou por mais de{" "}
          <strong>20 anos na indústria de usinagem</strong>, em três empresas
          diferentes — comecei como ajudante geral e cheguei a{" "}
          <strong>Analista de Processos de micro usinagem CNC</strong>,
          desenhando peças, gerando programas CNC e simulando em CAD antes do
          envio à produção.
        </p>

        <p className="text-lg leading-relaxed">
          Ao encerrar esse ciclo, atuei por cerca de{" "}
          <strong>6 anos como técnico de informática</strong>, período em que
          aprofundei meus conhecimentos em hardware e programação e me{" "}
          <strong>formei em Análise e Desenvolvimento de Sistemas</strong>{" "}
          (ADS), focado em tecnologias como <strong>Next.js</strong>,{" "}
          <strong>TypeScript</strong>, Python e PowerShell.
        </p>

        <p className="text-lg leading-relaxed">
          Atualmente colaboro com um colégio na área de tecnologia
          educacional, dando suporte às aulas de informática e já conduzindo
          aulas de Scratch para os alunos.
        </p>

        <p className="text-lg leading-relaxed">
          Este site é um projeto pessoal desenvolvido com{" "}
          <strong>Next.js</strong>, <strong>TypeScript</strong> e{" "}
          <strong>Tailwind CSS</strong>. Aqui compartilho meu portfólio,
          minha formação, tutoriais técnicos e o material de Scratch que uso
          em sala de aula.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-block px-4 py-2 text-sm font-semibold text-primary-foreground bg-primary hover:opacity-90 rounded transition-opacity"
          >
            ← Voltar à Home
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
