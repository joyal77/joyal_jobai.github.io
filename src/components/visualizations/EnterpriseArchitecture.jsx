import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Cpu, Compass, LayoutDashboard, LineChart, ArrowRight } from 'lucide-react';

const archNodes = [
  { label: 'DATABASE', tech: 'MySQL / SQL', icon: Database, color: 'text-cyan-400', border: 'border-cyan-500/40' },
  { label: 'FASTAPI BACKEND', tech: 'Python Async APIs', icon: Server, color: 'text-teal-400', border: 'border-teal-500/40' },
  { label: 'MACHINE LEARNING', tech: 'XGBoost & SHAP', icon: Cpu, color: 'text-emerald-400', border: 'border-emerald-500/40' },
  { label: 'DECISION ENGINE', tech: 'Rules & Health Score', icon: Compass, color: 'text-indigo-400', border: 'border-indigo-500/40' },
  { label: 'REACT DASHBOARD', tech: 'Interactive UI', icon: LayoutDashboard, color: 'text-purple-400', border: 'border-purple-500/40' },
  { label: 'BUSINESS INSIGHTS', tech: 'Actionable Metrics', icon: LineChart, color: 'text-amber-400', border: 'border-amber-500/40' }
];

export default function EnterpriseArchitecture() {
  return (
    <div className="w-full my-8 p-6 glass-panel rounded-2xl border border-slate-800 bg-slate-950/80">
      <div className="text-center mb-6">
        <h4 className="text-sm font-semibold tracking-wider text-cyan-400 uppercase font-mono-code">
          Flagship Architecture Data Flow
        </h4>
        <p className="text-xs text-slate-400 mt-1">
          End-to-End Enterprise Predictive & Decision Pipeline
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
        {archNodes.map((node, idx) => {
          const Icon = node.icon;
          return (
            <React.Fragment key={node.label}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className={`w-full lg:w-1/6 p-3 rounded-xl bg-slate-900/90 border ${node.border} flex flex-col items-center text-center shadow-lg transition-all`}
              >
                <div className={`p-2.5 rounded-lg bg-slate-950/80 mb-2 ${node.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-white tracking-wide font-mono-code">
                  {node.label}
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 font-medium">
                  {node.tech}
                </span>
              </motion.div>

              {idx < archNodes.length - 1 && (
                <div className="flex lg:hidden items-center my-1 text-slate-600">
                  <ArrowRight className="w-4 h-4 transform rotate-90" />
                </div>
              )}
              {idx < archNodes.length - 1 && (
                <div className="hidden lg:flex items-center text-cyan-400/60 animate-pulse">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
