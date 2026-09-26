import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

/**
 * Creates the one Lenis instance for the whole app and wires it into
 * GSAP's ticker so ScrollTrigger and Lenis agree on scroll position.
 * This is the only smooth scroll system in the app; nothing else
 * should call window.scrollTo or run a competing rAF scroll loop.
 */
export function useLenis() {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      // Respect the user's preference: fall back to native scrolling
      // and skip Lenis entirely.
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);
}
