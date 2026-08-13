import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#experience' },
  { label: 'Explorations', href: '#explorations' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      // Section highlight logic
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-5 px-3 sm:px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto inline-flex items-center justify-between w-full max-w-5xl rounded-full backdrop-blur-2xl border border-white/20 bg-surface/90 px-3 sm:px-5 py-2 sm:py-2.5 transition-all duration-300 ${
          scrolled ? 'shadow-2xl shadow-black/70 border-white/30 bg-surface/95 scale-[0.98]' : ''
        }`}
      >
        {/* Logo Badge — JA (44x44px Touch Target) */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="group relative flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full p-[2px] accent-gradient transition-transform duration-300 hover:scale-105"
          aria-label="Joyal Jobai Portfolio Home"
        >
          <div className="w-10 h-10 bg-bg rounded-full flex items-center justify-center transition-colors group-hover:bg-bg/80">
            <span className="font-display italic text-base md:text-xl text-text-primary tracking-tighter">
              JA
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`px-4 py-2 rounded-full text-base font-body tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'text-text-primary bg-white/20 font-bold shadow-inner'
                    : 'text-text-primary/75 hover:text-text-primary hover:bg-white/12'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* CTA Button — Say hi ↗ (Desktop) */}
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, '#contact')}
          className="hidden sm:inline-flex glass-shimmer relative items-center gap-2 px-5 py-2.5 rounded-full text-base font-bold font-body text-text-primary overflow-hidden group accent-border hover:scale-105 transition-transform"
        >
          <span className="relative z-10 flex items-center gap-1.5">
            Say hi
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </a>

        {/* Mobile Hamburger Menu Toggle Button (44x44px Touch Target) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden touch-target rounded-full bg-stroke/60 border border-white/15 text-text-primary transition-colors focus:outline-none ml-auto"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Full-Screen Glassmorphism Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="pointer-events-auto fixed inset-0 z-50 bg-bg/95 backdrop-blur-3xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            {/* Drawer Top Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/15">
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, '#home')}
                className="flex items-center gap-3"
              >
                <div className="w-11 h-11 rounded-full accent-gradient p-[2px]">
                  <div className="w-full h-full bg-bg rounded-full flex items-center justify-center">
                    <span className="font-display italic text-lg text-white">JA</span>
                  </div>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display italic text-xl text-white">Joyal Jobai</span>
                  <span className="text-xs text-[#89AACC] font-body uppercase tracking-widest font-semibold">
                    AI/ML & Full-Stack
                  </span>
                </div>
              </a>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="touch-target rounded-full bg-surface border border-white/20 text-white"
                aria-label="Close Navigation Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Touch-Friendly Links Grid (Large 48px+ touch targets) */}
            <div className="flex flex-col space-y-3 my-auto py-8">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`min-h-[52px] px-6 py-3.5 rounded-2xl text-2xl font-display italic transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-stroke text-white border border-white/20'
                        : 'text-text-primary/75 hover:text-white hover:bg-stroke/40'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <span className="w-3 h-3 rounded-full accent-gradient" />
                    ) : (
                      <ArrowUpRight className="w-5 h-5 text-muted opacity-50" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Bottom Contact CTA in Drawer */}
            <div className="pt-6 border-t border-white/15 flex flex-col space-y-4">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="min-h-[52px] flex items-center justify-center gap-2 rounded-full accent-gradient text-bg font-body font-bold text-lg shadow-xl"
              >
                <span>Say hi ↗</span>
              </a>

              <div className="flex items-center justify-between text-xs text-muted font-body">
                <span>Ernakulam, Kerala, India</span>
                <span className="text-[#89AACC]">joyaljobai369@gmail.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
