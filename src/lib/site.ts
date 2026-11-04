export const siteConfig = {
  personName: "Seratul Alim Khan",
  siteName: "Seratul Alim Khan",
  siteUrl: "https://khanshaheb.com",
  defaultTitle: "Seratul Alim Khan | AI Systems Architect & Full-Stack Developer",
  defaultDescription:
    "Seratul Alim Khan is a Bangladesh-based AI systems architect, LLM solutions engineer, and full-stack developer building automation, chatbots, and modern web products.",
  defaultImage: "/seratul.png",
  email: "seratul.alim@gmail.com",
  phone: "+8801978304389",
  addressLocality: "Tangail",
  addressCountry: "BD",
  sameAs: [
    "https://www.instagram.com/seratul.alim",
    "https://www.linkedin.com/in/seratul-alim",
    "https://github.com/seratul-alim",
    "https://x.com/seratulalimkhan",
  ],
} as const;

export function toAbsoluteUrl(path: string) {
  return new URL(path, siteConfig.siteUrl).toString();
}
