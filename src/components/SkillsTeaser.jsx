'use client';

import React from 'react';
import Link from 'next/link';
import { 
  BrainCircuit, 
  Server, 
  Cloud, 
  ArrowUpRight, 
  Cpu,
  Layers,
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';

const CORE_PILLARS = [
  {
    title: 'AI & Data Engineering',
    badge: 'LLMs & Inference',
    icon: BrainCircuit,
    description: 'Deep neural networks, model weight quantization (INT8/4), RAG pipelines, and high-throughput ingestion streams.',
    keyStack: ['Python', 'PyTorch', 'TensorFlow', 'Vector DBs / FAISS', 'SQL Tuning']
  },
  {
    title: 'Distributed Backend & APIs',
    badge: 'Sub-15ms Latency',
    icon: Server,
    description: 'High-concurrency microservices, gRPC RPC contracts, non-blocking asynchronous I/O, and distributed caching.',
    keyStack: ['Node.js', 'C++', 'Java', 'gRPC / Protobuf', 'Redis Locks']
  },
  {
    title: 'Cloud, DevOps & Systems',
    badge: 'Zero-Downtime SLA',
    icon: Cloud,
    description: 'Resilient cloud infrastructure on AWS, CI/CD automation, Docker isolation, and custom Linux kernel engineering.',
    keyStack: ['AWS VPCs', 'Docker', 'Linux Kernel', 'Computer Networks', 'IaC']
  }
];

export default function SkillsTeaser() {
  return (
    <section id="skills" className="py-24 bg-obsidian-950 relative overflow-hidden">
      {/* Anchor for nav smooth scrolling */}
      <div id="tech-matrix" className="scroll-mt-24" />
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-radial-gold-glow pointer-events-none -z-10 opacity-50" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-gold/30 text-xs font-mono text-gold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(212,175,55,0.12)]">
            <Cpu className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span>Architecture Competencies</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Core <span className="text-gold-gradient">Systems Competencies</span>
          </h2>
          
          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            Engineered strictly for production resilience, low latency, and distributed intelligence. A preview of core engineering capabilities.
          </p>
        </div>

        {/* 3 Executive Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {CORE_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl p-7 bg-gradient-to-b from-white/[0.04] via-obsidian-900/60 to-obsidian-950/90 border border-white/[0.08] hover:border-gold/50 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Top highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neutral-800 via-obsidian-900 to-black border border-gold/40 flex items-center justify-center text-gold shadow-[0_0_20px_rgba(212,175,55,0.2)] group-hover:scale-105 transition-transform shrink-0">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/25 font-semibold">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-gold transition-colors tracking-tight mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Key Stack Pills */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-2.5">
                    Featured Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.keyStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/[0.06] text-neutral-300 group-hover:border-gold/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Bar Linking to the Full Matrix Page */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-obsidian-900/90 via-obsidian-950 to-neutral-900/90 border border-gold/30 shadow-[0_10px_35px_rgba(0,0,0,0.7)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
              <Layers className="w-6 h-6 text-gold" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-heading font-bold text-white tracking-tight">
                Want to inspect all 25+ systems modules & kernel architectures?
              </div>
              <div className="text-xs text-neutral-400 font-light mt-0.5 flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-1 text-gold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 5 Domains Indexed
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Enterprise L1 Spec
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1 text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Interactive Filter
                </span>
              </div>
            </div>
          </div>

          <Link
            href="/matrix"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F4D068] to-[#C59B27] text-obsidian-950 font-heading font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 shrink-0 whitespace-nowrap"
          >
            <span>Explore Full Systems Matrix</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
