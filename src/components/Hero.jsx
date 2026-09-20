import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto border-b border-[#E7DFD5]">
      <div className="flex flex-col-reverse md:flex-row gap-12 items-start">
        <div className="flex-1 space-y-8">
          <h1 className="font-['Epilogue'] text-5xl md:text-7xl lg:text-8xl text-[#24211E] font-bold leading-[1.1] tracking-tight">
            Shashank Gowda NB
          </h1>
          <h2 className="text-2xl md:text-4xl text-[#C1603A] font-['Epilogue'] font-bold tracking-tight">
            AI Engineer & Full-Stack Developer
          </h2>
          <p className="text-xl md:text-2xl text-[#24211E] font-['Literata'] leading-relaxed max-w-2xl">
            Shashank Gowda NB is an AI Engineer and Full-Stack Developer based in Bengaluru, India, focused on building AI applications, enterprise ERP systems, cloud solutions, full-stack web applications, and production software.
          </p>
          <p className="text-[#3C4A3E] italic font-['Literata'] text-lg md:text-xl max-w-2xl hidden md:block">
            Bengaluru, India · AI · Full-Stack Development · Cloud · ERP Systems
          </p>
          <div className="pt-8">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#C1603A] text-[#FAF6F0] border-2 border-[#C1603A] font-['Epilogue'] uppercase tracking-wider text-base font-bold rounded-none hover:bg-transparent hover:text-[#C1603A] transition-colors"
            >
              Hire Me
            </Link>
          </div>
        </div>
        <div className="relative w-full md:w-2/5 lg:w-1/3 shrink-0">
          <div className="aspect-[4/5] bg-[#F7F1E8] border border-[#E7DFD5] relative overflow-hidden rounded-none grayscale-[20%] sepia-[10%]">
            <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.4%22/%3E%3C/svg%3E")' }}></div>
            <Image 
              src="/images/shashank-gowda-nb.jpg" 
              alt="Shashank Gowda NB" 
              fill
              className="object-cover rounded-none" 
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 md:-left-12 rotate-[-4deg] bg-[#FAF6F0] p-3 border border-[#E7DFD5] rounded-none">
            <p className="font-['Literata'] italic text-[#3C4A3E] text-sm">currently deep in RAG pipelines ☕</p>
          </div>
        </div>
      </div>
    </section>
  );
}
