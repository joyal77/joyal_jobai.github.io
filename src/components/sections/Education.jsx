import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, Building2 } from 'lucide-react';
import { educationList } from '../../data/portfolioData';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Academic Background"
          title="Education & Academic Timeline"
          subtitle="Progressive academic journey in Computer Applications, Computer Science, and Advanced Software Engineering."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Bar */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-500 to-indigo-500 transform sm:-translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {educationList.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 w-5 h-5 rounded-full bg-slate-950 border-4 border-cyan-400 transform sm:-translate-x-1/2 z-10 shadow-lg hidden sm:block" />

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <GlassCard className="p-6 text-left relative overflow-hidden">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 font-mono-code">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </span>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800 font-mono-code">
                          {item.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1">
                        {item.degree}
                      </h3>

                      <div className="flex items-center space-x-2 text-xs text-slate-300 font-medium mb-3">
                        <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{item.institution}</span>
                        {item.university && (
                          <span className="text-slate-400">({item.university})</span>
                        )}
                        {item.board && (
                          <span className="text-slate-400">({item.board})</span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {item.details}
                      </p>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
