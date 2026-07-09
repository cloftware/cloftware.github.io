<template>
  <section id="industries" class="py-24">
    <div class="section-wrap">
      <div class="reveal grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <span class="section-eyebrow">Industries</span>
          <h2 class="section-title">Software solutions for complex, high-value industries.</h2>
        </div>
        <p class="section-copy">We build systems for organizations where reliability, data integrity, integrations, and user adoption matter.</p>
      </div>
      <div class="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="industry in industries" :key="industry" class="reveal rounded-2xl border border-white/10 bg-white/[0.04] p-5 font-bold text-slate-200 transition hover:border-sky-300/40 hover:bg-sky-400/10">
          {{ industry }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const industries = ['Healthcare', 'Finance', 'Education', 'Manufacturing', 'Construction', 'Retail', 'Real Estate', 'IoT', 'Logistics', 'Travel', 'Hospitality', 'Government']
</script>
