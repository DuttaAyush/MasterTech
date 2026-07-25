import { Link } from 'react-router-dom'
import { addReportToCart } from '../../utils/cart'
import { resolveCoverImage } from '../../utils/coverImageFallback'

function ReportCard({ report }) {
  const coverImage = resolveCoverImage({ coverImage: report.coverImage, id: report.id })
  const handleAddToCart = () => {
    addReportToCart(report)
  }

  return (
    <article className="report-card-premium reveal-on-scroll">
      <div className="report-card-meta-row">
        <span className="report-card-kicker">
          {report.category || 'MARKET INTELLIGENCE'}
        </span>
        <span className="report-card-pages">
          {report.pages || 120} pages
        </span>
      </div>

      <h3>{report.title}</h3>
      <p>{report.summary}</p>

      <div className="report-card-tags">
        {(report.tags || []).filter(Boolean).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="report-card-footer-premium">
        <strong>$ {report.price.toLocaleString()}</strong>
        <Link to={`/reports/${report.slug}`} className="report-card-link-premium">
          Explore Briefs <span aria-hidden="true">›</span>
        </Link>
      </div>

      <div className="report-card-image-wrap">
        <img src={coverImage} alt={report.title} loading="lazy" />
      </div>

      <div className="report-card-cart-row">
        <button
          type="button"
          className="report-card-add-cart"
          onClick={handleAddToCart}
        >
          <span aria-hidden="true" className="report-card-add-cart-icon">
            <svg viewBox="0 0 24 24">
              <circle cx="9" cy="19" r="1.5" />
              <circle cx="17" cy="19" r="1.5" />
              <path d="M3 4h2l2.2 10h10.6l2.1-7.2H7.1" />
            </svg>
          </span>
          Add to Cart
        </button>
      </div>
    </article>
  )
}

export default ReportCard
