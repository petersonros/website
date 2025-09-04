import Link from "next/link";

export const dynamic = "force-static";

export default function Sucesso() {
  return (
    <main className="max-w-lg mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Mensagem enviada!</h1>
      <p className="mb-6">
        Obrigado por entrar em contato. Em breve eu respondo.
      </p>
      <Link className="underline" href="/">
        Voltar para a página inicial
      </Link>
    </main>
  );
}
