export const navData = {
  'Who we are': {
    rail: ['Purpose & Values', 'Expertise Behind Intellivist', 'Contact Us'],
    linksByRail: {
      'Purpose & Values': ['What we believe in', 'Future vision', 'Our mission'],
      'Expertise Behind Intellivist': ['Expertise Behind Intellivist'],
      'Contact Us': ['Contact Us'],
    },
  },
  Intelligence: {
    rail: ['Intelligence Areas'],
    links: [
      'Autonomous Systems Intelligence',
      'Energy Transition Intelligence',
      'Cyber, AI and Digital Infrastructure Intelligence',
      'Mobility and Logistics Intelligence',
      'Aerospace, Defense and Geopolitical Intelligence',
    ],
  },
  'What we do': {
    rail: ['Services', 'Reports'],
    linksByRail: {
      Services: ['Essentials', 'Advanced', 'Premium'],
      Reports: ['Research Reports'],
    },
  },
  Perspectives: {
    rail: ['Blogs'],
    linksByRail: {
      Blogs: ['Blogs'],
    },
  },
  Careers: {
    rail: ['Work with us', 'Open roles'],
    linksByRail: {
      'Work with us': ['Culture', 'Benefits', 'Learning & Growth'],
      'Open roles': ['Search jobs'],
    },
  },
  'Get in touch': {
    rail: ['Contact us', 'Newsletter', 'Expert Network'],
    linksByRail: {
      'Contact us': ['Contact us'],
      Newsletter: ['Newsletter'],
      'Expert Network': ['Expert Network'],
    },
  },
}

export const featureContent = {
  title: 'Featured',
  heading: 'Trusted Research. Better Decisions.',
  cta: 'Explore Products →',
  ctaHref: '/reports',
  image: '/images/brand/nav.avif',
  imageAlt: 'Intellivist research and intelligence',
}

export const primaryNavItems = Object.keys(navData)


