import Link from "next/link";
import { notFound } from "next/navigation";

const API_URL = "https://admin.petersonros.com/api_texto.php";

// Só as rotas geradas por generateStaticParams existem no export estático.
export const dynamicParams = false;

async function getAllPostIds() {
  try {
    const res = await fetch(API_URL, { cache: "force-cache" });
    if (!res.ok) return [];
    const data = await res.json();
    return (data?.textos ?? []).map((post) => ({ id: String(post.id) }));
  } catch {
    return [];
  }
}

// `output: export` exige pelo menos uma rota. Se a API estiver fora no build,
// geramos um placeholder que apenas renderiza o 404.
const NONE = "__none__";

export async function generateStaticParams() {
  const ids = await getAllPostIds();
  return ids.length ? ids : [{ id: NONE }];
}

async function getPost(id) {
  try {
    const res = await fetch(`${API_URL}?id=${encodeURIComponent(id)}`, {
      cache: "force-cache",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.post ?? null;
  } catch {
    return null;
  }
}

export default async function PostPage({ params }) {
  const { id } = await params;
  if (id === NONE) return notFound();

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
