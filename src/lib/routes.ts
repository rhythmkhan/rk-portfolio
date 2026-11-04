export const pageRoutes = {
  home: "/",
  about: "/about",
  service: "/services",
  contact: "/contact",
  blog: "/blog",
  pricing: "/pricing",
  terms: "/terms",
  privacy: "/privacy",
} as const;

const legacyHashRoutes = {
  "#about-me": "about",
  "#service": "service",
  "#contact-me": "contact",
  "#blog": "blog",
  "#blog-post": "blog",
  "#pricing": "pricing",
  "#terms-condition": "terms",
  "#privacy-policy": "privacy",
} as const;

export type AppPage = keyof typeof pageRoutes;

const routeEntries = Object.entries(pageRoutes) as [AppPage, string][];
const legacyRouteEntries = Object.entries(legacyHashRoutes) as [
  keyof typeof legacyHashRoutes,
  AppPage,
][];

function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export function getPageFromLocation(locationLike: {
  pathname: string;
  hash: string;
}): AppPage {
  const pathname = normalizePath(locationLike.pathname);

  if (pathname === pageRoutes.blog || pathname.startsWith(`${pageRoutes.blog}/`)) {
    return "blog";
  }

  const matchedRoute = routeEntries.find(([, value]) => value === pathname);
  if (matchedRoute) {
    return matchedRoute[0];
  }

  if (pathname === "/") {
    const legacyMatch = legacyRouteEntries.find(([hash]) => hash === locationLike.hash);
    if (legacyMatch) {
      return legacyMatch[1];
    }
  }

  return "home";
}

export function getBlogSlugFromLocation(locationLike: {
  pathname: string;
  hash: string;
}) {
  const pathname = normalizePath(locationLike.pathname);

  if (pathname.startsWith(`${pageRoutes.blog}/`)) {
    const slug = pathname.slice(pageRoutes.blog.length + 1).trim();
    return slug || null;
  }

  if (locationLike.hash.startsWith("#blog/")) {
    const slug = locationLike.hash.slice("#blog/".length).trim();
    return slug || null;
  }

  return null;
}

export function getBlogPostRoute(slug: string) {
  return `${pageRoutes.blog}/${slug}`;
}
