// src/components/layout/Footer.tsx

"use client";

import { Github, Instagram, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="fixed bottom-0 left-0 w-full z-40 bg-white/80 dark:bg-gray-900/80 text-center py-2 text-sm text-gray-600 dark:text-gray-300 shadow-inner backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <span>&copy; {new Date().getFullYear()} Peterson</span>
        <div className="flex gap-4">
          <a
            href="https://github.com/petersonros"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-500"
          >
            <Github size={20} />
          </a>
          <a
            href="https://instagram.com/peterson_ro.s"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500"
          >
            <Instagram size={20} />
          </a>
          <button
            onClick={scrollToTop}
            className="hover:text-blue-600 transition"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
