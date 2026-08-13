import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Start', href: '#home' },
  { label: 'Story', href: '#about' },
  { label: 'Rates', href: '#skills' },
  { label: 'Benefits', href: '#projects' },
  { label: 'FAQ', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="w-full max-w-7xl mx-auto px-8 py-6 flex items-center justify-between relative z-50">
      {/* Brand Name on the left */}
      <a
        href="#home"
        onClick={(e) => scrollToSection(e, '#home')}
        className="text-2xl font-semibold text-text-primary tracking-tight"
      >
        Joyal Jobai
      </a>

      {/* Desktop Menu Items (hidden on mobile, visible md:flex) */}
      <nav className="hidden md:flex items-center space-x-8">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => scrollToSection(e, item.href)}
            className="text-text-primary/90 hover:text-white transition-colors text-base font-medium"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Hamburger Menu Button using Lucide React icons */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 rounded-lg text-text-primary hover:text-white transition-colors focus:outline-none"
        aria-label="Toggle Navigation Menu"
      >
        {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Mobile Dropdown Menu with white/95 or glass opacity, backdrop blur, rounded corners, shadow */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-6 right-6 bg-surface/95 border border-white/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl flex flex-col space-y-4 md:hidden z-50 transition-colors">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-lg font-medium text-text-primary hover:text-white transition-colors py-2 px-3 rounded-xl hover:bg-stroke/40"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
