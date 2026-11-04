type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="pt-36 pb-18 bg-dark hero-pattern border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-brand font-bold uppercase tracking-[0.35em] text-xs mb-6 block">
          {eyebrow}
        </span>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-10 items-end">
          <h1 className="text-5xl md:text-6xl font-black leading-[0.95] max-w-4xl">
            {title}
          </h1>
          <p className="text-muted leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
