import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Binary, Cpu, Server, TrendingUp, Sparkles } from 'lucide-react';

const pipelineSteps = [
  { id: 'database', label: 'DATABASE', icon: Database, color: 'from-blue-500 to-cyan-500', desc: 'Relational data ingestion & SQL schemas' },
  { id: 'data', label: 'DATA', icon: Binary, color: 'from-cyan-500 to-teal-500', desc: 'Preprocessed feature vectors & cleaning' },
  { id: 'ml', label: 'MACHINE LEARNING', icon: Cpu, color: 'from-emerald-500 to-green-500', desc: 'XGBoost & Scikit-learn predictive models' },
  { id: 'api', label: 'API', icon: Server, color: 'from-green-500 to-emerald-400', desc: 'FastAPI microservices & REST endpoints' },
  { id: 'insights', label: 'BUSINESS INSIGHTS', icon: TrendingUp, color: 'from-amber-400 to-emerald-400', desc: 'Actionable decision metrics & health scores' }
];

export default function AiDataPipeline() {
  const [activeStep, setActiveStep] = useState(2); // ML active by default

  return (
    <div className="w-full glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/80 bg-slate-950/70 shadow-2xl relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute -top-20 -left-20 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase font-mono-code">
            AI Data Processing Architecture
          </span>
        </div>
        <span className="text-xs text-slate-400 font-mono-code hidden sm:inline-block">
          Interactive Data Stream
        </span>
      </div>

      {/* Pipeline Container */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
        {pipelineSteps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;

          return (
            <motion.div
              key={step.id}
              onClick={() => setActiveStep(idx)}
              whileHover={{ scale: 1.02 }}
              className={`relative cursor-pointer p-4 rounded-xl border transition-all duration-300 flex flex-col items-center text-center ${
                isActive
                  ? 'bg-slate-900/90 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                  : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-gradient-to-br ${step.color} text-slate-950 shadow-md`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="text-xs font-bold text-white tracking-wide mb-1 font-mono-code">
                {step.label}
              </h4>
              <p className="text-[11px] text-slate-400 leading-tight">
                {step.desc}
              </p>

              {/* Arrow Connector for Desktop */}
              {idx < pipelineSteps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-4 h-4 text-cyan-400/80 transform rotate-45 border-t-2 border-r-2 border-cyan-500/60" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Detail Box */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-6 p-4 rounded-xl bg-slate-900/80 border border-cyan-900/40 flex items-center justify-between text-xs font-mono-code text-cyan-200"
      >
        <span className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Stage {activeStep + 1}: <strong className="text-white">{pipelineSteps[activeStep].label}</strong></span>
        </span>
        <span className="text-slate-400 hidden sm:inline">
          Status: Operational & Fully Automated
        </span>
      </motion.div>
    </div>
  );
}
