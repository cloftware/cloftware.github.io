<template>
  <section class="section-soft py-20 sm:py-24">
    <div class="section-wrap">
      <div class="reveal max-w-4xl">
        <span class="section-eyebrow">Development Process</span>
        <h2 class="section-title">A calm, transparent path from idea to production.</h2>
      </div>
      <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        <article v-for="(step, index) in steps" :key="step.title" class="reveal card hover-lift rounded-2xl p-5">
          <div class="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-light)] text-sm font-extrabold text-[var(--brand-dark)]">{{ index + 1 }}</div>
          <h3 class="font-display mt-5 text-lg font-extrabold text-[var(--ink)]">{{ step.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-[var(--body)]">{{ step.copy }}</p>
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
