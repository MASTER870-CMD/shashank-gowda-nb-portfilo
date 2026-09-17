export default function robots() {
  const baseUrl = 'https://shashankgowdanb.netlify.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
