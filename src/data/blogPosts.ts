export type BlogPostSection = {
  title: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  publishedAtIso: string;
  readTime: string;
  sourceName: string;
  sourceUrl: string;
  sourcePublishedAt: string;
  sourcePublishedAtIso: string;
  coverLabel: string;
  coverTitle: string;
  coverClassName: string;
  intro: string;
  takeaways: string[];
  sections: BlogPostSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "openai-amazon-enterprise-agents",
    category: "Trending AI News",
    title: "OpenAI and Amazon are pushing enterprise AI toward stateful agents",
    excerpt:
      "OpenAI's February 27, 2026 partnership with Amazon shows where enterprise AI is heading: cloud-native agents that can keep context, use tools, and run at production scale.",
    publishedAt: "March 16, 2026",
    publishedAtIso: "2026-03-16",
    readTime: "4 min read",
    sourceName: "OpenAI",
    sourceUrl: "https://openai.com/index/aws-and-openai-partnership/",
    sourcePublishedAt: "February 27, 2026",
    sourcePublishedAtIso: "2026-02-27",
    coverLabel: "OPENAI X AWS",
    coverTitle: "Stateful agents go enterprise",
    coverClassName:
      "bg-[linear-gradient(135deg,#111827_0%,#1f2937_45%,#0f172a_100%)]",
    intro:
      "One of the clearest AI signals this year is that the conversation is moving beyond chat interfaces and into full execution environments. OpenAI's new partnership with Amazon is important because it focuses on deployment, runtime, and scale instead of just model hype.",
    takeaways: [
      "Amazon Bedrock is getting a stateful runtime environment designed for OpenAI-powered agents.",
      "AWS will serve as OpenAI Frontier's exclusive third-party cloud distribution channel.",
      "The agreement also points to major demand for custom chips, infrastructure capacity, and production-grade orchestration.",
    ],
    sections: [
      {
        title: "What happened",
        paragraphs: [
          "On February 27, 2026, OpenAI announced a multi-year partnership with Amazon. The headline feature is a stateful runtime inside Amazon Bedrock, which is aimed at helping enterprises run agents that can remember task context, coordinate tools, and complete multi-step work more reliably.",
          "The announcement also highlights a much bigger infrastructure play. OpenAI plans to use large-scale AWS Trainium capacity, while Amazon gets access to more advanced OpenAI model distribution through its own cloud ecosystem.",
        ],
      },
      {
        title: "Why it matters",
        paragraphs: [
          "This matters because most companies are no longer asking whether AI can generate text. They are asking whether AI can take action inside real systems. Stateful runtimes, workflow execution, and tool usage are the pieces that turn a model into an actual business operator.",
          "For builders, this trend makes the stack clearer: strong models are important, but orchestration, memory, latency, cloud integration, and reliability are becoming just as important as raw intelligence.",
        ],
      },
      {
        title: "My take",
        paragraphs: [
          "The biggest shift here is practical. Enterprise AI is becoming more operational and less experimental. That is good news for developers who can combine APIs, automation, and product thinking into systems that solve repeatable business problems.",
        ],
      },
    ],
  },
  {
    slug: "samsung-mwc-2026-mobile-ai",
    category: "Latest Tech News",
    title: "Samsung's MWC 2026 strategy shows mobile AI is becoming an ecosystem layer",
    excerpt:
      "At Mobile World Congress 2026, Samsung positioned Galaxy AI as something bigger than a phone feature set, tying it to wearables, networks, and connected experiences across the full device stack.",
    publishedAt: "March 16, 2026",
    publishedAtIso: "2026-03-16",
    readTime: "3 min read",
    sourceName: "Samsung Newsroom",
    sourceUrl: "https://news.samsung.com/global/samsung-electronics-showcases-a-full-spectrum-of-ai-innovations-at-mwc-2026-from-mobile-ai-to-next-gen-networks",
    sourcePublishedAt: "March 2, 2026",
    sourcePublishedAtIso: "2026-03-02",
    coverLabel: "MWC 2026",
    coverTitle: "Mobile AI moves beyond the phone",
    coverClassName:
      "bg-[linear-gradient(135deg,#3b0764_0%,#1d4ed8_45%,#0f172a_100%)]",
    intro:
      "A lot of tech launches still treat AI like a feature checklist. Samsung's MWC 2026 announcement is more interesting because it frames AI as a layer that connects phones, wearables, networks, and personalized services into a single experience.",
    takeaways: [
      "Samsung used MWC 2026 to push Galaxy AI across devices instead of keeping it limited to one flagship phone.",
      "The company also tied AI into health, connected care, and future network infrastructure stories.",
      "The broader trend is clear: consumer tech companies want AI to feel ambient, persistent, and cross-device.",
    ],
    sections: [
      {
        title: "What stood out",
        paragraphs: [
          "Samsung's March 2, 2026 newsroom update did not focus only on hardware. It showed how the company wants AI to travel with the user across the full Galaxy ecosystem, including mobile, wellness, and network experiences.",
          "That is a meaningful change in framing. The product is no longer just the phone. The product is the connected environment around the user.",
        ],
      },
      {
        title: "Why it matters",
        paragraphs: [
          "For the broader tech industry, this points to the next phase of competition. The real differentiator will not be a single flashy AI tool. It will be how well a company connects devices, personal context, and services into one consistent system.",
          "For product teams, this is a reminder that AI experience design has to think beyond one screen. Context, continuity, and device handoff are becoming core UX problems.",
        ],
      },
      {
        title: "My take",
        paragraphs: [
          "This is the kind of trend worth tracking because it changes how digital products are designed. Users will increasingly expect assistants and smart features to follow them across devices without making them restart every interaction from scratch.",
        ],
      },
    ],
  },
  {
    slug: "nvidia-thinking-machines-ai-infrastructure",
    category: "Trending AI News",
    title: "NVIDIA and Thinking Machines are betting on gigawatt-scale AI infrastructure",
    excerpt:
      "NVIDIA's March 10, 2026 partnership with Thinking Machines Lab points to the next phase of AI competition: more compute, larger training systems, and tighter links between frontier research and deployment infrastructure.",
    publishedAt: "March 16, 2026",
    publishedAtIso: "2026-03-16",
    readTime: "4 min read",
    sourceName: "NVIDIA Blog",
    sourceUrl: "https://blogs.nvidia.com/blog/thinking-machines-lab/",
    sourcePublishedAt: "March 10, 2026",
    sourcePublishedAtIso: "2026-03-10",
    coverLabel: "NVIDIA",
    coverTitle: "The AI race is now about compute",
    coverClassName:
      "bg-[linear-gradient(135deg,#052e16_0%,#14532d_40%,#0f172a_100%)]",
    intro:
      "When major AI announcements start talking in gigawatts, it is a sign that the market is moving into another scale category. NVIDIA's partnership with Thinking Machines Lab is less about branding and more about the industrial side of frontier AI.",
    takeaways: [
      "NVIDIA and Thinking Machines announced a multi-year partnership on March 10, 2026.",
      "The plan targets at least one gigawatt of NVIDIA Vera Rubin systems beginning next year.",
      "This reinforces a major industry reality: access to compute is becoming a strategic moat for frontier AI builders.",
    ],
    sections: [
      {
        title: "What happened",
        paragraphs: [
          "NVIDIA said it is partnering with Thinking Machines Lab to build large-scale AI systems intended for both training and serving. The announcement points to highly customizable infrastructure and a significant long-term investment in compute capacity.",
          "The stated goal is not just bigger clusters. It is also about making advanced AI systems more usable for enterprises and researchers who need dependable performance at scale.",
        ],
      },
      {
        title: "Why it matters",
        paragraphs: [
          "Model capability still matters, but the ability to train, fine-tune, serve, and update those systems efficiently is becoming just as important. That is why infrastructure companies and model companies are getting even more tightly linked.",
          "This also affects everyone downstream. Faster infrastructure investment tends to accelerate better tooling, lower latency products, and more competition around enterprise AI services.",
        ],
      },
      {
        title: "My take",
        paragraphs: [
          "The AI market is starting to look more like a full industrial stack. The winners will not be defined only by who has the best demo. They will be defined by who can connect research, infrastructure, product execution, and reliability into one working system.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
