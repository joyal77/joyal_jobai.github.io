import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import FeaturedProject from './components/sections/FeaturedProject';
import OtherProjects from './components/sections/OtherProjects';
import Skills from './components/sections/Skills';
import Networking from './components/sections/Networking';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import CurrentFocus from './components/sections/CurrentFocus';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <OtherProjects />
        <Networking />
        <Education />
        <Certifications />
        <CurrentFocus />
        <Contact />
      </main>

      {/* Modern Footer */}
      <Footer />
    </div>
  );
}
