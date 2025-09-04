import type { NextConfig } from "next";

const repo = "website";
const isGhPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export", // gera HTML estático em /out
  images: { unoptimized: true }, // next/image sem otimização server-side
  basePath: isGhPages ? `/${repo}` : undefined,
  assetPrefix: isGhPages ? `/${repo}/` : undefined,
  trailingSlash: true, // gera .../index.html (amistoso com Apache/HostGator)
};

export default nextConfig;
