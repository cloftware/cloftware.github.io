<template>
  <main class="site-shell min-h-screen">
    <AnimatedBackground />
    <Navbar />
    <PageHero
      eyebrow="Start a Conversation"
      title="Let's build your next digital product."
      description="Tell us about your project and a senior engineer will get back to you within one business day."
      crumb="Contact"
      image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2400&q=85&fm=webp"
    />

    <section class="pb-24">
      <div class="section-wrap grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div class="reveal glass-panel premium-border rounded-[2rem] p-6 md:p-10">
          <h2 class="font-display text-2xl font-extrabold text-white md:text-3xl">Tell us about your project</h2>
          <p class="mt-3 text-sm leading-6 text-slate-400">Fill out the form and we'll reply by email with next steps.</p>

          <form class="mt-8 grid gap-5 sm:grid-cols-2" @submit.prevent="submitForm">
            <div class="sm:col-span-1">
              <label for="name" class="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Full Name</label>
              <input id="name" v-model="form.name" type="text" required placeholder="Jane Doe" class="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-sky-300/50">
            </div>
            <div class="sm:col-span-1">
              <label for="email" class="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Email Address</label>
              <input id="email" v-model="form.email" type="email" required placeholder="jane@company.com" class="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-sky-300/50">
            </div>
            <div class="sm:col-span-1">
              <label for="company" class="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Company</label>
              <input id="company" v-model="form.company" type="text" placeholder="Company name" class="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-sky-300/50">
            </div>
            <div class="sm:col-span-1">
              <label for="service" class="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Service Needed</label>
              <select id="service" v-model="form.service" class="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-sky-300/50">
                <option v-for="option in serviceOptions" :key="option" :value="option" class="bg-[#0a1728]">{{ option }}</option>
              </select>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Project Details</label>
              <textarea id="message" v-model="form.message" required rows="5" placeholder="Tell us about your goals, timeline, and budget." class="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-sky-300/50" />
            </div>
            <div class="sm:col-span-2">
              <button type="submit" class="btn-primary w-full sm:w-fit">Send Message <span aria-hidden="true">-></span></button>
              <p v-if="submitted" class="mt-4 text-sm font-semibold text-sky-300">Thanks! Your email client should now open with your message ready to send.</p>
            </div>
          </form>
        </div>

        <div class="flex flex-col gap-4">
          <div v-for="card in contactCards" :key="card.title" class="reveal glass-panel hover-lift rounded-2xl p-6">
            <p class="text-xs font-bold uppercase tracking-[0.14em] text-sky-300">{{ card.title }}</p>
            <p class="font-display mt-3 text-lg font-extrabold text-white">{{ card.value }}</p>
            <p class="mt-2 text-sm leading-6 text-slate-400">{{ card.detail }}</p>
          </div>
          <div class="reveal glass-panel rounded-2xl p-6">
            <p class="text-xs font-bold uppercase tracking-[0.14em] text-sky-300">Global Offices</p>
            <ul class="mt-4 space-y-2 text-sm text-slate-300">
              <li v-for="region in regions" :key="region">{{ region }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <FaqSection />
    <Footer />
  </main>
</template>

<script setup lang="ts">
useReveal()

const siteUrl = 'https://cloftware.com'
const title = 'Contact Cloftware | Start Your Software Project'
const description = 'Contact Cloftware to discuss custom software development, web, mobile, cloud, AI, or IoT projects. Get a response from a senior engineer within one business day.'

useSeoMeta({
  title,
  description,
  keywords: 'contact Cloftware, hire software developers, request software quote, book software consultation',
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
  message: ''
})

const submitted = ref(false)

const contactCards = [
  { title: 'Email', value: 'hello@cloftware.com', detail: 'General inquiries and new project requests.' },
  { title: 'Response Time', value: 'Within 1 business day', detail: 'A senior engineer reviews every submission personally.' },
  { title: 'Support', value: '24/7 Availability', detail: 'Ongoing clients get monitored, always-on support.' }
]

const regions = ['United States', 'United Kingdom', 'Canada', 'Germany', 'India']

const submitForm = () => {
  const subject = encodeURIComponent(`New Project Inquiry: ${form.service}`)
  const bodyLines = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Company: ${form.company || 'N/A'}`,
    `Service: ${form.service}`,
    '',
    form.message
  ]
  const body = encodeURIComponent(bodyLines.join('\n'))
  window.location.href = `mailto:hello@cloftware.com?subject=${subject}&body=${body}`
  submitted.value = true
}
</script>
