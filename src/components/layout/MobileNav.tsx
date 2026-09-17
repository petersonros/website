// src/components/layout/MobileNav.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, GraduationCap, FolderGit2, BookOpen, Blocks } from "lucide-react";

interface Props {
  closeMenu: () => void;
}

const navItems = [
  { href: "/", label: "Início", icon: Home },
  { href: "/sobre", label: "Sobre", icon: User },
  { href: "/formacao", label: "Formação", icon: GraduationCap },
  { href: "/projetos", label: "Portfólio", icon: FolderGit2 },
  { href: "/tutoriais", label: "Tutoriais", icon: BookOpen },
  { href: "/scratch", label: "Scratch", icon: Blocks },
];

export function MobileNav({ closeMenu }: Props) {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden bg-background border-t border-border px-4 pb-4 pt-2 text-muted-foreground">
      <ul className="flex flex-col gap-4 text-lg font-medium">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive =
            href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
          return (
            <li key={href}>
              <Link
                href={href}
                onClick={closeMenu}
                className={`transition-colors hover:text-primary ${
                  isActive ? "text-primary font-semibold" : ""
                }`}
              >
                <Icon className="inline-block mr-2" size={20} />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
