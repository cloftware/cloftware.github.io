import tailwindcss from '@tailwindcss/vite'
import { blogPosts } from './app/data/blog'
import { services } from './app/data/services'
import { technologies } from './app/data/technologies'
import { portfolioProjects } from './app/data/portfolio'

const siteUrl = 'https://cloftware.com'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ["nitro-cloudflare-dev"],
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Montserrat:wght@600;700;800;900&display=swap'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon-48x48.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      meta: [{ name: 'theme-color', content: '#007cc3' }]
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/services',
        '/technologies',
        '/portfolio',
        '/industries',
        '/about',
        '/contact',
        '/blog',
        '/sitemap.xml',
        '/llms.txt',
        ...services.map((service) => `/services/${service.slug}`),
        ...technologies.map((tech) => `/technologies/${tech.slug}`),
        ...portfolioProjects.map((project) => `/portfolio/${project.slug}`),
        ...blogPosts.map((post) => `/blog/${post.slug}`)
      ]
    },

    preset: "cloudflare_module",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },
  routeRules: {
    '/': { prerender: true },
    '/services': { prerender: true },
    '/services/**': { prerender: true },
    '/technologies': { prerender: true },
    '/technologies/**': { prerender: true },
    '/portfolio': { prerender: true },
    '/portfolio/**': { prerender: true },
    '/industries': { prerender: true },
    '/about': { prerender: true },
    '/contact': { prerender: true },
    '/blog': { prerender: true },
    '/blog/**': { prerender: true }
  },
  runtimeConfig: {
    public: {
      siteUrl
    }
  }
})