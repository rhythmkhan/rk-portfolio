import LatestService from "../components/LatestService";
import Seo from "../components/Seo";
import Services from "../components/Services";
import ServicesPromo from "../components/ServicesPromo";
import { pageRoutes } from "../lib/routes";
import PageHero from "./PageHero";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="AI Automation, Web Development, and Chatbot Services"
        description="Explore services by Seratul Alim Khan including AI automation workflows, chatbot systems, modern web development, and custom digital product builds."
        path={pageRoutes.service}
      />
      <PageHero
        eyebrow="Services"
        title="AI automation, web development, and custom digital systems."
        description="These services focus on practical delivery: smart workflows, modern websites, chatbot integration, and product systems built for real business use."
      />
      <Services />
      <LatestService />
      <ServicesPromo />
    </>
  );
}
