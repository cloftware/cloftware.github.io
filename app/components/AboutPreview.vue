<template>
  <section id="about" class="py-24">
    <div class="section-wrap grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
      <div class="reveal relative">
        <div class="absolute -inset-6 rounded-[2rem] bg-[#007cc3]/15 blur-3xl" />
        <div class="glass-panel relative overflow-hidden rounded-[2rem]">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85&fm=webp"
            alt="Enterprise software team planning a digital product"
            class="h-[420px] w-full object-cover opacity-90"
            loading="lazy"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
          <div class="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
            <p class="font-display text-xl font-extrabold text-white">Built for serious digital products.</p>
            <p class="mt-2 text-sm leading-6 text-slate-300">Strategy, architecture, engineering, cloud, and support under one senior team.</p>
          </div>
        </div>
      </div>

      <div class="reveal">
        <span class="section-eyebrow">About Cloftware</span>
        <h2 class="section-title">A senior engineering partner for companies that need software to work.</h2>
        <p class="section-copy">
          Cloftware helps startups, SMBs, and enterprise teams design, build, modernize, and scale mission-critical digital products. We combine product thinking, secure architecture, cloud-native delivery, and long-term engineering support for clients across the USA, United Kingdom, Canada, Germany, and India.
        </p>
        <div class="mt-8 grid gap-4 sm:grid-cols-2">
          <div v-for="point in points" :key="point" class="rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-sm font-semibold text-slate-200">
            {{ point }}
          </div>
        </div>
        <NuxtLink to="/about" class="btn-primary mt-8">Learn More</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const points = ['Enterprise architecture from day one', 'Transparent delivery with measurable progress', 'Security, performance, and maintainability baked in', 'Long-term product evolution after launch']
</script>
