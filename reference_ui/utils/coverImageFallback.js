export const PUBLIC_COVER_FALLBACKS = [
  '/images/fallbacks/analytics.jpg',
  '/images/fallbacks/security.jpg',
  '/images/fallbacks/business.jpg',
  '/images/fallbacks/workspace.jpg',
]

export function optimizeRemoteImageUrl(url) {
  if (!url || typeof url !== 'string') return url
  if (url.startsWith('/')) return url

  if (url.includes('images.unsplash.com')) {
    return url
      .replace(/([?&]w=)\d+/i, '$1640')
      .replace(/([?&]q=)\d+/i, '$175')
      .replace(/w=\d+/i, 'w=640')
      .replace(/q=\d+/i, 'q=75')
  }

  return url
}

export function getPublicCoverFallback(id, index = 0) {
  const numericId = Number.parseInt(String(id || '').replace(/\D/g, ''), 10)
  const safeIndex = Number.isFinite(numericId) ? numericId + index : index
  return PUBLIC_COVER_FALLBACKS[safeIndex % PUBLIC_COVER_FALLBACKS.length]
}

export function resolveCoverImage({ coverImage, heroImage, id, index = 0 } = {}) {
  if (coverImage) return optimizeRemoteImageUrl(coverImage)
  if (heroImage) return optimizeRemoteImageUrl(heroImage)
  return getPublicCoverFallback(id, index)
}
