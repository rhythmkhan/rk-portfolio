export default function Services() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-card p-10 rounded-xl border border-white/5 hover:border-brand/50 transition-all group text-center">
          <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-brand transition-colors">
            <svg className="w-6 h-6 text-brand group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Web Design</h3>
          <p className="text-muted text-sm">120 Projects</p>
        </div>

        {/* Card 2 */}
        <div className="bg-card p-10 rounded-xl border border-white/5 hover:border-brand/50 transition-all group text-center">
          <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-brand transition-colors">
            <svg className="w-6 h-6 text-brand group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
          <p className="text-muted text-sm">241 Projects</p>
        </div>

        {/* Card 3 */}
        <div className="bg-card p-10 rounded-xl border border-white/5 hover:border-brand/50 transition-all group text-center">
          <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-brand transition-colors">
            <svg className="w-6 h-6 text-brand group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Graphics Design</h3>
          <p className="text-muted text-sm">242 Projects</p>
        </div>

        {/* Card 4 */}
        <div className="bg-card p-10 rounded-xl border border-white/5 hover:border-brand/50 transition-all group text-center">
          <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-brand transition-colors">
            <svg className="w-6 h-6 text-brand group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10.325 4.317a1 1 0 011.35-.936l.79.316a1 1 0 00.87 0l.79-.316a1 1 0 011.35.936v.842a1 1 0 00.513.874l.72.41a1 1 0 01.363 1.363l-.395.685a1 1 0 000 1l.395.684a1 1 0 01-.363 1.364l-.72.41a1 1 0 00-.513.874v.842a1 1 0 01-1.35.936l-.79-.316a1 1 0 00-.87 0l-.79.316a1 1 0 01-1.35-.936v-.842a1 1 0 00-.513-.874l-.72-.41a1 1 0 01-.363-1.364l.395-.684a1 1 0 000-1l-.395-.685A1 1 0 019.812 6.76l.72-.41a1 1 0 00.513-.874v-.842z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">AI Automation</h3>
          <p className="text-muted text-sm">331 Project</p>
        </div>
      </div>
    </section>
  );
}
