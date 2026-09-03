'use client';

import React from 'react';
import { 
  BrainCircuit, 
  Server, 
  LayoutGrid, 
  Cloud, 
  ShieldCheck, 
  Check, 
  Cpu,
  Sparkles,
  Zap
} from 'lucide-react';

const SKILL_DOMAINS = [
  {
    id: 'ai-data',
    category: 'AI & Data Engineering',
    icon: BrainCircuit,
    delayClass: 'float-delay-0',
    description: 'Deep neural networks, model inference optimization, vector indexing, and massive relational data pipelines.',
    technologies: [
      { name: 'Python', role: 'Primary ML/AI Language & Production Scripting' },
      { name: 'PyTorch & HuggingFace', role: 'Transformer Fine-Tuning & Weight Quantization' },
      { name: 'TensorFlow', role: 'Deep Learning Graphs & Neural Architecture' },
      { name: 'Vector DBs & RAG', role: 'FAISS, Pinecone & Semantic Embedding Pipelines' },
      { name: 'Advanced SQL', role: 'Complex Window Functions, Indexing & Query Tuning' }
    ],
    architectureHighlights: [
      'Model Weight Quantization (8-bit / 4-bit INT)',
      'Real-time Low-Latency Inference Pipelines',
      'High-throughput Data Ingestion Streams'
    ]
  },
  {
    id: 'backend-arch',
    category: 'Core Backend & API Architecture',
    icon: Server,
    delayClass: 'float-delay-1',
    description: 'High-concurrency microservices, memory-efficient systems programming, and fault-tolerant enterprise backbones.',
    technologies: [
      { name: 'Node.js & Express', role: 'Non-blocking Event-Driven Microservices' },
      { name: 'C++', role: 'Low-latency Algorithms & Performance Critical Code' },
      { name: 'Java & Spring', role: 'Enterprise Class Multi-threaded Architectures' },
      { name: 'gRPC & Protobuf', role: 'High-Throughput Microsecond RPC Contracts' },
      { name: 'Redis & Caching', role: 'Sub-millisecond In-Memory Store & Distributed Locks' }
    ],
    architectureHighlights: [
      'REST, GraphQL & gRPC API Contracts',
      'Non-blocking Asynchronous I/O & Concurrency',
      'Pluggable Relational Repository Layers (PostgreSQL / AWS RDS)',
      'Rate-Limiting, OAuth2/JWT & Circuit Breakers'
    ]
  },
  {
    id: 'frontend-infra',
    category: 'Frontend Infrastructure',
    icon: LayoutGrid,
    delayClass: 'float-delay-2',
    description: 'High-performance SSR client architecture, progressive hydration, and responsive design systems.',
    technologies: [
      { name: 'React', role: 'Component Driven Scalable UI Systems' },
      { name: 'Next.js', role: 'Server-Side Rendering, App Router & Edge Proxies' },
      { name: 'TypeScript', role: 'Strict Static Typing & Enterprise Interface Contracts' },
      { name: 'Tailwind CSS', role: 'Atomic Utility-First Styling & JIT Compilation' },
      { name: 'Vite / Turbopack', role: 'High-Speed Module Bundling & HMR Optimization' }
    ],
    architectureHighlights: [
      'Zero Render-blocking Hydration Strategy',
      'Reverse Proxy API Rewriting & Edge Routing',
      'Ultra-fast First Contentful Paint (<1.2s)'
    ]
  },
  {
    id: 'cloud-devops',
    category: 'Cloud & DevOps',
    icon: Cloud,
    delayClass: 'float-delay-3',
    description: 'Resilient cloud infrastructure, automated deployment pipelines, and low-latency global networking.',
    technologies: [
      { name: 'AWS Cloud', role: 'Compute (EC2), S3, RDS, ALB & Scalable VPCs' },
      { name: 'Enterprise DevOps', role: 'CI/CD Automation, Containerization & Health Probes' },
      { name: 'Docker & Containers', role: 'Isolated Microservices & Multi-Stage Builds' },
      { name: 'Computer Networks', role: 'TCP/IP, Socket Handshakes, Load Balancing & CDN' },
      { name: 'Terraform & IaC', role: 'Declarative Cloud Infrastructure & Reproducibility' }
    ],
    architectureHighlights: [
      'Zero-Downtime Blue-Green Deployment Pipelines',
      'Multi-Region Fault-Tolerant Availability Design',
      'Hardened Network Security Groups & VPC Subnets'
    ]
  },
  {
    id: 'os-security',
    category: 'OS & Security',
    icon: ShieldCheck,
    delayClass: 'float-delay-4',
    description: 'Kernel-level modifications, Linux systems engineering, offensive hardening, and real-time telemetry hooks.',
    technologies: [
      { name: 'Linux Kernel', role: 'Customization, Syscall Tracing & Resource Limits' },
      { name: 'Ubuntu Production', role: 'Enterprise Server Provisioning & Service Units' },
      { name: 'Kali Linux', role: 'Security Assessment, Vulnerability Audit & Hardening' },
      { name: 'Ntfy.sh Telemetry', role: 'Real-time Push Notification & Incident Monitoring' },
      { name: 'Zero-Trust Security', role: 'Privilege Separation, JWT Vault & Network ACLs' }
    ],
    architectureHighlights: [
      'Custom Xubuntu OS Architecture (Voktra OS v2.4)',
      'Privilege Separation & Root Escalation Defense',
      'Kernel Sysctl Networking & Buffer Tuning'
    ]
  }
];

