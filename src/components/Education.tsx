import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-28 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="flex flex-col space-y-16"
      >
        {/* Section Header */}
        <div className="flex flex-col space-y-4">
          <span className="text-sm md:text-base uppercase tracking-[0.3em] text-[#89AACC] font-body font-semibold">
            05 / ACADEMIC BACKGROUND
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display italic text-text-primary">
            Education & <span className="text-[#89AACC]">credentials</span>
          </h2>
        </div>

        {/* Education Credentials Grid — Boosted Font Sizes (+12px scale) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolio.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 md:p-10 rounded-3xl bg-surface/85 border border-white/15 hover:border-white/30 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between space-y-8 group hover:-translate-y-1.5 shadow-2xl"
            >
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-stroke/60 flex items-center justify-center text-[#89AACC] group-hover:bg-[#4E85BF] group-hover:text-bg transition-colors">
                  <BookOpen className="w-7 h-7" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-4 py-1.5 rounded-full bg-stroke/70 text-xs md:text-sm font-body text-text-primary/70 uppercase tracking-wider font-medium">
                    {edu.period}
                  </span>
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-body uppercase tracking-wider font-bold ${
                      edu.status === 'Enrolled'
                        ? 'bg-[#4E85BF]/25 text-[#89AACC]'
                        : 'bg-emerald-500/20 text-emerald-400'
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl md:text-4xl font-display italic text-text-primary group-hover:text-[#89AACC] transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-base md:text-lg font-body text-text-primary/90 font-semibold">
                  {edu.institution}
                </p>
                {(edu.university || edu.board) && (
                  <p className="text-sm md:text-base text-muted font-body">
                    {edu.university || edu.board}
                  </p>
                )}
              </div>

              <p className="text-base md:text-lg text-text-primary/80 font-body leading-relaxed pt-4 border-t border-stroke/60">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Highlight Bar — Boosted Font Sizes */}
        <div className="p-8 md:p-12 rounded-3xl bg-surface/85 border border-white/20 backdrop-blur-2xl space-y-8 shadow-2xl">
          <div className="flex items-center space-x-4">
            <Award className="w-8 h-8 text-[#89AACC]" />
            <h3 className="text-3xl md:text-4xl font-display italic text-text-primary">
              Industry Certifications & Professional Training
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-bg/80 border border-white/10 flex flex-col space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-lg md:text-xl font-body font-semibold text-text-primary">
                    {cert.title}
                  </h4>
                  <span className="text-xs md:text-sm text-muted font-body font-medium">{cert.period}</span>
                </div>
                <p className="text-sm md:text-base text-[#89AACC] font-body font-medium">Issuer: {cert.issuer}</p>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-xl bg-stroke/70 text-xs md:text-sm font-body text-text-primary font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
