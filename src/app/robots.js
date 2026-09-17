export default function robots() {
  const baseUrl = 'https://shashank-gowda-nb-portfilo.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
