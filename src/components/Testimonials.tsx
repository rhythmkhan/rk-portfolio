import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "He was easy to work with, communicated clearly, and delivered a clean website that matched exactly what I had in mind. The final result felt fast, modern, and professional.",
    name: "Mahin Rahman",
    role: "Business Owner",
    image: "https://picsum.photos/seed/test1/100/100",
  },
  {
    quote:
      "What stood out most was his problem-solving mindset. He did not just build the interface, he thought through the user flow and helped make the whole experience better.",
    name: "Sadia Islam",
    role: "Startup Founder",
    image: "https://picsum.photos/seed/test2/100/100",
  },
  {
    quote:
      "From design to development, the work felt thoughtful and well executed. He was responsive, detail-focused, and serious about delivering something that actually works.",
    name: "Tanvir Hasan",
    role: "Project Coordinator",
    image: "https://picsum.photos/seed/test3/100/100",
  },
];

function QuoteMark() {
  return (
    <svg className="w-12 h-12 text-brand opacity-50" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.5693 13 5.017 13H3.017V21H5.017Z"></path>
    </svg>
  );
}

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(() =>
    window.matchMedia("(min-width: 768px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(mediaQuery.matches);

    sync();
    mediaQuery.addEventListener("change", sync);

    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  const visibleTestimonials = isDesktop
    ? [
        testimonials[startIndex],
        testimonials[(startIndex + 1) % testimonials.length],
      ]
    : [testimonials[startIndex]];

  const handlePrevious = () => {
    setStartIndex((current) =>
      (current - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleNext = () => {
    setStartIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="text-xs sm:text-sm uppercase tracking-[0.28em] sm:tracking-[0.35em] text-muted">
            Testimonials
          </div>
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={handlePrevious}
              className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={handleNext}
              className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-all"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 hidden lg:block">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={handlePrevious}
              className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 hidden lg:block">
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={handleNext}
              className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-all"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${startIndex}-${index}`}
              className="relative min-h-[22rem] rounded-2xl border border-white/5 bg-card p-6 sm:p-8 md:min-h-[30rem] md:p-12"
            >
              <h3 className="mb-6 text-xl sm:text-2xl font-bold leading-snug md:mb-8">
                {testimonial.quote}
              </h3>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full grayscale"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-muted text-xs">{testimonial.role}</p>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12">
                <QuoteMark />
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
