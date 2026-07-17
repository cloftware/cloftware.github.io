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
                <div ref="turnstileEl" />
              </div>
              <div class="sm:col-span-2">
                <button type="submit" class="btn-primary w-full sm:w-fit disabled:cursor-not-allowed disabled:opacity-60" :disabled="isSubmitting || !turnstileToken">
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }} <IconsArrowRight />
                </button>

                <Transition name="status-pop">
                  <div
                    v-if="formStatus.message"
                    role="status"
                    class="mt-5 flex items-start gap-3 rounded-2xl border p-4 shadow-sm sm:p-5"
                    :class="formStatus.type === 'success' ? 'border-[var(--brand)]/25 bg-[var(--brand-light)]' : 'border-red-200 bg-red-50'"
                  >
                    <span
                      class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                      :class="formStatus.type === 'success' ? 'bg-[var(--brand)] text-white' : 'bg-red-600 text-white'"
                    >
                      <svg v-if="formStatus.type === 'success'" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 5.29a1 1 0 0 1 0 1.415l-7.5 7.5a1 1 0 0 1-1.415 0l-3.5-3.5a1 1 0 1 1 1.415-1.414L8.5 12.086l6.79-6.796a1 1 0 0 1 1.414 0Z" clip-rule="evenodd" />
                      </svg>
                      <svg v-else viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5" aria-hidden="true">
                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.72-1.36 3.486 0l6.28 11.164c.75 1.333-.213 2.987-1.743 2.987H3.72c-1.53 0-2.493-1.654-1.743-2.987L8.257 3.1ZM11 13a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-.25-5.75a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5Z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <p class="font-display text-sm font-extrabold" :class="formStatus.type === 'success' ? 'text-[var(--brand-dark)]' : 'text-red-700'">
                        {{ formStatus.type === 'success' ? 'Message sent — thank you!' : 'Something went wrong' }}
                      </p>
                      <p class="mt-1 text-sm leading-6" :class="formStatus.type === 'success' ? 'text-[var(--body)]' : 'text-red-600'">
                        {{ formStatus.message }}
                      </p>
                    </div>
                  </div>
                </Transition>
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
    },
    { src: 'https://challenges.cloudflare.com/turnstile/v0/api.js', async: true, defer: true }
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
const turnstileSiteKey = String(config.public.turnstileSiteKey || '')
const isSubmitting = ref(false)
const formStatus = reactive({ type: '' as 'success' | 'error' | '', message: '' })

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string
      reset: (widgetId?: string) => void
    }
  }
}

const turnstileEl = ref<HTMLElement | null>(null)
const turnstileToken = ref('')
let turnstileWidgetId: string | undefined

function renderTurnstile() {
  if (!window.turnstile || !turnstileEl.value || turnstileWidgetId) return
  turnstileWidgetId = window.turnstile.render(turnstileEl.value, {
    sitekey: turnstileSiteKey,
    callback: (token: string) => { turnstileToken.value = token },
    'expired-callback': () => { turnstileToken.value = '' },
    'error-callback': () => { turnstileToken.value = '' }
  })
}

onMounted(() => {
  const tryRender = () => {
    if (window.turnstile) renderTurnstile()
    else setTimeout(tryRender, 100)
  }
  tryRender()
})

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
      body: { ...form, turnstileToken: turnstileToken.value }
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
    turnstileToken.value = ''
    if (turnstileWidgetId) window.turnstile?.reset(turnstileWidgetId)
  }
}
</script>

<style scoped>
.status-pop-enter-active {
  transition: opacity 320ms ease, transform 320ms ease;
}

.status-pop-leave-active {
  transition: opacity 160ms ease, transform 160ms ease;
}

.status-pop-enter-from {
  opacity: 0;
  transform: translateY(-6px) scale(0.98);
}

.status-pop-leave-to {
  opacity: 0;
  transform: translateY(-4px) scale(0.98);
}
</style>
