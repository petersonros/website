import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { ContentEntryMeta } from "@/types";

export type ContentSection = "tutoriais" | "scratch" | "formacao";

function sectionDir(section: ContentSection) {
  return path.join(process.cwd(), "src", "content", section);
}

/** Lê o frontmatter de todos os .mdx de uma seção. Só roda em build/server. */
export function getAllEntries(section: ContentSection): ContentEntryMeta[] {
  const dir = sectionDir(section);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const entries = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data } = matter(raw);
    return { slug, ...data } as ContentEntryMeta;
  });

  return entries.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getSlugs(section: ContentSection): string[] {
  return getAllEntries(section).map((entry) => entry.slug);
}
