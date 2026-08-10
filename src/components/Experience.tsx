import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
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
            filter: isMobile ? 'none' : 'blur(6px)',
          },
          {
            opacity: 1,
            x: 0,
            filter: 'none',
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

  const unifiedTimeline = [
    {
      id: 'mca',
      type: 'degree',
      title: portfolio.education[0].degree,
      subtitle: portfolio.education[0].institution,
      meta: portfolio.education[0].university,
      period: portfolio.education[0].period,
      status: portfolio.education[0].status,
      details: portfolio.education[0].details,
      badge: "Master's Degree",
      icon: GraduationCap,
    },
    {
      id: 'cert-python-ai',
      type: 'certification',
      title: portfolio.certifications[0].title,
      subtitle: portfolio.certifications[0].issuer,
      meta: 'Professional AI Certification',
      period: portfolio.certifications[0].period,
      status: 'Completed',
      details: 'Specialized training in Python data pipelines, machine learning fundamentals, and AI application architecture.',
      skills: portfolio.certifications[0].skills,
      badge: 'AI Certification',
      icon: Award,
    },
    {
      id: 'cert-java-fullstack',
      type: 'certification',
      title: portfolio.certifications[1].title,
      subtitle: portfolio.certifications[1].issuer,
      meta: 'Full Stack Development',
      period: portfolio.certifications[1].period,
      status: 'Completed',
      details: 'Comprehensive Java OOP concepts, web application development, REST API design, and SQL database integration.',
      skills: portfolio.certifications[1].skills,
      badge: 'Java Certification',
      icon: Award,
    },
    {
      id: 'bca',
      type: 'degree',
      title: portfolio.education[1].degree,
      subtitle: portfolio.education[1].institution,
      meta: portfolio.education[1].university,
      period: portfolio.education[1].period,
      status: portfolio.education[1].status,
      details: portfolio.education[1].details,
      badge: "Bachelor's Degree",
      icon: GraduationCap,
    },
    {
      id: 'hss',
      type: 'degree',
      title: portfolio.education[2].degree,
      subtitle: portfolio.education[2].institution,
      meta: portfolio.education[2].board,
      period: portfolio.education[2].period,
      status: portfolio.education[2].status,
      details: portfolio.education[2].details,
      badge: 'Higher Secondary',
      icon: GraduationCap,
    },
    {
      id: 'sslc',
      type: 'degree',
      title: portfolio.education[3].degree,
      subtitle: portfolio.education[3].institution,
      meta: portfolio.education[3].board,
      period: portfolio.education[3].period,
      status: portfolio.education[3].status,
      details: portfolio.education[3].details,
      badge: 'Secondary School',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="experience" ref={containerRef} className="py-24 sm:py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10 overflow-hidden">
      <div className="flex flex-col space-y-14 sm:space-y-20">
        {/* Section Header */}
        <div className="flex flex-col space-y-4">
          <span className="text-xs sm:text-lg uppercase tracking-[0.3em] text-[#89AACC] font-body font-bold">
            04 / TIMELINE & EXPERIENCE
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic text-text-primary">
            Education & <span className="text-[#89AACC]">experience</span>
          </h2>
          <p className="text-text-primary/90 text-base sm:text-xl lg:text-3xl max-w-3xl font-body leading-relaxed">
            A comprehensive chronological overview of Joyal Jobai's academic degrees, professional certifications, and technical accomplishments.
          </p>
        </div>

        {/* Unified Vertical Timeline Structure */}
        <div className="relative pt-4 pb-12">
          {/* Progressively Revealed Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-stroke -translate-x-1/2">
            <div
              ref={lineRef}
              className="w-full h-full accent-gradient origin-top"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-10 sm:space-y-16">
            {unifiedTimeline.map((event, idx) => {
              const isEven = idx % 2 === 0;
              const IconComponent = event.icon;
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
                  {/* Central Node Indicator */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 sm:w-14 h-10 sm:h-14 rounded-full bg-surface border-2 border-[#89AACC] flex items-center justify-center text-[#89AACC] z-20 shadow-xl backdrop-blur-2xl">
                    <IconComponent className="w-5 sm:w-7 h-5 sm:h-7" />
                  </div>

                  {/* Card Content Area */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'} w-[calc(100%-3rem)]`}>
                    <div className="glass-card glass-shimmer p-6 sm:p-10 rounded-3xl space-y-4 sm:space-y-6 shadow-2xl">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-3 sm:px-5 py-1 sm:py-2 rounded-full bg-stroke/80 text-xs sm:text-base font-body text-[#89AACC] font-bold uppercase tracking-wider">
                            {event.badge}
                          </span>
                          <span
                            className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-body uppercase tracking-wider font-extrabold ${
                              event.status === 'Enrolled'
                                ? 'bg-[#4E85BF]/25 text-[#89AACC]'
                                : 'bg-emerald-500/20 text-emerald-400'
                            }`}
                          >
                            {event.status}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs sm:text-base text-text-primary/80 font-body font-semibold">
                          <Calendar className="w-4 h-4 text-muted" />
                          <span>{event.period}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-2xl sm:text-4xl font-display italic text-text-primary group-hover:text-[#89AACC] transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-base sm:text-xl text-text-primary/95 font-body font-bold flex items-center gap-2">
                          <MapPin className="w-4.5 h-4.5 text-[#89AACC]" />
                          {event.subtitle}
                        </p>
                        {event.meta && (
                          <p className="text-xs sm:text-base text-muted font-body font-medium">
                            {event.meta}
                          </p>
                        )}
                      </div>

                      {event.details && (
                        <p className="text-base sm:text-xl text-text-primary/85 font-body leading-relaxed pt-1">
                          {event.details}
                        </p>
                      )}

                      {event.skills && (
                        <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
                          {event.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 sm:px-4 py-1.5 rounded-xl bg-stroke/80 text-xs sm:text-base font-body font-semibold text-text-primary border border-white/15 flex items-center gap-1.5"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#89AACC]" />
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
