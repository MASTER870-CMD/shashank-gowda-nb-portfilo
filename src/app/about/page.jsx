'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#24211E] selection:bg-[#C1603A] selection:text-[#FAF6F0] flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-24">
        <h1 className="font-['Epilogue'] text-5xl md:text-7xl font-bold mb-8">About Shashank Gowda NB</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="font-['Epilogue'] text-3xl font-bold mb-4 text-[#C1603A]">Who I am</h2>
            <p className="font-['Literata'] text-xl leading-relaxed text-[#3C4A3E]">
              I am an AI Engineer and Full-Stack Developer based in Bengaluru, Karnataka, India. I specialize in building fault-tolerant distributed infrastructure, low-latency microservices, and deep learning vision pipelines. I am currently studying software engineering at NTTF while concurrently architecting production-ready systems.
            </p>
          </section>

          <section>
            <h2 className="font-['Epilogue'] text-3xl font-bold mb-4 text-[#C1603A]">What I build</h2>
            <p className="font-['Literata'] text-xl leading-relaxed text-[#3C4A3E]">
              My focus is on engineering high-performance software across the entire stack. From custom Linux OS architecture (Voktra OS) to enterprise ERP applications, mobile apps (Android & iOS), and AI-powered data processing pipelines (CloudForge, RazorRecover AI), I take systems from concept to scalable production deployment.
            </p>
            <ul className="mt-6 space-y-3 font-['Literata'] text-lg text-[#3C4A3E] list-disc list-inside">
              <li><strong>AI Engineering:</strong> Deep neural networks, LLM integrations, RAG pipelines, and model inference optimization.</li>
              <li><strong>Full-Stack Web:</strong> React, Next.js, Node.js, and high-concurrency microservices.</li>
              <li><strong>Cloud & DevOps:</strong> AWS infrastructure, Docker, zero-downtime deployments.</li>
              <li><strong>Systems & Low-Level:</strong> C++, Linux kernel modifications, and performance-critical algorithms.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-['Epilogue'] text-3xl font-bold mb-4 text-[#C1603A]">Selected Projects</h2>
            <p className="font-['Literata'] text-xl leading-relaxed text-[#3C4A3E] mb-6">
              I believe in proving skills through shipped software. Explore my work to see real-world architectural decisions and implementations.
            </p>
            <div className="flex gap-4">
              <Link
                href="/projects"
                className="inline-block px-8 py-4 bg-[#24211E] text-[#FAF6F0] font-['Epilogue'] uppercase tracking-widest text-sm font-bold hover:bg-[#C1603A] transition-colors"
              >
                View Portfolio
              </Link>
              <Link
                href="/matrix"
                className="inline-block px-8 py-4 bg-transparent border-2 border-[#24211E] text-[#24211E] font-['Epilogue'] uppercase tracking-widest text-sm font-bold hover:border-[#C1603A] hover:text-[#C1603A] transition-colors"
              >
                View Tech Stack
              </Link>
            </div>
          </section>

          <section className="pt-12 mt-12 border-t border-[#E7DFD5]">
            <h2 className="font-['Epilogue'] text-3xl font-bold mb-6 text-[#24211E]">Let's Connect</h2>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/MASTER870-CMD" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-['Epilogue'] uppercase tracking-widest text-sm font-bold border-b-2 border-transparent hover:border-[#C1603A] hover:text-[#C1603A] transition-colors"
              >
                GitHub
              </a>
              <span className="text-[#3C4A3E]">—</span>
              <a 
                href="https://www.linkedin.com/in/shashank-gowda-nb-b94724375" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-['Epilogue'] uppercase tracking-widest text-sm font-bold border-b-2 border-transparent hover:border-[#C1603A] hover:text-[#C1603A] transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-[#3C4A3E]">—</span>
              <Link 
                href="/contact"
                className="font-['Epilogue'] uppercase tracking-widest text-sm font-bold border-b-2 border-transparent hover:border-[#C1603A] hover:text-[#C1603A] transition-colors"
              >
                Contact
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
