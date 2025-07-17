// src/app/projects/page.tsx
import { Projects } from "@/components/ui/Projects";

export default function ProjectsPage() {
  return (
    <main className="container py-16 space-y-8">
      <h1 className="text-3xl font-bold">Todos os Projetos</h1>
      <Projects />
    </main>
  );
}
