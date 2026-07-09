export interface Technology {
  slug: string
  name: string
  category: 'Language & Framework' | 'Cloud & DevOps' | 'Database' | 'AI' | 'IoT & Embedded'
  tagline: string
  summary: string
  capabilities: string[]
  useCases: string[]
  relatedServiceSlugs: string[]
  relatedTechSlugs: string[]
}

export const technologies: Technology[] = [
  {
    slug: 'laravel',
    name: 'Laravel',
    category: 'Language & Framework',
    tagline: 'PHP framework for backends that need to be built fast and stay maintainable.',
    summary:
      'Laravel is our default choice for backends that need real structure — authentication, queues, scheduled jobs, and a clean ORM (Eloquent) instead of hand-rolled SQL scattered through the codebase. It lets a small team ship a lot without sacrificing the kind of organization that matters two years later when someone new has to work on it.',
    capabilities: [
      'Eloquent ORM for clean, readable database access',
      'Built-in auth, queues, and job scheduling',
      'Blade templating or headless API-only setups paired with Vue/Nuxt',
      'Artisan CLI for migrations, seeders, and automation scripts'
    ],
    useCases: [
      'Admin dashboards and internal business tools',
      'REST/JSON APIs powering a Vue, Nuxt, or mobile frontend',
      'Multi-tenant SaaS backends with role-based permissions',
      'Booking, scheduling, and service-business platforms'
    ],
    relatedServiceSlugs: ['custom-software-development', 'web-engineering'],
    relatedTechSlugs: ['vuejs', 'mysql', 'php']
  },
  {
    slug: 'vuejs',
    name: 'Vue.js',
    category: 'Language & Framework',
    tagline: 'A frontend framework that stays readable as an interface grows.',
    summary:
      'Vue’s component model and reactivity make it straightforward to build interfaces that update instantly without turning into a tangle of manual DOM manipulation. We use it directly, or through Nuxt when a project needs server-side rendering for SEO.',
    capabilities: [
      'Reactive components with clear, single-file organization',
      'Composition API for reusable logic across a large app',
      'Pinia for state management on data-heavy dashboards',
      'Smooth pairing with Laravel or Node APIs'
    ],
    useCases: [
      'Interactive dashboards with live data (device status, analytics)',
      'Customer portals and account management screens',
      'Marketing sites via Nuxt for SEO-friendly rendering',
      'Admin panels for internal teams'
    ],
    relatedServiceSlugs: ['web-engineering', 'custom-software-development'],
    relatedTechSlugs: ['nuxtjs', 'javascript', 'typescript']
  },
  {
    slug: 'nuxtjs',
    name: 'Nuxt.js',
    category: 'Language & Framework',
    tagline: 'Vue with server-side rendering, routing, and SEO handled properly out of the box.',
    summary:
      'Nuxt is what makes a Vue site actually rank on Google — server-rendered HTML on first load, file-based routing, and built-in tools for meta tags and structured data. This site is built on it. It also supports hybrid static generation, so marketing pages can ship as prerendered HTML while the rest of the app stays dynamic.',
    capabilities: [
      'Server-side rendering (SSR) for fast, indexable pages',
      'Hybrid static generation for marketing/blog pages',
      'File-based routing with dynamic slugs (services, blog, portfolio)',
      'Built-in SEO tooling — meta tags, sitemaps, structured data'
    ],
    useCases: [
      'SEO-critical marketing websites and blogs',
      'Multi-page business sites with dozens of indexable URLs',
      'Customer-facing web apps that also need to rank in search',
      'Sites that need to be readable by both Google and AI answer engines'
    ],
    relatedServiceSlugs: ['web-engineering'],
    relatedTechSlugs: ['vuejs', 'typescript', 'javascript']
  },
  {
    slug: 'javascript',
    name: 'JavaScript',
    category: 'Language & Framework',
    tagline: 'The language every interactive interface runs on, front and back.',
    summary:
      'JavaScript is the common thread through nearly everything we build — browser interactivity, Node.js backends, and the tooling in between. We treat it as a serious engineering language, not a place for quick hacks, which is why most new work is written in TypeScript on top of it.',
    capabilities: [
      'Modern ES2022+ syntax and tooling (Vite, ESLint)',
      'Async/await patterns for APIs, queues, and background jobs',
      'Shared code between frontend and backend where it makes sense',
      'Browser performance profiling and debugging'
    ],
    useCases: [
      'Interactive frontend behaviour on any web project',
      'Node.js backend services and APIs',
      'Build tooling and automation scripts',
      'Real-time features (websockets, live dashboards)'
    ],
    relatedServiceSlugs: ['web-engineering', 'custom-software-development'],
    relatedTechSlugs: ['typescript', 'nodejs', 'vuejs']
  },
  {
    slug: 'typescript',
    name: 'TypeScript',
    category: 'Language & Framework',
    tagline: 'JavaScript with types — fewer runtime surprises, easier to maintain.',
    summary:
      'On anything beyond a small script, we default to TypeScript. Static types catch a real class of bugs before they reach production, and they make a codebase far easier for a second developer (or future us) to pick up without guessing what shape the data is supposed to be.',
    capabilities: [
      'Static typing across frontend, backend, and shared data models',
      'Safer refactors — the compiler flags what breaks',
      'Better autocomplete and self-documenting code',
      'Used across Nuxt, Vue, and Node.js projects'
    ],
    useCases: [
      'Any production application expected to be maintained long-term',
      'API contracts shared between frontend and backend',
      'Data-heavy dashboards where field shape matters',
      'Team projects with more than one developer touching the code'
    ],
    relatedServiceSlugs: ['web-engineering', 'ai-development'],
    relatedTechSlugs: ['javascript', 'nodejs', 'nuxtjs']
  },
  {
    slug: 'php',
    name: 'PHP',
    category: 'Language & Framework',
    tagline: 'The backbone of Laravel — mature, fast, and well understood.',
    summary:
      'PHP powers the majority of the web for good reason: it’s fast to develop in, deploys cheaply on almost any host, and (via Laravel) has excellent tooling around it. We use it for backends where Laravel’s ecosystem is the right fit.',
    capabilities: [
      'Modern PHP 8+ with strict typing where it matters',
      'Composer-managed dependencies',
      'Strong hosting compatibility — runs almost anywhere',
      'Mature ecosystem for payments, auth, and queues via Laravel'
    ],
    useCases: [
      'Laravel-based backends and APIs',
      'Content-driven business websites',
      'Budget-conscious hosting environments',
      'Legacy PHP system maintenance and modernization'
    ],
    relatedServiceSlugs: ['custom-software-development'],
    relatedTechSlugs: ['laravel', 'mysql']
  },
  {
    slug: 'nodejs',
    name: 'Node.js',
    category: 'Language & Framework',
    tagline: 'JavaScript on the server — good for APIs, real-time features, and IoT ingestion.',
    summary:
      'Node.js is our go-to when a backend needs to handle a lot of concurrent, I/O-heavy work — API gateways, websocket connections, or ingesting a stream of MQTT messages from IoT devices. Its non-blocking model handles that kind of load well.',
    capabilities: [
      'High-concurrency API and websocket servers',
      'MQTT/IoT data ingestion pipelines',
      'Shared TypeScript types between client and server',
      'Nitro (Nuxt’s server engine) for full-stack apps'
    ],
    useCases: [
      'Real-time dashboards and live device data',
      'API gateways in front of multiple services',
      'IoT backend ingestion (MQTT to database)',
      'Serverless and edge-deployed functions'
    ],
    relatedServiceSlugs: ['cloud-engineering', 'iot-data-systems'],
    relatedTechSlugs: ['typescript', 'mqtt', 'javascript']
  },
  {
    slug: 'react',
    name: 'React',
    category: 'Language & Framework',
    tagline: 'Component-based UI library, used where a client already has a React codebase.',
    summary:
      'When a project already has an existing React codebase, or a client’s team is standardized on it, we work in React rather than force a migration to Vue. The component model is similar enough that the engineering discipline carries over directly.',
    capabilities: [
      'Component-driven UI with hooks and modern patterns',
      'Integration with existing React codebases',
      'State management (Context, Redux, or lighter alternatives)',
      'Works alongside Node.js or Laravel APIs'
    ],
    useCases: [
      'Extending or maintaining an existing React application',
      'Teams standardized on React tooling',
      'Dashboard and admin interfaces',
      'Component libraries shared across products'
    ],
    relatedServiceSlugs: ['web-engineering'],
    relatedTechSlugs: ['javascript', 'typescript', 'nodejs']
  },
  {
    slug: 'flutter',
    name: 'Flutter',
    category: 'Language & Framework',
    tagline: 'One codebase, native-feeling apps on both Android and iOS.',
    summary:
      'Flutter lets us ship a single codebase that compiles to genuinely native performance on both platforms, which matters for smaller teams that can’t justify separate Android and iOS codebases. It pairs well with the same APIs powering a project’s web platform.',
    capabilities: [
      'Single codebase for Android and iOS',
      'Native-feeling performance and animations',
      'Shared API integration with existing backends',
      'Push notifications and offline data caching'
    ],
    useCases: [
      'Cross-platform consumer or business apps',
      'Companion apps for a web or IoT platform',
      'MVPs that need both app stores covered quickly',
      'Apps with heavy custom UI/animation'
    ],
    relatedServiceSlugs: ['mobile-app-development'],
    relatedTechSlugs: ['android', 'nodejs']
  },
  {
    slug: 'android',
    name: 'Android',
    category: 'Language & Framework',
    tagline: 'Native Android development when it’s the right call.',
    summary:
      'For apps that lean heavily on Android-specific hardware or platform features, native development is still the right tool — better performance and access to platform APIs that cross-platform frameworks don’t fully expose.',
    capabilities: [
      'Native Kotlin/Java Android development',
      'Deep platform integration (notifications, background services)',
      'Play Store publishing and release management',
      'Integration with device hardware (Bluetooth, sensors)'
    ],
    useCases: [
      'Apps controlling IoT or Bluetooth-connected hardware',
      'Performance-critical Android-only apps',
      'Apps needing deep OS-level integration',
      'Enterprise-managed Android deployments'
    ],
    relatedServiceSlugs: ['mobile-app-development', 'iot-data-systems'],
    relatedTechSlugs: ['flutter', 'esp32']
  },
  {
    slug: 'cpp',
    name: 'C++',
    category: 'Language & Framework',
    tagline: 'The language behind ESP32 firmware and performance-critical device code.',
    summary:
      'When code has to run on constrained hardware — a microcontroller with kilobytes of RAM, not gigabytes — C++ is what actually fits. We write the firmware that runs on smart switches, sensors, and IoT controllers in C++ (via the Arduino/ESP-IDF framework), where every byte and millisecond is accounted for.',
    capabilities: [
      'Embedded firmware for ESP32 and similar microcontrollers',
      'Memory- and power-efficient code for battery/mains-powered devices',
      'Direct hardware interfacing (GPIO, relays, sensors)',
      'Real-time constraints for device responsiveness'
    ],
    useCases: [
      'Smart switch and smart lighting firmware',
      'Sensor data collection on constrained hardware',
      'Real-time embedded control loops',
      'Performance-critical native modules'
    ],
    relatedServiceSlugs: ['iot-data-systems'],
    relatedTechSlugs: ['esp32', 'mqtt', 'iot']
  },
  {
    slug: 'aws',
    name: 'AWS',
    category: 'Cloud & DevOps',
    tagline: 'The default choice for scalable, well-documented cloud infrastructure.',
    summary:
      'AWS is our most common cloud target — deep service catalogue, mature documentation, and predictable pricing once it’s sized correctly. We keep the setup as simple as the workload allows rather than reaching for every service in the catalogue.',
    capabilities: [
      'EC2 / container-based application hosting',
      'RDS for managed MySQL/PostgreSQL databases',
      'S3 for object storage and backups',
      'CloudWatch monitoring and alerting'
    ],
    useCases: [
      'Web application and API hosting',
      'Managed database infrastructure',
      'File and media storage at scale',
      'Automated backups and disaster recovery'
    ],
    relatedServiceSlugs: ['cloud-engineering'],
    relatedTechSlugs: ['docker', 'mysql']
  },
  {
    slug: 'azure',
    name: 'Azure',
    category: 'Cloud & DevOps',
    tagline: 'Microsoft’s cloud platform — a strong fit for .NET-adjacent and enterprise environments.',
    summary:
      'For clients already invested in Microsoft tooling, or with compliance requirements that point toward Azure, we build there rather than forcing AWS as a default. The core patterns — containers, managed databases, monitoring — carry across cloud providers.',
    capabilities: [
      'App Service and container-based hosting',
      'Azure SQL and managed database services',
      'Blob storage for files and backups',
      'Azure Monitor for observability'
    ],
    useCases: [
      'Enterprise environments standardized on Microsoft tooling',
      'Applications with specific compliance requirements',
      'Hybrid cloud/on-prem setups',
      'Teams already using Azure DevOps'
    ],
    relatedServiceSlugs: ['cloud-engineering'],
    relatedTechSlugs: ['docker', 'postgresql']
  },
  {
    slug: 'google-cloud',
    name: 'Google Cloud',
    category: 'Cloud & DevOps',
    tagline: 'Strong for data-heavy and AI-adjacent workloads.',
    summary:
      'Google Cloud tends to be our pick when a project leans on data processing or AI/ML tooling — its BigQuery and AI Platform services are genuinely ahead there. It’s also a solid, well-priced general host for standard web workloads.',
    capabilities: [
      'Compute Engine and Cloud Run for application hosting',
      'Cloud SQL for managed databases',
      'BigQuery for analytics on large datasets',
      'Cloud Storage and CDN for media delivery'
    ],
    useCases: [
      'Data analytics and reporting platforms',
      'AI/ML-adjacent workloads',
      'Serverless container deployments (Cloud Run)',
      'Global content delivery'
    ],
    relatedServiceSlugs: ['cloud-engineering', 'ai-development'],
    relatedTechSlugs: ['docker', 'openai']
  },
  {
    slug: 'oracle-cloud',
    name: 'Oracle Cloud',
    category: 'Cloud & DevOps',
    tagline: 'Often the right call when a client already runs Oracle Database, or wants a genuinely low-cost always-free tier.',
    summary:
      'Oracle Cloud (OCI) gets picked for two specific reasons: a client already has Oracle Database infrastructure and wants to stay in that ecosystem, or the project fits comfortably inside OCI’s always-free compute tier, which is unusually generous for smaller workloads compared to AWS/Azure/GCP equivalents.',
    capabilities: [
      'Compute instances with a genuinely usable always-free tier',
      'Oracle Autonomous Database for existing Oracle environments',
      'Object storage and networking',
      'Predictable, often lower cost than equivalent AWS/Azure setups'
    ],
    useCases: [
      'Cost-sensitive projects that fit within the free tier',
      'Organizations already running Oracle Database',
      'Small-to-mid workloads where OCI pricing wins',
      'Backup and secondary hosting environments'
    ],
    relatedServiceSlugs: ['cloud-engineering'],
    relatedTechSlugs: ['mysql', 'postgresql']
  },
  {
    slug: 'docker',
    name: 'Docker',
    category: 'Cloud & DevOps',
    tagline: 'Containers so “works on my machine” stops being a real problem.',
    summary:
      'Docker means the environment a developer tests in matches what actually runs in production — same dependencies, same versions, no surprises on deploy day. We containerize most backend services as a default practice, not an afterthought.',
    capabilities: [
      'Containerized application and database environments',
      'Consistent local development matching production',
      'Docker Compose for multi-service local setups',
      'Foundation for CI/CD pipelines'
    ],
    useCases: [
      'Consistent deployments across dev/staging/production',
      'Multi-service applications (API + database + cache)',
      'CI/CD pipeline builds',
      'Easier onboarding for new developers'
    ],
    relatedServiceSlugs: ['cloud-engineering'],
    relatedTechSlugs: ['aws', 'azure', 'google-cloud']
  },
  {
    slug: 'mysql',
    name: 'MySQL',
    category: 'Database',
    tagline: 'Reliable, well-understood relational database for most business applications.',
    summary:
      'MySQL remains a dependable default for relational data — widely supported, cheap to host, and more than capable for the majority of business applications we build, especially alongside Laravel’s Eloquent ORM.',
    capabilities: [
      'Relational schema design and indexing for performance',
      'Replication and managed hosting (RDS, Cloud SQL)',
      'Tight integration with Laravel/Eloquent',
      'Backup and point-in-time recovery'
    ],
    useCases: [
      'Business applications with structured, relational data',
      'E-commerce and booking systems',
      'Reporting and admin dashboards',
      'Multi-tenant SaaS data models'
    ],
    relatedServiceSlugs: ['custom-software-development', 'cloud-engineering'],
    relatedTechSlugs: ['laravel', 'postgresql']
  },
  {
    slug: 'postgresql',
    name: 'PostgreSQL',
    category: 'Database',
    tagline: 'The choice when data integrity and advanced querying matter most.',
    summary:
      'For projects with complex queries, strict data-integrity requirements, or a need for advanced types (JSON, geospatial, full-text search), PostgreSQL is usually the better fit over MySQL. We use it as the default for Node.js-based backends.',
    capabilities: [
      'Advanced data types (JSONB, arrays, geospatial via PostGIS)',
      'Strong consistency and transactional integrity',
      'Full-text search without a separate search engine',
      'Excellent fit for Node.js/TypeScript backends'
    ],
    useCases: [
      'Applications with complex relational queries',
      'Geospatial or location-based features',
      'Analytics-heavy platforms',
      'Systems where data integrity is non-negotiable'
    ],
    relatedServiceSlugs: ['custom-software-development', 'cloud-engineering'],
    relatedTechSlugs: ['nodejs', 'mysql']
  },
  {
    slug: 'mongodb',
    name: 'MongoDB',
    category: 'Database',
    tagline: 'A document database for data that doesn’t fit a rigid schema.',
    summary:
      'When data genuinely doesn’t fit a fixed relational schema — variable form structures, evolving product catalogs, activity logs — MongoDB’s document model avoids constant migrations. We reach for it when that flexibility is a real requirement, not a default.',
    capabilities: [
      'Flexible, schema-less document storage',
      'Horizontal scaling for high-write workloads',
      'Good fit for rapidly evolving data structures',
      'Aggregation pipeline for analytics'
    ],
    useCases: [
      'Content management with variable field structures',
      'Activity/event logging at scale',
      'Product catalogs with inconsistent attributes',
      'Rapid-prototyping data layers'
    ],
    relatedServiceSlugs: ['custom-software-development'],
    relatedTechSlugs: ['nodejs']
  },
  {
    slug: 'redis',
    name: 'Redis',
    category: 'Database',
    tagline: 'In-memory store for caching, sessions, and queues that need to be fast.',
    summary:
      'Redis handles the things that need to be fast and temporary — session storage, caching expensive queries, rate limiting, and backing job queues. It’s a supporting piece almost every serious backend ends up needing.',
    capabilities: [
      'Application and query caching',
      'Session storage for high-traffic apps',
      'Queue backend for Laravel/Node background jobs',
      'Rate limiting and real-time counters'
    ],
    useCases: [
      'Speeding up slow, repeated database queries',
      'Session management across multiple servers',
      'Background job queues',
      'Real-time leaderboards, counters, and rate limits'
    ],
    relatedServiceSlugs: ['cloud-engineering', 'custom-software-development'],
    relatedTechSlugs: ['laravel', 'nodejs']
  },
  {
    slug: 'openai',
    name: 'OpenAI',
    category: 'AI',
    tagline: 'The model layer behind AI matching, resume tooling, and document workflows.',
    summary:
      'We integrate OpenAI’s models where they solve a specific, bounded problem — matching a resume to a job description, restructuring unstructured text into a usable format, or reviewing a document for a defined set of issues. The engineering effort goes into evaluation and guardrails, not just wiring up an API key.',
    capabilities: [
      'Prompt design and evaluation against real data',
      'Structured output extraction (resumes, documents, forms)',
      'Matching and ranking algorithms on top of embeddings',
      'Rate limiting, cost control, and fallback handling'
    ],
    useCases: [
      'AI-powered candidate-to-job matching',
      'Resume and profile enhancement tools',
      'Document intelligence and data extraction',
      'Automated first-pass content review'
    ],
    relatedServiceSlugs: ['ai-development'],
    relatedTechSlugs: ['nodejs', 'typescript']
  },
  {
    slug: 'iot',
    name: 'IoT',
    category: 'IoT & Embedded',
    tagline: 'Connected devices, from firmware to the dashboard a person actually looks at.',
    summary:
      'IoT is the full chain: a device with sensors or switches, a reliable way for it to talk to the cloud, and a dashboard that turns that data into something a person can act on. We’ve built this end-to-end for a real smart home product, not just as a proof of concept.',
    capabilities: [
      'End-to-end device-to-dashboard architecture',
      'Device provisioning and authentication',
      'Real-time status, alerts, and historical trends',
      'Energy monitoring and usage analytics'
    ],
    useCases: [
      'Smart home device control (switches, lighting, security)',
      'Industrial or commercial equipment monitoring',
      'Energy usage tracking and reporting',
      'Fleet or asset tracking dashboards'
    ],
    relatedServiceSlugs: ['iot-data-systems'],
    relatedTechSlugs: ['mqtt', 'esp32', 'cpp']
  },
  {
    slug: 'mqtt',
    name: 'MQTT',
    category: 'IoT & Embedded',
    tagline: 'The lightweight messaging protocol that keeps IoT devices talking reliably.',
    summary:
      'MQTT is built for exactly the conditions IoT devices live in: unreliable connections, low bandwidth, and a need for messages to arrive even if a device briefly drops offline. It’s the messaging backbone between our device firmware and the cloud/dashboard layer.',
    capabilities: [
      'Publish/subscribe messaging between devices and cloud',
      'Quality-of-service guarantees for message delivery',
      'Low-bandwidth, battery-friendly protocol design',
      'Broker setup and topic architecture design'
    ],
    useCases: [
      'Smart device command and status messaging',
      'Sensor data streaming to a central dashboard',
      'Devices operating on unreliable or limited connections',
      'Fan-out messaging to multiple subscribers'
    ],
    relatedServiceSlugs: ['iot-data-systems'],
    relatedTechSlugs: ['iot', 'esp32', 'nodejs']
  },
  {
    slug: 'esp32',
    name: 'ESP32',
    category: 'IoT & Embedded',
    tagline: 'The microcontroller behind our smart switches, sensors, and connected devices.',
    summary:
      'The ESP32 is our default choice for connected hardware — built-in WiFi and Bluetooth, enough processing power for real control logic, and a mature toolchain (Arduino/ESP-IDF). It’s what actually runs inside smart switches and lighting controllers we’ve shipped to real homes.',
    capabilities: [
      'WiFi and Bluetooth connectivity built into the chip',
      'Firmware written in C++ for control logic and communication',
      'Low power modes for battery-sensitive applications',
      'Direct integration with relays, sensors, and RGB lighting'
    ],
    useCases: [
      'Smart switches and lighting controllers',
      'Environmental and security sensors',
      'DIY and small-batch connected hardware',
      'Prototyping before a custom PCB run'
    ],
    relatedServiceSlugs: ['iot-data-systems'],
    relatedTechSlugs: ['cpp', 'mqtt', 'iot']
  }
]

export const technologyCategories: Technology['category'][] = [
  'Language & Framework',
  'Cloud & DevOps',
  'Database',
  'AI',
  'IoT & Embedded'
]

export const getTechnologyBySlug = (slug: string) => technologies.find((tech) => tech.slug === slug)
