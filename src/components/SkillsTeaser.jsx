import React from 'react';

export default function SkillsTeaser() {
  return (
    <section id="toolkit" className="px-6 py-16 md:py-32 max-w-7xl mx-auto border-b border-[#E7DFD5]">
      <h2 className="font-['Epilogue'] text-4xl md:text-5xl text-[#24211E] font-bold mb-16">Engineering Arsenal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="font-['Epilogue'] text-sm font-bold uppercase tracking-wider text-[#C1603A] mb-6">Programming Languages</h3>
          <ul className="space-y-4 font-['Literata'] text-[#24211E] text-lg">
            <li>Python</li>
            <li>Java</li>
            <li>C/C++</li>
            <li>SQL</li>
            <li>JavaScript / TypeScript</li>
          </ul>
        </div>
        <div>
          <h3 className="font-['Epilogue'] text-sm font-bold uppercase tracking-wider text-[#3C4A3E] mb-6">Frameworks & Libraries</h3>
          <ul className="space-y-4 font-['Literata'] text-[#24211E] text-lg">
            <li>React.js</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div>
          <h3 className="font-['Epilogue'] text-sm font-bold uppercase tracking-wider text-[#3C4A3E] mb-6">Cloud & BaaS</h3>
          <ul className="space-y-4 font-['Literata'] text-[#24211E] text-lg">
            <li>AWS</li>
            <li>Firebase</li>
            <li>Supabase</li>
            <li>Appwrite</li>
          </ul>
        </div>
        <div>
          <h3 className="font-['Epilogue'] text-sm font-bold uppercase tracking-wider text-[#3C4A3E] mb-6">DevOps & Infrastructure</h3>
          <ul className="space-y-4 font-['Literata'] text-[#24211E] text-lg">
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>CI/CD Pipelines</li>
            <li>Linux Kernel</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
