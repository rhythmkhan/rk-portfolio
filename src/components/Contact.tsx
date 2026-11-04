export default function Contact() {
  return (
    <section className="py-20 md:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="bg-card p-6 sm:p-8 md:p-20 rounded-3xl border border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
          <div>
            <span className="text-brand font-bold uppercase text-xs mb-4 block">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 md:mb-8">
              Build something useful, fast, and modern
            </h2>
            <p className="text-muted leading-relaxed max-w-sm">
              Share your idea, business goal, or product challenge. I work on AI automation, chatbot systems, and web experiences built to solve real problems.
            </p>
          </div>
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-[#1C1C1C] border-none rounded-lg p-4 focus:ring-1 focus:ring-brand text-white"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="bg-[#1C1C1C] border-none rounded-lg p-4 focus:ring-1 focus:ring-brand text-white"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-[#1C1C1C] border-none rounded-lg p-4 focus:ring-1 focus:ring-brand text-white"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="bg-[#1C1C1C] border-none rounded-lg p-4 focus:ring-1 focus:ring-brand text-white"
                />
              </div>
              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full bg-[#1C1C1C] border-none rounded-lg p-4 focus:ring-1 focus:ring-brand text-white"
              ></textarea>
              <button className="flex w-full items-center justify-center gap-2 rounded-full bg-brand py-4 sm:py-5 font-bold text-white transition-all hover:opacity-90">
                Appointment Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
