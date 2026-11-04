import { pageRoutes } from "../lib/routes";

const serviceItems = [
  {
    title: "AI Automation Systems",
    meta: "Custom workflows",
    description:
      "I build practical automation systems with AI tools, APIs, and smart workflows to reduce manual work and speed up execution.",
    cta: "Let's Talk",
    icon: (
      <svg className="w-8 h-8 text-brand group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
      </svg>
    ),
  },
  {
    title: "Modern Web Development",
    meta: "Fast, responsive builds",
    description:
      "From landing pages to complete business websites, I create clean, responsive, and performance-focused digital experiences.",
    cta: "View Services",
    icon: (
      <svg className="w-8 h-8 text-brand group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
      </svg>
    ),
  },
  {
    title: "Chatbot & AI Integration",
    meta: "Useful AI experiences",
    description:
      "I connect LLMs, chatbots, and backend logic into systems that can answer questions, guide users, and automate real tasks.",
    cta: "Start a Project",
    icon: (
      <svg className="w-8 h-8 text-brand group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
      </svg>
    ),
  },
];

export default function ServicesPromo() {
  return (
    <section className="py-20 md:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="mb-10 md:mb-12">
          <span className="text-brand font-bold text-xs uppercase mb-2 block">
            WHAT I DO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Building smart systems
            <br />
            for real-world results
          </h2>
        </div>

        <div className="space-y-4">
          {serviceItems.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col items-start gap-6 rounded-xl border border-white/5 bg-card p-6 sm:p-8 md:flex-row md:items-center md:gap-8 md:p-10 transition-all duration-300 hover:bg-brand"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/5 group-hover:bg-white/20">
                {item.icon}
              </div>
              <div className="flex-grow">
                <h3 className="mb-1 text-xl sm:text-2xl font-bold">{item.title}</h3>
                <span className="text-sm text-muted group-hover:text-white/80">{item.meta}</span>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted group-hover:text-white/80">
                {item.description}
              </p>
              <a
                href={pageRoutes.contact}
                className="inline-flex w-full justify-center rounded-md px-6 py-3 text-sm font-bold uppercase text-white transition-all duration-300 group-hover:bg-white group-hover:text-brand md:w-auto"
              >
                {item.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
