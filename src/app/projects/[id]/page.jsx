import React from 'react';
import { fetchProjectById } from '@/lib/projects.service';
import { notFound } from 'next/navigation';
import CaseStudyClient from './CaseStudyClient';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = await fetchProjectById(resolvedParams.id);
  if (!project) return { title: 'Not Found' };
  
  const url = `https://shashankgowdanb.netlify.app/projects/${project.id}`;

  return {
    title: `${project.title} | Shashank Gowda NB`,
    description: project.desc,
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
  const project = await fetchProjectById(resolvedParams.id);

  if (!project) {
    notFound();
  }

  // Use fallback problem/built/learned text if missing in Firestore
  const problemText = project.problem || "This project was developed to solve a complex engineering challenge, optimizing workflows and delivering seamless performance.";
  const builtText = project.built || "Architected using modern paradigms, this system leverages high-throughput backends and responsive client-side interfaces.";
  const learnedText = project.learned || "The deployment resulted in massive efficiency gains, proving the viability of scalable, distributed software architectures.";

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: project.title,
    description: project.desc,
    image: project.image || 'https://shashankgowdanb.netlify.app/images/preview.png',
    author: {
      '@type': 'Person',
      name: 'Shashank Gowda NB',
      url: 'https://shashankgowdanb.netlify.app',
    },
    publisher: {
      '@type': 'Person',
      name: 'Shashank Gowda NB',
    },
    datePublished: project.date || new Date().toISOString(),
  };

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
