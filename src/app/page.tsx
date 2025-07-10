import React from 'react';

export default function Home() {
  return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 py-10 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Bem-vindo ao meu site pessoal!
      </h1>
      <p className="text-lg text-gray-600 max-w-xl">
        Este site foi desenvolvido com Next.js, Tailwind CSS e TypeScript, com foco em performance, boas práticas e publicação estática.
      </p>
    </main>
  );
}
