<template>
  <img
    src="/cloftware-logo.svg"
    alt="Cloftware"
    class="block h-auto object-contain"
    :class="sizeClass"
    loading="eager"
    decoding="async"
  >
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg'
  }>(),
  {
    size: 'md'
  }
)

const sizeClass = computed(() => {
  if (props.size === 'sm') return 'w-[138px] sm:w-[150px]'
  if (props.size === 'lg') return 'w-[190px] sm:w-[220px]'
  return 'w-[160px] sm:w-[178px]'
})
</script>
