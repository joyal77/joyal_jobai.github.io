import React from 'react';
import { motion } from 'framer-motion';
import { portfolio } from '../data/portfolio';

export const Stats: React.FC = () => {
  return (
    <section className="py-28 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-9"
      >
        {portfolio.stats.map((stat, idx) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="glass-card glass-shimmer p-11 rounded-3xl flex flex-col space-y-6 shadow-2xl"
          >
            <span className="text-base uppercase tracking-[0.25em] text-[#89AACC] font-body font-bold">
              {stat.label}
            </span>
            <div className="text-5xl sm:text-6xl lg:text-7xl font-display italic text-text-primary group-hover:text-[#89AACC] transition-colors">
              {stat.value}
            </div>
            <p className="text-lg md:text-xl text-text-primary/85 font-body leading-relaxed font-normal">
              {stat.detail}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
