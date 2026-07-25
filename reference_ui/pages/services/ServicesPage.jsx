import { Link } from 'react-router-dom'
import Seo from '../../components/common/Seo'
import { pageSeo } from '../../config/seo'
import './ServicesPage.css'

const serviceCards = [
  {
    title: 'Essentials',
    description: 'Foundational market understanding, ecosystem mapping, and competitive services support baseline for strategic planning.',
    link: '/services/essentials'
  },
  {
    title: 'Advanced',
    description: 'Accelerated growth strategies, customer assessments, and pricing services designed to capture immediate market opportunities.',
    link: '/services/advanced'
  },
  {
    title: 'Premium',
    description: 'Complex strategic shifts, M&A due diligence, and white space analysis tailored for enterprise-scale transformation.',
    link: '/services/premium'
  }
]

const engagementModels = [
  {
    title: 'Strategic Projects',
    description: 'Deep-dive engagements focused on a specific business question, such as market entry or product launch readiness.'
  },
  {
    title: 'Continuous Advisory',
    description: 'Ongoing access to our analyst network and proprietary data models, keeping your executive team ahead of market shifts.'
  },
  {
    title: 'Custom Strategy Retainers',
    description: 'Tailored data feeds, executive briefings, and dedicated analyst hours aligned with your quarterly strategic priorities.'
  }
]

function ServicesPage() {
  return (
    <main className="services-page-revised">
      <Seo {...pageSeo('services')} />

      <section className="services-pv-hero" aria-label="Services hero">
        <img src="/images/services.avif" alt="Cityscape at dawn" className="services-pv-hero-image" />
        <div className="services-pv-hero-overlay" />
        <div className="services-pv-hero-content">
          <p className="shared-hero-breadcrumb">
            <Link to="/">What we do</Link>
            <span aria-hidden="true"> &gt; </span>
            <span>Services</span>
          </p>
          <h1><span className="services-pv-hero-title-span">Our Services</span></h1>
          <p className="services-pv-hero-punchline">We Don&apos;t Sell Data. We Deliver Strategic Clarity and Revenue-Linked Services.</p>
        </div>
        <div className="services-pv-hero-ring" aria-hidden="true" />
      </section>

      <section className="services-pv-story">
        <div className="services-pv-story-copy">
          <h2><span className="services-pv-story-title-span">Our Approach to Services</span></h2>
          <p>
            Intellivist approaches market research differently. While conventional firms focus on delivering high-volume, syndicated reports, our focus is entirely on decision-oriented services. We work with Fortune 500 enterprises to evaluate markets, identify high-growth opportunities, and navigate competitive shifts.
          </p>
          <p>
            We combine rigorous data extraction, cross-industry ecosystem analysis, and predictive forecasting to support measurable business outcomes ranging from new product development and market expansion to M&A due diligence.
          </p>
        </div>
      </section>

      <section className="services-pv-parallax-quote" aria-label="Quote">
        <div className="services-pv-parallax-overlay"></div>
        <div className="services-pv-parallax-content">
          <p className="services-pv-impact-line">
            Services built for execution, perfectly aligned with your commercial priorities.
          </p>
        </div>
      </section>

      <section className="services-pv-values" aria-label="Our Service Tiers">
        <div className="services-pv-values-inner">
          <h2>Service Tiers</h2>
          <div className="services-pv-grid">
            {serviceCards.map((item) => (
              <Link key={item.title} to={item.link} className="services-pv-card-link">
                <article className="services-pv-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="services-pv-link">
                    <span>Explore {item.title} &rarr;</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="services-pv-story services-pv-story-engagement">
        <div className="services-pv-story-copy">
          <h2><span className="services-pv-story-title-span">Engagement Models</span></h2>
          <p>
            We understand that different strategic initiatives require different delivery formats. Whether you need a comprehensive market deep-dive or continuous tracking, our models adapt to your needs.
          </p>
          <div className="engagement-grid-premium">
             {engagementModels.map((model) => (
               <div key={model.title} className="engagement-item-premium">
                 <h4>{model.title}</h4>
                 <p>{model.description}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <section className="services-pv-closing-note" aria-label="Closing statement">
        <p>
          Connect our services directly to your strategy and quantify their revenue impact with Intellivist&apos;s enterprise-grade research methodologies.
        </p>
      </section>
    </main>
  )
}

export default ServicesPage
