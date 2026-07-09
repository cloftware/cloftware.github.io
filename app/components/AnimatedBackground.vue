<template>
  <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,124,195,0.15),transparent_28rem),radial-gradient(circle_at_70%_0%,rgba(186,201,219,0.12),transparent_26rem)]" />
    <div class="absolute inset-0 opacity-[0.17] [background-image:linear-gradient(rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:72px_72px] motion-safe:animate-[gridDrift_26s_linear_infinite]" />
    <div class="absolute inset-0 opacity-70">
      <span
        v-for="particle in particles"
        :key="particle.id"
        class="absolute h-1 w-1 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(0,124,195,0.9)] motion-safe:animate-[particleFloat_var(--speed)_ease-in-out_infinite]"
        :style="{ left: particle.left, top: particle.top, '--speed': particle.speed, animationDelay: particle.delay }"
      />
    </div>
    <div class="absolute left-[6%] top-[18%] h-56 w-56 rounded-full bg-[#007cc3]/16 blur-3xl motion-safe:animate-[meshMove_14s_ease-in-out_infinite]" />
    <div class="absolute bottom-[12%] right-[4%] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl motion-safe:animate-[meshMove_18s_ease-in-out_infinite_reverse]" />
    <div class="absolute left-1/2 top-0 h-full w-px rotate-12 bg-gradient-to-b from-transparent via-sky-300/20 to-transparent" />
    <div class="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-sky-300/30 to-transparent" />
  </div>
</template>

<script setup lang="ts">
const particles = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  left: `${(index * 23) % 100}%`,
  top: `${(index * 37) % 100}%`,
  speed: `${7 + (index % 8)}s`,
  delay: `${(index % 9) * -0.6}s`
}))
</script>

<style scoped>
@keyframes gridDrift {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(72px, 72px, 0);
  }
}

@keyframes particleFloat {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 0.35;
  }
  50% {
    transform: translate3d(22px, -36px, 0);
    opacity: 1;
  }
}

@keyframes meshMove {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(48px, -28px, 0) scale(1.16);
  }
}
</style>
