import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Layers, Server } from 'lucide-react';
import { portfolio, Project } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const aiProjects = portfolio.projects.filter((p) => p.category === 'ai');
  const webProjects = portfolio.projects.filter((p) => p.category === 'web');

  return (
    <section id="projects" className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="flex flex-col space-y-24"
      >
        {/* Section Header (+3 size boost) */}
        <div className="flex flex-col space-y-5">
          <span className="text-base md:text-lg uppercase tracking-[0.3em] text-[#89AACC] font-body font-bold">
            03 / SELECTED PORTFOLIO
          </span>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic text-text-primary">
            Featured <span className="text-[#89AACC]">projects</span>
          </h2>
          <p className="text-text-primary/90 text-xl md:text-2xl lg:text-3xl max-w-3xl font-body leading-relaxed">
            A selection of intelligent systems, artificial intelligence platforms, and enterprise web management solutions built by Joyal Jobai.
          </p>
        </div>

        {/* Group 1: AI & Machine Learning Systems */}
        <div className="space-y-10">
          <div className="flex items-center space-x-4 border-b border-white/20 pb-5">
            <div className="p-3.5 rounded-2xl bg-stroke/70 text-[#89AACC]">
              <Cpu className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display italic text-text-primary">
                AI & Machine Learning Systems
              </h3>
              <p className="text-base md:text-lg text-text-primary/70 font-body">
                Predictive engines, FastAPI microservices, and SHAP feature explainability frameworks.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-9">
            {aiProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        </div>

        {/* Group 2: Enterprise Web & Management Platforms */}
        <div className="space-y-10 pt-6">
          <div className="flex items-center space-x-4 border-b border-white/20 pb-5">
            <div className="p-3.5 rounded-2xl bg-stroke/70 text-[#89AACC]">
              <Server className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display italic text-text-primary">
                Enterprise & Web Systems
              </h3>
              <p className="text-base md:text-lg text-text-primary/70 font-body">
                Full-stack logistics tracking, role-based access control, and bakery warehouse automation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-9">
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

      {/* Project Detail Modal — Glassmorphic (+3 size boost) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-3xl"
            />

            {/* Modal Window Container */}
            <motion.div
              layoutId={`project-container-${selectedProject.id}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-surface/95 border border-white/25 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col backdrop-blur-3xl"
            >
              {/* Clean Dark Glass Header */}
              <div className="relative p-9 md:p-14 border-b border-white/20 bg-gradient-to-r from-surface via-stroke/50 to-surface flex-shrink-0 space-y-5">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-7 right-7 p-3.5 rounded-full bg-bg/80 border border-white/25 text-white hover:bg-white hover:text-black transition-colors z-20 shadow-xl"
                  aria-label="Close Project Details"
                >
                  <X className="w-7 h-7" />
                </button>

                <div className="flex items-center gap-4">
                  <span className="px-5 py-2 rounded-full bg-stroke/90 border border-white/20 text-sm md:text-base font-body uppercase tracking-wider text-[#89AACC] font-bold">
                    {selectedProject.type}
                  </span>
                  <span className="text-sm md:text-base text-muted font-body font-medium">
                    {selectedProject.subtitle}
                  </span>
                </div>

                <motion.h3
                  layoutId={`project-title-${selectedProject.id}`}
                  className="text-5xl md:text-7xl font-display italic text-text-primary"
                >
                  {selectedProject.title}
                </motion.h3>
              </div>

              {/* Scrollable Content Body (+3 size boost) */}
              <div className="p-9 md:p-14 overflow-y-auto space-y-12 font-body">
                {/* Short Overview */}
                <p className="text-2xl md:text-3xl text-text-primary leading-relaxed font-body font-normal">
                  {selectedProject.longDescription}
                </p>

                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-7 rounded-3xl bg-bg/80 border border-white/15 space-y-4">
                    <h4 className="text-base md:text-lg uppercase tracking-widest text-text-primary font-bold flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full bg-red-400" />
                      The Problem
                    </h4>
                    <p className="text-lg md:text-xl text-text-primary/85 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div className="p-7 rounded-3xl bg-bg/80 border border-white/15 space-y-4">
                    <h4 className="text-base md:text-lg uppercase tracking-widest text-[#89AACC] font-bold flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full bg-emerald-400" />
                      The Solution
                    </h4>
                    <p className="text-lg md:text-xl text-text-primary/85 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Machine Learning Details (if applicable) */}
                {selectedProject.machineLearning && (
                  <div className="p-9 rounded-3xl bg-gradient-to-r from-stroke/70 to-surface border border-white/20 space-y-5">
                    <h4 className="text-lg md:text-xl font-bold uppercase tracking-wider text-[#89AACC] flex items-center gap-3">
                      <Cpu className="w-6 h-6" />
                      Machine Learning & Analytics Architecture
                    </h4>
                    <p className="text-lg md:text-xl text-text-primary/90 leading-relaxed">
                      {selectedProject.machineLearning}
                    </p>
                  </div>
                )}

                {/* Architecture Details (if applicable) */}
                {selectedProject.architectureDetails && (
                  <div className="p-9 rounded-3xl bg-gradient-to-r from-stroke/70 to-surface border border-white/20 space-y-5">
                    <h4 className="text-lg md:text-xl font-bold uppercase tracking-wider text-text-primary flex items-center gap-3">
                      <Layers className="w-6 h-6 text-[#4E85BF]" />
                      Data Pipeline & Architecture
                    </h4>
                    <p className="text-lg md:text-xl text-text-primary/90 leading-relaxed">
                      {selectedProject.architectureDetails}
                    </p>
                  </div>
                )}

                {/* Key Features */}
                <div className="space-y-5">
                  <h4 className="text-base md:text-lg uppercase tracking-widest text-[#89AACC] font-bold">
                    Key Features & Capabilities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {selectedProject.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-start space-x-3.5 text-lg md:text-xl text-text-primary font-semibold"
                      >
                        <CheckCircle2 className="w-6 h-6 text-[#89AACC] mt-1 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-5">
                  <h4 className="text-base md:text-lg uppercase tracking-widest text-[#89AACC] font-bold">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3.5">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-5 py-2.5 rounded-2xl bg-stroke text-base md:text-lg font-body font-bold text-text-primary border border-white/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap gap-5 pt-8 border-t border-white/20">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-shimmer inline-flex items-center gap-3 px-8 py-4 rounded-full bg-text-primary text-bg font-body text-base md:text-lg font-bold hover:scale-105 transition-transform"
                    >
                      <Github className="w-6 h-6" />
                      <span>View GitHub Repository</span>
                    </a>
                  )}

                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-shimmer inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/25 bg-surface text-text-primary font-body text-base md:text-lg font-bold hover:border-[#89AACC] hover:scale-105 transition-transform"
                    >
                      <ExternalLink className="w-6 h-6 text-[#89AACC]" />
                      <span>Live Website Demo</span>
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
