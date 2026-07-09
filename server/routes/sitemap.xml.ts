import { blogPosts } from '../../app/data/blog'
import { services } from '../../app/data/services'
import { technologies } from '../../app/data/technologies'
import { portfolioProjects } from '../../app/data/portfolio'

const siteUrl = 'https://cloftware.com'

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'application/xml; charset=utf-8')

  const staticPages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/services', priority: '0.9', changefreq: 'weekly' },
    { loc: '/technologies', priority: '0.8', changefreq: 'weekly' },
    { loc: '/portfolio', priority: '0.9', changefreq: 'weekly' },
    { loc: '/industries', priority: '0.7', changefreq: 'monthly' },
    { loc: '/about', priority: '0.8', changefreq: 'monthly' },
    { loc: '/contact', priority: '0.8', changefreq: 'monthly' },
    { loc: '/blog', priority: '0.8', changefreq: 'daily' },
    { loc: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { loc: '/terms', priority: '0.3', changefreq: 'yearly' }
  ]

  const servicePages = services.map((service) => ({
    loc: `/services/${service.slug}`,
    priority: '0.8',
    changefreq: 'monthly'
  }))

  const technologyPages = technologies.map((tech) => ({
    loc: `/technologies/${tech.slug}`,
    priority: '0.6',
    changefreq: 'monthly'
  }))

  const portfolioPages = portfolioProjects.map((project) => ({
    loc: `/portfolio/${project.slug}`,
    priority: '0.7',
    changefreq: 'monthly'
  }))

  const blogPages = blogPosts.map((post) => ({
    loc: `/blog/${post.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: post.updatedAt
  }))

  const urls = [...staticPages, ...servicePages, ...technologyPages, ...portfolioPages, ...blogPages]
    .map((page) => {
      const lastmod = 'lastmod' in page && page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''
      return `
  <url>
    <loc>${siteUrl}${page.loc}</loc>
    ${lastmod}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    })
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`
})
