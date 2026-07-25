import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EditorJsRenderer from '../editor/EditorJsRenderer'
import { scrollToSection, useScrollSpy } from '../../hooks/useScrollSpy'
import { buildCoverageItems, buildReportSections, normalizeReportContent } from '../../utils/reportLayout'
import '../../pages/ReportDetailsPage.css'

function ReportPreviewSurface({ report, previewMode = false, onPrimaryAction }) {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('')
  const [activeCoverage, setActiveCoverage] = useState(null)
  const publishDate = report.publishDate
    || report.publishedAt
    || (report.publishedMonth ? `${report.publishedMonth}-01T00:00:00.000Z` : null)
    || report.createdAt
    || new Date().toISOString()
  const content = useMemo(() => normalizeReportContent(report.content), [report.content])
  const reportSections = useMemo(() => buildReportSections(report), [report])
  const coverageItems = useMemo(() => buildCoverageItems(report.content), [report.content])
  const tabSectionIds = useMemo(() => reportSections.map((section) => section.id), [reportSections])
  const coverageSectionIds = useMemo(() => coverageItems.map((item) => item.id), [coverageItems])
  const hasSummary = Boolean(report?.summary)
  const hasContent = Boolean(content.blocks.length)

  useEffect(() => {
    if (!reportSections.length) {
      setActiveTab('')
      return
    }

    if (!reportSections.some((section) => section.id === activeTab)) {
      setActiveTab(reportSections[0].id)
    }
  }, [reportSections, activeTab])

  useScrollSpy(tabSectionIds, setActiveTab, { enabled: tabSectionIds.length > 0 })
  useScrollSpy(coverageSectionIds, setActiveCoverage, { enabled: coverageSectionIds.length > 0 })

  const jumpToSection = (sectionId, source) => {
    if (!scrollToSection(sectionId)) return
    if (source === 'tab') setActiveTab(sectionId)
    else if (source === 'coverage') setActiveCoverage(sectionId)
  }

  return (
    <main className={`report-details-page-wrapper ${previewMode ? 'report-details-page-wrapper--preview' : ''}`}>
      <section className="report-details-hero" aria-label="Report Hero">
        <div className="report-details-hero-content">
          <p className="auth-popup__brand-name" style={{ marginBottom: '16px' }}>Preview</p>
          <h1>{report.title || 'Untitled report'}</h1>

          <div className="report-details-meta-row">
            <div className="report-meta-block">
              <span className="meta-label">Status</span>
              <span className="meta-value">{report.status || 'Draft'}</span>
            </div>
            <div className="report-meta-block">
              <span className="meta-label">Published</span>
              <span className="meta-value">{new Date(publishDate).toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}</span>
            </div>
            <div className="report-meta-block">
              <span className="meta-label">Coverage</span>
              <span className="meta-value">{report.region || 'Global'}</span>
            </div>
            <div className="report-meta-block">
              <span className="meta-label">Intelligence area</span>
              <span className="meta-value">{report.intelligenceAreaTitle || 'Cross-sector'}</span>
            </div>
          </div>

          <div className="report-hero-actions">
            <button type="button" className="btn-action btn-primary" onClick={onPrimaryAction}>
              Secure Purchase
            </button>
            <button type="button" onClick={() => navigate('/contact-us')} className="btn-action btn-outline">
              Request Customization
            </button>
            <button type="button" onClick={() => navigate('/contact-us')} className="btn-action btn-outline">
              Speak to Analyst
            </button>
          </div>
        </div>
      </section>

      {reportSections.length > 0 ? (
        <nav className="report-details-sticky-tabs" aria-label="Report Sections Navigation">
          <div className="report-details-tabs-inner">
            {reportSections.map((section) => (
              <button
                key={section.id}
                type="button"
                className={`report-tab-btn ${activeTab === section.id ? 'active' : ''}`.trim()}
                onClick={() => jumpToSection(section.id, 'tab')}
              >
                {section.title.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      ) : null}

      <section className="report-details-content-section">
        <div className="report-details-layout">
          <div className="report-details-left-pane">
            <article className="report-main-article">
              {report.brief ? (
                <div className="report-details-section-block">
                  <h3>Brief</h3>
                  <p>{report.brief}</p>
                </div>
              ) : null}

              {hasSummary ? (
                <div className="report-details-section-block">
                  <h3>Description</h3>
                  <p>{report.summary}</p>
                </div>
              ) : null}

              {hasContent ? (
                <div className={`report-details-section-block ${hasSummary ? '' : 'report-details-section-block--content-only'}`.trim()}>
                  <EditorJsRenderer content={content} />
                </div>
              ) : null}
            </article>
          </div>

          <aside className="report-details-right-pane">
            <div className="report-sidebar-card report-sidebar-card--coverage">
              <h3>Report Coverage</h3>
              <div className="report-coverage-list">
                {coverageItems.map((item, index) => {
                  const isActive = activeCoverage === item.id

                  return (
                    <button
                      key={`${item.title}-${index}`}
                      type="button"
                      className={`report-coverage-link ${isActive ? 'is-active' : ''}`.trim()}
                      onClick={() => jumpToSection(item.id, 'coverage')}
                    >
                      <span>&raquo;</span>
                      <strong>{item.title}</strong>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="report-license-card report-license-card--compact">
              <div className="license-info-block">
                <div className="license-info-header">
                  <span className="license-info-price">${(report.price || 0).toLocaleString()}</span>
                </div>
                <div className="license-info-features">
                  <span>PDF + PPTX + XLSX delivery</span>
                  <span>Analyst support</span>
                  <span>Strategic dataset coverage</span>
                </div>
              </div>
              <button type="button" className="license-buy-btn" onClick={onPrimaryAction}>
                Secure Purchase
              </button>
              <button type="button" onClick={() => navigate('/contact-us')} className="license-ghost-btn">
                Speak to Specialist
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default ReportPreviewSurface
