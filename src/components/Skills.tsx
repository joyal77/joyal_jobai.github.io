import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Layout, Server, Brain, Database, Network } from 'lucide-react';
import { portfolio } from '../data/portfolio';

type SkillTab = 'all' | 'languages' | 'frontend' | 'backend' | 'aiMl' | 'databases' | 'networkingSystems';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SkillTab>('all');

  const tabs = [
    { id: 'all', label: 'All Skills', icon: Sparkles },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'aiMl', label: 'AI & ML', icon: Brain },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'networkingSystems', label: 'Systems & Networks', icon: Network },
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return [
        ...portfolio.skills.languages.map((s) => ({ ...s, cat: 'Languages' })),
        ...portfolio.skills.frontend.map((s) => ({ ...s, cat: 'Frontend' })),
        ...portfolio.skills.backend.map((s) => ({ ...s, cat: 'Backend' })),
        ...portfolio.skills.aiMl.map((s) => ({ ...s, cat: 'AI & ML' })),
        ...portfolio.skills.databases.map((s) => ({ ...s, cat: 'Databases' })),
        ...portfolio.skills.networkingSystems.map((s) => ({ ...s, cat: 'Systems & Networks' })),
      ];
    }
    const catMap: Record<string, string> = {
      languages: 'Languages',
      frontend: 'Frontend',
      backend: 'Backend',
      aiMl: 'AI & ML',
      databases: 'Databases',
      networkingSystems: 'Systems & Networks',
    };
    const key = activeTab as keyof typeof portfolio.skills;
    return portfolio.skills[key].map((s) => ({ ...s, cat: catMap[activeTab] }));
  };

  const currentSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-20 sm:py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10 overflow-hidden">
      {/* Motion Graphics: Slide in from RIGHT on Scroll */}
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col space-y-12 sm:space-y-16"
      >
        {/* Section Header */}
        <div className="flex flex-col space-y-3">
          <span className="text-xs sm:text-base uppercase tracking-[0.25em] text-[#89AACC] font-body font-bold">
            02 / CORE CAPABILITIES
          </span>
          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold text-text-primary">
            Technical <span className="text-[#89AACC]">skills</span>
          </h2>
        </div>

        {/* SINGLE COMBINED GLASSMORPHIC BOX */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 60 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card glass-shimmer relative w-full rounded-3xl p-6 sm:p-10 md:p-12 border border-white/30 backdrop-blur-3xl shadow-2xl flex flex-col space-y-8 overflow-hidden"
        >
          {/* Header Bar inside Single Box */}
          <div className="flex items-center justify-between pb-4 border-b border-white/15 flex-wrap gap-3">
            <div className="flex items-center space-x-3">
              <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-2xl accent-gradient p-[2px]">
                <div className="w-full h-full bg-bg rounded-2xl flex items-center justify-center text-text-primary">
                  <Code2 className="w-4 sm:w-5 h-4 sm:h-5 text-[#89AACC]" />
                </div>
              </div>
              <h3 className="text-xl sm:text-3xl font-display font-bold text-text-primary">
                Technical Stack & Tooling
              </h3>
            </div>

            <span className="px-3.5 py-1.5 rounded-full bg-stroke/90 border border-white/15 text-xs font-body font-bold text-[#89AACC] uppercase tracking-wider">
              {currentSkills.length} Technologies
            </span>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none flex-wrap">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as SkillTab)}
                  className={`touch-target px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-body font-bold transition-all flex items-center gap-2 border ${
                    isActive
                      ? 'bg-text-primary text-bg border-white shadow-xl scale-105'
                      : 'bg-stroke/70 text-text-primary/80 border-white/15 hover:bg-stroke hover:text-white'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Grid of Skill Pills inside Single Box */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 pt-2">
            {currentSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                className="px-4 py-3 sm:px-5 sm:py-4 rounded-2xl bg-bg/85 border border-white/20 hover:border-[#89AACC] transition-all flex flex-col items-center justify-center text-center space-y-1 group shadow-md"
              >
                <span className="text-xs font-body uppercase font-bold text-[#89AACC] tracking-wider opacity-80">
                  {skill.cat}
                </span>
                <span className="text-sm sm:text-base font-body font-bold text-text-primary group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
