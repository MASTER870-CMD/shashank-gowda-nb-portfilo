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
  alternates: {
    canonical: 'https://shashank-gowda-nb-portfilo.vercel.app/',
  },
  title: 'Shashank Gowda NB | AI Engineer & Full Stack Developer Bengaluru',
  description: 'Shashank Gowda NB – AI Engineer, Full Stack Developer & Systems Architect based in Bengaluru, India. Expert in building AI-powered apps, mobile apps, enterprise ERP systems, and high-performance full-stack web applications.',
  keywords: [
    'Shashank Gowda NB',
    'Shashank Gowda',
    'Shashank NB',
    'shashank gowda nb',
    'shashankgowdanb',
    'Shashank AI Engineer',
    'Shashank Developer Bengaluru',
    'Shashank Full Stack Developer',
    'AI Engineer Bengaluru',
    'AI Engineer Bangalore',
    'Full Stack Developer Bengaluru',
    'Full Stack Developer Bangalore',
    'Machine Learning Engineer Bengaluru',
    'Mobile App Developer Bengaluru',
    'Android Developer Bengaluru',
    'iOS Developer Bengaluru',
    'React Developer Bengaluru',
    'Next.js Developer India',
    'Python AI Engineer India',
    'ERP Developer Bengaluru',
    'Systems Architect India',
    'Software Engineer NTTF',
    'NTTF Student Developer',
    'Firebase Developer',
    'TensorFlow Developer',
    'Enterprise Software Architect',
    'Distributed Systems',
    'Machine Learning Infrastructure',
    'Python',
    'Node.js',
    'Next.js',
    'React Native',
    'Portfolio Shashank',
  ],
  authors: [{ name: 'Shashank Gowda NB', url: 'https://shashank-gowda-nb-portfilo.vercel.app' }],
  creator: 'Shashank Gowda NB',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shashank-gowda-nb-portfilo.vercel.app',
    title: 'Shashank Gowda NB | AI Engineer & Full Stack Developer Bengaluru',
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
    title: 'Shashank Gowda NB | AI Engineer & Full Stack Developer Bengaluru',
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
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Shashank Gowda NB',
      url: 'https://shashank-gowda-nb-portfilo.vercel.app',
      jobTitle: 'AI Engineer & Full-Stack Developer',
      image: 'https://shashank-gowda-nb-portfilo.vercel.app/images/shashank-gowda-nb.jpg',
      description: 'AI Engineer and Full-Stack Developer specializing in artificial intelligence, enterprise ERP systems, and cloud architecture.',
      email: 'shashankgowdanb166@gmail.com',
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
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Shashank Gowda NB',
      url: 'https://shashank-gowda-nb-portfilo.vercel.app'
    }
  ];

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
