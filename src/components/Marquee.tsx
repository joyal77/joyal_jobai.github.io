import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DUST_STATEMENTS = [
  'BUILDING WITH ARTIFICIAL INTELLIGENCE',
  'ENGINEERING WITH MODERN CODE',
  'CREATING CINEMATIC DIGITAL EXPERIENCES',
  'ADVANCING MACHINE LEARNING RESEARCH',
  'HIGH-PERFORMANCE FULL-STACK SYSTEMS',
];

export const Marquee: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % DUST_STATEMENTS.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const currentText = DUST_STATEMENTS[index];

  return (
    <div className="py-16 md:py-24 px-4 overflow-hidden border-y border-white/15 bg-bg/60 backdrop-blur-md select-none flex items-center justify-center relative min-h-[180px] md:min-h-[220px]">
      {/* Ambient Stardust Glow */}
      <div className="absolute w-72 h-72 rounded-full accent-gradient blur-[120px] opacity-15 pointer-events-none" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentText}
          initial={{ opacity: 0, scale: 1.08, filter: 'blur(16px)', y: -10 }}
          animate={{ opacity: 1, scale: 1.0, filter: 'blur(0px)', y: 0 }}
          exit={{ opacity: 0, scale: 0.92, filter: 'blur(16px)', y: 10 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center max-w-5xl mx-auto px-4 flex flex-wrap justify-center items-center gap-x-3 gap-y-1"
        >
          {currentText.split(' ').map((word, wordIdx) => (
            <motion.span
              key={word + wordIdx}
              initial={{ opacity: 0, filter: 'blur(10px)', y: -8 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.5, delay: wordIdx * 0.08 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display italic text-[#89AACC] tracking-tight drop-shadow-2xl inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
