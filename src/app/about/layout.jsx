import React from 'react';

export const metadata = {
  title: 'About Shashank Gowda NB | AI Engineer & Full-Stack Developer',
  description: 'Learn about Shashank Gowda NB, an AI Engineer and Full-Stack Developer based in Bengaluru, India. Discover his background in software engineering, cloud, and ERP development.',
  alternates: {
    canonical: 'https://shashank-gowda-nb-portfilo.vercel.app/about',
  },
  openGraph: {
    title: 'About Shashank Gowda NB | AI Engineer & Full-Stack Developer',
    description: 'Learn about Shashank Gowda NB, an AI Engineer and Full-Stack Developer based in Bengaluru, India. Discover his background in software engineering, cloud, and ERP development.',
    url: 'https://shashank-gowda-nb-portfilo.vercel.app/about',
    images: ['/images/preview.png'],
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Shashank Gowda NB | AI Engineer & Full-Stack Developer',
    description: 'Learn about Shashank Gowda NB, an AI Engineer and Full-Stack Developer based in Bengaluru, India.',
    images: ['/images/preview.png'],
  },
};

export default function AboutLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Shashank Gowda NB',
      jobTitle: 'AI Engineer & Full-Stack Developer',
      url: 'https://shashank-gowda-nb-portfilo.vercel.app',
      image: 'https://shashank-gowda-nb-portfilo.vercel.app/images/shashank-gowda-nb.jpg',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        addressCountry: 'IN'
      },
      sameAs: [
        'https://www.linkedin.com/in/shashank-gowda-nb-b94724375',
        'https://github.com/MASTER870-CMD'
      ]
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
