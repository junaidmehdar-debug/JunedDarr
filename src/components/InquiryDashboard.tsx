import React, { useState, useEffect } from 'react';
import { Mail, Send, Linkedin, Check, Clock, Trash2, HelpCircle, Briefcase, Plus, ShieldCheck, FileDown, Calendar } from 'lucide-react';

interface SavedInquiry {
  id: string;
  recruiterName: string;
  companyName: string;
  email: string;
  linkedin: string;
  requestType: 'interview' | 'resume-pdf' | 'consultation';
  notes: string;
  createdAt: string;
}

export function InquiryDashboard() {
  const [formData, setFormData] = useState({
    recruiterName: '',
    companyName: '',
    email: '',
    linkedin: '',
    requestType: 'interview' as 'interview' | 'resume-pdf' | 'consultation',
    notes: ''
  });
  
  // Success state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [allInquiries, setAllInquiries] = useState<SavedInquiry[]>([]);
  const [activeTab, setActiveTab] = useState<'form' | 'inbox'>('form');

  // Load inquiries from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('junaid_dar_recruiter_inquiries');
    if (saved) {
      try {
        setAllInquiries(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse inquiries", e);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.recruiterName || !formData.email) return;

    const newInquiry: SavedInquiry = {
      id: `inq-${Date.now()}`,
      recruiterName: formData.recruiterName,
      companyName: formData.companyName || 'N/A',
      email: formData.email,
      linkedin: formData.linkedin,
      requestType: formData.requestType,
      notes: formData.notes,
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    // Submit payload to Netlify static forms backend structure
    const encode = (data: Record<string, string>) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "recruiter-opportunity", ...formData })
    })
      .then(() => console.log("Opportunity successfully submitted to Netlify Forms backend!"))
      .catch(error => console.error("Netlify static post failed:", error));

    const updated = [newInquiry, ...allInquiries];
    setAllInquiries(updated);
    localStorage.setItem('junaid_dar_recruiter_inquiries', JSON.stringify(updated));

    // Clear form
    setFormData({
      recruiterName: '',
      companyName: '',
      email: '',
      linkedin: '',
      requestType: 'interview',
      notes: ''
    });
    setIsSubmitted(true);

    // Auto navigate to inbox explorer preview to let user see their submission immediately
    setTimeout(() => {
      setIsSubmitted(false);
      setActiveTab('inbox');
    }, 1800);
  };

  const handleDeleteInquiry = (id: string) => {
    const updated = allInquiries.filter(i => i.id !== id);
    setAllInquiries(updated);
    localStorage.setItem('junaid_dar_recruiter_inquiries', JSON.stringify(updated));
  };

  return (
    <section id="contact-section" className="py-20 bg-gradient-to-b from-white to-slate-50 relative border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-mono tracking-widest text-brand-600 uppercase font-semibold">Recruiter / Client Desk</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 font-display">
            Schedule a Meet / Secure Resume
          </h2>
          <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
            Interested in adding this candidate to your team, scheduling a formal HR interview, or requesting an offline resume copy? Submit below. All requests persist locally in the Sandboxed Inbox Explorer and dispatch instant email notifications via Netlify.
          </p>
        </div>

        {/* Dashboard Tabs header */}
        <div className="flex border-b border-slate-200 max-w-lg mx-auto mb-10 overflow-hidden rounded-t-xl" id="dashboard-navigator">
          <button
            onClick={() => setActiveTab('form')}
            className={`flex-1 py-3.5 text-xs sm:text-sm font-bold transition-all text-center border-b-2 cursor-pointer ${
              activeTab === 'form'
                ? 'bg-slate-50 border-brand-600 text-brand-700'
                : 'bg-white border-transparent text-slate-500 hover:text-slate-900'
            }`}
            id="builder-tab-btn"
          >
            Submit Opportunity
          </button>
          <button
            onClick={() => setActiveTab('inbox')}
            className={`flex-1 py-3.5 text-xs sm:text-sm font-bold transition-all text-center border-b-2 cursor-pointer relative flex items-center justify-center gap-2 ${
              activeTab === 'inbox'
                ? 'bg-slate-50 border-brand-600 text-brand-700'
                : 'bg-white border-transparent text-slate-500 hover:text-slate-900'
            }`}
            id="sandbox-tab-btn"
          >
            <span>Lead Inquiry Inbox</span>
            {allInquiries.length > 0 && (
              <span className="w-5 h-5 bg-brand-600 text-white rounded-full text-[10px] flex items-center justify-center font-bold animate-pulse">
                {allInquiries.length}
              </span>
            )}
          </button>
        </div>

        {/* Dashboard Panels */}
        <div className="bg-white rounded-3xl border border-slate-150 shadow-xl overflow-hidden min-h-[460px] max-w-4xl mx-auto" id="dashboard-main-panel">
          
          {activeTab === 'form' ? (
            <div className="p-6 sm:p-8 lg:p-10 relative text-left">
              {isSubmitted ? (
                <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-brand-50 border border-brand-100 rounded-2xl flex items-center justify-center text-brand-600 shadow-md">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-slate-900">Request Logged & Dispatched!</h4>
                    <p className="text-slate-500 text-xs sm:text-sm max-w-sm leading-relaxed font-light">
                      Your inquiry has been stored inside the local client sandbox database and dispatched via Netlify Forms successfully.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#d4af37] animate-pulse">
                    NAVIGATING TO INBOX DISPATCH BOARD...
                  </span>
                </div>
              ) : null}

              <form 
                onSubmit={handleSubmit} 
                name="recruiter-opportunity" 
                data-netlify="true" 
                className="space-y-6"
              >
                {/* Netlify automatic React form integration identifier */}
                <input type="hidden" name="form-name" value="recruiter-opportunity" />

                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-lg font-bold text-slate-800">Direct Opportunity Form</h3>
                  <p className="text-xs text-slate-400">Perfect for executive search firms, hiring managers, corporate HRs, and potential clients.</p>
                </div>

                <div className="space-y-4">
                  {/* Name & Title */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 focus-within:text-brand-600">
                      <label className="text-xs font-mono tracking-wider text-slate-500 block">YOUR NAME / HR LEAD *</label>
                      <input
                        type="text"
                        name="recruiterName"
                        required
                        value={formData.recruiterName}
                        onChange={handleInputChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-800"
                      />
                    </div>

                    <div className="space-y-1.5 focus-within:text-brand-600">
                      <label className="text-xs font-mono tracking-wider text-slate-500 block">COMPANY / AGENCY NAME</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="e.g. Executive Search Ltd."
                        className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Mail & Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 focus-within:text-brand-600">
                      <label className="text-xs font-mono tracking-wider text-slate-500 block">WORK EMAIL *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="sarah@agency.com"
                        className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-800"
                      />
                    </div>

                    <div className="space-y-1.5 focus-within:text-brand-600">
                      <label className="text-xs font-mono tracking-wider text-slate-500 block">ACTION REQUIRED</label>
                      <select
                        name="requestType"
                        value={formData.requestType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-800"
                      >
                        <option value="interview">Request Executive Interview</option>
                        <option value="resume-pdf">Request Word/PDF Resume copy</option>
                        <option value="consultation">Request Commercial Advisory/Project</option>
                      </select>
                    </div>
                  </div>

                  {/* LinkedIn link */}
                  <div className="space-y-1.5 focus-within:text-brand-600">
                    <label className="text-xs font-mono tracking-wider text-slate-500 block flex items-center gap-1.5">
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>YOUR LINKEDIN PROFILE URL</span>
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      placeholder="e.g. www.linkedin.com/in/recruiterprofile"
                      className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-800"
                    />
                  </div>

                  {/* Project description notes */}
                  <div className="space-y-1.5 focus-within:text-brand-600">
                    <label className="text-xs font-mono tracking-wider text-slate-500 block">PROPOSED ROLE DESCRIPTION / ADVISORY DETAILS</label>
                    <textarea
                      name="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Provide some details regarding the target scope of work, company growth targets, or timeline specifications..."
                      className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 focus:bg-white resize-none transition-all text-slate-800 leading-relaxed font-light"
                    />
                  </div>
                </div>

                {/* Submissions button details */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-slate-400 leading-tight">
                    * Required fields. Submitting aggregates this directly inside the Sandbox lead panel below and triggers automatic email notifications on Netlify.
                  </span>
                  <button
                    type="submit"
                    disabled={!formData.recruiterName || !formData.email}
                    className="w-full sm:w-auto px-6 py-3.5 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    id="submit-inquiry-btn"
                  >
                    <span>Submit Opportunity</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Recruiter Inbox Explorer preview panel */
            <div className="p-6 sm:p-8 lg:p-10 text-left space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Locally Aggregated Opportunities</h3>
                  <p className="text-xs text-slate-400">Review all recruiter interests and HR requests filed on this device.</p>
                </div>
                {allInquiries.length > 0 && (
                  <button
                    onClick={() => {
                      if(window.confirm("Are you sure you want to clear the local inbox database?")) {
                        setAllInquiries([]);
                        localStorage.removeItem('junaid_dar_recruiter_inquiries');
                      }
                    }}
                    className="flex items-center gap-1 text-slate-400 hover:text-red-500 text-xs font-semibold cursor-pointer transition-colors bg-red-50 hover:bg-red-100/50 py-1.5 px-3 rounded-lg border border-red-200/30"
                    id="clear-inbox-btn"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear Sandbox DB</span>
                  </button>
                )}
              </div>

              {allInquiries.length === 0 ? (
                <div className="py-16 text-center space-y-3 animate-fadeIn" id="blank-slate-inbox">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center max-w-max mx-auto text-slate-400">
                    <HelpCircle className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-700 font-sans">No Opportunities Filed Yet</h4>
                    <p className="text-xs text-slate-400 max-w-xs mx-auto font-light">
                      Recruiters and CEOs can submit mock interview scheduling or resume downloads using the "Submit Opportunity" tab to populate this list.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4" id="inbox-list-container">
                  {allInquiries.map((inq) => (
                    <div
                      key={inq.id}
                      className="p-5 rounded-2xl border border-slate-100 hover:border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                    >
                      <div className="space-y-2.5 flex-1 text-left">
                        {/* Status tag */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`text-[10px] font-mono border px-2 py-0.5 rounded-full font-bold flex items-center gap-1 ${
                            inq.requestType === 'interview' 
                              ? 'bg-indigo-50 border-indigo-100 text-indigo-700' 
                              : inq.requestType === 'resume-pdf'
                              ? 'bg-emerald-50 border-emerald-100 text-emerald-700'
                              : 'bg-amber-50 border-amber-100 text-amber-700'
                          }`}>
                            {inq.requestType === 'interview' && <Calendar className="w-3 h-3" />}
                            {inq.requestType === 'resume-pdf' && <FileDown className="w-3 h-3" />}
                            {inq.requestType === 'interview' && "INTERVIEW PROPOSAL"}
                            {inq.requestType === 'resume-pdf' && "RESUME COPY OFFER"}
                            {inq.requestType === 'consultation' && "COMMERCIAL PROJECT"}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {inq.createdAt}
                          </span>
                        </div>

                        {/* Recruiter Details */}
                        <div className="space-y-1">
                          <h4 className="text-base font-bold text-slate-900">{inq.recruiterName}</h4>
                          <span className="text-xs text-slate-500 font-medium block">Hiring Lead at <span className="text-slate-700 font-semibold">{inq.companyName}</span></span>
                          <span className="text-xs text-slate-400 font-mono block">{inq.email}</span>
                          
                          {inq.linkedin && (
                            <a 
                              href={inq.linkedin.startsWith('http') ? inq.linkedin : `https://${inq.linkedin}`}
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-xs text-brand-600 hover:text-brand-800 font-semibold inline-flex items-center gap-1 cursor-pointer pt-0.5"
                            >
                              <Linkedin className="w-3.5 h-3.5" />
                              <span>View Recruiter Profile</span>
                            </a>
                          )}
                        </div>

                        {/* Proposal Comments */}
                        {inq.notes && (
                          <div className="p-3 bg-white rounded-xl border border-slate-150 text-xs text-slate-600 leading-relaxed font-light">
                            {inq.notes}
                          </div>
                        )}
                      </div>

                      <div className="flex md:flex-col items-end gap-2 w-full md:w-auto shrink-0 border-t md:border-t-0 border-slate-100 pt-4 md:pt-0">
                        <button
                          onClick={() => handleDeleteInquiry(inq.id)}
                          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                          title="Delete request"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
