import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Network, Router as RouterIcon, ShieldCheck, Server, ArrowRight, Info } from 'lucide-react';
import { networkDiagramNodes, networkingTopics } from '../../data/portfolioData';

const nodeIcons = {
  client: Monitor,
  switch: Network,
  router: RouterIcon,
  services: ShieldCheck,
  server: Server
};

export default function NetworkTopology() {
  const [selectedNode, setSelectedNode] = useState(networkDiagramNodes[0]);
  const [hoveredTopic, setHoveredTopic] = useState(null);

  return (
    <div className="w-full glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 bg-slate-950/80 shadow-2xl my-8">
      <div className="text-center mb-8">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 uppercase rounded-full bg-emerald-950/60 border border-emerald-800/50 mb-2 font-mono-code">
          Interactive Network Flow & Architecture
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          Client-to-Server Infrastructure Pipeline
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl mx-auto">
          Click any component to inspect packet handling, layer protocols, and configuration details.
        </p>
      </div>

      {/* Network Flow Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center mb-8 relative">
        {networkDiagramNodes.map((node, idx) => {
          const Icon = nodeIcons[node.id] || Network;
          const isSelected = selectedNode.id === node.id;

          return (
            <React.Fragment key={node.id}>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedNode(node)}
                className={`p-4 rounded-xl border flex flex-col items-center text-center transition-all duration-300 ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-500/80 shadow-lg shadow-emerald-500/10 ring-2 ring-emerald-500/30'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div
                  className={`p-3 rounded-lg mb-2 ${
                    isSelected ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-800 text-emerald-400'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-white font-mono-code tracking-wider">
                  {node.label}
                </span>
                <span className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                  {node.desc}
                </span>
              </motion.button>

              {idx < networkDiagramNodes.length - 1 && (
                <div className="hidden md:flex justify-center text-emerald-500/50 animate-pulse">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Selected Node Details */}
      <motion.div
        key={selectedNode.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="p-5 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex items-start space-x-3 text-left mb-8"
      >
        <Info className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sm font-bold text-white font-mono-code flex items-center space-x-2">
            <span>{selectedNode.label} Architecture Component</span>
            <span className="text-xs font-normal px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
              Active Layer
            </span>
          </h4>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            {selectedNode.desc}. Optimized for high-throughput TCP/IP communication, reliable packet routing, sub-millisecond DNS lookup, and robust security policies across Linux server clusters.
          </p>
        </div>
      </motion.div>

      {/* Hoverable Technology Cards Grid */}
      <div>
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-left font-mono-code">
          Core Protocol & Infrastructure Reference Cards (Hover for Explanation)
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {networkingTopics.map((topic) => {
            const isHovered = hoveredTopic === topic.title;

            return (
              <motion.div
                key={topic.title}
                onMouseEnter={() => setHoveredTopic(topic.title)}
                onMouseLeave={() => setHoveredTopic(null)}
                whileHover={{ y: -2 }}
                className={`p-3 rounded-lg border transition-all duration-200 cursor-pointer text-left ${
                  isHovered
                    ? 'bg-slate-800/90 border-cyan-500/60 shadow-md'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white font-mono-code">
                    {topic.title}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-cyan-400' : 'bg-slate-700'}`} />
                </div>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 hover:line-clamp-none transition-all">
                  {topic.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
