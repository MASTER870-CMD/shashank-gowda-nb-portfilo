'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Search, 
  ExternalLink, 
  Github, 
  ArrowLeft, 
  Calendar, 
  Loader2,
  Database
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useProjects } from '@/hooks/useProjects';

const CATEGORIES = ['ALL', 'WEB', 'AI', 'TOOLS'];

function matchesCategory(projectCategory, filter) {
  if (filter === 'ALL') return true;
  if (!projectCategory) return false;
  const cat = projectCategory.toUpperCase();
  if (filter === 'WEB') {
    return cat.includes('WEB') || cat.includes('APP') || cat.includes('FRONT') || cat.includes('STACK') || cat.includes('HUB');
  }
  if (filter === 'AI') {
    return cat.includes('AI') || cat.includes('VISION') || cat.includes('LEARNING') || cat.includes('NLP') || cat.includes('TENSOR');
  }
  if (filter === 'TOOLS') {
    return cat.includes('TOOL') || cat.includes('SECURITY') || cat.includes('KERNEL') || cat.includes('OS') || cat.includes('SCRIPT') || cat.includes('VAULT');
  }
  return cat.includes(filter);
}

export default function ProjectsArchivePage() {
  const { projects, loading } = useProjects();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  // Filter projects based on search query and category toggle
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = matchesCategory(p.category, selectedCategory);
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        p.title?.toLowerCase().includes(q) ||
        p.desc?.toLowerCase().includes(q) ||
        (Array.isArray(p.tech) && p.tech.some((t) => t.toLowerCase().includes(q)));

      return matchCat && matchSearch;
    });
  }, [projects, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-obsidian-950 text-white selection:bg-gold selection:text-obsidian-950 flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-24 bg-obsidian-950 relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-24">
          
          {/* Dedicated Return to Home Navigation */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-yellow-500 border border-yellow-500/30 hover:bg-yellow-500/10 px-3.5 sm:px-4 py-2 rounded-md transition-all font-mono text-xs sm:text-sm whitespace-nowrap group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform shrink-0" />
              <span>&lt; BACK TO SYSTEMS SPEC &amp; HOME</span>
            </Link>
          </div>

          {/* Header Section with Responsive Typography */}
          <div className="text-left mb-10 border-b border-neutral-800/80 pb-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight leading-tight">
                  Engineering Project Archive
                </h1>
                <p className="mt-3 text-neutral-400 text-sm md:text-base font-light max-w-2xl leading-relaxed">
                  Enterprise-grade portfolio archive synchronized live with backend Firestore database. Explore full-stack systems, computer vision models, and custom OS architectures.
                </p>
              </div>

              {/* Live Sync Indicator Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 font-mono text-xs self-start lg:self-auto shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]"></span>
                <span className="text-neutral-400 uppercase tracking-wider text-[11px]">Database Sync:</span>
                <span className="text-white font-semibold">
                  {loading ? 'SYNCING...' : `${projects.length} Production Deployments`}
                </span>
              </div>
            </div>
          </div>

          {/* Filter Bar: Stacking Flex Layout */}
          <div className="p-4 sm:p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80 mb-10">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 w-full">
              
              {/* Sleek Dark Search Field */}
              <div className="relative flex-1 w-full md:max-w-md">
                <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by title, stack..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-obsidian-950 border border-neutral-800 text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-gold/60 transition-colors font-mono"
                />
              </div>

              {/* Category Toggle Buttons: flex-wrap justify-start */}
              <div className="flex flex-wrap items-center justify-start gap-1.5 sm:gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors shrink-0 ${
                      selectedCategory === cat
                        ? 'bg-gold text-obsidian-950 font-bold'
                        : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* Loading Indicator */}
          {loading && (
            <div className="py-24 text-center">
              <Loader2 className="w-8 h-8 animate-spin text-gold mx-auto mb-3" />
              <div className="text-xs font-mono text-neutral-500">
                Retrieving database records from Firestore...
              </div>
            </div>
          )}

          {/* Empty Search State */}
          {!loading && filteredProjects.length === 0 && (
            <div className="py-20 text-center rounded-2xl bg-neutral-900/30 border border-neutral-800">
              <Database className="w-10 h-10 text-neutral-600 mx-auto mb-3" />
              <h3 className="text-base font-heading font-semibold text-white mb-1">
                No matching projects found
              </h3>
              <p className="text-xs font-mono text-neutral-500 mb-4">
                No entities match query "{searchQuery}" in category [{selectedCategory}].
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('ALL');
                }}
                className="px-3 py-1.5 rounded-lg bg-gold/10 border border-gold/30 text-gold text-xs font-mono uppercase"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Clean Grid UI: Spacious Responsive CSS Grid (1 col on mobile, 2 on tablet, 3 on desktop) */}
          {!loading && filteredProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-stretch">
              {filteredProjects.map((project, index) => (
                <article
                  key={project.id || index}
                  className="rounded-2xl overflow-hidden border border-white/5 hover:border-neutral-700 bg-obsidian-900/80 transition-all duration-300 flex flex-col justify-between shadow-xl"
                >
                  
                  {/* Top Half: aspect-video container with rounded top corners */}
                  <div className="relative w-full aspect-video bg-neutral-950 overflow-hidden rounded-t-2xl flex items-center justify-center border-b border-white/5">
                    <img
                      src={project.image || '/images/preview.png'}
                      alt={project.title}
                      className="w-full h-full object-cover object-center rounded-t-2xl transition-transform duration-500 ease-out hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = '/images/preview.png';
                      }}
                    />

                    {/* Category Badge: Absolute top-4 left-4 z-10 */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-xs font-medium text-yellow-500 rounded-md uppercase tracking-wider">
                      {project.category || 'ENGINEERING'}
                    </div>
                  </div>

                  {/* Bottom Half: Spacious Typography & Breathing Room (p-6 sm:p-8) */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-neutral-900/40">
                    <div>
                      {/* Title: text-xl font-semibold text-white tracking-tight mb-2 */}
                      <h3 className="text-xl font-semibold text-white tracking-tight mb-2 line-clamp-1">
                        {project.title}
                      </h3>
                      
                      {/* Description: text-sm text-neutral-400 leading-relaxed line-clamp-3 mb-6 */}
                      <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3 mb-6">
                        {project.desc}
                      </p>

                      {/* Tech Pills: flex flex-wrap gap-2 */}
                      {Array.isArray(project.tech) && project.tech.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-neutral-300 font-mono"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Footer of Card: Flex row with Date on left, Live & Code buttons on right */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-500">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{project.date || 'Active'}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {project.live && project.live !== '#' && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gold text-obsidian-950 text-xs font-heading font-semibold uppercase hover:bg-white transition-colors"
                          >
                            <span>Live</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}

                        {project.code && project.code !== '#' && (
                          <a
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-neutral-600 transition-colors"
                            title="View Source Code"
                            aria-label={`View code for ${project.title}`}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>

                </article>
              ))}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
