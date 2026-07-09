<template>
  <section id="home" class="relative flex min-h-screen items-center overflow-hidden pt-28">
    <div class="section-wrap grid items-center gap-14 pb-16 lg:grid-cols-[1.02fr_0.98fr]">
      <div class="reveal">
        <div class="section-eyebrow">
          <span class="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(0,124,195,0.9)]" />
          Trusted Software Engineering Company
        </div>
        <h1 class="font-display mt-7 max-w-4xl text-[clamp(2.45rem,5.8vw,5.25rem)] font-extrabold leading-[1.02] text-white">
          Engineering the Future with Intelligent
          <span class="blue-gradient-text">Software</span>
        </h1>
        <p class="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
          Cloftware builds enterprise-grade software solutions including custom web applications, mobile apps, AI platforms, cloud infrastructure, IoT systems, APIs, enterprise software, and scalable digital products for businesses worldwide.
        </p>
        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="/#contact" class="btn-primary">Start Your Project <span aria-hidden="true">-></span></a>
          <a href="/#services" class="btn-secondary">Explore Services</a>
          <a href="/#portfolio" class="btn-ghost">Watch Our Work</a>
        </div>
        <div class="mt-8 flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-400">
          <span class="h-px w-12 bg-sky-300/40" />
          Helping businesses build reliable software worldwide.
        </div>
      </div>

      <div class="reveal relative min-h-[500px]" @mousemove="onMouseMove" @mouseleave="resetMouse">
        <div class="absolute inset-0 rounded-[2rem] bg-[#007cc3]/15 blur-3xl" :style="parallaxStyle(0.08)" />
        <div class="glass-panel premium-border relative mx-auto h-[500px] max-w-[540px] overflow-hidden rounded-[1.5rem] p-5" :style="parallaxStyle(0.03)">
          <div class="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] motion-safe:animate-[shine_7s_ease-in-out_infinite]" />
          <div class="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
            <div class="flex items-center justify-between">
              <div class="flex gap-2">
                <span class="h-3 w-3 rounded-full bg-red-400/80" />
                <span class="h-3 w-3 rounded-full bg-amber-300/80" />
                <span class="h-3 w-3 rounded-full bg-emerald-300/80" />
              </div>
              <span class="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Cloftware OS</span>
            </div>
            <div class="mt-5 grid gap-4 md:grid-cols-[1fr_0.72fr]">
              <div class="rounded-2xl border border-sky-300/20 bg-sky-400/10 p-4">
                <p class="text-xs font-bold uppercase tracking-[0.16em] text-sky-200">Live Cloud</p>
                <div class="mt-5 h-36 rounded-xl bg-[linear-gradient(180deg,rgba(56,189,248,0.22),rgba(15,23,42,0.25)),repeating-linear-gradient(90deg,rgba(125,211,252,0.32)_0_2px,transparent_2px_36px)]" />
              </div>
              <div class="space-y-3">
                <div class="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p class="text-xs text-slate-400">API latency</p>
                  <p class="mt-2 text-2xl font-extrabold text-white">42ms</p>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p class="text-xs text-slate-400">AI accuracy</p>
                  <p class="mt-2 text-2xl font-extrabold text-white">98.8%</p>
                </div>
              </div>
            </div>
          </div>

          <div
            v-for="node in nodes"
            :key="node.label"
            class="absolute rounded-2xl border border-sky-200/20 bg-slate-950/80 px-4 py-3 text-sm font-bold text-white shadow-2xl backdrop-blur-xl"
            :class="node.class"
            :style="parallaxStyle(node.depth)"
          >
            <span class="mr-2 text-sky-300">{{ node.icon }}</span>{{ node.label }}
          </div>

          <div class="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
            <div class="flex items-center justify-between gap-4">
              <div>
                <p class="text-sm font-bold text-white">Enterprise delivery pipeline</p>
                <p class="mt-1 text-xs text-slate-400">Design -> Build -> Secure -> Scale</p>
              </div>
              <div class="h-12 w-12 rounded-full border border-sky-300/30 bg-sky-400/10 pulse-glow" />
            </div>
            <div class="mt-4 grid grid-cols-4 gap-2">
              <span v-for="bar in 12" :key="bar" class="h-2 rounded-full bg-sky-300/30" :class="{ 'bg-sky-300': bar < 9 }" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const mouse = reactive({ x: 0, y: 0 })

const nodes = [
  { label: 'Cloud', icon: '01', class: 'left-0 top-28 float-slow', depth: 0.08 },
  { label: 'Database', icon: '02', class: 'right-2 top-24 float-medium', depth: -0.07 },
  { label: 'AI Engine', icon: '03', class: 'left-8 bottom-44 float-medium', depth: 0.11 },
  { label: 'IoT Mesh', icon: '04', class: 'right-4 bottom-36 float-slow', depth: -0.1 },
  { label: 'Mobile', icon: '05', class: 'left-1/2 top-[58%] float-slow', depth: 0.06 }
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
@keyframes shine {
  0%,
  100% {
    transform: translateX(-120%);
  }
  55% {
    transform: translateX(120%);
  }
}
</style>
