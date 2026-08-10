import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolio } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !containerRef.current) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
              end: 'bottom 80%',
              scrub: 0.5,
            },
          }
        );
      }

      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        const isEven = index % 2 === 0;
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: isMobile ? 15 : (isEven ? -30 : 30),
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Academic Degrees Only in Timeline
  const academicTimeline = [
    {
      id: 'mca',
      degree: portfolio.education[0].degree,
      institution: portfolio.education[0].institution,
      university: portfolio.education[0].university,
      period: portfolio.education[0].period,
      status: portfolio.education[0].status,
      details: portfolio.education[0].details,
      badge: "Master's Degree",
    },
    {
      id: 'bca',
      degree: portfolio.education[1].degree,
      institution: portfolio.education[1].institution,
      university: portfolio.education[1].university,
      period: portfolio.education[1].period,
      status: portfolio.education[1].status,
      details: portfolio.education[1].details,
      badge: "Bachelor's Degree",
    },
    {
      id: 'hss',
      degree: portfolio.education[2].degree,
      institution: portfolio.education[2].institution,
      university: portfolio.education[2].board,
      period: portfolio.education[2].period,
      status: portfolio.education[2].status,
      details: portfolio.education[2].details,
      badge: 'Higher Secondary',
    },
    {
      id: 'sslc',
      degree: portfolio.education[3].degree,
      institution: portfolio.education[3].institution,
      university: portfolio.education[3].board,
      period: portfolio.education[3].period,
      status: portfolio.education[3].status,
      details: portfolio.education[3].details,
      badge: 'Secondary School',
    },
  ];

  return (
    <section id="experience" ref={containerRef} className="py-20 sm:py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10 overflow-hidden">
      <div className="flex flex-col space-y-16 sm:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col space-y-3">
          <span className="text-xs sm:text-base uppercase tracking-[0.25em] text-[#89AACC] font-body font-bold">
            04 / ACADEMIC TIMELINE
          </span>
          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic text-text-primary">
            Education <span className="text-[#89AACC]">timeline</span>
          </h2>
        </div>

        {/* Academic Degrees Timeline Structure */}
        <div className="relative pt-2 pb-8">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-stroke -translate-x-1/2">
            <div
              ref={lineRef}
              className="w-full h-full accent-gradient origin-top"
            />
          </div>

          <div className="space-y-10 sm:space-y-16">
            {academicTimeline.map((event, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={event.id}
                  ref={(el) => {
                    if (el) itemsRef.current[idx] = el;
                  }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Node Indicator */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 sm:w-12 h-9 sm:h-12 rounded-full bg-surface border-2 border-[#89AACC] flex items-center justify-center text-[#89AACC] z-20 shadow-xl backdrop-blur-2xl">
                    <GraduationCap className="w-4 sm:w-6 h-4 sm:h-6" />
                  </div>

                  {/* Card Content Area */}
                  <div className={`ml-11 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-14' : 'md:pr-14'} w-[calc(100%-2.75rem)]`}>
                    <div className="glass-card glass-shimmer p-5 sm:p-8 rounded-3xl space-y-3 sm:space-y-5 shadow-xl">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-stroke/80 text-xs font-body text-[#89AACC] font-bold uppercase tracking-wider">
                            {event.badge}
                          </span>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-body uppercase tracking-wider font-extrabold ${
                              event.status === 'Enrolled'
                                ? 'bg-[#4E85BF]/25 text-[#89AACC]'
                                : 'bg-emerald-500/20 text-emerald-400'
                            }`}
                          >
                            {event.status}
                          </span>
                        </div>

                        <div className="flex items-center gap-1 text-xs text-text-primary/80 font-body font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-muted" />
                          <span>{event.period}</span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-3xl font-display italic text-text-primary">
                          {event.degree}
                        </h3>
                        <p className="text-xs sm:text-base text-text-primary/95 font-body font-bold flex items-center gap-1.5">
                          <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#89AACC]" />
                          {event.institution}
                        </p>
                        {event.university && (
                          <p className="text-[11px] sm:text-xs text-muted font-body font-medium">
                            {event.university}
                          </p>
                        )}
                      </div>

                      {event.details && (
                        <p className="text-xs sm:text-base text-text-primary/85 font-body leading-relaxed pt-1">
                          {event.details}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SINGLE COMBINED CERTIFICATIONS BOX */}
        <div className="space-y-6 pt-6">
          <div className="flex flex-col space-y-2">
            <span className="text-xs sm:text-base uppercase tracking-[0.25em] text-[#89AACC] font-body font-bold">
              05 / CREDENTIALS
            </span>
            <h3 className="text-3xl sm:text-5xl font-display italic text-text-primary">
              Professional <span className="text-[#89AACC]">certifications</span>
            </h3>
          </div>

          <div className="glass-card glass-shimmer relative w-full rounded-3xl p-6 sm:p-10 border border-white/30 backdrop-blur-3xl shadow-2xl flex flex-col space-y-6 overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/15 flex-wrap gap-3">
              <div className="flex items-center space-x-3">
                <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-2xl accent-gradient p-[2px]">
                  <div className="w-full h-full bg-bg rounded-2xl flex items-center justify-center text-text-primary">
                    <Award className="w-4 sm:w-5 h-4 sm:h-5 text-[#89AACC]" />
                  </div>
                </div>
                <h4 className="text-xl sm:text-3xl font-display italic text-text-primary">
                  Certifications & Specialized Training
                </h4>
              </div>

              <span className="px-3.5 py-1.5 rounded-full bg-stroke/90 border border-white/15 text-xs font-body font-bold text-[#89AACC] uppercase tracking-wider">
                {portfolio.certifications.length} Certified Credentials
              </span>
            </div>

            {/* Certifications Items Grid inside single box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {portfolio.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 sm:p-7 rounded-2xl bg-bg/70 border border-white/15 space-y-4 hover:border-[#89AACC] transition-colors"
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-stroke text-xs font-body text-[#89AACC] font-bold uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-body text-muted font-semibold flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.period}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h5 className="text-xl sm:text-2xl font-display italic text-text-primary">
                      {cert.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-text-primary/80 font-body">
                      Professional hands-on training with industry frameworks & real-world capstone implementations.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {cert.skills.map((sk) => (
                      <span
                        key={sk}
                        className="px-2.5 py-1 rounded-lg bg-stroke/90 border border-white/15 text-[11px] sm:text-xs font-body font-semibold text-text-primary flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#89AACC]" />
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
