import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { 
  MARY_ANNE_EXPERIENCE, 
  PAKISTAN_EMPLOYERS, 
  PAKISTAN_EXPERIENCE_SUMMARY, 
  EDUCATION, 
  LANGUAGES, 
  CORE_INDUSTRIES 
} from '../data';
import pgProducts from '../assets/images/pg_brand_products_1781125130537.png';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  TrendingUp, 
  CheckCircle, 
  FileCheck, 
  Star, 
  Building2, 
  Users, 
  DollarSign, 
  GraduationCap, 
  Languages,
  Activity,
  Award,
  BookOpen
} from 'lucide-react';

function renderCompanyLogo(name: string) {
  const normalized = name.toLowerCase();
  
  if (normalized.includes('friesland') || normalized.includes('campina')) {
    return (
      <div className="w-14 h-14 flex items-center justify-center bg-white border border-slate-150 rounded-2xl p-1.5 shrink-0 shadow-sm relative overflow-hidden group-hover:border-blue-300 transition-colors">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Detailed, colorful authentic FrieslandCampina sunburst / star symbol */}
          <g transform="translate(0, 0)">
            <path d="M50 12 C51.5 12, 53 22, 50 34 C47 22, 48.5 12, 50 12" fill="#e20074" transform="rotate(0 50 50)" />
            <path d="M50 12 C51.5 12, 53 22, 50 34 C47 22, 48.5 12, 50 12" fill="#ef4123" transform="rotate(36 50 50)" />
            <path d="M50 12 C51.5 12, 53 22, 50 34 C47 22, 48.5 12, 50 12" fill="#f58220" transform="rotate(72 50 50)" />
            <path d="M50 12 C51.5 12, 53 22, 50 34 C47 22, 48.5 12, 50 12" fill="#ffcc00" transform="rotate(108 50 50)" />
            <path d="M50 12 C51.5 12, 53 22, 50 34 C47 22, 48.5 12, 50 12" fill="#8fc63f" transform="rotate(144 50 50)" />
            <path d="M50 12 C51.5 12, 53 22, 50 34 C47 22, 48.5 12, 50 12" fill="#009444" transform="rotate(180 50 50)" />
            <path d="M50 12 C51.5 12, 53 22, 50 34 C47 22, 48.5 12, 50 12" fill="#00a79d" transform="rotate(216 50 50)" />
            <path d="M50 12 C51.5 12, 53 22, 50 34 C47 22, 48.5 12, 50 12" fill="#00aeef" transform="rotate(252 50 50)" />
            <path d="M50 12 C51.5 12, 53 22, 50 34 C47 22, 48.5 12, 50 12" fill="#0054a6" transform="rotate(288 50 50)" />
            <path d="M50 12 C51.5 12, 53 22, 50 34 C47 22, 48.5 12, 50 12" fill="#a04196" transform="rotate(324 50 50)" />
            <circle cx="50" cy="50" r="13" fill="white" />
            <circle cx="50" cy="50" r="8" fill="#0054a6" />
          </g>
        </svg>
      </div>
    );
  }
  
  if (normalized.includes('abudawood') || normalized.includes('p&g') || normalized.includes('procter')) {
    return (
      <div className="w-14 h-14 flex items-center justify-center bg-white border border-slate-150 rounded-2xl p-1 shrink-0 shadow-sm relative overflow-hidden group-hover:border-blue-300 transition-colors">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <radialGradient id="pgSphereGrad" cx="40%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#4bc3eb" />
              <stop offset="60%" stopColor="#0a69a3" />
              <stop offset="100%" stopColor="#023054" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="46" fill="url(#pgSphereGrad)" />
          <text 
            x="50" 
            y="59" 
            fontFamily="Georgia, 'Times New Roman', serif" 
            fontSize="26" 
            fontWeight="bold" 
            fontStyle="italic" 
            fill="white" 
            textAnchor="middle"
          >
            P&G
          </text>
        </svg>
      </div>
    );
  }
  
  if (normalized.includes('mayfair')) {
    return (
      <div className="w-14 h-14 flex items-center justify-center bg-white border border-slate-150 rounded-2xl p-1 shrink-0 shadow-sm relative overflow-hidden group-hover:border-red-300 transition-colors">
        <svg viewBox="0 0 140 100" className="w-full h-full scale-110">
          {/* Mayfair styled Red oval with golden border */}
          <ellipse cx="70" cy="50" rx="60" ry="38" fill="#d82a21" stroke="#f6b801" strokeWidth="3.5" />
          <text 
            x="70" 
            y="59" 
            fontFamily="'Arial Black', 'Trebuchet MS', sans-serif" 
            fontSize="24" 
            fontWeight="900" 
            fontStyle="italic" 
            fill="white" 
            textAnchor="middle" 
            letterSpacing="-1"
          >
            mayfair
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-sm shrink-0 shadow-sm">
      {name.substring(0, 2).toUpperCase()}
    </div>
  );
}

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
}

