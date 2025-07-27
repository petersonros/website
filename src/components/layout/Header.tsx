// src/components/layout/Header.tsx

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-sm ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-[var(--color-text)] max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold tracking-wide hover:text-blue-500"
        >
          Peterson
        </Link>

        <DesktopNav />

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && <MobileNav closeMenu={closeMenu} />}
    </header>
  );
}
