import Blog from "../components/Blog";
import Seo from "../components/Seo";
import { blogPosts, getBlogPost } from "../data/blogPosts";
import { getBlogPostRoute, pageRoutes } from "../lib/routes";
import { siteConfig, toAbsoluteUrl } from "../lib/site";

type BlogArticlePageProps = {
  slug: string;
};

export default function BlogArticlePage({ slug }: BlogArticlePageProps) {
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <>
        <Seo
          title="Post not found"
          description="The requested blog post could not be found."
          path={pageRoutes.blog}
          robots="noindex, nofollow"
        />
        <section className="border-b border-white/5 bg-dark py-32">
          <div className="mx-auto max-w-4xl px-6">
            <span className="block text-xs font-bold uppercase tracking-[0.35em] text-brand">
              Blog
            </span>
            <h1 className="mt-6 text-5xl font-black leading-[0.95]">
              Post not found
            </h1>
            <p className="mt-6 max-w-2xl text-muted leading-relaxed">
              This article does not exist anymore or the link is incorrect.
            </p>
            <a
              href={pageRoutes.blog}
              className="mt-8 inline-flex text-sm font-bold uppercase tracking-[0.24em] text-white transition-colors hover:text-brand"
            >
              Back to Blog
            </a>
          </div>
        </section>
      </>
    );
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);
  const articlePath = getBlogPostRoute(post.slug);

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        path={articlePath}
        type="article"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAtIso,
            dateModified: post.publishedAtIso,
            author: {
              "@type": "Person",
              name: siteConfig.personName,
            },
            publisher: {
              "@type": "Person",
              name: siteConfig.personName,
            },
            mainEntityOfPage: toAbsoluteUrl(articlePath),
            image: [toAbsoluteUrl(siteConfig.defaultImage)],
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: toAbsoluteUrl(pageRoutes.home),
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: toAbsoluteUrl(pageRoutes.blog),
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: toAbsoluteUrl(articlePath),
              },
            ],
          },
        ]}
      />
      <section className="hero-pattern border-b border-white/5 bg-dark pb-18 pt-36">
        <div className="mx-auto max-w-5xl px-6">
          <a
            href={pageRoutes.blog}
            className="text-xs font-bold uppercase tracking-[0.3em] text-muted transition-colors hover:text-brand"
          >
            Back to all posts
          </a>
          <span className="mt-10 block text-xs font-bold uppercase tracking-[0.35em] text-brand">
            {post.category}
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
            {post.intro}
          </p>

          <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-white/75">
            <span className="rounded-full border border-white/10 px-4 py-2">
              Published {post.publishedAt}
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Source date {post.sourcePublishedAt}
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-dark py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <aside className="rounded-3xl border border-white/5 bg-card p-8 lg:sticky lg:top-28 lg:h-fit">
            <span className="block text-xs font-bold uppercase tracking-[0.32em] text-brand">
              Quick Take
            </span>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-white/82">
              {post.takeaways.map((point) => (
                <li key={point} className="border-b border-white/6 pb-4 last:border-0 last:pb-0">
                  {point}
                </li>
              ))}
            </ul>
            <a
              href={post.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex text-xs font-bold uppercase tracking-[0.28em] text-white transition-colors hover:text-brand"
            >
              Open Source Article
            </a>
            <p className="mt-3 text-sm text-muted">
              Based on the official {post.sourceName} announcement published on{" "}
              {post.sourcePublishedAt}.
            </p>
          </aside>

          <article className="space-y-12">
            <div
              className={`relative overflow-hidden rounded-3xl border border-white/5 px-8 py-10 ${post.coverClassName}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_30%)]"></div>
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-white/70">
                  {post.coverLabel}
                </span>
                <p className="mt-5 max-w-xl text-3xl font-black leading-tight">
                  {post.coverTitle}
                </p>
              </div>
            </div>

            {post.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-3xl font-extrabold">{section.title}</h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-muted">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>

      <section className="border-t border-white/5 bg-dark py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <span className="block text-xs font-bold uppercase tracking-[0.35em] text-brand">
                More Posts
              </span>
              <h2 className="mt-4 text-4xl font-black leading-tight">
                Keep reading the latest
                <br />
                tech and AI shifts
              </h2>
            </div>
            <a
              href={pageRoutes.blog}
              className="hidden text-sm font-bold uppercase tracking-[0.24em] text-white transition-colors hover:text-brand md:inline-flex"
            >
              View all posts
            </a>
          </div>
          <Blog posts={relatedPosts} showSectionHeader={false} />
          <div className="mt-10 md:hidden">
            <a
              href={pageRoutes.blog}
              className="inline-flex text-sm font-bold uppercase tracking-[0.24em] text-white transition-colors hover:text-brand"
            >
              View all posts
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
