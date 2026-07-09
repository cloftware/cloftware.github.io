<template>
  <section class="section-soft border-y border-[var(--border)] py-5">
    <div class="overflow-hidden">
      <div class="marquee-track flex w-max items-center gap-4">
        <div v-for="item in duplicatedItems" :key="item.key" class="mx-2 flex h-12 items-center gap-3 rounded-full border border-[var(--border)] bg-white px-6 text-sm font-bold text-[var(--ink)] shadow-sm">
          <span class="h-2 w-2 rounded-full bg-[var(--brand)]" />
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
