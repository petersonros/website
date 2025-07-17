// src/components/sections/About.tsx

"use client";

import Link from "next/link";

import { ShufflingTitle } from "@/components/ShufflingTitle";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export function About() {
  return (
    <SectionWrapper>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <ShufflingTitle
            text="Sobre mim"
            className="text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400"
          />
          <p className="text-lg leading-relaxed">
            Sou apaixonado por tecnologia desde a infância e atualmente estudo
            Análise e Desenvolvimento de Sistemas. Tenho uma sólida trajetória
            profissional, com mais de 20 anos de experiência na indústria,
            incluindo usinagem, CNC, e análise de processos produtivos. Hoje
            atuo como Técnico de Informática e estou focado em desenvolvimento
            web, especialmente com Next.js, TypeScript e Tailwind CSS. Desde os
            19 anos venho mergulhando no universo da informática com entusiasmo,
            buscando sempre aprender e compartilhar conhecimento.
          </p>
          <p className="text-lg leading-relaxed">
            Este site foi criado com <strong>Next.js</strong>,{" "}
            <strong>TypeScript</strong> e <strong>Tailwind CSS</strong>, como
            parte de um projeto pessoal para demonstrar minhas habilidades e
            aprendizados na área de desenvolvimento web.
          </p>
          <div className="pt-4">
            <Link
              href="/about"
              className="inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded transition"
            >
              Saiba mais
            </Link>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
