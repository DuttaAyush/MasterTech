import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { contentStatic } from '../../../services/contentStatic'
import { resolveCoverImage } from '../../../utils/coverImageFallback'
import { scheduleIdleWork } from '../../../utils/scheduleIdle'
import './LatestReportsSection.css'

function getCategoryClass(category) {
  const normalized = String(category || '').toLowerCase()
  if (normalized === 'investment landscape') return 'latest-report-kicker--investment'
  if (normalized === 'market intelligence') return 'latest-report-kicker--intelligence'
  return ''
}

const HOMEPAGE_REPORT_COUNT = 4

function normalizeReports(reports = []) {
  return reports
    .slice(0, HOMEPAGE_REPORT_COUNT)
    .map((report, index) => ({
      ...report,
      publishDate: report.publishDate || report.publishedAt || report.createdAt,
      coverImage: resolveCoverImage({ coverImage: report.coverImage, id: report.id, index }),
    }))
}

function LatestReportsSection() {
  const [reports, setReports] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const cancel = scheduleIdleWork(() => {
      contentStatic.getReports()
        .then((data) => {
          if (data.reports?.length) {
            setReports(normalizeReports(data.reports))
          }
        })
        .catch(() => undefined)
        .finally(() => setLoaded(true))
    })

    return cancel
  }, [])

  const visibleReports = useMemo(() => reports.slice(0, HOMEPAGE_REPORT_COUNT), [reports])

  if (loaded && !visibleReports.length) return null

  return (
    <section className="latest-reports-section" aria-labelledby="latest-reports-heading">
      <div className="latest-reports-shell">
        <div className="latest-reports-head">
          <h2 id="latest-reports-heading">Latest Strategic Briefs</h2>
          <Link to="/reports" className="latest-reports-view-all">
            View all reports
          </Link>
        </div>

        <div className="latest-reports-grid">
          {!loaded
            ? Array.from({ length: HOMEPAGE_REPORT_COUNT }, (_, index) => (
                <article key={`latest-report-skeleton-${index}`} className="latest-report-card latest-report-card--skeleton" aria-hidden="true" />
              ))
            : visibleReports.map((report) => (
                <article key={report.id} className="latest-report-card">
                  <div className="latest-report-meta-row">
                    <span className={`latest-report-kicker ${getCategoryClass(report.category)}`.trim()}>{report.category}</span>
                    <span className="latest-report-read">{report.pages} pages</span>
                  </div>

                  <h3>{report.title}</h3>
                  <p>{report.summary}</p>

                  <Link to={`/reports/${report.slug}`} className="latest-report-link">
                    Explore Briefs
                  </Link>

                  <div className="latest-report-image-wrap">
                    <img src={report.coverImage} alt={report.title} loading="lazy" decoding="async" />
                  </div>
                </article>
              ))}
        </div>
      </div>
    </section>
  )
}

export default LatestReportsSection
