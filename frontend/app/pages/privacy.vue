<template>
  <main class="site-shell min-h-screen">
    <Navbar />
    <section class="pt-32 pb-20 sm:pt-36">
      <div class="section-wrap">
        <div class="reveal max-w-3xl">
          <span class="section-eyebrow">Privacy Policy</span>
          <h1 class="font-display mt-6 text-[clamp(2rem,4.2vw,3.4rem)] font-extrabold leading-[1.1] text-[var(--ink)]">Privacy Policy</h1>
          <p class="section-copy">Last updated: {{ lastUpdated }}</p>
        </div>

        <div class="reveal card mt-12 max-w-3xl rounded-[1.5rem] p-6 md:p-10">
          <div class="space-y-8 text-sm leading-7 text-[var(--body)]">
            <div>
              <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">What this policy covers</h2>
              <p class="mt-3">Cloftware ("we", "us") operates cloftware.com. This policy explains what happens to your information when you use this website — the contact form, the newsletter signup, and general browsing.</p>
            </div>

            <div>
              <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">Contact and newsletter forms</h2>
              <p class="mt-3">When you submit the contact form or newsletter signup, we process the information through our form service. Contact requests are stored securely so we can respond, and newsletter signups are stored to manage subscriptions. We use the information only for the purpose you submitted it for.</p>
            </div>

            <div>
              <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">Cookies and tracking</h2>
              <p class="mt-3">This site does not use cookies, analytics, or advertising trackers. The only third-party request made by the site is to Google Fonts, which loads font files from Google's servers; Google may log standard technical request data (such as IP address) as part of serving that file. We do not use any other third-party scripts.</p>
            </div>

            <div>
              <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">Data we hold about you</h2>
              <p class="mt-3">If you email us — via the contact form, newsletter signup, or directly — we keep that correspondence like any normal business email, for as long as needed to respond to you and maintain a record of client communication. We don't sell or share it with third parties.</p>
            </div>

            <div>
              <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">Your rights</h2>
              <p class="mt-3">You can ask us to tell you what information we hold about you, correct it, or delete it at any time by emailing hello@cloftware.com.</p>
            </div>

            <div>
              <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">Changes to this policy</h2>
              <p class="mt-3">If this policy changes, we'll update the date at the top of this page.</p>
            </div>

            <div>
              <h2 class="font-display text-lg font-extrabold text-[var(--ink)]">Contact us</h2>
              <p class="mt-3">Questions about this policy: <a href="mailto:hello@cloftware.com" class="font-semibold text-[var(--brand-dark)] hover:underline">hello@cloftware.com</a>.</p>
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
const title = 'Privacy Policy | Cloftware'
const description = 'How Cloftware collects, uses, and protects information from visitors to cloftware.com.'
const lastUpdated = 'July 2026'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: `${siteUrl}/privacy`,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/privacy` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        url: `${siteUrl}/privacy`,
        description,
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
            { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: `${siteUrl}/privacy` }
          ]
        }
      })
    }
  ]
})
</script>
