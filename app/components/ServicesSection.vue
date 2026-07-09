<template>
  <section id="services" class="section-soft py-20 sm:py-24">
    <div class="section-wrap">
      <div class="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div class="max-w-4xl">
          <span class="section-eyebrow">Services</span>
          <h2 class="section-title">Full-cycle software engineering for real businesses.</h2>
          <p class="section-copy">From custom platforms to cloud infrastructure and IoT hardware, Cloftware delivers production-grade systems with clean architecture and honest scoping.</p>
        </div>
        <NuxtLink to="/services" class="btn-secondary w-fit">View All Services</NuxtLink>
      </div>

      <div class="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <NuxtLink v-for="service in services" :key="service.slug" :to="`/services/${service.slug}`" class="reveal card hover-lift block rounded-2xl p-6">
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-light)] text-sm font-extrabold text-[var(--brand-dark)]">{{ service.index }}</div>
          <h3 class="font-display mt-6 text-xl font-extrabold text-[var(--ink)]">{{ service.title }}</h3>
          <p class="mt-3 min-h-20 text-sm leading-6 text-[var(--body)]">{{ service.summary }}</p>
          <span class="btn-ghost mt-2 inline-flex text-sm font-bold">Learn more &rarr;</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { services } from '~/data/services'
</script>
