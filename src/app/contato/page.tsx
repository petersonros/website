export default function Contato() {
  return (
    <main className="max-w-lg mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Contato</h1>

      <form action="/contact.php" method="POST" className="space-y-4">
        {/* Honeypot para bots */}
        <input
          type="text"
          name="hp"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <input
          name="name"
          placeholder="Seu nome"
          className="w-full border p-3 rounded"
          required
        />
        <input
          name="_replyto"
          type="email"
          placeholder="Seu e-mail"
          className="w-full border p-3 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Mensagem"
          className="w-full border p-3 rounded min-h-[140px]"
          required
        />
        <button className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">
          Enviar
        </button>
      </form>

      <p className="text-sm opacity-70 mt-3">
        Ao enviar, você concorda com o contato por e-mail.
      </p>
    </main>
  );
}
