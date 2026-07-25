export function formatBlogReadTime(minutes) {
  const value = Number(minutes)
  if (!Number.isFinite(value) || value <= 0) return null
  return `${Math.round(value)} min read`
}

export function getBlogReadTimeLabel(blog = {}) {
  const fromMinutes = formatBlogReadTime(blog.readTimeMinutes)
  if (fromMinutes) return fromMinutes
  if (blog.readTime) return blog.readTime
  return null
}

export function getBlogCardMetaLabel(blog = {}) {
  const parts = [blog.contentType || blog.category || 'Article']
  const readTime = getBlogReadTimeLabel(blog)
  if (readTime) parts.push(readTime)
  return parts.join(' • ')
}
