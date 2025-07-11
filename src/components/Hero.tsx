'use client'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-sky-50 dark:from-gray-900 dark:to-gray-950 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-sky-600 dark:text-sky-400 mb-4">
        Olá, eu sou Peterson Ros
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-6">
        Técnico em informática e estudante de Análise e Desenvolvimento de Sistemas. Fascinado por web, Next.js e produtividade.
      </p>
      <a
        href="#projects"
        className="inline-block bg-sky-600 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-sky-700 transition"
      >
        Veja meus projetos
      </a>
    </section>
  )
}
