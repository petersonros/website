"use client";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-background-light dark:bg-background-dark text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-brand dark:text-brand-dark mb-4">
        Olá, eu sou Peterson
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-6">
        Técnico em informática e estudante de Análise e Desenvolvimento de
        Sistemas. Fascinado por web, Next.js e produtividade.
      </p>
      <a
        href="#projects"
        className="inline-flex items-center gap-2 bg-brand text-gray-900 px-6 py-3 rounded-full text-base font-medium hover:bg-brand-dark transition"
      >
        Veja meus projetos
        <ArrowRight size={18} />
      </a>
    </section>
  );
}
