import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative z-10 border-t border-white/20 bg-bg/95 backdrop-blur-2xl py-12 sm:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 font-body text-center md:text-left">
        {/* Left Info & Availability */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 absolute" />
            <span className="text-sm sm:text-lg text-text-primary font-bold pl-4">
              Available for opportunities
            </span>
          </div>
          <span className="hidden sm:inline text-muted">•</span>
          <span className="text-sm sm:text-lg text-muted font-semibold">
            © 2026 Joyal Jobai. All rights reserved.
          </span>
        </div>

        {/* Center Social Links (44x44px Touch Targets) */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <a
            href={portfolio.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target rounded-full bg-surface/90 border border-white/20 text-muted hover:text-text-primary hover:border-white/40 transition-colors shadow-lg"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 sm:w-6 h-5 sm:h-6" />
          </a>
          <a
            href={portfolio.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target rounded-full bg-surface/90 border border-white/20 text-muted hover:text-text-primary hover:border-white/40 transition-colors shadow-lg"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 sm:w-6 h-5 sm:h-6" />
          </a>
          <a
            href={`mailto:${portfolio.social.email}`}
            className="touch-target rounded-full bg-surface/90 border border-white/20 text-muted hover:text-text-primary hover:border-white/40 transition-colors shadow-lg"
            aria-label="Send Email"
          >
            <Mail className="w-5 sm:w-6 h-5 sm:h-6" />
          </a>
        </div>

        {/* Right Back to Top Button (44x44px Touch Target) */}
        <button
          onClick={scrollToTop}
          className="touch-target group flex items-center gap-3 text-sm sm:text-lg font-bold text-text-primary/90 hover:text-text-primary transition-colors focus:outline-none"
        >
          <span>Back to top</span>
          <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-surface/90 border border-white/20 flex items-center justify-center group-hover:-translate-y-1 transition-transform shadow-xl">
            <ArrowUp className="w-4 sm:w-5 h-4 sm:h-5" />
          </div>
        </button>
      </div>
    </footer>
  );
};
