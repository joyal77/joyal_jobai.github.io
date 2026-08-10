import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(
  setupTimeline: (gsapContext: gsap.Context) => void,
  dependencies: any[] = []
) {
  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context((context) => {
      setupTimeline(context);
    });

    return () => {
      ctx.revert();
    };
  }, dependencies);
}
