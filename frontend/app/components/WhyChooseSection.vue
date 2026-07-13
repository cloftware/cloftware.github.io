<template>
  <section class="py-20 sm:py-24">
    <div class="section-wrap">
      <div class="reveal grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span class="section-eyebrow">Why Choose Us</span>
          <h2 class="section-title">Engineered for trust, speed, and scale.</h2>
        </div>
        <p class="section-copy lg:mt-10">Every engagement is led with senior technical judgment, clear communication, and a delivery model built around dependable business outcomes.</p>
      </div>
      <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article v-for="item in reasons" :key="item.title" class="reveal card hover-lift rounded-2xl p-6">
          <p class="text-sm font-extrabold text-[var(--brand)]">{{ item.meta }}</p>
          <h3 class="font-display mt-5 text-lg font-extrabold text-[var(--ink)]">{{ item.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-[var(--body)]">{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const reasons = [
  { meta: 'Architecture', title: 'Enterprise Architecture', description: 'Systems designed for scale, resilience, integrations, auditability, and long-term maintainability.' },
  { meta: 'Talent', title: 'Senior Engineers', description: 'Experienced specialists across product engineering, cloud, APIs, databases, AI, and DevOps.' },
  { meta: 'Scale', title: 'Scalable Systems', description: 'Performance-minded foundations for SaaS, enterprise workflows, and data-intensive products.' },
  { meta: 'Delivery', title: 'Agile Workflow', description: 'Short feedback loops, sprint visibility, roadmap clarity, and release discipline.' },
  { meta: 'Clarity', title: 'Transparent Communication', description: 'Plain-English updates, clear risks, realistic estimates, and accountable ownership.' },
  { meta: 'Support', title: 'Long-Term Support', description: 'Maintenance, cloud monitoring, security updates, and product evolution after launch.' },
  { meta: 'Velocity', title: 'Fast Delivery', description: 'Focused teams, reusable engineering patterns, and pragmatic decisions without cutting quality.' },
  { meta: 'Security', title: 'Secure Development', description: 'Secure coding, access controls, data protection, dependency hygiene, and deployment safeguards.' }
]
</script>
