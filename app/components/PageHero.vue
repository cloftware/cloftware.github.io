<template>
  <section class="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-24">
    <div v-if="image" class="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <img :src="image" alt="" class="page-hero-img h-full w-full object-cover opacity-30" loading="eager" fetchpriority="high" decoding="async">
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,11,21,0.65)_0%,rgba(6,11,21,0.9)_65%,rgba(6,11,21,1)_100%)]" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,124,195,0.32),transparent_36rem)]" />
    </div>

    <div class="section-wrap">
      <nav class="reveal flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500" aria-label="Breadcrumb">
        <NuxtLink to="/" class="transition hover:text-sky-300">Home</NuxtLink>
        <span aria-hidden="true">/</span>
        <span class="text-slate-300">{{ crumb }}</span>
      </nav>

      <div class="reveal mt-6 max-w-3xl">
        <span class="section-eyebrow">{{ eyebrow }}</span>
        <h1 class="font-display mt-6 text-[clamp(2.1rem,4.6vw,3.9rem)] font-extrabold leading-[1.06] text-white">{{ title }}</h1>
        <p class="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{{ description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    description: string
    crumb: string
    image?: string
  }>(),
  { image: '' }
)
</script>

<style scoped>
.page-hero-img {
  animation: pageHeroZoom 24s ease-in-out infinite alternate;
  will-change: transform;
}

@keyframes pageHeroZoom {
  0% {
    transform: scale(1) translate3d(0, 0, 0);
  }
  100% {
    transform: scale(1.1) translate3d(-1%, -1%, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .page-hero-img {
    animation: none;
  }
}
</style>
