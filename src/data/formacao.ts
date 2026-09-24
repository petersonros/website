// src/data/formacao.ts

export type TccTopic = {
  title: string;
  description: string;
  slug: string;
};

export const tccTopics: TccTopic[] = [
  {
    title: "Programação Mobile",
    description: "Trabalho de extensão do curso de ADS.",
    slug: "programacao-mobile-android",
  },
  {
    title: "Sistemas de Informação e Sociedade",
    description: "Trabalho de extensão do curso de ADS.",
    slug: "sistemas-informacao-sociedade",
  },
  {
    title: "Inteligência Artificial",
    description: "Trabalho de extensão do curso de ADS.",
    slug: "inteligencia-artificial",
  },
  {
    title: "Análise de Dados",
    description: "Trabalho de extensão do curso de ADS.",
    slug: "analise-de-dados",
  },
];
