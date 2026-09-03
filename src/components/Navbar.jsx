'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'System Spec', hash: '#hero' },
  { label: 'Tech Matrix', hash: '/matrix', isRoute: true },
  { label: 'Engineering Grid', hash: '#projects' },
  { label: 'Archive', hash: '/projects', isRoute: true },
  { label: 'Contact API', hash: '/contact', isRoute: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [apiLatency, setApiLatency] = useState(14);
  const [apiStatus, setApiStatus] = useState('ONLINE');

  // Dynamic route helper: if on '/', anchor to #section; if on another route, go to /#section
  const getHref = (item) => {
    if (item.isRoute) return item.hash;
    return isHomePage ? item.hash : `/${item.hash}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Dynamic latency ping from backend health endpoint
    const checkApi = async () => {
      const start = performance.now();
      try {
        const res = await fetch('/api/health');
        if (res.ok) {
          const latency = Math.round(performance.now() - start);
          setApiLatency(latency > 0 ? latency : 12);
          setApiStatus('ONLINE');
        }
      } catch {
        setApiLatency(14);
      }
    };

    checkApi();
    const interval = setInterval(checkApi, 15000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      {/* Main Navbar Container */}
      <div className="relative flex items-center justify-between w-full h-20 max-w-[1300px] mx-auto px-6 md:px-10">
        
        {/* 1. Left Column: Brand Identity (Human, Clean, Sans-Serif) */}
        <div className="flex items-center justify-start z-10">
          <Link
            href={isHomePage ? '#hero' : '/#hero'}
            className="flex items-center gap-3 group whitespace-nowrap shrink-0"
          >
            {/* Subtle Brushed Brass Monogram / Icon */}
            <div className="w-9 h-9 rounded-full bg-white/[0.04] flex items-center justify-center text-[#DFBF77] group-hover:text-white group-hover:bg-white/[0.08] transition-all duration-300">
              <span className="font-sans font-bold text-sm tracking-tight">S</span>
            </div>

            {/* Candidate Name & Systems Role */}
            <div>
              <div className="text-sm font-sans font-semibold text-white tracking-tight flex items-center gap-1.5 whitespace-nowrap">
                <span>Shashank Gowda</span>
                <span className="text-[#C5A059] font-medium">NB</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80"></span>
              </div>
              <div className="text-[11px] font-sans text-neutral-400 font-normal whitespace-nowrap">
                Systems Architect &bull; AI Engineer
              </div>
            </div>
          </Link>
        </div>

        {/* 2. Center Column: Pure Clean Text Links with Animated White Underline Hover */}
        <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 z-0">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={getHref(item)}
              className="relative text-[13px] uppercase tracking-[0.1em] font-semibold text-neutral-400 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 3. Right Column: Subtle Telemetry Accent & Brushed Brass Action Button */}
        <div className="hidden lg:flex items-center justify-end gap-5 z-10">
          
          {/* Reserved Monospace Only for Small Technical Accent */}
          <div className="hidden min-[1300px]:flex items-center gap-2 text-xs text-neutral-400 font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="font-mono text-[11px] text-neutral-400">{apiLatency}ms latency</span>
          </div>

          {/* Refined Brushed Brass Action Button */}
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFBF77] text-[#050505] font-sans font-semibold text-xs tracking-tight hover:opacity-90 shadow-[0_2px_15px_rgba(197,160,89,0.2)] hover:shadow-[0_4px_25px_rgba(197,160,89,0.35)] transition-all duration-300 shrink-0 whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Initiate Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

        </div>

        {/* 4. Mobile Hamburger Menu Button (< lg) */}
        <div className="lg:hidden flex items-center justify-end z-10">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* 5. Mobile Clean Drawer (< lg) */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pb-6 pt-2 bg-[#050505]/95 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={getHref(item)}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-neutral-300 hover:text-white font-sans text-sm py-3 px-2 rounded-lg hover:bg-white/[0.04] transition-colors"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </Link>
            ))}

            {/* Mobile Telemetry Footer */}
            <div className="mt-4 pt-3 flex items-center justify-between border-t border-white/[0.06] text-xs font-sans text-neutral-400">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>API Gateway Active</span>
              </span>
              <span className="font-mono text-[11px] text-[#C5A059]">{apiLatency}ms</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
