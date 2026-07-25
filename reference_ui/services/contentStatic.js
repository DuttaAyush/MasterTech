import { staticBlogs, staticReports } from '../data/staticContent'

function parseSearchParams(params = '') {
  const query = params.startsWith('?') ? params.slice(1) : params
  return new URLSearchParams(query)
}

function filterReports(reports, searchParams) {
  let filtered = [...reports]

  const intelligenceAreaId = searchParams.get('intelligenceAreaId')
  if (intelligenceAreaId) {
    filtered = filtered.filter((report) => report.intelligenceAreaId === intelligenceAreaId)
  }

  const subsector = searchParams.get('subsector')
  if (subsector) {
    filtered = filtered.filter((report) => report.subsector === subsector)
  }

  const query = searchParams.get('query')?.trim().toLowerCase()
  if (query) {
    filtered = filtered.filter((report) => {
      const haystack = [
        report.title,
        report.summary,
        report.intelligenceAreaTitle,
        report.subsector,
        report.category,
        report.region,
        ...(report.keywords || []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      return haystack.includes(query)
    })
  }

  return filtered
}

function filterBlogs(blogs, searchParams) {
  let filtered = [...blogs]

  const intelligenceAreaId = searchParams.get('intelligenceAreaId')
  if (intelligenceAreaId) {
    filtered = filtered.filter((blog) => blog.intelligenceAreaId === intelligenceAreaId)
  }

  return filtered
}

export const contentStatic = {
  async getReports(params = '') {
    const searchParams = parseSearchParams(params)
    return { reports: filterReports(staticReports, searchParams) }
  },

  async getReportBySlug(slug) {
    const report = staticReports.find((item) => item.slug === slug) || null
    return { report }
  },

  async getBlogs(params = '') {
    const searchParams = parseSearchParams(params)
    return { blogs: filterBlogs(staticBlogs, searchParams) }
  },

  async getBlogBySlug(slug) {
    const blog = staticBlogs.find((item) => item.slug === slug) || null
    return { blog }
  },
}
