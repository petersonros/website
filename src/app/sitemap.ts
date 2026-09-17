import type { MetadataRoute } from "next";
import { SITE_URL, STATIC_ROUTES } from "@/lib/site";
import { getAllEntries } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const dynamicRoutes = [
    ...getAllEntries("tutoriais").map((entry) => `/tutoriais/${entry.slug}/`),
    ...getAllEntries("scratch").map((entry) => `/scratch/${entry.slug}/`),
  ];

  return [...STATIC_ROUTES, ...dynamicRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
  }));
}
