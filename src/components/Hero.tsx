import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail, ArrowRight, Award, MapPin, Briefcase, FileText, CheckCircle, ChevronRight } from 'lucide-react';
import { BIO_DATA } from '../data';

interface HeroProps {
  onScrollToServices: () => void;
  onScrollToContact: (serviceId?: string) => void;
}

export function Hero({ onScrollToServices, onScrollToContact }: HeroProps) {
  const metrics = [
    { label: "Total Experience", value: "9+ Years" },
    { label: "Core Industries", value: "FMCG, HORECA, IT, Healthcare" },
    { label: "Current Location", value: BIO_DATA.location },
    { label: "Availability", value: BIO_DATA.availability }
  ];

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:py-32 bg-radial from-[#e0f2f1] via-[#f8fafc] to-[#f8fafc]">
      {/* Decorative atmospheric elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-brand-50/50 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-gold-50/40 blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100/70 text-brand-700 font-medium text-xs tracking-wider uppercase"
              id="hero-badge"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Available for Executive Placement</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6.5xl font-extrabold tracking-tight text-slate-900 leading-[1.1] font-display"
                id="hero-name-title"
              >
                9+ Years of <span className="text-brand-600 relative inline-block">B2B & GTM Growth</span>
              </motion.h1>
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
                >
                  <h2
                    className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight font-display"
                    id="hero-role-subtitle"
                  >
                    Commercial & GTM Leader
                  </h2>
                  <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-brand-500/60" />
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest sm:mt-1">
                    Direct Executive Channel
                  </span>
                </motion.div>
                
                {/* Candidate Credential & Contact Meta Chips - Replaced & Relocated here */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="flex flex-wrap gap-x-2.5 gap-y-2 text-xs text-slate-650"
                  id="hero-contact-chips"
                >
                  <div className="flex items-center gap-1.5 bg-white border border-slate-150/70 px-3.5 py-1.5 rounded-xl shadow-xs text-[11px] font-medium hover:border-brand-500/30 transition-all">
                    <MapPin className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                    <span>Based: {BIO_DATA.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white border border-slate-150/70 px-3.5 py-1.5 rounded-xl shadow-xs text-[11px] font-medium hover:border-brand-500/30 transition-all">
                    <Briefcase className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                    <span>{BIO_DATA.drivingLicense}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white border border-slate-150/70 px-3.5 py-1.5 rounded-xl shadow-xs text-[11px] font-medium hover:border-brand-500/30 transition-all">
                    <FileText className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                    <span>Phone: {BIO_DATA.phone}</span>
                  </div>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm md:text-base text-slate-600 leading-relaxed max-w-xl font-light pt-2"
                id="hero-short-description"
              >
                {BIO_DATA.summary}
              </motion.p>
            </div>

            {/* Quick Experience Attributes tags */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 max-w-lg pt-4 border-t border-slate-100"
              id="hero-metrics-grid"
            >
              {metrics.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">{item.label}</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{item.value}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Actions for Recruiter Desk */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
              id="hero-ctas"
            >
              <button
                onClick={onScrollToServices}
                className="px-6 py-3.5 bg-brand-600 hover:bg-brand-700 active:bg-brand-900 text-white font-medium rounded-xl shadow-lg shadow-brand-500/10 hover:shadow-brand-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                id="cta-services-btn"
              >
                <span>View Core Experience</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onScrollToContact()}
                className="px-6 py-3.5 bg-white hover:bg-slate-50 border border-slate-205 text-slate-750 font-medium rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                id="cta-contact-btn"
              >
                <span>Schedule Interview / Hire</span>
              </button>
            </motion.div>
          </div>

          {/* Portrait Photo Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full max-w-[360px] min-h-[450px] rounded-3xl bg-white text-slate-800 border border-slate-100 p-6 shadow-xl transition-all relative overflow-hidden flex flex-col justify-end"
              id="profile-card"
            >
              {BIO_DATA.profilePic && (
                <>
                  {/* Full-bleed picture filling the entire card */}
                  <img 
                    src={BIO_DATA.profilePic} 
                    alt="Junaid Dar - Portfolio Portrait Image" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Elegant light-wash overlay covering the background from top to bottom for pristine contrast with dark text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/92 to-white/50 z-0" />
                </>
              )}

              {/* Immediate commence green badge floating on top of picture */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 text-[10px] font-mono font-bold z-20 shadow-xs uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                <span>IMMEDIATE COMMENCE</span>
              </div>

              {/* Content sits safely on top of overlay (`z-10`) */}
              <div className="relative z-10 space-y-4">
                <div>
                  <span className="text-[10px] font-mono font-bold text-brand-600 uppercase tracking-widest block mb-1">
                    Commercial B2B & GTM Leader
                  </span>
                  <h4 className="text-xl font-extrabold text-slate-900 font-display uppercase tracking-wide">
                    {BIO_DATA.name}
                  </h4>
                </div>

                <div className="border-t border-slate-200/60 pt-4 space-y-3.5">
                  <div>
                    <h3 className="text-xs font-bold text-slate-800 tracking-wide uppercase font-mono mb-1 font-display">Direct Recruitment Desk</h3>
                    <p className="text-[11px] text-slate-500 font-light leading-relaxed">Coordinate placements and immediate schedules via these direct channels:</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={BIO_DATA.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-brand-500/10 hover:scale-[1.02]"
                      id="linkedin-link-btn"
                    >
                      <Linkedin className="w-3.5 h-3.5 shrink-0" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={`mailto:${BIO_DATA.email}`}
                      className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-white hover:bg-slate-50 text-slate-750 text-xs font-bold rounded-xl transition-all border border-slate-200 shadow-xs hover:scale-[1.02]"
                      id="email-link-btn"
                    >
                      <Mail className="w-3.5 h-3.5 shrink-0" />
                      <span>Email Direct</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
