import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, CheckCircle2, AlertCircle } from 'lucide-react';
import { Project } from '../data/portfolio';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <motion.div
      layoutId={`project-container-${project.id}`}
      onClick={() => onSelect(project)}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4 }}
      className={`${project.span} glass-card glass-shimmer group relative rounded-3xl p-5 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer space-y-5 w-full`}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="px-3 py-1.5 rounded-full bg-stroke/85 backdrop-blur-2xl border border-white/20 text-[11px] sm:text-sm font-body text-[#89AACC] uppercase tracking-wider font-bold flex items-center gap-1.5">
          {project.category === 'ai' && <Cpu className="w-3.5 h-3.5" />}
          {project.type}
        </span>

        <div className="touch-target w-9 sm:w-12 h-9 sm:h-12 rounded-full bg-stroke/85 border border-white/20 flex items-center justify-center text-text-primary group-hover:accent-gradient group-hover:text-bg transition-colors shadow-lg">
          <ArrowUpRight className="w-4 sm:w-6 h-4 sm:h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col space-y-3">
        <div className="space-y-1">
          <span className="text-[11px] sm:text-xs font-body uppercase tracking-widest text-[#89AACC] font-bold block">
            {project.subtitle}
          </span>
          <motion.h3
            layoutId={`project-title-${project.id}`}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display italic text-text-primary group-hover:text-white transition-colors"
          >
            {project.title}
          </motion.h3>
        </div>

        <p className="text-xs sm:text-base lg:text-xl text-text-primary/90 font-body leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Problem & Solution Mini Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <div className="p-3 rounded-2xl bg-bg/70 border border-white/15 flex items-start space-x-2.5">
            <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-body tracking-wider text-muted font-bold block">
                Challenge
              </span>
              <p className="text-xs text-text-primary/90 line-clamp-2 font-medium">
                {project.problem}
              </p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-bg/70 border border-white/15 flex items-start space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-body tracking-wider text-[#89AACC] font-bold block">
                Solution
              </span>
              <p className="text-xs text-text-primary/90 line-clamp-2 font-medium">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Pills & CTA */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-white/15">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-stroke/85 text-[11px] sm:text-xs font-body text-text-primary font-semibold border border-white/15"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="text-xs font-body uppercase tracking-widest text-[#89AACC] font-bold flex items-center gap-1 self-end sm:self-auto">
          <span>Read Case Study</span>
          <span>↗</span>
        </div>
      </div>
    </motion.div>
  );
};
