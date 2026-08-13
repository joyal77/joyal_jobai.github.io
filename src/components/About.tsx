import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Server, Network } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { DeveloperBadge } from './DeveloperBadge';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Predictive models with XGBoost & Scikit-learn, explainable via SHAP metrics.',
    },
    {
      icon: Code2,
      title: 'Full-Stack Web Dev',
      description: 'High-performance React & TypeScript frontends backed by Python FastAPI services.',
    },
    {
      icon: Server,
      title: 'Backend & Databases',
      description: 'Relational MySQL schemas, RESTful APIs, and state management.',
    },
    {
      icon: Network,
      title: 'Systems & Infrastructure',
      description: 'TCP/IP routing, DNS, DHCP, Linux administration, and network fundamentals.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10 overflow-hidden">
      {/* Mobile-Optimized Horizontal Slide from LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col space-y-12 sm:space-y-24"
      >
        {/* Section Header */}
        <div className="flex flex-col space-y-2 sm:space-y-3">
          <span className="text-xs sm:text-base uppercase tracking-[0.25em] text-[#89AACC] font-body font-bold">
            01 / BIOGRAPHY
          </span>
          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold text-text-primary">
            About <span className="text-[#89AACC]">Joyal</span>
          </h2>
        </div>

        {/* Bio & Developer ID Badge Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column — Bio */}
          <div className="lg:col-span-7 flex flex-col space-y-5 sm:space-y-6">
            <h3 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary leading-tight">
              "{portfolio.editorialStatement}"
            </h3>

            <div className="flex flex-col space-y-3 sm:space-y-4 text-text-primary/90 text-sm sm:text-xl lg:text-2xl font-body leading-relaxed">
              <p>
                <strong className="text-text-primary font-bold">MCA Scholar</strong> at Adi Shankara Institute of Engineering & Technology (ASIET Kalady), with a BCA background from DePaul Institute (DIST Angamaly).
              </p>
              <p>
                Specialized in building end-to-end Machine Learning pipelines, RESTful microservices, and full-stack web platforms.
              </p>
            </div>
          </div>

          {/* Right Column — Developer Badge */}
          <div className="lg:col-span-5 flex justify-center pt-2 lg:pt-0">
            <DeveloperBadge />
          </div>
        </div>

        {/* Technical Focus Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 pt-2 sm:pt-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card glass-shimmer p-5 sm:p-8 rounded-3xl flex flex-col justify-between space-y-3 sm:space-y-4 shadow-xl"
              >
                <div className="w-11 sm:w-16 h-11 sm:h-16 rounded-2xl bg-stroke/70 flex items-center justify-center text-[#89AACC]">
                  <Icon className="w-5 sm:w-8 h-5 sm:h-8" />
                </div>
                <div className="flex flex-col space-y-1.5 sm:space-y-2">
                  <h4 className="text-base sm:text-2xl font-body font-bold text-text-primary">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-base text-text-primary/80 leading-relaxed font-body">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
