import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { SectionVideo } from './SectionVideo';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-36 px-4 md:px-8 max-w-7xl mx-auto z-10 my-12 rounded-3xl overflow-hidden">
      {/* Dedicated Section Video Background */}
      <SectionVideo
        src="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8"
        overlayClass="bg-black/60 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex flex-col space-y-12 sm:space-y-16"
      >
        {/* Section Header */}
        <div className="flex flex-col space-y-3">
          <span className="text-xs sm:text-base uppercase tracking-[0.25em] text-[#89AACC] font-body font-bold">
            04 / ACADEMIC & CERTIFICATIONS
          </span>
          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold text-text-primary">
            Education & <span className="text-[#89AACC]">Timeline</span>
          </h2>
        </div>

        {/* Academic Degrees Timeline */}
        <div className="relative pl-4 sm:pl-8 border-l border-white/20 space-y-8 sm:space-y-12">
          {portfolio.education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[25px] sm:-left-[41px] top-1.5 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#89AACC] border-4 border-bg group-hover:scale-125 transition-transform" />

              <div className="glass-card glass-shimmer p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-stroke/85 text-xs font-body font-bold text-[#89AACC]">
                    {edu.period} • {edu.status}
                  </span>
                  {edu.university && (
                    <span className="text-xs text-muted font-body font-bold">
                      {edu.university}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-3xl font-display font-bold text-text-primary">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-text-primary/80 font-body">
                    <Building2 className="w-4 h-4 text-[#89AACC]" />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-base text-text-primary/85 leading-relaxed font-body">
                  {edu.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SINGLE COMBINED CERTIFICATIONS BOX */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card glass-shimmer relative w-full rounded-3xl p-6 sm:p-10 md:p-12 border border-white/30 backdrop-blur-3xl shadow-2xl flex flex-col space-y-6 overflow-hidden mt-8"
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/15 flex-wrap gap-3">
            <div className="flex items-center space-x-3">
              <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-2xl accent-gradient p-[2px]">
                <div className="w-full h-full bg-bg rounded-2xl flex items-center justify-center text-text-primary">
                  <Award className="w-4 sm:w-5 h-4 sm:h-5 text-[#89AACC]" />
                </div>
              </div>
              <h3 className="text-xl sm:text-3xl font-display font-bold text-text-primary">
                Professional Certifications & Credentials
              </h3>
            </div>

            <span className="px-3.5 py-1.5 rounded-full bg-stroke/90 border border-white/15 text-xs font-body font-bold text-[#89AACC] uppercase tracking-wider">
              {portfolio.certifications.length} Certified Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {portfolio.certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-bg/85 border border-white/20 space-y-4 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-stroke/80 text-xs font-body font-bold text-[#89AACC]">
                    {cert.period}
                  </span>
                  <span className="text-xs text-muted font-body font-bold">
                    {cert.issuer}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-display font-bold text-text-primary">
                  {cert.title}
                </h4>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/15">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-lg bg-stroke text-[11px] font-body font-bold text-text-primary"
                    >
                      {s}
                    </span>
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
