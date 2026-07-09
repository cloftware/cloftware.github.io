<template>
  <main class="site-shell min-h-screen">
    <AnimatedBackground />
    <Navbar />
    <section class="pt-32 pb-20">
      <div class="section-wrap">
        <div class="reveal max-w-4xl">
          <span class="section-eyebrow">Cloftware Blog</span>
          <h1 class="font-display mt-6 text-[clamp(2.35rem,5vw,4.75rem)] font-extrabold leading-[1.04] text-white">
            Software, cloud, AI, SaaS, and IoT insights for growing businesses.
          </h1>
          <p class="section-copy">SEO-friendly articles written for founders, CTOs, and enterprise leaders planning reliable digital products.</p>
        </div>

        <div class="mt-12 grid gap-6 lg:grid-cols-2">
          <article v-for="post in blogPosts" :key="post.slug" class="reveal glass-panel hover-lift overflow-hidden rounded-2xl">
            <NuxtLink :to="`/blog/${post.slug}`" class="grid h-full md:grid-cols-[0.85fr_1.15fr]">
              <img :src="post.image" :alt="post.title" class="h-64 w-full object-cover opacity-90 md:h-full" loading="lazy">
              <div class="p-6">
                <p class="text-xs font-bold uppercase tracking-[0.16em] text-sky-300">{{ post.category }}</p>
                <h2 class="font-display mt-3 text-2xl font-extrabold leading-tight text-white">{{ post.title }}</h2>
                <p class="mt-4 text-sm leading-7 text-slate-400">{{ post.description }}</p>
                <div class="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
                  <span>{{ formatDate(post.publishedAt) }}</span>
                  <span>{{ post.readTime }}</span>
                  <span>{{ post.author.name }}</span>
                </div>
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>
    <FinalCTA />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { blogPosts } from '~/data/blog'

useReveal()

const siteUrl = 'https://cloftware.com'
const title = 'Cloftware Blog | Software Development, Cloud, AI, SaaS and IoT Insights'
const description = 'Read Cloftware insights about custom software development, cloud engineering, AI integration, SaaS product development, IoT dashboards, DevOps, and enterprise technology.'

useSeoMeta({
  title,
  description,
  keywords: 'software development blog, cloud engineering blog, AI development blog, SaaS development, IoT software, Cloftware blog',
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: `${siteUrl}/blog`,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/blog` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Cloftware Blog',
        url: `${siteUrl}/blog`,
        description,
        publisher: {
          '@type': 'Organization',
          name: 'Cloftware',
          logo: `${siteUrl}/cloftware-logo.svg`
        },
        blogPost: blogPosts.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description,
          url: `${siteUrl}/blog/${post.slug}`,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          author: {
            '@type': 'Organization',
            name: post.author.name
          }
        }))
      })
    }
  ]
})

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(date))
</script>
