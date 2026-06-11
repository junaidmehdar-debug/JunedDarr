import defaultProfilePic from "./assets/images/regenerated_image_1781123882263.jpg";

export interface Experience {
  role: string;
  company: string;
  location: string;
  date: string;
  description?: string;
  bullets?: string[];
  industry: string;
}

export interface PakistanEmployer {
  name: string;
  logoColor: string; // Tailwind class name or hex for rendering a nice visual badge
  logoText: string;
  subtitle: string;
}

export const BIO_DATA = {
  name: "Junaid Dar",
  title: "Commercial Business Development & Key Account Manager",
  subtitle: "Food & Beverage Solutions | B2B HORECA Sales | FMCG Growth | Agribusiness | Distribution Sales | Key Account Acquisition & Management",
  location: "Dubai, UAE",
  phone: "+971-52-402-4785",
  email: "resume@junaiddars.com",
  linkedin: "https://www.linkedin.com/in/junaidmdar",
  profilePic: defaultProfilePic,
  visaStatus: "",
  drivingLicense: "Dubai Driving License",
  availability: "Immediate Availability",
  summary: "Commercial & Key Account Leader with 9+ years of B2B distribution and GTM expansion expertise. Proven champion in high-value UAE HoReCa portfolios, Joint Business Planning (JBP), and CRM-driven pipeline solutions that accelerate sales."
};

export const CORE_INDUSTRIES = [
  { id: "fmcg", name: "FMCG Distribution", desc: "Expertise in high-frequency volume scaling, complex multi-channel trade, and robust GTM activations.", iconName: "TrendingUp" },
  { id: "horeca", name: "HORECA Solutions", desc: "Cultivating partnerships with five-star hospitality groups, Michelin-starred chefs, and corporate procurement channels.", iconName: "Utensils" },
  { id: "it", name: "Commercial Tech", desc: "Driving sales-force automation, CRM pipeline migrations (monday.com, CRM ecosystems), and data-driven performance modeling.", iconName: "Laptop" },
  { id: "healthcare", name: "Healthcare & Well-being", desc: "Navigating pharmaceutical routes, healthcare networks, nutraceutical distribution, and retail pharmacy accounts.", iconName: "Heart" }
];

export const CORE_COMPETENCIES = [
  { title: "Strategic Business Development", details: "Go-to-Market (GTM) Strategy, Strategic Account Acquisition, Competitive Positioning, Territory Expansion" },
  { title: "Key Account Management (KAM)", details: "Joint Business Planning (JBP), High-Level Stakeholder Alignment, Share of Wallet (SoW) Expansion, Retention" },
  { title: "Distribution & Route-to-Market", details: "RTM Optimization, Cold Chain Logistics Logistics, Direct-Store-Delivery (DSD), Performance Benchmarking" },
  { title: "Financial Acumen & Governance", details: "Commercial Contract Negotiations, Profit & Loss (P&L) Oversight, Channel Margin Protection, Credit Control Operations" },
  { title: "Agribusiness & Category Management", details: "Fresh Produce Shelf-Space Optimization, Perishable Asset Lifecycle Control, SKU Assortment Maximization" },
  { title: "Sales Force Leadership", details: "Cross-Functional Collaboration, High-Performance Sales Coaching, KPI Implementation, Strategic CRM Pipeline Automation" }
];

export const TECHNICAL_SKILLS = {
  crms: ["Monday.com (Expert Automation & CRM Management)", "Sales Force Automation (SFA) Platforms", "HubSpot", "LinkedIn Sales Navigator"],
  analytics: ["Advanced Excel (Financial Modeling, Key Account Diagnostics)", "Power BI Data Visualization", "SAP / Enterprise Supply Chain Platforms"],
  marketing: ["B2B Brand Activation", "Direct Email Marketing Pipelines", "Point of Sale Merchandise (POSM) Optimization"],
  soft: ["C-Suite & Executive Stakeholder Engagement", "Consultative & Solution-Based Selling", "High Personal EQ & Adaptive Persuasion", "Negotiation Rigor"]
};

export const MARY_ANNE_EXPERIENCE: Experience = {
  role: "Business Development Manager",
  company: "Mary Anne’s Fresh Produce - HoReCa and Key Accounts",
  location: "Dubai, UAE",
  date: "",
  industry: "HORECA / Agribusiness / Food Solutions",
  description: "Mary Anne's is a pioneering agribusiness addressing the UAE's reliance on imported produce by cultivation of local, organic microgreens, specialty herbs, and edible flowers for five-star hospitality and luxury dining venues.",
  bullets: [
    "Drove a consistent +23% MoM revenue acceleration through tailored SKU cross-selling and strategic portfolio bundling.",
    "Onboarded 23 tier-1 HoReCa accounts, generating a 33% expansion in territory sales volume YTD.",
    "Partnered with luxury hotel chains using targeted Joint Business Planning (JBP) to secure 98% major client retention.",
    "Led seamless platform migration of 200+ key accounts to CRM (monday.com), cutting pipeline friction by 35%.",
    "Restructured corporate credit control workflows, reducing aging outstanding receivables by 25."
  ]
};

