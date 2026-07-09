<template>
  <main class="site-shell min-h-screen">
    <Navbar />

    <article v-if="post" class="pt-32 pb-20 sm:pt-36">
      <div class="section-wrap">
        <NuxtLink to="/blog" class="btn-ghost mb-8 px-0">&larr; Back to Blog</NuxtLink>
        <header class="reveal max-w-4xl">
          <span class="section-eyebrow">{{ post.category }}</span>
          <h1 class="font-display mt-6 text-[clamp(2rem,4.6vw,3.7rem)] font-extrabold leading-[1.1] text-[var(--ink)]">{{ post.title }}</h1>
          <p class="section-copy">{{ post.description }}</p>
          <div class="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-[var(--muted)]">
            <span>{{ formatDate(post.publishedAt) }}</span>
            <span>{{ post.readTime }}</span>
            <span>{{ post.author.name }}</span>
          </div>
        </header>

        <div class="reveal mt-10 overflow-hidden rounded-[1.5rem] border border-[var(--border)]">
          <img :src="post.image" :alt="post.title" class="h-[260px] w-full object-cover sm:h-[380px] md:h-[440px]" loading="eager">
        </div>

        <div class="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div class="reveal card rounded-[1.5rem] p-6 md:p-10">
            <section v-for="section in post.sections" :key="section.heading" class="article-section">
              <h2 class="font-display text-2xl font-extrabold text-[var(--ink)]">{{ section.heading }}</h2>
              <p class="mt-4 text-base leading-8 text-[var(--body)]">{{ section.body }}</p>
            </section>
            <div class="mt-10 rounded-2xl border border-[var(--brand)]/20 bg-[var(--brand-light)] p-6">
              <h2 class="font-display text-2xl font-extrabold text-[var(--ink)]">Need help building this?</h2>
              <p class="mt-3 text-sm leading-7 text-[var(--body)]">Cloftware designs and develops software, cloud, AI, SaaS, and IoT systems for businesses worldwide.</p>
              <NuxtLink to="/#contact" class="btn-primary mt-5">Start Your Project</NuxtLink>
            </div>
          </div>

          <aside class="reveal h-fit card rounded-[1.5rem] p-6">
            <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">Related Articles</h2>
            <div class="mt-5 space-y-4">
              <NuxtLink v-for="related in relatedPosts" :key="related.slug" :to="`/blog/${related.slug}`" class="block rounded-2xl border border-[var(--border)] p-4 transition hover:border-[var(--brand)]/35 hover:bg-[var(--brand-light)]">
                <p class="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-dark)]">{{ related.category }}</p>
                <h3 class="mt-2 text-sm font-bold leading-6 text-[var(--ink)]">{{ related.title }}</h3>
              </NuxtLink>
            </div>
          </aside>
        </div>
      </div>
    </article>

    <Footer />
  </main>
</template>

<script setup lang="ts">
import { blogPosts, getBlogPostBySlug } from '~/data/blog'

useReveal()

const route = useRoute()
const slug = computed(() => String(route.params.slug))
const post = computed(() => getBlogPostBySlug(slug.value))

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Blog post not found' })
}

const siteUrl = 'https://cloftware.com'
const postUrl = computed(() => `${siteUrl}/blog/${post.value?.slug}`)
const relatedPosts = computed(() => blogPosts.filter((item) => item.slug !== post.value?.slug).slice(0, 3))

useSeoMeta({
  title: () => `${post.value?.title} | Cloftware Blog`,
  description: () => post.value?.description ?? '',
  keywords: () => post.value?.keywords.join(', ') ?? '',
  ogTitle: () => post.value?.title ?? '',
  ogDescription: () => post.value?.description ?? '',
  ogType: 'article',
  ogUrl: () => postUrl.value,
  ogImage: () => post.value?.image ?? '',
  twitterCard: 'summary_large_image',
  twitterTitle: () => post.value?.title ?? '',
  twitterDescription: () => post.value?.description ?? '',
  twitterImage: () => post.value?.image ?? ''
})

useHead({
  link: [{ rel: 'canonical', href: postUrl.value }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.value?.title,
        description: post.value?.description,
        image: post.value?.image,
        datePublished: post.value?.publishedAt,
        dateModified: post.value?.updatedAt,
        author: {
          '@type': 'Organization',
          name: post.value?.author.name
        },
        publisher: {
          '@type': 'Organization',
          name: 'Cloftware',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/cloftware-logo.svg`
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': postUrl.value
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
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: post.value?.title, item: postUrl.value }
        ]
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
