<template>
  <section class="border-y border-white/10 bg-white/[0.025] py-5">
    <div class="overflow-hidden">
      <div class="marquee-track flex w-max items-center gap-4">
        <div v-for="item in duplicatedItems" :key="item.key" class="mx-2 flex h-14 items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 text-sm font-bold text-slate-200 backdrop-blur-xl">
          <span class="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_14px_rgba(0,124,195,0.9)]" />
          {{ item.label }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = ['Enterprise Ready', 'Cloud Native', 'Secure Development', 'AI Powered', 'Agile Delivery', '24/7 Support']
const duplicatedItems = [...items, ...items, ...items].map((label, index) => ({ label, key: `${label}-${index}` }))
</script>
