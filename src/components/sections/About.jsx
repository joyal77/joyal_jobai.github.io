import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Network, Database } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';
import { personalData, aboutCards } from '../../data/portfolioData';

const cardIcons = {
  Brain: Brain,
  Code: Code,
  Network: Network,
  Database: Database
};

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="About Me"
          title="Bridging AI Intelligence & Systems Engineering"
          subtitle="A solid foundation in networking infrastructure, database architectures, full-stack web applications, and predictive machine learning models."
        />

        {/* Polished Biography Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800 bg-slate-950/70 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
          <h3 className="text-lg font-bold text-white mb-3 font-mono-code flex items-center space-x-2">
            <span className="text-cyan-400">#</span>
            <span>Professional Profile</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {personalData.bio}
          </p>
        </motion.div>

        {/* 4 Core Focus Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutCards.map((card, idx) => {
            const Icon = cardIcons[card.icon] || Code;

            return (
              <GlassCard
                key={card.id}
                className="flex flex-col items-start text-left h-full"
              >
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-cyan-400 mb-4 shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {card.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
