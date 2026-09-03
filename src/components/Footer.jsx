'use client';

import React from 'react';
import { Terminal, Github, Linkedin, Mail, Shield, ArrowUp, Cpu } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian-950 border-t border-white/10 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5 items-center">
          
          {/* Identity & Mission */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-obsidian-900 border border-gold/40 flex items-center justify-center text-gold">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="text-lg font-heading font-bold text-white tracking-tight">
                Shashank Gowda NB
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-light max-w-md leading-relaxed">
              Principal Systems Architect & AI Engineer based in Bengaluru. Engineering fault-tolerant distributed infrastructure, low-latency microservices, and deep learning vision pipelines.
            </p>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-4 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/shashank-gowda-nb-b94724375"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-obsidian-900 border border-white/10 hover:border-gold text-neutral-300 hover:text-gold flex items-center justify-center transition-all duration-300 hover:scale-105"
              aria-label="Shashank Gowda NB LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/MASTER870-CMD"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-obsidian-900 border border-white/10 hover:border-gold text-neutral-300 hover:text-gold flex items-center justify-center transition-all duration-300 hover:scale-105"
              aria-label="Shashank Gowda NB GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="mailto:shashankgowdanb166@gmail.com"
              className="w-11 h-11 rounded-xl bg-obsidian-900 border border-white/10 hover:border-gold text-neutral-300 hover:text-gold flex items-center justify-center transition-all duration-300 hover:scale-105"
              aria-label="Direct Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll to Top */}
          <div className="md:col-span-2 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-300 hover:border-gold hover:text-gold text-xs font-mono flex items-center gap-2 transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Telemetry & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            &copy; {new Date().getFullYear()} Shashank Gowda NB. Enterprise Architecture Stack.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Gateway: Node.js Express
            </span>
            <span>&bull;</span>
            <span className="text-gold font-medium">Built with Next.js Turbopack & TypeScript</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
