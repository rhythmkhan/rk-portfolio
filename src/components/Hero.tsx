import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { pageRoutes } from "../lib/routes";

const roles = [
  "AI Systems Architect.",
  "LLM Solutions Engineer.",
  "Full-Stack Engineer.",
  "Software Architect.",
  "Chatbot Systems Engineer.",
  "Automation Architect.",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const isComplete = displayText === currentRole;
    const isEmpty = displayText.length === 0;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          if (isComplete) {
            setIsDeleting(true);
            return;
          }

          setDisplayText(currentRole.slice(0, displayText.length + 1));
          return;
        }

        if (isEmpty) {
          setIsDeleting(false);
          setRoleIndex((current) => (current + 1) % roles.length);
          return;
        }

        setDisplayText(currentRole.slice(0, displayText.length - 1));
      },
      isDeleting ? 55 : isComplete ? 1400 : 110,
    );

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const [firstWord] = roles[roleIndex].split(" ");
  const firstLineText =
    displayText.length <= firstWord.length ? displayText : firstWord;
  const secondLineText =
    displayText.length > firstWord.length
      ? displayText.slice(firstWord.length).trimStart()
      : "";
  const showCursorOnFirstLine = displayText.length < firstWord.length;

  return (
    <section className="relative flex min-h-screen items-center pt-24 pb-10 hero-pattern md:pt-20 md:pb-0" data-purpose="hero">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left Content */}
        <div className="z-10 pt-4 md:pt-10">
          <span className="text-brand font-bold tracking-[0.2em] text-sm block mb-4">HELLO</span>
          <h1 className="mb-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:mb-6 md:text-7xl md:leading-[1.1]">
            I'm Seratul Alim Khan<br />
            <span className="block min-h-[2.4em] text-brand leading-[0.95] md:min-h-[2.1em]">
              <span className="block min-h-[1.05em] md:min-h-[0.95em]">
                {firstLineText}
                {showCursorOnFirstLine ? (
                  <span className="type-cursor ml-1 inline-block h-[0.9em] w-[0.08em] bg-current align-baseline"></span>
                ) : null}
              </span>
              <span className="block min-h-[1.05em] md:min-h-[0.95em]">
                {secondLineText}
                {!showCursorOnFirstLine ? (
                  <span className="type-cursor ml-1 inline-block h-[0.9em] w-[0.08em] bg-current align-baseline"></span>
                ) : null}
              </span>
            </span>
          </h1>
          <p className="text-muted max-w-lg mb-8 text-base leading-relaxed sm:text-lg md:mb-10">
            I build intelligent digital experiences that blend creativity, strategy, and modern technology to turn ambitious ideas into meaningful results.
          </p>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={pageRoutes.contact}
              className="inline-flex min-w-0 flex-1 items-center justify-center gap-3 rounded-full bg-brand px-5 py-4 font-bold text-white transition-transform hover:scale-105 sm:flex-none sm:px-8"
            >
              Contact
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </a>
            <a
              href="/seratul-alim-khan-cv.pdf"
              download
              className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap py-2 font-bold text-brand transition-colors hover:text-white sm:flex-none sm:justify-start sm:py-0"
            >
              Download CV
              <Download className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative order-first flex min-h-[21rem] justify-center overflow-visible sm:min-h-[26rem] md:order-none md:min-h-[40rem] lg:justify-end">
          <div className="absolute inset-y-[6%] left-[2%] w-[47%] bg-[linear-gradient(180deg,rgba(114,22,31,0.42),rgba(114,22,31,0.06))] [clip-path:polygon(24%_0,78%_0,66%_100%,46%_100%)] opacity-95"></div>
          <div className="absolute inset-y-[6%] right-[-4%] w-[58%] bg-[linear-gradient(180deg,rgba(114,22,31,0.42),rgba(114,22,31,0.06))] [clip-path:polygon(18%_0,80%_0,60%_100%,24%_100%)] opacity-95 [transform:scaleX(-1)]"></div>
          <div className="absolute inset-y-[12%] left-[12%] w-[34%] bg-[linear-gradient(180deg,rgba(187,124,74,0.3),rgba(187,124,74,0.03))] [clip-path:polygon(24%_0,76%_0,64%_100%,44%_100%)] opacity-85"></div>
          <div className="absolute inset-y-[12%] right-[6%] w-[44%] bg-[linear-gradient(180deg,rgba(187,124,74,0.3),rgba(187,124,74,0.03))] [clip-path:polygon(20%_0,80%_0,68%_100%,34%_100%)] opacity-85 [transform:scaleX(-1)]"></div>
          <div className="absolute left-1/2 top-[16%] h-[56%] w-[60%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,196,145,0.14)_0,rgba(255,196,145,0.05)_40%,transparent_74%)] blur-3xl"></div>
          <div className="absolute left-1/2 top-[12%] h-[64%] w-[68%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.04)_0,transparent_65%)] blur-3xl"></div>

          {/* White title over lighting */}
          <div className="absolute top-[24%] left-1/2 z-10 -translate-x-1/2 pointer-events-none select-none">
            <span className="text-[clamp(1.8rem,7.4vw,4.25rem)] font-black text-white uppercase leading-none whitespace-nowrap tracking-[0.03em] opacity-90 sm:opacity-95">
              WEB DEVELOPER
            </span>
          </div>
          <img
            src="/seratul.png"
            alt="Seratul Alim Khan"
            className="relative z-20 w-full max-w-[18rem] object-contain drop-shadow-[0_30px_70px_rgba(0,0,0,0.45)] brightness-[1.03] contrast-[1.04] sm:max-w-[24rem] lg:max-w-[34rem]"
          />
          <div className="absolute bottom-[8%] left-1/2 z-30 -translate-x-1/2 pointer-events-none select-none sm:bottom-[4%]">
            <span className="text-[clamp(2.6rem,10vw,6rem)] font-black text-outline-strong uppercase leading-none whitespace-nowrap opacity-70 sm:opacity-85">
              AI SPECIALIST
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
