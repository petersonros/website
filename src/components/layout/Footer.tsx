// src/components/layout/Footer.tsx

"use client";

import { Github, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="mt-auto border-t border-border bg-background text-center py-4 text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3 font-mono">
          <span>&copy; {new Date().getFullYear()} Peterson</span>
          <span className="hidden sm:inline text-xs text-muted-foreground/70">
            build 2026.09 · Next.js
          </span>
        </div>
        <div className="flex gap-4">
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
            aria-label="E-mail"
            className="hover-glow hover:text-primary transition-colors"
          >
            <Mail size={20} />
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
