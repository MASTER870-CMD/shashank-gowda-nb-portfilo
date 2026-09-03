'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  BrainCircuit, 
  Server, 
  LayoutGrid, 
  Cloud, 
  ShieldCheck, 
  Check, 
  Cpu,
  Sparkles,
  ArrowLeft,
  Search,
  Zap,
  ArrowUpRight,
  Layers,
  Activity,
  Terminal
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DOMAINS_DATA = [
  {
    id: 'ai-data',
    category: 'AI & Data Engineering',
    tag: 'AI',
    icon: BrainCircuit,
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
    tag: 'BACKEND',
    icon: Server,
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
    tag: 'FRONTEND',
    icon: LayoutGrid,
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
    tag: 'CLOUD',
    icon: Cloud,
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
    tag: 'SECURITY',
    icon: ShieldCheck,
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

const FILTER_TABS = [
  { id: 'ALL', label: 'All Domains' },
  { id: 'AI', label: 'AI & Data' },
  { id: 'BACKEND', label: 'Backend Architecture' },
  { id: 'FRONTEND', label: 'Frontend Infra' },
  { id: 'CLOUD', label: 'Cloud & DevOps' },
  { id: 'SECURITY', label: 'OS & Security' }
];

export default function TechMatrixPage() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic based on tab and search
  const filteredDomains = useMemo(() => {
    return DOMAINS_DATA.filter((domain) => {
      const matchTab = activeTab === 'ALL' || domain.tag === activeTab;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchTab;

      const matchCategory = domain.category.toLowerCase().includes(q);
      const matchDescription = domain.description.toLowerCase().includes(q);
      const matchTech = domain.technologies.some(
        (t) => t.name.toLowerCase().includes(q) || t.role.toLowerCase().includes(q)
      );
      const matchHighlights = domain.architectureHighlights.some((h) =>
        h.toLowerCase().includes(q)
      );

      return matchTab && (matchCategory || matchDescription || matchTech || matchHighlights);
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="min-h-screen bg-obsidian-950 text-white selection:bg-gold selection:text-obsidian-950 flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-28 bg-obsidian-950 relative overflow-hidden">
        {/* Ambient Backlight Aura */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-radial-gold-glow pointer-events-none -z-10 opacity-70" />
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gold/5 blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold/5 blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
          
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-gold transition-colors py-1.5 px-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-gold/30"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Overview</span>
            </Link>
          </div>

          {/* Hero Header */}
          <div className="max-w-4xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-gold/40 text-xs font-mono text-gold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              <Cpu className="w-3.5 h-3.5 text-gold animate-pulse" />
              <span>Enterprise Systems Matrix</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight leading-[1.15]">
              Systems Architecture & <span className="text-gold-gradient">Tech Stack Matrix</span>
            </h1>

            <p className="mt-4 text-neutral-400 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
              Comprehensive architectural index covering deep neural inference engines, distributed microservices, low-latency networking, and Linux kernel customization. Built for 1Cr+ production scalability.
            </p>

            {/* Architecture Telemetry Metrics Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-8">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
                <div className="text-2xl font-heading font-bold text-gold">25+</div>
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-0.5">
                  Production Modules
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
                <div className="text-2xl font-heading font-bold text-emerald-400">&lt;15ms</div>
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-0.5">
                  RPC Latency Benchmark
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
                <div className="text-2xl font-heading font-bold text-white">5 Domains</div>
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-0.5">
                  Architecture Layers
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
                <div className="text-2xl font-heading font-bold text-gold">Zero-Downtime</div>
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-0.5">
                  Blue-Green SLA
                </div>
              </div>
            </div>
          </div>

          {/* Search & Domain Filter Bar */}
          <div className="mb-10 p-2.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {FILTER_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? 'bg-gold text-obsidian-950 font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                        : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
              <input
                type="text"
                placeholder="Filter tools or protocols..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-obsidian-900/90 border border-white/10 text-xs font-mono text-white placeholder:text-neutral-500 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/60 transition-all"
              />
            </div>

          </div>

          {/* Cards Grid */}
          {filteredDomains.length === 0 ? (
            <div className="py-20 text-center rounded-3xl bg-white/[0.02] border border-white/[0.06]">
              <Cpu className="w-10 h-10 text-gold/40 mx-auto mb-3" />
              <h3 className="text-lg font-heading font-semibold text-white">No Matching Systems Found</h3>
              <p className="text-xs text-neutral-400 mt-1 font-light">
                Try searching for a different keyword like "Python", "gRPC", or "Linux".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveTab('ALL');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-gold/10 border border-gold/30 text-gold text-xs font-mono uppercase tracking-wider hover:bg-gold/20 transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
              {filteredDomains.map((domain) => {
                const Icon = domain.icon;

                return (
                  <div
                    key={domain.id}
                    className="relative rounded-3xl p-7 bg-gradient-to-b from-white/[0.04] via-obsidian-900/60 to-obsidian-950/90 border border-white/[0.08] hover:border-gold/50 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.15),inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-500 flex flex-col justify-between group overflow-hidden"
                  >
                    {/* Corner gold aura */}
                    <div className="absolute -top-24 -right-24 w-52 h-52 bg-gold/10 rounded-full blur-3xl pointer-events-none group-hover:bg-gold/25 transition-all duration-500" />
                    
                    {/* Top metallic horizon accent */}
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

                      {/* Technologies List */}
                      <div className="space-y-3 mb-6">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-gold/90 font-semibold flex items-center justify-between">
                          <span>Core Systems & Stack</span>
                          <span className="text-[10px] text-neutral-500 lowercase font-mono">{domain.technologies.length} modules</span>
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

                    {/* Architecture Highlights & System Capabilities */}
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
                );
              })}
            </div>
          )}

          {/* Bottom Engagement Banner */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-obsidian-900 via-obsidian-950 to-neutral-900 border border-gold/30 shadow-[0_10px_40px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 blur-3xl pointer-events-none" />
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-gold mb-2 font-semibold">
                Available For Enterprise Consulting & Full-Time Engagement
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                Architecting Fault-Tolerant Distributed Software
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-xl font-light">
                Targeting 1Cr+ packages & Principal Architect roles. Ready to evaluate your systems, optimize deep learning inference, or construct low-latency backbones.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F4D068] to-[#C59B27] text-obsidian-950 font-heading font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 shrink-0 whitespace-nowrap"
            >
              <span>Initiate Architecture Advisory</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
