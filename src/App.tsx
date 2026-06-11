import { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { Hero } from './components/Hero';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Methodology } from './components/Methodology';
import { InquiryDashboard } from './components/InquiryDashboard';
import { BIO_DATA } from './data';
import { Linkedin, Mail, Award, CheckCircle, Globe, ArrowUp } from 'lucide-react';

export default function App() {
  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll back to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fbfcff] text-slate-800 flex flex-col font-sans select-none selection:bg-brand-100 selection:text-brand-900">
      
      {/* Dynamic Header Toolbar Navigation */}
      <HeaderNav 
        onScrollToHero={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onScrollToServices={() => scrollToSection('experience-section')}
        onScrollToContact={() => scrollToSection('contact-section')}
      />

      {/* Main Container Layout */}
      <main className="flex-1">
        
        {/* Hero Segment */}
        <Hero 
          onScrollToServices={() => scrollToSection('experience-section')}
          onScrollToContact={() => scrollToSection('contact-section')}
        />

        {/* Detailed Experience Timeline (Flagship & Pakistan operations) */}
        <ExperienceTimeline />

        {/* Core Competencies & Key Partnerships Grid */}
        <Methodology />

        {/* Recruiter & Customer Opportunity Desk Form */}
        <InquiryDashboard />
      </main>

      {/* Trust reassurance bar */}
      <section className="bg-slate-900 border-t border-slate-800 text-slate-400 py-8 text-xs font-mono">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-left">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Recruiter Auditing Active</span>
          </div>
          <div className="flex items-center gap-2 md:justify-center">
            <Award className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>Commercial Integrity Audit Passed</span>
          </div>
          <div className="flex items-center gap-2 md:justify-end">
            <Globe className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>Available for UAE Selection</span>
          </div>
        </div>
      </section>

      {/* Core Footing Layout */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-slate-900">
            <div className="space-y-1 text-left">
              <span className="text-white font-extrabold text-lg tracking-tight block">Junaid Dar</span>
              <span className="text-xs text-slate-500 block font-mono">9+ Year Commercial & Route-to-Market Executive | UAE Based</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href={BIO_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-[#0a66c2]/80 border border-slate-800 text-white flex items-center justify-center transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${BIO_DATA.email}`}
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-brand-600 border border-slate-800 text-white flex items-center justify-center transition-all"
                title="Direct Email Address"
              >
                <Mail className="w-5 h-5" />
              </a>
              <button
                onClick={handleScrollToTop}
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-850 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                title="Scroll to Top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
            <span>&copy; {new Date().getFullYear()} Junaid Dar. All Rights Reserved.</span>
            <div className="flex flex-wrap gap-4 text-slate-500">
              <span>Optimized Careers Portfolio</span>
              <span className="hidden sm:inline">&middot;</span>
              <span>GTM, HoReCa & FMCG Operations</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
