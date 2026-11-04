export default function Stats() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-start gap-4 mb-6">
            <span className="text-8xl font-black text-brand leading-none">5</span>
            <div>
              <h2 className="text-3xl font-bold leading-tight">
                Years Of<br />Experience
              </h2>
            </div>
          </div>
          <p className="text-muted leading-relaxed max-w-md">
            Over the last five years, I have built AI workflows, web experiences, and digital solutions that help brands move faster and grow with confidence.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-card p-8 rounded-xl border border-white/5 text-center hover:border-brand/50 transition-all group">
            <span className="text-4xl font-bold block mb-2">50+</span>
            <p className="text-muted text-sm">Projects Delivered</p>
          </div>
          <div className="bg-card p-8 rounded-xl border border-white/5 text-center hover:border-brand/50 transition-all group">
            <span className="text-4xl font-bold block mb-2">15+</span>
            <p className="text-muted text-sm">AI Systems Built</p>
          </div>
          <div className="bg-card p-8 rounded-xl border border-white/5 text-center hover:border-brand/50 transition-all group">
            <span className="text-4xl font-bold block mb-2">25+</span>
            <p className="text-muted text-sm">Happy Clients</p>
          </div>
          <div className="bg-card p-8 rounded-xl border border-white/5 text-center hover:border-brand/50 transition-all group">
            <span className="text-4xl font-bold block mb-2">4.9/5</span>
            <p className="text-muted text-sm">Client Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
