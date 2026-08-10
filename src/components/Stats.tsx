import React from 'react';
import { motion } from 'framer-motion';
import { portfolio } from '../data/portfolio';

export const Stats: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6"
      >
        {portfolio.stats.map((stat, idx) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.12 }}
            className="glass-card glass-shimmer p-7 rounded-3xl flex flex-col space-y-4 shadow-xl"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[#89AACC] font-body font-bold">
              {stat.label}
            </span>
            <div className="text-4xl sm:text-6xl font-display italic text-text-primary">
              {stat.value}
            </div>
            <p className="text-xs sm:text-base text-text-primary/85 font-body leading-relaxed">
              {stat.detail}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
