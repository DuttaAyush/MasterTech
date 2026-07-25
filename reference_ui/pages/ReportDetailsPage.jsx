import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Seo from '../components/common/Seo'
import ReportPreviewSurface from '../components/reports/ReportPreviewSurface'
import { contentStatic } from '../services/contentStatic'
import {
  buildBreadcrumbJsonLd,
  buildProductJsonLd,
  truncateDescription,
} from '../utils/seo'
import { resolveCoverImage } from '../utils/coverImageFallback'
import './ReportDetailsPage.css'

function ReportDetailsPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [apiReport, setApiReport] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
    contentStatic.getReportBySlug(slug)
      .then((data) => setApiReport(data.report || null))
      .catch(() => setApiReport(null))
      .finally(() => setLoaded(true))
  }, [slug])

  const report = apiReport

  if (!loaded) {
    return (
      <>
        <Seo
          title="Loading Report | Intellivist"
          description="Loading market intelligence report details."
          canonical={`/reports/${slug}`}
        />
        <main className="report-details-page-wrapper">
          <section className="iv-section">
            <h2>Loading report...</h2>
          </section>
        </main>
      </>
    )
  }

  if (!report) {
    return (
      <>
        <Seo
          title="Report Not Found | Intellivist"
          description="The requested market intelligence report could not be found."
          canonical={`/reports/${slug}`}
          noindex
        />
        <main className="report-details-page-wrapper">
          <section className="iv-section">
            <h2>Report not found</h2>
          </section>
        </main>
      </>
    )
  }

  const seoTitle = `${report.seoTitle || report.title} | Intellivist Research`
  const seoDescription = truncateDescription(report.seoDescription || report.summary)
  const coverImage = resolveCoverImage({
    coverImage: report.coverImage,
    id: report.id,
  })

  const handleSecurePurchase = () => {
    navigate('/contact-us')
  }

  return (
    <>
      <Seo
        title={seoTitle}
        description={seoDescription}
        canonical={`/reports/${report.slug}`}
        image={coverImage}
        ogType="product"
        publishedTime={report.publishedAt || report.createdAt}
        modifiedTime={report.updatedAt}
        jsonLd={[
          buildProductJsonLd({
            title: report.title,
            description: seoDescription,
            url: `/reports/${report.slug}`,
            image: coverImage,
            price: report.price,
            sku: report.id,
          }),
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Reports', path: '/reports' },
            { name: report.title, path: `/reports/${report.slug}` },
          ]),
        ]}
      />
      <ReportPreviewSurface
        report={report}
        onPrimaryAction={handleSecurePurchase}
      />
    </>
  )
}

export default ReportDetailsPage
