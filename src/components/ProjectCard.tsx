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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className={`${project.span} glass-card glass-shimmer group relative rounded-3xl p-6 sm:p-9 md:p-12 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer space-y-6 sm:space-y-10 w-full`}
    >
      {/* Top Header Pills & Tags */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <span className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-stroke/85 backdrop-blur-2xl border border-white/20 text-xs sm:text-base font-body text-[#89AACC] uppercase tracking-wider font-bold flex items-center gap-2">
            {project.category === 'ai' && <Cpu className="w-4 sm:w-5 h-4 sm:h-5" />}
            {project.type}
          </span>
        </div>

        {/* View Details Action Arrow (44x44px touch target) */}
        <div className="touch-target w-11 sm:w-14 h-11 sm:h-14 rounded-full bg-stroke/85 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-text-primary group-hover:accent-gradient group-hover:text-bg transition-colors duration-300 shadow-xl">
          <ArrowUpRight className="w-5 sm:w-7 h-5 sm:h-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>

      {/* Main Content Area — Always Visible (No Hover Requirement) */}
      <div className="flex flex-col space-y-4 sm:space-y-5">
        <div className="space-y-1 sm:space-y-2">
          <span className="text-xs sm:text-base font-body uppercase tracking-widest text-[#89AACC] font-bold block">
            {project.subtitle}
          </span>
          <motion.h3
            layoutId={`project-title-${project.id}`}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display italic text-text-primary group-hover:text-white transition-colors"
          >
            {project.title}
          </motion.h3>
        </div>

        <p className="text-base sm:text-lg lg:text-2xl text-text-primary/90 font-body leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Problem & Solution Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5 pt-2">
          <div className="p-4 sm:p-5 rounded-2xl bg-bg/70 border border-white/15 flex items-start space-x-3">
            <AlertCircle className="w-5 sm:w-6 h-5 sm:h-6 text-red-400 mt-0.5 flex-shrink-0" />
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-[11px] sm:text-xs uppercase font-body tracking-wider text-muted font-bold block">
                Challenge
              </span>
              <p className="text-xs sm:text-base text-text-primary/90 line-clamp-2 font-medium">
                {project.problem}
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-bg/70 border border-white/15 flex items-start space-x-3">
            <CheckCircle2 className="w-5 sm:w-6 h-5 sm:h-6 text-emerald-400 mt-0.5 flex-shrink-0" />
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-[11px] sm:text-xs uppercase font-body tracking-wider text-[#89AACC] font-bold block">
                Solution & Impact
              </span>
              <p className="text-xs sm:text-base text-text-primary/90 line-clamp-2 font-medium">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Pills & Action Prompt */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 sm:pt-5 border-t border-white/15">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-stroke/85 text-xs sm:text-base font-body text-text-primary font-semibold border border-white/15"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="touch-target text-xs sm:text-base font-body uppercase tracking-widest text-[#89AACC] font-bold flex items-center gap-1.5 self-end sm:self-auto">
          <span>Read Case Study</span>
          <span>↗</span>
        </div>
      </div>
    </motion.div>
  );
};
