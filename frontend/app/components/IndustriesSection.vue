<template>
  <section id="industries" class="py-20 sm:py-24">
    <div class="section-wrap">
      <div class="reveal grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <span class="section-eyebrow">Solutions</span>
          <h2 class="section-title">Real delivery experience, plus room to grow into more.</h2>
        </div>
        <p class="section-copy">Home services &amp; construction, IoT/smart devices, and HR tech are where we’ve actually shipped. The rest is where we’re well-suited to work next.</p>
      </div>

      <div class="mt-10">
        <p class="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-dark)]">Where we’ve delivered</p>
        <div class="mt-4 grid gap-3 sm:grid-cols-3">
          <div v-for="industry in provenIndustries" :key="industry" class="reveal card border-[var(--brand)]/25 bg-[var(--brand-light)] p-5 text-center font-bold text-[var(--ink)]">
            {{ industry }}
          </div>
        </div>
      </div>

      <div class="mt-8">
        <p class="text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Open to working in</p>
        <div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="industry in otherIndustries" :key="industry" class="reveal card p-5 text-center font-bold text-[var(--ink)] transition hover:border-[var(--brand)]/40 hover:bg-[var(--brand-light)]">
            {{ industry }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const provenIndustries = ['Home Services & Construction', 'IoT & Smart Devices', 'HR Tech & Recruiting']
const otherIndustries = ['Healthcare', 'Finance', 'Education', 'Manufacturing', 'Retail', 'Real Estate', 'Logistics', 'Government']
</script>
