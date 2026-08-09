import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Compass, Users, CheckCircle } from 'lucide-react';
import { currentFocusData, softSkillsList } from '../../data/portfolioData';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';

export default function CurrentFocus() {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Active Roadmap"
          title="Current Focus & Soft Skills"
          subtitle="Continuous learning direction, technical building targets, and professional collaboration capabilities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Currently Building */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="h-full p-6 sm:p-8 text-left">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-mono-code">
                  Currently Building
                </h3>
              </div>

              <div className="space-y-3">
                {currentFocusData.building.map((item) => (
                  <div key={item} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center space-x-3 text-xs sm:text-sm text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Currently Exploring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlassCard className="h-full p-6 sm:p-8 text-left">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-mono-code">
                  Currently Exploring
                </h3>
              </div>

              <div className="space-y-3">
                {currentFocusData.exploring.map((item) => (
                  <div key={item} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center space-x-3 text-xs sm:text-sm text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Professional Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassCard className="h-full p-6 sm:p-8 text-left">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-indigo-400">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-mono-code">
                  Soft Skills
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {softSkillsList.map((skill) => (
                  <div key={skill} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center space-x-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
