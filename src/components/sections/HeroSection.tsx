"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const BG = dynamic(
  () =>
    import("@/components/CubeBackground").then(
      (m) => m.default ?? m.CubeBackground
    ),
  { ssr: false, loading: () => null }
);

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-background text-foreground
                 min-h-screen py-32 flex flex-col items-center justify-center text-center px-4"
    >
      <BG className="opacity-30" />
      <div className="relative z-10 flex flex-col items-center gap-10">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Olá, eu sou Peterson
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Formado em <strong>Análise e Desenvolvimento de Sistemas</strong>,
            com uma trajetória que vem da usinagem CNC até o desenvolvimento web.
          </p>
        </div>

        {/* Painel "sobre" estilo editor de código (CONTEXTO §10) */}
        <div className="w-full max-w-md text-left rounded-lg border border-border bg-card shadow-xl overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-background/60">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              sobre.yaml
            </span>
          </div>
          <pre className="font-mono text-sm leading-relaxed px-5 py-4 overflow-x-auto">
            <code>
              <span className="text-muted-foreground">nome:</span>{" "}
              <span className="text-foreground">Peterson (Peter)</span>
              {"\n"}
              <span className="text-muted-foreground">local:</span>{" "}
              <span className="text-foreground">Indaiatuba, SP</span>
              {"\n"}
              <span className="text-muted-foreground">formacao:</span>{" "}
              <span className="text-primary">Análise e Desenvolvimento de Sistemas</span>
              {"\n"}
              <span className="text-muted-foreground">atuacao:</span>{" "}
              <span className="text-foreground">
                tecnologia educacional, aulas de Scratch
              </span>
              {"\n"}
              <span className="text-muted-foreground">trajetoria:</span>{" "}
              <span className="text-foreground">
                20+ anos em usinagem/CNC
              </span>
              {"\n"}
              <span className="text-muted-foreground">stack:</span>{" "}
              <span className="text-foreground">
                [Next.js, TypeScript, Python, PowerShell, Linux]
              </span>
            </code>
          </pre>
        </div>

        <Link
          href="/sobre"
          className="font-mono text-sm text-primary hover:underline underline-offset-2"
        >
          cat sobre-mim.md →
        </Link>
      </div>
    </section>
  );
}
