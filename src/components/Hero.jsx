'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-24 flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Subtle, soft atmospheric lighting (Dark Gold/Amber glowing orb behind text) */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-yellow-900/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-amber-950/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1300px] mx-auto px-6 md:px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 text-left">
            
            {/* Top Badges (Soft, Borderless Glass Effect) */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {/* Availability Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-md text-neutral-300 text-xs font-sans">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>Available for Architecture Advisory & Consulting</span>
              </div>

              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md text-neutral-400 text-xs font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                <span>Bengaluru, IN</span>
              </div>
            </div>

            {/* Candidate Identity (Human, Clean Sans-Serif) */}
            <div className="mb-6">
              <div className="text-xs uppercase tracking-wider text-neutral-400 font-sans font-medium mb-1.5">
                Principal Systems Architect &bull; AI Engineer
              </div>
              <h2 className="text-2xl sm:text-3xl font-sans font-semibold text-white tracking-tight">
                Shashank Gowda <span className="text-[#C5A059]">NB</span>
              </h2>
            </div>

            {/* Main Headline (Tight tracking, elegant white-to-neutral gradient) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-sans font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-100 to-neutral-500 leading-[1.08] mb-8">
              Architecting Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DFBF77] to-[#C5A059]">Software & AI Ecosystems.</span>
            </h1>

            {/* Bio Text (Clean, readable, generous line-height, text-neutral-400) */}
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-normal max-w-2xl mb-10">
              I engineer production-grade enterprise software, high-throughput REST/gRPC APIs, cross-platform applications, and distributed backend architectures. From low-level Linux systems and network protocols to deploying deep learning models on AWS, I build fault-tolerant ecosystems designed for scale and zero downtime.
            </p>

            {/* Primary & Secondary Actions (Generous Spacing, Human-crafted feel) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <Link
                href="/projects"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFBF77] text-[#050505] font-sans font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-[0_4px_20px_rgba(197,160,89,0.25)] flex items-center justify-center gap-2 group"
              >
                <span>Explore Engineering Grid</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-200 font-sans font-medium text-sm transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2"
              >
                <span>Request Architectural Review</span>
              </Link>
            </div>

            {/* Metrics & Benchmarks (Clean Spacing, No Harsh Dividing Lines) */}
            <div className="flex flex-wrap items-center gap-8 sm:gap-14 pt-2">
              <div>
                <div className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight flex items-baseline gap-0.5">
                  <span>&lt;10</span>
                  <span className="font-mono text-sm font-normal text-neutral-400">ms</span>
                </div>
                <div className="text-xs text-neutral-400 font-sans mt-0.5">
                  P99 API Latency
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight flex items-baseline gap-0.5">
                  <span>99.99</span>
                  <span className="font-mono text-sm font-normal text-neutral-400">%</span>
                </div>
                <div className="text-xs text-neutral-400 font-sans mt-0.5">
                  High Availability SLA
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight flex items-baseline gap-0.5">
                  <span>Zero</span>
                  <span className="font-mono text-xs font-normal text-neutral-400">Downtime</span>
                </div>
                <div className="text-xs text-neutral-400 font-sans mt-0.5">
                  Blue-Green Deployment
                </div>
              </div>
            </div>

          </div>

          {/* Portrait Visual Column (Borderless, Soft Shadow, Natural Background Blend) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Image Container with Diffuse Shadow & Bottom Blend */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85)] group">
              <Image
                src="/images/shashank-gowda-nb.jpg"
                alt="Shashank Gowda NB - Principal Systems Architect"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Subtle bottom gradient mask so it blends naturally into the obsidian background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-80 pointer-events-none" />

              {/* Soft, Borderless Glass Floating Pill at bottom */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/40 backdrop-blur-xl text-neutral-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-sans uppercase tracking-wider text-[#DFBF77] font-medium">
                      Core Architect Engine
                    </div>
                    <div className="text-sm font-sans font-semibold text-white mt-0.5">
                      Enterprise Distributed Systems
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#DFBF77]">
                    <Cpu className="w-4 h-4" />
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
