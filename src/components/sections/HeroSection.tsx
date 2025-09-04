// src/components/sections/HeroSection.tsx
"use client";

import { CubeBackground } from "../CubeBackground";

export function HeroSection() {
  return (
    <section className=" bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen py-32 flex flex-col justify-center items-center text-center px-4">
      <CubeBackground />
      <h1 className="text-4xl md:text-6xl font-bold  mb-4">
        Olá, eu sou Peterson
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-6">
        Técnico em informática e estudante de{" "}
        <strong>Análise e Desenvolvimento de Sistemas</strong>.
      </p>
    </section>
  );
}
