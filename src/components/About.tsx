import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Server, Network } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { DeveloperBadge } from './DeveloperBadge';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Building predictive engines using XGBoost and Scikit-learn, complemented by SHAP explainability models for decision systems.',
    },
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Crafting responsive user interfaces in React & TypeScript backed by high-speed Python FastAPI and REST APIs.',
    },
    {
      icon: Server,
      title: 'Database Architecture',
      description: 'Designing relational MySQL database schemas, data pipeline ingestion, and real-time backend state management.',
    },
    {
      icon: Network,
      title: 'Networking & Systems',
      description: 'Solid knowledge of TCP/IP, routing, switching, DNS, DHCP, Linux administration, and network security concepts.',
    },
  ];

  return (
    <section id="about" className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col space-y-24"
      >
        {/* Section Header */}
        <div className="flex flex-col space-y-5">
          <span className="text-base md:text-lg uppercase tracking-[0.3em] text-[#89AACC] font-body font-bold">
            01 / BIOGRAPHY & PROFILE
          </span>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic text-text-primary">
            About <span className="text-[#89AACC]">Joyal</span>
          </h2>
        </div>

        {/* Editorial Statement, Bio & Interactive Holographic ID Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column — Biography Copy & Statement */}
          <div className="lg:col-span-7 flex flex-col space-y-10">
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display italic text-text-primary leading-tight tracking-tight">
              "{portfolio.editorialStatement}"
            </h3>

            <div className="flex flex-col space-y-8 text-text-primary/90 text-xl md:text-2xl lg:text-3xl font-body leading-relaxed">
              <p>
                I am an <strong className="text-text-primary font-bold">MCA Scholar</strong> at Adi Shankara Institute of Engineering & Technology, Kalady, with a degree in Computer Applications from DePaul Institute of Science and Technology.
              </p>
              <p>
                My expertise spans the entire development cycle—from engineering high-throughput machine learning pipelines with <strong className="text-text-primary font-bold">FastAPI</strong> and <strong className="text-text-primary font-bold">XGBoost</strong> to designing seamless web applications and managing enterprise network infrastructure.
              </p>
            </div>
          </div>

          {/* Right Column — 3D Tilting Developer ID Badge with Joyal's Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <DeveloperBadge />
          </div>
        </div>

        {/* Technical Focus Pillars Grid with Glass Shimmer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card glass-shimmer p-9 rounded-3xl flex flex-col justify-between space-y-6 hover:-translate-y-2 shadow-2xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-stroke/70 flex items-center justify-center text-[#89AACC] group-hover:bg-[#4E85BF] group-hover:text-bg transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="flex flex-col space-y-4">
                  <h4 className="text-2xl md:text-3xl font-body font-bold text-text-primary">
                    {pillar.title}
                  </h4>
                  <p className="text-base md:text-lg text-text-primary/80 leading-relaxed font-body">
                    {pillar.description}
                  </p>
                </div>
                <div className="w-full h-1.5 accent-gradient rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
