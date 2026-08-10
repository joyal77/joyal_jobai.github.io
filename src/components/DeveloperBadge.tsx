import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Sparkles, QrCode, Fingerprint } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const DeveloperBadge: React.FC = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable tilt on mobile touch screens for better performance
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
    <div className="flex flex-col items-center justify-center relative perspective-1000 my-4 sm:my-6 w-full max-w-sm sm:max-w-md px-2">
      {/* Top Lanyard Strap & Metallic Clip */}
      <div className="w-12 sm:w-16 h-5 sm:h-7 bg-gradient-to-b from-stroke via-white/20 to-stroke rounded-t-xl border-t border-x border-white/30 shadow-lg flex items-center justify-center relative z-20">
        <div className="w-4 sm:w-5 h-2 sm:h-2.5 rounded-full bg-black/80 border border-white/20" />
      </div>
      <div className="w-1 sm:w-1.5 h-6 sm:h-10 accent-gradient z-10" />

      {/* 3D Tilting Glassmorphic Security ID Card Badge */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="glass-card glass-shimmer relative w-full rounded-3xl p-6 sm:p-10 border border-white/30 backdrop-blur-3xl shadow-2xl flex flex-col items-center space-y-5 sm:space-y-7 text-center overflow-hidden z-20 group hover:border-[#89AACC] transition-colors"
      >
        {/* Holographic Watermark Glow Layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#89AACC]/20 via-transparent to-[#4E85BF]/20 opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />

        {/* Badge Header Bar */}
        <div className="w-full flex items-center justify-between pb-3 sm:pb-4 border-b border-white/20 text-xs sm:text-sm font-body uppercase tracking-wider text-[#89AACC] font-bold">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400" />
            <span>VERIFIED CREATIVE DEV</span>
          </div>
          <span className="text-muted font-mono text-[11px] sm:text-xs">ID-2026-JJ</span>
        </div>

        {/* User Photo Frame (Responsive Sizing for Mobile) */}
        <div className="relative group/photo">
          <div className="w-44 sm:w-60 h-52 sm:h-[18rem] rounded-3xl p-[3px] sm:p-[4px] accent-gradient shadow-2xl overflow-hidden relative">
            <img
              src="/joyal_photo.jpg"
              alt="Joyal Jobai"
              className="w-full h-full object-cover object-center rounded-[20px] filter contrast-105 group-hover/photo:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {/* Holographic Overlay on Photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Live Online Badge Indicator */}
          <div className="absolute -bottom-2.5 -right-2.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-surface/95 border border-white/25 backdrop-blur-md flex items-center gap-1.5 sm:gap-2 shadow-xl">
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-body uppercase font-bold text-text-primary">ACTIVE</span>
          </div>
        </div>

        {/* Identity Information */}
        <div className="space-y-1 sm:space-y-1.5 w-full pt-1 sm:pt-2">
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-3xl sm:text-4xl font-display italic text-text-primary tracking-tight">
              {portfolio.name}
            </h3>
            <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-[#89AACC]" />
          </div>
          <p className="text-sm sm:text-base font-body font-bold text-[#89AACC]">
            {portfolio.title}
          </p>
          <p className="text-xs sm:text-sm text-muted font-body font-medium">
            MCA Scholar @ ASIET Kalady
          </p>
        </div>

        {/* Micro Specification Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full pt-2 sm:pt-3 border-t border-white/20 text-left">
          <div className="p-2.5 sm:p-3 rounded-2xl bg-bg/70 border border-white/15 space-y-0.5 sm:space-y-1">
            <span className="text-[10px] sm:text-xs uppercase font-body tracking-wider text-muted font-bold block">
              SPECIALIZATION
            </span>
            <span className="text-xs sm:text-sm font-body font-bold text-text-primary flex items-center gap-1.5 truncate">
              <Cpu className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#89AACC] flex-shrink-0" />
              AI/ML & Full-Stack
            </span>
          </div>

          <div className="p-2.5 sm:p-3 rounded-2xl bg-bg/70 border border-white/15 space-y-0.5 sm:space-y-1">
            <span className="text-[10px] sm:text-xs uppercase font-body tracking-wider text-muted font-bold block">
              CLEARANCE
            </span>
            <span className="text-xs sm:text-sm font-body font-bold text-emerald-400 flex items-center gap-1.5 truncate">
              <Fingerprint className="w-3.5 sm:w-4 h-3.5 sm:h-4 flex-shrink-0" />
              LEVEL 05 CREATIVE
            </span>
          </div>
        </div>

        {/* Footer Bar with QR Code Graphic */}
        <div className="w-full flex items-center justify-between pt-2 sm:pt-3 border-t border-white/20 text-[10px] sm:text-xs font-mono text-muted">
          <div className="flex items-center gap-2">
            <QrCode className="w-6 sm:w-8 h-6 sm:h-8 text-text-primary/80" />
            <div className="flex flex-col text-left">
              <span className="text-text-primary/90 font-bold">JOYAL JOBAI</span>
              <span>KERALA, INDIA</span>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-xl bg-stroke text-text-primary font-bold">2026 VERIFIED</span>
        </div>
      </motion.div>
    </div>
  );
};
