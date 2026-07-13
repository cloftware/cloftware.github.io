<template>
  <section id="portfolio" class="section-soft py-20 sm:py-24">
    <div class="section-wrap">
      <div class="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <span class="section-eyebrow">Featured Projects</span>
          <h2 class="section-title">Real products, live in production.</h2>
        </div>
        <NuxtLink to="/portfolio" class="btn-secondary w-fit">View Full Portfolio</NuxtLink>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <NuxtLink v-for="project in portfolioProjects" :key="project.slug" :to="`/portfolio/${project.slug}`" class="reveal card hover-lift block overflow-hidden rounded-2xl">
          <div class="border-b border-[var(--border)] bg-white p-3">
            <div class="flex items-center gap-2">
              <span class="h-2.5 w-2.5 rounded-full bg-rose-300" />
              <span class="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span class="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              <span class="ml-2 truncate rounded-full bg-[var(--bg-soft)] px-3 py-0.5 text-xs font-semibold text-[var(--muted)]">{{ hostnameOf(project.url) }}</span>
            </div>
          </div>
          <div class="p-6">
            <p class="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-dark)]">{{ project.category }}</p>
            <h3 class="font-display mt-2 text-lg font-extrabold text-[var(--ink)]">{{ project.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-[var(--body)]">{{ project.tagline }}</p>
            <span class="btn-ghost mt-4 inline-flex text-sm font-bold">View Case Study &rarr;</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioProjects } from '~/data/portfolio'

const hostnameOf = (url: string) => new URL(url).hostname
</script>
