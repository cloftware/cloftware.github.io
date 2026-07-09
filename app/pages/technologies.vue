<template>
  <main class="site-shell min-h-screen">
    <AnimatedBackground />
    <Navbar />
    <PageHero
      eyebrow="Our Stack"
      title="Proven tools chosen for reliability, not trends."
      description="We standardize on frameworks, languages, and cloud platforms with long-term support so what we ship today stays maintainable for years."
      crumb="Technologies"
      image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=2400&q=85&fm=webp"
    />
    <TechnologySection />
    <DevelopmentProcess />
    <FinalCTA />
    <Footer />
  </main>
</template>

<script setup lang="ts">
useReveal()

const siteUrl = 'https://cloftware.com'
const title = 'Technologies We Use | Cloftware'
const description = 'Cloftware engineering stack includes Laravel, Nuxt, Vue, TypeScript, Node.js, PHP, Flutter, Android, Docker, AWS, Azure, Google Cloud, OpenAI, MQTT, and more.'

useSeoMeta({
  title,
  description,
  keywords: 'Nuxt.js development, Vue.js development, Laravel development, Node.js development, cloud technologies, AI technologies',
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: `${siteUrl}/technologies`,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/technologies` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: title,
        url: `${siteUrl}/technologies`,
        description,
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
            { '@type': 'ListItem', position: 2, name: 'Technologies', item: `${siteUrl}/technologies` }
          ]
        }
      })
    }
  ]
})
</script>
