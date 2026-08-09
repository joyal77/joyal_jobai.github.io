import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, FileDown, Send, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { personalData } from '../../data/portfolioData';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';


export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Ambient Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="Get In Touch"
          title="Let's Build Something Intelligent"
          subtitle="I'm interested in building practical software, AI-powered applications and data-driven solutions."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-8 sm:p-12 border border-cyan-500/30 bg-slate-950/85 shadow-2xl max-w-4xl mx-auto text-center relative"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-semibold tracking-wider font-mono-code mb-6 border border-cyan-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for Technical Opportunities & AI Projects</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Available for AI/ML & Full-Stack Engineering Roles
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Whether you are looking to collaborate on predictive machine learning models, full-stack web applications, or network infrastructure projects, feel free to reach out.
          </p>

          {/* Contact Details Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
            {/* Email Card */}
            <a
              href={`mailto:${personalData.email}`}
              className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-slate-950 text-cyan-400 w-fit mb-3 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono-code block mb-1">
                  Email Address
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white truncate">
                  {personalData.email}
                </p>
              </div>
              <span className="text-[11px] text-cyan-400 mt-4 group-hover:underline font-mono-code">
                Send Email →
              </span>
            </a>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-slate-950 text-emerald-400 w-fit mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono-code block mb-1">
                  Phone Numbers
                </span>
                <div className="space-y-1">
                  {personalData.phones.map((phone) => (
                    <a
                      key={phone.raw}
                      href={`tel:${phone.raw}`}
                      className="block text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>
              <span className="text-[11px] text-emerald-400 mt-4 font-mono-code">
                Click to Call
              </span>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-slate-950 text-purple-400 w-fit mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono-code block mb-1">
                  Location
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  {personalData.location}
                </p>
              </div>
              <span className="text-[11px] text-purple-400 mt-4 font-mono-code">
                Kerala, India
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-slate-800">
            <a
              href={`mailto:${personalData.email}`}
              className="inline-flex items-center space-x-2 px-6 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 rounded-xl shadow-lg shadow-cyan-500/20 transition-all transform hover:scale-[1.02]"
            >
              <Send className="w-4 h-4" />
              <span>Send Direct Email</span>
            </a>

            <a
              href={personalData.resumeUrl}
              download
              className="inline-flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all hover:border-cyan-500/50"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>

            <a
              href={personalData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={personalData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
