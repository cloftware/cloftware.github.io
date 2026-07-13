<template>
  <main class="site-shell min-h-screen">
    <Navbar />
    <section class="pt-32 pb-20 sm:pt-36">
      <div class="section-wrap">
        <div class="reveal max-w-4xl">
          <span class="section-eyebrow">Technologies</span>
          <h1 class="font-display mt-6 text-[clamp(2.1rem,4.6vw,3.9rem)] font-extrabold leading-[1.08] text-[var(--ink)]">
            The stack behind Cloftware — from Laravel and Vue to ESP32 and MQTT.
          </h1>
          <p class="section-copy">Every technology page below explains what it’s actually good for and where it shows up in our own work, rather than a generic definition.</p>
        </div>

        <div v-for="category in technologyCategories" :key="category" class="mt-14">
          <h2 class="font-display text-lg font-extrabold uppercase tracking-[0.08em] text-[var(--brand-dark)]">{{ category }}</h2>
          <div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <NuxtLink
              v-for="tech in byCategory[category]"
              :key="tech.slug"
              :to="`/technologies/${tech.slug}`"
              class="reveal card hover-lift block rounded-2xl p-5"
            >
              <h3 class="font-display text-lg font-extrabold text-[var(--ink)]">{{ tech.name }}</h3>
              <p class="mt-2 text-sm leading-6 text-[var(--body)]">{{ tech.tagline }}</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <FinalCTA />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { technologies, technologyCategories } from '~/data/technologies'

useReveal()

const byCategory = computed(() =>
  Object.fromEntries(technologyCategories.map((category) => [category, technologies.filter((tech) => tech.category === category)]))
)

const siteUrl = 'https://cloftware.com'
const title = 'Technologies | Cloftware'
const description = 'Laravel, Vue.js, Nuxt, Google Cloud, Oracle Cloud, MQTT, ESP32, C++, and the rest of the stack Cloftware uses to build software, cloud infrastructure, and IoT products.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: `${siteUrl}/technologies`,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/technologies` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Technologies', item: `${siteUrl}/technologies` }
        ]
      })
    }
  ]
})
</script>
