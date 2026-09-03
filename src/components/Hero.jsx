'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Cpu, Database, Server, Layers, Terminal, ArrowRight, Download, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-obsidian-950 bg-grid-pattern"
    >
      {/* Anti-Gravity Gold Radial Aura (Zero purple) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-radial-gold-glow pointer-events-none -z-10" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
            
            {/* Enterprise Status Pill */}
            <div className="inline-flex items-center justify-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-neutral-800 shadow-sm w-full sm:w-auto text-center">
              <span className="w-2 h-2 rounded-full bg-gold animate-ping shrink-0"></span>
              <span className="text-[10px] sm:text-xs font-mono text-gold-light tracking-wide uppercase font-semibold whitespace-normal">
                Available for Architecture Advisory & Consulting
              </span>
            </div>

            {/* Candidate Identity & Title */}
            <div>
              <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-neutral-400 mb-2">
                Candidate Profile
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                Shashank Gowda NB
              </h2>
              <div className="mt-2 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 text-base sm:text-xl font-mono text-gold font-medium">
                <span>AI Engineer & Systems Architect</span>
                <span className="hidden sm:inline text-neutral-500">|</span>
                <span className="text-xs px-2.5 py-0.5 rounded bg-gold/10 border border-gold/30 text-gold-light uppercase tracking-wider shrink-0">
                  Bengaluru, IN
                </span>
              </div>
            </div>

            {/* Exact Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight leading-tight">
              Architecting Scalable <span className="text-gold-gradient">Software & AI Ecosystems.</span>
            </h1>

            {/* Exact Bio */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed font-light max-w-2xl border-l-2 border-gold/40 pl-4 py-1">
              "I engineer production-grade enterprise software, high-throughput REST/gRPC APIs, cross-platform applications, and distributed backend architectures. From low-level Linux systems and network protocols to deploying deep learning models on AWS, I build fault-tolerant ecosystems designed for scale and zero latency."
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 pt-2">
              <a
                href="#projects"
                className="w-full sm:w-auto justify-center px-7 py-3.5 rounded-xl bg-gold text-obsidian-950 font-heading font-bold text-xs sm:text-sm tracking-wide uppercase hover:bg-white hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] transition-all duration-300 flex items-center gap-2 group text-center"
              >
                <span>Explore Engineering Grid</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto justify-center px-7 py-3.5 rounded-xl bg-white/[0.03] border border-white/15 text-white font-heading font-semibold text-xs sm:text-sm tracking-wide hover:border-gold hover:bg-gold/5 transition-all duration-300 flex items-center gap-2 text-center"
              >
                <span>Request Architectural Review</span>
              </a>
            </div>

            {/* Systems Performance SLA Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap justify-between gap-4 sm:gap-6 max-w-lg">
              <div className="min-w-[80px]">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  &lt;10<span className="text-gold text-lg">ms</span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-0.5">
                  P99 API Latency
                </div>
              </div>
              <div className="min-w-[80px]">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  99.99<span className="text-gold text-lg">%</span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-0.5">
                  High Availability SLA
                </div>
              </div>
              <div className="min-w-[80px]">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  Zero<span className="text-gold text-lg">DB</span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-0.5">
                  Memory-first Throughput
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Systems Terminal & Photo Visual Column */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Anti-Gravity Floating Card Wrapper */}
            <div className="floating-card float-delay-0 w-full max-w-md">
              
              {/* Profile Card with Subtle Glass Frame */}
              <div className="relative rounded-3xl p-3 bg-obsidian-900/60 border border-neutral-800 backdrop-blur-xl">
                
                {/* Photo container */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-obsidian-900 border border-white/5 group">
                  <Image
                    src="/images/shashank-gowda-nb.jpg"
                    alt="Shashank Gowda NB - Principal Systems Architect"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-102"
                  />

                  {/* Anti-Gravity floating badge on photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-obsidian-900/90 backdrop-blur-md border border-gold/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-mono uppercase text-gold font-semibold tracking-wider">
                          Core Architect Engine
                        </div>
                        <div className="text-sm font-heading font-bold text-white mt-0.5">
                          Enterprise Distributed Systems
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/40 flex items-center justify-center text-gold">
                        <Cpu className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating System Spec Satellite Pill 1 */}
                <div className="floating-card float-delay-2 absolute -top-5 -right-5 px-4 py-2.5 rounded-xl bg-obsidian-900/95 border border-gold/40 shadow-xl backdrop-blur-md flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                  <div className="text-xs">
                    <span className="font-mono text-neutral-400 block text-[9px] uppercase">Kernel Spec</span>
                    <span className="font-mono text-white font-bold">Linux Kernel v6.8</span>
                  </div>
                </div>

                {/* Floating System Spec Satellite Pill 2 */}
                <div className="floating-card float-delay-1 absolute -bottom-5 -left-5 px-4 py-2.5 rounded-xl bg-obsidian-900/95 border border-gold/40 shadow-xl backdrop-blur-md flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-gold/10 flex items-center justify-center text-gold">
                    <Server className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs">
                    <span className="font-mono text-neutral-400 block text-[9px] uppercase">Engine</span>
                    <span className="font-mono text-white font-bold">Node.js + Express API</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
