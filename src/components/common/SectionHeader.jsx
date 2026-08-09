import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle, badgeText, align = 'center', className = '' }) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${isCenter ? 'text-center' : 'text-left'} ${className}`}
    >
      {badgeText && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-cyan-400 uppercase rounded-full bg-cyan-950/60 border border-cyan-800/50">
          {badgeText}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full ${isCenter ? 'mx-auto' : ''}`} />
    </motion.div>
  );
}
