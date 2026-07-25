import { SEO } from '../config/seo'

const trimSlash = (value) => String(value || '').replace(/\/+$/, '')

export function getSiteOrigin() {
  if (SEO.siteUrl) return SEO.siteUrl
  if (typeof window !== 'undefined' && window.location?.origin) {
    return trimSlash(window.location.origin)
  }
  return ''
}

export function buildAbsoluteUrl(pathOrUrl = '/') {
  if (!pathOrUrl) return getSiteOrigin() || '/'
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl

  const origin = getSiteOrigin()
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`
  return origin ? `${origin}${path}` : path
}

export function resolveSeoImage(image) {
  if (!image) return buildAbsoluteUrl(SEO.defaultImage)

  if (/^https?:\/\//i.test(image)) return image

  if (image.startsWith('/uploads')) {
    return buildAbsoluteUrl(image)
  }

  return buildAbsoluteUrl(image)
}

export function truncateDescription(value, maxLength = 160) {
  const text = String(value || '').replace(/\s+/g, ' ').trim()
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength - 1).trim()}…`
}

export function buildOrganizationJsonLd() {
  const origin = getSiteOrigin()
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SEO.siteName,
    url: origin || undefined,
    logo: buildAbsoluteUrl(SEO.defaultImage),
    email: SEO.contactEmail,
  }
}

export function buildWebsiteJsonLd() {
  const origin = getSiteOrigin()
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SEO.siteName,
    url: origin || undefined,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${origin}/reports?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function buildBreadcrumbJsonLd(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: buildAbsoluteUrl(item.path),
    })),
  }
}

export function buildArticleJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName = SEO.siteName,
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: [resolveSeoImage(image)],
    datePublished: datePublished || undefined,
    dateModified: dateModified || datePublished || undefined,
    author: {
      '@type': 'Organization',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: SEO.siteName,
      logo: {
        '@type': 'ImageObject',
        url: buildAbsoluteUrl(SEO.defaultImage),
      },
    },
    mainEntityOfPage: buildAbsoluteUrl(url),
  }
}

export function buildProductJsonLd({
  title,
  description,
  url,
  image,
  price,
  currency = 'USD',
  sku,
}) {
  const product = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: title,
    description,
    image: [resolveSeoImage(image)],
    brand: {
      '@type': 'Brand',
      name: SEO.siteName,
    },
    url: buildAbsoluteUrl(url),
  }

  if (sku) product.sku = sku

  if (Number.isFinite(Number(price)) && Number(price) > 0) {
    product.offers = {
      '@type': 'Offer',
      priceCurrency: currency,
      price: Number(price).toFixed(2),
      availability: 'https://schema.org/InStock',
      url: buildAbsoluteUrl(url),
    }
  }

  return product
}

export function normalizeJsonLd(jsonLd) {
  if (!jsonLd) return []
  return Array.isArray(jsonLd) ? jsonLd : [jsonLd]
}
