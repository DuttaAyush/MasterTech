import { intelligenceAreas } from '../data/intelligenceAreas'

const trimSlash = (value) => String(value || '').replace(/\/+$/, '')

export const SEO = {
  siteName: import.meta.env.VITE_BRAND_NAME || 'Intellivist',
  siteUrl: trimSlash(import.meta.env.VITE_SITE_URL || ''),
  defaultTitle: 'Intellivist | Market Intelligence & Strategic Research',
  defaultDescription:
    'Intellivist delivers enterprise-grade market intelligence, industry reports, and strategic research across autonomous systems, energy transition, cyber-AI, mobility, and aerospace.',
  defaultImage: '/images/brand/intellivist.png',
  locale: 'en_US',
  twitterHandle: import.meta.env.VITE_TWITTER_HANDLE || '',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'media.relations@intellivist.com',
}

export const STATIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/reports', changefreq: 'daily', priority: '0.9' },
  { path: '/blogs', changefreq: 'daily', priority: '0.9' },
  { path: '/intelligence', changefreq: 'monthly', priority: '0.8' },
  { path: '/industries', changefreq: 'monthly', priority: '0.8' },
  { path: '/services', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/essentials', changefreq: 'monthly', priority: '0.7' },
  { path: '/services/advanced', changefreq: 'monthly', priority: '0.7' },
  { path: '/services/premium', changefreq: 'monthly', priority: '0.7' },
  { path: '/purpose-and-values', changefreq: 'yearly', priority: '0.6' },
  { path: '/futurevision', changefreq: 'yearly', priority: '0.6' },
  { path: '/our-mission', changefreq: 'yearly', priority: '0.6' },
  { path: '/expertise-behind-intellivist', changefreq: 'yearly', priority: '0.6' },
  { path: '/work-with-us', changefreq: 'monthly', priority: '0.6' },
  { path: '/open-roles', changefreq: 'weekly', priority: '0.6' },
  { path: '/contact-us', changefreq: 'yearly', priority: '0.7' },
  { path: '/newsletter', changefreq: 'monthly', priority: '0.6' },
  { path: '/expert-network', changefreq: 'monthly', priority: '0.6' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms-and-conditions', changefreq: 'yearly', priority: '0.3' },
  ...intelligenceAreas.map((area) => ({
    path: `/intelligence/${area.id}`,
    changefreq: 'monthly',
    priority: '0.7',
  })),
]

export const NOINDEX_ROUTES = [
  '/cart',
]

const PAGE_META = {
  home: {
    path: '/',
    title: 'Intellivist | Market Intelligence & Strategic Research',
    description:
      'Enterprise market intelligence, industry reports, and strategic research to help leaders make confident commercial decisions.',
  },
  industries: {
    path: '/industries',
    title: 'Industries | Intellivist',
    description: 'Industry-focused intelligence coverage, sector insights, and research catalog across high-growth markets.',
  },
  intelligence: {
    path: '/intelligence',
    title: 'Intelligence Areas | Intellivist',
    description:
      'Explore Intellivist intelligence areas spanning autonomous systems, energy transition, cyber-AI, mobility, and aerospace.',
  },
  reports: {
    path: '/reports',
    title: 'Market Research Reports | Intellivist',
    description: 'Searchable catalog of enterprise market intelligence reports, forecasts, and strategic industry analysis.',
  },
  blogs: {
    path: '/blogs',
    title: 'Insights & Blogs | Intellivist',
    description: 'Executive insights, strategic analysis, and market commentary from Intellivist research analysts.',
  },
  services: {
    path: '/services',
    title: 'Research Services | Intellivist',
    description: 'Custom market research and intelligence services from Essentials to Premium strategic advisory.',
  },
  essentials: {
    path: '/services/essentials',
    title: 'Essentials Research Services | Intellivist',
    description: 'Foundational market sizing, value chain mapping, and empirical research for strategic initiatives.',
  },
  advanced: {
    path: '/services/advanced',
    title: 'Advanced Growth Services | Intellivist',
    description: 'Competitive intelligence, growth strategy, and commercial acceleration services for enterprise teams.',
  },
  premium: {
    path: '/services/premium',
    title: 'Premium Strategic Advisory | Intellivist',
    description: 'High-stakes strategic advisory for M&A, market entry, category creation, and transformational investments.',
  },
  purpose: {
    path: '/purpose-and-values',
    title: 'Purpose & Values | Intellivist',
    description: 'How Intellivist purpose and values drive impact for clients, teams, and the markets we serve.',
  },
  futureVision: {
    path: '/futurevision',
    title: 'Future Vision | Intellivist',
    description: 'The future vision behind Intellivist: adaptive intelligence systems for faster enterprise decisions.',
  },
  mission: {
    path: '/our-mission',
    title: 'Our Mission | Intellivist',
    description: 'Our mission is to deliver strategic intelligence that helps organizations act with clarity and confidence.',
  },
  team: {
    path: '/expertise-behind-intellivist',
    title: 'Expertise Behind Intellivist',
    description: 'Meet the expertise behind Intellivist delivering strategic intelligence and practical growth guidance.',
  },
  careers: {
    path: '/work-with-us',
    title: 'Careers | Intellivist',
    description: 'Build decision-oriented intelligence at Intellivist. Explore culture, growth, and open opportunities.',
  },
  openRoles: {
    path: '/open-roles',
    title: 'Open Roles | Intellivist Careers',
    description: 'Explore current openings at Intellivist and apply to solve complex market and strategy challenges.',
  },
  contact: {
    path: '/contact-us',
    title: 'Contact Us | Intellivist',
    description: 'Contact Intellivist for sales, analyst support, research inquiries, and partnership discussions.',
  },
  newsletter: {
    path: '/newsletter',
    title: 'Newsletter | Intellivist',
    description: 'Subscribe to Intellivist newsletters, market alerts, and industry-specific intelligence updates.',
  },
  expertNetwork: {
    path: '/expert-network',
    title: 'Expert Network | Intellivist',
    description: 'Join the Intellivist expert network and contribute sector insight to strategic intelligence projects.',
  },
  privacy: {
    path: '/privacy-policy',
    title: 'Privacy Policy | Intellivist',
    description: 'Privacy policy describing how Intellivist collects, uses, stores, and protects user information.',
  },
  terms: {
    path: '/terms-and-conditions',
    title: 'Terms & Conditions | Intellivist',
    description: 'Terms governing use of Intellivist market intelligence reports, websites, and related services.',
  },
  cart: {
    path: '/cart',
    title: 'Cart | Intellivist',
    description: 'Review reports added to your cart.',
    noindex: true,
  },
}

export function pageSeo(key, overrides = {}) {
  const base = PAGE_META[key]
  if (!base) {
    throw new Error(`Unknown SEO page key: ${key}`)
  }

  return {
    title: base.title,
    description: base.description,
    canonical: base.path,
    noindex: Boolean(base.noindex),
    ...overrides,
  }
}

export function intelligenceAreaSeo(area) {
  return {
    title: `${area.title} Intelligence | Intellivist`,
    description: `${area.summary} Explore subsectors, strategic signals, and enterprise decision priorities.`,
    canonical: `/intelligence/${area.id}`,
    image: '/images/brand/intellivist.png',
  }
}
