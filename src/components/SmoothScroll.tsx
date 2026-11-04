import { useEffect } from "react";
import Lenis from "lenis";

const SCROLL_TO_TOP_EVENT = "rk-scroll-top";

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: false,
      duration: 1.6,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      lerp: 0.055,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.09,
      wheelMultiplier: 0.75,
      touchMultiplier: 0.9,
    });

    let frameId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest('a[href^="#"]');
      if (!(link instanceof HTMLAnchorElement)) {
        return;
      }

      const href = link.getAttribute("href");
      if (!href || href === "#") {
        return;
      }

      if (
        href in {
          "#about-me": true,
          "#service": true,
          "#contact-me": true,
          "#blog": true,
          "#blog-post": true,
          "#pricing": true,
        }
      ) {
        return;
      }

      const section = document.querySelector<HTMLElement>(href);
      if (!section) {
        return;
      }

      event.preventDefault();
      lenis.scrollTo(section, {
        duration: 2,
        easing: (t) => 1 - Math.pow(1 - t, 4),
        offset: -96,
      });
    };

    const handleScrollToTop = () => {
      lenis.scrollTo(0, {
        duration: 2.2,
        easing: (t) => 1 - Math.pow(1 - t, 4),
      });
    };

    document.addEventListener("click", handleAnchorClick);
    window.addEventListener(SCROLL_TO_TOP_EVENT, handleScrollToTop);
    frameId = window.requestAnimationFrame(raf);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener(SCROLL_TO_TOP_EVENT, handleScrollToTop);
      lenis.destroy();
    };
  }, []);

  return null;
}

export { SCROLL_TO_TOP_EVENT };
