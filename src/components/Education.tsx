const educationItems = [
  {
    level: "Diploma in Engineering",
    title: "Computer Science & Technology",
    subtitle: "Tangail Polytechnic Institute, Tangail",
    period: "13 March 2023 - 2027",
    result: "Expected CGPA: 3.60+",
  },
  {
    level: "Secondary School Certificate",
    title: "Department of Computer",
    subtitle: "Jamalpur Government Technical School and College",
    period: "SSC Level",
    result: "GPA: 4.93/5.00",
  },
  {
    level: "Junior School Certificate",
    title: "Bangabandhu Ideal School & College",
    subtitle: "Jamalpur",
    period: "",
    result: "GPA: 4.29/5.00",
  },
  {
    level: "Primary Education Completion",
    title: "Monipur High School & College Branch 3",
    subtitle: "",
    period: "1 January 2012 - 1 July 2017",
    result: "GPA: 5.00/5.00",
  },
];

const workItems = [
  {
    role: "Founder & CEO",
    company: "The N8N BD",
    period: "1 October 2025 - Present",
    summary:
      "Leading an automation-focused initiative around n8n workflows, AI systems, and digital solutions for modern businesses.",
  },
  {
    role: "Editorial Director",
    company: "TPI Computer Club",
    period: "24 September 2025 - Present · Tangail",
    summary:
      "Managing content direction, technology activities, and community-driven initiatives for the club.",
  },
];

export default function Education() {
  return (
    <section className="py-20 md:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-14 md:mb-16">
          <span className="text-brand font-bold uppercase tracking-widest text-xs mb-4 block">
            EDUCATION & EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5 md:mb-6">
            Academic Growth<br />and Real Work
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            My journey combines technical education, leadership, and hands-on work in automation, AI systems, and digital product building.
          </p>
        </div>

        <div className="mb-16 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 flex items-center gap-4">
            Education <span className="h-px bg-white/20 flex-grow max-w-[100px]"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationItems.map((item) => (
              <div
                key={`${item.title}-${item.period}`}
                className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#1a1a1a] px-5 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]"
              >
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.24em] sm:tracking-[0.32em] text-brand">
                    {item.level}
                  </span>
                  <h4 className="mt-3 md:mt-4 text-[1.65rem] sm:text-[1.8rem] md:min-h-[4.25rem] md:text-[1.95rem] font-extrabold leading-tight text-white">
                    {item.title}
                  </h4>
                </div>
                <div className="mt-6 md:mt-8 space-y-2">
                  {item.subtitle ? (
                    <p className="text-base sm:text-lg font-medium text-[#9aa0a8]">{item.subtitle}</p>
                  ) : null}
                  {item.period ? (
                    <p className="text-sm leading-relaxed text-muted">{item.period}</p>
                  ) : null}
                  {"result" in item && item.result ? (
                    <p className="text-sm font-semibold leading-relaxed text-white/80">
                      {item.result}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 flex items-center gap-4">
            Experiences <span className="h-px bg-white/20 flex-grow max-w-[100px]"></span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              {workItems.map((item) => (
                <div key={`${item.role}-${item.company}`}>
                  <span className="text-brand text-xs font-bold block mb-2">EXPERIENCE</span>
                  <h4 className="text-xl sm:text-2xl font-bold mb-1">
                    {item.role} at {item.company}
                  </h4>
                  <p className="text-muted text-sm font-medium mb-4">{item.period}</p>
                  <p className="text-muted text-sm leading-relaxed">{item.summary}</p>
                </div>
              ))}
            </div>

            <div className="relative mx-auto grid min-h-[22rem] w-full max-w-[32rem] overflow-hidden rounded-3xl border border-white/5 bg-card grid-cols-[1fr_1fr] md:aspect-square md:grid-cols-[0.95fr_1.05fr]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,0,102,0.12),rgba(255,0,102,0))]"></div>
              <div className="absolute inset-y-0 right-0 w-[50%] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_45%)] md:w-[52%] md:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_45%)]"></div>
              <div className="absolute inset-y-0 right-0 w-[50%] bg-[linear-gradient(90deg,rgba(10,10,10,0),rgba(10,10,10,0.05)_18%,rgba(10,10,10,0)_100%)] md:w-[52%] md:bg-[linear-gradient(90deg,rgba(10,10,10,0),rgba(10,10,10,0.08)_18%,rgba(10,10,10,0)_100%)]"></div>
              <div className="relative z-10 flex flex-col justify-center p-4 sm:p-6 md:p-7">
                <span className="mb-3 block text-xs font-bold uppercase tracking-[0.24em] text-brand">
                  Work Mindset
                </span>
                <h4 className="text-[1.45rem] leading-[1.02] sm:text-[2rem] font-extrabold md:leading-[1.05]">
                  Passion for
                  <br />
                  Smart Systems
                  <br />
                  and Clean Code
                </h4>
                <p className="mt-3 max-w-[12rem] text-[13px] leading-relaxed text-muted sm:max-w-[16rem] sm:text-sm md:max-w-[13rem]">
                  I love turning ideas into useful products through code, automation, and practical problem-solving.
                </p>
                <p className="mt-3 max-w-[11rem] text-[13px] font-semibold leading-relaxed text-white/85 sm:mt-4 sm:max-w-[16rem] sm:text-sm md:max-w-[12rem]">
                  Learning fast. Building better.
                </p>
              </div>
              <div className="relative min-h-[22rem] md:min-h-full">
                <img
                  src="/seratul.png"
                  alt="Seratul Alim Khan"
                  className="absolute bottom-0 right-[-1rem] h-[84%] max-w-none object-contain object-bottom sm:right-[-0.25rem] sm:h-[82%] md:left-auto md:right-[-1.5rem] md:h-[92%] md:translate-x-0 lg:right-[-2rem] lg:h-[96%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
