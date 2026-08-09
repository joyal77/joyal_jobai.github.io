import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Calendar, ShieldCheck } from 'lucide-react';
import { certificationsList } from '../../data/portfolioData';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';

export default function Certifications() {
  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Verified Training"
          title="Certifications & Specializations"
          subtitle="Industry-recognized technical certifications in Artificial Intelligence, Python programming, and Full-Stack Java development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificationsList.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="p-6 sm:p-8 h-full flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono-code text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{cert.period}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-bold text-cyan-400 font-mono-code mb-4">
                    Issuer: {cert.issuer}
                  </p>

                  <div className="space-y-2 mb-6">
                    {cert.skills.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center space-x-1 text-emerald-400 font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verified Credential</span>
                  </span>
                  <span className="font-mono-code text-[11px]">Cozmek / Archon</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
