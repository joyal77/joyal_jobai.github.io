import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Sparkles, QrCode } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const DeveloperBadge: React.FC = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return;

    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;

    setRotate({
      x: -y / 15,
      y: x / 15,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="flex flex-col items-center justify-center relative perspective-1000 my-3 sm:my-6 w-full max-w-xs sm:max-w-md px-2">
      {/* Top Clip */}
      <div className="w-10 sm:w-16 h-4 sm:h-7 bg-gradient-to-b from-stroke via-white/20 to-stroke rounded-t-xl border-t border-x border-white/30 shadow flex items-center justify-center relative z-20">
        <div className="w-3 sm:w-5 h-1.5 sm:h-2.5 rounded-full bg-black/80 border border-white/20" />
      </div>
      <div className="w-1 sm:w-1.5 h-4 sm:h-8 accent-gradient z-10" />

      {/* Security ID Badge Card */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="glass-card glass-shimmer relative w-full rounded-3xl p-5 sm:p-8 border border-white/30 backdrop-blur-3xl shadow-2xl flex flex-col items-center space-y-4 sm:space-y-6 text-center overflow-hidden z-20 group hover:border-[#89AACC] transition-colors"
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#89AACC]/20 via-transparent to-[#4E85BF]/20 opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />

        {/* Header Bar */}
        <div className="w-full flex items-center justify-between pb-2 sm:pb-3 border-b border-white/20 text-[10px] sm:text-xs font-body uppercase tracking-wider text-[#89AACC] font-bold">
          <div className="flex items-center gap-1 sm:gap-2">
            <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-400" />
            <span>VERIFIED DEV</span>
          </div>
          <span className="text-muted font-mono">2026</span>
        </div>

        {/* User Photo Frame */}
        <div className="relative group/photo">
          <div className="w-36 sm:w-52 h-44 sm:h-64 rounded-2xl p-[3px] accent-gradient shadow-xl overflow-hidden relative">
            <img
              src="/joyal_photo.jpg"
              alt="Joyal Jobai"
              className="w-full h-full object-cover object-center rounded-[13px] filter contrast-105 group-hover/photo:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-surface/95 border border-white/25 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] sm:text-xs font-body uppercase font-bold text-text-primary">ONLINE</span>
          </div>
        </div>

        {/* Identity Information */}
        <div className="space-y-0.5 sm:space-y-1 w-full pt-1">
          <div className="flex items-center justify-center gap-1.5">
            <h3 className="text-2xl sm:text-4xl font-display italic text-text-primary tracking-tight">
              {portfolio.name}
            </h3>
            <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#89AACC]" />
          </div>
          <p className="text-xs sm:text-base font-body font-bold text-[#89AACC]">
            {portfolio.title}
          </p>
          <p className="text-[11px] sm:text-sm text-muted font-body font-medium">
            MCA @ ASIET Kalady
          </p>
        </div>

        {/* Concise Footer Bar */}
        <div className="w-full flex items-center justify-between pt-2 border-t border-white/20 text-[10px] font-mono text-muted">
          <div className="flex items-center gap-1.5">
            <QrCode className="w-5 sm:w-6 h-5 sm:h-6 text-text-primary/80" />
            <span className="text-text-primary/90 font-bold">JOYAL JOBAI</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-stroke text-text-primary font-bold">VERIFIED</span>
        </div>
      </motion.div>
    </div>
  );
};
