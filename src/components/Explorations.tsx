import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Brain, Cpu, Terminal, Network, BarChart2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { portfolio, ExplorationCard } from '../data/portfolio';

export const Explorations: React.FC = () => {
  const [activeCard, setActiveCard] = useState<ExplorationCard | null>(null);

  const explorationIcons: Record<string, React.FC<{ className?: string }>> = {
    'exp-1': Brain,
    'exp-2': Cpu,
    'exp-3': Terminal,
    'exp-4': Network,
    'exp-5': BarChart2,
    'exp-6': ShieldCheck,
  };

  return (
    <section id="explorations" className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="flex flex-col space-y-20"
      >
        {/* Section Heading & Copy (+3 size boost) */}
        <div className="flex flex-col space-y-5">
          <div className="glass-shimmer inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/25 bg-surface/85 backdrop-blur-2xl text-base font-body uppercase tracking-[0.3em] text-[#89AACC] font-bold shadow-xl w-fit">
            <Sparkles className="w-5 h-5" />
            <span>06 / EXPERIMENTAL LAB</span>
          </div>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic text-text-primary">
            Visual <span className="text-[#89AACC]">playground</span>
          </h2>
          <p className="text-text-primary/90 text-xl md:text-2xl lg:text-3xl font-body max-w-3xl leading-relaxed">
            Exploring concepts across artificial intelligence, machine learning model explainability, high-throughput backend APIs, and modern creative web technologies.
          </p>
        </div>

        {/* Clean Glassmorphic Cards Grid (+3 size boost) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {portfolio.explorations.map((exp, idx) => {
            const IconComponent = explorationIcons[exp.id] || Sparkles;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveCard(exp)}
                className="glass-card glass-shimmer group relative p-9 md:p-12 rounded-3xl cursor-pointer shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between space-y-10"
              >
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between">
                  <span className="px-5 py-2 rounded-full bg-stroke/85 border border-white/15 text-sm md:text-base font-body uppercase tracking-wider text-[#89AACC] font-bold">
                    {exp.category}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-stroke/70 flex items-center justify-center text-[#89AACC] group-hover:bg-[#4E85BF] group-hover:text-bg transition-colors shadow-lg">
                    <IconComponent className="w-7 h-7" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-display italic text-text-primary group-hover:text-white transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-lg md:text-xl text-text-primary/85 font-body leading-relaxed font-normal">
                    {exp.description}
                  </p>
                </div>

                {/* Bottom Action Indicator */}
                <div className="flex items-center justify-between pt-5 border-t border-white/15">
                  <span className="text-sm md:text-base font-body uppercase tracking-widest text-[#89AACC] font-bold group-hover:text-white transition-colors">
                    Explore Concept
                  </span>
                  <ArrowUpRight className="w-6 h-6 text-[#89AACC] group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Lightbox / Concept Detail Modal */}
      <AnimatePresence>
        {activeCard && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCard(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-3xl w-full bg-surface/95 border border-white/25 rounded-3xl overflow-hidden shadow-2xl z-10 p-9 md:p-14 flex flex-col space-y-8 backdrop-blur-3xl"
            >
              <button
                onClick={() => setActiveCard(null)}
                className="absolute top-7 right-7 p-3.5 rounded-full bg-bg border border-white/25 text-white hover:bg-white hover:text-black transition-colors shadow-xl"
                aria-label="Close Modal"
              >
                <X className="w-7 h-7" />
              </button>

              <div className="flex items-center gap-4">
                <span className="px-5 py-2 rounded-full bg-stroke/90 border border-white/15 text-sm md:text-base font-body uppercase tracking-wider text-[#89AACC] font-bold">
                  {activeCard.category}
                </span>
              </div>

              <h3 className="text-5xl md:text-6xl font-display italic text-text-primary">
                {activeCard.title}
              </h3>

              <div className="p-8 rounded-3xl bg-bg/85 border border-white/15 space-y-3">
                <h4 className="text-sm md:text-base uppercase tracking-widest text-[#89AACC] font-bold">
                  Technical Concept Overview
                </h4>
                <p className="text-lg md:text-xl text-text-primary leading-relaxed font-normal">
                  {activeCard.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
