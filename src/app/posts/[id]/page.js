import Link from "next/link";
import { notFound } from "next/navigation";

// Função para buscar todos os posts (só IDs!)
async function getAllPostIds() {
  const res = await fetch("https://admin.petersonros.com/api_texto.php", { cache: "force-cache" });
  const data = await res.json();
  return (data.textos ?? []).map((post) => ({ id: post.id.toString() }));
}

// OBRIGATÓRIO para SSG/Export!
export async function generateStaticParams() {
  return await getAllPostIds();
}

// Função para buscar o post pelo ID
async function getPost(id) {
  const res = await fetch(`https://admin.petersonros.com/api_texto.php?id=${id}`, { cache: "force-cache" });
  const data = await res.json();
  // Atenção: sua API precisa retornar { success: true, post: {...} }
  return data.post ?? null;
}

export default async function PostPage({ params }) {
  const { id } = params;
  const post = await getPost(id);

  if (!post) return notFound();

  return (
    <main className="max-w-2xl mx-auto mt-10 p-4 border rounded-xl shadow bg-black">
      <h1 className="text-3xl font-bold mb-2">{post.titulo}</h1>
      <div className="text-sm text-gray-400 mb-2">
        {post.criado_em} | {post.autor}
      </div>
      <div className="mb-6 text-gray-300">{post.resumo}</div>
      <div className="text-lg">{post.conteudo}</div>
      <Link href="/posts" className="mt-8 inline-block text-blue-400 underline">
        ← Voltar para lista de posts
      </Link>
    </main>
  );
}
