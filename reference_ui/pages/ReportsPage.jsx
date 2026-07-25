import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import ReportCard from '../components/common/ReportCard'
import FilterSidebar from '../components/common/FilterSidebar'
import SectionHeader from '../components/common/SectionHeader'
import EmptyState from '../components/common/EmptyState'
import Seo from '../components/common/Seo'
import { pageSeo } from '../config/seo'
import { contentStatic } from '../services/contentStatic'
import './ReportsPage.css'

function ReportsPage() {
  const [reports, setReports] = useState([])
  const [values, setValues] = useState({})
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()
  const searchInputRef = useRef(null)
  const perPage = 15

  useEffect(() => {
    const nextValues = {}
    if (searchParams.get('intelligenceArea')) nextValues['Intelligence Area'] = searchParams.get('intelligenceArea')
    if (searchParams.get('subsector')) nextValues.Subsector = searchParams.get('subsector')
    if (searchParams.get('query')) setQuery(searchParams.get('query') || '')
    setValues(nextValues)
    setPage(1)
  }, [searchParams])

  useEffect(() => {
    const params = new URLSearchParams()
    if (searchParams.get('intelligenceArea')) params.set('intelligenceAreaId', searchParams.get('intelligenceArea'))
    if (searchParams.get('subsector')) params.set('subsector', searchParams.get('subsector'))
    if (searchParams.get('query')) params.set('query', searchParams.get('query'))

    contentStatic.getReports(params.toString() ? `?${params.toString()}` : '')
      .then((data) => {
        if (data.reports?.length) {
          setReports(data.reports.map((report) => ({
            ...report,
            publishDate: report.publishedAt || report.createdAt,
          })))
        }
      })
      .catch(() => {})
  }, [searchParams])

  const filters = useMemo(() => ({
    'Intelligence Area': [...new Map(
      reports
        .filter((item) => item.intelligenceAreaId && item.intelligenceAreaTitle)
        .map((item) => [item.intelligenceAreaId, { label: item.intelligenceAreaTitle, value: item.intelligenceAreaId }])
    ).values()],
    Subsector: [...new Set(reports.map((item) => item.subsector).filter(Boolean))],
    Region: [...new Set(reports.map((item) => item.region).filter(Boolean))],
    'Published Year': [...new Set(reports.map((item) => String(new Date(item.publishDate).getFullYear())))]
  }), [reports])
  const filtered = useMemo(() => reports.filter((report) => {
    if (values['Intelligence Area'] && report.intelligenceAreaId !== values['Intelligence Area']) return false
    if (values.Subsector && report.subsector !== values.Subsector) return false
    if (values.Region && report.region !== values.Region) return false
    if (values['Published Year'] && String(new Date(report.publishDate).getFullYear()) !== values['Published Year']) return false
    if (values.Featured && !report.featured) return false
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      const haystack = [
        report.title,
        report.summary,
        report.intelligenceAreaTitle,
        report.subsector,
        report.category,
        report.region,
        ...(report.keywords || [])
      ].join(' ').toLowerCase()
      if (!haystack.includes(q)) return false
    }
    return true
  }), [reports, values, query])

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
  const safePage = Math.min(page, totalPages)
  const paginated = useMemo(() => {
    const start = (safePage - 1) * perPage
    return filtered.slice(start, start + perPage)
  }, [filtered, safePage])

  return (
    <main className="reports-page-wrapper">
      <Seo {...pageSeo('reports')} />
      <section className="iv-section">
        <SectionHeader title="Research Reports" subtitle="Explore downloadable market research across priority sectors and regions." />
        <div className="reports-toolbar">
          <div className="reports-search-wrap">
            <input
              ref={searchInputRef}
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value)
                setPage(1)
              }}
              className="reports-search-input"
              placeholder="Search all reports..."
              aria-label="Search all reports"
            />
            <button
              type="button"
              className="reports-search-icon"
              aria-label="Search reports"
              onClick={() => {
                setPage(1)
                searchInputRef.current?.focus()
              }}
            >
              <Search size={18} />
            </button>
          </div>
          <p className="reports-count">{filtered.length} report(s) found</p>
        </div>
        <div className="iv-layout">
          <div className="report-page-sidebar">
            <FilterSidebar
              filters={filters}
              values={values}
              onChange={(name, value) => {
                const nextValues = { ...values, [name]: value }
                setValues(nextValues)
                const nextParams = new URLSearchParams(searchParams)
                if (name === 'Intelligence Area') {
                  if (value) nextParams.set('intelligenceArea', value)
                  else nextParams.delete('intelligenceArea')
                  nextParams.delete('subsector')
                  nextValues.Subsector = ''
                } else if (name === 'Subsector') {
                  if (value) nextParams.set('subsector', value)
                  else nextParams.delete('subsector')
                }
                setSearchParams(nextParams)
                setPage(1)
              }}
            />
          </div>
          <div className="iv-grid">
            {paginated.length ? (
              paginated.map((report) => <ReportCard key={report.id} report={report} />)
            ) : (
              <EmptyState title="No reports found" message="Adjust filters to broaden your results." />
            )}
          </div>
        </div>
        {filtered.length > 0 && (
          <nav className="reports-pagination" aria-label="Reports pagination">
            <button type="button" onClick={() => setPage((prev) => Math.max(1, prev - 1))} disabled={safePage === 1}>
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                type="button"
                key={p}
                onClick={() => setPage(p)}
                className={p === safePage ? 'active' : ''}
              >
                {p}
              </button>
            ))}
            <button type="button" onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))} disabled={safePage === totalPages}>
              Next
            </button>
          </nav>
        )}
      </section>
    </main>
  )
}

export default ReportsPage
