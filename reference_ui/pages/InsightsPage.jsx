import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '../components/common/Seo'
import EditorJsRenderer from '../components/editor/EditorJsRenderer'
import { scrollToSection, useScrollSpy } from '../hooks/useScrollSpy'
import { contentStatic } from '../services/contentStatic'
import { buildCoverageItems } from '../utils/reportLayout'
import { formatBlogReadTime } from '../utils/blogFormat'
import { resolveCoverImage } from '../utils/coverImageFallback'
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  truncateDescription,
} from '../utils/seo'
import './InsightsPage.css'

function formatPublishedDate(value) {
  if (!value) return 'Forthcoming'

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'Forthcoming'

  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

function InsightsPage() {
  const { slug } = useParams()
  const [apiBlog, setApiBlog] = useState(null)
  const [apiLoaded, setApiLoaded] = useState(false)
  const [relatedBlogs, setRelatedBlogs] = useState([])
  const [relatedReports, setRelatedReports] = useState([])
  const [activeCoverage, setActiveCoverage] = useState(null)

  useEffect(() => {
    if (!slug) return undefined

    setApiLoaded(false)
    contentStatic.getBlogBySlug(slug)
      .then((data) => setApiBlog(data.blog || null))
      .catch(() => setApiBlog(null))
      .finally(() => setApiLoaded(true))

    return undefined
  }, [slug])

  const article = apiBlog
  const title = article?.seoTitle || article?.title || 'Blog'
  const description = truncateDescription(
    article?.seoDescription || article?.excerpt || article?.summary || 'Strategic thinking and executive analysis from Intellivist.',
  )
  const coverImage = article
    ? resolveCoverImage({ coverImage: article.coverImage, heroImage: article.heroImage, id: article.id })
    : null
  const themes = article?.themes?.length ? article.themes : article?.tags || []
  const services = article?.services || []
  const relatedReportsPath = article?.intelligenceAreaId
    ? `/reports?intelligenceArea=${encodeURIComponent(article.intelligenceAreaId)}`
    : '/reports'
  const getReportCoverImage = (report, index) => resolveCoverImage({
    coverImage: report.coverImage,
    id: report.id,
    index,
  })

  const getBlogCoverImage = (blog, index) => resolveCoverImage({
    coverImage: blog.coverImage,
    heroImage: blog.heroImage,
    id: blog.id,
    index,
  })

  const coverageItems = useMemo(() => buildCoverageItems(article?.content), [article?.content])
  const coverageSectionIds = useMemo(
    () => coverageItems.map((item) => item.id),
    [coverageItems]
  )

  useScrollSpy(coverageSectionIds, setActiveCoverage, { enabled: apiLoaded && Boolean(article?.content) })

  useEffect(() => {
    if (!article?.intelligenceAreaId) {
      setRelatedBlogs([])
      setRelatedReports([])
      return undefined
    }

    const encodedAreaId = encodeURIComponent(article.intelligenceAreaId)

    Promise.allSettled([
      contentStatic.getBlogs(`?intelligenceAreaId=${encodedAreaId}`),
      contentStatic.getReports(`?intelligenceAreaId=${encodedAreaId}`),
    ]).then(([blogsResult, reportsResult]) => {
      const nextBlogs = blogsResult.status === 'fulfilled' ? blogsResult.value.blogs || [] : []
      const nextReports = reportsResult.status === 'fulfilled' ? reportsResult.value.reports || [] : []

      setRelatedBlogs(
        nextBlogs
          .filter((item) => item.slug !== article.slug)
          .sort((a, b) => new Date(b.publishedAt || b.createdAt || 0) - new Date(a.publishedAt || a.createdAt || 0))
          .slice(0, 3)
      )

      setRelatedReports(
        nextReports
          .sort((a, b) => new Date(b.publishedAt || b.createdAt || 0) - new Date(a.publishedAt || a.createdAt || 0))
          .slice(0, 2)
      )
    })

    return undefined
  }, [article?.intelligenceAreaId, article?.slug])

  if (!slug) {
    return <Navigate to="/blogs" replace />
  }

  if (!article && apiLoaded) {
    return (
      <>
        <Seo
          title="Blog Not Found | Intellivist"
          description="The requested insight article could not be found."
          canonical={`/blogs/${slug}`}
          noindex
        />
        <main className="insights-page-shell">
          <section className="insights-not-found">
            <h1>Blog not found</h1>
            <p>The blog you are looking for is not available right now.</p>
            <Link to="/blogs" className="insights-directory-link">Go back to blogs</Link>
          </section>
        </main>
      </>
    )
  }

  if (!article) {
    return (
      <>
        <Seo
          title="Loading Insight | Intellivist"
          description="Loading strategic insight article."
          canonical={`/blogs/${slug}`}
        />
        <main className="insights-page-shell">
          <section className="insights-not-found">
            <h1>Loading blog...</h1>
          </section>
        </main>
      </>
    )
  }

  return (
    <main className="insights-page-shell">
      <Seo
        title={`${title} | Intellivist Insights`}
        description={description}
        canonical={`/blogs/${article.slug}`}
        image={coverImage}
        ogType="article"
        publishedTime={article.publishedAt || article.createdAt}
        modifiedTime={article.updatedAt}
        author="Intellivist"
        jsonLd={[
          buildArticleJsonLd({
            title: article.title,
            description,
            url: `/blogs/${article.slug}`,
            image: coverImage,
            datePublished: article.publishedAt || article.createdAt,
            dateModified: article.updatedAt,
          }),
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/blogs' },
            { name: article.title, path: `/blogs/${article.slug}` },
          ]),
        ]}
      />

      <section className="insights-hero">
        <div className="insights-hero__inner">
          <div className="insights-hero__badges">
            {article.contentType ? <span>{article.contentType}</span> : null}
            {article.intelligenceAreaTitle ? <span>{article.intelligenceAreaTitle}</span> : null}
          </div>

          <h1>{title}</h1>
          <p className="insights-hero__summary">{description}</p>
        </div>
      </section>

      <section className="insights-body">
        <div className="insights-body__grid">
          <article className="insights-article-card">
            <div className="insights-taxonomy-strip">
              <div className="insights-taxonomy-item">
                <span>Intelligence Area</span>
                <strong>{article.intelligenceAreaTitle || article.category || 'Editorial Intelligence'}</strong>
              </div>
              <div className="insights-taxonomy-item">
                <span>Content Type</span>
                <strong>{article.contentType || 'Article'}</strong>
              </div>
              <div className="insights-taxonomy-item">
                <span>Geography</span>
                <strong>{article.geography || 'Global'}</strong>
              </div>
              <div className="insights-taxonomy-item">
                <span>Published on</span>
                <strong>{formatPublishedDate(article.publishedAt || article.createdAt)}</strong>
              </div>
            </div>

            <div className="insights-editor-copy">
              {apiBlog?.content ? (
                <EditorJsRenderer content={apiBlog.content} />
              ) : (
                article.contentSections?.map((section) => (
                  <article key={section.heading} className="insights-fallback-section">
                    <h2>{section.heading}</h2>
                    <p>{section.body}</p>
                  </article>
                ))
              )}
            </div>

            <section className="insights-inline-assets">
              <div className="insights-inline-assets__head">
                <div>
                  <p className="insights-sidebar-card__eyebrow">Research assets</p>
                  <h3>Relevant reports</h3>
                </div>
                <Link to={relatedReportsPath} className="insights-inline-assets__view-all">
                  View all
                </Link>
              </div>
              <div className="insights-inline-assets__grid">
                {relatedReports.length ? relatedReports.map((report, index) => (
                  <Link key={report.id} to={`/reports/${report.slug}`} className="insights-report-card">
                    <span>{report.intelligenceAreaTitle || report.category || 'Strategic Brief'}</span>
                    <h3>{report.title}</h3>
                    <p>{report.summary}</p>
                    <strong>{report.pages || 0} pages</strong>
                    <div className="insights-report-card__image-wrap">
                      <img
                        src={getReportCoverImage(report, index)}
                        alt={report.title}
                        loading="lazy"
                      />
                    </div>
                  </Link>
                )) : (
                  <div className="insights-inline-assets__empty">
                    Related reports for this intelligence area will appear here.
                  </div>
                )}
              </div>
            </section>
          </article>

          <aside className="insights-sidebar">
            <section className="insights-sidebar-card insights-sidebar-card--coverage">
              <p className="insights-sidebar-card__eyebrow">Coverage</p>
              <div className="insights-coverage-list">
                {coverageItems.length ? coverageItems.map((item, index) => (
                  <button
                    key={`${item.id}-${index}`}
                    type="button"
                    className={`insights-coverage-link ${activeCoverage === item.id ? 'is-active' : ''}`.trim()}
                    onClick={() => {
                      if (scrollToSection(item.id)) setActiveCoverage(item.id)
                    }}
                  >
                    <span>&raquo;</span>
                    <strong>{item.title}</strong>
                  </button>
                )) : (
                  <p className="insights-coverage-empty">Map headings to coverage in the blog editor to populate this list.</p>
                )}
              </div>
            </section>

            <section className="insights-sidebar-card">
              <p className="insights-sidebar-card__eyebrow">Themes</p>
              <div className="insights-service-list">
                {themes.length ? themes.map((theme) => (
                  <span key={theme} className="insights-service-link">{theme}</span>
                )) : <span className="insights-service-link">Strategic intelligence</span>}
              </div>
            </section>

            <section className="insights-sidebar-card">
              <p className="insights-sidebar-card__eyebrow">Services</p>
              <div className="insights-service-list">
                {services.length ? services.map((service) => (
                  <Link key={service} to="/services" className="insights-service-link">{service}</Link>
                )) : <span className="insights-service-link">Strategic advisory</span>}
              </div>
            </section>
          </aside>
        </div>
      </section>

      {relatedBlogs.length ? (
        <section className="insights-related-section">
          <div className="insights-related-section__inner">
            <div className="insights-related-section__head">
              <p>Same intelligence area</p>
              <h2>Related blogs worth exploring next</h2>
            </div>

            <div className="insights-related-blogs-grid">
              {relatedBlogs.map((blog, index) => (
                <Link key={blog.id} to={`/blogs/${blog.slug}`} className="insights-related-blog-card">
                  <img src={getBlogCoverImage(blog, index)} alt={blog.title} loading="lazy" />
                  <div className="insights-related-blog-card__overlay" />
                  <p className="insights-related-blog-card__meta">
                    {[blog.contentType || 'Article', formatBlogReadTime(blog.readTimeMinutes)].filter(Boolean).join(' | ')}
                  </p>
                  <div className="insights-related-blog-card__copy">
                    <h3>{blog.title}</h3>
                    <p>{blog.excerpt}</p>
                    <span>Read blog</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  )
}

export default InsightsPage
