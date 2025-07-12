// src/components/layout/MobileNav.tsx

"use client";

import Link from "next/link";
import { User, Folder, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const activeSection = useActiveSection(["about", "projects", "contact"]);

  if (!isOpen) return null;

  return (
    <nav className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 pt-2 text-gray-800 dark:text-gray-200">
      <ul className="flex flex-col gap-4 text-lg font-medium">
        <li>
          <Link
            href="#about"
            onClick={onClose}
            className={
              activeSection === "about"
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-gray-800 dark:text-gray-200"
            }
          >
            <User className="inline-block mr-2" size={20} /> Sobre
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            onClick={onClose}
            className={
              activeSection === "projects"
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-gray-800 dark:text-gray-200"
            }
          >
            <Folder className="inline-block mr-2" size={20} /> Projetos
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            onClick={onClose}
            className={
              activeSection === "contact"
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-gray-800 dark:text-gray-200"
            }
          >
            <Mail className="inline-block mr-2" size={20} /> Contato
          </Link>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
