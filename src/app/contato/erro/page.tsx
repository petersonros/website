import Link from "next/link";

export const dynamic = "force-static";

export default function Erro() {
  return (
    <main className="max-w-lg mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Ops, algo deu errado</h1>
      <p className="mb-6">
        Tente novamente mais tarde ou envie um e-mail direto para{" "}
        <a className="underline" href="mailto:contato@petersonros.com">
          contato@petersonros.com
        </a>
        .
      </p>
      <Link className="underline" href="/contato/">
        Voltar ao formulário
      </Link>
    </main>
  );
}
