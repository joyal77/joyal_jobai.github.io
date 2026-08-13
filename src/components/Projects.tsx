import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Server, ArrowUpRight } from 'lucide-react';
import { portfolio, Project } from '../data/portfolio';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const aiProjects = portfolio.projects.filter((p) => p.category === 'ai');
  const webProjects = portfolio.projects.filter((p) => p.category === 'web');

  return (
    <section id="projects" className="py-16 sm:py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10 overflow-hidden">
      {/* Mobile-Optimized Horizontal Slide from LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col space-y-10 sm:space-y-16"
      >
        {/* Section Header */}
        <div className="flex flex-col space-y-2 sm:space-y-3">
          <span className="text-xs sm:text-base uppercase tracking-[0.25em] text-[#89AACC] font-body font-bold">
            03 / PORTFOLIO & SYSTEMS
          </span>
          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold text-text-primary">
            Featured <span className="text-[#89AACC]">projects</span>
          </h2>
        </div>

        {/* Group 1: AI & Machine Learning Systems (SINGLE CONTAINER BOX) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card glass-shimmer relative w-full rounded-3xl p-5 sm:p-10 md:p-12 border border-white/30 backdrop-blur-3xl shadow-2xl flex flex-col space-y-5 sm:space-y-6 overflow-hidden"
        >
          <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/15 flex-wrap gap-2 sm:gap-3">
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <div className="w-8 sm:w-11 h-8 sm:h-11 rounded-2xl accent-gradient p-[2px]">
                <div className="w-full h-full bg-bg rounded-2xl flex items-center justify-center text-text-primary">
                  <Cpu className="w-4 sm:w-5 h-4 sm:h-5 text-[#89AACC]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-3xl font-display font-bold text-text-primary">
                AI & Machine Learning Platforms
              </h3>
            </div>

            <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-stroke/90 border border-white/15 text-[11px] sm:text-xs font-body font-bold text-[#89AACC] uppercase tracking-wider">
              FastAPI • XGBoost • SHAP
            </span>
          </div>

          {/* AI Project Cards inside Single Box */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 pt-1 sm:pt-2">
            {aiProjects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`project-container-${project.id}`}
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`${project.span} glass-card glass-shimmer group relative rounded-2xl p-4 sm:p-7 flex flex-col justify-between space-y-3 sm:space-y-4 border border-white/20 hover:border-[#89AACC] cursor-pointer shadow-xl`}
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-stroke/85 text-[10px] sm:text-xs font-body text-[#89AACC] uppercase font-bold tracking-wider">
                    {project.type}
                  </span>
                  <div className="touch-target w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-stroke/85 flex items-center justify-center text-text-primary group-hover:accent-gradient group-hover:text-bg transition-colors shadow-md">
                    <ArrowUpRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  </div>
                </div>

                <div className="space-y-0.5 sm:space-y-1">
                  <span className="text-[10px] sm:text-[11px] font-body uppercase tracking-widest text-[#89AACC] font-bold block">
                    {project.subtitle}
                  </span>
                  <motion.h4
                    layoutId={`project-title-${project.id}`}
                    className="text-lg sm:text-3xl font-display font-bold text-text-primary group-hover:text-white transition-colors"
                  >
                    {project.title}
                  </motion.h4>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/15 text-[11px] sm:text-xs font-body uppercase tracking-widest text-[#89AACC] font-bold">
                  <span>View Case Study</span>
                  <span>↗</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Group 2: Enterprise & Web Systems (SINGLE CONTAINER BOX) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card glass-shimmer relative w-full rounded-3xl p-5 sm:p-10 md:p-12 border border-white/30 backdrop-blur-3xl shadow-2xl flex flex-col space-y-5 sm:space-y-6 overflow-hidden"
        >
          <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/15 flex-wrap gap-2 sm:gap-3">
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <div className="w-8 sm:w-11 h-8 sm:h-11 rounded-2xl accent-gradient p-[2px]">
                <div className="w-full h-full bg-bg rounded-2xl flex items-center justify-center text-text-primary">
                  <Server className="w-4 sm:w-5 h-4 sm:h-5 text-[#89AACC]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-3xl font-display font-bold text-text-primary">
                Enterprise & Web Platforms
              </h3>
            </div>

            <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-stroke/90 border border-white/15 text-[11px] sm:text-xs font-body font-bold text-[#89AACC] uppercase tracking-wider">
              Python • PHP • Android • MySQL
            </span>
          </div>

          {/* Web Project Cards inside Single Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-1 sm:pt-2">
            {webProjects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`project-container-${project.id}`}
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass-card glass-shimmer group relative rounded-2xl p-4 sm:p-7 flex flex-col justify-between space-y-3 sm:space-y-4 border border-white/20 hover:border-[#89AACC] cursor-pointer shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-stroke/85 text-[10px] sm:text-xs font-body text-[#89AACC] uppercase font-bold tracking-wider">
                    {project.type}
                  </span>
                  <div className="touch-target w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-stroke/85 flex items-center justify-center text-text-primary group-hover:accent-gradient group-hover:text-bg transition-colors shadow-md">
                    <ArrowUpRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  </div>
                </div>

                <div className="space-y-0.5 sm:space-y-1">
                  <span className="text-[10px] sm:text-[11px] font-body uppercase tracking-widest text-[#89AACC] font-bold block">
                    {project.subtitle}
                  </span>
                  <motion.h4
                    layoutId={`project-title-${project.id}`}
                    className="text-lg sm:text-3xl font-display font-bold text-text-primary group-hover:text-white transition-colors"
                  >
                    {project.title}
                  </motion.h4>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/15 text-[11px] sm:text-xs font-body uppercase tracking-widest text-[#89AACC] font-bold">
                  <span>View Case Study</span>
                  <span>↗</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-3xl"
            />

            <motion.div
              layoutId={`project-container-${selectedProject.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-surface/95 border border-white/25 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col backdrop-blur-3xl"
            >
              {/* Header */}
              <div className="relative p-5 sm:p-10 border-b border-white/20 bg-gradient-to-r from-surface via-stroke/50 to-surface flex-shrink-0 space-y-2 sm:space-y-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="touch-target absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-bg border border-white/25 text-white hover:bg-white hover:text-black transition-colors z-20 shadow-xl"
                  aria-label="Close Project Modal"
                >
                  <X className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>

                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-stroke/90 border border-white/20 text-[10px] sm:text-xs font-body uppercase tracking-wider text-[#89AACC] font-bold">
                    {selectedProject.type}
                  </span>
                  <span className="text-[11px] sm:text-xs text-muted font-body font-medium">
                    {selectedProject.subtitle}
                  </span>
                </div>

                <motion.h3
                  layoutId={`project-title-${selectedProject.id}`}
                  className="text-2xl sm:text-5xl font-display font-bold text-text-primary"
                >
                  {selectedProject.title}
                </motion.h3>
              </div>

              {/* Scrollable Content Body */}
              <div className="p-5 sm:p-10 overflow-y-auto space-y-6 sm:space-y-8 font-body">
                <p className="text-xs sm:text-xl text-text-primary leading-relaxed font-body">
                  {selectedProject.longDescription}
                </p>

                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-4 sm:p-5 rounded-2xl bg-bg/80 border border-white/15 space-y-1.5 sm:space-y-2">
                    <h4 className="text-[10px] sm:text-xs uppercase tracking-widest text-text-primary font-bold">
                      The Problem
                    </h4>
                    <p className="text-xs sm:text-base text-text-primary/85 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-bg/80 border border-white/15 space-y-1.5 sm:space-y-2">
                    <h4 className="text-[10px] sm:text-xs uppercase tracking-widest text-[#89AACC] font-bold">
                      The Solution
                    </h4>
                    <p className="text-xs sm:text-base text-text-primary/85 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="text-[10px] sm:text-xs uppercase tracking-widest text-[#89AACC] font-bold">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {selectedProject.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-start space-x-2 text-xs sm:text-base text-text-primary font-medium"
                      >
                        <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#89AACC] mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="text-[10px] sm:text-xs uppercase tracking-widest text-[#89AACC] font-bold">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-stroke text-xs sm:text-sm font-body font-bold text-text-primary border border-white/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/20">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-shimmer touch-target inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-text-primary text-bg font-body text-xs sm:text-base font-bold hover:scale-105 transition-transform"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub</span>
                    </a>
                  )}

                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-shimmer touch-target inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-white/25 bg-surface text-text-primary font-body text-xs sm:text-base font-bold hover:scale-105 transition-transform"
                    >
                      <ExternalLink className="w-4 h-4 text-[#89AACC]" />
                      <span>Live Site</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
