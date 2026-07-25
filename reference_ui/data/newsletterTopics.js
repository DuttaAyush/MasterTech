export const newsletterTopicSections = [
  {
    title: 'Delivery preferences',
    options: ['Weekly newsletter', 'Market alerts', 'Industry-specific insights'],
  },
  {
    title: 'Industry topics',
    options: ['Steel', 'Chemicals', 'Defense', 'Infrastructure'],
  },
]

export const newsletterTopicOptions = newsletterTopicSections.flatMap((section) => section.options)
