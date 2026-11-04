import Contact from "../components/Contact";
import Seo from "../components/Seo";
import Testimonials from "../components/Testimonials";
import { pageRoutes } from "../lib/routes";
import PageHero from "./PageHero";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Seratul Alim Khan"
        description="Get in touch with Seratul Alim Khan to discuss AI automation, chatbot development, full-stack websites, or custom digital product work."
        path={pageRoutes.contact}
      />
      <PageHero
        eyebrow="Contact"
        title="Discuss your next AI, automation, or web project."
        description="Use this page to share project requirements, ask questions, or start a direct conversation about building a smarter digital product."
      />
      <Contact />
      <Testimonials />
    </>
  );
}
