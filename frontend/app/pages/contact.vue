<template>
  <main class="site-shell min-h-screen">
    <Navbar />
    <section class="pt-32 pb-24 sm:pt-36">
      <div class="section-wrap">
        <div class="reveal max-w-4xl">
          <span class="section-eyebrow">Start a Conversation</span>
          <h1 class="font-display mt-6 text-[clamp(2.1rem,4.6vw,3.9rem)] font-extrabold leading-[1.08] text-[var(--ink)]">
            Let's build your next digital product.
          </h1>
          <p class="section-copy">Tell us about your project and we'll reply by email with honest next steps — no automated sales sequence.</p>
        </div>

        <div class="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div class="reveal card rounded-[1.75rem] p-6 md:p-10">
            <h2 class="font-display text-2xl font-extrabold text-[var(--ink)] md:text-3xl">Tell us about your project</h2>
            <p class="mt-3 text-sm leading-6 text-[var(--body)]">Tell us what you need and we'll reply by email with the next steps.</p>

            <form class="mt-8 grid gap-5 sm:grid-cols-2" @submit.prevent="submitForm">
              <div class="sm:col-span-1">
                <label for="name" class="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">Full Name</label>
                <input id="name" v-model="form.name" type="text" required placeholder="Jane Doe" class="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--brand)]/50">
              </div>
              <div class="sm:col-span-1">
                <label for="email" class="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">Email Address</label>
                <input id="email" v-model="form.email" type="email" required placeholder="jane@company.com" class="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--brand)]/50">
              </div>
              <div class="sm:col-span-1">
                <label for="company" class="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">Company</label>
                <input id="company" v-model="form.company" type="text" placeholder="Company name" class="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--brand)]/50">
              </div>
              <div class="sm:col-span-1">
                <label for="service" class="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">Service Needed</label>
                <select id="service" v-model="form.service" class="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--brand)]/50">
                  <option v-for="option in serviceOptions" :key="option" :value="option">{{ option }}</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">Project Details</label>
                <textarea id="message" v-model="form.message" required rows="5" placeholder="Tell us about your goals, timeline, and budget." class="w-full resize-none rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--brand)]/50" />
              </div>
              <div class="sr-only" aria-hidden="true">
                <label for="website">Website</label>
                <input id="website" v-model="form.website" type="text" tabindex="-1" autocomplete="off">
              </div>
              <div class="sm:col-span-2">
                <button type="submit" class="btn-primary w-full sm:w-fit disabled:cursor-not-allowed disabled:opacity-60" :disabled="isSubmitting">
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }} <IconsArrowRight />
                </button>
                <p v-if="formStatus.message" class="mt-4 text-sm font-semibold" :class="formStatus.type === 'success' ? 'text-[var(--brand-dark)]' : 'text-red-600'" role="status">
                  {{ formStatus.message }}
                </p>
              </div>
            </form>
          </div>

          <div class="flex flex-col gap-4">
            <div v-for="card in contactCards" :key="card.title" class="reveal card hover-lift rounded-2xl p-6">
              <p class="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-dark)]">{{ card.title }}</p>
              <p class="font-display mt-3 text-lg font-extrabold text-[var(--ink)]">{{ card.value }}</p>
              <p class="mt-2 text-sm leading-6 text-[var(--body)]">{{ card.detail }}</p>
            </div>
            <div class="reveal card rounded-2xl p-6">
              <p class="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-dark)]">Real projects</p>
              <ul class="mt-4 space-y-2 text-sm text-[var(--body)]">
                <li v-for="project in portfolioProjects" :key="project.slug">
                  <NuxtLink :to="`/portfolio/${project.slug}`" class="hover:text-[var(--brand-dark)]">{{ project.title }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FaqSection />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { portfolioProjects } from '~/data/portfolio'

useReveal()

const siteUrl = 'https://cloftware.com'
const title = 'Contact Cloftware | Start Your Software Project'
const description = 'Contact Cloftware to discuss custom software development, web, mobile, cloud, AI, or IoT projects.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: `${siteUrl}/contact`,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/contact` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: title,
        url: `${siteUrl}/contact`,
        description,
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
            { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` }
          ]
        }
      })
    }
  ]
})

const serviceOptions = ['Custom Software Development', 'Web Engineering', 'Mobile App Development', 'Cloud Engineering', 'AI Development', 'IoT & Data Systems', 'Something Else']

const form = reactive({
  name: '',
  email: '',
  company: '',
  service: serviceOptions[0],
  message: '',
  website: ''
})

const config = useRuntimeConfig()
const apiBase = String(config.public.apiBase).replace(/\/$/, '')
const isSubmitting = ref(false)
const formStatus = reactive({ type: '' as 'success' | 'error' | '', message: '' })

const contactCards = [
  { title: 'Email', value: 'hello@cloftware.com', detail: 'General inquiries and new project requests.' },
  { title: 'Response Time', value: 'Within 1-2 business days', detail: 'A real person reads and replies to every message.' },
  { title: 'Support', value: '24/7 Availability', detail: 'Ongoing clients get monitored, always-on support.' }
]

const submitForm = async () => {
  isSubmitting.value = true
  formStatus.type = ''
  formStatus.message = ''

  try {
    const response = await $fetch<{ message: string }>(`${apiBase}/api/contact`, {
      method: 'POST',
      body: { ...form }
    })
    formStatus.type = 'success'
    formStatus.message = response.message
    Object.assign(form, { name: '', email: '', company: '', service: serviceOptions[0], message: '', website: '' })
  } catch (error) {
    const apiError = error as { data?: { message?: string } }
    formStatus.type = 'error'
    formStatus.message = apiError.data?.message || 'We could not send your message. Please try again or email hello@cloftware.com.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
