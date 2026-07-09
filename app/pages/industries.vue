<template>
  <main class="site-shell min-h-screen">
    <AnimatedBackground />
    <Navbar />
    <PageHero
      eyebrow="Solutions"
      title="Domain expertise across every sector we build for."
      description="Every industry has different compliance, data, and reliability needs. Here's where Cloftware has hands-on delivery experience."
      crumb="Solutions"
      image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2400&q=85&fm=webp"
    />
    <IndustriesSection />
    <WhyChooseSection />
    <TestimonialsSection />
    <FinalCTA />
    <Footer />
  </main>
</template>

<script setup lang="ts">
useReveal()

const siteUrl = 'https://cloftware.com'
const title = 'Industries We Serve | Cloftware Software Solutions'
const description = 'Cloftware builds software for healthcare, finance, education, manufacturing, construction, retail, real estate, IoT, logistics, travel, hospitality, and government.'

useSeoMeta({
  title,
  description,
  keywords: 'industry software solutions, healthcare software, fintech software, manufacturing software, logistics software, government software',
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
