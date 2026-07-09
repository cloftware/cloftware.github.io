<template>
  <section id="portfolio" class="py-24">
    <div class="section-wrap">
      <div class="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <span class="section-eyebrow">Featured Projects</span>
          <h2 class="section-title">Premium digital products with measurable business value.</h2>
        </div>
        <a href="/#contact" class="btn-secondary w-fit">Request Case Studies</a>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <article v-for="project in projects" :key="project.title" class="reveal glass-panel hover-lift overflow-hidden rounded-2xl">
          <div class="border-b border-white/10 bg-slate-950/80 p-3">
            <div class="flex gap-2">
              <span class="h-3 w-3 rounded-full bg-red-400/80" />
              <span class="h-3 w-3 rounded-full bg-amber-300/80" />
              <span class="h-3 w-3 rounded-full bg-emerald-300/80" />
            </div>
          </div>
          <div class="relative h-64 overflow-hidden">
            <img :src="project.image" :alt="project.title" class="h-full w-full object-cover opacity-80" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
            <div class="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-xl">
              <p class="text-xs font-bold uppercase tracking-[0.16em] text-sky-300">{{ project.type }}</p>
              <h3 class="font-display mt-2 text-lg font-extrabold text-white">{{ project.title }}</h3>
            </div>
          </div>
          <div class="p-6">
            <p class="text-sm leading-6 text-slate-400">{{ project.description }}</p>
            <a href="/#contact" class="mt-5 inline-flex text-sm font-bold text-sky-300">View Case Study -></a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  { type: 'SaaS Dashboard', title: 'Global Operations Platform', description: 'A cloud-native command center for distributed teams, analytics, approvals, and workflow automation.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85&fm=webp' },
  { type: 'AI Product', title: 'Intelligent Document Suite', description: 'AI-assisted extraction, review, and reporting workflows for regulated business operations.', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85&fm=webp' },
  { type: 'IoT Cloud', title: 'Connected Device Network', description: 'Real-time MQTT telemetry, device health, alerts, and cloud analytics for smart infrastructure.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85&fm=webp' }
]
</script>
