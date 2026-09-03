'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Terminal, 
  Bot, 
  Eye, 
  ExternalLink, 
  Github, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Workflow, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import ArchitectureModal from './ArchitectureModal';

const FEATURED_PROJECTS = [
  {
    id: 'voktra-os',
    title: 'Voktra OS',
    subtitle: 'Custom Linux Operating System & Low-Level Environment',
    category: 'Kernel & Systems Engineering',
    targetTier: 'Enterprise Systems Architecture',
    delayClass: 'float-delay-0',
    icon: Terminal,
    image: '/images/readme.png',
    fallbackImage: '/images/preview.png',
    description:
      'Custom OS built on Xubuntu with highly optimized terminal configurations, custom graphical rules, and low-level system integrations designed for zero-latency kernel performance and security operations.',
    architecturalSummary:
      'Voktra OS re-architects standard desktop Linux distributions for high-performance systems engineering. It strips unnecessary background daemons, implements kernel-level sysctl tuning for raw socket performance, and integrates custom XFCE graphical compositor rules with zsh shell optimization. Designed to operate as a hardened sandbox for distributed development and hardware telemetry.',
    diagram: `[User Interaction Layer]
        │
        ├── Custom Zsh Terminal Shell (Pre-configured Low-Latency Aliases)
        ├── XFCE Custom Compositor (Zero-Tearing, Ultra-Low VRAM Footprint)
        │
[Kernel / Hardware Integration Layer]
        │
        ├── Linux Kernel Tuning (TCP FastOpen, CFS Scheduler Priorities)
        ├── Systemd Daemon Stripping (<800MB RAM Idle Footprint)
        └── Hardware Telemetry Hooks (Direct Syscall Profiling)`,
    slaMetrics: 'Zero-Lag Shell (<2ms Input Latency) & 780MB Idle RAM',
    securityLevel: 'Hardened Kernel Sysctl & Least Privilege Profiles',
    techStack: ['Linux Kernel', 'Xubuntu Base', 'Bash/Zsh Systems Scripting', 'XFCE Compositor', 'Hardware Hooks'],
    githubUrl: 'https://github.com/MASTER870-CMD',
    demoUrl: null,
    metrics: {
      performance: '65% Less RAM Footprint',
      latency: '<2ms TTY Shell',
      architecture: 'Custom Kernel Rules'
    }
  },
  {
    id: 'project-nexus-ai',
    title: 'Project Nexus AI',
    subtitle: 'Autonomous Voice & API Command Orchestration Engine',
    category: 'AI & Distributed Systems',
    targetTier: 'Enterprise AI Infrastructure',
    delayClass: 'float-delay-1',
    icon: Bot,
    image: '/images/neuro_ai.png',
    fallbackImage: '/images/moke_ai.png',
    description:
      'Voice-activated personal AI assistant featuring complex API command routing, natural language processing (NLP), and low-level hardware integration for automated operations.',
    architecturalSummary:
      'Nexus AI acts as an autonomous neural command center. Incoming auditory and conversational streams are processed through asynchronous acoustic models, matched against dynamic intent trees, and routed to external microservice APIs with strict payload verification. Features automated fallbacks, offline rule execution, and system-level peripheral management.',
    diagram: `[Microphone Audio Stream] ──> [Whisper / STT Engine]
                                      │
                                      ▼
[Intent Classifier & Parser (NLP Core)]
        │
        ├── Dynamic API Dispatch Router (REST / gRPC)
        ├── Asynchronous Python Task Worker (AsyncIO)
        └── Hardware Peripheral Controller (GPIO / Audio Output)
                                      │
                                      ▼
[Verified JSON Telemetry & Voice Response Synthesizer]`,
    slaMetrics: '<180ms End-to-End Voice-to-Action Dispatch',
    securityLevel: 'Tokenized API Intermediary & Local Token Vault',
    techStack: ['Python', 'NLP Pipelines', 'FastAPI/Node.js', 'Speech Processing', 'Hardware Integration'],
    githubUrl: 'https://github.com/MASTER870-CMD',
    demoUrl: null,
    metrics: {
      performance: '180ms Roundtrip',
      latency: 'Real-time NLP',
      architecture: 'Asynchronous Event Loop'
    }
  },
  {
    id: 'generative-vision-tooling',
    title: 'Generative Vision Tooling',
    subtitle: 'Production Deep Learning & Vision Inference Suite',
    category: 'Computer Vision & GenAI',
    targetTier: 'Enterprise Deep Learning',
    delayClass: 'float-delay-2',
    icon: Eye,
    image: '/images/face_mode.png',
    fallbackImage: '/images/text-to-img.png',
    description:
      'Production-ready AI software including real-time facial expression detection with sub-frame micro-expression confidence metrics and Stable Diffusion text-to-image generation.',
    architecturalSummary:
      'A multi-modal visual inference suite. Combines lightweight WebGL/TensorFlow neural graphs for real-time facial landmark and emotion parsing directly in the browser with high-fidelity Stable Diffusion inference backends. Implements tensor memory caching to avoid client-side garbage collection frame drops.',
    diagram: `[Video Feed / Camera Input] ──> [Tensor Normalization Frame-Buffer]
                                          │
                                          ▼
                [TensorFlow.js Micro-Expression Neural Weights]
                                          │
        ┌─────────────────────────────────┴─────────────────────────────────┐
        ▼                                                                   ▼
[Real-Time Emotion Probabilities (60FPS)]            [Stable Diffusion Generative API]
[Vector Facial Landmarks Overlay]                     [Prompt Optimization Engine]`,
    slaMetrics: '60 FPS Continuous WebGL Vision Stream (<16ms/frame)',
    securityLevel: 'Zero Cloud Frame Leakage (On-Device Client Processing)',
    techStack: ['TensorFlow.js', 'Stable Diffusion', 'Python', 'Computer Vision', 'WebGL Shaders'],
    githubUrl: 'https://github.com/MASTER870-CMD/face-emotion-finder',
    demoUrl: 'https://master870-cmd.github.io/face-emotion-finder/',
    metrics: {
      performance: '60 FPS Native WebGL',
      latency: '<16ms Frame Time',
      architecture: 'On-Device Edge Neural Nets'
    }
  }
];

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-32 bg-obsidian-900/60 relative overflow-hidden">
      {/* Scroll Anchor Alias */}
      <div id="engineering-grid" className="scroll-mt-28" />
      {/* Subtle Background Glows (Zero purple) */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-radial-gold-glow pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-gold/30 text-xs font-mono text-gold uppercase tracking-widest mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
              Featured <span className="text-gold-gradient">Engineering Grid</span>
            </h2>
            <p className="mt-3 text-neutral-400 text-base max-w-2xl font-light">
              Architectural deep dives into custom operating system builds, voice-activated AI orchestration networks, and edge deep learning vision models.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <a
              href="https://github.com/MASTER870-CMD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white hover:border-gold hover:text-gold text-xs font-mono uppercase tracking-wider transition-all"
            >
              <Github className="w-4 h-4 text-gold" />
              <span>GitHub: MASTER870-CMD</span>
            </a>
          </div>
        </div>

        {/* Featured Projects Grid with Anti-Gravity Staggered Floating */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {FEATURED_PROJECTS.map((project) => {
            const Icon = project.icon;
            return (
              <article
                key={project.id}
                className={`floating-card ${project.delayClass} flex flex-col h-full`}
              >
                <div className="h-full rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-gold/50 flex flex-col justify-between group transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                  
                  {/* Card Visual / Screenshot */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-obsidian-950 border-b border-white/5">
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.subtitle}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-102"
                    />

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-lg bg-obsidian-950/90 border border-gold/30 backdrop-blur-md text-[11px] font-mono text-gold uppercase tracking-wider">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{project.category}</span>
                    </div>

                    {/* Metrics Chip */}
                    <div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-obsidian-950/90 border border-white/15 backdrop-blur-md text-[11px] font-mono text-neutral-300">
                      <span className="text-gold font-bold">{project.metrics.latency}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-7 flex-1 flex flex-col justify-between">
                    
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                        {project.targetTier}
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-white group-hover:text-gold transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gold/90 font-mono mb-4">
                        {project.subtitle}
                      </p>
                      <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* System Highlights & Tech Stack */}
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-[11px] font-mono text-neutral-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Card Action Buttons */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-4 py-2.5 rounded-xl bg-gold/10 border border-gold/40 text-gold hover:bg-gold hover:text-obsidian-950 text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
                        >
                          <span>System Architecture</span>
                          <Workflow className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center gap-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-neutral-300 hover:text-white hover:border-gold transition-colors"
                              title="GitHub Repository"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-xl bg-gold/20 border border-gold/40 text-gold hover:bg-gold hover:text-obsidian-950 transition-all"
                              title="Live Production Demo"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* Terminal Call to Action: View All Projects Archive */}
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-obsidian-900 border border-gold/40 hover:border-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] text-gold hover:text-white font-mono text-sm uppercase tracking-wider transition-all duration-300 group"
          >
            <Terminal className="w-4 h-4 text-gold group-hover:animate-pulse" />
            <span className="font-bold">&gt;_ INITIALIZE: FULL_PROJECT_REPOSITORY</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

      </div>

      {/* Systems Architecture Modal */}
      <ArchitectureModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
