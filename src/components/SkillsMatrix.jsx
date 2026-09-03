'use client';

import React from 'react';
import { 
  BrainCircuit, 
  Server, 
  LayoutGrid, 
  Cloud, 
  ShieldCheck, 
  Check, 
  Workflow, 
  Database,
  Terminal,
  Cpu
} from 'lucide-react';

const SKILL_DOMAINS = [
  {
    id: 'ai-data',
    category: 'AI & Data Engineering',
    icon: BrainCircuit,
    delayClass: 'float-delay-0',
    description: 'Deep neural networks, model inference optimization, and massive relational data pipelines.',
    technologies: [
      { name: 'Python', role: 'Primary ML/AI Language & Scripting' },
      { name: 'TensorFlow', role: 'Deep Learning & Neural Network Graphs' },
      { name: 'Advanced SQL', role: 'Complex Window Functions, Indexing & Query Tuning' }
    ],
    architectureHighlights: [
      'Model Weight Quantization',
      'Real-time Inference Pipelines',
      'High-throughput Data Ingestion'
    ]
  },
  {
    id: 'frontend-infra',
    category: 'Frontend Infrastructure',
    icon: LayoutGrid,
    delayClass: 'float-delay-1',
    description: 'High-performance SSR client architecture, progressive hydration, and responsive design systems.',
    technologies: [
      { name: 'React', role: 'Component Driven Scalable UI Systems' },
      { name: 'Next.js', role: 'Server-Side Rendering, App Router & Edge Proxies' },
      { name: 'TypeScript', role: 'Strict Static Typing & Enterprise Interface Contracts' },
      { name: 'Tailwind CSS', role: 'Atomic Utility-First Styling & JIT Compilation' },
      { name: 'Vite / Turbopack', role: 'High-Speed Module Bundling & HMR Optimization' }
    ],
    architectureHighlights: [
      'Zero Render-blocking Hydration',
      'Reverse Proxy API Rewriting',
      'Ultra-fast First Contentful Paint'
    ]
  },
  {
    id: 'cloud-devops',
    category: 'Cloud & DevOps',
    icon: Cloud,
    delayClass: 'float-delay-2',
    description: 'Resilient cloud infrastructure, automated deployment pipelines, and low-latency networking.',
    technologies: [
      { name: 'AWS', role: 'Cloud Compute, S3, RDS, ALB & Scalable VPCs' },
      { name: 'Enterprise DevOps', role: 'CI/CD Automation, Containerization & Health Probes' },
      { name: 'Computer Networks', role: 'TCP/IP, Socket Handshakes, Load Balancing & CDN' }
    ],
    architectureHighlights: [
      'Zero-Downtime Blue-Green Pipelines',
      'Multi-Region Availability Design',
      'Hardened Network ACLs & VPC Subnets'
    ]
  },
  {
    id: 'os-security',
    category: 'OS & Security',
    icon: ShieldCheck,
    delayClass: 'float-delay-3',
    description: 'Kernel-level modifications, Linux systems engineering, offensive hardening, and telemetry hooks.',
    technologies: [
      { name: 'Linux', role: 'Kernel Customization & Syscall Tracing' },
      { name: 'Ubuntu', role: 'Enterprise Production Server Deployments' },
      { name: 'Kali Linux', role: 'Security Assessment, Hardening & Audit' },
      { name: 'Ntfy.sh', role: 'Real-time Push Notification & Incident Telemetry' }
    ],
    architectureHighlights: [
      'Custom Linux Kernel Customization',
      'Privilege Separation & Hardening',
      'Kernel Sysctl Networking Tweaks'
    ]
  }
];

export default function SkillsMatrix() {
  return (
    <section id="skills" className="py-28 bg-obsidian-950 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div id="tech-matrix" className="scroll-mt-28" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-radial-gold-glow pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-gold/30 text-xs font-mono text-gold uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Systems Architecture Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            High-Throughput <span className="text-gold-gradient">Tech Stack Matrix</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base leading-relaxed font-light">
            Engineered strictly for production resilience, low latency, and distributed intelligence. Zero baseline web trivia—pure architectural capability.
          </p>
        </div>

        {/* Rebalanced 2x2 Grid with Anti-Gravity Staggered Floating */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {SKILL_DOMAINS.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.id}
                className={`floating-card ${domain.delayClass}`}
              >
                <div className="h-full rounded-2xl p-6 glass-panel flex flex-col justify-between group hover:border-gold/50 transition-all duration-500">
                  
                  <div>
                    {/* Header with Icon & Category */}
                    <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/5">
                      <div className="w-12 h-12 rounded-xl bg-obsidian-900 border border-gold/30 flex items-center justify-center text-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg text-white group-hover:text-gold transition-colors">
                          {domain.category}
                        </h3>
                        <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                          Enterprise Tier
                        </span>
                      </div>
                    </div>

                    {/* Domain Description */}
                    <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-light">
                      {domain.description}
                    </p>

                    {/* Technologies List */}
                    <div className="space-y-3 mb-6">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-gold/90 font-semibold">
                        Core Systems & Tools
                      </div>
                      <div className="space-y-2">
                        {domain.technologies.map((tech, tIdx) => (
                          <div
                            key={tIdx}
                            className="p-2.5 rounded-lg bg-obsidian-900/80 border border-white/5 group-hover:border-white/10 transition-colors"
                          >
                            <div className="flex items-center justify-between text-sm">
                              <span className="font-heading font-semibold text-white">
                                {tech.name}
                              </span>
                              <span className="w-1.5 h-1.5 rounded-full bg-gold/70"></span>
                            </div>
                            <div className="text-[11px] text-neutral-400 font-light mt-0.5">
                              {tech.role}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Architecture Highlights */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2">
                      System Capabilities
                    </div>
                    <ul className="space-y-1.5">
                      {domain.architectureHighlights.map((hl, hlIdx) => (
                        <li key={hlIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
