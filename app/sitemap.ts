import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/vitae",
    "/naechste-konzerte",
    "/vergangene-projekte",
    "/impressum",
  ];
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/naechste-konzerte" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
