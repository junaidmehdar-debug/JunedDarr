import { CORE_COMPETENCIES, KEY_UAE_ACCOUNTS } from '../data';
import { Target, Award, ShieldAlert, Star, Compass, Zap, Building, Landmark } from 'lucide-react';

export function Methodology() {
  const competencyIcons = [
    <Target className="w-5 h-5 text-indigo-600" />,
    <Star className="w-5 h-5 text-amber-600" />,
    <Compass className="w-5 h-5 text-emerald-600" />,
    <ShieldAlert className="w-5 h-5 text-brand-600" />,
    <Award className="w-5 h-5 text-teal-600" />,
    <Zap className="w-5 h-5 text-indigo-600" />
  ];

  return (
    <section id="competencies-section" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-600 uppercase font-semibold">Leadership Pillars</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 font-display">
            Core Commercial Competencies
          </h2>
          <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
            Proven commercial strategies and distribution governance structures built over 9+ years of driving growth in premium B2B FMCG, HORECA, and Retail sectors.
          </p>
        </div>

        {/* Competencies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="competencies-container">
          {CORE_COMPETENCIES.map((comp, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-150/70 hover:border-brand-500/20 rounded-2xl p-6 transition-all duration-350 group hover:bg-white hover:shadow-xl hover:shadow-slate-100/50 hover:-translate-y-1 text-left"
              id={`competency-card-${idx}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2.5 bg-slate-50/50 rounded-xl border border-slate-100 shadow-xs group-hover:bg-brand-50 group-hover:border-brand-100 transition-colors shrink-0">
                  {competencyIcons[idx % competencyIcons.length]}
                </div>
                <h3 className="text-base font-extrabold text-slate-800 tracking-tight group-hover:text-brand-700 transition-colors text-left leading-snug font-display">
                  {comp.title}
                </h3>
              </div>
              <p className="text-slate-550 text-xs sm:text-sm leading-relaxed font-light text-left pl-1">
                {comp.details}
              </p>
            </div>
          ))}
        </div>

        {/* Brand partners & key accounts bar */}
        <div className="mt-16 pt-12 border-t border-slate-100">
          <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold block mb-8 text-center select-none">
            Selected Tier-1 UAE Hospitality Accounts Partnered
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {KEY_UAE_ACCOUNTS.map((account, idx) => (
              <div 
                key={idx} 
                className="py-3 px-4 bg-white rounded-xl border border-slate-200/85 hover:border-brand-500/30 text-slate-800 text-xs font-semibold hover:text-brand-750 hover:shadow-md transition-all flex items-center justify-center gap-2.5 select-none"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                <span>{account}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Callout Card */}
        <div className="mt-20 bg-radial from-slate-900 via-slate-950 to-slate-950 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl" id="methodology-callout">
          <div className="absolute top-0 right-0 w-[20rem] h-[20rem] rounded-full bg-brand-500/10 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#d4af37] font-semibold bg-[#d4af37]/10 border border-[#d4af37]/25 px-2.5 py-1 rounded inline-block">
                Professional Objective
              </span>
              <h3 className="text-2xl md:text-4xl italic font-light font-serif leading-relaxed tracking-normal text-slate-100">
                &ldquo;Scaling enterprise distribution with structured Route-to-Market control systems.&rdquo;
              </h3>
              <p className="text-slate-300 text-xs md:text-sm font-light max-w-2xl leading-relaxed">
                Aiming to bring 9+ years of verified retail, confectionery, HoReCa distributions, and CRM pipeline automation expertise to drive double-digit margin enhancements and client retention as a value partner for premier networks.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="border border-slate-800 bg-slate-900/40 p-5 rounded-2xl backdrop-blur-md max-w-xs space-y-1.5 w-full">
                <span className="font-mono text-[10px] text-slate-400 block uppercase tracking-wider">Candidate Direct Desk</span>
                <span className="text-sm font-bold text-white block">JUNAID DAR</span>
                <span className="text-xs text-[#d4af37] font-mono block">resume@junaiddars.com</span>
                <span className="text-xs text-slate-400 block font-mono">+971-52-402-4785</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
