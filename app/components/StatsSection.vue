<template>
  <section class="py-16 sm:py-20">
    <div class="section-wrap grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="stat in stats" :key="stat.label" class="reveal card hover-lift rounded-2xl p-6 text-center">
        <p class="font-display text-3xl font-extrabold text-[var(--brand)] md:text-4xl" :data-count-to="stat.count" :data-count-suffix="stat.suffix" :data-count-display="stat.value">0{{ stat.suffix }}</p>
        <p class="mt-3 text-sm font-semibold text-[var(--muted)]">{{ stat.label }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioProjects } from '~/data/portfolio'
import { technologies } from '~/data/technologies'

const stats = [
  { value: `${portfolioProjects.length}`, count: portfolioProjects.length, suffix: '', label: 'Live Products Shipped' },
  { value: `${technologies.length}+`, count: technologies.length, suffix: '+', label: 'Technologies We Work With' },
  { value: '100%', count: 100, suffix: '%', label: 'Client-Owned Code' },
  { value: '24/7', count: 24, suffix: '/7', label: 'Support Commitment' }
]
</script>
