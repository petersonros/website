import Link from "next/link";
import { GraduationCap, ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";

const ctaCards = [
  {
    href: "/formacao",
    label: "Formação ADS",
    description: "Trajetória do curso e trabalhos de extensão.",
    icon: GraduationCap,
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="py-20 px-4 bg-background text-foreground">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">Destaques do portfólio</h2>
            <Link
              href="/projetos"
              className="hover-glow font-mono text-sm text-primary hover:underline underline-offset-2 inline-flex items-center gap-1"
            >
              ver tudo <ArrowRight size={14} />
            </Link>
          </div>
          <FeaturedProjects />
        </div>
      </section>

      <section className="py-16 px-4 bg-background text-foreground border-t border-border">
        <div className="max-w-6xl mx-auto flex justify-center">
          {ctaCards.map(({ href, label, description, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="hover-accent-border w-full max-w-sm rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-all"
            >
              <Icon className="text-primary mb-3" size={28} />
              <div className="font-semibold text-lg mb-1">{label}</div>
              <p className="text-sm text-muted-foreground">{description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
