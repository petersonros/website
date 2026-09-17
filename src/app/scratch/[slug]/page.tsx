// src/app/scratch/[slug]/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
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
  const { default: Post } = await import(`@/content/scratch/${slug}.mdx`);

  return (
    <SectionWrapper>
      <article className="max-w-3xl mx-auto">
        <Post />
        <Link
          href="/scratch"
          className="mt-8 inline-block text-primary hover:underline"
        >
          ← Voltar para Scratch
        </Link>
      </article>
    </SectionWrapper>
  );
}
