import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Server } from 'lucide-react';
import { portfolio, Project } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';

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
        className="flex flex-col space-y-16 sm:space-y-24"
      >
        {/* Section Header */}
        <div className="flex flex-col space-y-3">
          <span className="text-xs sm:text-base uppercase tracking-[0.25em] text-[#89AACC] font-body font-bold">
            03 / PORTFOLIO
          </span>
          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic text-text-primary">
            Featured <span className="text-[#89AACC]">projects</span>
          </h2>
        </div>

        {/* Group 1: AI & Machine Learning */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 border-b border-white/20 pb-4">
            <div className="p-2.5 rounded-xl bg-stroke/70 text-[#89AACC]">
              <Cpu className="w-5 sm:w-6 h-5 sm:h-6" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-4xl font-display italic text-text-primary">
                AI & Machine Learning
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {aiProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        </div>

        {/* Group 2: Enterprise Web Systems */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center space-x-3 border-b border-white/20 pb-4">
            <div className="p-2.5 rounded-xl bg-stroke/70 text-[#89AACC]">
              <Server className="w-5 sm:w-6 h-5 sm:h-6" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-4xl font-display italic text-text-primary">
                Enterprise & Web Systems
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {webProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        </div>
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
                  className="touch-target absolute top-5 right-5 p-2.5 rounded-full bg-bg/80 border border-white/25 text-white hover:bg-white hover:text-black transition-colors z-20 shadow-xl"
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
