"use client";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-cyan-100 dark:bg-background-dark text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-brand-dark mb-4">
        Olá, eu sou Peterson
      </h1>

      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-6">
        Técnico em informática e estudante de Análise e Desenvolvimento de
        Sistemas. Fascinado por web, Next.js e produtividade.
      </p>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-6">
        Alguém que sabe matemática vai muito mais longe com uma calculadora do
        que alguém que sabe apenas usar calculadora.
      </p>
    </section>
  );
}
