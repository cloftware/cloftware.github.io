<template>
  <main class="site-shell min-h-screen">
    <Navbar />

    <article v-if="project" class="pt-32 pb-20 sm:pt-36">
      <div class="section-wrap">
        <NuxtLink to="/portfolio" class="btn-ghost mb-8 px-0">&larr; All Projects</NuxtLink>
        <header class="reveal max-w-4xl">
          <span class="section-eyebrow">{{ project.category }}</span>
          <h1 class="font-display mt-6 text-[clamp(2rem,4.6vw,3.7rem)] font-extrabold leading-[1.1] text-[var(--ink)]">{{ project.title }}</h1>
          <p class="section-copy">{{ project.tagline }}</p>
          <a :href="project.url" target="_blank" rel="noopener" class="btn-primary mt-6">Visit {{ hostname }} &nearr;</a>
        </header>

        <div class="reveal card mt-10 overflow-hidden rounded-[1.5rem]">
          <div class="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--bg-soft)] p-3">
            <span class="h-3 w-3 rounded-full bg-rose-300" />
            <span class="h-3 w-3 rounded-full bg-amber-300" />
            <span class="h-3 w-3 rounded-full bg-emerald-300" />
            <span class="ml-3 truncate rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--muted)]">{{ project.url }}</span>
          </div>
          <div class="flex h-56 items-center justify-center bg-[linear-gradient(135deg,#0b3556,#007cc3_65%,#1c8ed6)] sm:h-72">
            <p class="font-display px-6 text-center text-xl font-extrabold text-white sm:text-2xl">{{ project.tagline }}</p>
          </div>
        </div>

        <div class="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div class="reveal card rounded-[1.5rem] p-6 md:p-10">
            <p class="text-base leading-8 text-[var(--body)]">{{ project.description }}</p>

            <h2 class="font-display mt-10 text-xl font-extrabold text-[var(--ink)]">Highlights</h2>
            <ul class="mt-4 grid gap-3 sm:grid-cols-2">
              <li v-for="point in project.highlights" :key="point" class="rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] p-4 text-sm font-semibold text-[var(--ink)]">
                {{ point }}
              </li>
            </ul>

            <div class="mt-10 rounded-2xl border border-[var(--brand)]/20 bg-[var(--brand-light)] p-6">
              <h2 class="font-display text-2xl font-extrabold text-[var(--ink)]">Want something like this built?</h2>
              <p class="mt-3 text-sm leading-7 text-[var(--body)]">This is a real, live project — happy to talk through how it was built and what a similar build would look like for you.</p>
              <NuxtLink to="/#contact" class="btn-primary mt-5">Start a Project</NuxtLink>
            </div>
          </div>

          <aside class="reveal h-fit space-y-6">
            <div v-if="relatedServices.length" class="card rounded-[1.5rem] p-6">
              <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">Services used</h2>
              <div class="mt-4 space-y-3">
                <NuxtLink v-for="service in relatedServices" :key="service.slug" :to="`/services/${service.slug}`" class="block rounded-2xl border border-[var(--border)] p-4 text-sm font-bold text-[var(--ink)] transition hover:border-[var(--brand)]/35 hover:bg-[var(--brand-light)]">
                  {{ service.title }}
                </NuxtLink>
              </div>
            </div>

            <div v-if="relatedTechnologies.length" class="card rounded-[1.5rem] p-6">
              <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">Technologies</h2>
              <div class="mt-4 flex flex-wrap gap-2">
                <NuxtLink v-for="tech in relatedTechnologies" :key="tech.slug" :to="`/technologies/${tech.slug}`" class="rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-bold text-[var(--ink)] transition hover:border-[var(--brand)]/40 hover:bg-[var(--brand-light)]">
                  {{ tech.name }}
                </NuxtLink>
              </div>
            </div>

            <div v-if="otherProjects.length" class="card rounded-[1.5rem] p-6">
              <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">Other projects</h2>
              <div class="mt-4 space-y-3">
                <NuxtLink v-for="other in otherProjects" :key="other.slug" :to="`/portfolio/${other.slug}`" class="block rounded-2xl border border-[var(--border)] p-4 text-sm font-bold text-[var(--ink)] transition hover:border-[var(--brand)]/35 hover:bg-[var(--brand-light)]">
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
import { portfolioProjects, getPortfolioProjectBySlug } from '~/data/portfolio'
import { getServiceBySlug } from '~/data/services'
import { getTechnologyBySlug } from '~/data/technologies'

useReveal()

const route = useRoute()
const slug = computed(() => String(route.params.slug))
const project = computed(() => getPortfolioProjectBySlug(slug.value))

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

const siteUrl = 'https://cloftware.com'
const pageUrl = computed(() => `${siteUrl}/portfolio/${project.value?.slug}`)
const hostname = computed(() => (project.value ? new URL(project.value.url).hostname : ''))
const otherProjects = computed(() => portfolioProjects.filter((item) => item.slug !== project.value?.slug))
const relatedServices = computed(() =>
  (project.value?.serviceSlugs ?? []).map((s) => getServiceBySlug(s)).filter((s): s is NonNullable<typeof s> => Boolean(s))
)
const relatedTechnologies = computed(() =>
  (project.value?.technologySlugs ?? []).map((s) => getTechnologyBySlug(s)).filter((t): t is NonNullable<typeof t> => Boolean(t))
)

useSeoMeta({
  title: () => `${project.value?.title} | Cloftware Portfolio`,
  description: () => project.value?.description ?? '',
  ogTitle: () => project.value?.title ?? '',
  ogDescription: () => project.value?.tagline ?? '',
  ogType: 'website',
  ogUrl: () => pageUrl.value,
  twitterCard: 'summary_large_image',
  twitterTitle: () => project.value?.title ?? '',
  twitterDescription: () => project.value?.tagline ?? ''
})

useHead({
  link: [{ rel: 'canonical', href: pageUrl.value }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.value?.title,
        description: project.value?.description,
        url: project.value?.url,
        creator: {
          '@type': 'Organization',
          name: 'Cloftware',
          url: siteUrl
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${siteUrl}/portfolio` },
          { '@type': 'ListItem', position: 3, name: project.value?.title, item: pageUrl.value }
        ]
      })
    }
  ]
})
</script>
