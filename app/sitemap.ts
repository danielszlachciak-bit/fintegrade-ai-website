import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { knowledgeArticles } from "@/lib/knowledge";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/wiedza",
    "/digital-twin",
    "/controlling-ai",
    "/mvp",
    "/ankieta",
    "/bezpieczenstwo",
    "/o-mnie",
    "/kontakt",
    "/polityka-prywatnosci",
    "/cookies",
    "/regulamin",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/controlling-ai" || path === "/digital-twin" ? 0.9 : 0.7,
  }));

  const knowledgeEntries: MetadataRoute.Sitemap = knowledgeArticles.map((article) => ({
    url: `${site.url}/wiedza/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticEntries, ...knowledgeEntries];
}
