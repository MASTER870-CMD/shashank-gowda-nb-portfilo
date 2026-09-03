'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactAPI from '@/components/ContactAPI';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-obsidian-950 text-white selection:bg-gold selection:text-obsidian-950 flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-24 sm:pt-28 pb-16 bg-obsidian-950 relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-radial-gold-glow pointer-events-none -z-10 opacity-60" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 pt-4">
          {/* Breadcrumb Navigation */}
          <div className="mb-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-gold transition-colors py-1.5 px-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-gold/30"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Overview</span>
            </Link>
          </div>
        </div>

        {/* Dedicated Contact Gateway & API Dispatch Component */}
        <ContactAPI />
      </main>

      <Footer />
    </div>
  );
}
