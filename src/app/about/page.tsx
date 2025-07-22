// src/app/about/page.tsx

import React from "react";
import Link from "next/link";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ShufflingTitle } from "@/components/ShufflingTitle";

export default function AboutPage() {
  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto space-y-6">
        <ShufflingTitle
          text="Sobre Mim"
          className="text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400"
        />

        <p className="text-lg leading-relaxed">
          Olá! Meu nome é <strong>Peterson</strong>, sou entusiasta de
          tecnologia desde a infância, com experiência prática em hardware e
          desenvolvimento web.
        </p>

        <p className="text-lg leading-relaxed">
          Atualmente estou estudando{" "}
          <strong>Análise e Desenvolvimento de Sistemas</strong>, focado em
          tecnologias modernas como <strong>Next.js</strong>,{" "}
          <strong>Tailwind CSS</strong> e <strong>TypeScript</strong>.
        </p>

        <p className="text-lg leading-relaxed">
          Trabalho como Técnico de Informática e cuido da presença digital da
          empresa, criando conteúdo para redes sociais com foco em boas
          práticas, produtividade e manutenção de computadores.
        </p>

        <p className="text-lg leading-relaxed">
          Meu objetivo com este site é compartilhar conhecimentos, projetos,
          tutoriais e experiências que venho acumulando ao longo da minha
          trajetória.
        </p>
        <p className="text-lg leading-relaxed">
          Este site foi criado com <strong>Next.js</strong>,{" "}
          <strong>TypeScript</strong> e <strong>Tailwind CSS</strong>, como
          parte de um projeto pessoal para demonstrar minhas habilidades e
          aprendizados na área de desenvolvimento web.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded transition"
          >
            ← Voltar à Home
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
