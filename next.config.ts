import type { NextConfig } from "next";

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

export default nextConfig;
