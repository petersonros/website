'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md py-4 px-6">
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <Link href="/" className="text-xl font-bold text-gray-800">
          Meu Site
        </Link>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><Link href="/">Início</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}
