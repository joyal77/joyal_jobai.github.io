import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import { Code, Terminal, Cpu, Database, Network, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Wrench },
    { id: 'languages', label: 'Languages', icon: Code },
    { id: 'frontend', label: 'Frontend', icon: Terminal },
    { id: 'backend', label: 'Backend & APIs', icon: Cpu },
    { id: 'aiMl', label: 'AI / Machine Learning', icon: Cpu },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'networkingSystems', label: 'Networking & Infrastructure', icon: Network },
  ];

  const skillGroups = [
    { category: 'languages', title: 'Languages', items: portfolio.skills.languages },
    { category: 'frontend', title: 'Frontend', items: portfolio.skills.frontend },
    { category: 'backend', title: 'Backend & APIs', items: portfolio.skills.backend },
    { category: 'aiMl', title: 'AI / Machine Learning', items: portfolio.skills.aiMl },
    { category: 'databases', title: 'Databases', items: portfolio.skills.databases },
    { category: 'networkingSystems', title: 'Networking & Systems', items: portfolio.skills.networkingSystems },
  ];

  const filteredGroups = activeCategory === 'all'
    ? skillGroups
    : skillGroups.filter((g) => g.category === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="flex flex-col space-y-12 sm:space-y-16"
      >
        {/* Header */}
        <div className="flex flex-col space-y-3">
          <span className="text-xs sm:text-base uppercase tracking-[0.25em] text-[#89AACC] font-body font-bold">
            02 / TECH STACK & CAPABILITIES
          </span>
          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic text-text-primary">
            Technical <span className="text-[#89AACC]">skills</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 sm:gap-4 pb-1 overflow-x-auto no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`glass-shimmer flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-base font-body tracking-wide font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-text-primary text-bg font-bold shadow-xl scale-105'
                    : 'bg-surface/85 border border-white/20 text-text-primary/80 hover:text-text-primary'
                }`}
              >
                <Icon className="w-3.5 sm:w-4.5 h-3.5 sm:h-4.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIdx * 0.06 }}
              className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col space-y-5 shadow-xl"
            >
              <h3 className="text-sm sm:text-lg font-body font-bold uppercase tracking-wider text-[#89AACC] border-b border-white/15 pb-3 flex items-center justify-between">
                <span>{group.title}</span>
                <span className="text-xs text-text-primary/70">{group.items.length} skills</span>
              </h3>

              <div className="flex flex-wrap gap-2 pt-1">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-shimmer px-3.5 py-1.5 rounded-xl bg-stroke/70 border border-white/15 text-xs sm:text-base font-body font-semibold text-text-primary flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#89AACC]" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
