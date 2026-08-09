import React from 'react';

export default function Badge({ children, variant = 'cyan', className = '' }) {
  const variantStyles = {
    cyan: 'bg-cyan-950/60 text-cyan-300 border-cyan-500/30 hover:border-cyan-400',
    emerald: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30 hover:border-emerald-400',
    indigo: 'bg-indigo-950/60 text-indigo-300 border-indigo-500/30 hover:border-indigo-400',
    slate: 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-600'
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-sm transition-all duration-200 shadow-sm ${
        variantStyles[variant] || variantStyles.cyan
      } ${className}`}
    >
      {children}
    </span>
  );
}
