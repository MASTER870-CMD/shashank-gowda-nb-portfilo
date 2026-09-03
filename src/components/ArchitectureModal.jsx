'use client';

import React from 'react';
import { X, CheckCircle, Cpu, Network, ShieldCheck, Terminal, Layers, ArrowUpRight } from 'lucide-react';

export default function ArchitectureModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-obsidian-900 border border-gold/40 shadow-2xl p-6 sm:p-8 z-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-gold transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-12 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-xs font-mono text-gold uppercase tracking-wider mb-2">
            <span>Systems Architecture Blueprint</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            {project.title}
          </h2>
          <p className="text-sm text-neutral-400 font-mono mt-1">
            {project.category} &bull; {project.targetTier}
          </p>
        </div>

        {/* Architectural Overview */}
        <div className="space-y-6">
          
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
            <h4 className="text-xs font-mono uppercase text-gold font-bold tracking-wider mb-2">
              System Architecture & Core Mechanics
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              {project.architecturalSummary}
            </p>
          </div>

          {/* ASCII / Component Flow Blueprint */}
          <div className="p-4 sm:p-6 rounded-2xl bg-obsidian-950 border border-gold/20 font-mono text-xs text-neutral-300 overflow-x-auto">
            <div className="text-gold font-bold mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>Data Flow & Component Interconnect:</span>
            </div>
            <pre className="text-neutral-300 leading-relaxed">
              {project.diagram}
            </pre>
          </div>

          {/* Key Engineering Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <h5 className="text-xs font-mono uppercase text-neutral-400 mb-2">
                Latency & Reliability SLA
              </h5>
              <div className="text-lg font-heading font-bold text-white">
                {project.slaMetrics}
              </div>
              <p className="text-xs text-neutral-400 mt-1">
                Measured in sustained enterprise test benchmarks.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <h5 className="text-xs font-mono uppercase text-neutral-400 mb-2">
                Security & Isolation Layer
              </h5>
              <div className="text-lg font-heading font-bold text-white">
                {project.securityLevel}
              </div>
              <p className="text-xs text-neutral-400 mt-1">
                Encrypted RPC, IPC unix sockets, privilege containment.
              </p>
            </div>
          </div>

          {/* Technical Stack Tags */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
              Production Stack Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-obsidian-950 border border-gold/30 text-xs font-mono text-gold-light"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-white hover:border-gold text-xs font-heading font-semibold transition-all flex items-center gap-2"
                >
                  <span>Inspect Source Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-gold text-obsidian-950 text-xs font-heading font-bold hover:bg-white transition-all flex items-center gap-2"
                >
                  <span>Launch Live System</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs text-neutral-400 hover:text-white font-mono uppercase tracking-wider"
            >
              Close Inspector [ESC]
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
