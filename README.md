# ✨ Peterson — Site Pessoal
Site pessoal desenvolvido com **Next.js**, **TypeScript** e **Tailwind CSS**: portfólio, formação em Análise e Desenvolvimento de Sistemas, tutoriais técnicos e material de Scratch usado em sala de aula.

O projeto foi planejado com foco em:

- Arquitetura limpa e componentes reutilizáveis
- Experiência responsiva e agradável em qualquer dispositivo
- Sistema de design próprio (paleta cianotipo + acento âmbar, Space Grotesk + IBM Plex Mono)
- Conteúdo local em MDX, versionado no próprio repositório — sem backend
- Estrutura pronta para expansão com novas funcionalidades e conteúdos

## 📌 Seções

- ✅ **Início** — Hero com painel `sobre.yaml` estilo editor de código e destaques do portfólio
- ✅ **Sobre** (`/sobre`) — trajetória pessoal e profissional
- ✅ **Formação** (`/formacao`) — curso de ADS e trabalhos de extensão
- ✅ **Portfólio** (`/projetos`) — projetos reais, com carrossel no mobile (Swiper.js) e grid no desktop
- ✅ **Tutoriais** (`/tutoriais`) — posts técnicos em MDX (git, deploy, organização de projetos)
- ✅ **Scratch** (`/scratch`) — material testado em sala de aula, cards nas cores oficiais das categorias do Scratch
- ✅ **Rodapé fixo** com ícones de redes sociais e botão "Voltar ao topo"

## 🛠️ Tecnologias e Ferramentas

- [Next.js](https://nextjs.org/) — Framework React para aplicações modernas
- [TypeScript](https://www.typescriptlang.org/) — Tipagem estática para maior segurança
- [Tailwind CSS](https://tailwindcss.com/) — Utilitários para estilização rápida e responsiva
- [@next/mdx](https://www.npmjs.com/package/@next/mdx) + [gray-matter](https://www.npmjs.com/package/gray-matter) — conteúdo local em MDX com frontmatter
- [Swiper.js](https://swiperjs.com/react) — Carrossel poderoso para mobile
- [React Icons](https://react-icons.github.io/react-icons/) / [Lucide](https://lucide.dev/) — Ícones

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

O site fica em `http://localhost:3000`.

### Adicionando conteúdo (Tutoriais / Scratch)

Cada post é um arquivo `.mdx` em `src/content/tutoriais/` ou `src/content/scratch/`, com frontmatter `title`, `summary`, `date`, `status` (`em-breve` | `publicado`) e, para Scratch, `category` (`movement` | `control` | `operators`). Publicar um post novo = adicionar o arquivo e commitar.

## 🌐 Deploy

O site é publicado **exclusivamente no GitHub Pages**, no domínio próprio `https://petersonros.com`.

O deploy é automático: a cada `push` na branch `main`, o workflow
`.github/workflows/deploy.yml` roda `next build` (export estático em `out/`) e
publica via GitHub Pages.

Pré-requisitos: em **Settings → Pages**, definir _Source_ como
**GitHub Actions** e o campo **Custom domain** como `petersonros.com`.

Para gerar o build estático localmente:

```
npm run build     # gera out/
```

## 💡 Futuras melhorias

* Seção/página de contato (formulário via serviço externo ou mailto)
* Conteúdo completo das seções Tutoriais/Scratch/Formação (hoje com resumos "em breve")
* Internacionalização (i18n)
* Acessibilidade refinada (a11y)

## 👨‍💻 Autor
Desenvolvido por **Peterson** 💻 com apoio de **Orion** 🚀
