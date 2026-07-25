export function normalizeStyledTextVariant(variant) {
  if (!variant || variant === 'paragraph' || variant === 'h4') return 'paragraph'
  if (/^h[1-3]$/.test(variant)) return variant
  return 'paragraph'
}

export function resolveStyledTextTag(variant) {
  const normalized = normalizeStyledTextVariant(variant)
  return normalized === 'paragraph' ? 'p' : normalized
}

export function getStyledTextClassName(variant) {
  return `editor-styled-text editor-styled-text--${normalizeStyledTextVariant(variant)}`
}

export function getStyledTextLineHeight(variant) {
  const normalized = normalizeStyledTextVariant(variant)
  const lineHeightByVariant = {
    h1: 1.15,
    h2: 1.22,
    h3: 1.3,
    paragraph: 1.88,
  }
  return lineHeightByVariant[normalized] || 1.88
}

export function getStyledTextDefaults(variant) {
  if (normalizeStyledTextVariant(variant) === 'paragraph') {
    return { color: '#223046', fontSize: 18, fontWeight: 400 }
  }

  return { color: '#102e69', fontSize: 18, fontWeight: 400 }
}

export function resolveStyledTextColor(variant, color) {
  if (color) return color
  return getStyledTextDefaults(variant).color
}

export function resolveStyledTextFontWeight(variant, data = {}) {
  if (data.bold) return 700

  const weight = Number(data.fontWeight)
  const normalized = normalizeStyledTextVariant(variant)

  if ([300, 400, 500, 600].includes(weight)) return weight
  return 400
}

export function getStyledTextInlineStyle(data = {}) {
  const variant = normalizeStyledTextVariant(data.variant)
  const defaults = getStyledTextDefaults(variant)
  const hasBg = data.background && data.background !== '#ffffff'

  const style = {
    textAlign: data.align || 'left',
    color: resolveStyledTextColor(variant, data.color),
    fontSize: `${Number(data.fontSize) || defaults.fontSize}px`,
    fontWeight: resolveStyledTextFontWeight(variant, data),
    fontVariationSettings: 'normal',
    background: hasBg ? data.background : 'transparent',
    padding: hasBg ? '12px 14px' : undefined,
    borderRadius: hasBg ? '0' : undefined,
  }

  return style
}

const BLANK_LINE_GAP = '<span class="editor-styled-text__gap" aria-hidden="true"></span>'

export function formatStyledTextLineBreaks(text) {
  if (!text) return ''

  const lines = String(text).replace(/\r\n/g, '\n').split('\n')
  let result = ''

  lines.forEach((line, index) => {
    if (!line.replace(/<[^>]*>/g, '').trim()) {
      result += BLANK_LINE_GAP
      return
    }

    if (!result) {
      result = line
      return
    }

    if (!lines[index - 1].replace(/<[^>]*>/g, '').trim()) {
      result += line
      return
    }

    result += `\n${line}`
  })

  return result
}
