import React from 'react';
import { HLSVideo } from '../components/HLSVideo';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';

export const Index: React.FC = () => {
  return (
    <main className="relative bg-black h-screen w-screen flex flex-col overflow-hidden selection:bg-white selection:text-black shrink-0">
      {/* Background Video */}
      <HLSVideo />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
    </main>
  );
};
