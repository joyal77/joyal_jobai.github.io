import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Store, ShieldCheck, MapPin, CheckCircle, Smartphone } from 'lucide-react';
import { secondaryProjects } from '../../data/portfolioData';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';

export default function OtherProjects() {
  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Full-Stack Operational Systems
          </h3>
          <p className="text-sm text-slate-400 mt-2">
            Production-oriented software built for role-based access, inventory tracking, and web/mobile integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Logistics Management System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="h-full flex flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-teal-400">
                    <Truck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-950 text-teal-300 border border-teal-800 font-mono-code">
                    {secondaryProjects[0].type}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2">
                  {secondaryProjects[0].title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  {secondaryProjects[0].description}
                </p>

                {/* Roles Pills */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono-code block mb-2">
                    Role-Based Access Control (RBAC):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {secondaryProjects[0].roles.map((role) => (
                      <span
                        key={role}
                        className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 text-xs font-mono-code border border-slate-800"
                      >
                        • {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {secondaryProjects[0].features.map((feat) => (
                    <div key={feat} className="flex items-center space-x-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                {secondaryProjects[0].techStack.map((tech) => (
                  <Badge key={tech} variant="cyan">
                    {tech}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Bakery Warehouse Management System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlassCard className="h-full flex flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-amber-400">
                    <Store className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-800 font-mono-code">
                    {secondaryProjects[1].type}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2">
                  {secondaryProjects[1].title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  {secondaryProjects[1].description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {secondaryProjects[1].features.map((feat) => (
                    <div key={feat} className="flex items-center space-x-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                {secondaryProjects[1].techStack.map((tech) => (
                  <Badge key={tech} variant="indigo">
                    {tech}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
