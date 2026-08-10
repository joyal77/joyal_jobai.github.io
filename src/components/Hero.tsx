import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const elementsRef = useRef<HTMLDivElement | null>(null);

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Dynamic Role Cycler
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % portfolio.roles.length);
    }, 2500);

    return () => clearInterval(roleInterval);
  }, []);

  // GSAP Entrance
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      if (nameRef.current) {
        tl.fromTo(
          nameRef.current,
          { opacity: 0, y: isMobile ? 15 : 30 },
          { opacity: 1, y: 0, duration: 0.5 }
        );
      }

      if (elementsRef.current) {
        const children = elementsRef.current.children;
        tl.fromTo(
          children,
          { opacity: 0, y: isMobile ? 10 : 15 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.06 },
          '-=0.3'
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[85vh] sm:min-h-screen w-full flex flex-col items-center justify-center pt-20 sm:pt-32 pb-12 sm:pb-24 px-4 overflow-hidden z-10"
    >
      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center w-full">
        {/* Minimal Category Tag */}
        <div className="glass-shimmer inline-flex items-center gap-2 px-3.5 sm:px-6 py-1.5 sm:py-3 rounded-full border border-white/20 bg-surface/80 backdrop-blur-2xl text-[11px] sm:text-base font-body uppercase tracking-[0.2em] text-[#89AACC] mb-4 sm:mb-8 shadow-xl">
          <Sparkles className="w-3 sm:w-5 h-3 sm:h-5 text-[#89AACC]" />
          <span className="font-semibold">{portfolio.title.toUpperCase()}</span>
        </div>

        {/* Main Name Heading — Reduced mobile text (-5 steps) */}
        <h1
          ref={nameRef}
          className="name-reveal text-4xl sm:text-7xl md:text-[9.5rem] lg:text-[12rem] font-display italic text-text-primary leading-[0.9] tracking-tight mb-4 sm:mb-8 select-none drop-shadow-2xl break-words w-full"
        >
          {portfolio.name}
        </h1>

        {/* Staggered Elements */}
        <div ref={elementsRef} className="flex flex-col items-center w-full">
          {/* Role Cycler */}
          <div className="h-8 sm:h-14 flex items-center justify-center overflow-hidden mb-4 sm:mb-8 w-full">
            <span
              key={portfolio.roles[currentRoleIndex]}
              className="text-base sm:text-2xl md:text-4xl lg:text-5xl font-body font-medium text-[#89AACC] tracking-wide animate-role-fade-in drop-shadow text-center truncate px-2"
            >
              {portfolio.roles[currentRoleIndex]}
            </span>
          </div>

          {/* Concise Subheading */}
          <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl text-text-primary/90 max-w-md sm:max-w-3xl leading-relaxed mb-6 sm:mb-12 font-body font-normal drop-shadow px-2">
            Building intelligent AI models & enterprise web applications.
          </p>

          {/* Compact CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none px-4">
            <button
              onClick={() => scrollTo('projects')}
              className="glass-shimmer touch-target group relative flex items-center justify-center gap-2 bg-text-primary text-bg font-body font-bold text-sm sm:text-base lg:text-xl px-6 sm:px-9 py-3 sm:py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl shadow-white/20 w-full sm:w-auto"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="glass-shimmer touch-target group relative flex items-center justify-center gap-2 border border-white/25 bg-surface/85 backdrop-blur-2xl text-text-primary font-body font-bold text-sm sm:text-base lg:text-xl px-6 sm:px-9 py-3 sm:py-4 rounded-full hover:border-[#4E85BF] hover:scale-105 transition-all duration-300 shadow-xl w-full sm:w-auto"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted group-hover:text-text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center space-y-2 pointer-events-none">
        <span className="text-xs text-text-primary/80 uppercase tracking-[0.2em] font-body font-semibold">
          SCROLL
        </span>
        <div className="relative w-0.5 h-8 bg-stroke overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};
