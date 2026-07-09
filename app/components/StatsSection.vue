<template>
  <section class="py-20">
    <div class="section-wrap grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      <div v-for="stat in stats" :key="stat.label" class="reveal glass-panel rounded-2xl p-6 text-center hover-lift">
        <p class="font-display text-3xl font-extrabold text-white md:text-4xl" :data-count-to="stat.count" :data-count-suffix="stat.suffix" :data-count-display="stat.value">0{{ stat.suffix }}</p>
        <p class="mt-3 text-sm font-semibold text-slate-400">{{ stat.label }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '100+', count: 100, suffix: '+', label: 'Projects Delivered' },
  { value: '30+', count: 30, suffix: '+', label: 'Global Clients' },
  { value: '5+', count: 5, suffix: '+', label: 'Years Experience' },
  { value: '99%', count: 99, suffix: '%', label: 'Client Satisfaction' },
  { value: '24/7', count: 24, suffix: '/7', label: 'Support' }
]
</script>
