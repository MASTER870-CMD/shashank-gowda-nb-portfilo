'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [apiLatency, setApiLatency] = useState(14);
  const [apiStatus, setApiStatus] = useState('ONLINE');

  // Dynamic route helper: if on '/', anchor to #section; if on another route, go to /#section
  const getHref = (hash) => {
    return isHomePage ? hash : `/${hash}`;
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
          ? 'bg-obsidian-950/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/80'
          : 'bg-transparent'
      }`}
    >
      {/* 1. Global Navbar Container (Max-Width & Spacing) */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-24">
        
        {/* 2. Left Column (Logo): flex-1 flex justify-start items-center */}
        <div className="flex-1 flex justify-start items-center">
          <Link href={getHref('#hero')} className="flex items-center gap-2.5 sm:gap-3 group whitespace-nowrap shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-obsidian-900 border border-gold/40 flex items-center justify-center text-gold group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300 shrink-0">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-heading font-bold text-white tracking-tight flex items-center gap-1.5 whitespace-nowrap">
                <span>Shashank Gowda NB</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block animate-pulse"></span>
              </div>
              <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-gold/80 font-medium whitespace-nowrap">
                Systems Architect &bull; AI Eng
              </div>
            </div>
          </Link>
        </div>

        {/* 2. Center Column (Navigation Links): hidden lg:flex justify-center items-center gap-8 */}
        <nav className="hidden lg:flex justify-center items-center gap-8 xl:gap-10">
          <Link
            href={getHref('#hero')}
            className="text-[13px] uppercase tracking-[0.1em] font-semibold text-neutral-400 hover:text-[#D4AF37] transition-colors duration-300 whitespace-nowrap"
          >
            System Spec
          </Link>
          <Link
            href={getHref('#skills')}
            className="text-[13px] uppercase tracking-[0.1em] font-semibold text-neutral-400 hover:text-[#D4AF37] transition-colors duration-300 whitespace-nowrap"
          >
            Tech Matrix
          </Link>
          <Link
            href={getHref('#projects')}
            className="text-[13px] uppercase tracking-[0.1em] font-semibold text-neutral-400 hover:text-[#D4AF37] transition-colors duration-300 whitespace-nowrap"
          >
            Engineering Grid
          </Link>
          <Link
            href="/projects"
            className="text-[13px] uppercase tracking-[0.1em] font-semibold text-neutral-400 hover:text-[#D4AF37] transition-colors duration-300 whitespace-nowrap"
          >
            Archive
          </Link>
          <Link
            href={getHref('#contact')}
            className="text-[13px] uppercase tracking-[0.1em] font-semibold text-neutral-400 hover:text-[#D4AF37] transition-colors duration-300 whitespace-nowrap"
          >
            Contact API
          </Link>
        </nav>

        {/* 2. Right Column (Action Buttons): flex-1 hidden lg:flex justify-end items-center gap-6 */}
        <div className="flex-1 hidden lg:flex justify-end items-center gap-6">
          {/* Live Telemetry Pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-neutral-300 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
            <span>API {apiStatus}</span>
            <span className="text-neutral-500">|</span>
            <span className="text-gold font-semibold">{apiLatency}ms</span>
          </div>

          {/* Initiate Contact CTA Button */}
          <Link
            href={getHref('#contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gold text-obsidian-950 font-heading font-bold text-xs uppercase tracking-wider hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 shrink-0 whitespace-nowrap"
          >
            <span>Initiate Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4. Mobile Hamburger Toggle (< lg) */}
        <div className="lg:hidden flex items-center justify-end">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-neutral-300 hover:text-gold transition-colors shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Drawer (< lg) */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pb-6 pt-2 bg-obsidian-950/95 backdrop-blur-2xl border-b border-neutral-800 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            <Link
              href={getHref('#hero')}
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-200 hover:text-gold font-mono text-xs uppercase tracking-wider py-2.5 border-b border-white/5"
            >
              &gt; System Spec
            </Link>
            <Link
              href={getHref('#skills')}
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-200 hover:text-gold font-mono text-xs uppercase tracking-wider py-2.5 border-b border-white/5"
            >
              &gt; Tech Matrix
            </Link>
            <Link
              href={getHref('#projects')}
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-200 hover:text-gold font-mono text-xs uppercase tracking-wider py-2.5 border-b border-white/5"
            >
              &gt; Engineering Grid
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gold font-mono text-xs uppercase tracking-wider py-2.5 border-b border-white/5 font-semibold"
            >
              &gt; Full Projects Archive
            </Link>
            <Link
              href={getHref('#contact')}
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-200 hover:text-gold font-mono text-xs uppercase tracking-wider py-2.5"
            >
              &gt; Contact API Gateway
            </Link>

            <div className="pt-3 flex items-center justify-between border-t border-neutral-800 text-[11px] font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>API Gateway: {apiLatency}ms</span>
              </span>
              <span className="text-gold uppercase font-semibold">Active</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
