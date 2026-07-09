<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#081426]/76 shadow-[0_18px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl">
    <div class="absolute inset-x-0 bottom-0 h-px bg-white/5" aria-hidden="true">
      <div class="h-full bg-gradient-to-r from-sky-400 via-[#007cc3] to-cyan-200" :style="{ width: `${scrollProgress}%` }" />
    </div>
    <nav class="section-wrap flex h-20 items-center justify-between" aria-label="Primary navigation">
      <NuxtLink to="/" class="group flex items-center" aria-label="Cloftware home">
        <span class="logo-surface px-3 py-2 transition group-hover:-translate-y-0.5">
          <BrandLogo size="sm" />
        </span>
      </NuxtLink>

      <div class="hidden items-center gap-1 lg:flex">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="rounded-full px-3 py-2 text-[0.82rem] font-semibold text-slate-300 transition hover:bg-white/5 hover:text-white"
          active-class="!text-white bg-white/5"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <div class="hidden items-center gap-3 lg:flex">
        <NuxtLink to="/contact" class="btn-secondary min-h-10 px-4 text-[0.82rem]">Start Project</NuxtLink>
        <a href="mailto:hello@cloftware.com?subject=Book%20a%20Consultation%20with%20Cloftware" class="btn-primary min-h-10 px-4 text-[0.82rem]">Book Consultation</a>
      </div>

      <button class="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 lg:hidden" type="button" :aria-expanded="menuOpen" aria-controls="mobile-menu" @click="menuOpen = !menuOpen">
        <span class="sr-only">Toggle navigation</span>
        <span class="relative h-4 w-5">
          <span class="absolute left-0 top-0 h-0.5 w-5 bg-white transition" :class="{ 'translate-y-2 rotate-45': menuOpen }" />
          <span class="absolute left-0 top-2 h-0.5 w-5 bg-white transition" :class="{ 'opacity-0': menuOpen }" />
          <span class="absolute left-0 top-4 h-0.5 w-5 bg-white transition" :class="{ '-translate-y-2 -rotate-45': menuOpen }" />
        </span>
      </button>
    </nav>

    <Transition name="menu">
      <div v-if="menuOpen" id="mobile-menu" class="section-wrap pb-5 lg:hidden">
        <div class="glass-panel rounded-2xl p-3">
          <div class="logo-surface mx-1 mb-3 w-fit px-3 py-2">
            <BrandLogo size="sm" />
          </div>
          <NuxtLink v-for="item in navItems" :key="item.href" :to="item.href" class="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/5" @click="menuOpen = false">
            {{ item.label }}
          </NuxtLink>
          <div class="mt-3 grid gap-2">
            <NuxtLink to="/contact" class="btn-secondary text-sm" @click="menuOpen = false">Start Project</NuxtLink>
            <a href="mailto:hello@cloftware.com?subject=Book%20a%20Consultation%20with%20Cloftware" class="btn-primary text-sm" @click="menuOpen = false">Book Consultation</a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
const scrollProgress = ref(0)

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/industries' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' }
]

onMounted(() => {
  const updateScrollProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    scrollProgress.value = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0
  }

  updateScrollProgress()
  window.addEventListener('scroll', updateScrollProgress, { passive: true })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateScrollProgress)
  })
})
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
