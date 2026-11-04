import { pageRoutes } from "../lib/routes";

const portfolioItems = [
  {
    title: "AI Workflow Dashboard",
    category: "Automation System",
    accent: "from-[#ff0066]/30 via-[#ff0066]/10 to-transparent",
    metrics: [
      { label: "Tasks", value: "128" },
      { label: "Saved", value: "19h" },
      { label: "Agents", value: "04" },
    ],
  },
  {
    title: "Personal Brand Portfolio",
    category: "Responsive Web Experience",
    accent: "from-[#fb923c]/30 via-[#fb923c]/10 to-transparent",
    metrics: [
      { label: "Pages", value: "07" },
      { label: "SEO", value: "A+" },
      { label: "Speed", value: "95" },
    ],
  },
  {
    title: "Chatbot Knowledge Assistant",
    category: "LLM Integration",
    accent: "from-[#22c55e]/30 via-[#22c55e]/10 to-transparent",
    metrics: [
      { label: "Replies", value: "1.2s" },
      { label: "Sources", value: "24" },
      { label: "Accuracy", value: "92%" },
    ],
  },
  {
    title: "Business Landing Page System",
    category: "Conversion-Focused Build",
    accent: "from-[#38bdf8]/30 via-[#38bdf8]/10 to-transparent",
    metrics: [
      { label: "CTR", value: "+38%" },
      { label: "Leads", value: "214" },
      { label: "Launch", value: "3d" },
    ],
  },
];

function DemoVisual({
  accent,
  metrics,
}: {
  accent: string;
  metrics: Array<{ label: string; value: string }>;
}) {
  return (
    <div className="aspect-[4/3] overflow-hidden bg-[linear-gradient(180deg,#191919_0%,#101010_100%)]">
      <div className={`h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_26%)]`}>
        <div className="flex h-full flex-col p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-white/20"></span>
              <span className="h-3 w-3 rounded-full bg-white/10"></span>
              <span className="h-3 w-3 rounded-full bg-white/10"></span>
            </div>
            <span className="rounded-full border border-white/10 px-3 py-1 text-[9px] sm:text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.3em] text-white/55">
              Demo
            </span>
          </div>

          <div className={`mt-4 sm:mt-6 rounded-2xl bg-gradient-to-br ${accent} p-3 sm:p-4`}>
            <div className="rounded-[1.1rem] border border-white/10 bg-black/35 p-3 sm:p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-3 w-20 rounded-full bg-white/12"></div>
                  <div className="mt-3 h-6 sm:h-7 w-24 sm:w-28 rounded-full bg-white/85"></div>
                </div>
                <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-2xl border border-white/10 bg-white/8"></div>
              </div>
              <div className="mt-4 sm:mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/8 bg-white/[0.04] px-2 py-3 sm:px-3 sm:py-4"
                  >
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.26em] text-white/45">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-base sm:text-lg font-black text-white">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-5 grid grid-cols-[1.1fr_0.9fr] gap-3 sm:gap-4">
            <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-3 sm:p-4">
              <div className="flex items-end gap-2 h-16 sm:h-24">
                <span className="w-full rounded-t-xl bg-white/10" style={{ height: "40%" }}></span>
                <span className="w-full rounded-t-xl bg-white/15" style={{ height: "78%" }}></span>
                <span className="w-full rounded-t-xl bg-brand/75" style={{ height: "56%" }}></span>
                <span className="w-full rounded-t-xl bg-white/20" style={{ height: "88%" }}></span>
                <span className="w-full rounded-t-xl bg-white/12" style={{ height: "62%" }}></span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-3 sm:p-4">
                <div className="h-3 w-16 rounded-full bg-white/12"></div>
                <div className="mt-4 h-2 w-full rounded-full bg-white/8"></div>
                <div className="mt-2 h-2 w-3/4 rounded-full bg-brand/70"></div>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-3 sm:p-4">
                <div className="h-3 w-20 rounded-full bg-white/12"></div>
                <div className="mt-3 sm:mt-4 flex gap-2">
                  <span className="h-7 w-7 sm:h-8 sm:w-8 rounded-xl bg-white/10"></span>
                  <span className="h-7 w-7 sm:h-8 sm:w-8 rounded-xl bg-white/10"></span>
                  <span className="h-7 w-7 sm:h-8 sm:w-8 rounded-xl bg-white/10"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section className="py-20 md:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-14 md:mb-16">
          <span className="text-brand font-bold uppercase tracking-widest text-xs mb-4 block">
            LATEST PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5 md:mb-6">
            Recent work across
            <br />
            web, product, and automation
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A selection of concept-driven demos that represent the kind of
            systems, interfaces, and product thinking I enjoy building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-card"
            >
              <DemoVisual accent={item.accent} metrics={item.metrics} />
              <div className="flex items-end justify-between gap-4 p-5 sm:p-6 md:p-8">
                <div>
                  <h4 className="mb-1 text-xl sm:text-2xl font-bold">{item.title}</h4>
                  <p className="text-sm text-muted">{item.category}</p>
                </div>
                <a
                  href={pageRoutes.contact}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all group-hover:border-brand group-hover:bg-brand"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
