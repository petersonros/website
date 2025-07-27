// src/components/layout/MobileNav.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Folder, Mail } from "lucide-react";

interface Props {
  closeMenu: () => void;
}

const navItems = [
  { href: "#about", label: "Sobre", icon: User },
  { href: "#projects", label: "Projetos", icon: Folder },
  { href: "#contact", label: "Contato", icon: Mail },
];

export function MobileNav({ closeMenu }: Props) {
  const pathname = usePathname();

  return (
    <nav className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 pt-2 text-gray-800 dark:text-gray-200">
      <ul className="flex flex-col gap-4 text-lg font-medium">
        {navItems.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={closeMenu}
              className={`hover:text-blue-500 dark:hover:text-blue-400 ${
                pathname === href ? "text-blue-600 dark:text-blue-400 font-semibold" : ""
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
