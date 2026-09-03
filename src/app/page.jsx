import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SkillsTeaser from '@/components/SkillsTeaser';
import ProjectGrid from '@/components/ProjectGrid';
import ContactTeaser from '@/components/ContactTeaser';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-obsidian-950 text-white selection:bg-gold selection:text-obsidian-950 flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SkillsTeaser />
        <ProjectGrid />
        <ContactTeaser />
      </main>
      <Footer />
    </div>
  );
}
