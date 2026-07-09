<template>
  <section class="py-24">
    <div class="section-wrap">
      <div class="reveal mx-auto max-w-4xl text-center">
        <span class="section-eyebrow">Testimonials</span>
        <h2 class="section-title">Trusted by teams building serious software.</h2>
      </div>
      <div class="mt-12 grid gap-5 lg:grid-cols-3">
        <article v-for="testimonial in testimonials" :key="testimonial.name" class="reveal glass-panel hover-lift rounded-2xl p-7">
          <div class="flex items-center justify-between">
            <p class="font-display text-lg font-extrabold text-white">{{ testimonial.company }}</p>
            <span class="rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1 text-xs font-bold text-sky-200">{{ testimonial.country }}</span>
          </div>
          <p class="mt-6 text-base leading-8 text-slate-300">"{{ testimonial.quote }}"</p>
          <div class="mt-7 flex items-center gap-4">
            <div class="grid h-12 w-12 place-items-center rounded-full bg-sky-400/10 font-extrabold text-sky-200">{{ testimonial.initials }}</div>
            <div>
              <p class="font-bold text-white">{{ testimonial.name }}</p>
              <p class="text-sm text-slate-500">{{ testimonial.role }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  { company: 'Northstar Health', country: 'USA', quote: 'Cloftware helped us turn a fragmented workflow into a secure, scalable platform our teams actually enjoy using.', initials: 'MR', name: 'Maya Reynolds', role: 'VP Operations' },
  { company: 'Atlas FinTech', country: 'UK', quote: 'Their architecture discipline and communication made a complex cloud migration feel controlled from start to finish.', initials: 'JC', name: 'James Carter', role: 'CTO' },
  { company: 'NexGrid Systems', country: 'Germany', quote: 'We needed IoT dashboards, APIs, and reliability. Cloftware delivered a production-ready system with real engineering depth.', initials: 'LS', name: 'Lena Schreiber', role: 'Product Director' }
]
</script>
