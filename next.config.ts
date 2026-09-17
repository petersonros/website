import type { NextConfig } from "next";
import createMDX from "@next/mdx";

/**
 * Publicado em domínio próprio (https://petersonros.com) via GitHub Pages
 * (ver public/CNAME) — o site é servido na raiz, sem basePath/assetPrefix.
 */
const nextConfig: NextConfig = {
  output: "export", // gera HTML estático em /out
  images: { unoptimized: true }, // sem otimização server-side (Pages é estático)
  trailingSlash: true, // gera .../index.html
  // Permite acessar `next dev` pelo IP da rede local (ex: testar no celular).
  // Sem isso, o Next bloqueia requisições cross-origin do HMR e a página
  // fica parcialmente sem interatividade no dispositivo remoto.
  allowedDevOrigins: ["192.168.0.59"],
};

// Conteúdo MDX vive em src/content/ e é importado dinamicamente pelas rotas
// [slug] (não usado como page.mdx), então pageExtensions não precisa mudar.
// remark-frontmatter (passado por nome, não por import) faz o compilador MDX
// ignorar o bloco `---` que o gray-matter usa para extrair title/summary/date
// de cada arquivo — plugins com opções não serializáveis (funções JS) não
// funcionam com o Turbopack, que exige nomes de string.
const withMDX = createMDX({
  options: { remarkPlugins: ["remark-frontmatter"] },
});

export default withMDX(nextConfig);
