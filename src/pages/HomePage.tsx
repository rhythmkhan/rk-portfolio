import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Skills from "../components/Skills";
import LatestService from "../components/LatestService";
import Education from "../components/Education";
import Brands from "../components/Brands";
import Portfolio from "../components/Portfolio";
import ServicesPromo from "../components/ServicesPromo";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import Seo from "../components/Seo";
import { pageRoutes } from "../lib/routes";
import { siteConfig, toAbsoluteUrl } from "../lib/site";

export default function HomePage() {
  return (
    <>
      <Seo
        title="AI Systems Architect, LLM Engineer, and Full-Stack Developer"
        description="Seratul Alim Khan builds AI automation systems, chatbots, modern websites, and full-stack digital products from Tangail, Bangladesh."
        path={pageRoutes.home}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: siteConfig.personName,
            url: toAbsoluteUrl(pageRoutes.home),
            image: toAbsoluteUrl(siteConfig.defaultImage),
            jobTitle: "AI Systems Architect",
            email: siteConfig.email,
            telephone: siteConfig.phone,
            address: {
              "@type": "PostalAddress",
              addressLocality: siteConfig.addressLocality,
              addressCountry: siteConfig.addressCountry,
            },
            sameAs: siteConfig.sameAs,
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteConfig.siteName,
            url: toAbsoluteUrl(pageRoutes.home),
          },
        ]}
      />
      <Hero />
      <Services />
      <Stats />
      <Skills />
      <LatestService />
      <Education />
      <Brands />
      <Portfolio />
      <ServicesPromo />
      <Testimonials />
      <Contact />
      <Blog />
    </>
  );
}
