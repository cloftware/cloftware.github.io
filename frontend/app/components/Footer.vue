<template>
  <footer class="bg-[#081426] py-16 text-white">
    <div class="section-wrap">
      <div class="grid gap-10 lg:grid-cols-[1.1fr_1.7fr_0.9fr]">
        <div>
          <div class="inline-flex w-fit rounded-xl bg-white px-3.5 py-2.5">
            <BrandLogo size="lg" />
          </div>
          <p class="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Software Engineering &middot; Web &middot; Mobile &middot; Cloud &middot; AI &middot; IoT</p>
          <p class="mt-6 max-w-sm text-sm leading-7 text-slate-400">A small engineering team that designs, builds, and supports real software — from business websites to IoT hardware and AI features.</p>
        </div>

        <nav class="grid gap-8 sm:grid-cols-3" aria-label="Footer">
          <div v-for="column in columns" :key="column.title">
            <h3 class="font-display text-sm font-extrabold uppercase tracking-[0.14em] text-white">{{ column.title }}</h3>
            <ul class="mt-4 space-y-3">
              <li v-for="link in column.links" :key="link.label">
                <a v-if="link.external" :href="link.href" target="_blank" rel="noopener" class="text-sm text-slate-400 transition hover:text-[#5eb6e8]">{{ link.label }}</a>
                <NuxtLink v-else :to="link.href" class="text-sm text-slate-400 transition hover:text-[#5eb6e8]">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>
        </nav>

        <div>
          <h3 class="font-display text-sm font-extrabold uppercase tracking-[0.14em] text-white">Newsletter</h3>
          <p class="mt-4 text-sm leading-6 text-slate-400">Occasional notes on what we’re building and shipping. No spam.</p>
          <form class="mt-5 flex gap-2" @submit.prevent="subscribe">
            <input v-model="newsletterEmail" aria-label="Email address" type="email" required placeholder="Email address" class="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[#5eb6e8]/60">
            <button class="btn-primary min-h-11 px-4 text-sm disabled:cursor-not-allowed disabled:opacity-60" type="submit" :disabled="isSubscribing">{{ isSubscribing ? 'Joining...' : 'Join' }}</button>
          </form>
          <p v-if="newsletterStatus.message" class="mt-3 text-sm font-semibold" :class="newsletterStatus.type === 'success' ? 'text-[#5eb6e8]' : 'text-red-300'" role="status">{{ newsletterStatus.message }}</p>
          <div class="mt-6 flex gap-3 text-sm font-bold text-slate-400">
            <a href="https://www.linkedin.com/company/cloftware" class="hover:text-[#5eb6e8]" target="_blank" rel="noopener">LinkedIn</a>
            <NuxtLink to="/blog" class="hover:text-[#5eb6e8]">Blog</NuxtLink>
            <NuxtLink to="/contact" class="hover:text-[#5eb6e8]">Contact</NuxtLink>
          </div>
        </div>
      </div>
      <div class="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row">
        <p>&copy; {{ year }} Cloftware. All rights reserved.</p>
        <div class="flex gap-5">
          <NuxtLink to="/privacy" class="hover:text-[#5eb6e8]">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-[#5eb6e8]">Terms</NuxtLink>
          <a href="mailto:hello@cloftware.com" class="hover:text-[#5eb6e8]">hello@cloftware.com</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { portfolioProjects } from '~/data/portfolio'

const year = new Date().getFullYear()
const newsletterEmail = ref('')
const config = useRuntimeConfig()
const apiBase = String(config.public.apiBase).replace(/\/$/, '')
const isSubscribing = ref(false)
const newsletterStatus = reactive({ type: '' as 'success' | 'error' | '', message: '' })
const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' }
    ]
  },
  {
    title: 'Services',
    links: [
      { label: 'Custom Software', href: '/services/custom-software-development' },
      { label: 'Web Engineering', href: '/services/web-engineering' },
      { label: 'Mobile Apps', href: '/services/mobile-app-development' },
      { label: 'Cloud Engineering', href: '/services/cloud-engineering' },
      { label: 'AI Development', href: '/services/ai-development' },
      { label: 'IoT & Data Systems', href: '/services/iot-data-systems' }
    ]
  },
  {
    title: 'Our Work',
    links: portfolioProjects.map((project) => ({ label: project.title, href: project.url, external: true }))
  }
]

const subscribe = async () => {
  isSubscribing.value = true
  newsletterStatus.type = ''
  newsletterStatus.message = ''

  try {
    const response = await $fetch<{ message: string }>(`${apiBase}/api/newsletter`, {
      method: 'POST',
      body: { email: newsletterEmail.value }
    })
    newsletterStatus.type = 'success'
    newsletterStatus.message = response.message
    newsletterEmail.value = ''
  } catch (error) {
    const apiError = error as { data?: { message?: string } }
    newsletterStatus.type = 'error'
    newsletterStatus.message = apiError.data?.message || 'Unable to subscribe right now. Please try again.'
  } finally {
    isSubscribing.value = false
  }
}
</script>
