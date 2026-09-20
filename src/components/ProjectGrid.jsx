'use client';
import React from 'react';
import Link from 'next/link';
import { ExternalLink, ArrowRight, Github, BookOpen } from 'lucide-react';
import { useProjects } from '@/hooks/useProjects';
import { motion } from 'framer-motion';
import { SkeletonGrid } from './SkeletonGrid';

export default function ProjectGrid() {
  const { projects, loading, error } = useProjects();

  const hasCaseStudy = (p) => p.problem || p.built || p.learned;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="work" className="py-20 md:py-32 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="font-['Epilogue'] text-5xl md:text-7xl font-bold tracking-tight text-[#24211E] mb-6">
              Selected Work
            </h2>
            <p className="font-['Literata'] text-xl md:text-2xl text-[#3C4A3E]">
              Engineered for scale. Designed for impact.
            </p>
          </div>
          <Link href="/projects" className="group flex items-center gap-4 text-[#C1603A] font-['Epilogue'] font-bold tracking-widest uppercase text-sm hover:text-[#24211E] transition-colors">
            View Archive <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>

        {loading ? (
          <SkeletonGrid count={4} cols={2} />
        ) : error ? (
          <div className="p-8 border-2 border-red-500 text-red-500 font-bold bg-white">{error}</div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {projects.slice(0, 4).map((project, idx) => (
              <motion.article 
                variants={cardVariants}
                key={project.id || idx} 
                className="group border-2 border-[#24211E] bg-[#FAF6F0] hover:bg-[#24211E] transition-colors duration-300 flex flex-col justify-between"
              >
                {/* Project Image */}
                <Link href={`/projects/${project.id || project.title.toLowerCase().replace(/\s+/g, '-')}`} className="block relative w-full h-48 md:h-64 overflow-hidden border-b-2 border-[#24211E] group-hover:border-[#FAF6F0]/20 transition-colors bg-[#24211E]/5 flex items-center justify-center cursor-pointer">
                  {/* Blurred Background Layer */}
                  <img 
                    src={project.image || '/images/preview.png'} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 blur-xl scale-110" 
                    onError={(e) => { e.currentTarget.src = '/images/preview.png'; }}
                  />
                  {/* Full Uncropped Image */}
                  <img 
                    src={project.image || '/images/preview.png'} 
                    alt={project.title} 
                    className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 p-4" 
                    onError={(e) => { e.currentTarget.src = '/images/preview.png'; }}
                  />
                </Link>

                <div className="p-8 lg:p-10 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-['Epilogue'] text-xs font-bold uppercase tracking-widest text-[#C1603A]">{project.category || 'Architecture'}</span>
                    <span className="font-['Epilogue'] text-xs uppercase tracking-widest text-[#24211E] group-hover:text-[#FAF6F0] opacity-60 transition-colors">{project.date || 'Active'}</span>
                  </div>
                  
                  <Link href={`/projects/${project.id || project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <h3 className="font-['Epilogue'] text-3xl lg:text-4xl font-bold mb-4 text-[#24211E] group-hover:text-[#FAF6F0] transition-colors cursor-pointer hover:underline decoration-2 underline-offset-4">
                      {project.title}
                    </h3>
                  </Link>
                  
                  <p className="font-['Literata'] text-lg text-[#3C4A3E] group-hover:text-[#FAF6F0]/80 mb-10 line-clamp-3 leading-relaxed transition-colors">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech?.map(t => (
                      <span 
                        key={t} 
                        className="px-3 py-1 border border-[#24211E]/20 group-hover:border-[#FAF6F0]/20 text-xs font-['Epilogue'] uppercase font-bold tracking-widest text-[#24211E] group-hover:text-[#FAF6F0] transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t-2 border-[#24211E] group-hover:border-[#FAF6F0]/20 flex flex-wrap transition-colors">
                  {hasCaseStudy(project) && (
                    <Link 
                      href={`/projects/${project.slug || project.id}`} 
                      className="flex-1 min-w-0 p-4 flex items-center justify-center gap-2 font-['Epilogue'] text-xs font-bold uppercase tracking-widest text-[#24211E] group-hover:text-[#FAF6F0] border-r border-[#24211E]/20 group-hover:border-[#FAF6F0]/20 hover:bg-[#C1603A] hover:!text-[#FAF6F0] transition-colors last:border-r-0"
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
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
