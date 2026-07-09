<template>
  <main class="site-shell min-h-screen">
    <Navbar />
    <section class="pt-32 pb-4 sm:pt-36">
      <div class="section-wrap">
        <div class="reveal max-w-4xl">
          <span class="section-eyebrow">About Cloftware</span>
          <h1 class="font-display mt-6 text-[clamp(2.1rem,4.6vw,3.9rem)] font-extrabold leading-[1.08] text-[var(--ink)]">
            A small team, real products, no invented client roster.
          </h1>
          <p class="section-copy">Cloftware is a focused engineering team, not a large agency. Here's what we actually do and how we work.</p>
        </div>
      </div>
    </section>
    <AboutPreview />
    <StatsSection />
    <WhyChooseSection />
    <DevelopmentProcess />
    <FinalCTA />
    <Footer />
  </main>
</template>

<script setup lang="ts">
useReveal()

const siteUrl = 'https://cloftware.com'
const title = 'About Cloftware | Software Engineering Team'
const description = 'Cloftware is a small, focused software engineering team that designs, builds, and supports real products — web, mobile, cloud, AI, and IoT — for a handful of real clients.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: `${siteUrl}/about`,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/about` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: title,
        url: `${siteUrl}/about`,
        description,
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
            { '@type': 'ListItem', position: 2, name: 'About', item: `${siteUrl}/about` }
          ]
        }
      })
    }
  ]
})
</script>
