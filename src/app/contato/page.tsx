import ContactForm from "@/components/ContactForm";

export const dynamic = "force-static";

export default function ContatoPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Contato</h1>
      <p className="opacity-80 mb-6">
        Prefere falar direto por aqui? Preencha o formulário abaixo.
      </p>
      <ContactForm />
    </main>
  );
}
