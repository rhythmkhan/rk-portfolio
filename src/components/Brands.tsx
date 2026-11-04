const stackItems = [
  {
    name: "React",
    iconUrl: "https://cdn.simpleicons.org/react/61DAFB",
    accent: "from-cyan-400/30 to-cyan-400/5",
  },
  {
    name: "TypeScript",
    iconUrl: "https://cdn.simpleicons.org/typescript/3178C6",
    accent: "from-blue-500/30 to-blue-500/5",
  },
  {
    name: "Tailwind",
    iconUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    accent: "from-sky-400/30 to-sky-400/5",
  },
  {
    name: "OpenAI",
    iconUrl: "/openai-symbol.svg",
    accent: "from-emerald-400/30 to-emerald-400/5",
    iconClassName: "invert brightness-0 invert-100",
  },
  {
    name: "n8n",
    iconUrl: "https://cdn.simpleicons.org/n8n/EA4B71",
    accent: "from-orange-400/30 to-orange-400/5",
  },
  {
    name: "Supabase",
    iconUrl: "https://cdn.simpleicons.org/supabase/3ECF8E",
    accent: "from-green-500/30 to-green-500/5",
  },
  {
    name: "Firebase",
    iconUrl: "https://cdn.simpleicons.org/firebase/DD2C00",
    accent: "from-amber-400/30 to-amber-400/5",
  },
  {
    name: "Vite",
    iconUrl: "https://cdn.simpleicons.org/vite/646CFF",
    accent: "from-violet-400/30 to-violet-400/5",
  },
];

export default function Brands() {
  return (
    <section className="border-y border-white/5 bg-dark/50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl overflow-hidden px-5 sm:px-6">
        <div className="mb-8 text-center">
          <span className="block text-xs font-bold uppercase tracking-[0.32em] text-brand">
            Core Stack
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
          {stackItems.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-2xl border border-white/6 bg-card px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/14"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-70`}></div>
              <div className="relative flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
                  <img
                    src={item.iconUrl}
                    alt={item.name}
                    className={`h-6 w-6 object-contain ${"iconClassName" in item && item.iconClassName ? item.iconClassName : ""}`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/92">{item.name}</p>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                    Toolkit
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
