// src/components/sections/AboutSection.tsx
"use client";

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex items-center justify-center px-4 py-20 min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-text)] mb-4">
          Sobre mim
        </h1>
        <p className="text-lg leading-relaxed">
          Olá! Meu nome é <strong>Peterson</strong>, sou apaixonado por
          tecnologia desde a infância. Aos 19 anos comecei a me dedicar ao
          universo da informática, explorando com entusiasmo tudo o que envolve
          hardware, software e desenvolvimento web.
        </p>
        <p className="text-lg leading-relaxed">
          Minha trajetória profissional inclui mais de 20 anos na indústria,
          atuando nas áreas de usinagem, CNC e análise de processos produtivos.
          Hoje trabalho como <strong>Técnico de Informática</strong>, cuidando
          da presença digital da empresa e produzindo conteúdo para redes
          sociais com foco em boas práticas, produtividade e manutenção de
          computadores.
        </p>
        <p className="text-lg leading-relaxed">
          Este site é um projeto pessoal desenvolvido com{" "}
          <strong>Next.js</strong>, <strong>TypeScript</strong> e{" "}
          <strong>Tailwind CSS</strong>. Aqui compartilho conhecimentos,
          projetos e experiências que venho acumulando ao longo da minha jornada
          profissional e acadêmica.
        </p>
      </div>
    </section>
  );
}
