import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hoverEffect = true, onClick, ...props }) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : {}}
      onClick={onClick}
      className={`glass-card rounded-xl p-6 backdrop-blur-md border border-slate-800/80 bg-slate-900/60 shadow-xl transition-all duration-300 ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
