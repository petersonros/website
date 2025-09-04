// src/components/ContactForm.tsx

"use client";

import { useEffect, useState } from "react";
import { useToast } from "@/components/Toast";

export default function ContactForm() {
  const [warmupSrc, setWarmupSrc] = useState("/warmup.txt");
  const [submitting, setSubmitting] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const isProd = /(?:^|\.)petersonros\.com$/i.test(window.location.hostname);
    setWarmupSrc(isProd ? "/contact.php?warmup=1" : "/warmup.txt");
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500"
      />
      <iframe
        src={warmupSrc}
        title="warmup"
        className="hidden"
        aria-hidden="true"
      />

      <form
        action="/contact.php"
        method="POST"
        className="space-y-5 p-6"
        noValidate
        onSubmit={() => {
          setSubmitting(true);
          toast({ kind: "info", message: "Enviando…" });
        }}
      >
        <input
          type="text"
          name="hp"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-60">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 21a8 8 0 0 0-16 0"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12"
                  cy="7"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            <input
              id="name"
              name="name"
              placeholder=" "
              required
              disabled={submitting}
              className="peer w-full rounded-xl border border-white/10 bg-transparent px-10 py-3 outline-none transition placeholder-transparent focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500/60"
            />
            <label
              htmlFor="name"
              className="pointer-events-none absolute left-10 top-1/2 -translate-y-1/2 text-sm opacity-70 transition peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
            >
              Nome
            </label>
          </div>

          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-60">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
            </span>
            <input
              id="_replyto"
              name="_replyto"
              type="email"
              placeholder=" "
              required
              disabled={submitting}
              className="peer w-full rounded-xl border border-white/10 bg-transparent px-10 py-3 outline-none transition placeholder-transparent focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500/60"
            />
            <label
              htmlFor="_replyto"
              className="pointer-events-none absolute left-10 top-1/2 -translate-y-1/2 text-sm opacity-70 transition peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
            >
              E-mail
            </label>
          </div>
        </div>

        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-4 opacity-60">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17v3l3-3h7a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H7A3 3 0 0 0 4 8v6a3 3 0 0 0 3 3Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          <textarea
            id="message"
            name="message"
            placeholder=" "
            required
            disabled={submitting}
            className="peer w-full min-h-[140px] rounded-xl border border-white/10 bg-transparent px-10 py-3 outline-none transition placeholder-transparent focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500/60"
          />
          <label
            htmlFor="message"
            className="pointer-events-none absolute left-10 top-3 text-sm opacity-70 transition peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
          >
            Mensagem
          </label>
        </div>

        <div className="pt-1">
          <button
            disabled={submitting}
            aria-busy={submitting}
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium shadow-lg transition
                       bg-white text-black hover:brightness-95 disabled:opacity-60 disabled:cursor-not-allowed
                       dark:bg-black dark:text-white"
          >
            {submitting ? (
              <span className="inline-flex items-center gap-2">
                <svg
                  className="animate-spin"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeOpacity="0.25"
                    strokeWidth="3"
                  />
                  <path
                    d="M21 12a9 9 0 0 1-9 9"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
                Enviando…
              </span>
            ) : (
              "Enviar"
            )}
          </button>
        </div>

        <p className="text-xs opacity-70">
          Ao enviar, você concorda em ser contactado por e-mail. Sem spam.
        </p>
      </form>
    </div>
  );
}
