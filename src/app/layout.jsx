import './globals.css';
import { Outfit, Space_Grotesk, Fraunces, Inter } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport = {
  themeColor: '#050505',
};

export const metadata = {
  metadataBase: new URL('https://shashank-gowda-nb-portfilo.vercel.app'),
  title: 'Shashank Gowda NB | AI Engineer & Principal Systems Architect',
  description: 'Portfolio of Shashank Gowda NB – AI Engineer & Systems Architect. Architecting high-throughput distributed software, custom operating systems, low-latency APIs, and enterprise AI ecosystems.',
  keywords: [
    'Shashank Gowda NB',
    'Systems Architect',
    'AI Engineer',
    'Enterprise Software Architect',
    'Distributed Systems',
    'Machine Learning Infrastructure',
    'TensorFlow',
    'Python',
    'Node.js',
    'Next.js',
    'Custom Linux Kernels',
    'Voktra OS'
  ],
  authors: [{ name: 'Shashank Gowda NB', url: 'https://shashank-gowda-nb-portfilo.vercel.app' }],
  creator: 'Shashank Gowda NB',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shashank-gowda-nb-portfilo.vercel.app',
    title: 'Shashank Gowda NB | AI Engineer & Systems Architect',
    description: 'Architecting Scalable Software & AI Ecosystems. Zero-latency distributed architectures, enterprise APIs, and production deep learning.',
    siteName: 'Shashank Gowda NB Systems Portfolio',
    images: [
      {
        url: '/images/preview.png',
        width: 1200,
        height: 630,
        alt: 'Shashank Gowda NB - Systems Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shashank Gowda NB | AI Engineer & Systems Architect',
    description: 'Architecting Scalable Software & AI Ecosystems. High-performance enterprise software and AI infrastructure.',
    images: ['/images/preview.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shashank Gowda NB',
    jobTitle: 'AI Engineer & Principal Systems Architect',
    url: 'https://shashank-gowda-nb-portfilo.vercel.app',
    image: 'https://shashank-gowda-nb-portfilo.vercel.app/images/shashank-gowda-nb.jpg',
    description: 'Principal Systems Architect and AI Engineer specializing in distributed computing, enterprise API design, custom Linux operating systems, and production machine learning.',
    email: 'shashankgowdanb166@gmail.com',
    sameAs: [
      'https://www.linkedin.com/in/shashank-gowda-nb-b94724375',
      'https://github.com/MASTER870-CMD'
    ],
    knowsAbout: [
      'Distributed Systems',
      'Enterprise API Architecture',
      'Artificial Intelligence',
      'Deep Learning Pipelines',
      'TensorFlow',
      'Linux Kernel Customization',
      'Node.js High Concurrency',
      'Next.js SSR',
      'Cloud Infrastructure (AWS)'
    ]
  };

  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable} ${fraunces.variable} ${inter.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-obsidian-950 text-[#f5f5f5] min-h-screen selection:bg-gold selection:text-obsidian-950 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
