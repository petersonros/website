'use client'

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-3xl text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
          Sobre Mim
        </h2>
        <p className="text-lg leading-relaxed">
          Sou apaixonado por tecnologia desde a infância e atualmente estudo Análise e Desenvolvimento de Sistemas. 
          Tenho uma sólida trajetória profissional, com mais de 20 anos de experiência na indústria, incluindo usinagem, CNC, 
          e análise de processos produtivos. Hoje atuo como Técnico de Informática e estou focado em desenvolvimento web, especialmente com Next.js, TypeScript e Tailwind CSS.
          Desde os 19 anos venho mergulhando no universo da informática com entusiasmo, buscando sempre aprender e compartilhar conhecimento.
        </p>
         <p className="text-lg leading-relaxed">
          Este site foi criado com <strong>Next.js</strong>, <strong>TypeScript</strong> e <strong>Tailwind CSS</strong>, como parte de um projeto pessoal para demonstrar minhas habilidades e aprendizados na área de desenvolvimento web.
        </p>
      </div>
    </section>
  )
}
