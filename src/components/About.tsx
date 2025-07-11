'use client'

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Sobre Mim
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-justify">
          Sou apaixonado por tecnologia desde a infância e atualmente estudo Análise e Desenvolvimento de Sistemas. 
          Tenho uma sólida trajetória profissional, com mais de 20 anos de experiência na indústria, incluindo usinagem, CNC, 
          e análise de processos produtivos. Hoje atuo como Técnico de Informática e estou focado em desenvolvimento web, especialmente com Next.js, TypeScript e Tailwind CSS.
        </p>
      </div>
    </section>
  )
}
