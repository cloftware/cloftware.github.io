<template>
  <main class="site-shell min-h-screen">
    <Navbar />

    <article v-if="tech" class="pt-32 pb-20 sm:pt-36">
      <div class="section-wrap">
        <NuxtLink to="/technologies" class="btn-ghost mb-8 px-0">&larr; All Technologies</NuxtLink>
        <header class="reveal max-w-4xl">
          <span class="section-eyebrow">{{ tech.category }}</span>
          <h1 class="font-display mt-6 text-[clamp(2rem,4.6vw,3.7rem)] font-extrabold leading-[1.1] text-[var(--ink)]">{{ tech.name }}</h1>
          <p class="section-copy">{{ tech.tagline }}</p>
        </header>

        <div class="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div class="reveal card rounded-[1.5rem] p-6 md:p-10">
            <p class="text-base leading-8 text-[var(--body)]">{{ tech.summary }}</p>

            <h2 class="font-display mt-10 text-xl font-extrabold text-[var(--ink)]">What we use it for</h2>
            <ul class="mt-4 space-y-2">
              <li v-for="item in tech.capabilities" :key="item" class="flex items-start gap-3 text-sm leading-6 text-[var(--body)]">
                <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                {{ item }}
              </li>
            </ul>

            <h2 class="font-display mt-10 text-xl font-extrabold text-[var(--ink)]">Where it shows up in real projects</h2>
            <ul class="mt-4 grid gap-3 sm:grid-cols-2">
              <li v-for="useCase in tech.useCases" :key="useCase" class="rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] p-4 text-sm font-semibold text-[var(--ink)]">
                {{ useCase }}
              </li>
            </ul>

            <div class="mt-10 rounded-2xl border border-[var(--brand)]/20 bg-[var(--brand-light)] p-6">
              <h2 class="font-display text-2xl font-extrabold text-[var(--ink)]">Building something with {{ tech.name }}?</h2>
              <p class="mt-3 text-sm leading-7 text-[var(--body)]">Tell us what you’re trying to build and we’ll tell you honestly whether this is the right tool for it.</p>
              <NuxtLink to="/#contact" class="btn-primary mt-5">Start a Project</NuxtLink>
            </div>
          </div>

          <aside class="reveal h-fit space-y-6">
            <div v-if="relatedServices.length" class="card rounded-[1.5rem] p-6">
              <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">Related services</h2>
              <div class="mt-4 space-y-3">
                <NuxtLink v-for="service in relatedServices" :key="service.slug" :to="`/services/${service.slug}`" class="block rounded-2xl border border-[var(--border)] p-4 text-sm font-bold text-[var(--ink)] transition hover:border-[var(--brand)]/35 hover:bg-[var(--brand-light)]">
                  {{ service.title }}
                </NuxtLink>
              </div>
            </div>

            <div v-if="relatedTechnologies.length" class="card rounded-[1.5rem] p-6">
              <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">Pairs well with</h2>
              <div class="mt-4 flex flex-wrap gap-2">
                <NuxtLink v-for="related in relatedTechnologies" :key="related.slug" :to="`/technologies/${related.slug}`" class="rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-bold text-[var(--ink)] transition hover:border-[var(--brand)]/40 hover:bg-[var(--brand-light)]">
                  {{ related.name }}
                </NuxtLink>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>

    <Footer />
  </main>
</template>

<script setup lang="ts">
import { getTechnologyBySlug } from '~/data/technologies'
import { getServiceBySlug } from '~/data/services'

useReveal()

const route = useRoute()
const slug = computed(() => String(route.params.slug))
const tech = computed(() => getTechnologyBySlug(slug.value))

if (!tech.value) {
  throw createError({ statusCode: 404, statusMessage: 'Technology not found' })
}

const siteUrl = 'https://cloftware.com'
const pageUrl = computed(() => `${siteUrl}/technologies/${tech.value?.slug}`)
const relatedServices = computed(() =>
  (tech.value?.relatedServiceSlugs ?? []).map((s) => getServiceBySlug(s)).filter((s): s is NonNullable<typeof s> => Boolean(s))
)
const relatedTechnologies = computed(() =>
  (tech.value?.relatedTechSlugs ?? []).map((s) => getTechnologyBySlug(s)).filter((t): t is NonNullable<typeof t> => Boolean(t))
)

useSeoMeta({
  title: () => `${tech.value?.name} Development | Cloftware`,
  description: () => tech.value?.summary ?? '',
  ogTitle: () => `${tech.value?.name} Development | Cloftware`,
  ogDescription: () => tech.value?.summary ?? '',
  ogType: 'website',
  ogUrl: () => pageUrl.value,
  twitterCard: 'summary_large_image',
  twitterTitle: () => `${tech.value?.name} Development | Cloftware`,
  twitterDescription: () => tech.value?.summary ?? ''
})

useHead({
  link: [{ rel: 'canonical', href: pageUrl.value }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Technologies', item: `${siteUrl}/technologies` },
          { '@type': 'ListItem', position: 3, name: tech.value?.name, item: pageUrl.value }
        ]
      })
    }
  ]
})
</script>
