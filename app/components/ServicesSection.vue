<template>
  <section id="services" class="py-24">
    <div class="section-wrap">
      <div class="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div class="max-w-4xl">
          <span class="section-eyebrow">Services</span>
          <h2 class="section-title">Full-cycle software engineering for modern enterprises.</h2>
          <p class="section-copy">From custom platforms to cloud infrastructure and AI automation, Cloftware delivers production-grade systems with clean architecture, measurable outcomes, and enterprise reliability.</p>
        </div>
        <NuxtLink v-if="showAllLink" to="/services" class="btn-secondary w-fit">View All Services</NuxtLink>
      </div>

      <div class="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <article v-for="service in visibleServices" :key="service.title" class="reveal glass-panel hover-lift rounded-2xl p-6">
          <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-300/25 bg-sky-400/10 text-sm font-extrabold text-sky-200">{{ service.index }}</div>
          <h3 class="font-display mt-6 text-xl font-extrabold text-white">{{ service.title }}</h3>
          <p class="mt-3 min-h-20 text-sm leading-6 text-slate-400">{{ service.description }}</p>
          <div class="mt-5 flex flex-wrap gap-2">
            <span v-for="tag in service.tags" :key="tag" class="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300">{{ tag }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ limit?: number, showAllLink?: boolean }>(), {
  limit: 0,
  showAllLink: false
})

const services = [
  { index: '01', title: 'Custom Software Development', description: 'Enterprise applications, SaaS products, internal platforms, workflow automation, CRM, ERP, and database-driven systems.', tags: ['SaaS', 'CRM', 'ERP', 'APIs'] },
  { index: '02', title: 'Web Engineering', description: 'High-performance web products using frontend, backend, Laravel, Nuxt.js, Vue.js, React, Node.js, PHP, and modern architecture.', tags: ['Nuxt', 'Vue', 'React', 'Laravel'] },
  { index: '03', title: 'Mobile App Development', description: 'Native and cross-platform mobile applications for Android, iOS, and Flutter with reliable backend integrations.', tags: ['Android', 'iOS', 'Flutter', 'Mobile APIs'] },
  { index: '04', title: 'Cloud Engineering', description: 'Cloud-native infrastructure, migrations, DevOps, Docker, CI/CD, observability, and managed deployments across major clouds.', tags: ['AWS', 'Azure', 'Google Cloud', 'Oracle Cloud'] },
  { index: '05', title: 'AI Development', description: 'LLM integration, intelligent automation, analytics platforms, copilots, document intelligence, and AI-enabled business workflows.', tags: ['OpenAI', 'LLMs', 'Automation', 'Analytics'] },
  { index: '06', title: 'IoT & Data Systems', description: 'MQTT platforms, device dashboards, API gateways, database design, real-time monitoring, and scalable data infrastructure.', tags: ['MQTT', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] }
]

const visibleServices = computed(() => (props.limit > 0 ? services.slice(0, props.limit) : services))
</script>
