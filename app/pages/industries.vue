<template>
  <main class="site-shell min-h-screen">
    <Navbar />
    <section class="pt-32 pb-4 sm:pt-36">
      <div class="section-wrap">
        <div class="reveal max-w-4xl">
          <span class="section-eyebrow">Solutions</span>
          <h1 class="font-display mt-6 text-[clamp(2.1rem,4.6vw,3.9rem)] font-extrabold leading-[1.08] text-[var(--ink)]">
            Domain experience, honestly labeled.
          </h1>
          <p class="section-copy">Every industry has different compliance, data, and reliability needs. Here's where Cloftware has actually delivered, and where we're a strong fit to work next.</p>
        </div>
      </div>
    </section>
    <IndustriesSection />
    <WhyChooseSection />
    <FinalCTA />
    <Footer />
  </main>
</template>

<script setup lang="ts">
useReveal()

const siteUrl = 'https://cloftware.com'
const title = 'Industries | Cloftware Software Solutions'
const description = 'Where Cloftware has real delivery experience — home services & construction, IoT & smart devices, HR tech — and the industries we’re well-suited to work in next.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: `${siteUrl}/industries`,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/industries` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: title,
        url: `${siteUrl}/industries`,
        description,
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
            { '@type': 'ListItem', position: 2, name: 'Solutions', item: `${siteUrl}/industries` }
          ]
        }
      })
    }
  ]
})
</script>
