import type { NextConfig } from "next";

/**
 * Publicação exclusiva no GitHub Pages: https://petersonros.github.io/website/
 * O site vive sob o subpath /website, então basePath/assetPrefix são fixos.
 */
const basePath = "/website";

const nextConfig: NextConfig = {
  output: "export", // gera HTML estático em /out
  images: { unoptimized: true }, // sem otimização server-side (Pages é estático)
  basePath,
  assetPrefix: `${basePath}/`,
  trailingSlash: true, // gera .../index.html
  // Permite acessar `next dev` pelo IP da rede local (ex: testar no celular).
  // Sem isso, o Next bloqueia requisições cross-origin do HMR e a página
  // fica parcialmente sem interatividade no dispositivo remoto.
  allowedDevOrigins: ["192.168.0.59"],
};

export default nextConfig;
