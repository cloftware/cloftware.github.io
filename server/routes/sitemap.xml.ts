import { blogPosts } from '../../app/data/blog'

const siteUrl = 'https://cloftware.com'

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'application/xml; charset=utf-8')

  const staticPages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/about', priority: '0.8', changefreq: 'monthly' },
    { loc: '/services', priority: '0.9', changefreq: 'monthly' },
    { loc: '/portfolio', priority: '0.8', changefreq: 'monthly' },
    { loc: '/industries', priority: '0.7', changefreq: 'monthly' },
    { loc: '/technologies', priority: '0.7', changefreq: 'monthly' },
    { loc: '/contact', priority: '0.8', changefreq: 'monthly' },
    { loc: '/blog', priority: '0.8', changefreq: 'daily' }
  ]

  const blogPages = blogPosts.map((post) => ({
    loc: `/blog/${post.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: post.updatedAt
  }))

  const urls = [...staticPages, ...blogPages]
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
