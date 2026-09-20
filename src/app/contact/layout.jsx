import React from 'react';

export const metadata = {
  title: 'Contact Shashank Gowda NB | AI Engineer & Developer',
  description: 'Get in touch with Shashank Gowda NB, an AI Engineer and Full-Stack Developer based in Bengaluru, India. Available for software engineering projects.',
  alternates: {
    canonical: 'https://shashank-gowda-nb-portfilo.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact Shashank Gowda NB | AI Engineer & Developer',
    description: 'Get in touch with Shashank Gowda NB, an AI Engineer and Full-Stack Developer based in Bengaluru, India.',
    url: 'https://shashank-gowda-nb-portfilo.vercel.app/contact',
    images: ['/images/preview.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Shashank Gowda NB | AI Engineer & Developer',
    description: 'Get in touch with Shashank Gowda NB, an AI Engineer and Full-Stack Developer based in Bengaluru, India.',
    images: ['/images/preview.png'],
  },
};

export default function ContactLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Shashank Gowda NB',
    description: 'Get in touch with Shashank Gowda NB, an AI Engineer and Full-Stack Developer based in Bengaluru, India.',
    url: 'https://shashank-gowda-nb-portfilo.vercel.app/contact',
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
