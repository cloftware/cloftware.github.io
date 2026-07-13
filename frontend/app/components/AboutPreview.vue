<template>
  <section id="about" class="py-20 sm:py-24">
    <div class="section-wrap grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
      <div class="reveal card rounded-[1.75rem] p-6 sm:p-8">
        <p class="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-dark)]">What we’ve actually shipped</p>
        <div class="mt-5 space-y-3">
          <a
            v-for="project in portfolioProjects"
            :key="project.slug"
            :href="project.url"
            target="_blank"
            rel="noopener"
            class="hover-lift block rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] p-4 transition"
          >
            <p class="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-dark)]">{{ project.category }}</p>
            <p class="font-display mt-1 text-base font-extrabold text-[var(--ink)]">{{ project.title }}</p>
            <p class="mt-1 text-xs text-[var(--muted)]">{{ hostnameOf(project.url) }}</p>
          </a>
        </div>
        <NuxtLink to="/portfolio" class="btn-ghost mt-5 inline-flex text-sm font-bold">See full portfolio &rarr;</NuxtLink>
      </div>

      <div class="reveal">
        <span class="section-eyebrow">About Cloftware</span>
        <h2 class="section-title">A focused engineering team that ships real, live products.</h2>
        <p class="section-copy">
          Cloftware isn’t a faceless agency with a client roster we can’t name — it’s a small team that designs, builds, and maintains real software: a local service business website, a full IoT smart-home product with custom device firmware, and an AI-powered hiring platform. We keep the team small on purpose so the same people who scope a project are the ones writing the code and answering support requests after launch.
        </p>
        <div class="mt-8 grid gap-4 sm:grid-cols-2">
          <div v-for="point in points" :key="point" class="card rounded-2xl p-5 text-sm font-semibold text-[var(--ink)]">
            {{ point }}
          </div>
        </div>
        <NuxtLink to="/about" class="btn-primary mt-8">Learn More</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioProjects } from '~/data/portfolio'

const points = ['Real products we’ve built, not stock-photo case studies', 'Direct access to the people who write the code', 'Security, performance, and maintainability from day one', 'Long-term support after launch, not a one-and-done handoff']

const hostnameOf = (url: string) => new URL(url).hostname
</script>
