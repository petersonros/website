"use client";
import { useEffect } from "react";
import { useToast } from "@/components/Toast";

export default function Erro() {
  const push = useToast();
  useEffect(() => {
    push({
      kind: "error",
      message: "Não foi possível enviar. Tente novamente.",
    });
  }, [push]);
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">Ops…</h1>
      <p>Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.</p>
    </main>
  );
}
