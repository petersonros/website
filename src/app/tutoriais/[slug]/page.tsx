// src/app/tutoriais/[slug]/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { getAllEntries, getSlugs } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getSlugs("tutoriais").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getAllEntries("tutoriais").find((e) => e.slug === slug);
  return { title: entry?.title, description: entry?.summary };
}

export default async function TutorialPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getAllEntries("tutoriais").find((e) => e.slug === slug);
  const { default: Post } = await import(`@/content/tutoriais/${slug}.mdx`);

  return (
    <SectionWrapper>
      <article className="max-w-3xl mx-auto min-w-0 w-full">
        <h1 className="font-sans text-3xl md:text-4xl font-bold mb-4">
          {entry?.title}
        </h1>
        <Post />
        <Link
          href="/tutoriais"
          className="mt-8 mb-4 inline-block text-primary hover:underline"
        >
          ← Voltar para tutoriais
        </Link>
      </article>
    </SectionWrapper>
  );
}
