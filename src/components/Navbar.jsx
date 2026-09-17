'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Work', href: '/projects' },
    { name: 'Toolkit', href: '/#toolkit' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <nav className="w-full px-6 py-8 flex justify-between items-center max-w-7xl mx-auto border-b border-[#E7DFD5] relative z-[60] bg-[#FAF6F0]">
        <Link href="/" className="font-['Epilogue'] font-bold text-2xl tracking-tighter text-[#24211E] z-[60] relative">
          SHASHANK.
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="group relative font-['Epilogue'] text-sm uppercase tracking-widest text-[#24211E] py-2"
            >
              {item.name}
              <span className="absolute left-0 top-0 w-0 h-[2px] bg-[#C1603A] transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute right-0 bottom-0 w-0 h-[2px] bg-[#C1603A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden text-[#24211E] z-[60] relative p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#FAF6F0] z-50 transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center gap-8 w-full px-6">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-['Epilogue'] text-2xl font-bold uppercase tracking-widest text-[#24211E] hover:text-[#C1603A] transition-colors w-full text-center py-4 border-b border-[#24211E]/10"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
