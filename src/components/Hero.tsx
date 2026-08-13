import React from 'react';
import { portfolio } from '../data/portfolio';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Content Wrapper */}
      <div className="relative h-full flex flex-col z-10">
        {/* Main Content Area */}
        <div className="flex-1 flex items-center justify-center -mt-20 md:-mt-32 px-4">
          <div className="text-center flex flex-col items-center max-w-4xl mx-auto">
            {/* Small uppercase label */}
            <span className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4 block">
              {portfolio.title.toUpperCase()}
            </span>

            {/* Large two-line heading with overlapping effect */}
            <div className="flex flex-col items-center select-none mb-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal text-gray-400 leading-none tracking-tighter">
                Premium.
              </h1>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#89AACC] leading-none tracking-tighter -mt-3 md:-mt-4 lg:-mt-5">
                Accessible.
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl leading-relaxed font-body">
              Your dedication deserves recognition. Building intelligent, data-driven applications & enterprise systems.
            </p>

            {/* Two call-to-action buttons (gap-4, centered) */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-2.5 rounded-full bg-gray-300 text-gray-900 font-medium hover:bg-gray-400 transition-colors shadow-lg"
              >
                Discover
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-2.5 rounded-full text-white bg-[#202A36] hover:bg-[#1a2229] transition-colors font-medium border border-white/20 shadow-lg"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
