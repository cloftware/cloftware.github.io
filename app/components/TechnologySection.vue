<template>
  <section id="technologies" class="py-20 sm:py-24">
    <div class="section-wrap">
      <div class="reveal mx-auto max-w-4xl text-center">
        <span class="section-eyebrow">Technologies</span>
        <h2 class="section-title">A modern stack for secure, scalable product delivery.</h2>
      </div>
      <div class="mt-12 flex flex-wrap justify-center gap-3">
        <NuxtLink
          v-for="tech in technologies"
          :key="tech.slug"
          :to="`/technologies/${tech.slug}`"
          class="reveal rounded-full border border-[var(--border)] bg-white px-5 py-3 text-sm font-bold text-[var(--ink)] transition hover:border-[var(--brand)]/40 hover:bg-[var(--brand-light)] hover:text-[var(--brand-dark)]"
        >
          {{ tech.name }}
        </NuxtLink>
      </div>
      <div class="reveal mt-8 text-center">
        <NuxtLink to="/technologies" class="btn-secondary">View All Technologies</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { technologies } from '~/data/technologies'
</script>
