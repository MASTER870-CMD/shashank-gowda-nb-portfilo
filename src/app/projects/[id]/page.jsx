import React from 'react';
import { fetchProjectBySlug } from '@/lib/projects.service';
import { notFound } from 'next/navigation';
import CaseStudyClient from './CaseStudyClient';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = await fetchProjectBySlug(resolvedParams.id);
  if (!project) return { title: 'Not Found' };
  
  const url = `https://shashank-gowda-nb-portfilo.vercel.app/projects/${project.slug || resolvedParams.id}`;
  
  const keywords = [...(project.tech || []), project.category, 'Shashank Gowda NB', 'Systems Architecture', 'AI Engineering'].filter(Boolean).join(', ');

  return {
    title: `${project.title} | Shashank Gowda NB`,
    description: project.desc,
    keywords: keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.desc,
      url: url,
      images: [
        {
          url: project.image || '/images/preview.png',
          width: 1200,
          height: 630,
          alt: project.title,
        }
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.desc,
      images: [project.image || '/images/preview.png'],
    }
  };
}

export default async function ProjectCaseStudy({ params }) {
  const resolvedParams = await params;
  const project = await fetchProjectBySlug(resolvedParams.id);

  if (!project) {
    notFound();
  }

  // Use fallback problem/built/learned text if missing in Firestore
  const problemText = project.problem || "This project was developed to solve a complex engineering challenge, optimizing workflows and delivering seamless performance.";
  const builtText = project.built || "Architected using modern paradigms, this system leverages high-throughput backends and responsive client-side interfaces.";
  const learnedText = project.learned || "The deployment resulted in massive efficiency gains, proving the viability of scalable, distributed software architectures.";

  // Advanced AEO (Answer Engine Optimization) Schema
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: project.title,
      headline: project.title,
      description: project.desc,
      image: project.image || 'https://shashank-gowda-nb-portfilo.vercel.app/images/preview.png',
      applicationCategory: project.category || 'SoftwareApplication',
      operatingSystem: 'Any',
      author: {
        '@type': 'Person',
        name: 'Shashank Gowda NB',
        url: 'https://shashank-gowda-nb-portfilo.vercel.app',
      },
      publisher: {
        '@type': 'Person',
        name: 'Shashank Gowda NB',
      },
      url: project.live && project.live !== '#' ? project.live : `https://shashank-gowda-nb-portfilo.vercel.app/projects/${project.slug || project.id}`,
      sameAs: project.code && project.code !== '#' ? [project.code] : [],
      datePublished: project.date || new Date().toISOString(),
      softwareRequirements: project.tech ? project.tech.join(', ') : 'Modern Browser'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://shashank-gowda-nb-portfilo.vercel.app/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Projects',
          item: 'https://shashank-gowda-nb-portfilo.vercel.app/projects'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: project.title,
          item: `https://shashank-gowda-nb-portfilo.vercel.app/projects/${project.slug || project.id}`
        }
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyClient 
        project={project} 
        problemText={problemText} 
        builtText={builtText} 
        learnedText={learnedText} 
      />
    </>
  );
}
