# ✨ Peterson — Portfólio Pessoal

Site pessoal desenvolvido com **Next.js**, **TypeScript** e **Tailwind CSS**, onde compartilho um pouco sobre mim, meus projetos e meu aprendizado contínuo em desenvolvimento web.

O projeto foi planejado com foco em:

- Arquitetura limpa e componentes reutilizáveis
- Experiência responsiva e agradável em qualquer dispositivo
- Suporte a **modo claro/escuro** com persistência
- Navegação suave por seções
- Estrutura pronta para expansão com novas funcionalidades e conteúdos

---

## 📌 Funcionalidades

- ✅ **Página Home** com resumo das seções: Sobre, Projetos e Contato
- ✅ **Seção de Projetos** com carrossel no mobile (Swiper.js) e grid no desktop
- ✅ **Rodapé fixo** com ícones de redes sociais e botão "Voltar ao topo"
- ✅ **Botão de alternância de tema (claro/escuro)** com persistência no localStorage

---

## 🛠️ Tecnologias e Ferramentas

- [Next.js](https://nextjs.org/) — Framework React para aplicações modernas
- [TypeScript](https://www.typescriptlang.org/) — Tipagem estática para maior segurança
- [Tailwind CSS](https://tailwindcss.com/) — Utilitários para estilização rápida e responsiva
- [Swiper.js](https://swiperjs.com/react) — Carrossel poderoso para mobile
- [React Icons](https://react-icons.github.io/react-icons/) — Ícones modernos de fácil uso
- [Framer Motion](https://www.framer.com/motion/) — Animações fluidas em React

---

## 📁 Estrutura de Pastas

📁 src/
├── 📁 app/
│   ├── 📁 about/
│   │   └── page.tsx
│   ├── 📁 projects/
│   │   └── page.tsx
│   └── layout.tsx
│   └── page.tsx
├── 📁 components/
│   ├── 📁 sections/
│   │   ├── About.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   ├── 📁 shared/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── ThemeToggle.tsx
│   └── 📁 ui/
│       ├── ProjectCard.tsx
│       └── ProjectCarousel.tsx
├── 📁 data/
│   └── projects.ts
├── 📁 hooks/
│   └── useActiveSection.ts
├── 📁 lib/
│   └── utils.ts
├── 📁 styles/
│   └── globals.css
├── tailwind.config.ts
├── postcss.config.js
└── tsconfig.json


## 🚀 Como rodar localmente

# Clone o repositório
git clone https://github.com/petersonros/website.git

# Acesse a pasta
cd website

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:3000`.

---

## 🌐 Deploy

O projeto pode ser facilmente hospedado em plataformas como **Vercel**, com suporte a exportação estática (`next export`) se necessário.

---

## 💡 Futuras melhorias

* Página de contato com formulário funcional
* Publicação de artigos técnicos
* Internacionalização (i18n)
* Acessibilidade refinada (a11y)
* Animações avançadas com Framer Motion

---

## 👨‍💻 Autor

Desenvolvido por **Peterson**

---
