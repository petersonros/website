// src/components/layout/DesktopNav.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { User, Folder } from "lucide-react";

const navItems = [
  { href: "/#about", label: "Sobre", icon: User },
  { href: "/#projects", label: "Projetos", icon: Folder },
];

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-6 text-muted-foreground font-medium">
      {navItems.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className={`transition-colors tracking-wide hover:text-primary ${
            pathname === href ? "text-primary font-semibold" : ""
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
