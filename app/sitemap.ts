import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/wiedza", "/digital-twin", "/mvp", "/ankieta", "/bezpieczenstwo", "/o-mnie", "/kontakt", "/polityka-prywatnosci", "/cookies", "/regulamin"].map(path => ({ url: `${site.url}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : .7 }));
}
