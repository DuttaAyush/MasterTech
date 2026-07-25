const now = new Date().toISOString()

const paragraphBlock = (text) => ({
  type: 'paragraph',
  data: { text },
})

const headerBlock = (text, level = 2) => ({
  type: 'header',
  data: { text, level },
})

export const staticReports = [
  {
    id: 'report-autonomous-systems-2026',
    slug: 'autonomous-systems-market-outlook-2026',
    title: 'Autonomous Systems Market Outlook 2026',
    summary:
      'A strategic assessment of robotics, edge AI, and autonomous mobility adoption across industrial and commercial sectors.',
    seoTitle: 'Autonomous Systems Market Outlook 2026',
    seoDescription:
      'Strategic market intelligence on autonomous systems adoption, investment flows, and competitive positioning through 2026.',
    category: 'MARKET INTELLIGENCE',
    intelligenceAreaId: 'autonomous-systems-intelligence',
    intelligenceAreaTitle: 'Autonomous Systems Intelligence',
    subsector: 'Industrial robotics & automation',
    region: 'Global',
    price: 2499,
    pages: 142,
    featured: true,
    tags: ['Robotics', 'Edge AI', 'Automation'],
    keywords: ['autonomous systems', 'robotics', 'edge ai'],
    coverImage: '',
    publishedAt: now,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'report-energy-transition-2026',
    slug: 'energy-transition-investment-landscape-2026',
    title: 'Energy Transition Investment Landscape 2026',
    summary:
      'Capital allocation trends across renewables, grid modernization, storage, and hydrogen across major economies.',
    category: 'MARKET INTELLIGENCE',
    intelligenceAreaId: 'energy-transition-intelligence',
    intelligenceAreaTitle: 'Energy Transition Intelligence',
    subsector: 'Renewable energy',
    region: 'North America',
    price: 2199,
    pages: 118,
    featured: true,
    tags: ['Renewables', 'Storage', 'Policy'],
    keywords: ['energy transition', 'renewables', 'investment'],
    coverImage: '',
    publishedAt: now,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'report-cyber-ai-2026',
    slug: 'cyber-ai-threat-landscape-2026',
    title: 'Cyber-AI Threat Landscape 2026',
    summary:
      'Enterprise exposure to AI-enabled threats, defensive architecture shifts, and vendor consolidation dynamics.',
    category: 'MARKET INTELLIGENCE',
    intelligenceAreaId: 'cyber-ai-digital-intelligence',
    intelligenceAreaTitle: 'Cyber, AI & Digital Intelligence',
    subsector: 'AI security & governance',
    region: 'Global',
    price: 2799,
    pages: 156,
    featured: false,
    tags: ['Cybersecurity', 'AI Governance', 'Enterprise'],
    keywords: ['cyber ai', 'security', 'digital intelligence'],
    coverImage: '',
    publishedAt: now,
    createdAt: now,
    updatedAt: now,
  },
]

export const staticBlogs = [
  {
    id: 'blog-edge-ai-industrial',
    slug: 'edge-ai-accelerates-industrial-autonomy',
    title: 'Edge AI Accelerates Industrial Autonomy',
    excerpt:
      'How on-device inference and sensor fusion are shortening deployment cycles for autonomous industrial systems.',
    contentType: 'Article',
    category: 'Artificial Intelligence',
    intelligenceAreaId: 'autonomous-systems-intelligence',
    intelligenceAreaTitle: 'Autonomous Systems Intelligence',
    readTimeMinutes: 6,
    coverImage: '',
    content: {
      blocks: [
        headerBlock('Executive Summary'),
        paragraphBlock(
          'Edge AI is reshaping how industrial operators deploy autonomous capabilities without relying on cloud round-trips for every decision.'
        ),
        headerBlock('Key Signals', 3),
        paragraphBlock(
          'Sensor cost curves, model compression, and standardized robotics middleware are converging to make autonomy viable beyond pilot sites.'
        ),
      ],
    },
    publishedAt: now,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'blog-grid-modernization',
    slug: 'grid-modernization-and-storage-economics',
    title: 'Grid Modernization and Storage Economics',
    excerpt:
      'Policy incentives and long-duration storage are changing how utilities plan capacity and resilience investments.',
    contentType: 'Insight',
    category: 'Energy Transition',
    intelligenceAreaId: 'energy-transition-intelligence',
    intelligenceAreaTitle: 'Energy Transition Intelligence',
    readTimeMinutes: 5,
    coverImage: '',
    content: {
      blocks: [
        headerBlock('Why It Matters'),
        paragraphBlock(
          'Utilities are rebalancing capex toward grid-edge intelligence and flexible storage to manage renewable intermittency.'
        ),
      ],
    },
    publishedAt: now,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'blog-ai-security',
    slug: 'ai-security-becomes-board-level-priority',
    title: 'AI Security Becomes a Board-Level Priority',
    excerpt:
      'Governance frameworks and red-teaming practices are moving from experimental programs to enterprise requirements.',
    contentType: 'Article',
    category: 'Cybersecurity',
    intelligenceAreaId: 'cyber-ai-digital-intelligence',
    intelligenceAreaTitle: 'Cyber, AI & Digital Intelligence',
    readTimeMinutes: 7,
    coverImage: '',
    content: {
      blocks: [
        headerBlock('The Shift'),
        paragraphBlock(
          'Boards are asking for measurable AI risk posture as generative and agentic systems enter production workflows.'
        ),
      ],
    },
    publishedAt: now,
    createdAt: now,
    updatedAt: now,
  },
]
