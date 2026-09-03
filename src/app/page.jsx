import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SkillsTeaser from '@/components/SkillsTeaser';
import ProjectGrid from '@/components/ProjectGrid';
import ContactAPI from '@/components/ContactAPI';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-obsidian-950 text-white selection:bg-gold selection:text-obsidian-950 flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SkillsTeaser />
        <ProjectGrid />
        <ContactAPI />
      </main>
      <Footer />
    </div>
  );
}
