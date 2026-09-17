'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF6F0] border-t border-[#E7DFD5] py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 pb-12 border-b border-[#E7DFD5]">
        
        <div className="flex-1 space-y-4">
          <h2 className="font-['Epilogue'] text-[#24211E] font-bold text-lg">Shashank Gowda NB</h2>
          <p className="font-['Literata'] text-[#24211E] text-sm max-w-sm">
            Engineering fault-tolerant distributed infrastructure, low-latency microservices, and deep learning vision pipelines.
          </p>
        </div>

        <div className="flex flex-col space-y-3 font-['Literata'] text-[#24211E] text-sm">
          <Link href="/" className="hover:text-[#C1603A] transition-colors">Home</Link>
          <Link href="/projects" className="hover:text-[#C1603A] transition-colors">Work</Link>
          <Link href="/skills" className="hover:text-[#C1603A] transition-colors">Toolkit</Link>
          <Link href="/contact" className="hover:text-[#C1603A] transition-colors">Contact</Link>
        </div>

        <div className="flex flex-col space-y-3 font-['Literata'] text-[#24211E] text-sm">
          <a href="mailto:shashankgowdanb166@gmail.com" className="hover:text-[#C1603A] transition-colors">Email</a>
          <a href="https://github.com/MASTER870-CMD" target="_blank" rel="noopener noreferrer" className="hover:text-[#C1603A] transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/shashank-gowda-nb-b94724375" target="_blank" rel="noopener noreferrer" className="hover:text-[#C1603A] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[#C1603A] transition-colors">Twitter/X</a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-['Epilogue'] text-xs text-[#3C4A3E]">
        <div className="flex items-center gap-4">
          <span>&copy; {new Date().getFullYear()} Shashank Gowda NB</span>
          <span>Bengaluru/IST — {new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute:'2-digit' })}</span>
        </div>
        <button onClick={scrollToTop} className="hover:text-[#C1603A] transition-colors uppercase tracking-wider font-semibold">
          Back to top &uarr;
        </button>
      </div>
    </footer>
  );
}
