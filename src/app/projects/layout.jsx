import React from 'react';

export const metadata = {
  title: 'Project Archive | Shashank Gowda NB',
  description: 'A comprehensive ledger of architectural implementations, systems design, AI pipelines, and full-stack engineering efforts by Shashank Gowda NB.',
  keywords: ['Systems Engineering', 'AI Projects', 'Software Architecture', 'Full-stack Portfolio', 'Shashank Gowda NB Projects', 'Open Source', 'GitHub Projects'],
  openGraph: {
    title: 'Project Archive | Shashank Gowda NB',
    description: 'Explore a detailed ledger of AI, DevOps, and systems engineering projects.',
    url: 'https://shashank-gowda-nb-portfilo.vercel.app/projects',
    type: 'website',
  }
};

export default function ProjectsLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Project Archive | Shashank Gowda NB',
    description: 'A comprehensive ledger of architectural implementations, systems design, and full-stack engineering efforts.',
    url: 'https://shashank-gowda-nb-portfilo.vercel.app/projects',
    author: {
      '@type': 'Person',
      name: 'Shashank Gowda NB'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
