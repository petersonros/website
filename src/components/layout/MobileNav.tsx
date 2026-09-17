// src/components/layout/MobileNav.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Folder } from "lucide-react";

interface Props {
  closeMenu: () => void;
}

const navItems = [
  { href: "/#about", label: "Sobre", icon: User },
  { href: "/#projects", label: "Projetos", icon: Folder },
];

export function MobileNav({ closeMenu }: Props) {
  const pathname = usePathname();

  return (
    <nav className="md:hidden bg-background border-t border-border px-4 pb-4 pt-2 text-muted-foreground">
      <ul className="flex flex-col gap-4 text-lg font-medium">
        {navItems.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={closeMenu}
              className={`transition-colors hover:text-primary ${
                pathname === href ? "text-primary font-semibold" : ""
              }`}
            >
              <Icon className="inline-block mr-2" size={20} />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
