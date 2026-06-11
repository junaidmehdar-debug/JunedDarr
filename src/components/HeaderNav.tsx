import { Linkedin, Mail, ArrowRight, Menu, X, Landmark, Compass, Award } from 'lucide-react';
import { useState } from 'react';
import { BIO_DATA } from '../data';
import brandLogo from '../assets/images/brand_logo_1781124461531.png';

interface HeaderNavProps {
  onScrollToHero: () => void;
  onScrollToServices: () => void;
  onScrollToContact: () => void;
}

export function HeaderNav({ onScrollToHero, onScrollToServices, onScrollToContact }: HeaderNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        
        {/* Core Initials Brand Logo */}
        <button 
          onClick={() => {
            onScrollToHero();
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-2.5 group cursor-pointer text-left"
          id="nav-logo-btn"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 overflow-hidden flex items-center justify-center p-1.5 transition-all duration-300 group-hover:bg-slate-100 group-hover:border-slate-300 shadow-sm">
            <img 
              src={brandLogo} 
              alt="Junaid Dar Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="font-bold text-slate-900 tracking-tight block text-sm sm:text-base leading-tight">JD Portfolio</span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider block leading-tight">EXECUTIVE PROFILE</span>
          </div>
        </button>

        {/* Desktop Navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <button 
            onClick={onScrollToHero}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            About
          </button>
          <button 
            onClick={onScrollToServices}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Core Experience
          </button>
          <button 
            onClick={onScrollToContact}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Contact & Hire
          </button>
        </nav>

        {/* Desktop LinkedIn Action buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={BIO_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 flex items-center gap-1.5 bg-[#0a66c2]/5 hover:bg-[#0a66c2]/10 border border-[#0a66c2]/10 text-[#0a66c2] text-xs font-bold rounded-lg transition-all"
            id="nav-linkedin-action"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>Connect LinkedIn</span>
          </a>
          <button
            onClick={onScrollToContact}
            className="px-4 py-2 bg-slate-900 hover:bg-brand-600 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
            id="nav-consult-action"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu triggers */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-500 hover:text-slate-900 cursor-pointer"
          id="mobile-menu-trigger"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 py-6 px-6 space-y-4 animate-slideDown" id="mobile-drawer">
          <div className="flex flex-col gap-4 text-sm font-bold text-slate-700 text-left">
            <button 
              onClick={() => {
                onScrollToHero();
                setMobileMenuOpen(false);
              }}
              className="py-2 hover:text-slate-950 cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => {
                onScrollToServices();
                setMobileMenuOpen(false);
              }}
              className="py-2 hover:text-slate-950 cursor-pointer"
            >
              Experience
            </button>
            <button 
              onClick={() => {
                onScrollToContact();
                setMobileMenuOpen(false);
              }}
              className="py-2 hover:text-slate-950 cursor-pointer"
            >
              Get in Touch
            </button>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={BIO_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 flex items-center justify-center gap-2 bg-[#0a66c2] text-white text-xs font-bold rounded-xl"
              id="mobile-linkedin-btn"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
            </a>
            <button
              onClick={() => {
                onScrollToContact();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-slate-950 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer"
              id="mobile-contact-btn"
            >
              <span>Request Callback</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
