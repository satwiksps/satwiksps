import { MetadataRoute } from 'next'
import { siteUrl } from './site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
