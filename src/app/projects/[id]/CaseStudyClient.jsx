'use client';
import React from 'react';
import Link from 'next/link';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CaseStudyClient({ project, problemText, builtText, learnedText }) {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#24211E]">
      {/* Hero Header */}
      <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto border-b border-[#E7DFD5]">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/projects" className="inline-flex items-center gap-3 font-['Epilogue'] text-sm font-bold uppercase tracking-widest text-[#24211E] border-2 border-[#24211E] px-6 py-3 hover:bg-[#24211E] hover:text-[#FAF6F0] transition-colors group mb-12">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Archive
          </Link>
        </motion.div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-4xl"
          >
            <span className="font-['Epilogue'] text-sm font-bold uppercase tracking-widest text-[#3C4A3E] mb-4 block">
              {project.category} &bull; {project.date.split('T')[0] || project.date}
            </span>
            <h1 className="font-['Epilogue'] text-5xl md:text-7xl font-bold tracking-tight mb-6">
              {project.title}
            </h1>
            <p className="font-['Literata'] text-xl md:text-2xl text-[#3C4A3E] leading-relaxed">
              {project.desc}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col gap-4 shrink-0"
          >
            {project.live && project.live !== '#' && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C1603A] text-[#FAF6F0] font-['Epilogue'] text-sm font-bold uppercase tracking-widest hover:bg-[#24211E] transition-colors">
                Live System <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.code && project.code !== '#' && (
              <a href={project.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-[#24211E] text-[#24211E] font-['Epilogue'] text-sm font-bold uppercase tracking-widest hover:bg-[#24211E] hover:text-[#FAF6F0] transition-colors">
                Source Code <Github className="w-4 h-4" />
              </a>
            )}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap gap-3"
        >
          {project.tech?.map(t => (
            <span key={t} className="px-4 py-2 bg-[#24211E]/5 border border-[#24211E]/20 font-['Epilogue'] text-xs font-bold uppercase tracking-widest">
              {t}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Hero Image */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full h-[50vh] md:h-[70vh] border-2 border-[#24211E] bg-[#24211E]/5 flex items-center justify-center overflow-hidden group"
        >
          <img 
            src={project.image || '/images/preview.png'} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl scale-110" 
          />
          <img 
            src={project.image || '/images/preview.png'} 
            alt={project.title} 
            className="relative z-10 w-full h-full object-contain p-4 md:p-8 transition-transform duration-1000 group-hover:scale-105" 
          />
        </motion.div>
      </section>

      {/* Case Study Details */}
      <section className="px-6 py-12 md:py-24 max-w-5xl mx-auto border-t border-[#E7DFD5]">
        <div className="space-y-24">
          
          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
            <h2 className="font-['Epilogue'] text-[#C1603A] text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-[#C1603A]"></span> The Challenge
            </h2>
            <p className="font-['Literata'] text-[#24211E] text-xl md:text-2xl leading-loose">
              {problemText}
            </p>
          </motion.div>

          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
            <h2 className="font-['Epilogue'] text-[#3C4A3E] text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-[#3C4A3E]"></span> Architecture & Execution
            </h2>
            <p className="font-['Literata'] text-[#24211E] text-xl md:text-2xl leading-loose">
              {builtText}
            </p>
          </motion.div>

          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
            <h2 className="font-['Epilogue'] text-[#3C4A3E] text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-[#3C4A3E]"></span> Business Impact
            </h2>
            <p className="font-['Literata'] text-[#24211E] text-xl md:text-2xl leading-loose">
              {learnedText}
            </p>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
