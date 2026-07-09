<template>
  <main class="site-shell min-h-screen">
    <AnimatedBackground />
    <Navbar />
    <PageHero
      eyebrow="What We Do"
      title="Software services built around your business outcomes."
      description="Explore the six core disciplines Cloftware uses to design, build, and scale enterprise-grade digital products end to end."
      crumb="Services"
      image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2400&q=85&fm=webp"
    />
    <ServicesSection />
    <DevelopmentProcess />
    <WhyChooseSection />
    <FaqSection />
    <FinalCTA />
    <Footer />
  </main>
</template>

<script setup lang="ts">
useReveal()

const siteUrl = 'https://cloftware.com'
const title = 'Software Development Services | Cloftware'
const description = 'Explore Cloftware services: custom software development, web engineering, mobile app development, cloud engineering, AI development, and IoT & data systems.'

useSeoMeta({
  title,
  description,
  keywords: 'software development services, web development, mobile app development, cloud engineering, AI development, IoT development',
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: `${siteUrl}/services`,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/services` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Software Engineering',
        provider: { '@type': 'Organization', name: 'Cloftware', url: siteUrl },
        url: `${siteUrl}/services`,
        description,
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
            { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` }
          ]
        }
      })
    }
  ]
})
</script>
