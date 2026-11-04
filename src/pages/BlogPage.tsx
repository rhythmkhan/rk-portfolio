import Blog from "../components/Blog";
import Seo from "../components/Seo";
import { pageRoutes } from "../lib/routes";
import PageHero from "./PageHero";

export default function BlogPage() {
  return (
    <>
      <Seo
        title="Tech and AI Blog"
        description="Read recent blog posts by Seratul Alim Khan covering AI trends, major tech announcements, and practical product insights."
        path={pageRoutes.blog}
      />
      <PageHero
        eyebrow="Blog"
        title="Latest tech news and AI trends I'm tracking right now."
        description="A running collection of short blog posts based on recent official announcements in AI, cloud, mobile ecosystems, and product infrastructure."
      />
      <Blog showSectionHeader={false} />
    </>
  );
}