export default function SkillsMatrix() {
  return (
    <section id="skills" className="py-32 bg-obsidian-950 relative overflow-hidden">
      {/* Background Ambient Glowing Elements */}
      <div id="tech-matrix" className="scroll-mt-28" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial-gold-glow pointer-events-none -z-10 opacity-60" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
        
        {/* Section Header with Glowing Pill */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-gold/40 text-xs font-mono text-gold uppercase tracking-widest mb-5 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <Cpu className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span>Systems Architecture Matrix</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            High-Throughput <span className="text-gold-gradient">Tech Stack Matrix</span>
          </h2>
          
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            Engineered strictly for production resilience, low latency, and distributed intelligence. Every system capability is verified for enterprise scalability.
          </p>
        </div>

        {/* 5-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {SKILL_DOMAINS.map((domain, index) => {
            const Icon = domain.icon;
            const isWideBottomCard = index === 3 || index === 4;

            return (
              <div
                key={domain.id}
                className={`floating-card ${domain.delayClass} ${
                  isWideBottomCard ? 'lg:col-span-1 md:col-span-1' : ''
                }`}
              >
                {/* Luxury Glass Card with Ambient Backlight & Horizon Glow */}
                <div className="relative h-full rounded-3xl p-7 bg-gradient-to-b from-white/[0.04] via-obsidian-900/60 to-obsidian-950/90 border border-white/[0.08] hover:border-gold/50 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.15),inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-500 flex flex-col justify-between group overflow-hidden">
                  
                  {/* Subtle radial gold aura in card corner */}
                  <div className="absolute -top-24 -right-24 w-52 h-52 bg-gold/10 rounded-full blur-3xl pointer-events-none group-hover:bg-gold/25 transition-all duration-500" />
                  
                  {/* Razor-sharp top metallic highlight line */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                  <div>
                    {/* Header with Icon Badge & Category */}
                    <div className="flex items-center gap-4 mb-5 pb-4 border-b border-white/[0.07]">
                      <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-neutral-800 via-obsidian-900 to-black border border-gold/40 flex items-center justify-center text-gold shadow-[0_0_20px_rgba(212,175,55,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:scale-105 group-hover:border-gold group-hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] transition-all duration-300 shrink-0">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-gold transition-colors tracking-tight">
                          {domain.category}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]"></span>
                          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-medium">
                            Enterprise L1 Spec
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Domain Description */}
                    <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-light">
                      {domain.description}
                    </p>

                    {/* Technologies List: Precision Machined Chips */}
                    <div className="space-y-3 mb-6">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-gold/90 font-semibold flex items-center justify-between">
                        <span>Core Systems & Stack</span>
                        <span className="text-[10px] text-neutral-500 lowercase font-mono">5 modules</span>
                      </div>
                      
                      <div className="space-y-2">
                        {domain.technologies.map((tech, tIdx) => (
                          <div
                            key={tIdx}
                            className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-gold/40 transition-all duration-300 flex items-center justify-between group/item shadow-sm hover:shadow-[0_4px_16px_rgba(212,175,55,0.1)]"
                          >
                            <div className="min-w-0 pr-2">
                              <div className="font-heading font-semibold text-white group-hover/item:text-gold transition-colors text-sm truncate">
                                {tech.name}
                              </div>
                              <div className="text-[11px] text-neutral-400 font-light truncate mt-0.5">
                                {tech.role}
                              </div>
                            </div>
                            <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-md bg-gold/10 text-gold/90 border border-gold/20 font-semibold shrink-0">
                              PROD
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Architecture Highlights & System Capabilities Footer */}
                  <div className="pt-5 mt-6 border-t border-white/[0.07] bg-white/[0.01] -mx-7 -mb-7 px-7 pb-6 rounded-b-3xl">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-gold/90 mb-3 font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-gold" />
                      <span>Architecture Highlights</span>
                    </div>
                    <ul className="space-y-2">
                      {domain.architectureHighlights.map((hl, hlIdx) => (
                        <li key={hlIdx} className="flex items-center gap-2 text-xs text-neutral-300 font-light">
                          <div className="w-4 h-4 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-gold" />
                          </div>
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
