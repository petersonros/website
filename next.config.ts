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
// Plugins passados por nome (não por import): opções com funções JS não
// serializáveis não funcionam com o Turbopack, que exige nomes de string.
// - remark-frontmatter: ignora o bloco `---` que o gray-matter usa pra
//   extrair title/summary/date de cada arquivo
// - remark-gfm: sem isso, tabelas markdown (`| a | b |`) não são reconhecidas
//   e caem como texto literal num <p> — usado no Capítulo 7 do Pac-Man
const withMDX = createMDX({
  options: { remarkPlugins: ["remark-frontmatter", "remark-gfm"] },
});

export default withMDX(nextConfig);
