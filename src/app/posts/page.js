import Link from "next/link";

// Função para buscar posts (fetch com cache estático)
async function getPosts() {
  const res = await fetch("https://admin.petersonros.com/api_texto.php", { cache: "force-cache" });
  if (!res.ok) return [];
  const data = await res.json();
  // Retorno esperado: data.textos (ajuste se sua API retornar com outro nome)
  return data?.textos ?? [];
}

export default async function PostsPage() {
  const posts = await getPosts();

  if (posts.length === 0) {
    return (
      <main className="max-w-3xl mx-auto mt-10 p-4 text-center">
        <h1 className="text-3xl font-bold mb-6">Blog / Textos</h1>
        <p className="text-gray-400">Nenhum post publicado ainda.</p>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6">Blog / Textos</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}/`}
            className="block border border-gray-700 rounded-xl p-6 bg-neutral-900 shadow hover:scale-105 transition-transform"
          >
            <div className="text-xl font-semibold mb-2">{post.titulo}</div>
            <div className="text-gray-400 text-sm mb-1">
              {post.criado_em} | {post.autor}
            </div>
            <div className="text-gray-300">{post.resumo}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
