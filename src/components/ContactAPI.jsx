'use client';

import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Terminal, 
  ShieldCheck, 
  Mail, 
  Briefcase, 
  User, 
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function ContactAPI() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    tier: 'Architecture Advisory',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('IDLE'); // IDLE | SUBMITTING | SUCCESS | ERROR
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const [confirmationData, setConfirmationData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation errors on typing
    if (validationErrors.length > 0) {
      setValidationErrors([]);
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('SUBMITTING');
    setErrorMessage('');
    setValidationErrors([]);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus('ERROR');
        setErrorMessage(data.detail || 'Validation failed on API gateway.');
        if (data.errors && Array.isArray(data.errors)) {
          setValidationErrors(data.errors);
        }
        return;
      }

      setStatus('SUCCESS');
      setConfirmationData(data.data);
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        tier: 'Architecture Advisory',
        subject: '',
        message: ''
      });
    } catch (err) {
      setStatus('ERROR');
      setErrorMessage('Network error: Unable to reach Express API gateway. Please verify connection.');
    }
  };

  return (
    <section id="contact" className="py-32 bg-obsidian-950 relative overflow-hidden">
      {/* Gold Ambient Glow (Zero purple) */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-radial-gold-glow pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-gold/30 text-xs font-mono text-gold uppercase tracking-widest mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>Encrypted REST API Gateway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Initiate <span className="text-gold-gradient">Architectural Engagement</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-base leading-relaxed font-light">
            Dispatches directly through the Node.js Express REST API (/api/contact) with automated RFC-compliant payload validation, rate-limiting, and ticket assignment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct System Specs & Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl glass-panel border border-white/10 hover:border-gold/30">
              <div className="text-xs font-mono uppercase tracking-widest text-gold font-semibold mb-2">
                Executive & Advisory Enquiries
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Shashank Gowda NB
              </h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                Available for principal architect roles, fractional CTO advisory, low-latency API architecture consulting, and enterprise AI model deployments.
              </p>

              <div className="space-y-4 font-mono text-xs text-neutral-300 border-t border-white/5 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-obsidian-900 border border-gold/30 flex items-center justify-center text-gold">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 block uppercase">Direct Channel</span>
                    <a href="mailto:shashankgowdanb166@gmail.com" className="text-white hover:text-gold transition-colors font-semibold">
                      shashankgowdanb166@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-obsidian-900 border border-gold/30 flex items-center justify-center text-gold">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 block uppercase">Target Package / Tier</span>
                    <span className="text-gold font-bold">1Cr+ INR / Principal Systems Architect</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-obsidian-900 border border-gold/30 flex items-center justify-center text-gold">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 block uppercase">Location & Mobilization</span>
                    <span className="text-white font-semibold">Bengaluru, India (Hybrid / Global Remote)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Telemetry Box */}
            <div className="p-6 rounded-2xl bg-obsidian-900/90 border border-gold/20 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-gold font-bold flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  <span>API ROUTE SPECIFICATION</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  HTTP 201 CREATED
                </span>
              </div>
              <div className="mt-3 space-y-1 text-neutral-400 text-[11px]">
                <p><span className="text-white">POST</span> /api/contact</p>
                <p><span className="text-white">Content-Type:</span> application/json</p>
                <p><span className="text-white">Security:</span> Leaky-bucket IP rate limit & RFC-7807 problem details</p>
                <p><span className="text-white">DB Plug-in:</span> Repository Pattern (PostgreSQL / AWS RDS ready)</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form with Live Express API submission */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card-gold relative">
              
              {status === 'SUCCESS' && confirmationData ? (
                <div className="py-10 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold flex items-center justify-center text-gold mx-auto shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white">
                    Engagement Dispatched Successfully
                  </h3>
                  <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed font-light">
                    Your transmission has been verified and registered on the Express systems gateway. Shashank Gowda NB will review the specification and respond promptly.
                  </p>

                  {/* Reference Ticket Details */}
                  <div className="p-4 rounded-xl bg-obsidian-950 border border-gold/30 text-left max-w-md mx-auto font-mono text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Reference Ticket:</span>
                      <span className="text-gold font-bold">{confirmationData.referenceId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Timestamp:</span>
                      <span className="text-white">{new Date(confirmationData.timestamp).toLocaleTimeString()} UTC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Target Role:</span>
                      <span className="text-gold-light">{confirmationData.tier}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setStatus('IDLE')}
                    className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white hover:border-gold hover:text-gold text-xs font-mono uppercase tracking-wider transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Alert / Error Banner */}
                  {status === 'ERROR' && (
                    <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-start gap-3">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
                      <div>
                        <div className="font-bold">{errorMessage}</div>
                        {validationErrors.length > 0 && (
                          <ul className="mt-1 list-disc list-inside space-y-0.5 text-neutral-300">
                            {validationErrors.map((err, i) => (
                              <li key={i}>{err.message}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                        Full Name / Principal <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Satya Nadella"
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950/80 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                        Corporate / Verified Email <span className="text-gold">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="satya@enterprise.com"
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950/80 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                        Organization / Enterprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Google / Microsoft / Series B"
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950/80 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm transition-colors"
                      />
                    </div>

                    {/* Engagement Tier */}
                    <div>
                      <label htmlFor="tier" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                        Target Engagement Tier
                      </label>
                      <select
                        id="tier"
                        name="tier"
                        value={formData.tier}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm transition-colors"
                      >
                        <option value="1Cr+ Principal Systems Architect">1Cr+ Principal Systems Architect</option>
                        <option value="Architecture Advisory & Consulting">Architecture Advisory & Consulting</option>
                        <option value="AI & Deep Learning Infrastructure">AI & Deep Learning Infrastructure</option>
                        <option value="Custom Linux Kernel / OS Tooling">Custom Linux Kernel / OS Tooling</option>
                        <option value="Executive Confidential Discussion">Executive Confidential Discussion</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Inquiry Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Architecting Distributed AI Telemetry Cluster"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950/80 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      System Specification / Message <span className="text-gold">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline architectural requirements, scale parameters, latency goals, or scheduling..."
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950/80 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'SUBMITTING'}
                    className="w-full py-4 rounded-xl bg-gold text-obsidian-950 font-heading font-bold text-sm tracking-wider uppercase hover:bg-white hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    {status === 'SUBMITTING' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Validating & Dispatching Payload...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit to Express Gateway</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-neutral-400">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                      Strict Payload Sanitization
                    </span>
                    <span>&bull;</span>
                    <span>Zero Data Leakage</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
