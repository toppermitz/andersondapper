import { MetadataRoute } from 'next'
import { publishedCaseStudies } from '../data/case-studies'
import { publishedInsights } from '../data/insights'

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
    {
      url: 'https://andersondapper.com.br/cases',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...publishedCaseStudies.map(({ slug }) => ({
      url: `https://andersondapper.com.br/cases/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: 'https://andersondapper.com.br/insights',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...publishedInsights.map(({ slug, publishedAt }) => ({
      url: `https://andersondapper.com.br/insights/${slug}`,
      lastModified: new Date(`${publishedAt}T12:00:00-03:00`),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
