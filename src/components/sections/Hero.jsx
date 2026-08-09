import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Mail, ChevronRight, Terminal, Sparkles } from 'lucide-react';
import { personalData, heroBadges } from '../../data/portfolioData';
import Badge from '../common/Badge';
import AiDataPipeline from '../visualizations/AiDataPipeline';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>MCA Student • Recruiter-Ready Portfolio 2026</span>
            </div>

            {/* Main Name Heading */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                {personalData.name}
              </h1>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mt-2 gradient-text-emerald-cyan font-mono-code">
                {personalData.title}
              </h2>
            </div>

            {/* Bio Description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              "{personalData.intro}"
            </p>

            {/* Badges Pill Row */}
            <div className="flex flex-wrap gap-2 pt-2">
              {heroBadges.map((badge, idx) => (
                <Badge key={badge} variant={idx % 2 === 0 ? 'cyan' : 'emerald'}>
                  {badge}
                </Badge>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 rounded-xl shadow-lg shadow-cyan-500/10 transition-all duration-200 transform hover:scale-[1.02]"
              >
                <span>View Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={personalData.resumeUrl}
                download
                className="inline-flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all duration-200 hover:border-cyan-500/50"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Premium AI Data Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <AiDataPipeline />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
