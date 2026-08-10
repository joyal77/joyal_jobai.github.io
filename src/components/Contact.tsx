import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative min-h-[75vh] sm:min-h-screen w-full flex flex-col justify-center items-center py-20 sm:py-32 px-4 md:px-8 overflow-hidden z-10"
    >
      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center space-y-8 sm:space-y-12">
        <div className="flex flex-col items-center space-y-4 w-full">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-base uppercase tracking-[0.25em] text-[#89AACC] font-body font-bold"
          >
            07 / GET IN TOUCH
          </motion.span>

          {/* UNIQUE CINEMATIC LENS ZOOM-IN ANIMATION */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.65, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-4xl sm:text-7xl md:text-[9rem] font-display font-extrabold text-text-primary leading-tight sm:leading-none break-words w-full px-2"
          >
            Let's build something <span className="text-[#89AACC]">meaningful</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-primary/90 text-xs sm:text-xl lg:text-2xl max-w-xl font-body leading-relaxed px-2"
          >
            Open for AI/ML engineering, full-stack software development roles, and research projects.
          </motion.p>
        </div>

        {/* Main CTA Mailto Button */}
        <motion.a
          href={`mailto:${portfolio.social.email}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="glass-shimmer touch-target group relative inline-flex items-center justify-center gap-3 min-h-[48px] sm:min-h-[54px] w-full max-w-xs sm:max-w-sm px-6 py-3.5 sm:py-5 rounded-full bg-text-primary text-bg font-body font-bold text-base sm:text-2xl shadow-2xl shadow-white/20 transition-all"
        >
          <Mail className="w-5 sm:w-7 h-5 sm:h-7" />
          <span>Get in touch</span>
          <ArrowUpRight className="w-5 sm:w-7 h-5 sm:h-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.a>

        {/* Contact Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 w-full pt-6 text-left"
        >
          {/* Email */}
          <a
            href={`mailto:${portfolio.social.email}`}
            className="glass-card glass-shimmer min-h-[48px] p-5 sm:p-6 rounded-3xl transition-all flex flex-col justify-center space-y-1.5 group shadow-lg"
          >
            <div className="flex items-center justify-between text-muted">
              <span className="text-[11px] sm:text-xs uppercase font-body tracking-wider font-bold">Email</span>
              <Mail className="w-4 sm:w-5 h-4 sm:h-5 group-hover:text-text-primary transition-colors" />
            </div>
            <span className="text-xs sm:text-base font-body text-text-primary truncate font-bold">
              {portfolio.social.email}
            </span>
          </a>

          {/* GitHub */}
          <a
            href={portfolio.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card glass-shimmer min-h-[48px] p-5 sm:p-6 rounded-3xl transition-all flex flex-col justify-center space-y-1.5 group shadow-lg"
          >
            <div className="flex items-center justify-between text-muted">
              <span className="text-[11px] sm:text-xs uppercase font-body tracking-wider font-bold">GitHub</span>
              <Github className="w-4 sm:w-5 h-4 sm:h-5 group-hover:text-text-primary transition-colors" />
            </div>
            <span className="text-xs sm:text-base font-body text-text-primary truncate font-bold">
              github.com/joyal77
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href={portfolio.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card glass-shimmer min-h-[48px] p-5 sm:p-6 rounded-3xl transition-all flex flex-col justify-center space-y-1.5 group shadow-lg"
          >
            <div className="flex items-center justify-between text-muted">
              <span className="text-[11px] sm:text-xs uppercase font-body tracking-wider font-bold">LinkedIn</span>
              <Linkedin className="w-4 sm:w-5 h-4 sm:h-5 group-hover:text-text-primary transition-colors" />
            </div>
            <span className="text-xs sm:text-base font-body text-text-primary truncate font-bold">
              linkedin.com/in/joyal-jobai
            </span>
          </a>

          {/* Location */}
          <div className="glass-card min-h-[48px] p-5 sm:p-6 rounded-3xl flex flex-col justify-center space-y-1.5 shadow-lg">
            <div className="flex items-center justify-between text-muted">
              <span className="text-[11px] sm:text-xs uppercase font-body tracking-wider font-bold">Location</span>
              <MapPin className="w-4 sm:w-5 h-4 sm:h-5" />
            </div>
            <span className="text-xs sm:text-base font-body text-text-primary font-bold truncate">
              {portfolio.location}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
