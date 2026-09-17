import { fetchProjects } from '@/lib/projects.service';

export default async function sitemap() {
  const baseUrl = 'https://shashankgowdanb.netlify.app';

  // Get all projects from Firebase
  const projects = await fetchProjects();

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/admin`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    ...projectUrls,
  ];
}
