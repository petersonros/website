"use client";

import dynamic from "next/dynamic";

const BG = dynamic(
  () =>
    import("@/components/CubeBackground").then(
      (m) => m.default ?? m.CubeBackground
    ),
  { ssr: false, loading: () => null }
);

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]
                 min-h-screen py-32 flex flex-col items-center justify-center text-center px-4"
    >
      <BG className="opacity-30" />
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Olá, eu sou Peterson
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Técnico em informática e estudante de{" "}
          <strong>Análise e Desenvolvimento de Sistemas</strong>.
        </p>
      </div>
    </section>
  );
}
