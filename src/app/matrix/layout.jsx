import React from 'react';

export const metadata = {
  title: 'Skills & Technologies | Shashank Gowda NB',
  description: 'Technical skills, tools, and technologies used by Shashank Gowda NB, including AI, full-stack development, cloud infrastructure, and systems engineering.',
  alternates: {
    canonical: 'https://shashank-gowda-nb-portfilo.vercel.app/matrix',
  },
  openGraph: {
    title: 'Skills & Technologies | Shashank Gowda NB',
    description: 'Technical skills, tools, and technologies used by Shashank Gowda NB, including AI, full-stack development, cloud infrastructure, and systems engineering.',
    url: 'https://shashank-gowda-nb-portfilo.vercel.app/matrix',
    images: ['/images/preview.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skills & Technologies | Shashank Gowda NB',
    description: 'Technical skills, tools, and technologies used by Shashank Gowda NB.',
    images: ['/images/preview.png'],
  },
};

export default function MatrixLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Skills & Technologies | Shashank Gowda NB',
    description: 'Technical skills, tools, and technologies used by Shashank Gowda NB.',
    url: 'https://shashank-gowda-nb-portfilo.vercel.app/matrix',
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
