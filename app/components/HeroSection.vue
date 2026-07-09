<template>
  <section id="home" class="relative overflow-hidden pb-16 pt-32 sm:pt-36 lg:pt-40">
    <div class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px] overflow-hidden" aria-hidden="true">
      <div class="absolute left-1/2 top-[-220px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,124,195,0.16),transparent_70%)]" />
      <div class="absolute -left-24 top-40 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(0,124,195,0.10),transparent_70%)]" />
      <div class="absolute -right-16 top-16 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(0,124,195,0.09),transparent_70%)]" />
      <div class="absolute inset-x-0 top-0 h-full opacity-[0.5] [background-image:linear-gradient(rgba(0,124,195,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,124,195,0.05)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
    </div>

    <div class="section-wrap grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
      <div class="reveal">
        <div class="section-eyebrow">
          <span class="h-2 w-2 rounded-full bg-[var(--brand)]" />
          Trusted Software Engineering Company
        </div>
        <h1 class="font-display mt-6 max-w-4xl text-[clamp(2.3rem,5.6vw,4.6rem)] font-extrabold leading-[1.06] text-[var(--ink)]">
          Engineering the Future with Intelligent
          <span class="text-[var(--brand)]">Software</span>
        </h1>
        <p class="mt-6 max-w-xl text-base leading-8 text-[var(--body)] md:text-lg">
          Cloftware builds enterprise-grade custom web applications, mobile apps, AI platforms, cloud infrastructure, IoT systems, APIs, and scalable digital products for businesses worldwide.
        </p>
        <div class="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="/#contact" class="btn-primary">Start Your Project <span aria-hidden="true">&rarr;</span></a>
          <NuxtLink to="/services" class="btn-secondary">Explore Services</NuxtLink>
          <NuxtLink to="/portfolio" class="btn-ghost">Watch Our Work</NuxtLink>
        </div>
        <div class="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[var(--border)] pt-6 text-sm font-semibold text-[var(--muted)]">
          <span>{{ portfolioProjects.length }} Live Products Shipped</span>
          <span>{{ technologies.length }}+ Technologies</span>
          <span>Real Projects, No Stock Photos</span>
        </div>
      </div>

      <div class="reveal relative min-h-[420px] sm:min-h-[480px]" @mousemove="onMouseMove" @mouseleave="resetMouse">
        <div
          v-for="node in nodes"
          :key="node.label"
          class="absolute z-10 hidden rounded-2xl border border-[var(--border)] bg-white px-4 py-2.5 text-sm font-bold text-[var(--ink)] shadow-lg sm:block"
          :class="node.class"
          :style="parallaxStyle(node.depth)"
        >
          <span class="mr-2 text-[var(--brand)]">{{ node.icon }}</span>{{ node.label }}
        </div>

        <div class="card premium-shadow relative mx-auto h-full max-w-[540px] overflow-hidden rounded-[1.75rem] p-4 sm:p-5" :style="parallaxStyle(0.025)">
          <div class="rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] p-4">
            <div class="flex items-center justify-between">
              <div class="flex gap-2">
                <span class="h-3 w-3 rounded-full bg-rose-300" />
                <span class="h-3 w-3 rounded-full bg-amber-300" />
                <span class="h-3 w-3 rounded-full bg-emerald-300" />
              </div>
              <span class="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">Cloftware OS</span>
            </div>
            <div class="mt-5 grid gap-4 md:grid-cols-[1fr_0.72fr]">
              <div class="rounded-2xl border border-[var(--border)] bg-white p-4 shadow-sm">
                <p class="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-dark)]">Live Cloud</p>
                <div class="mt-5 h-32 rounded-xl bg-[linear-gradient(180deg,rgba(0,124,195,0.14),rgba(0,124,195,0.02)),repeating-linear-gradient(90deg,rgba(0,124,195,0.18)_0_2px,transparent_2px_34px)]" />
              </div>
              <div class="space-y-3">
                <div class="rounded-2xl border border-[var(--border)] bg-white p-4 shadow-sm">
                  <p class="text-xs text-[var(--muted)]">API latency</p>
                  <p class="mt-2 text-2xl font-extrabold text-[var(--ink)]">42ms</p>
                </div>
                <div class="rounded-2xl border border-[var(--border)] bg-white p-4 shadow-sm">
                  <p class="text-xs text-[var(--muted)]">AI accuracy</p>
                  <p class="mt-2 text-2xl font-extrabold text-[var(--ink)]">98.8%</p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4 rounded-2xl border border-[var(--border)] bg-white p-4 shadow-sm">
            <div class="flex items-center justify-between gap-4">
              <div>
                <p class="text-sm font-bold text-[var(--ink)]">Enterprise delivery pipeline</p>
                <p class="mt-1 text-xs text-[var(--muted)]">Design &rarr; Build &rarr; Secure &rarr; Scale</p>
              </div>
              <div class="h-11 w-11 shrink-0 rounded-full border border-[var(--brand-soft)] bg-[var(--brand-light)]" />
            </div>
            <div class="mt-4 grid grid-cols-4 gap-2">
              <span v-for="bar in 12" :key="bar" class="h-2 rounded-full bg-[var(--border)]" :class="{ 'bg-[var(--brand)]': bar < 9 }" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioProjects } from '~/data/portfolio'
import { technologies } from '~/data/technologies'

const mouse = reactive({ x: 0, y: 0 })

const nodes = [
  { label: 'Cloud', icon: '01', class: '-left-4 top-8 float-slow', depth: 0.06 },
  { label: 'AI Engine', icon: '02', class: '-right-4 bottom-12 float-medium', depth: -0.05 }
]

const onMouseMove = (event: MouseEvent) => {
  const bounds = (event.currentTarget as HTMLElement).getBoundingClientRect()
  mouse.x = (event.clientX - bounds.left - bounds.width / 2) / bounds.width
  mouse.y = (event.clientY - bounds.top - bounds.height / 2) / bounds.height
}

const resetMouse = () => {
  mouse.x = 0
  mouse.y = 0
}

const parallaxStyle = (depth: number) => ({
  transform: `translate3d(${mouse.x * depth * 90}px, ${mouse.y * depth * 90}px, 0)`
})
</script>

<style scoped>
.premium-shadow {
  box-shadow: 0 32px 64px -24px rgba(0, 124, 195, 0.28), 0 8px 24px -8px rgba(16, 24, 40, 0.08);
}
</style>
