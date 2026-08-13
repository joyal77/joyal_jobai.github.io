import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Server, ArrowUpRight, AlertCircle } from 'lucide-react';
import { portfolio, Project } from '../data/portfolio';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const aiProjects = portfolio.projects.filter((p) => p.category === 'ai');
  const webProjects = portfolio.projects.filter((p) => p.category === 'web');

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="flex flex-col space-y-12 sm:space-y-16"
      >
        {/* Section Header */}
        <div className="flex flex-col space-y-3">
          <span className="text-xs sm:text-base uppercase tracking-[0.25em] text-[#89AACC] font-body font-bold">
            03 / PORTFOLIO & SYSTEMS
          </span>
          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic text-text-primary">
            Featured <span className="text-[#89AACC]">projects</span>
          </h2>
        </div>

        {/* Group 1: AI & Machine Learning Systems (SINGLE CONTAINER BOX) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card glass-shimmer relative w-full rounded-3xl p-6 sm:p-10 md:p-12 border border-white/30 backdrop-blur-3xl shadow-2xl flex flex-col space-y-6 overflow-hidden"
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/15 flex-wrap gap-3">
            <div className="flex items-center space-x-3">
              <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-2xl accent-gradient p-[2px]">
                <div className="w-full h-full bg-bg rounded-2xl flex items-center justify-center text-text-primary">
                  <Cpu className="w-4 sm:w-5 h-4 sm:h-5 text-[#89AACC]" />
                </div>
              </div>
              <h3 className="text-xl sm:text-3xl font-display italic text-text-primary">
                AI & Machine Learning Platforms
              </h3>
            </div>

            <span className="px-3.5 py-1.5 rounded-full bg-stroke/90 border border-white/15 text-xs font-body font-bold text-[#89AACC] uppercase tracking-wider">
              FastAPI • XGBoost • SHAP
            </span>
          </div>

          {/* AI Project Cards inside Single Box */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
            {aiProjects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`project-container-${project.id}`}
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`${project.span} glass-card glass-shimmer group relative rounded-2xl p-5 sm:p-7 flex flex-col justify-between space-y-4 border border-white/20 hover:border-[#89AACC] cursor-pointer shadow-xl`}
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-stroke/85 text-[11px] sm:text-xs font-body text-[#89AACC] uppercase font-bold tracking-wider">
                    {project.type}
                  </span>
                  <div className="touch-target w-9 h-9 rounded-full bg-stroke/85 flex items-center justify-center text-text-primary group-hover:accent-gradient group-hover:text-bg transition-colors shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-body uppercase tracking-widest text-[#89AACC] font-bold block">
                    {project.subtitle}
                  </span>
                  <motion.h4
                    layoutId={`project-title-${project.id}`}
                    className="text-xl sm:text-3xl font-display italic text-text-primary group-hover:text-white transition-colors"
                  >
                    {project.title}
                  </motion.h4>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/15 text-xs font-body uppercase tracking-widest text-[#89AACC] font-bold">
                  <span>View Case Study</span>
                  <span>↗</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Group 2: Enterprise & Web Systems (SINGLE CONTAINER BOX) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card glass-shimmer relative w-full rounded-3xl p-6 sm:p-10 md:p-12 border border-white/30 backdrop-blur-3xl shadow-2xl flex flex-col space-y-6 overflow-hidden"
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/15 flex-wrap gap-3">
            <div className="flex items-center space-x-3">
              <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-2xl accent-gradient p-[2px]">
                <div className="w-full h-full bg-bg rounded-2xl flex items-center justify-center text-text-primary">
                  <Server className="w-4 sm:w-5 h-4 sm:h-5 text-[#89AACC]" />
                </div>
              </div>
              <h3 className="text-xl sm:text-3xl font-display italic text-text-primary">
                Enterprise & Web Platforms
              </h3>
            </div>

            <span className="px-3.5 py-1.5 rounded-full bg-stroke/90 border border-white/15 text-xs font-body font-bold text-[#89AACC] uppercase tracking-wider">
              Python • PHP • Android • MySQL
            </span>
          </div>

          {/* Web Project Cards inside Single Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {webProjects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`project-container-${project.id}`}
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass-card glass-shimmer group relative rounded-2xl p-5 sm:p-7 flex flex-col justify-between space-y-4 border border-white/20 hover:border-[#89AACC] cursor-pointer shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-stroke/85 text-[11px] sm:text-xs font-body text-[#89AACC] uppercase font-bold tracking-wider">
                    {project.type}
                  </span>
                  <div className="touch-target w-9 h-9 rounded-full bg-stroke/85 flex items-center justify-center text-text-primary group-hover:accent-gradient group-hover:text-bg transition-colors shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-body uppercase tracking-widest text-[#89AACC] font-bold block">
                    {project.subtitle}
                  </span>
                  <motion.h4
                    layoutId={`project-title-${project.id}`}
                    className="text-xl sm:text-3xl font-display italic text-text-primary group-hover:text-white transition-colors"
                  >
                    {project.title}
                  </motion.h4>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/15 text-xs font-body uppercase tracking-widest text-[#89AACC] font-bold">
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
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-surface/95 border border-white/25 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col backdrop-blur-3xl"
            >
              {/* Header */}
              <div className="relative p-6 sm:p-10 border-b border-white/20 bg-gradient-to-r from-surface via-stroke/50 to-surface flex-shrink-0 space-y-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="touch-target absolute top-5 right-5 p-2.5 rounded-full bg-bg border border-white/25 text-white hover:bg-white hover:text-black transition-colors z-20 shadow-xl"
                  aria-label="Close Project Modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stroke/90 border border-white/20 text-xs font-body uppercase tracking-wider text-[#89AACC] font-bold">
                    {selectedProject.type}
                  </span>
                  <span className="text-xs text-muted font-body font-medium">
                    {selectedProject.subtitle}
                  </span>
                </div>

                <motion.h3
                  layoutId={`project-title-${selectedProject.id}`}
                  className="text-3xl sm:text-5xl font-display italic text-text-primary"
                >
                  {selectedProject.title}
                </motion.h3>
              </div>

              {/* Scrollable Content Body */}
              <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-body">
                <p className="text-base sm:text-xl text-text-primary leading-relaxed font-body">
                  {selectedProject.longDescription}
                </p>

                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-bg/80 border border-white/15 space-y-2">
                    <h4 className="text-xs uppercase tracking-widest text-text-primary font-bold">
                      The Problem
                    </h4>
                    <p className="text-xs sm:text-base text-text-primary/85 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-bg/80 border border-white/15 space-y-2">
                    <h4 className="text-xs uppercase tracking-widest text-[#89AACC] font-bold">
                      The Solution
                    </h4>
                    <p className="text-xs sm:text-base text-text-primary/85 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-widest text-[#89AACC] font-bold">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-start space-x-2 text-xs sm:text-base text-text-primary font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#89AACC] mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-widest text-[#89AACC] font-bold">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-xl bg-stroke text-xs sm:text-sm font-body font-bold text-text-primary border border-white/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/20">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-shimmer touch-target inline-flex items-center gap-2 px-6 py-3 rounded-full bg-text-primary text-bg font-body text-xs sm:text-base font-bold hover:scale-105 transition-transform"
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
                      className="glass-shimmer touch-target inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/25 bg-surface text-text-primary font-body text-xs sm:text-base font-bold hover:scale-105 transition-transform"
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
