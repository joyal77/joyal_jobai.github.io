import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Activity, Info, Sparkles } from 'lucide-react';

const initialFeatures = [
  { name: 'Customer Tenure (Months)', shapValue: -0.42, impact: 'Decreases Churn Risk', color: 'bg-emerald-500' },
  { name: 'Support Tickets (Last 30d)', shapValue: +0.68, impact: 'Increases Churn Risk', color: 'bg-rose-500' },
  { name: 'Monthly Transaction Vol', shapValue: -0.35, impact: 'Decreases Churn Risk', color: 'bg-teal-500' },
  { name: 'Contract Type (Annual)', shapValue: -0.51, impact: 'Decreases Churn Risk', color: 'bg-cyan-500' },
  { name: 'Payment Delay Incidents', shapValue: +0.44, impact: 'Increases Churn Risk', color: 'bg-amber-500' }
];

export default function ShapVisualizer() {
  const [supportTickets, setSupportTickets] = useState(3);
  const [tenureMonths, setTenureMonths] = useState(12);

  // Calculate dynamic churn probability and Health Score
  const baseRisk = 25;
  const ticketImpact = (supportTickets - 1) * 8;
  const tenureImpact = Math.max(0, (24 - tenureMonths) * 1.5);
  const calculatedRisk = Math.min(95, Math.max(5, baseRisk + ticketImpact - tenureImpact));
  const healthScore = Math.round(100 - calculatedRisk);

  return (
    <div className="w-full glass-panel rounded-2xl p-5 sm:p-6 border border-slate-800 bg-slate-950/90 my-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-cyan-400" />
          <h4 className="text-sm font-bold text-white font-mono-code uppercase tracking-wider">
            Interactive SHAP Explainability & What-If Simulator
          </h4>
        </div>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 font-mono-code">
          Live Model Inference
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Feature Impact Bar Chart */}
        <div className="lg:col-span-7 space-y-3">
          <span className="text-xs text-slate-400 font-mono-code block mb-1">
            XGBoost Feature Importance (SHAP Values)
          </span>

          {initialFeatures.map((feat) => {
            const widthPct = Math.abs(feat.shapValue) * 100;
            const isPositive = feat.shapValue > 0;

            return (
              <div key={feat.name} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-mono-code">
                  <span className="text-slate-200 font-medium">{feat.name}</span>
                  <span className={isPositive ? 'text-rose-400' : 'text-emerald-400'}>
                    {isPositive ? `+${feat.shapValue}` : feat.shapValue} SHAP
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden flex items-center">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${widthPct}%` }}
                    transition={{ duration: 0.8 }}
                    className={`h-full ${feat.color} rounded-full`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Live What-If Parameter Sliders */}
        <div className="lg:col-span-5 p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <h5 className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono-code mb-3 flex items-center space-x-1">
              <Sliders className="w-3.5 h-3.5" />
              <span>What-If Scenario Tester</span>
            </h5>

            {/* Slider 1: Support Tickets */}
            <div className="mb-4">
              <div className="flex justify-between text-xs font-mono-code text-slate-300 mb-1">
                <span>Support Tickets:</span>
                <span className="font-bold text-white">{supportTickets}</span>
              </div>
              <input
                type="range"
                min="0"
                max="8"
                value={supportTickets}
                onChange={(e) => setSupportTickets(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* Slider 2: Tenure Months */}
            <div className="mb-4">
              <div className="flex justify-between text-xs font-mono-code text-slate-300 mb-1">
                <span>Customer Tenure (Months):</span>
                <span className="font-bold text-white">{tenureMonths} mo</span>
              </div>
              <input
                type="range"
                min="1"
                max="36"
                value={tenureMonths}
                onChange={(e) => setTenureMonths(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>
          </div>

          {/* Result Output */}
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-xs font-mono-code">
            <div>
              <span className="text-slate-400 block text-[10px]">Predicted Churn Risk</span>
              <span className={`text-base font-extrabold ${calculatedRisk > 50 ? 'text-rose-400' : 'text-emerald-400'}`}>
                {calculatedRisk.toFixed(1)}%
              </span>
            </div>
            <div className="text-right">
              <span className="text-slate-400 block text-[10px]">Business Health Score</span>
              <span className="text-base font-extrabold text-cyan-400">
                {healthScore} / 100
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
