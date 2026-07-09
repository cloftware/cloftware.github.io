<template>
  <section id="technologies" class="py-24">
    <div class="section-wrap">
      <div class="reveal mx-auto max-w-4xl text-center">
        <span class="section-eyebrow">Technologies</span>
        <h2 class="section-title">A modern stack for secure, scalable product delivery.</h2>
      </div>
      <div class="mt-12 flex flex-wrap justify-center gap-3">
        <button v-for="tech in technologies" :key="tech" type="button" class="reveal rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-sm font-bold text-slate-200 backdrop-blur-xl transition hover:border-sky-300/40 hover:bg-sky-400/10 hover:text-white">
          {{ tech }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const technologies = ['Laravel', 'Nuxt', 'Vue', 'TypeScript', 'JavaScript', 'PHP', 'Node', 'Flutter', 'Android', 'Docker', 'GitHub', 'Redis', 'MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'AWS', 'Azure', 'Google Cloud', 'OpenAI', 'MQTT']
</script>
