// src/app/posts/page.tsx

"use client";
import { useEffect, useState } from "react";

type Texto = {
  id: number;
  titulo: string;
  conteudo: string;
  criado_em: string;
};

export default function PostsPage() {
  const [textos, setTextos] = useState<Texto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://admin.petersonros.com/listar_textos.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setTextos(data.textos);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-10 text-lg">Carregando textos...</div>;

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-red-800">Blog / Textos</h1>
      {textos.length === 0 && (
        <div className="text-red-800">Nenhum texto publicado ainda.</div>
      )}
      {textos.map((texto) => (
        <div key={texto.id} className="mb-8 p-4 border rounded-xl shadow">
          <div className="text-xl font-bold mb-2 text-red-800">
            {texto.titulo}
          </div>
          <div className="text-gray-700 mb-2 whitespace-pre-line">
            {texto.conteudo}
          </div>
          <div className="text-xs text-gray-500">
            {new Date(texto.criado_em).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
}
