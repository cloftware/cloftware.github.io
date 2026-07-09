export interface Service {
  slug: string
  index: string
  title: string
  summary: string
  description: string
  highlights: string[]
  deliverables: string[]
  technologySlugs: string[]
  faqs: Array<{ question: string; answer: string }>
}

export const services: Service[] = [
  {
    slug: 'custom-software-development',
    index: '01',
    title: 'Custom Software Development',
    summary: 'Enterprise applications, internal platforms, workflow automation, and database-driven systems built around how your business actually operates.',
    description:
      'Off-the-shelf tools eventually run out of road: a workflow that doesn’t fit, a report that’s always manual, an integration that never quite works. Cloftware builds custom software that matches your process instead of forcing you into someone else’s. That means clear data models, sensible admin tooling, and a codebase your team (or ours) can keep extending for years, not a one-off build that gets abandoned after launch.',
    highlights: [
      'Requirements and workflow mapping before a single line of code',
      'Clean, documented architecture so the system is maintainable long-term',
      'Admin dashboards, roles, and permissions built in from day one',
      'Ongoing support after launch — bug fixes, improvements, and monitoring'
    ],
    deliverables: [
      'Discovery and technical scoping document',
      'Database and system architecture',
      'Working application with admin/reporting tools',
      'Deployment, documentation, and handover'
    ],
    technologySlugs: ['laravel', 'vuejs', 'nuxtjs', 'mysql', 'postgresql', 'nodejs'],
    faqs: [
      {
        question: 'How is this different from using an off-the-shelf SaaS tool?',
        answer: 'A SaaS tool is built for the average customer. Custom software is built for your exact workflow — no workarounds, no paying for features you don’t use, and no waiting on a vendor’s roadmap to fix what doesn’t work for you.'
      },
      {
        question: 'Do we own the code?',
        answer: 'Yes. You own everything we build for you — source code, database, and documentation — with no vendor lock-in.'
      }
    ]
  },
  {
    slug: 'web-engineering',
    index: '02',
    title: 'Web Engineering',
    summary: 'Fast, SEO-friendly websites and web applications built with Laravel, Nuxt, Vue, React, and Node.js.',
    description:
      'A business website has one job: convince the right visitor to take action, and show up when someone searches for what you do. Cloftware builds websites and web applications that load fast, render cleanly on every device, and are structured so Google (and now AI answer engines) can actually understand and index the content. Whether it’s a marketing site, a customer portal, or a full web application, the same engineering discipline applies: clean semantic HTML, server-side rendering where it matters for SEO, and a design that reads as a real business rather than a template.',
    highlights: [
      'Server-side rendering and static generation for real SEO performance',
      'Mobile-first, responsive layouts tested on real device sizes',
      'Structured data (schema.org / JSON-LD) so search and AI engines can parse your content',
      'Clean information architecture — every page has one clear job'
    ],
    deliverables: [
      'Responsive, production website or web app',
      'On-page SEO: meta tags, sitemap, structured data',
      'Performance tuning (Core Web Vitals)',
      'Content structure that supports future pages/blog growth'
    ],
    technologySlugs: ['nuxtjs', 'vuejs', 'javascript', 'typescript', 'nodejs', 'php'],
    faqs: [
      {
        question: 'Will my site actually rank on Google?',
        answer: 'Rankings depend on many factors beyond the build itself, but we make sure nothing on the technical side holds you back — fast load times, proper indexing, structured data, and a sitemap that keeps Google (and AI crawlers) up to date as you add pages.'
      }
    ]
  },
  {
    slug: 'mobile-app-development',
    index: '03',
    title: 'Mobile App Development',
    summary: 'Native and cross-platform mobile apps for Android and iOS, backed by reliable APIs.',
    description:
      'Mobile apps live or die on speed and reliability — a slow app or a broken sync gets uninstalled. Cloftware builds Android and cross-platform apps with Flutter, wired to the same backend and APIs that power your web platform, so data stays in sync everywhere. We handle push notifications, offline behaviour, app store submission, and the unglamorous parts (crash monitoring, update cycles) that keep an app alive after launch.',
    highlights: [
      'Cross-platform (Flutter) or native Android builds depending on your needs',
      'Shared backend/API with your web platform — one source of truth for data',
      'Push notifications, offline support, and background sync where needed',
      'App store submission and release management'
    ],
    deliverables: [
      'Published (or ready-to-publish) mobile application',
      'API integration with your existing systems',
      'Crash reporting and analytics setup',
      'Release and update process'
    ],
    technologySlugs: ['flutter', 'android', 'nodejs', 'mysql'],
    faqs: []
  },
  {
    slug: 'cloud-engineering',
    index: '04',
    title: 'Cloud Engineering',
    summary: 'Cloud-native infrastructure, migrations, CI/CD, and managed deployments across AWS, Azure, Google Cloud, and Oracle Cloud.',
    description:
      'Most downtime isn’t a code bug — it’s infrastructure that was never set up to handle real traffic, backups that were never tested, or a deploy process that depends on one person remembering the right steps. Cloftware sets up cloud infrastructure that’s boring in the best way: automated deploys, monitored uptime, tested backups, and a setup sized for your actual traffic rather than a guess. We work across AWS, Azure, Google Cloud, and Oracle Cloud, and pick the provider based on your workload and budget rather than defaulting to whichever is trendiest.',
    highlights: [
      'CI/CD pipelines so deploys are repeatable, not manual',
      'Right-sized infrastructure — you don’t pay enterprise cloud prices for a small workload',
      'Monitoring, alerting, and tested backup/restore procedures',
      'Docker-based deployments for consistency across environments'
    ],
    deliverables: [
      'Cloud architecture sized to your workload',
      'Automated CI/CD deployment pipeline',
      'Monitoring, logging, and alerting',
      'Backup and disaster-recovery plan'
    ],
    technologySlugs: ['aws', 'azure', 'google-cloud', 'oracle-cloud', 'docker'],
    faqs: []
  },
  {
    slug: 'ai-development',
    index: '05',
    title: 'AI Development',
    summary: 'LLM integration, intelligent matching, automation, and AI features built into real products — not bolted on as a demo.',
    description:
      'A lot of “AI features” are a chatbot widget nobody asked for. Useful AI is narrower and more specific: matching candidates to jobs, extracting structured data from documents, improving a profile automatically, or automating a repetitive review step. Cloftware integrates OpenAI and other models into real product workflows, with attention to what happens when the model is wrong — validation, fallbacks, and human review where the stakes are high — rather than shipping an AI feature that quietly makes things worse.',
    highlights: [
      'AI features scoped to one specific, measurable workflow',
      'Prompt design, evaluation, and guardrails — not just an API call',
      'Matching/ranking algorithms for marketplaces and hiring platforms',
      'Human-in-the-loop review for high-stakes decisions'
    ],
    deliverables: [
      'AI feature integrated into your product',
      'Evaluation of accuracy on real data before launch',
      'Monitoring for model drift and edge cases',
      'Clear fallback behaviour when the model is uncertain'
    ],
    technologySlugs: ['openai', 'nodejs', 'typescript'],
    faqs: []
  },
  {
    slug: 'iot-data-systems',
    index: '06',
    title: 'IoT & Data Systems',
    summary: 'MQTT-based device platforms, ESP32 firmware, real-time dashboards, and the database design behind them.',
    description:
      'IoT projects fail more often on the unglamorous middle layer — device authentication, message reliability, data storage at scale — than on the device itself. Cloftware builds the full stack: ESP32/embedded firmware, MQTT messaging between devices and the cloud, and the dashboards and APIs that make the data useful to an actual person. This is the same stack behind our own smart home platform, so it’s been tested against real devices in real homes, not just a lab demo.',
    highlights: [
      'ESP32 and embedded firmware for smart switches, sensors, and controllers',
      'MQTT messaging for reliable device-to-cloud communication',
      'Real-time dashboards for device status, energy usage, and alerts',
      'Device authentication and secure provisioning'
    ],
    deliverables: [
      'Device firmware (ESP32 / embedded C++)',
      'MQTT broker setup and message schema',
      'Real-time web dashboard',
      'Database design for time-series and device data'
    ],
    technologySlugs: ['esp32', 'mqtt', 'iot', 'cpp', 'mysql'],
    faqs: []
  }
]

export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug)
