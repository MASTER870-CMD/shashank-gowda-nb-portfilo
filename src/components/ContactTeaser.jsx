'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Terminal, 
  Mail, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  MapPin 
} from 'lucide-react';

export default function ContactTeaser() {
  return (
    <section id="contact" className="py-24 bg-obsidian-950 relative overflow-hidden">
      {/* Anchor for nav smooth scrolling */}
      <div id="contact-gateway" className="scroll-mt-24" />

      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-radial-gold-glow pointer-events-none -z-10 opacity-60" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
        
        {/* Executive Engagement Card */}
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-white/[0.04] via-obsidian-900/80 to-obsidian-950 border border-gold/30 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden">
          
          {/* Top Metallic Horizon Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          
          {/* Subtle Corner Radial Aura */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-gold/40 text-xs font-mono text-gold uppercase tracking-widest mb-5 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <Terminal className="w-3.5 h-3.5 text-gold animate-pulse" />
                <span>Executive Engagement Gateway</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-[1.15]">
                Ready to Architect <span className="text-gold-gradient">Scalable Software</span> & AI Infrastructure?
              </h2>

              <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
                Targeting <span className="text-gold font-semibold">1Cr+ INR packages</span> & Principal Systems Architect roles. Available for distributed backend design, low-latency API optimization, or fractional CTO advisory.
              </p>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-300">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/10">
                  <Mail className="w-3.5 h-3.5 text-gold" />
                  <span>shashankgowdanb166@gmail.com</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Bengaluru, IN (Hybrid / Remote)</span>
                </div>
              </div>
            </div>

            {/* Right Action Cluster */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F4D068] to-[#C59B27] text-obsidian-950 font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(212,175,55,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)] hover:shadow-[0_0_45px_rgba(212,175,55,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
              >
                <span>Initiate Architectural Engagement</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="p-3 rounded-xl bg-obsidian-900/90 border border-white/10 text-center">
                <div className="text-[11px] font-mono text-neutral-400 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse"></span>
                  <span>Node.js REST API Gateway Active</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
