<template>
  <section id="technologies" class="py-24">
    <div class="section-wrap">
      <div class="reveal mx-auto max-w-4xl text-center">
        <span class="section-eyebrow">Technologies</span>
        <h2 class="section-title">A modern stack for secure, scalable product delivery.</h2>
      </div>
      <div class="mt-12 flex flex-wrap justify-center gap-3">
        <span v-for="tech in visibleTechnologies" :key="tech" class="reveal rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-sm font-bold text-slate-200 backdrop-blur-xl transition hover:border-sky-300/40 hover:bg-sky-400/10 hover:text-white">
          {{ tech }}
        </span>
      </div>
      <div v-if="showAllLink" class="reveal mt-10 flex justify-center">
        <NuxtLink to="/technologies" class="btn-secondary w-fit">View All Technologies</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ limit?: number, showAllLink?: boolean }>(), {
  limit: 0,
  showAllLink: false
})

const technologies = ['Laravel', 'Nuxt', 'Vue', 'TypeScript', 'JavaScript', 'PHP', 'Node', 'Flutter', 'Android', 'Docker', 'GitHub', 'Redis', 'MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'AWS', 'Azure', 'Google Cloud', 'OpenAI', 'MQTT']

const visibleTechnologies = computed(() => (props.limit > 0 ? technologies.slice(0, props.limit) : technologies))
</script>
