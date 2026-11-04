import { CalendarDays, UserRound } from "lucide-react";
import { blogPosts, BlogPost } from "../data/blogPosts";
import { getBlogPostRoute } from "../lib/routes";

type BlogProps = {
  posts?: BlogPost[];
  showSectionHeader?: boolean;
};

export default function Blog({
  posts = blogPosts,
  showSectionHeader = true,
}: BlogProps) {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        {showSectionHeader ? (
          <div className="text-center mb-16">
            <span className="text-brand font-bold uppercase tracking-widest text-xs mb-4 block">
              BLOG AND NEWS
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Latest tech moves
              <br />
              and AI trends worth tracking
            </h2>
            <p className="mx-auto max-w-2xl text-muted leading-relaxed">
              Short reads on recent announcements shaping AI products, cloud
              infrastructure, and the next wave of digital experiences.
            </p>
          </div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-2xl border border-white/5 bg-card"
            >
              <div
                className={`relative aspect-video overflow-hidden ${post.coverClassName}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_36%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.02),rgba(10,10,10,0.35))]"></div>
                <div className="absolute inset-4 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center gap-1 rounded-full border border-white/12 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm">
                      <UserRound className="h-3 w-3" />
                      Seratul
                    </span>
                    <span className="flex items-center gap-1 rounded-full border border-white/12 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm">
                      <CalendarDays className="h-3 w-3" />
                      {post.sourcePublishedAt}
                    </span>
                  </div>
                  <div className="max-w-[14rem]">
                    <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-white/70">
                      {post.coverLabel}
                    </span>
                    <p className="mt-3 text-2xl font-black leading-tight text-white">
                      {post.coverTitle}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand">
                  {post.category}
                </span>
                <h4 className="mt-4 text-xl font-bold leading-snug transition-colors group-hover:text-brand">
                  {post.title}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <a
                  href={getBlogPostRoute(post.slug)}
                  className="mt-6 inline-flex text-xs font-bold uppercase tracking-widest transition-colors hover:text-brand"
                >
                  Read More &gt;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
