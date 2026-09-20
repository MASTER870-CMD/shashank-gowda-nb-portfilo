'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SKILLS = [
  {
    area: 'AI & Machine Learning',
    note: 'Where I spend most of my deep work time.',
    tools: [
      { name: 'Python', detail: 'Primary language for all AI/ML work' },
      { name: 'TensorFlow & PyTorch', detail: 'Neural networks, model training & fine-tuning' },
      { name: 'HuggingFace Transformers', detail: 'LLMs, BERT variants, fine-tuning pipelines' },
      { name: 'RAG & Vector Search', detail: 'FAISS, Pinecone, semantic embeddings' },
      { name: 'OpenCV', detail: 'Real-time computer vision & image processing' },
      { name: 'Gemini & OpenAI APIs', detail: 'Integrating LLMs into production applications' },
    ],
  },
  {
    area: 'Full Stack Web Development',
    note: 'I build complete products end-to-end, from UI to database.',
    tools: [
      { name: 'Next.js & React', detail: 'SSR, App Router, dynamic routing' },
      { name: 'Node.js & Express', detail: 'REST APIs, middleware, authentication' },
      { name: 'Firebase & Firestore', detail: 'Real-time database, auth, hosting' },
      { name: 'Tailwind CSS', detail: 'Utility-first styling, responsive design' },
      { name: 'TypeScript', detail: 'Type safety across the full stack' },
      { name: 'MongoDB & SQL', detail: 'Data modeling, queries, indexing' },
    ],
  },
  {
    area: 'Mobile & Desktop Apps',
    note: 'Cross-platform development for real users.',
    tools: [
      { name: 'React Native', detail: 'Android & iOS from a single codebase' },
      { name: 'Android (Java/Kotlin)', detail: 'Native Android apps & SDKs' },
      { name: 'Electron.js', detail: 'Windows desktop applications' },
      { name: 'PyWebView', detail: 'Python-powered desktop apps with web UI' },
      { name: 'Flutter (learning)', detail: 'Cross-platform UI exploration' },
    ],
  },
  {
    area: 'Cloud & DevOps',
    note: 'Getting things to production and keeping them alive.',
    tools: [
      { name: 'AWS (EC2, S3, RDS)', detail: 'Cloud compute, storage, managed databases' },
      { name: 'Docker & Containers', detail: 'Containerized deployments, multi-stage builds' },
      { name: 'CI/CD Pipelines', detail: 'GitHub Actions, automated testing & deploys' },
      { name: 'Vercel & Netlify', detail: 'Frontend deployments, serverless functions' },
      { name: 'Linux Server Admin', detail: 'Ubuntu, systemd, production server setup' },
    ],
  },
  {
    area: 'Systems & Low-Level',
    note: 'I like knowing what happens underneath.',
    tools: [
      { name: 'C & C++', detail: 'Performance-critical code, algorithms' },
      { name: 'Linux Kernel Basics', detail: 'Syscalls, process management, networking' },
      { name: 'Computer Networks', detail: 'TCP/IP, sockets, HTTP internals' },
      { name: 'Custom OS (Voktra)', detail: 'Built a customized Xubuntu-based OS' },
      { name: 'Security Fundamentals', detail: 'JWT, OAuth, basic pen-testing with Kali' },
    ],
  },
];

export default function MatrixPage() {
  const [activeArea, setActiveArea] = useState(null);

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#24211E] selection:bg-[#C1603A] selection:text-[#FAF6F0]">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">

        {/* Back */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-['Epilogue'] text-sm font-bold uppercase tracking-widest text-[#24211E] border-b-2 border-transparent hover:border-[#C1603A] hover:text-[#C1603A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="font-['Epilogue'] text-xs font-bold uppercase tracking-widest text-[#C1603A] mb-4">
            Skills & Tools
          </p>
          <h1 className="font-['Epilogue'] text-5xl md:text-6xl font-bold tracking-tight text-[#24211E] leading-tight mb-6">
            What I work with.
          </h1>
          <p className="font-['Literata'] text-xl text-[#3C4A3E] leading-relaxed">
            I've spent the last few years building across the full stack — from training ML models 
            to shipping mobile apps to managing Linux servers. Here's what I actually use day-to-day.
          </p>
        </div>

        {/* Skills Sections */}
        <div className="space-y-0 divide-y divide-[#E7DFD5]">
          {SKILLS.map((section) => (
            <div key={section.area} className="py-12">
              {/* Section Header */}
              <div className="mb-8">
                <h2 className="font-['Epilogue'] text-2xl md:text-3xl font-bold text-[#24211E] mb-2">
                  {section.area}
                </h2>
                <p className="font-['Literata'] text-base italic text-[#3C4A3E]">
                  {section.note}
                </p>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-start gap-3 p-4 border border-[#E7DFD5] bg-white hover:border-[#C1603A]/40 hover:bg-[#FAF6F0] transition-colors"
                  >
                    <span className="mt-0.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-[#C1603A]" />
                    </span>
                    <div>
                      <p className="font-['Epilogue'] font-bold text-[#24211E] text-sm">
                        {tool.name}
                      </p>
                      <p className="font-['Literata'] text-sm text-[#3C4A3E] mt-0.5 leading-snug">
                        {tool.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-12 border-t-2 border-[#24211E]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-['Epilogue'] text-2xl font-bold text-[#24211E] mb-2">
                Want to work together?
              </h3>
              <p className="font-['Literata'] text-[#3C4A3E] text-lg">
                I'm open to full-time roles, freelance projects, and consulting engagements.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#24211E] text-[#FAF6F0] font-['Epilogue'] uppercase tracking-widest text-sm font-bold hover:bg-[#C1603A] transition-colors whitespace-nowrap"
            >
              Get In Touch
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
