'use client';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#24211E] selection:bg-[#C1603A] selection:text-[#FAF6F0] flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-24">
        <h1 className="font-['Epilogue'] text-5xl md:text-7xl font-bold mb-6">Initiate Contact</h1>
        <p className="font-['Literata'] text-xl md:text-2xl mb-16 text-[#3C4A3E]">
          Looking to build mobile apps, custom desktop software, enterprise ERPs, or full-stack websites? Fill out the form below.
        </p>
        
        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-3">
              <label className="font-['Epilogue'] text-sm font-bold uppercase tracking-widest text-[#C1603A]">Your Name</label>
              <input type="text" className="w-full bg-transparent border-b-2 border-[#24211E]/20 py-3 focus:outline-none focus:border-[#C1603A] transition-colors font-['Literata'] text-xl text-[#24211E]" placeholder="Jane Doe" required />
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-['Epilogue'] text-sm font-bold uppercase tracking-widest text-[#C1603A]">Your Email</label>
              <input type="email" className="w-full bg-transparent border-b-2 border-[#24211E]/20 py-3 focus:outline-none focus:border-[#C1603A] transition-colors font-['Literata'] text-xl text-[#24211E]" placeholder="jane@company.com" required />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-['Epilogue'] text-sm font-bold uppercase tracking-widest text-[#C1603A]">Project Details & Requirements</label>
            <textarea rows="5" className="w-full bg-transparent border-b-2 border-[#24211E]/20 py-3 focus:outline-none focus:border-[#C1603A] transition-colors font-['Literata'] text-xl text-[#24211E] resize-none" placeholder="Tell me about the architecture or solution you need built..." required></textarea>
          </div>
          <button type="submit" className="px-12 py-5 bg-[#C1603A] text-[#FAF6F0] border-2 border-[#C1603A] font-['Epilogue'] uppercase tracking-widest text-sm font-bold rounded-none hover:bg-transparent hover:text-[#C1603A] transition-colors w-full md:w-auto">
            Transmit Signal
          </button>
        </form>

        <div className="mt-24 pt-8 border-t border-[#E7DFD5]">
          <p className="font-['Literata'] text-lg text-[#3C4A3E]">
            Direct email communication: <br className="md:hidden" />
            <a href="mailto:shashankgowdanb50@gmail.com" className="text-[#24211E] font-bold hover:text-[#C1603A] hover:underline underline-offset-4 transition-colors">shashankgowdanb50@gmail.com</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
