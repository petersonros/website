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
  const { default: Post } = await import(`@/content/tutoriais/${slug}.mdx`);

  return (
    <SectionWrapper>
      <article className="max-w-3xl mx-auto">
        <Post />
        <Link
          href="/tutoriais"
          className="mt-8 inline-block text-primary hover:underline"
        >
          ← Voltar para tutoriais
        </Link>
      </article>
    </SectionWrapper>
  );
}
