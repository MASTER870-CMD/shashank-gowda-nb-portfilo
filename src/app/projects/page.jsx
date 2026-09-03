'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Terminal, 
  Search, 
  ExternalLink, 
  Github, 
  ArrowLeft, 
  Calendar, 
  Layers, 
  Cpu, 
  CheckCircle,
  Loader2,
  Filter
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useProjects } from '@/hooks/useProjects';

export default function ProjectsArchivePage() {
  const { projects, loading, error } = useProjects();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    const set = new Set(['All']);
    projects.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return Array.from(set);
  }, [projects]);

  // Filter projects based on search query and category
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        selectedCategory === 'All' || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title?.toLowerCase().includes(q) ||
        p.desc?.toLowerCase().includes(q) ||
        (Array.isArray(p.tech) && p.tech.some((t) => t.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [projects, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-obsidian-950 text-white selection:bg-gold selection:text-obsidian-950 flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-obsidian-950 bg-grid-pattern relative">
        {/* Subtle Ambient Gold Radiance (Zero purple) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-radial-gold-glow pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-300 hover:text-gold hover:border-gold text-xs font-mono uppercase tracking-wider transition-all duration-300 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Systems Spec & Home</span>
            </Link>
          </div>

          {/* Archive Header */}
          <div className="text-left mb-12 border-b border-white/10 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-xs font-mono text-gold uppercase tracking-widest mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>Dynamic Firestore Repository &bull; Live Deployments</span>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
                  Engineering <span className="text-gold-gradient">Project Archive</span>
                </h1>
                <p className="mt-2 text-neutral-400 text-sm sm:text-base font-light max-w-2xl">
                  Enterprise-grade portfolio archive synchronized live with backend Firestore database. Explore full-stack systems, computer vision models, and custom OS architectures.
                </p>
              </div>

              {/* Status Telemetry Pill */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-obsidian-900 border border-gold/30 font-mono text-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></div>
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase">Database Sync</span>
                  <span className="text-white font-bold">{projects.length} Production Deployments</span>
                </div>
              </div>
            </div>
          </div>

          {/* Control Bar: Search & Category Filter */}
          <div className="p-4 sm:p-6 rounded-2xl glass-panel border border-white/10 mb-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              
              {/* Search Box */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by title, stack (e.g. Python, TensorFlow, Zsh)..."
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors font-mono"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                <Filter className="w-3.5 h-3.5 text-gold shrink-0 hidden sm:inline" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-300 shrink-0 ${
                      selectedCategory === cat
                        ? 'bg-gold text-obsidian-950 font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                        : 'bg-white/[0.03] border border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="py-24 text-center">
              <Loader2 className="w-10 h-10 animate-spin text-gold mx-auto mb-4" />
              <div className="text-sm font-mono text-neutral-400">
                Syncing project entities from backend Firestore database...
              </div>
            </div>
          )}

          {/* Empty Search Result */}
          {!loading && filteredProjects.length === 0 && (
            <div className="py-20 text-center rounded-3xl glass-panel border border-white/10">
              <Layers className="w-12 h-12 text-neutral-500 mx-auto mb-3" />
              <h3 className="text-lg font-heading font-bold text-white mb-1">
                No matching systems found
              </h3>
              <p className="text-xs font-mono text-neutral-400 mb-4">
                No database records match your filter criteria "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-4 py-2 rounded-xl bg-gold/10 border border-gold/40 text-gold text-xs font-mono uppercase"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Dynamic Projects Grid */}
          {!loading && filteredProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {filteredProjects.map((project, index) => {
                const delayClass = `float-delay-${index % 5}`;
                return (
                  <article
                    key={project.id || index}
                    className={`floating-card ${delayClass} flex flex-col h-full`}
                  >
                    <div className="h-full rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-gold/50 flex flex-col justify-between group transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                      
                      {/* Image Thumbnail with Overlay */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-obsidian-950 border-b border-white/5">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                            onError={(e) => {
                              e.currentTarget.src = '/images/preview.png';
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-obsidian-900 text-neutral-500 font-mono text-xs">
                            System Graphic Placeholder
                          </div>
                        )}

                        {/* Top Category Badge */}
                        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-obsidian-950/90 border border-gold/30 backdrop-blur-md text-[10px] font-mono text-gold uppercase tracking-wider">
                          <Cpu className="w-3 h-3" />
                          <span>{project.category || 'Engineering'}</span>
                        </div>

                        {/* Date Badge */}
                        {project.date && (
                          <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-obsidian-950/90 border border-white/10 backdrop-blur-md text-[10px] font-mono text-neutral-400">
                            <Calendar className="w-3 h-3" />
                            <span>{project.date}</span>
                          </div>
                        )}
                      </div>

                      {/* Card Content Body */}
                      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-heading font-bold text-white group-hover:text-gold transition-colors mb-2">
                            {project.title}
                          </h3>
                          <p className="text-xs text-neutral-300 font-light leading-relaxed mb-5 line-clamp-3">
                            {project.desc}
                          </p>
                        </div>

                        <div>
                          {/* Tech Badge Pills */}
                          {Array.isArray(project.tech) && project.tech.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-6">
                              {project.tech.map((t, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/10 text-[10px] font-mono text-neutral-300"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Action Links */}
                          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                            {project.live && project.live !== '#' ? (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-xl bg-gold text-obsidian-950 font-heading font-bold text-xs uppercase tracking-wider hover:bg-white transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                              >
                                <span>Live Demo</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            ) : (
                              <span className="text-[11px] font-mono text-neutral-500 italic">
                                Private / Internal
                              </span>
                            )}

                            {project.code && project.code !== '#' && (
                              <a
                                href={project.code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/15 text-neutral-300 hover:text-white hover:border-gold text-xs font-mono uppercase flex items-center gap-1.5 transition-colors"
                              >
                                <Github className="w-3.5 h-3.5" />
                                <span>Code</span>
                              </a>
                            )}
                          </div>
                        </div>

                      </div>

                    </div>
                  </article>
                );
              })}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
