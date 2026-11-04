import { useEffect } from "react";
import { siteConfig, toAbsoluteUrl } from "../lib/site";

type SeoProps = {
  title?: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
  robots?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
};

function upsertMeta(selector: string, attribute: "name" | "property", value: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

export default function Seo({
  title,
  description,
  path,
  image = siteConfig.defaultImage,
  type = "website",
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  schema,
}: SeoProps) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${siteConfig.personName}`
      : siteConfig.defaultTitle;
    const canonicalUrl = toAbsoluteUrl(path);
    const imageUrl = toAbsoluteUrl(image);

    document.title = fullTitle;

    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[name="robots"]', "name", "robots", robots);
    upsertMeta('meta[name="author"]', "name", "author", siteConfig.personName);
    upsertMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:type"]', "property", "og:type", type);
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    upsertMeta('meta[property="og:image"]', "property", "og:image", imageUrl);
    upsertMeta('meta[property="og:site_name"]', "property", "og:site_name", siteConfig.siteName);
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", imageUrl);
    upsertLink("canonical", canonicalUrl);

    document
      .querySelectorAll('script[data-seo-schema="true"]')
      .forEach((element) => element.remove());

    const schemaItems = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

    schemaItems.forEach((item) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoSchema = "true";
      script.text = JSON.stringify(item);
      document.head.appendChild(script);
    });
  }, [description, image, path, robots, schema, title, type]);

  return null;
}