export function AnimatedCounter({ value, prefix = "", suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: "-100px 0px" });

  useEffect(() => {
    if (!isInView) return;
    
    let isCancelled = false;
    const duration = 1.8; // seconds
    const start = 0;
    const end = value;
    const startTime = performance.now();

    const updateCount = (now: number) => {
      if (isCancelled) return;
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const current = Math.round(start + easeProgress * (end - start));
      
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);

    return () => {
      isCancelled = true;
    };
  }, [value, isInView]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

export function ExperienceTimeline() {
  const [selectedEmployer, setSelectedEmployer] = useState<string | null>("Abudawood P&G");

  return (
    <section id="experience-section" className="py-20 bg-brand-50/15 border-y border-brand-100/30">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Core Highlighted Sectors Bar */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-mono tracking-widest text-brand-600 uppercase font-bold text-left">Target Domain Footprint</span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display tracking-tight">Focus Industries</h2>
            <p className="text-slate-500 text-sm font-light">
              Deep expertise and established networks across global FMCG, HORECA premium key accounts, IT automation, and Healthcare retail.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_INDUSTRIES.map((ind, idx) => {
              const colors = [
                'bg-blue-50 border-blue-100 text-blue-700',
                'bg-emerald-50 border-emerald-100 text-emerald-700',
                'bg-indigo-50 border-indigo-100 text-indigo-700',
                'bg-rose-50 border-rose-100 text-rose-700'
              ];
              const textColors = ['text-blue-600', 'text-emerald-600', 'text-indigo-600', 'text-rose-600'];
              return (
                <div 
                  key={ind.id} 
                  className={`p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition-all ${colors[idx % colors.length]}`}
                >
                  <span className="text-xs font-mono tracking-widest uppercase opacity-75 block mb-1">Sector {idx + 1}</span>
                  <h3 className="text-lg font-bold tracking-tight mb-2 font-display">{ind.name}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light font-sans">{ind.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dubai Core Highlight Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3.5 mb-8 border-b border-slate-205 pb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-extrabold text-slate-900 font-display tracking-tight">Dubai, UAE Professional Experience</h2>
              <p className="text-xs text-slate-500 font-mono">PRIMARY CAREER SHOWCASE (COMMERCIAL & HORECA DOMAIN)</p>
            </div>
          </div>

          {/* Mary Anne's Fresh Produce Experience - HIGHLY HIGHLIGHTED */}
          <div className="bg-white rounded-3xl border-2 border-brand-500/15 shadow-xl overflow-hidden mb-12">
            {/* Top header ribbon */}
            <div className="bg-gradient-to-r from-brand-700 via-brand-600 to-gold-600 px-6 py-4 sm:px-8 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-left space-y-1">
                <span className="px-2.5 py-0.5 bg-white/20 text-white rounded-full text-[10px] font-mono font-bold tracking-widest uppercase">
                  ⭐ FLAGSHIP UAE EXPERIENCE
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold font-display leading-tight">
                  {MARY_ANNE_EXPERIENCE.company}
                </h3>
              </div>
              <div className="flex flex-col items-start sm:items-end text-left sm:text-right shrink-0">
                {MARY_ANNE_EXPERIENCE.date && (
                  <span className="text-sm font-bold block">{MARY_ANNE_EXPERIENCE.date}</span>
                )}
                <span className="text-xs opacity-90 block">{MARY_ANNE_EXPERIENCE.location}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Short Description */}
              <div className="text-left bg-brand-50/40 p-4 rounded-xl border border-brand-100/50">
                <span className="text-[10px] font-mono text-brand-700 font-bold block mb-1">COMPANY FOOTPRINT</span>
                <p className="text-slate-700 text-sm leading-relaxed font-light">
                  {MARY_ANNE_EXPERIENCE.description}
                </p>
              </div>

              {/* Bullet highlights with key figures emphasized */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono tracking-widest text-brand-600 uppercase font-bold text-left">
                  Key Accomplishments & Commercial Audits
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Column: Bullet highlights */}
                  <div className="lg:col-span-8 space-y-3.5 text-left pr-4">
                    {MARY_ANNE_EXPERIENCE.bullets?.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-5 h-5 rounded-full bg-brand-50 border border-brand-100/70 flex items-center justify-center text-brand-650 shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 stroke-[3]" />
                        </div>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Right Column: Numeric Milestones */}
                  <div className="lg:col-span-4 bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-6 text-left shrink-0">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-2 font-bold select-none">
                      AUDITED CAMPAIGN METRICS
                    </span>
                    
                    <div className="space-y-5 font-mono">
                      <div className="border-b border-slate-200/50 pb-4">
                        <span className="text-3xl font-extrabold text-emerald-600 block leading-none tracking-tight">
                          <AnimatedCounter value={23} prefix="+" suffix="%" />
                        </span>
                        <span className="text-xs text-slate-500 font-medium block mt-1 font-sans">
                          MoM Revenue Surge (+33K AED) via SKU Cross-Selling
                        </span>
                      </div>

                      <div className="border-b border-slate-200/50 pb-4">
                        <span className="text-3xl font-extrabold text-brand-600 block leading-none tracking-tight">
                          <AnimatedCounter value={50} prefix="+" suffix="%" />
                        </span>
                        <span className="text-xs text-slate-500 font-medium block mt-1 font-sans">
                          Channel Margin Protection Improvements
                        </span>
                      </div>

                      <div className="border-b border-slate-200/50 pb-4">
                        <span className="text-3xl font-extrabold text-slate-800 block leading-none tracking-tight">
                          <AnimatedCounter value={33} prefix="+" suffix="%" />
                        </span>
                        <span className="text-xs text-slate-500 font-medium block mt-1 font-sans">
                          Territory Volume expansion YTD with 23 tier-1 clients
                        </span>
                      </div>

                      <div>
                        <span className="text-3xl font-extrabold text-[#d4af37] block leading-none tracking-tight">
                          <AnimatedCounter value={98} suffix="%" />
                        </span>
                        <span className="text-xs text-slate-500 font-medium block mt-1 font-sans">
                          Executive Chef & Procurement retention rate secured
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Other Dubai Roles - EXPANDED WITH PROFESSIONAL ACCOMPLISHMENTS */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-brand-600 uppercase font-bold text-left mb-6">
              Other UAE Strategic Consultancies & Sales Operations
            </h4>

            <div className="bg-white border hover:border-brand-500/20 rounded-3xl p-6 sm:p-8 shadow-sm text-left hover:shadow-md transition-all">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-mono bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full inline-block uppercase tracking-wide font-medium">
                    Corporate & Project-Based Engagements
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-display mt-2">Strategic Commercial & Sales Consultancies</h3>
                </div>
                <div className="text-left lg:text-right">
                  <p className="text-xs text-slate-500 font-mono">DUBAI, UAE &bull; 2023 TO 2025</p>
                  <p className="text-[10px] text-slate-400 font-light mt-0.5">Selective High-Value B2B Deployments</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Item 1: Sweet Celebrationz */}
                <div className="space-y-2.5 relative pl-4 md:pl-0 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1 md:before:hidden before:bg-brand-500/20">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono font-bold text-brand-600 uppercase tracking-wider">HORECA / Confections & Gifting</span>
                    <span className="text-sm font-extrabold text-slate-800 font-display">Sweet Celebrationz</span>
                    <span className="text-[11px] text-slate-400 font-mono mt-0.5">Oct 2023 &ndash; Aug 2024</span>
                  </div>
                  <p className="text-xs text-slate-550 font-light leading-relaxed">
                    Business Development Manager. Headed custom high-margin gifting solutions for corporate VIP networks.
                  </p>
                  <ul className="space-y-1.5 pt-1">
                    <li className="text-[11px] text-slate-600 font-light flex items-start gap-1.5">
                      <span className="text-brand-500 font-bold mt-0.5">&middot;</span>
                      <span>Onboarded <strong className="text-brand-700 font-semibold">15+ blue-chip clients</strong> and luxury planners for key campaigns.</span>
                    </li>
                    <li className="text-[11px] text-slate-600 font-light flex items-start gap-1.5">
                      <span className="text-brand-500 font-bold mt-0.5">&middot;</span>
                      <span>Engineered dynamic seasonal packaging, expanding average order values by <strong className="text-brand-700 font-semibold">24%</strong>.</span>
                    </li>
                  </ul>
                </div>

                {/* Item 2: Super Store Vending */}
                <div className="space-y-2.5 relative pl-4 md:pl-0 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1 md:before:hidden before:bg-amber-500/20 md:border-l md:border-slate-100 md:pl-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-wider">F&B Vending Automation</span>
                    <span className="text-sm font-extrabold text-slate-800 font-display">Super Store Vending</span>
                    <span className="text-[11px] text-slate-400 font-mono mt-0.5">Jan 2025 &ndash; Mar 2025</span>
                  </div>
                  <p className="text-xs text-slate-550 font-light leading-relaxed">
                    Senior Sales Consultant. Accelerated placement networks across corporate facilities and wellness centers.
                  </p>
                  <ul className="space-y-1.5 pt-1">
                    <li className="text-[11px] text-slate-600 font-light flex items-start gap-1.5">
                      <span className="text-amber-500 font-bold mt-0.5">&middot;</span>
                      <span>Optimized retail logistics and preventative service trails to increase F&B sales by <strong className="text-amber-700 font-semibold">18%</strong>.</span>
                    </li>
                    <li className="text-[11px] text-slate-600 font-light flex items-start gap-1.5">
                      <span className="text-amber-500 font-bold mt-0.5">&middot;</span>
                      <span>Secured lucrative workplace equipment placements and streamlined contracts.</span>
                    </li>
                  </ul>
                </div>

                {/* Item 3: Hadero Coffee Company */}
                <div className="space-y-2.5 relative pl-4 md:pl-0 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1 md:before:hidden before:bg-emerald-500/20 md:border-l md:border-slate-100 md:pl-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-wider">Premium Coffee Solutions</span>
                    <span className="text-sm font-extrabold text-slate-800 font-display">Hadero Coffee Company</span>
                    <span className="text-[11px] text-slate-400 font-mono mt-0.5">Sep 2024 &ndash; Dec 2024</span>
                  </div>
                  <p className="text-xs text-slate-550 font-light leading-relaxed">
                    Business Development Consultant. Captured commercial office coffee services and premium roasts partnerships.
                  </p>
                  <ul className="space-y-1.5 pt-1">
                    <li className="text-[11px] text-slate-600 font-light flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold mt-0.5">&middot;</span>
                      <span>Landed <strong className="text-emerald-700 font-semibold">12 boutique hospitality accounts</strong> in just two months via targeted demos.</span>
                    </li>
                    <li className="text-[11px] text-slate-600 font-light flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold mt-0.5">&middot;</span>
                      <span>Acquired multi-site pantry supplies securing steady-flowing recurring revenues.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Pakistan employers show with logos/badges */}
        <div className="mb-20">
          <div className="flex items-center gap-3.5 mb-8 border-b border-slate-205 pb-4">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-extrabold text-slate-900 font-display tracking-tight">Earlier Professional History</h2>
              <p className="text-xs text-slate-500 font-mono">PAKISTAN TO GLOBAL SCALE DISTRIBUTORS & BRANDS (2010 TO 2023)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Logos display card */}
            <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-6 text-left">
              <div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">Key Corporate Employers Represented</h3>
                <p className="text-xs text-slate-550 font-light">
                  Direct commercial footprints with major global cooperatives, elite distributor houses, and consumer healthcare groups.
                </p>
              </div>              {/* Styled mock corporate logos/badges per user's prompt */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PAKISTAN_EMPLOYERS.map((employer, idx) => {
                  const isPG = employer.name.includes("Abudawood") || employer.name.includes("P&G");
                  const isActive = selectedEmployer === employer.name;
                  return (
                    <div 
                      key={idx} 
                      onClick={() => {
                        if (isPG) {
                          setSelectedEmployer(isActive ? null : employer.name);
                        }
                      }}
                      className={`p-5 rounded-2xl border transition-all duration-350 bg-white text-left flex flex-col justify-between space-y-4 shadow-sm group ${
                        isPG 
                          ? `cursor-pointer ring-1 ${
                              isActive 
                                ? "border-brand-500 ring-brand-500/20 bg-brand-50/5 shadow-md" 
                                : "border-brand-500/20 hover:border-brand-500 hover:shadow-lg hover:shadow-brand-500/5 ring-brand-500/5"
                            }`
                          : "border-slate-200/50 hover:border-slate-300 hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {/* Brand Logo Stamp */}
                        {renderCompanyLogo(employer.name)}
                        <div>
                          <span className="text-sm font-extrabold text-slate-800 tracking-tight block">{employer.name}</span>
                          {isPG && (
                            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 mt-1 rounded bg-brand-50 text-[9px] font-mono font-medium text-brand-700 border border-brand-100">
                              <span className="w-1 h-1 rounded-full bg-brand-500 animate-ping" />
                              {isActive ? "Showing Products" : "Click to view Products"}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-snug font-light">{employer.subtitle}</p>
                    </div>
                  );
                })}
              </div>

              {/* Procter & Gamble Brand Portfolio Product Showcase */}
              {selectedEmployer === "Abudawood P&G" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-5 sm:p-6 bg-slate-50 border border-brand-500/10 rounded-2xl space-y-5 text-left relative overflow-hidden"
                >
                  <button 
                    onClick={() => setSelectedEmployer(null)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-mono text-[10px]"
                    title="Close showcase"
                  >
                    ✕ Close
                  </button>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-5 space-y-3">
                      <span className="px-2.5 py-0.5 bg-brand-100/60 text-brand-700 text-[9px] rounded-full font-mono font-bold tracking-wider uppercase inline-block">
                        Managed Brand Catalog
                      </span>
                      <h4 className="text-base font-extrabold text-slate-900 tracking-tight font-display">
                        Represented Procter & Gamble Portfolio
                      </h4>
                      <p className="text-slate-550 text-xs leading-relaxed font-light font-sans">
                        Junaid Dar orchestrated trade marketing plans, commercial distribution routes, and retail sales pipelines across Pakistan territories for leading consumer segments:
                      </p>
                      
                      <div className="space-y-1.5 text-xs text-slate-600 font-sans">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
                          <span>Baby & Personal Care: <strong>Pampers, Always</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
                          <span>Oral & Grooming: <strong>Oral-B, Gillette</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
                          <span>Hair & Skin Tech: <strong>Pantene, Olay, Head & Shoulders</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
                          <span>Home Fabrics: <strong>Ariel, Fairy</strong></span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-7 bg-white p-2 rounded-xl border border-slate-205 shadow-sm overflow-hidden flex items-center justify-center relative group">
                      <img 
                        src={pgProducts} 
                        alt="Procter and Gamble Brand Portfolio managed by Junaid Dar" 
                        className="w-full max-h-[220px] object-contain rounded-lg transition-transform duration-500 group-hover:scale-101 select-none"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-slate-900/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-slate-550">
                <div className="flex items-start gap-2">
                  <span className="text-brand-600 font-bold select-none mt-0.5">&middot;</span>
                  <span><strong>Employers represented:</strong> Martin Dow Group, Mayfair Group, HICO IceCream, P&G partner Abudawood, and FrieslandCampina.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-600 font-bold select-none mt-0.5">&middot;</span>
                  <span><strong>Channels operated:</strong> Retail, Pharmacy, Modern Trade, traditional Wholesale, and premier corporate Key Accounts.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Key metrics panel */}
            <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 text-white text-left flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[12rem] h-[12rem] rounded-full bg-gold-500/5 blur-2xl pointer-events-none" />
              
              <div className="space-y-3 relative z-10">
                <span className="text-[10px] uppercase font-mono tracking-wider text-brand-300 block font-bold">
                  TERRITORY MILESTONES (PAKISTAN)
                </span>
                <span className="text-3xl font-extrabold text-gold-500 block font-mono">
                  {PAKISTAN_EXPERIENCE_SUMMARY.peakRevenue}
                </span>
                <span className="text-xs text-slate-400 block font-light leading-relaxed">
                  Highest commercial revenue volume Managed across active distribution pipelines.
                </span>
              </div>

              <div className="border-t border-slate-800/80 my-5 pt-4 space-y-3.5 text-xs text-slate-300 relative z-10">
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>09 Area Managers & 17 Territory Managers guided</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <TrendingUp className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>35 distributors with 23k+ numeric coverage</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Star className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>Highest tenure of 5 years and 7 months</span>
                </div>
              </div>

              <div className="bg-slate-950 p-3 rounded-lg border border-slate-850 text-[10px] text-slate-500 font-mono relative z-10 text-center">
                PEAK REGIONAL OPERATIONS: 2010 - 2023
              </div>
            </div>
          </div>
        </div>

        {/* Education & Languages credentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education list */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 text-left space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 pb-3 border-b border-slate-100">
              <GraduationCap className="w-5 h-5 text-brand-600" />
              <span>Academic Credentials</span>
            </h3>

            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0 mt-2" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{edu.degree}</h4>
                    <span className="text-xs font-mono text-slate-500">{edu.institution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages list */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 text-left space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 pb-3 border-b border-slate-100">
              <Languages className="w-5 h-5 text-brand-600" />
              <span>Language Proficiency</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {LANGUAGES.map((lang, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                  <h4 className="text-sm font-semibold text-slate-800">{lang.name}</h4>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mt-1">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
