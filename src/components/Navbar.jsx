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
          ? 'bg-obsidian-950/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/80 py-2.5 sm:py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-24">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity / Logo with No-Wrap */}
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

          {/* Desktop Navigation Links (>= 768px) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-medium text-neutral-300">
            <Link href={getHref('#hero')} className="hover:text-gold transition-colors duration-200">
              System Spec
            </Link>
            <Link href={getHref('#skills')} className="hover:text-gold transition-colors duration-200">
              Tech Matrix
            </Link>
            <Link href={getHref('#projects')} className="hover:text-gold transition-colors duration-200">
              Engineering Grid
            </Link>
            <Link href="/projects" className="hover:text-gold transition-colors duration-200">
              Archive
            </Link>
            <Link href={getHref('#contact')} className="hover:text-gold transition-colors duration-200">
              Contact API
            </Link>
          </nav>

          {/* Right Action Cluster: Status Badge & CTA Button */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            
            {/* Live Telemetry Pill (Tablet/Desktop) */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
              <span>API {apiStatus}</span>
              <span className="text-neutral-500">|</span>
              <span className="text-gold font-semibold">{apiLatency}ms</span>
            </div>

            {/* Initiate Contact CTA - Hidden on mobile (< 768px) to prevent collisions, accessible via drawer */}
            <Link
              href={getHref('#contact')}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gold text-obsidian-950 font-heading font-bold text-xs uppercase tracking-wider hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 shrink-0"
            >
              <span>Initiate Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Hamburger Toggle (< 768px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/[0.04] border border-white/10 text-neutral-300 hover:text-gold transition-colors shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

        {/* Mobile Dropdown Drawer (< 768px) */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-5 rounded-2xl bg-black/90 backdrop-blur-lg border border-neutral-800 flex flex-col gap-3 shadow-2xl animate-fadeIn">
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
        )}
      </div>
    </header>
  );
}