export const OTHER_DUBAI_EXPERIENCE: Experience[] = [
  {
    role: "Senior Sales Executive",
    company: "Super Store Vending Machines – Horeca and F&B Solution",
    location: "Dubai, UAE (Project-based)",
    date: "January 2025 – March 2025",
    industry: "HORECA / F&B Solutions",
    description: "Super Store Vending provides premier hot beverage, espresso, and smart vending automation solutions to luxury spaces, multi-location gyms, and tier-1 corporate complexes in Dubai.",
    bullets: [
      "Negotiated lucrative equipment placements and supply contracts across core corporate networks.",
      "Optimized retail logistics and servicing flow to increase hot beverage sales volume by 18%."
    ]
  },
  {
    role: "Business Development Executive",
    company: "Hadero Coffee Company",
    location: "Dubai, UAE (Project-based)",
    date: "September 2024 - December 2024",
    industry: "F&B / Corporate & HORECA Coffee Solutions",
    description: "Hadero is a boutique commercial coffee Roastery specializing in supplying premium whole bean roasts and high-fidelity modular brewing equipment to major offices and cafes.",
    bullets: [
      "Acquired hotel pantry contracts yielding consistent recurring commercial wholesale revenue.",
      "Secured 12 boutique hospitality partnerships in two months via targeted sensory demos."
    ]
  },
  {
    role: "Business Development Manager",
    company: "Sweet Celebrationz",
    location: "Dubai, UAE",
    date: "October 2023 - August 2024",
    industry: "HORECA / Confections & Corporate Gifting",
    description: "Sweet Celebrationz delivers bespoke premium cakes, gourmet confections, and tailored VIP hospitality gifting offerings to premier hotels, corporate events, and wedding decorators.",
    bullets: [
      "Onboarded 15+ blue-chip corporations and luxury event planners for VIP corporate campaigns.",
      "Boosted average transaction basket size (AOV) by 24% through custom seasonal pricing matrices."
    ]
  }
];

export const PAKISTAN_EMPLOYERS: PakistanEmployer[] = [
  {
    name: "FrieslandCampina",
    logoColor: "bg-[#004f9f]", // FrieslandCampina royal blue
    logoText: "FC",
    subtitle: "Global Dairy Cooperative Leaders (Engro Foods JV)"
  },
  {
    name: "Abudawood P&G",
    logoColor: "bg-[#0f4c81]", // P&G royal blue/teal
    logoText: "P&G",
    subtitle: "Procter & Gamble's Primary Corporate Distributor Network"
  },
  {
    name: "Mayfair Group",
    logoColor: "bg-[#d82a21]", // Mayfair prominent red
    logoText: "MF",
    subtitle: "Leading Biscuits, Confectionery & Food Brand Group"
  }
];

export const PAKISTAN_EXPERIENCE_SUMMARY = {
  date: "2010 to 2023",
  roles: ["Zone Manager", "Business Development Manager", "Area Manager & Supervisor", "Territory Manager"],
  companies: ["Martin Dow Group", "Mayfair Group", "HICO IceCream", "P&G Abudawood", "Friesland Campina"],
  channels: "Retail, Pharmacy | Modern Trade, Retail/WS, International Accounts | Key Accounts",
  peakRevenue: "Highest ~$7.9M USD",
  distributionScale: "09 Area Managers, 17 Territory Managers, and 35 distributors with 23k+ numeric coverage",
  industries: "Medicines, Vitamins, Nutraceuticals | Biscuits & Confectionery | Personal Care | Food & Beverage",
  workingStyle: "Average working duration: Highest tenure is 5 years and 7 months, with an average span of 3 years."
};

export const EDUCATION = [
  {
    degree: "Master of Business Administration (Marketing)",
    institution: "SZABIST, Pakistan"
  },
  {
    degree: "BCS (Hons) - Bachelor of Computer Science",
    institution: "SZABIST, Pakistan"
  }
];

export const KEY_UAE_ACCOUNTS = [
  "Atlantis", "Jumeirah", "Hilton Group", "Sofitel", "Emaar Hospitality", "Capital Catering (ADNEC)"
];

export const LANGUAGES = [
  { name: "English", level: "Fluent" },
  { name: "Urdu", level: "Native" },
  { name: "Hindi", level: "Professional" }
];
