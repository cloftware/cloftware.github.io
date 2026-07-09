<template>
  <main class="site-shell min-h-screen">
    <Navbar />
    <section class="pt-32 pb-20 sm:pt-36">
      <div class="section-wrap">
        <div class="reveal max-w-4xl">
          <span class="section-eyebrow">Portfolio</span>
          <h1 class="font-display mt-6 text-[clamp(2.1rem,4.6vw,3.9rem)] font-extrabold leading-[1.08] text-[var(--ink)]">
            Real projects, live in production.
          </h1>
          <p class="section-copy">No stock photos or invented case studies — these are products Cloftware has actually built and shipped. Click through to see them running.</p>
        </div>

        <div class="mt-12 grid gap-6 lg:grid-cols-3">
          <NuxtLink v-for="project in portfolioProjects" :key="project.slug" :to="`/portfolio/${project.slug}`" class="reveal card hover-lift block overflow-hidden rounded-2xl">
            <div class="border-b border-[var(--border)] bg-[var(--bg-soft)] p-3">
              <div class="flex items-center gap-2">
                <span class="h-2.5 w-2.5 rounded-full bg-rose-300" />
                <span class="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span class="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                <span class="ml-3 truncate rounded-full bg-white px-3 py-0.5 text-xs font-semibold text-[var(--muted)]">{{ hostnameOf(project.url) }}</span>
              </div>
            </div>
            <div class="p-6">
              <p class="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-dark)]">{{ project.category }}</p>
              <h2 class="font-display mt-3 text-xl font-extrabold leading-tight text-[var(--ink)]">{{ project.title }}</h2>
              <p class="mt-3 text-sm leading-6 text-[var(--body)]">{{ project.tagline }}</p>
              <div class="mt-5 flex flex-wrap gap-2">
                <span v-for="tag in project.featureTags" :key="tag" class="rounded-full border border-[var(--border)] bg-white px-3 py-1 text-xs font-semibold text-[var(--muted)]">{{ tag }}</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
    <FinalCTA />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { portfolioProjects } from '~/data/portfolio'

useReveal()

const hostnameOf = (url: string) => new URL(url).hostname

const siteUrl = 'https://cloftware.com'
const title = 'Portfolio | Cloftware'
const description = 'Real Cloftware projects in production: Buldel Electrical, Buldel Smart Home (IoT), and Worvio — an AI-powered hiring platform.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: `${siteUrl}/portfolio`,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/portfolio` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${siteUrl}/portfolio` }
        ]
      })
    }
  ]
})
</script>
