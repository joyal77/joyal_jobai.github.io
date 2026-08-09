import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Layers, Cpu, Eye, ExternalLink, ArrowRight } from 'lucide-react';
import { flagshipProject } from '../../data/portfolioData';
import SectionHeader from '../common/SectionHeader';
import Badge from '../common/Badge';
import Modal from '../common/Modal';
import EnterpriseArchitecture from '../visualizations/EnterpriseArchitecture';
import ShapVisualizer from '../visualizations/ShapVisualizer';

export default function FeaturedProject() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Flagship Showcase"
          title="Enterprise AI & Decision Platform"
          subtitle="Combining machine learning predictions, SHAP explainability, and automated business recommendations in a high-performance architecture."
        />

        {/* Flagship Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-6 sm:p-10 border border-cyan-500/40 bg-slate-950/80 shadow-2xl relative overflow-hidden"
        >
          {/* Ambient Glow Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-semibold tracking-wider font-mono-code border border-cyan-800">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{flagshipProject.subtitle}</span>
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
                {flagshipProject.title}
              </h3>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-lg shadow-cyan-500/20 transition-all transform hover:scale-[1.02] shrink-0"
            >
              <Eye className="w-4 h-4" />
              <span>Explore Interactive Case Study</span>
            </button>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 mt-6 leading-relaxed">
            {flagshipProject.description}
          </p>

          {/* Architecture Visualizer */}
          <EnterpriseArchitecture />

          {/* SHAP & Model Explainability Visualizer */}
          <ShapVisualizer />


          {/* Key Capabilities Grid */}
          <div className="mt-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono-code mb-4">
              Core Enterprise Features & Capabilities
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {flagshipProject.features.map((feature) => (
                <div
                  key={feature}
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center space-x-2 text-xs font-semibold text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono-code mr-2">
              Stack:
            </span>
            {flagshipProject.techStack.map((tech, idx) => (
              <Badge key={tech} variant={idx % 2 === 0 ? 'cyan' : 'emerald'}>
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Modal Window for Detailed Case Study */}
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={flagshipProject.title}
        >
          <div className="space-y-6 text-left">
            <div>
              <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider font-mono-code mb-2">
                1. Problem Statement
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {flagshipProject.caseStudy.problem}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider font-mono-code mb-2">
                2. System Solution
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {flagshipProject.caseStudy.solution}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-teal-400 uppercase tracking-wider font-mono-code mb-2">
                3. End-to-End Architecture
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {flagshipProject.caseStudy.architectureDetails}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wider font-mono-code mb-2">
                4. Machine Learning & SHAP Explainability
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {flagshipProject.caseStudy.machineLearning}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider font-mono-code mb-2">
                5. Decision Engine & Health Scores
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {flagshipProject.caseStudy.decisionEngine}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider font-mono-code mb-2">
                6. Business Insights & What-If Simulations
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {flagshipProject.caseStudy.businessInsights}
              </p>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
}
