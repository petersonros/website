# ✨ Peterson — Portfólio Pessoal
Site pessoal desenvolvido com **Next.js**, **TypeScript** e **Tailwind CSS**, onde compartilho um pouco sobre mim, meus projetos e meu aprendizado contínuo em desenvolvimento web.

O projeto foi planejado com foco em:

- Arquitetura limpa e componentes reutilizáveis
- Experiência responsiva e agradável em qualquer dispositivo
- Suporte a **modo claro/escuro** com persistência
- Navegação suave por seções
- Estrutura pronta para expansão com novas funcionalidades e conteúdos

## 📌 Funcionalidades

- ✅ **Página Home** contendo as seções: Hero, Sobre e Projetos
- ✅ **Seção Hero** com resumo geral
- ✅ **Seção Sobre** com resumo sobre mim
- ✅ **Seção Projetos** com carrossel no mobile (Swiper.js) e grid no desktop
- ✅ **Rodapé fixo** com ícones de redes sociais e botão "Voltar ao topo"
- ✅ **Botão de alternância de tema (claro/escuro)** com persistência no localStorage

## 🛠️ Tecnologias e Ferramentas

- [Next.js](https://nextjs.org/) — Framework React para aplicações modernas
- [TypeScript](https://www.typescriptlang.org/) — Tipagem estática para maior segurança
- [Tailwind CSS](https://tailwindcss.com/) — Utilitários para estilização rápida e responsiva
- [Swiper.js](https://swiperjs.com/react) — Carrossel poderoso para mobile
- [React Icons](https://react-icons.github.io/react-icons/) — Ícones modernos de fácil uso
- [Three.js](https://threejs.org/) — Plano de fundo animado (cubo) da seção Hero

## 🚀 Como rodar localmente

Clone o repositório
```
git clone https://github.com/petersonros/website.git
```
Acesse a pasta
```
cd website
```
Instale as dependências
```
npm install
```
Inicie o servidor de desenvolvimento
```
npm run dev
```

O site usa `basePath: /website` (mesmo caminho do GitHub Pages), então em
desenvolvimento ele fica em `http://localhost:3000/website`.

## 🌐 Deploy

O site é publicado **exclusivamente no GitHub Pages**, em
`https://petersonros.github.io/website/`.

O deploy é automático: a cada `push` na branch `main`, o workflow
`.github/workflows/deploy.yml` roda `next build` (export estático em `out/`) e
publica via GitHub Pages.

Pré-requisito único: em **Settings → Pages**, definir _Source_ como
**GitHub Actions**.

Para gerar o build estático localmente:

```
npm run build     # gera out/
```

## 💡 Futuras melhorias

* Seção/página de contato (formulário via serviço externo ou mailto)
* Publicação de artigos técnicos
* Internacionalização (i18n)
* Acessibilidade refinada (a11y)
* Metadados de SEO por página

## 👨‍💻 Autor
Desenvolvido por **Peterson** 💻 com apoio de **Orion** 🚀