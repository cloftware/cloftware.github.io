<template>
  <section id="industries" class="py-24">
    <div class="section-wrap">
      <div class="reveal grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <span class="section-eyebrow">Industries</span>
          <h2 class="section-title">Software solutions for complex, high-value industries.</h2>
        </div>
        <div class="flex flex-col gap-4 lg:items-end">
          <p class="section-copy lg:text-right">We build systems for organizations where reliability, data integrity, integrations, and user adoption matter.</p>
          <NuxtLink v-if="showAllLink" to="/industries" class="btn-secondary w-fit">View All Industries</NuxtLink>
        </div>
      </div>
      <div class="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="industry in visibleIndustries" :key="industry" class="reveal rounded-2xl border border-white/10 bg-white/[0.04] p-5 font-bold text-slate-200 transition hover:border-sky-300/40 hover:bg-sky-400/10">
          {{ industry }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ limit?: number, showAllLink?: boolean }>(), {
  limit: 0,
  showAllLink: false
})

const industries = ['Healthcare', 'Finance', 'Education', 'Manufacturing', 'Construction', 'Retail', 'Real Estate', 'IoT', 'Logistics', 'Travel', 'Hospitality', 'Government']

const visibleIndustries = computed(() => (props.limit > 0 ? industries.slice(0, props.limit) : industries))
</script>
