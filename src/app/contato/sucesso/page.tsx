"use client";
import { useEffect } from "react";
import { useToast } from "@/components/Toast";

export default function Sucesso() {
  const push = useToast();
  useEffect(() => {
    push({
      kind: "success",
      message: "Mensagem enviada! Obrigado pelo contato 👍",
    });
  }, [push]);
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">Obrigado!</h1>
      <p>Recebi sua mensagem e vou responder em breve.</p>
    </main>
  );
}
