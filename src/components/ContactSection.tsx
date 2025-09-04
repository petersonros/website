// src/components/ContactSection.tsx
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contato"
      className="scroll-mt-24 px-4 py-20 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-gray-100"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Coluna esquerda: headline + cards de info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-300">
            Vamos Conversar?
          </h2>
          <p className="text-base md:text-lg leading-relaxed opacity-80 mb-8">
            Interessado em tecnologia, projetos inovadores ou novas ideias?
            Entre em contato e vamos transformar conceitos em realidade.
          </p>

          {/* Card e-mail */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm mb-6">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500"
            />
            <div className="flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 7.5 12 13l9-5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="3"
                    y="6"
                    width="18"
                    height="12"
                    rx="2.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm opacity-80">Email</div>
                <a
                  href="mailto:contato@petersonros.com"
                  className="text-sky-300 hover:underline underline-offset-4"
                >
                  contato@petersonros.com
                </a>
              </div>
              <span className="opacity-60 group-hover:opacity-100 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17 17 7M9 7h8v8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Redes sociais */}
          <div className="mb-6">
            <div className="text-xs tracking-widest opacity-60 mb-3">
              REDES SOCIAIS
            </div>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://github.com/petersonros"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 hover:bg-white/5 transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 2a10 10 0 0 0-3.162 19.49c.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.776.603-3.362-1.34-3.362-1.34-.454-1.152-1.11-1.459-1.11-1.459-.908-.621.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.218-.252-4.552-1.109-4.552-4.94 0-1.091.39-1.985 1.029-2.684-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0 1 12 6.844a9.55 9.55 0 0 1 2.5.336c1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.699 1.027 1.593 1.027 2.684 0 3.841-2.338 4.685-4.566 4.933.359.309.678.919.678 1.852 0 1.337-.012 2.416-.012 2.746 0 .268.18.579.688.481A10 10 0 0 0 12 2Z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://instagram.com/SEU_INSTAGRAM"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 hover:bg-white/5 transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
                Instagram
              </a>
            </div>
          </div>

          {/* Callout roxo (disponível) */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-900/40 to-purple-900/30 p-5 shadow-inner">
            <div className="font-semibold">Disponível para projetos</div>
            <p className="opacity-80">
              Freelances, colaborações, consultoria ou apenas uma conversa sobre
              tecnologia. Respondo em até 24h!
            </p>
          </div>
        </div>

        {/* Coluna direita: card do formulário (reuso) */}
        <ContactForm />
      </div>
    </section>
  );
}
