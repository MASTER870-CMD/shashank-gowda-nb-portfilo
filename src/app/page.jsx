import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import ProjectGrid from '../components/ProjectGrid';
import SkillsTeaser from '../components/SkillsTeaser';
import ContactTeaser from '../components/ContactTeaser';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#24211E] selection:bg-[#C1603A] selection:text-[#FAF6F0]">
      <Navbar />
      <main>
        <Hero />
        <div className="hidden md:block">
          <Vision />
        </div>
        <ProjectGrid />
        <SkillsTeaser />
        <ContactTeaser />
      </main>
      <Footer />
    </div>
  );
}
