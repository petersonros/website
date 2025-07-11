"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-sm ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-gray-800 dark:text-white"
        >
          Peterson
        </Link>
        <nav>
          <ul className="flex items-center gap-6 text-gray-800 dark:text-gray-200 font-medium">
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="#about">Sobre</Link>
            </li>
            <li>
              <Link href="#projects">Projetos</Link>
            </li>
            <li>
              <Link href="#contact">Contato</Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
