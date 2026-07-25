import { Link } from 'react-router-dom'
import { intelligenceAreas } from '../../../data/intelligenceAreas'
import './IndustryViewSection.css'

const INDUSTRY_VIEW_IMAGES = {
  'autonomous-systems-intelligence': '/images/intelligence/autonomous/manufacturing.avif',
  'energy-transition-intelligence': '/images/intelligence/energy/grid.avif',
  'cyber-ai-digital-intelligence': '/images/intelligence/cyber/security.avif',
  'mobility-logistics-intelligence': '/images/intelligence/mobility/port.avif',
  'aerospace-defense-geo-intelligence': '/images/intelligence/aerospace/missile.avif',
}

const featuredIndustries = intelligenceAreas.map((area) => ({
  id: area.id,
  title: area.title,
  strap: area.strap,
  image: INDUSTRY_VIEW_IMAGES[area.id],
}))

const scrollingIndustries = [...featuredIndustries, ...featuredIndustries]

function IndustryViewSection() {
  return (
    <section className="industry-view-section" aria-labelledby="industry-view-heading">
      <div className="industry-view-shell">
        <div className="industry-view-head">
          <h2 id="industry-view-heading">Get The Full View Of Intelligence</h2>
          <p>Comprehensive market intelligence for industries and economies across the globe</p>
        </div>

        <div className="industry-view-marquee" aria-label="Industry highlights">
          <div className="industry-view-track">
            {scrollingIndustries.map((item, index) => (
              <Link key={`${item.id}-${index}`} to={`/intelligence/${item.id}`} className="industry-view-card">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  width="640"
                  height="360"
                />
                <div className="industry-view-overlay" />
                <div className="industry-view-content">
                  <h3>{item.title}</h3>
                  <span className="industry-view-cta">
                    Explore intelligence <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="industry-view-footer-link">
          <Link to="/intelligence" className="industry-view-all-link">
            Intelligence
          </Link>
        </div>
      </div>
    </section>
  )
}

export default IndustryViewSection
