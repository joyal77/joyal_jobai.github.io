import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete?: () => void;
}

const ROTATING_WORDS = ['Build', 'Create', 'Innovate', 'Engineer', 'Imagine'];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Counter 000 -> 100 over ~2700ms
  useEffect(() => {
    const duration = 2700;
    let startTime: number | null = null;
    let animationFrameId: number;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(currentProgress);

      if (currentProgress < 100) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600);
        }, 400);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [onComplete]);

  // Word cycler every 900ms
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 900);

    return () => clearInterval(interval);
  }, []);

  const formattedCounter = String(progress).padStart(3, '0');

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6 md:p-12 select-none overflow-hidden"
        >
          {/* Top-left Portfolio Label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center space-x-3"
          >
            <span className="w-2 h-2 rounded-full accent-gradient animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted font-medium">
              PORTFOLIO • JOYAL JOBAI
            </span>
          </motion.div>

          {/* Center Rotating Editorial Words */}
          <div className="flex-1 flex items-center justify-center my-auto">
            <div className="h-24 md:h-32 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={ROTATING_WORDS[wordIndex]}
                  initial={{ y: 30, opacity: 0, filter: 'blur(6px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -30, opacity: 0, filter: 'blur(6px)' }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary text-center tracking-tight"
                >
                  {ROTATING_WORDS[wordIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom-right Numeric Counter & Progress Info */}
          <div className="flex items-end justify-between">
            <div className="text-xs text-muted tracking-widest uppercase hidden md:block">
              AI/ML & FULL-STACK SYSTEM
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-6xl md:text-8xl lg:text-9xl font-display italic tabular-nums text-text-primary leading-none ml-auto"
            >
              {formattedCounter}
            </motion.div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50 overflow-hidden">
            <div
              className="h-full accent-gradient transition-transform duration-100 ease-out"
              style={{
                transform: `scaleX(${progress / 100})`,
                transformOrigin: 'left',
                boxShadow: '0 0 8px rgba(137,170,204,0.45)',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
