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

        <div class="grid gap-8 sm:grid-cols-3">
          <div v-for="column in columns" :key="column.title">
            <h3 class="font-display text-sm font-extrabold uppercase tracking-[0.14em] text-white">{{ column.title }}</h3>
            <ul class="mt-4 space-y-3">
              <li v-for="link in column.links" :key="link.label">
                <a :href="link.href" :target="link.external ? '_blank' : undefined" :rel="link.external ? 'noopener' : undefined" class="text-sm text-slate-400 transition hover:text-[#5eb6e8]">{{ link.label }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 class="font-display text-sm font-extrabold uppercase tracking-[0.14em] text-white">Newsletter</h3>
          <p class="mt-4 text-sm leading-6 text-slate-400">Occasional notes on what we’re building and shipping. No spam.</p>
          <form class="mt-5 flex gap-2" @submit.prevent="subscribe">
            <input v-model="newsletterEmail" aria-label="Email address" type="email" placeholder="Email address" class="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[#5eb6e8]/60">
            <button class="btn-primary min-h-11 px-4 text-sm" type="submit">Join</button>
          </form>
          <div class="mt-6 flex gap-3 text-sm font-bold text-slate-400">
            <a href="https://www.linkedin.com/company/cloftware" class="hover:text-[#5eb6e8]" target="_blank" rel="noopener">LinkedIn</a>
            <a href="/blog" class="hover:text-[#5eb6e8]">Blog</a>
            <a href="/#contact" class="hover:text-[#5eb6e8]">Contact</a>
          </div>
        </div>
      </div>
      <div class="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row">
        <p>&copy; {{ year }} Cloftware. All rights reserved.</p>
        <div class="flex gap-5">
          <a href="/#contact" class="hover:text-[#5eb6e8]">Privacy Policy</a>
          <a href="/#contact" class="hover:text-[#5eb6e8]">Terms</a>
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
const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/#about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/#contact' }
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

const subscribe = () => {
  const subject = encodeURIComponent('Subscribe to Cloftware newsletter')
  const body = encodeURIComponent(`Please add me to the Cloftware newsletter.${newsletterEmail.value ? `\n\nEmail: ${newsletterEmail.value}` : ''}`)
  window.location.href = `mailto:hello@cloftware.com?subject=${subject}&body=${body}`
}
</script>
