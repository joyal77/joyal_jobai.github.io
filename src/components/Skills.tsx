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
    { id: 'networkingSystems', label: 'Networking & Systems', icon: Network },
  ];

  const skillGroups = [
    { category: 'languages', title: 'Programming Languages', items: portfolio.skills.languages },
    { category: 'frontend', title: 'Frontend Technologies', items: portfolio.skills.frontend },
    { category: 'backend', title: 'Backend & APIs', items: portfolio.skills.backend },
    { category: 'aiMl', title: 'AI & Machine Learning', items: portfolio.skills.aiMl },
    { category: 'databases', title: 'Databases', items: portfolio.skills.databases },
    { category: 'networkingSystems', title: 'Networking & Infrastructure', items: portfolio.skills.networkingSystems },
  ];

  const filteredGroups = activeCategory === 'all'
    ? skillGroups
    : skillGroups.filter((g) => g.category === activeCategory);

  return (
    <section id="skills" className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="flex flex-col space-y-20"
      >
        {/* Header (+3 size boost) */}
        <div className="flex flex-col space-y-5">
          <span className="text-base md:text-lg uppercase tracking-[0.3em] text-[#89AACC] font-body font-bold">
            02 / TECH STACK & CAPABILITIES
          </span>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic text-text-primary">
            Technical <span className="text-[#89AACC]">skills</span>
          </h2>
        </div>

        {/* Filter Pills Tabs — Glass Shimmer & Boosted +3 Font Size */}
        <div className="flex flex-wrap gap-4 pb-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`glass-shimmer flex items-center space-x-3 px-6 py-3.5 rounded-full text-base md:text-lg font-body tracking-wide font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-text-primary text-bg font-bold shadow-xl shadow-white/15 scale-105'
                    : 'bg-surface/85 border border-white/20 text-text-primary/80 hover:text-text-primary hover:border-white/35'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Groups Grid with Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {filteredGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
              className="glass-card p-9 rounded-3xl flex flex-col space-y-7 shadow-2xl"
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-body font-bold uppercase tracking-widest text-[#89AACC] border-b border-white/15 pb-4 flex items-center justify-between">
                <span>{group.title}</span>
                <span className="text-sm text-text-primary/70 font-semibold">{group.items.length} skills</span>
              </h3>

              <div className="flex flex-wrap gap-3.5 pt-1">
                {group.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="glass-shimmer group relative px-5 py-3 rounded-2xl bg-stroke/70 border border-white/15 text-base md:text-lg font-body font-semibold text-text-primary hover:border-[#89AACC] hover:shadow-2xl transition-all cursor-default flex items-center space-x-3"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-stroke group-hover:bg-[#89AACC] transition-colors" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
