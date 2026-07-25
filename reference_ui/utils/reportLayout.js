function stripHtml(value) {
  return String(value || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

function slugify(value) {
  return stripHtml(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function resolveHeadingAnchorId(blockOrData, index = 0) {
  const block = blockOrData?.data !== undefined ? blockOrData : null
  const data = block?.data || blockOrData || {}
  const blockId = String(block?.id || '').trim()

  if (blockId) {
    return `heading-${blockId}`
  }

  const title = stripHtml(data.text)
  return `heading-${slugify(title) || index}`
}

export function createEmptyEditorContent() {
  return {
    time: Date.now(),
    version: '2.29.1',
    blocks: [],
  }
}

export function normalizeReportContent(content) {
  const base = content && typeof content === 'object' && !Array.isArray(content)
    ? content
    : createEmptyEditorContent()

  return {
    time: base.time || Date.now(),
    version: base.version || '2.29.1',
    blocks: Array.isArray(base.blocks) ? base.blocks : [],
  }
}

function getHeadingMetaFromBlock(block, index) {
  const data = block?.data || {}
  if (block?.type !== 'styledText' || data.variant !== 'h1') return null

  const title = stripHtml(data.text)
  if (!title) return null

  return {
    id: resolveHeadingAnchorId(block, index),
    title,
    includeInTab: Boolean(data.includeInTab),
    includeInCoverage: Boolean(data.includeInCoverage),
    tabLabel: stripHtml(data.tabLabel || title),
    coverageLabel: stripHtml(data.coverageLabel || title),
  }
}

export function extractHeadingMeta(content) {
  return normalizeReportContent(content).blocks
    .map((block, index) => getHeadingMetaFromBlock(block, index))
    .filter(Boolean)
}

export function buildReportSections(report) {
  const headingMeta = extractHeadingMeta(report?.content)
  return headingMeta
    .filter((item) => item.includeInTab)
    .map((item) => ({
      id: item.id,
      title: item.tabLabel,
      visible: true,
    }))
    .filter((item) => item.visible)
}

export function buildCoverageItems(content) {
  return extractHeadingMeta(content)
    .filter((item) => item.includeInCoverage)
    .map((item) => ({
      id: item.id,
      title: item.coverageLabel,
    }))
}
