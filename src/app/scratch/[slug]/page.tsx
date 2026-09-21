// src/app/scratch/[slug]/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { Download } from "lucide-react";
import { getAllEntries, getSlugs } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getSlugs("scratch").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getAllEntries("scratch").find((e) => e.slug === slug);
  return { title: entry?.title, description: entry?.summary };
}

export default async function ScratchEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getAllEntries("scratch").find((e) => e.slug === slug);
  const { default: Post } = await import(`@/content/scratch/${slug}.mdx`);

  return (
    <section className="scratch-panel min-h-screen pt-24 md:pt-32 px-4 md:px-6 flex flex-col items-center">
      <article className="max-w-3xl mx-auto min-w-0 w-full">
        <h1 className="font-sans text-3xl md:text-4xl font-bold mb-4">
          {entry?.title}
        </h1>
        {entry?.sb3Download && (
          <a
            href={entry.sb3Download}
            download
            className="hover-accent-border inline-flex items-center gap-2 font-mono text-sm text-primary border border-border rounded-md px-3 py-1.5 mb-8"
          >
            <Download size={16} />
            baixar projeto .sb3 (início deste capítulo)
          </a>
        )}
        <Post />
        <Link
          href="/scratch"
          className="mt-8 inline-block text-primary hover:underline"
        >
          ← Voltar para Scratch
        </Link>
      </article>
    </section>
  );
}
