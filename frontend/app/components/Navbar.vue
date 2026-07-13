<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300"
    :class="scrolled ? 'border-[var(--border)] bg-white/90 shadow-[0_1px_0_rgba(16,24,40,0.04),0_8px_24px_-16px_rgba(16,24,40,0.15)] backdrop-blur-lg' : 'border-transparent bg-white/70 backdrop-blur-sm'"
  >
    <nav class="section-wrap flex h-[76px] items-center justify-between" aria-label="Primary navigation">
      <a href="/" class="flex shrink-0 items-center" aria-label="Cloftware home">
        <BrandLogo size="sm" />
      </a>

      <div class="hidden min-w-0 items-center gap-0.5 lg:flex xl:gap-1">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="shrink-0 rounded-full px-2.5 py-2 text-[0.82rem] font-semibold transition hover:bg-[var(--brand-light)] hover:text-[var(--brand-dark)] xl:px-3.5 xl:text-[0.86rem]"
          :class="isActive(item.href) ? 'bg-[var(--brand-light)] text-[var(--brand-dark)]' : 'text-[var(--body)]'"
          :aria-current="isActive(item.href) ? 'page' : undefined"
        >
          {{ item.label }}
        </a>
      </div>

      <div class="hidden shrink-0 items-center gap-3 lg:flex">
        <a href="/contact" class="btn-secondary hidden min-h-10 px-4 text-[0.82rem] xl:inline-flex">Start a Project</a>
        <a href="mailto:hello@cloftware.com?subject=Book%20a%20Consultation%20with%20Cloftware" class="btn-primary min-h-10 px-4 text-[0.82rem]">Book Consultation</a>
      </div>

      <button class="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-white lg:hidden" type="button" :aria-expanded="menuOpen" aria-controls="mobile-menu" @click="menuOpen = !menuOpen">
        <span class="sr-only">Toggle navigation</span>
        <span class="relative h-4 w-5">
          <span class="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-[var(--ink)] transition" :class="{ 'translate-y-2 rotate-45': menuOpen }" />
          <span class="absolute left-0 top-2 h-0.5 w-5 rounded-full bg-[var(--ink)] transition" :class="{ 'opacity-0': menuOpen }" />
          <span class="absolute left-0 top-4 h-0.5 w-5 rounded-full bg-[var(--ink)] transition" :class="{ '-translate-y-2 -rotate-45': menuOpen }" />
        </span>
      </button>
    </nav>

    <Transition name="menu">
      <div v-if="menuOpen" id="mobile-menu" class="section-wrap pb-5 lg:hidden">
        <div class="card rounded-2xl p-3 shadow-[0_20px_48px_-16px_rgba(16,24,40,0.18)]">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-[var(--brand-light)]"
            :class="isActive(item.href) ? 'bg-[var(--brand-light)] text-[var(--brand-dark)]' : 'text-[var(--ink)]'"
            :aria-current="isActive(item.href) ? 'page' : undefined"
            @click="menuOpen = false"
          >
            {{ item.label }}
          </a>
          <div class="mt-2 grid gap-2 border-t border-[var(--border)] p-1 pt-3">
            <a href="/contact" class="btn-secondary text-sm" @click="menuOpen = false">Start a Project</a>
            <a href="mailto:hello@cloftware.com?subject=Book%20a%20Consultation%20with%20Cloftware" class="btn-primary text-sm" @click="menuOpen = false">Book Consultation</a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
const scrolled = ref(false)
const route = useRoute()

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Solutions', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' }
]

const isActive = (href: string) => {
  if (href === '/') return route.path === '/'
  return route.path === href || route.path.startsWith(`${href}/`)
}

onMounted(() => {
  const updateScrolled = () => {
    scrolled.value = window.scrollY > 8
  }

  updateScrolled()
  window.addEventListener('scroll', updateScrolled, { passive: true })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateScrolled)
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
