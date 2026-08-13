import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Experience } from '../components/Experience';
import { Explorations } from '../components/Explorations';
import { Stats } from '../components/Stats';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { HLSVideo } from '../components/HLSVideo';

export const Index: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-bg text-text-primary overflow-x-hidden selection:bg-[#4E85BF] selection:text-white">
      {/* Fixed Full-Screen HLS Background Video Animation */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <HLSVideo
          overlayClass="bg-black/55"
          showBottomGradient={false}
          className="fixed inset-0"
        />
      </div>

      {/* Ambient Grid overlay over background video */}
      <div className="fixed inset-0 halftone-overlay opacity-25 pointer-events-none z-[1]" />

      {/* Page Content */}
      <div className="relative z-10 opacity-100">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Explorations />
        <Stats />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};
