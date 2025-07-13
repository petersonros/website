"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { User, Folder, Mail } from "lucide-react";

const navItems = [
  { href: "/about", label: "Sobre", icon: User },
  { href: "/#projects", label: "Projetos", icon: Folder },
  { href: "/#contact", label: "Contato", icon: Mail },
];

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-6 text-gray-800 dark:text-gray-200 font-medium">
      {navItems.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className={`transition-colors tracking-wide hover:text-blue-500 dark:hover:text-blue-300 ${
            pathname === href ? "text-blue-600 dark:text-blue-400 font-semibold" : ""
          }`}
        >
          <Icon className="inline-block mr-1" size={18} />
          {label}
        </Link>
      ))}
      <ThemeToggle />
    </nav>
  );
}
