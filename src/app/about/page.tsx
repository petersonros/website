import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
          Sobre Mim
        </h1>

        <p className="text-lg leading-relaxed">
          Olá! Meu nome é <strong>Peterson</strong>, sou entusiasta de tecnologia desde a infância,
          com experiência prática em hardware e desenvolvimento web.
        </p>

        <p className="text-lg leading-relaxed">
          Atualmente estou estudando <strong>Análise e Desenvolvimento de Sistemas</strong>, focado
          em tecnologias modernas como <strong>Next.js</strong>, <strong>Tailwind CSS</strong> e{" "}
          <strong>TypeScript</strong>.
        </p>

        <p className="text-lg leading-relaxed">
          Trabalho como Técnico de Informática e cuido da presença digital da empresa, criando
          conteúdo para redes sociais com foco em boas práticas, produtividade e manutenção de
          computadores.
        </p>

        <p className="text-lg leading-relaxed">
          Meu objetivo com este site é compartilhar conhecimentos, projetos, tutoriais e experiências
          que venho acumulando ao longo da minha trajetória.
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
    </section>
  );
}
