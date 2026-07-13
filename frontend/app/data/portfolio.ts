export interface PortfolioProject {
  slug: string
  title: string
  client: string
  url: string
  category: string
  tagline: string
  description: string
  highlights: string[]
  featureTags: string[]
  serviceSlugs: string[]
  technologySlugs: string[]
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'buldel',
    title: 'Buldel Electrical',
    client: 'Buldel',
    url: 'https://buldel.com',
    category: 'Business Website · Local Services',
    tagline: 'Government-Approved Electrical Contractor for Residential, Commercial & Industrial Projects.',
    description:
      'Buldel is a government-approved, A-Class electrical contractor that has operated as a family business for over a decade. Cloftware built their web presence to do the job a local service business actually needs: convert visitors into calls and bookings, explain a wide service list clearly (troubleshooting, panel upgrades, EV charger installs, whole-house rewiring, commercial energy audits) and rank for the neighborhoods they actually serve.',
    highlights: [
      'Clear service breakdown for residential, commercial, and industrial customers',
      'Local SEO structure targeting specific service areas',
      '24/7 emergency service and warranty information front and center',
      'Fast, mobile-first design for customers searching on the go'
    ],
    featureTags: ['Local SEO', 'Responsive Design', 'Service Business Platform'],
    serviceSlugs: ['web-engineering', 'custom-software-development'],
    technologySlugs: ['nuxtjs', 'vuejs', 'laravel']
  },
  {
    slug: 'buldel-iot',
    title: 'Buldel Smart Home',
    client: 'Buldel',
    url: 'https://iot.buldel.com',
    category: 'IoT Product · Smart Home',
    tagline: 'Smart Home Automation & Electrical Solutions for Modern Living.',
    description:
      'The IoT arm of Buldel: a smart home product line built on the same electrical expertise as the parent business, covering WiFi-enabled smart switches, color-changing smart lighting, security systems, and real-time energy monitoring. Cloftware built the product platform end-to-end — from the ESP32-based device firmware and MQTT messaging to the customer-facing dashboard and app control.',
    highlights: [
      'Smart switches with manual override and voice assistant (Alexa/Google) support',
      'RGB smart lighting with scheduling and sunrise/sunset automation',
      'Real-time energy usage dashboard for tracking savings',
      'No-hub-required architecture with encrypted device connections'
    ],
    featureTags: ['IoT Dashboard', 'Smart Device Control', 'Real-Time Data'],
    serviceSlugs: ['iot-data-systems', 'mobile-app-development'],
    technologySlugs: ['esp32', 'mqtt', 'iot', 'cpp']
  },
  {
    slug: 'worvio',
    title: 'Worvio',
    client: 'Worvio',
    url: 'https://worvio.com',
    category: 'AI SaaS Platform · HR Tech',
    tagline: 'The all-in-one AI-powered hiring platform for developers and recruiters.',
    description:
      'Worvio is an AI-powered marketplace connecting developers with job opportunities and helping employers find vetted technical talent. Cloftware built the platform’s core AI features — an AI resume builder that tailors applications to specific roles, a “Profile Improver” that flags gaps in a developer’s profile, and a matching engine that ranks opportunities by real compatibility rather than keyword overlap — alongside the employer-side search and screening tools.',
    highlights: [
      'AI resume builder tailored to specific job postings',
      '“Profile Improver” tool identifying gaps in a developer’s profile',
      'AI-ranked job matching for candidates and pre-screening for employers',
      'Verified developer search with skill-based filtering for recruiters'
    ],
    featureTags: ['AI Matching', 'Recruiting Platform', 'Resume AI'],
    serviceSlugs: ['ai-development', 'web-engineering'],
    technologySlugs: ['openai', 'nodejs', 'typescript']
  }
]

export const getPortfolioProjectBySlug = (slug: string) => portfolioProjects.find((project) => project.slug === slug)
