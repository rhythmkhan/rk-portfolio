import Brands from "../components/Brands";
import Education from "../components/Education";
import Seo from "../components/Seo";
import Skills from "../components/Skills";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import { pageRoutes } from "../lib/routes";
import PageHero from "./PageHero";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Seratul Alim Khan"
        description="Learn about Seratul Alim Khan's background in AI systems, software architecture, automation, and full-stack product development."
        path={pageRoutes.about}
      />
      <PageHero
        eyebrow="About Me"
        title="AI builder, software architect, and product-focused developer."
        description="This page covers my technical background, education, workflow, and the practical skills I use to ship automation, AI systems, and modern web experiences."
      />
      <Stats />
      <Skills />
      <Education />
      <Brands />
      <Testimonials />
    </>
  );
}
