<template>
  <main class="site-shell">
    <AnimatedBackground />
    <Navbar />
    <HeroSection />
    <TrustBar />
    <StatsSection />
    <AboutPreview />
    <ServicesSection />
    <WhyChooseSection />
    <PortfolioSection />
    <TechnologySection />
    <DevelopmentProcess />
    <IndustriesSection />
    <TestimonialsSection />
    <BlogPreviewSection />
    <FaqSection />
    <FinalCTA />
    <Footer />
  </main>
</template>

<script setup lang="ts">
useReveal()

const siteUrl = 'https://cloftware.com/'
const title = 'Cloftware | Enterprise Software Engineering, Web, Mobile, Cloud, AI & IoT'
const description = 'Cloftware builds enterprise-grade custom software, web applications, mobile apps, cloud infrastructure, AI platforms, IoT systems, APIs, SaaS products, CRM, ERP, and scalable digital products for global businesses.'
const keywords = 'Cloftware, software engineering company, custom software development, web development, mobile app development, cloud engineering, AI development, IoT solutions, Laravel development, Nuxt.js development, Vue.js development, Node.js development, SaaS development, enterprise software'

useSeoMeta({
  title,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: siteUrl,
  ogImage: `${siteUrl}og-cloftware.jpg`,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: `${siteUrl}og-cloftware.jpg`
})

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${siteUrl}#organization`,
            name: 'Cloftware',
            url: siteUrl,
            logo: `${siteUrl}cloftware-logo.svg`,
            slogan: 'Software Engineering - Web - Mobile - Cloud - AI - IoT',
            areaServed: ['United States', 'United Kingdom', 'Canada', 'Germany', 'India'],
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'hello@cloftware.com',
              contactType: 'sales',
              availableLanguage: ['English']
            },
            sameAs: ['https://www.linkedin.com/company/cloftware']
          },
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}#website`,
            url: siteUrl,
            name: 'Cloftware',
            publisher: { '@id': `${siteUrl}#organization` },
            potentialAction: {
              '@type': 'ContactAction',
              target: `${siteUrl}#contact`
            }
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: siteUrl
              }
            ]
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How much does custom software development cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Pricing depends on scope, integrations, compliance needs, design complexity, and timeline. Cloftware provides a clear proposal after discovery.'
                }
              },
              {
                '@type': 'Question',
                name: 'How long does a typical software project take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Focused MVPs may take 8 to 12 weeks, while larger enterprise systems often run in phases over several months.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do you provide support and maintenance after launch?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Cloftware supports monitoring, bug fixes, cloud operations, performance tuning, security updates, and product roadmap improvements after deployment.'
                }
              }
            ]
          }
        ]
      })
    }
  ]
})
</script>
