<template>
  <footer class="border-t border-white/10 bg-[#07101d] py-16">
    <div class="section-wrap">
      <div class="grid gap-10 lg:grid-cols-[1.1fr_1.7fr_0.9fr]">
        <div>
          <div class="logo-surface inline-flex px-4 py-3">
            <BrandLogo size="lg" />
          </div>
          <p class="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Software Engineering - Web - Mobile - Cloud - AI - IoT</p>
          <p class="mt-6 max-w-sm text-sm leading-7 text-slate-400">Enterprise-grade software engineering for startups, SMBs, SaaS companies, and global organizations.</p>
          <p class="mt-6 text-sm text-slate-500">USA - United Kingdom - Canada - Germany - India</p>
        </div>

        <div class="grid gap-8 sm:grid-cols-3">
          <div v-for="column in columns" :key="column.title">
            <h3 class="font-display text-sm font-extrabold uppercase tracking-[0.14em] text-white">{{ column.title }}</h3>
            <ul class="mt-4 space-y-3">
              <li v-for="link in column.links" :key="link.label">
                <NuxtLink :to="link.href" class="text-sm text-slate-400 transition hover:text-sky-300">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 class="font-display text-sm font-extrabold uppercase tracking-[0.14em] text-white">Newsletter</h3>
          <p class="mt-4 text-sm leading-6 text-slate-400">Product engineering insights for leaders building reliable software.</p>
          <form class="mt-5 flex gap-2" @submit.prevent="subscribe">
            <input v-model="newsletterEmail" aria-label="Email address" type="email" placeholder="Email address" class="min-w-0 flex-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none focus:border-sky-300/50">
            <button class="btn-primary min-h-11 px-4 text-sm" type="submit">Join</button>
          </form>
          <div class="mt-6 flex gap-3 text-sm font-bold text-slate-400">
            <a href="https://www.linkedin.com/company/cloftware" class="hover:text-sky-300" target="_blank" rel="noopener">LinkedIn</a>
            <NuxtLink to="/blog" class="hover:text-sky-300">Blog</NuxtLink>
            <NuxtLink to="/contact" class="hover:text-sky-300">Contact</NuxtLink>
          </div>
        </div>
      </div>
      <div class="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row">
        <p>(c) {{ year }} Cloftware. All rights reserved.</p>
        <div class="flex gap-5">
          <NuxtLink to="/contact" class="hover:text-sky-300">Privacy Policy</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-sky-300">Terms</NuxtLink>
          <a href="mailto:hello@cloftware.com" class="hover:text-sky-300">hello@cloftware.com</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
const newsletterEmail = ref('')
const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Blogs', href: '/blog' },
      { label: 'Careers', href: '/contact' },
      { label: 'Contact', href: '/contact' }
    ]
  },
  {
    title: 'Services',
    links: [
      { label: 'Custom Software', href: '/services' },
      { label: 'Web Development', href: '/services' },
      { label: 'Mobile Apps', href: '/services' },
      { label: 'Cloud Engineering', href: '/services' },
      { label: 'AI Development', href: '/services' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Healthcare', href: '/industries' },
      { label: 'FinTech', href: '/industries' },
      { label: 'Manufacturing', href: '/industries' },
      { label: 'Logistics', href: '/industries' },
      { label: 'Government', href: '/industries' }
    ]
  }
]

const subscribe = () => {
  const subject = encodeURIComponent('Subscribe to Cloftware newsletter')
  const body = encodeURIComponent(`Please add me to the Cloftware newsletter.${newsletterEmail.value ? `\n\nEmail: ${newsletterEmail.value}` : ''}`)
  window.location.href = `mailto:hello@cloftware.com?subject=${subject}&body=${body}`
}
</script>
