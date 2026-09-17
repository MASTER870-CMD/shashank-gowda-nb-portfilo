'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ExternalLink, Github, Loader2, ArrowLeft, Search, X, BookOpen } from 'lucide-react';
import { useProjects } from '@/hooks/useProjects';
import { motion } from 'framer-motion';
import { SkeletonGrid } from '@/components/SkeletonGrid';

export default function ProjectsArchivePage() {
  const { projects, loading, error } = useProjects();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  
  const categories = ['All', ...new Set(projects.map(p => p.category))].filter(Boolean);

  const filteredProjects = useMemo(() => {
    let result = filter === 'All' ? projects : projects.filter(p => p.category === filter);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.title?.toLowerCase().includes(q) ||
        p.desc?.toLowerCase().includes(q) ||
        p.tech?.some(t => t.toLowerCase().includes(q)) ||
        p.category?.toLowerCase().includes(q)
      );
    }
    return result;
  }, [projects, filter, search]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const hasCaseStudy = (p) => p.problem || p.built || p.learned;

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
              className="flex flex-col md:flex-row gap-6 mb-16"
            >
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-5 py-2.5 font-['Epilogue'] text-xs font-bold uppercase tracking-widest border-2 transition-colors duration-300 ${
                      filter === cat 
                        ? 'bg-[#24211E] text-[#FAF6F0] border-[#24211E]' 
                        : 'bg-transparent text-[#24211E] border-[#24211E] hover:bg-[#24211E]/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative md:ml-auto w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#24211E]/50" />
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search projects, tech..."
                  className="w-full pl-10 pr-10 py-2.5 border-2 border-[#24211E] bg-white text-[#24211E] font-['Epilogue'] text-sm focus:outline-none focus:border-[#C1603A] placeholder:text-[#24211E]/40"
                />
                {search && (
                  <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#24211E]/50 hover:text-[#C1603A]">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>

            {/* Results count */}
            {search && (
              <p className="font-['Epilogue'] text-sm font-bold uppercase tracking-widest text-[#C1603A] mb-8">
                {filteredProjects.length} result{filteredProjects.length !== 1 ? 's' : ''} for "{search}"
              </p>
            )}

            {filteredProjects.length === 0 ? (
              <div className="text-center py-20 border-2 border-dashed border-[#24211E]/30">
                <p className="font-['Literata'] text-xl text-[#24211E]/50">No projects found matching your search.</p>
              </div>
            ) : (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
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
                        <span className="font-['Epilogue'] text-xs font-bold uppercase tracking-widest text-[#C1603A]">{project.category || 'Architecture'}</span>
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
                          href={`/projects/${project.id}`}
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
                          href={`/projects/${project.id}`}
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
