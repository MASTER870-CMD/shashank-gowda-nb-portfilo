import React from 'react';
import Link from 'next/link';

export default function ContactTeaser() {
  return (
    <section id="contact" className="px-6 py-32 md:py-48 max-w-7xl mx-auto flex flex-col items-center text-center">
      <h2 className="font-['Epilogue'] text-5xl md:text-7xl lg:text-8xl text-[#24211E] font-bold mb-8 tracking-tight">
        Let's build it.
      </h2>
      <p className="font-['Literata'] text-xl md:text-3xl text-[#24211E] max-w-3xl mb-16 leading-relaxed">
        Whether you need an enterprise ERP, a scalable full-stack app, or a custom AI system — let's architect something extraordinary.
      </p>
      
      <div className="flex flex-col items-center gap-10 w-full">
        <a href="mailto:shashankgowdanb50@gmail.com" className="font-['Epilogue'] text-3xl md:text-5xl lg:text-6xl text-[#24211E] hover:text-[#C1603A] underline decoration-[#C1603A]/30 hover:decoration-[#C1603A] underline-offset-8 transition-colors break-all font-bold">
          shashankgowdanb50@gmail.com
        </a>
        
        <div className="flex gap-10 font-['Literata'] text-[#24211E] text-xl">
          <a href="https://github.com/MASTER870-CMD" target="_blank" rel="noopener noreferrer" className="hover:text-[#C1603A] underline decoration-transparent hover:decoration-[#C1603A] underline-offset-4 transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/shashank-gowda-nb-b94724375" target="_blank" rel="noopener noreferrer" className="hover:text-[#C1603A] underline decoration-transparent hover:decoration-[#C1603A] underline-offset-4 transition-colors">
            LinkedIn
          </a>
        </div>
        
        <div className="pt-8">
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-[#C1603A] text-[#FAF6F0] border-2 border-[#C1603A] font-['Epilogue'] uppercase tracking-widest text-base font-bold rounded-none hover:bg-transparent hover:text-[#C1603A] transition-colors"
          >
            Initiate Project
          </Link>
        </div>
      </div>
    </section>
  );
}
