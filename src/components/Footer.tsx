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
    <footer className="relative z-10 border-t border-white/20 bg-bg/95 backdrop-blur-2xl py-10 sm:py-14 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 font-body text-center md:text-left">
        {/* Left Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute" />
            <span className="text-xs sm:text-base text-text-primary font-bold pl-3">
              Available for opportunities
            </span>
          </div>
          <span className="hidden sm:inline text-muted">•</span>
          <span className="text-xs sm:text-base text-muted font-medium">
            © 2026 Joyal Jobai. All rights reserved.
          </span>
        </div>

        {/* Center Social Links */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          <a
            href={portfolio.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target rounded-full bg-surface/90 border border-white/20 text-muted hover:text-text-primary transition-colors shadow-md"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 sm:w-5 h-4 sm:h-5" />
          </a>
          <a
            href={portfolio.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target rounded-full bg-surface/90 border border-white/20 text-muted hover:text-text-primary transition-colors shadow-md"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 sm:w-5 h-4 sm:h-5" />
          </a>
          <a
            href={`mailto:${portfolio.social.email}`}
            className="touch-target rounded-full bg-surface/90 border border-white/20 text-muted hover:text-text-primary transition-colors shadow-md"
            aria-label="Send Email"
          >
            <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
          </a>
        </div>

        {/* Right Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="touch-target group flex items-center gap-2 text-xs sm:text-base font-bold text-text-primary/90 hover:text-text-primary transition-colors focus:outline-none"
        >
          <span>Back to top</span>
          <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-surface/90 border border-white/20 flex items-center justify-center group-hover:-translate-y-0.5 transition-transform shadow-lg">
            <ArrowUp className="w-3.5 sm:w-4.5 h-3.5 sm:h-4.5" />
          </div>
        </button>
      </div>
    </footer>
  );
};
