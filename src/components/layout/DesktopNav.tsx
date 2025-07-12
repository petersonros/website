// src/components/layout/DesktopNav.tsx

"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { User, Folder, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";

export function DesktopNav() {
  const activeSection = useActiveSection(["about", "projects", "contact"]);
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-6 text-gray-800 dark:text-gray-200 font-medium">
      <Link
        href="/about"
        className={`transition-colors tracking-wide hover:text-blue-500 dark:hover:text-blue-300 ${
          pathname === "/about"
            ? "text-blue-600 dark:text-blue-400 font-semibold"
            : "text-gray-800 dark:text-gray-200"
        }`}
      >
        <User className="inline-block mr-1" size={18} /> Sobre
      </Link>

      <Link
        href="#projects"
        className={`transition-colors tracking-wide hover:text-blue-500 dark:hover:text-blue-300 ${
          activeSection === "projects"
            ? "text-blue-600 dark:text-blue-400 font-semibold"
            : "text-gray-800 dark:text-gray-200"
        }`}
      >
        <Folder className="inline-block mr-1" size={18} /> Projetos
      </Link>

      <Link
        href="#contact"
        className={`transition-colors tracking-wide hover:text-blue-500 dark:hover:text-blue-300 ${
          activeSection === "contact"
            ? "text-blue-600 dark:text-blue-400 font-semibold"
            : "text-gray-800 dark:text-gray-200"
        }`}
      >
        <Mail className="inline-block mr-1" size={18} /> Contato
      </Link>

      <ThemeToggle />
    </nav>
  );
}
