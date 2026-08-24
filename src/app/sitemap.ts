import { MetadataRoute } from 'next'
import { publishedCaseStudies } from '../data/case-studies'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: 'https://andersondapper.com.br',
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://andersondapper.com.br/about',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...publishedCaseStudies.map(({ slug }) => ({
      url: `https://andersondapper.com.br/cases/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
