import React from 'react';

export const metadata = {
  title: 'Projects by Shashank Gowda NB | AI, Full-Stack & Cloud',
  description: 'Explore AI projects, ERP systems, cloud applications, and software engineering work built by Shashank Gowda NB, AI Engineer based in Bengaluru.',
  alternates: {
    canonical: 'https://shashank-gowda-nb-portfilo.vercel.app/projects',
  },
  openGraph: {
    title: 'Projects by Shashank Gowda NB | AI, Full-Stack & Cloud',
    description: 'Explore AI projects, ERP systems, cloud applications, and software engineering work built by Shashank Gowda NB, AI Engineer based in Bengaluru.',
    url: 'https://shashank-gowda-nb-portfilo.vercel.app/projects',
    images: ['/images/preview.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects by Shashank Gowda NB | AI, Full-Stack & Cloud',
    description: 'Explore AI projects, ERP systems, cloud applications, and software engineering work built by Shashank Gowda NB.',
    images: ['/images/preview.png'],
  },
};

export default function ProjectsLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Projects by Shashank Gowda NB',
    description: 'Explore AI projects, ERP systems, cloud applications, and software engineering work built by Shashank Gowda NB.',
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
