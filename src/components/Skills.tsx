import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import { Code, Terminal, Cpu, Database, Network, Wrench, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: Wrench },
    { id: 'languages', label: 'Languages', icon: Code },
    { id: 'frontend', label: 'Frontend', icon: Terminal },
    { id: 'backend', label: 'Backend & APIs', icon: Cpu },
    { id: 'aiMl', label: 'AI & ML', icon: Cpu },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'networkingSystems', label: 'Networking', icon: Network },
  ];

  const skillGroups = [
    { category: 'languages', title: 'Languages', items: portfolio.skills.languages },
    { category: 'frontend', title: 'Frontend', items: portfolio.skills.frontend },
    { category: 'backend', title: 'Backend & APIs', items: portfolio.skills.backend },
    { category: 'aiMl', title: 'AI & Machine Learning', items: portfolio.skills.aiMl },
    { category: 'databases', title: 'Databases', items: portfolio.skills.databases },
    { category: 'networkingSystems', title: 'Networking & Systems', items: portfolio.skills.networkingSystems },
  ];

  const filteredGroups = activeCategory === 'all'
    ? skillGroups
    : skillGroups.filter((g) => g.category === activeCategory);

  const totalSkillsCount = skillGroups.reduce((acc, curr) => acc + curr.items.length, 0);

  return (
    <section id="skills" className="py-20 sm:py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="flex flex-col space-y-10 sm:space-y-14"
      >
        {/* Section Header */}
        <div className="flex flex-col space-y-3">
          <span className="text-xs sm:text-base uppercase tracking-[0.25em] text-[#89AACC] font-body font-bold">
            02 / TECH STACK & CAPABILITIES
          </span>
          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic text-text-primary">
            Technical <span className="text-[#89AACC]">skills</span>
          </h2>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 pb-1 overflow-x-auto no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`glass-shimmer flex items-center space-x-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-body tracking-wide font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-text-primary text-bg font-bold shadow-xl scale-105'
                    : 'bg-surface/85 border border-white/20 text-text-primary/80 hover:text-text-primary'
                }`}
              >
                <Icon className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* SINGLE COMBINED SKILLS BOX */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card glass-shimmer relative w-full rounded-3xl p-6 sm:p-10 md:p-12 border border-white/30 backdrop-blur-3xl shadow-2xl flex flex-col space-y-8 overflow-hidden"
        >
          {/* Header Bar inside Single Box */}
          <div className="flex items-center justify-between pb-4 border-b border-white/15 flex-wrap gap-3">
            <div className="flex items-center space-x-3">
              <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-2xl accent-gradient p-[2px]">
                <div className="w-full h-full bg-bg rounded-2xl flex items-center justify-center text-text-primary">
                  <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-[#89AACC]" />
                </div>
              </div>
              <h3 className="text-xl sm:text-3xl font-display italic text-text-primary">
                Technical Stack & Tooling
              </h3>
            </div>

            <span className="px-3.5 py-1.5 rounded-full bg-stroke/90 border border-white/15 text-xs font-body font-bold text-[#89AACC] uppercase tracking-wider">
              {activeCategory === 'all' ? `${totalSkillsCount} Core Skills` : `${filteredGroups.reduce((acc, curr) => acc + curr.items.length, 0)} Skills`}
            </span>
          </div>

          {/* Combined Skills Items Container */}
          <div className="space-y-8">
            {filteredGroups.map((group) => (
              <div key={group.category} className="space-y-3">
                <div className="flex items-center space-x-2 text-xs sm:text-sm font-body uppercase tracking-widest text-[#89AACC] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#89AACC]" />
                  <span>{group.title}</span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className="glass-shimmer group relative px-3.5 sm:px-4 py-2 rounded-xl bg-stroke/70 border border-white/15 text-xs sm:text-base font-body font-semibold text-text-primary hover:border-[#89AACC] hover:shadow-xl transition-all cursor-default flex items-center space-x-2"
                    >
                      <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-stroke group-hover:bg-[#89AACC] transition-colors" />
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
