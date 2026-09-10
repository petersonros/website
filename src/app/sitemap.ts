import type { MetadataRoute } from "next";
import { SITE_URL, STATIC_ROUTES } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
  }));
}
