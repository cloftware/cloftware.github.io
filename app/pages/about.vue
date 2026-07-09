<template>
  <main class="site-shell min-h-screen">
    <AnimatedBackground />
    <Navbar />
    <PageHero
      eyebrow="About Cloftware"
      title="The story, principles, and people behind our engineering."
      description="Founded to bring senior-level discipline to custom software, Cloftware now supports startups, SMBs, and enterprises across five countries."
      crumb="About"
      image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=85&fm=webp"
    />
    <AboutPreview />
    <StatsSection />
    <WhyChooseSection />
    <DevelopmentProcess />
    <TestimonialsSection />
    <FinalCTA />
    <Footer />
  </main>
</template>

<script setup lang="ts">
useReveal()

const siteUrl = 'https://cloftware.com'
const title = 'About Cloftware | Enterprise Software Engineering Company'
const description = 'Cloftware is a senior software engineering partner helping startups, SMBs, and enterprises design, build, and scale reliable web, mobile, cloud, AI, and IoT products.'

useSeoMeta({
  title,
  description,
  keywords: 'about Cloftware, software engineering company, custom software partner, enterprise software team',
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
