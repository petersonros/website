// src/components/layout/Footer.tsx

"use client";

import { Github, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="mt-auto border-t border-border bg-background text-center py-4 text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="flex items-center justify-between gap-3 font-mono">
          <span>&copy; {new Date().getFullYear()} Peterson</span>
          <span className="text-xs text-muted-foreground/70">
            build 2026.09 · Next.js
          </span>
        </div>
        <div className="flex items-center justify-between w-full gap-4 sm:w-auto sm:justify-end">
          <a
            href="https://github.com/petersonros"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover-glow hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:contato@petersonros.com"
            className="hover-glow hover:text-primary transition-colors flex items-center gap-1.5 font-mono text-xs"
          >
            <Mail size={16} />
            contato@petersonros.com
          </a>
          <button
            onClick={scrollToTop}
            className="hover-glow hover:text-primary transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
