<template>
  <section class="py-24">
    <div class="section-wrap">
      <div class="reveal max-w-4xl">
        <span class="section-eyebrow">Development Process</span>
        <h2 class="section-title">A calm, transparent path from idea to production.</h2>
      </div>
      <div class="mt-14 grid gap-5 lg:grid-cols-7">
        <article v-for="(step, index) in steps" :key="step.title" class="reveal relative rounded-2xl border border-white/10 bg-white/[0.035] p-5 hover-lift">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-sky-400/10 text-sm font-extrabold text-sky-200">{{ index + 1 }}</div>
          <h3 class="font-display mt-5 text-lg font-extrabold text-white">{{ step.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-400">{{ step.copy }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  { title: 'Discovery', copy: 'Define goals, users, constraints, risks, and success metrics.' },
  { title: 'Planning', copy: 'Shape roadmap, architecture, scope, milestones, and delivery model.' },
  { title: 'UI UX Design', copy: 'Design high-trust interfaces, workflows, prototypes, and design systems.' },
  { title: 'Development', copy: 'Build frontend, backend, cloud, integrations, and automation.' },
  { title: 'Testing', copy: 'Validate security, performance, accessibility, data, and edge cases.' },
  { title: 'Deployment', copy: 'Release through CI/CD, observability, backups, and rollback plans.' },
  { title: 'Support', copy: 'Monitor, maintain, improve, and scale the product after launch.' }
]
</script>
