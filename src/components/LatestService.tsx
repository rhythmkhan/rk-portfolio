export default function LatestService() {
  return (
    <section className="py-20 md:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-14 md:mb-16">
          <span className="text-brand font-bold uppercase tracking-widest text-xs mb-4 block">
            HOW I WORK
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5 md:mb-6">
            Turning ideas into
            <br />
            working digital systems
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            My process focuses on solving real problems with clean execution, strong technical foundations, and product decisions that make sense in production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-7 md:space-y-8">
            <div className="flex gap-6 items-start group">
              <span className="text-brand font-bold text-xl">01.</span>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 md:mb-3 group-hover:text-brand transition-colors">
                  Strategy before code
                </h3>
                <p className="text-muted leading-relaxed">
                  Every project starts with understanding the goal, the user flow, and the business problem that needs to be solved.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start group">
              <span className="text-brand font-bold text-xl">02.</span>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 md:mb-3 group-hover:text-brand transition-colors">
                  Build for real use
                </h3>
                <p className="text-muted leading-relaxed">
                  I focus on fast, maintainable systems that are practical to launch, improve, and scale over time.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start group">
              <span className="text-brand font-bold text-xl">03.</span>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 md:mb-3 group-hover:text-brand transition-colors">
                  Improve through iteration
                </h3>
                <p className="text-muted leading-relaxed">
                  Good products are refined through testing, feedback, and small improvements that make the final experience stronger.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-none">
            <div className="flex w-full aspect-square items-center justify-center rounded-full border-2 border-dashed border-white/10 p-5 sm:p-8 md:p-12">
              <div className="relative flex h-full w-full items-center justify-center rounded-full overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%),linear-gradient(180deg,#181818_0%,#0f0f0f_100%)]">
                <div className="absolute left-[18%] top-[18%] w-[38%] rounded-2xl sm:rounded-3xl border border-white/8 bg-white/[0.04] p-3 sm:p-4 backdrop-blur-sm">
                  <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand">
                    Strategy
                  </span>
                  <div className="mt-4 h-3 w-3/4 rounded-full bg-white/12"></div>
                  <div className="mt-2 h-3 w-1/2 rounded-full bg-white/8"></div>
                  <div className="mt-3 sm:mt-4 h-14 sm:h-20 rounded-2xl bg-[linear-gradient(180deg,rgba(255,0,102,0.24),rgba(255,0,102,0.05))]"></div>
                </div>

                <div className="absolute right-[16%] top-[25%] w-[30%] rounded-2xl sm:rounded-3xl border border-white/8 bg-white/[0.04] p-3 sm:p-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand">
                    Build
                  </span>
                  <div className="mt-3 sm:mt-4 flex gap-2">
                    <span className="h-8 w-8 sm:h-10 sm:w-10 rounded-2xl bg-white/10"></span>
                    <span className="h-8 w-8 sm:h-10 sm:w-10 rounded-2xl bg-white/10"></span>
                  </div>
                  <div className="mt-3 h-2 w-full rounded-full bg-white/8"></div>
                  <div className="mt-2 h-2 w-2/3 rounded-full bg-brand/70"></div>
                </div>

                <div className="absolute bottom-[18%] left-1/2 w-[46%] -translate-x-1/2 rounded-[1.5rem] sm:rounded-[2rem] border border-white/8 bg-white/[0.04] p-3 sm:p-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand">
                    Iterate
                  </span>
                  <div className="mt-3 sm:mt-4 flex h-16 sm:h-24 items-end gap-2">
                    <span className="w-full rounded-t-xl bg-white/10" style={{ height: "34%" }}></span>
                    <span className="w-full rounded-t-xl bg-white/12" style={{ height: "48%" }}></span>
                    <span className="w-full rounded-t-xl bg-brand/75" style={{ height: "72%" }}></span>
                    <span className="w-full rounded-t-xl bg-white/18" style={{ height: "88%" }}></span>
                  </div>
                </div>

                <div className="absolute left-[43%] top-[34%] h-10 w-10 sm:h-14 sm:w-14 rounded-full border border-white/10 bg-brand/85 shadow-[0_0_40px_rgba(255,0,102,0.32)]"></div>
                <div className="absolute left-[40%] top-[38%] h-px w-[20%] rotate-[24deg] bg-white/16"></div>
                <div className="absolute left-[48%] top-[48%] h-px w-[14%] -rotate-[52deg] bg-white/16"></div>
                <div className="absolute -right-3 top-1/2 h-16 w-16 sm:h-24 sm:w-24 -translate-y-1/2 rounded-full bg-brand"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
