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
    <section id="explorations" className="py-20 sm:py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="flex flex-col space-y-12 sm:space-y-16"
      >
        {/* Section Heading */}
        <div className="flex flex-col space-y-3">
          <div className="glass-shimmer inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 bg-surface/85 backdrop-blur-2xl text-xs font-body uppercase tracking-[0.2em] text-[#89AACC] font-bold shadow-xl w-fit">
            <Sparkles className="w-4 h-4" />
            <span>06 / EXPERIMENTAL LAB</span>
          </div>
          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic text-text-primary">
            Visual <span className="text-[#89AACC]">playground</span>
          </h2>
        </div>

        {/* Explorations Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.explorations.map((exp, idx) => {
            const IconComponent = explorationIcons[exp.id] || Sparkles;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setActiveCard(exp)}
                className="glass-card glass-shimmer group relative p-6 sm:p-8 rounded-3xl cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-6"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-stroke/85 border border-white/15 text-[11px] font-body uppercase tracking-wider text-[#89AACC] font-bold">
                    {exp.category}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-stroke/70 flex items-center justify-center text-[#89AACC]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-display italic text-text-primary group-hover:text-white transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-base text-text-primary/85 font-body leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Action Indicator */}
                <div className="flex items-center justify-between pt-3 border-t border-white/15">
                  <span className="text-xs font-body uppercase tracking-widest text-[#89AACC] font-bold">
                    Explore
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#89AACC]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Lightbox Modal */}
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
              className="relative max-w-xl w-full bg-surface/95 border border-white/25 rounded-3xl overflow-hidden shadow-2xl z-10 p-6 sm:p-10 flex flex-col space-y-6 backdrop-blur-3xl"
            >
              <button
                onClick={() => setActiveCard(null)}
                className="touch-target absolute top-5 right-5 p-2.5 rounded-full bg-bg border border-white/25 text-white hover:bg-white hover:text-black transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="px-3 py-1 rounded-full bg-stroke/90 border border-white/15 text-xs font-body uppercase tracking-wider text-[#89AACC] font-bold w-fit">
                {activeCard.category}
              </span>

              <h3 className="text-3xl sm:text-4xl font-display italic text-text-primary">
                {activeCard.title}
              </h3>

              <div className="p-5 rounded-2xl bg-bg/85 border border-white/15 space-y-2">
                <p className="text-xs sm:text-base text-text-primary leading-relaxed">
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
