import { Check } from "lucide-react";
import Seo from "../components/Seo";
import { pageRoutes } from "../lib/routes";
import PageHero from "./PageHero";

const plans = [
  {
    name: "Starter",
    price: "$149",
    summary: "Clean one-page presence for individuals who need something fast and credible.",
    features: [
      "Single landing page",
      "Responsive layout",
      "Contact section setup",
      "Delivery in 3 days",
    ],
  },
  {
    name: "Professional",
    price: "$349",
    summary: "Best fit for freelancers and consultants who need a sharper portfolio.",
    features: [
      "Multi-section custom portfolio",
      "Motion and hover polish",
      "Blog and testimonial blocks",
      "Revision support",
    ],
  },
  {
    name: "Premium",
    price: "$699",
    summary: "For brands that want a more tailored presentation and stronger detail.",
    features: [
      "Custom page set",
      "Priority revisions",
      "Premium interactions",
      "Deployment support",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <Seo
        title="Pricing for Portfolio, Website, and AI Projects"
        description="View pricing packages from Seratul Alim Khan for landing pages, portfolio websites, and higher-end custom digital builds."
        path={pageRoutes.pricing}
      />
      <PageHero
        eyebrow="Pricing"
        title="Flexible packages for personal brands, portfolios, and polished launches."
        description="Pricing is structured around speed, complexity, and presentation depth. Choose the package that matches the level of finish you need."
      />
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <article
                key={plan.name}
                className={`rounded-3xl border p-10 relative ${
                  index === 1
                    ? "bg-brand text-white border-brand"
                    : "bg-card border-white/5"
                }`}
              >
                {index === 1 ? (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white text-brand text-xs font-bold tracking-[0.3em] px-5 py-2 rounded-full shadow-lg">
                    POPULAR
                  </div>
                ) : null}
                <div className="mb-8">
                  <span
                    className={`text-xs uppercase tracking-[0.35em] block mb-4 ${
                      index === 1 ? "text-white/70" : "text-brand"
                    }`}
                  >
                    {plan.name}
                  </span>
                  <div className="text-5xl font-black mb-4">{plan.price}</div>
                  <p className={index === 1 ? "text-white/80" : "text-muted"}>
                    {plan.summary}
                  </p>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          index === 1 ? "bg-white/15" : "bg-white/5"
                        }`}
                      >
                        <Check className="w-4 h-4" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={pageRoutes.contact}
                  className={`inline-flex items-center justify-center w-full rounded-full py-4 font-bold transition-all ${
                    index === 1
                      ? "bg-white text-brand hover:bg-white/90"
                      : "bg-brand text-white hover:opacity-90"
                  }`}
                >
                  Get Started
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
