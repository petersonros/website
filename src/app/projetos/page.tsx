// src/app/projetos/page.tsx

import type { Metadata } from "next";
import { CardGrid } from "@/components/ui/CardGrid";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Projetos reais de Peterson: sistemas, ferramentas e jogos.",
};

export default function ProjetosPage() {
  return (
    <main className="pt-24 md:pt-32 space-y-8 bg-background text-foreground">
      <CardGrid />
    </main>
  );
}
