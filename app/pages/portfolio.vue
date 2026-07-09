<template>
  <main class="site-shell min-h-screen">
    <AnimatedBackground />
    <Navbar />
    <PageHero
      eyebrow="Our Work"
      title="Real products, shipped and running in production."
      description="A closer look at the platforms, AI products, and connected systems Cloftware has designed, built, and scaled for clients worldwide."
      crumb="Portfolio"
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=85&fm=webp"
    />
    <PortfolioSection />
    <TestimonialsSection />
    <FinalCTA />
    <Footer />
  </main>
</template>

<script setup lang="ts">
useReveal()

const siteUrl = 'https://cloftware.com'
const title = 'Portfolio | Cloftware Software Engineering Projects'
const description = 'See Cloftware\'s portfolio of SaaS dashboards, AI products, IoT clouds, fintech platforms, healthcare systems, and logistics software built for global clients.'

useSeoMeta({
  title,
  description,
  keywords: 'software portfolio, SaaS case studies, AI product development, IoT platform, fintech software, healthcare software',
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: `${siteUrl}/portfolio`,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/portfolio` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: title,
        url: `${siteUrl}/portfolio`,
        description,
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
            { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${siteUrl}/portfolio` }
          ]
        }
      })
    }
  ]
})
</script>
