import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.sumanarogya.in';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // your doctors pages here:
    {
      url: `${baseUrl}/doctors`, // Or whatever your main doctors page URL is
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // your service pages here:
    {
      url: `${baseUrl}/services`, // Or whatever your main services page URL is
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,

    }
  ];
}