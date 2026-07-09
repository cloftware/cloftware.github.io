<template>
  <section id="blog" class="py-24">
    <div class="section-wrap">
      <div class="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <span class="section-eyebrow">Insights</span>
          <h2 class="section-title">SEO-friendly software engineering articles.</h2>
          <p class="section-copy">Fresh content for business owners, CTOs, and product teams planning software, cloud, AI, SaaS, and IoT projects.</p>
        </div>
        <NuxtLink to="/blog" class="btn-secondary w-fit">View All Blogs</NuxtLink>
      </div>

      <div class="mt-12 grid gap-5 lg:grid-cols-3">
        <article v-for="post in latestPosts" :key="post.slug" class="reveal glass-panel hover-lift overflow-hidden rounded-2xl">
          <NuxtLink :to="`/blog/${post.slug}`" class="block">
            <img :src="post.image" :alt="post.title" class="h-52 w-full object-cover opacity-90" loading="lazy">
            <div class="p-6">
              <p class="text-xs font-bold uppercase tracking-[0.16em] text-sky-300">{{ post.category }}</p>
              <h3 class="font-display mt-3 text-xl font-extrabold leading-tight text-white">{{ post.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-slate-400">{{ post.description }}</p>
              <div class="mt-5 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>{{ formatDate(post.publishedAt) }}</span>
                <span>{{ post.readTime }}</span>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { blogPosts } from '~/data/blog'

const latestPosts = blogPosts.slice(0, 3)

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(date))
</script>
