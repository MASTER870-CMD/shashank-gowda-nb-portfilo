'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal, Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'System Spec', hash: '#hero' },
  { label: 'Tech Matrix', hash: '#skills' },
  { label: 'Engineering Grid', hash: '#projects' },
  { label: 'Archive', hash: '/projects', isRoute: true },
  { label: 'Contact API', hash: '#contact' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-obsidian-950/85 backdrop-blur-2xl border-b border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.8)]'
          : 'bg-obsidian-950/40 backdrop-blur-xl border-b border-white/[0.04]'
      }`}
    >
      {/* Luxurious Top Gold Horizon Hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent pointer-events-none" />

      {/* Main Navbar Container */}
      <div className="relative flex items-center justify-between w-full h-20 max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* 1. Left Column: Brand Identity */}
        <div className="flex items-center justify-start z-10">
          <Link
            href={isHomePage ? '#hero' : '/#hero'}
            className="flex items-center gap-3 group whitespace-nowrap shrink-0"
          >
            {/* Obsidian Glass Icon Badge with Gold Rim Glow */}
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-800 via-obsidian-900 to-black border border-gold/40 flex items-center justify-center text-gold shadow-[0_0_20px_rgba(212,175,55,0.2),inset_0_1px_1px_rgba(255,255,255,0.15)] group-hover:border-gold group-hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] group-hover:scale-105 transition-all duration-300">
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-gold/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Candidate Name & Systems Tier */}
            <div>
              <div className="text-sm sm:text-base font-heading font-bold text-white tracking-tight flex items-center gap-1.5 whitespace-nowrap">
                <span>Shashank Gowda</span>
                <span className="text-gold font-extrabold">NB</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
              </div>
              <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 font-medium whitespace-nowrap group-hover:text-gold/80 transition-colors">
                Systems Architect &bull; AI Eng
              </div>
            </div>
          </Link>
        </div>

        {/* 2. Center Column: Luxury Floating Glass Capsule Nav Dock */}
        <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center p-1.5 rounded-full bg-obsidian-950/70 border border-white/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.08)] backdrop-blur-2xl z-0">
          <div className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={getHref(item)}
                className="relative px-3.5 xl:px-4 py-1.5 rounded-full text-[11px] xl:text-xs font-mono uppercase tracking-[0.14em] text-neutral-300 hover:text-white transition-all duration-300 group hover:bg-white/[0.08]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* 3. Right Column: Telemetry Pill & Luxury Gold Ingot CTA Button */}
        <div className="hidden lg:flex items-center justify-end gap-4 xl:gap-5 z-10">
          
          {/* Real-Time Infrastructure Telemetry Badge */}
          <div className="hidden min-[1380px]:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] text-xs font-mono text-neutral-300 whitespace-nowrap">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">GATEWAY</span>
            <span className="text-neutral-600">/</span>
            <span className="text-gold font-bold text-xs">{apiLatency}ms</span>
          </div>

          {/* Premium Metallic Gold Ingot Action Button */}
          <Link
            href={isHomePage ? '#contact' : '/#contact'}
            className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F4D068] to-[#C59B27] text-obsidian-950 font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(212,175,55,0.35),inset_0_1px_1px_rgba(255,255,255,0.5)] hover:shadow-[0_0_40px_rgba(212,175,55,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 shrink-0 whitespace-nowrap flex items-center gap-1.5"
          >
            {/* Metallic Gloss Shimmer Sweep */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
            
            <span className="relative z-10 flex items-center gap-1.5 font-extrabold tracking-wide">
              <span>Initiate Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </Link>

        </div>

        {/* 4. Mobile Hamburger Menu Button (< lg) */}
        <div className="lg:hidden flex items-center justify-end z-10">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-gold/50 text-neutral-300 hover:text-gold transition-all duration-300 shrink-0 shadow-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* 5. Mobile Glass Dropdown Drawer (< lg) */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pb-6 pt-3 bg-obsidian-950/95 backdrop-blur-2xl border-b border-neutral-800 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={getHref(item)}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-neutral-200 hover:text-gold font-mono text-xs uppercase tracking-wider py-3 px-3 rounded-lg hover:bg-white/[0.03] border-b border-white/5 transition-all"
              >
                <span>&gt; {item.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </Link>
            ))}

            {/* Mobile Telemetry Footer */}
            <div className="mt-3 pt-3 flex items-center justify-between border-t border-neutral-800 text-[11px] font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]"></span>
                <span>API Gateway: {apiLatency}ms</span>
              </span>
              <span className="text-gold uppercase font-semibold">Verified</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
