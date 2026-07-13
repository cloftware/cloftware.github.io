<template>
  <section id="insights" class="section-soft py-20 sm:py-24">
    <div class="section-wrap grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
      <div class="reveal">
        <span class="section-eyebrow">FAQ</span>
        <h2 class="section-title">Questions enterprise buyers ask before starting.</h2>
        <p class="section-copy">Clear answers about pricing, timelines, technology, support, cloud, and security.</p>
      </div>
      <div class="reveal space-y-3">
        <details v-for="faq in faqs" :key="faq.question" class="group card rounded-2xl p-5 open:border-[var(--brand)]/35 open:bg-[var(--brand-light)]">
          <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-extrabold text-[var(--ink)] md:text-lg">
            {{ faq.question }}
            <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--border)] bg-white text-[var(--brand-dark)] text-base transition group-open:rotate-180">
              <IconsChevronDown />
            </span>
          </summary>
          <p class="mt-4 text-sm leading-7 text-[var(--body)]">{{ faq.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { FaqItem } from '~/types/home'

const faqs: FaqItem[] = [
  { question: 'How much does custom software development cost?', answer: 'Pricing depends on scope, integrations, compliance needs, design complexity, and timeline. Cloftware provides a clear proposal after discovery so you understand phases, deliverables, and investment before work begins.' },
  { question: 'How long does a typical software project take?', answer: 'Focused MVPs may take 8 to 12 weeks, while larger enterprise systems often run in phases over several months. We plan milestones so useful value is delivered early and improved continuously.' },
  { question: 'Which technologies do you work with?', answer: 'We work with Nuxt, Vue, React, Laravel, Node.js, PHP, TypeScript, Flutter, Android, Docker, AWS, Azure, Google Cloud, Oracle Cloud, OpenAI, MQTT, MySQL, PostgreSQL, MongoDB, Redis, and related enterprise tooling.' },
  { question: 'Do you provide support and maintenance after launch?', answer: 'Yes. We support monitoring, bug fixes, cloud operations, performance tuning, security updates, feature development, and product roadmap improvements after deployment.' },
  { question: 'Can you help with cloud architecture and migrations?', answer: 'Yes. Cloftware designs cloud-native infrastructure, migration plans, CI/CD pipelines, Docker workflows, backups, observability, and scaling strategies across major cloud providers.' },
  { question: 'How do you handle security?', answer: 'Security is part of architecture, development, review, deployment, and maintenance. We focus on access control, data protection, secure APIs, dependency hygiene, environment separation, and operational safeguards.' }
]

defineExpose({ faqs })
</script>
