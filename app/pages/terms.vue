<template>
  <main class="site-shell min-h-screen">
    <Navbar />
    <section class="pt-32 pb-20 sm:pt-36">
      <div class="section-wrap">
        <div class="reveal max-w-3xl">
          <span class="section-eyebrow">Terms</span>
          <h1 class="font-display mt-6 text-[clamp(2rem,4.2vw,3.4rem)] font-extrabold leading-[1.1] text-[var(--ink)]">Terms of Use</h1>
          <p class="section-copy">Last updated: {{ lastUpdated }}</p>
        </div>

        <div class="reveal card mt-12 max-w-3xl rounded-[1.5rem] p-6 md:p-10">
          <div class="space-y-8 text-sm leading-7 text-[var(--body)]">
            <div>
              <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">Using this website</h2>
              <p class="mt-3">These terms cover your use of cloftware.com. By browsing this site or submitting the contact/newsletter forms, you agree to these terms. This page covers use of the website only — any project work is governed by a separate written agreement between Cloftware and the client.</p>
            </div>

            <div>
              <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">Content and ownership</h2>
              <p class="mt-3">All text, graphics, logos, and portfolio descriptions on this site belong to Cloftware or are used with permission, unless otherwise credited. You're welcome to link to this site; please don't reproduce or republish content from it without asking first.</p>
            </div>

            <div>
              <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">Portfolio and case studies</h2>
              <p class="mt-3">Project examples shown on this site (Portfolio, Blog) describe real work Cloftware has completed or contributed to. Details are shared with permission or reflect publicly available information about the project.</p>
            </div>

            <div>
              <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">No warranty on site content</h2>
              <p class="mt-3">We keep this site accurate to the best of our ability, but information here — including service descriptions and technology capabilities — is provided for general guidance and doesn't constitute a binding quote or contract. Actual project scope, pricing, and timelines are confirmed separately in writing.</p>
            </div>

            <div>
              <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">External links</h2>
              <p class="mt-3">This site links to external project URLs (e.g. client websites) and social profiles. We aren't responsible for the content or availability of sites we don't control.</p>
            </div>

            <div>
              <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">Changes to these terms</h2>
              <p class="mt-3">We may update these terms occasionally; the date at the top of this page reflects the most recent revision.</p>
            </div>

            <div>
              <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">Contact us</h2>
              <p class="mt-3">Questions about these terms: <a href="mailto:hello@cloftware.com" class="font-semibold text-[var(--brand-dark)] hover:underline">hello@cloftware.com</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script setup lang="ts">
useReveal()

const siteUrl = 'https://cloftware.com'
const title = 'Terms of Use | Cloftware'
const description = 'Terms of use for cloftware.com.'
const lastUpdated = 'July 2026'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: `${siteUrl}/terms`,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/terms` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        url: `${siteUrl}/terms`,
        description,
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
            { '@type': 'ListItem', position: 2, name: 'Terms', item: `${siteUrl}/terms` }
          ]
        }
      })
    }
  ]
})
</script>
