import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SEO } from '../../config/seo'
import {
  buildAbsoluteUrl,
  normalizeJsonLd,
  resolveSeoImage,
  truncateDescription,
} from '../../utils/seo'

function removeDuplicateTags(selector) {
  const tags = document.head.querySelectorAll(selector)
  tags.forEach((tag, index) => {
    if (index > 0) tag.remove()
  })
}

function upsertMeta({ key, attr, value }) {
  if (!value) return

  removeDuplicateTags(`meta[${attr}="${key}"]`)

  let tag = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    tag.setAttribute('data-seo-managed', 'true')
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', value)
}

function upsertLink(rel, href) {
  if (!href) return

  removeDuplicateTags(`link[rel="${rel}"]`)

  let tag = document.head.querySelector(`link[rel="${rel}"]`)
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    tag.setAttribute('data-seo-managed', 'true')
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

function upsertJsonLd(jsonLdList) {
  document.head.querySelectorAll('script[data-seo-jsonld="true"]').forEach((node) => node.remove())

  jsonLdList.forEach((payload, index) => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-seo-jsonld', 'true')
    script.setAttribute('data-seo-managed', 'true')
    script.setAttribute('data-seo-jsonld-index', String(index))
    script.text = JSON.stringify(payload)
    document.head.appendChild(script)
  })
}

function Seo({
  title,
  description,
  canonical,
  image,
  ogType = 'website',
  noindex = false,
  keywords,
  publishedTime,
  modifiedTime,
  author,
  jsonLd,
}) {
  const location = useLocation()
  const canonicalPath = canonical || location.pathname
  const pageTitle = title || SEO.defaultTitle
  const pageDescription = truncateDescription(description || SEO.defaultDescription)
  const canonicalUrl = buildAbsoluteUrl(canonicalPath)
  const pageUrl = buildAbsoluteUrl(location.pathname)
  const ogImage = resolveSeoImage(image)
  const robotsValue = noindex ? 'noindex, nofollow' : 'index, follow'

  useEffect(() => {
    document.title = pageTitle

    upsertMeta({ key: 'description', attr: 'name', value: pageDescription })
    upsertMeta({ key: 'robots', attr: 'name', value: robotsValue })
    if (keywords) {
      upsertMeta({ key: 'keywords', attr: 'name', value: keywords })
    }

    upsertMeta({ key: 'og:title', attr: 'property', value: pageTitle })
    upsertMeta({ key: 'og:description', attr: 'property', value: pageDescription })
    upsertMeta({ key: 'og:type', attr: 'property', value: ogType })
    upsertMeta({ key: 'og:url', attr: 'property', value: pageUrl })
    upsertMeta({ key: 'og:site_name', attr: 'property', value: SEO.siteName })
    upsertMeta({ key: 'og:locale', attr: 'property', value: SEO.locale })
    upsertMeta({ key: 'og:image', attr: 'property', value: ogImage })
    upsertMeta({ key: 'og:image:alt', attr: 'property', value: pageTitle })

    upsertMeta({ key: 'twitter:card', attr: 'name', value: 'summary_large_image' })
    upsertMeta({ key: 'twitter:title', attr: 'name', value: pageTitle })
    upsertMeta({ key: 'twitter:description', attr: 'name', value: pageDescription })
    upsertMeta({ key: 'twitter:image', attr: 'name', value: ogImage })
    if (SEO.twitterHandle) {
      upsertMeta({ key: 'twitter:site', attr: 'name', value: SEO.twitterHandle })
    }

    if (publishedTime) {
      upsertMeta({ key: 'article:published_time', attr: 'property', value: publishedTime })
    }
    if (modifiedTime) {
      upsertMeta({ key: 'article:modified_time', attr: 'property', value: modifiedTime })
    }
    if (author) {
      upsertMeta({ key: 'article:author', attr: 'property', value: author })
    }

    upsertLink('canonical', canonicalUrl)
    upsertJsonLd(normalizeJsonLd(jsonLd))
  }, [
    author,
    canonicalUrl,
    jsonLd,
    keywords,
    modifiedTime,
    ogImage,
    ogType,
    pageDescription,
    pageTitle,
    pageUrl,
    publishedTime,
    robotsValue,
  ])

  return null
}

export default Seo
