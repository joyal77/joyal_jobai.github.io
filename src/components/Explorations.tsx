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
        className="flex flex-col space-y-10 sm:space-y-14"
      >
        {/* Section Header with Description */}
        <div className="flex flex-col space-y-4">
          <div className="glass-shimmer inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 bg-surface/85 backdrop-blur-2xl text-xs font-body uppercase tracking-[0.2em] text-[#89AACC] font-bold shadow-xl w-fit">
            <Sparkles className="w-4 h-4 text-[#89AACC]" />
            <span>06 / EXPERIMENTAL LAB</span>
          </div>
          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic text-text-primary">
            Visual <span className="text-[#89AACC]">playground</span>
          </h2>
          <p className="text-text-primary/90 text-sm sm:text-xl lg:text-2xl font-body max-w-3xl leading-relaxed">
            Exploring concepts across artificial intelligence, machine learning model explainability, high-throughput backend APIs, and modern creative web technologies.
          </p>
        </div>

        {/* SINGLE GLASSMORPHIC CONTAINER BOX */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card glass-shimmer relative w-full rounded-3xl p-6 sm:p-10 md:p-12 border border-white/30 backdrop-blur-3xl shadow-2xl flex flex-col space-y-8 overflow-hidden"
        >
          {/* Header Bar inside Single Box */}
          <div className="flex items-center justify-between pb-4 border-b border-white/15 flex-wrap gap-3">
            <div className="flex items-center space-x-3">
              <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-2xl accent-gradient p-[2px]">
                <div className="w-full h-full bg-bg rounded-2xl flex items-center justify-center text-text-primary">
                  <Brain className="w-4 sm:w-5 h-4 sm:h-5 text-[#89AACC]" />
                </div>
              </div>
              <h3 className="text-xl sm:text-3xl font-display italic text-text-primary">
                Neural, Backend & Cyber Concepts
              </h3>
            </div>

            <span className="px-3.5 py-1.5 rounded-full bg-stroke/90 border border-white/15 text-xs font-body font-bold text-[#89AACC] uppercase tracking-wider">
              {portfolio.explorations.length} Interactive Modules
            </span>
          </div>

          {/* Grid of Small Concept Cards (Title & Icon Only) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-6 pt-2">
            {portfolio.explorations.map((exp, idx) => {
              const IconComponent = explorationIcons[exp.id] || Sparkles;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveCard(exp)}
                  className="glass-card glass-shimmer group relative p-4 sm:p-7 rounded-2xl cursor-pointer shadow-xl border border-white/20 hover:border-[#89AACC] flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4 transition-all"
                >
                  {/* Icon */}
                  <div className="w-11 sm:w-16 h-11 sm:h-16 rounded-2xl bg-stroke/80 flex items-center justify-center text-[#89AACC] group-hover:bg-[#4E85BF] group-hover:text-bg transition-colors shadow-md">
                    <IconComponent className="w-5 sm:w-8 h-5 sm:h-8" />
                  </div>

                  {/* Title Only */}
                  <h4 className="text-xs sm:text-lg font-display italic text-text-primary group-hover:text-white transition-colors leading-snug">
                    {exp.title}
                  </h4>

                  {/* Click Prompt Indicator */}
                  <div className="flex items-center gap-1 text-[10px] sm:text-xs font-body uppercase font-bold text-[#89AACC]">
                    <span>View</span>
                    <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* POPUP MODAL WINDOW ON CLICK */}
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
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative max-w-lg w-full bg-surface/95 border border-white/30 rounded-3xl overflow-hidden shadow-2xl z-10 p-6 sm:p-10 flex flex-col space-y-6 backdrop-blur-3xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCard(null)}
                className="touch-target absolute top-5 right-5 p-2.5 rounded-full bg-bg border border-white/25 text-white hover:bg-white hover:text-black transition-colors shadow-lg"
                aria-label="Close Concept Popup"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category Badge */}
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-stroke/90 border border-white/20 text-xs font-body uppercase tracking-wider text-[#89AACC] font-bold">
                  {activeCard.category}
                </span>
              </div>

              {/* Popup Title */}
              <h3 className="text-2xl sm:text-4xl font-display italic text-text-primary">
                {activeCard.title}
              </h3>

              {/* Full Description & Details inside Popup */}
              <div className="p-5 rounded-2xl bg-bg/85 border border-white/15 space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-[#89AACC] font-bold">
                  Technical Concept Overview
                </h4>
                <p className="text-xs sm:text-base text-text-primary leading-relaxed font-normal">
                  {activeCard.description}
                </p>
              </div>

              {/* Popup Footer Action */}
              <button
                onClick={() => setActiveCard(null)}
                className="w-full py-3 rounded-full accent-gradient text-bg font-body font-bold text-xs sm:text-sm shadow-xl hover:scale-[1.02] transition-transform"
              >
                Close Concept Window
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
