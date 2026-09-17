import React from 'react';

export default function Vision() {
  return (
    <section id="about" className="px-6 py-24 md:py-32 max-w-7xl mx-auto border-b border-[#E7DFD5]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-['Epilogue'] text-4xl md:text-5xl lg:text-6xl text-[#24211E] font-bold leading-tight mb-8">
            Bridging the gap between <span className="text-[#C1603A]">raw research</span> and <span className="text-[#3C4A3E]">production systems.</span>
          </h2>
        </div>
        <div className="space-y-8 font-['Literata'] text-xl md:text-2xl text-[#24211E] leading-relaxed">
          <p>
            The top 1% of engineering isn't just about writing code; it's about architecture, hardware-level optimization, and creating systems that scale autonomously.
          </p>
          <p>
            I specialize in building intelligent, local-first architectures — from full-duplex voice agents running on raw Windows APIs to secure, serverless RAG pipelines.
          </p>
          <p className="font-bold text-[#C1603A]">
            I don't just build wrappers. I build engines.
          </p>
        </div>
      </div>
    </section>
  );
}
