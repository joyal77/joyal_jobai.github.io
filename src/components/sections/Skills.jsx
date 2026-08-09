import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Terminal, Server, Cpu, Database, Network, HardDrive, Check, Sparkles } from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';
import SectionHeader from '../common/SectionHeader';

const categoryIcons = {
  programming: Code,
  frontend: Terminal,
  backend: Server,
  ml: Cpu,
  database: Database,
  networking: Network,
  systems: HardDrive
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Technical Expertise"
          title="Skills & Technologies"
          subtitle="Comprehensive overview of core programming languages, frameworks, machine learning libraries, database systems, and networking protocols."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 shadow-md font-bold'
                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Code;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 shadow-md font-bold'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          {filteredCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Code;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/80 bg-slate-950/70"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-mono-code">
                    {cat.name}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {cat.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900 flex items-center space-x-2 text-xs font-semibold text-slate-200 shadow-sm transition-all cursor-default"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
