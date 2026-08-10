import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative min-h-[80vh] sm:min-h-screen w-full flex flex-col justify-center items-center py-24 sm:py-36 px-4 md:px-8 overflow-hidden z-10"
    >
      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full text-center flex flex-col items-center space-y-10 sm:space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-4 sm:space-y-6 w-full"
        >
          <span className="text-xs sm:text-base uppercase tracking-[0.3em] text-[#89AACC] font-body font-bold">
            07 / GET IN TOUCH
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-[9.5rem] font-display italic text-text-primary leading-tight sm:leading-none break-words w-full px-2">
            Let's build something <span className="text-[#89AACC]">meaningful</span>.
          </h2>
          <p className="text-text-primary/90 text-base sm:text-xl lg:text-3xl max-w-2xl font-body leading-relaxed px-2">
            Open for AI/ML engineering, full-stack software development roles, research collaborations, and technical opportunities.
          </p>
        </motion.div>

        {/* Main CTA Mailto Button — Mobile Full-Width Touch Target (Min H 52px) */}
        <motion.a
          href={`mailto:${portfolio.social.email}`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="glass-shimmer touch-target group relative inline-flex items-center justify-center gap-4 min-h-[54px] w-full max-w-xs sm:max-w-md px-8 py-4 sm:py-6 rounded-full bg-text-primary text-bg font-body font-bold text-lg sm:text-2xl lg:text-3xl shadow-2xl shadow-white/20 hover:shadow-white/30 transition-all"
        >
          <Mail className="w-6 sm:w-8 h-6 sm:h-8" />
          <span>Get in touch</span>
          <ArrowUpRight className="w-6 sm:w-8 h-6 sm:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.a>

        {/* Contact Links & Information Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7 w-full pt-8 sm:pt-12 text-left"
        >
          {/* Email */}
          <a
            href={`mailto:${portfolio.social.email}`}
            className="glass-card glass-shimmer min-h-[52px] p-6 sm:p-7 rounded-3xl transition-all flex flex-col justify-center space-y-2 sm:space-y-3 group shadow-xl"
          >
            <div className="flex items-center justify-between text-muted">
              <span className="text-xs sm:text-sm uppercase font-body tracking-wider font-bold">Email</span>
              <Mail className="w-5 sm:w-6 h-5 sm:h-6 group-hover:text-text-primary transition-colors" />
            </div>
            <span className="text-sm sm:text-lg font-body text-text-primary truncate font-bold">
              {portfolio.social.email}
            </span>
          </a>

          {/* GitHub */}
          <a
            href={portfolio.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card glass-shimmer min-h-[52px] p-6 sm:p-7 rounded-3xl transition-all flex flex-col justify-center space-y-2 sm:space-y-3 group shadow-xl"
          >
            <div className="flex items-center justify-between text-muted">
              <span className="text-xs sm:text-sm uppercase font-body tracking-wider font-bold">GitHub</span>
              <Github className="w-5 sm:w-6 h-5 sm:h-6 group-hover:text-text-primary transition-colors" />
            </div>
            <span className="text-sm sm:text-lg font-body text-text-primary truncate font-bold">
              github.com/joyal77
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href={portfolio.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card glass-shimmer min-h-[52px] p-6 sm:p-7 rounded-3xl transition-all flex flex-col justify-center space-y-2 sm:space-y-3 group shadow-xl"
          >
            <div className="flex items-center justify-between text-muted">
              <span className="text-xs sm:text-sm uppercase font-body tracking-wider font-bold">LinkedIn</span>
              <Linkedin className="w-5 sm:w-6 h-5 sm:h-6 group-hover:text-text-primary transition-colors" />
            </div>
            <span className="text-sm sm:text-lg font-body text-text-primary truncate font-bold">
              linkedin.com/in/joyal-jobai
            </span>
          </a>

          {/* Location */}
          <div className="glass-card min-h-[52px] p-6 sm:p-7 rounded-3xl flex flex-col justify-center space-y-2 sm:space-y-3 shadow-xl">
            <div className="flex items-center justify-between text-muted">
              <span className="text-xs sm:text-sm uppercase font-body tracking-wider font-bold">Location</span>
              <MapPin className="w-5 sm:w-6 h-5 sm:h-6" />
            </div>
            <span className="text-sm sm:text-lg font-body text-text-primary font-bold truncate">
              {portfolio.location}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
