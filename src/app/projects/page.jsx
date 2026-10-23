'use client';
import React, { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { ExternalLink, Github, Loader2, ArrowLeft, Search, X, BookOpen, ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { useProjects } from '@/hooks/useProjects';
import { motion, AnimatePresence } from 'framer-motion';
import { SkeletonGrid } from '@/components/SkeletonGrid';

/**
 * Normalizes raw category strings into clean, canonical groups.
 * e.g. "ai" → "AI", "web" → "Web", "tools" → "Tools",
 * "AI, FinTech, Full-Stack, Payments, Automation" → "FinTech"
 * Falls back to "Other" for truly uncategorizable entries.
 */
function normalizeCategory(raw = '') {
  const lower = raw.toLowerCase().trim();

  // Exact single-word matches first
  if (lower === 'ai') return 'AI';
  if (lower === 'web') return 'Web';
  if (lower === 'tools') return 'Tools';

  // Compound category strings — assign the most specific primary group
  if (lower.includes('fintech') || lower.includes('payment')) return 'FinTech';
  if (lower.includes('devops') || lower.includes('cloud')) return 'DevOps';
  if (lower.includes('streaming') || lower.includes('high-performance')) return 'Streaming';

  // Broader fallbacks
  if (lower.includes('ai') || lower.includes('machine learning') || lower.includes('vision') || lower.includes('generative')) return 'AI';
  if (lower.includes('web') || lower.includes('full-stack') || lower.includes('frontend')) return 'Web';
  if (lower.includes('tool') || lower.includes('security') || lower.includes('utility')) return 'Tools';
  if (lower.includes('kernel') || lower.includes('system') || lower.includes('distributed')) return 'Systems';

  return 'Other';
}

/** Primary categories that are always visible (in display order). */
const PRIMARY_CATEGORIES = ['All', 'AI', 'Web', 'Tools'];

export default function ProjectsArchivePage() {
  const { projects, loading, error } = useProjects();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [showAllFilters, setShowAllFilters] = useState(false);

  // Build the normalized category map and unique sorted list
  const { normalizedProjects, allCategories, categoryCounts } = useMemo(() => {
    const mapped = projects.map(p => ({
      ...p,
      _normalizedCategory: normalizeCategory(p.category),
    }));

    const counts = {};
    mapped.forEach(p => {
      counts[p._normalizedCategory] = (counts[p._normalizedCategory] || 0) + 1;
    });

    // Unique categories sorted: primary first, then rest alphabetically
    const allCats = [...new Set(mapped.map(p => p._normalizedCategory))];
    const primarySet = new Set(PRIMARY_CATEGORIES);
    const secondary = allCats.filter(c => !primarySet.has(c) && c !== 'All').sort();
    const ordered = [...PRIMARY_CATEGORIES.filter(c => c === 'All' || allCats.includes(c)), ...secondary];

    return { normalizedProjects: mapped, allCategories: ordered, categoryCounts: { All: mapped.length, ...counts } };
  }, [projects]);

  // Split into primary (always visible) and secondary (hidden behind toggle)
  const primaryFilters = allCategories.filter(c => PRIMARY_CATEGORIES.includes(c));
  const secondaryFilters = allCategories.filter(c => !PRIMARY_CATEGORIES.includes(c));

  const filteredProjects = useMemo(() => {
    let result = filter === 'All'
      ? normalizedProjects
      : normalizedProjects.filter(p => p._normalizedCategory === filter);

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(p =>
        p.title?.toLowerCase().includes(q) ||
        p.desc?.toLowerCase().includes(q) ||
        p.tech?.some(t => t.toLowerCase().includes(q)) ||
        p.category?.toLowerCase().includes(q) ||
        p._normalizedCategory?.toLowerCase().includes(q)
      );
    }
    return result;
  }, [normalizedProjects, filter, search]);

  const handleFilterClick = useCallback((cat) => {
    setFilter(cat);
    setSearch(''); // reset search when switching category
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const hasCaseStudy = (p) => p.problem || p.built || p.learned;

  const FilterButton = ({ cat, isActive }) => (
    <button
      onClick={() => handleFilterClick(cat)}
      className={`inline-flex items-center gap-2 px-5 py-2.5 font-['Epilogue'] text-xs font-bold uppercase tracking-widest border-2 transition-all duration-300 ${
        isActive
          ? 'bg-[#24211E] text-[#FAF6F0] border-[#24211E] shadow-md'
          : 'bg-transparent text-[#24211E] border-[#24211E] hover:bg-[#24211E]/10'
      }`}
    >
      {cat}
      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full transition-colors duration-300 ${
        isActive
          ? 'bg-[#C1603A] text-[#FAF6F0]'
          : 'bg-[#24211E]/10 text-[#24211E]/60'
      }`}>
        {categoryCounts[cat] || 0}
      </span>
    </button>
  );

  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#24211E]">
      <section className="px-6 py-16 md:py-28 max-w-7xl mx-auto">

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 font-['Epilogue'] text-sm font-bold uppercase tracking-widest text-[#24211E] border-2 border-[#24211E] px-6 py-3 hover:bg-[#24211E] hover:text-[#FAF6F0] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="font-['Epilogue'] text-6xl md:text-8xl font-bold tracking-tight mb-6">
            The Archive.
          </h1>
          <p className="font-['Literata'] text-xl md:text-2xl text-[#3C4A3E] max-w-2xl leading-relaxed">
            A comprehensive ledger of architectural implementations, systems design, and full-stack engineering efforts.
          </p>
        </motion.div>

        {loading ? (
          <div className="mt-8">
            <SkeletonGrid count={6} cols={3} />
          </div>
        ) : error ? (
          <div className="p-8 border-2 border-red-500 text-red-500 font-bold bg-white">{error}</div>
        ) : (
          <>
            {/* Filters + Search */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-16"
            >
              {/* Search Bar — full width on top */}
              <div className="relative w-full md:max-w-md mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#24211E]/50" />
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search by name, tech, category..."
                  className="w-full pl-11 pr-10 py-3 border-2 border-[#24211E] bg-white text-[#24211E] font-['Epilogue'] text-sm focus:outline-none focus:ring-2 focus:ring-[#C1603A]/30 focus:border-[#C1603A] placeholder:text-[#24211E]/40 transition-all duration-200"
                />
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-[#24211E]/40 hover:text-[#C1603A] hover:bg-[#C1603A]/10 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Primary (always visible) */}
                {primaryFilters.map(cat => (
                  <FilterButton key={cat} cat={cat} isActive={filter === cat} />
                ))}

                {/* Secondary (collapsible) */}
                <AnimatePresence>
                  {showAllFilters && secondaryFilters.map(cat => (
                    <motion.div
                      key={cat}
                      initial={{ opacity: 0, scale: 0.85, width: 0 }}
                      animate={{ opacity: 1, scale: 1, width: 'auto' }}
                      exit={{ opacity: 0, scale: 0.85, width: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <FilterButton cat={cat} isActive={filter === cat} />
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Toggle button for secondary filters */}
                {secondaryFilters.length > 0 && (
                  <button
                    onClick={() => setShowAllFilters(prev => !prev)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 font-['Epilogue'] text-xs font-bold uppercase tracking-widest text-[#C1603A] border-2 border-dashed border-[#C1603A]/40 hover:border-[#C1603A] hover:bg-[#C1603A]/5 transition-all duration-300"
                  >
                    <Filter className="w-3.5 h-3.5" />
                    {showAllFilters ? 'Less' : `+${secondaryFilters.length} More`}
                    {showAllFilters
                      ? <ChevronUp className="w-3.5 h-3.5" />
                      : <ChevronDown className="w-3.5 h-3.5" />
                    }
                  </button>
                )}
              </div>
            </motion.div>

            {/* Results count */}
            {(search || filter !== 'All') && (
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <p className="font-['Epilogue'] text-sm font-bold uppercase tracking-widest text-[#C1603A]">
                  {filteredProjects.length} result{filteredProjects.length !== 1 ? 's' : ''}
                  {search ? ` for "${search}"` : ''}
                  {filter !== 'All' ? ` in ${filter}` : ''}
                </p>
                {(search || filter !== 'All') && (
                  <button
                    onClick={() => { setSearch(''); setFilter('All'); }}
                    className="text-xs font-['Epilogue'] font-bold uppercase tracking-widest text-[#24211E]/40 hover:text-[#C1603A] underline underline-offset-2 transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>
            )}

            {filteredProjects.length === 0 ? (
              <div className="text-center py-20 border-2 border-dashed border-[#24211E]/30">
                <Search className="w-10 h-10 mx-auto mb-4 text-[#24211E]/20" />
                <p className="font-['Literata'] text-xl text-[#24211E]/50 mb-2">No projects found.</p>
                <p className="font-['Epilogue'] text-sm text-[#24211E]/30">Try adjusting your search or filter criteria.</p>
                <button
                  onClick={() => { setSearch(''); setFilter('All'); }}
                  className="mt-6 px-5 py-2.5 font-['Epilogue'] text-xs font-bold uppercase tracking-widest border-2 border-[#C1603A] text-[#C1603A] hover:bg-[#C1603A] hover:text-white transition-colors"
                >
                  Show All Projects
                </button>
              </div>
            ) : (
              <motion.div
                key={`grid-${filter}-${search}`}
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

              >
                {filteredProjects.map((project) => (
                  <motion.article
                    variants={cardVariants}
                    key={project.id}
                    className="group border-2 border-[#24211E] bg-[#FAF6F0] hover:bg-[#24211E] transition-colors duration-300 flex flex-col"
                  >
                    {/* Project Image */}
                    <div className="relative w-full h-52 overflow-hidden border-b-2 border-[#24211E] group-hover:border-[#FAF6F0]/20 transition-colors bg-[#24211E]/5 flex items-center justify-center">
                      <img
                        src={project.image || '/images/preview.png'}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-30 blur-xl scale-110"
                        onError={(e) => { e.currentTarget.src = '/images/preview.png'; }}
                      />
                      <img
                        src={project.image || '/images/preview.png'}
                        alt={project.title}
                        className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 p-4"
                        onError={(e) => { e.currentTarget.src = '/images/preview.png'; }}
                      />
                    </div>

                    {/* Card Body */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <span className="font-['Epilogue'] text-xs font-bold uppercase tracking-widest text-[#C1603A]">{project._normalizedCategory}</span>
                        <span className="font-['Epilogue'] text-xs uppercase tracking-widest text-[#24211E] group-hover:text-[#FAF6F0] opacity-60 transition-colors">
                          {project.date ? new Date(project.date).getFullYear() : ''}
                        </span>
                      </div>

                      <h3 className="font-['Epilogue'] text-2xl font-bold mb-3 text-[#24211E] group-hover:text-[#FAF6F0] transition-colors">
                        {project.title}
                      </h3>

                      <p className="font-['Literata'] text-base text-[#3C4A3E] group-hover:text-[#FAF6F0]/80 mb-6 line-clamp-3 leading-relaxed transition-colors flex-1">
                        {project.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto mb-6">
                        {project.tech?.slice(0, 4).map(t => (
                          <span
                            key={t}
                            className="px-2 py-1 border border-[#24211E]/20 group-hover:border-[#FAF6F0]/20 text-[10px] font-['Epilogue'] uppercase font-bold tracking-widest text-[#24211E] group-hover:text-[#FAF6F0] transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech?.length > 4 && (
                          <span className="px-2 py-1 text-[10px] font-['Epilogue'] uppercase font-bold tracking-widest text-[#24211E]/50 group-hover:text-[#FAF6F0]/50">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Smart Action Buttons */}
                    <div className="border-t-2 border-[#24211E] group-hover:border-[#FAF6F0]/20 transition-colors flex flex-wrap">
                      {hasCaseStudy(project) && (
                        <Link
                          href={`/projects/${project.slug || project.id}`}
                          className="flex-1 min-w-0 p-4 flex items-center justify-center gap-2 font-['Epilogue'] text-xs font-bold uppercase tracking-widest text-[#24211E] group-hover:text-[#FAF6F0] border-r border-[#24211E]/20 group-hover:border-[#FAF6F0]/20 hover:bg-[#C1603A] hover:!text-[#FAF6F0] transition-colors"
                        >
                          <BookOpen className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">Case Study</span>
                        </Link>
                      )}
                      {project.live && project.live !== '#' && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 min-w-0 p-4 flex items-center justify-center gap-2 font-['Epilogue'] text-xs font-bold uppercase tracking-widest text-[#24211E] group-hover:text-[#FAF6F0] border-r border-[#24211E]/20 group-hover:border-[#FAF6F0]/20 hover:bg-[#C1603A] hover:!text-[#FAF6F0] transition-colors last:border-r-0"
                        >
                          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">Preview</span>
                        </a>
                      )}
                      {project.code && project.code !== '#' && (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 min-w-0 p-4 flex items-center justify-center gap-2 font-['Epilogue'] text-xs font-bold uppercase tracking-widest text-[#24211E] group-hover:text-[#FAF6F0] hover:bg-[#24211E] hover:!text-[#FAF6F0] transition-colors"
                        >
                          <Github className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">GitHub</span>
                        </a>
                      )}
                      {/* Fallback if project has nothing */}
                      {!hasCaseStudy(project) && (!project.live || project.live === '#') && (!project.code || project.code === '#') && (
                        <Link
                          href={`/projects/${project.slug || project.id}`}
                          className="flex-1 p-4 flex items-center justify-center gap-2 font-['Epilogue'] text-xs font-bold uppercase tracking-widest text-[#24211E]/40 group-hover:text-[#FAF6F0]/40 transition-colors"
                        >
                          Coming Soon
                        </Link>
                      )}
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </>
        )}
      </section>
    </main>
  );
}

