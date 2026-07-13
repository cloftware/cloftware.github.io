<template>
  <main class="site-shell min-h-screen">
    <Navbar />

    <article v-if="service" class="pt-32 pb-20 sm:pt-36">
      <div class="section-wrap">
        <NuxtLink to="/services" class="btn-ghost mb-8 px-0"><IconsArrowLeft /> All Services</NuxtLink>
        <header class="reveal max-w-4xl">
          <span class="section-eyebrow">Service {{ service.index }}</span>
          <h1 class="font-display mt-6 text-[clamp(2rem,4.6vw,3.7rem)] font-extrabold leading-[1.1] text-[var(--ink)]">{{ service.title }}</h1>
          <p class="section-copy">{{ service.summary }}</p>
        </header>

        <div class="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div class="reveal card rounded-[1.5rem] p-6 md:p-10">
            <p class="text-base leading-8 text-[var(--body)]">{{ service.description }}</p>

            <h2 class="font-display mt-10 text-xl font-extrabold text-[var(--ink)]">What this covers</h2>
            <ul class="mt-4 grid gap-3 sm:grid-cols-2">
              <li v-for="point in service.highlights" :key="point" class="rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] p-4 text-sm font-semibold text-[var(--ink)]">
                {{ point }}
              </li>
            </ul>

            <h2 class="font-display mt-10 text-xl font-extrabold text-[var(--ink)]">What you get</h2>
            <ul class="mt-4 space-y-2">
              <li v-for="item in service.deliverables" :key="item" class="flex items-start gap-3 text-sm leading-6 text-[var(--body)]">
                <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                {{ item }}
              </li>
            </ul>

            <template v-if="service.faqs.length">
              <h2 class="font-display mt-10 text-xl font-extrabold text-[var(--ink)]">Common questions</h2>
              <div class="mt-4 space-y-3">
                <details v-for="faq in service.faqs" :key="faq.question" class="card rounded-2xl p-5">
                  <summary class="cursor-pointer text-sm font-bold text-[var(--ink)]">{{ faq.question }}</summary>
                  <p class="mt-3 text-sm leading-6 text-[var(--body)]">{{ faq.answer }}</p>
                </details>
              </div>
            </template>

            <div class="mt-10 rounded-2xl border border-[var(--brand)]/20 bg-[var(--brand-light)] p-6">
              <h2 class="font-display text-2xl font-extrabold text-[var(--ink)]">Need this built?</h2>
              <p class="mt-3 text-sm leading-7 text-[var(--body)]">Tell us about your project and we’ll follow up with a clear, honest scope — no fake urgency, no inflated quote.</p>
              <NuxtLink to="/#contact" class="btn-primary mt-5">Start a Project</NuxtLink>
            </div>
          </div>

          <aside class="reveal h-fit space-y-6">
            <div class="card rounded-[1.5rem] p-6">
              <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">Technologies used</h2>
              <div class="mt-4 flex flex-wrap gap-2">
                <NuxtLink v-for="tech in relatedTechnologies" :key="tech.slug" :to="`/technologies/${tech.slug}`" class="rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-bold text-[var(--ink)] transition hover:border-[var(--brand)]/40 hover:bg-[var(--brand-light)]">
                  {{ tech.name }}
                </NuxtLink>
              </div>
            </div>

            <div class="card rounded-[1.5rem] p-6">
              <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">Other services</h2>
              <div class="mt-4 space-y-3">
                <NuxtLink v-for="other in otherServices" :key="other.slug" :to="`/services/${other.slug}`" class="block rounded-2xl border border-[var(--border)] p-4 text-sm font-bold text-[var(--ink)] transition hover:border-[var(--brand)]/35 hover:bg-[var(--brand-light)]">
                  {{ other.title }}
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
import { services, getServiceBySlug } from '~/data/services'
import { getTechnologyBySlug } from '~/data/technologies'

useReveal()

const route = useRoute()
const slug = computed(() => String(route.params.slug))
const service = computed(() => getServiceBySlug(slug.value))

if (!service.value) {
  throw createError({ statusCode: 404, statusMessage: 'Service not found' })
}

const siteUrl = 'https://cloftware.com'
const pageUrl = computed(() => `${siteUrl}/services/${service.value?.slug}`)
const otherServices = computed(() => services.filter((item) => item.slug !== service.value?.slug).slice(0, 5))
const relatedTechnologies = computed(() =>
  (service.value?.technologySlugs ?? []).map((techSlug) => getTechnologyBySlug(techSlug)).filter((tech): tech is NonNullable<typeof tech> => Boolean(tech))
)

useSeoMeta({
  title: () => `${service.value?.title} | Cloftware Services`,
  description: () => service.value?.summary ?? '',
  ogTitle: () => service.value?.title ?? '',
  ogDescription: () => service.value?.summary ?? '',
  ogType: 'website',
  ogUrl: () => pageUrl.value,
  twitterCard: 'summary_large_image',
  twitterTitle: () => service.value?.title ?? '',
  twitterDescription: () => service.value?.summary ?? ''
})

useHead({
  link: [{ rel: 'canonical', href: pageUrl.value }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: service.value?.title,
        name: service.value?.title,
        description: service.value?.summary,
        url: pageUrl.value,
        provider: {
          '@type': 'Organization',
          name: 'Cloftware',
          url: siteUrl
        }
      })
    },
    ...(service.value?.faqs.length
      ? [
          {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: service.value.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: { '@type': 'Answer', text: faq.answer }
              }))
            })
          }
        ]
      : []),
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
          { '@type': 'ListItem', position: 3, name: service.value?.title, item: pageUrl.value }
        ]
      })
    }
  ]
})
</script>
