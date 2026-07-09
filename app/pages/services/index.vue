<template>
  <main class="site-shell min-h-screen">
    <Navbar />
    <section class="pt-32 pb-20 sm:pt-36">
      <div class="section-wrap">
        <div class="reveal max-w-4xl">
          <span class="section-eyebrow">Services</span>
          <h1 class="font-display mt-6 text-[clamp(2.1rem,4.6vw,3.9rem)] font-extrabold leading-[1.08] text-[var(--ink)]">
            Software engineering services built around how your business actually works.
          </h1>
          <p class="section-copy">Six focused service areas, each with its own page below covering what’s included, the technologies we use, and answers to the questions that usually come up before starting.</p>
        </div>

        <div class="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <NuxtLink v-for="service in services" :key="service.slug" :to="`/services/${service.slug}`" class="reveal card hover-lift block rounded-2xl p-6">
            <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-light)] text-sm font-extrabold text-[var(--brand-dark)]">{{ service.index }}</div>
            <h2 class="font-display mt-6 text-xl font-extrabold text-[var(--ink)]">{{ service.title }}</h2>
            <p class="mt-3 text-sm leading-6 text-[var(--body)]">{{ service.summary }}</p>
            <span class="btn-ghost mt-5 inline-flex text-sm font-bold">Learn more &rarr;</span>
          </NuxtLink>
        </div>
      </div>
    </section>
    <FinalCTA />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { services } from '~/data/services'

useReveal()

const siteUrl = 'https://cloftware.com'
const title = 'Services | Cloftware Software Engineering'
const description = 'Custom software, web engineering, mobile apps, cloud engineering, AI development, and IoT & data systems — explore what each Cloftware service includes.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: `${siteUrl}/services`,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/services` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: services.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `${siteUrl}/services/${service.slug}`,
          name: service.title
        }))
      })
    }
  ]
})
</script>
