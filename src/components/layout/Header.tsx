// src/components/layout/Header.tsx

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

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
      className={`site-header fixed top-0 left-0 w-full z-50 transition-colors border-b ${
        isScrolled ? "border-border" : "border-transparent"
      }`}
    >
      <div className="text-foreground max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="font-mono text-xl font-bold tracking-wide hover:text-primary transition-colors"
        >
          Peterson
        </Link>

        <DesktopNav />

        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleMenu}
            className="p-2 rounded hover:bg-muted transition"
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
