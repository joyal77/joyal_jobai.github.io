import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Layers, Network, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const Stats: React.FC = () => {
  const [activeStat, setActiveStat] = useState<typeof portfolio.stats[0] | null>(null);

  const statIcons: Record<string, React.FC<{ className?: string }>> = {
    'stat-ai': Cpu,
    'stat-stack': Layers,
    'stat-systems': Network,
  };

  return (
    <section className="py-16 sm:py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex flex-col space-y-8"
      >
        {/* SINGLE GLASSMORPHIC CONTAINER BOX FOR CORE SPECIALIZATIONS */}
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
                  <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-[#89AACC]" />
                </div>
              </div>
              <h3 className="text-xl sm:text-3xl font-display italic text-text-primary">
                Core Specializations
              </h3>
            </div>

            <span className="px-3.5 py-1.5 rounded-full bg-stroke/90 border border-white/15 text-xs font-body font-bold text-[#89AACC] uppercase tracking-wider">
              {portfolio.stats.length} Core Pillars
            </span>
          </div>

          {/* Grid of Small Mini Boxes (Name & Icon Only) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-2">
            {portfolio.stats.map((stat) => {
              const IconComponent = statIcons[stat.id] || Sparkles;
              return (
                <motion.div
                  key={stat.id}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveStat(stat)}
                  className="glass-card glass-shimmer group relative p-5 sm:p-7 rounded-2xl cursor-pointer shadow-xl border border-white/20 hover:border-[#89AACC] flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4 transition-all min-h-[130px] sm:min-h-[160px]"
                >
                  {/* Icon */}
                  <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-2xl bg-stroke/80 flex items-center justify-center text-[#89AACC] group-hover:bg-[#4E85BF] group-hover:text-bg transition-colors shadow-md">
                    <IconComponent className="w-6 sm:w-8 h-6 sm:h-8" />
                  </div>

                  {/* Title / Name Only */}
                  <h4 className="text-lg sm:text-2xl font-display italic text-text-primary group-hover:text-white transition-colors leading-tight">
                    {stat.value}
                  </h4>

                  {/* Click Prompt Indicator */}
                  <div className="flex items-center gap-1 text-[10px] sm:text-xs font-body uppercase font-bold text-[#89AACC]">
                    <span>View Details</span>
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
        {activeStat && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveStat(null)}
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
                onClick={() => setActiveStat(null)}
                className="touch-target absolute top-5 right-5 p-2.5 rounded-full bg-bg border border-white/25 text-white hover:bg-white hover:text-black transition-colors shadow-lg"
                aria-label="Close Specialization Popup"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category Label */}
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-stroke/90 border border-white/20 text-xs font-body uppercase tracking-wider text-[#89AACC] font-bold">
                  {activeStat.label}
                </span>
              </div>

              {/* Popup Title */}
              <h3 className="text-3xl sm:text-5xl font-display italic text-text-primary">
                {activeStat.value}
              </h3>

              {/* Full Detail Description inside Popup */}
              <div className="p-5 rounded-2xl bg-bg/85 border border-white/15 space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-[#89AACC] font-bold">
                  Technical Capability Detail
                </h4>
                <p className="text-sm sm:text-xl text-text-primary leading-relaxed font-body">
                  {activeStat.detail}
                </p>
              </div>

              {/* Close Action Button */}
              <button
                onClick={() => setActiveStat(null)}
                className="w-full py-3 rounded-full accent-gradient text-bg font-body font-bold text-xs sm:text-sm shadow-xl hover:scale-[1.02] transition-transform"
              >
                Close Specialization Window
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
