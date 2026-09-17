// src/components/layout/DesktopNav.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, GraduationCap, FolderGit2, BookOpen, Blocks } from "lucide-react";

const navItems = [
  { href: "/", label: "Início", icon: Home },
  { href: "/sobre", label: "Sobre", icon: User },
  { href: "/formacao", label: "Formação", icon: GraduationCap },
  { href: "/projetos", label: "Portfólio", icon: FolderGit2 },
  { href: "/tutoriais", label: "Tutoriais", icon: BookOpen },
  { href: "/scratch", label: "Scratch", icon: Blocks },
];

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-5 text-muted-foreground font-medium">
      {navItems.map(({ href, label, icon: Icon }) => {
        const isActive =
          href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            className={`transition-colors tracking-wide hover:text-primary ${
              isActive ? "text-primary font-semibold" : ""
            }`}
          >
            <Icon className="inline-block mr-1" size={18} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
