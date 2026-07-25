import { Link } from 'react-router-dom'
import Seo from '../../components/common/Seo'
import { pageSeo } from '../../config/seo'
import './ServiceTiers.css'

const capabilitiesList = [
  {
    title: 'Customer Assessment',
    points: [
      'Customer cohort and persona analysis',
      'Need-state prioritization',
      'Retention and expansion levers'
    ]
  },
  {
    title: 'Growth Strategy',
    points: [
      'Growth pathway design',
      'Initiative sequencing and milestones',
      'Outcome tracking framework'
    ]
  },
  {
    title: 'Pricing Intelligence',
    points: [
      'Price architecture benchmarking',
      'Elasticity and willingness-to-pay insights',
      'Margin and volume scenario planning'
    ]
  },
  {
    title: 'Channel Strategy',
    points: [
      'Channel mix optimization',
      'Partner model design',
      'Coverage and conversion planning'
    ]
  }
]

const deliveryFormats = [
  {
    title: 'BI Dashboard Portals',
    description: 'Custom, secure Business Intelligence environments built to query customer segmentations and pricing elasticities.'
  },
  {
    title: 'Scenario Simulators',
    description: 'Interactive modeling calculators that allow your team to simulate margin scenarios and route-to-market trade-offs.'
  },
  {
    title: 'Analyst Briefings',
    description: 'Interactive executive alignment sessions to unpack strategic sequences and clear action milestones.'
  }
]

function AdvancedPage() {
  return (
    <main className="tier-page theme-advanced">
      <Seo {...pageSeo('advanced')} />
      
      <section className="tier-hero" aria-label="Advanced hero">
        <div className="tier-hero-overlay" />
        <div className="tier-hero-content">
          <p className="tier-breadcrumb">
            <Link to="/">What we do</Link>
            <span aria-hidden="true"> &gt; </span>
            <Link to="/services">Services</Link>
            <span aria-hidden="true"> &gt; </span>
            <span>Advanced</span>
          </p>
          <h1>Advanced Services</h1>
          <p className="tier-hero-punchline">Accelerated growth strategies, deep customer assessments, and margin-optimizing pricing intelligence to capture market opportunities.</p>
        </div>
      </section>

      <section className="tier-story">
        <div className="tier-story-copy">
          <h2>Accelerate Your Market Trajectory</h2>
          <p>
            The Advanced tier shifts the focus from structural baseline context to active commercial optimization. We help scaling enterprises evaluate buyer personas, refine pricing frameworks, and align channel distributions to capture high-value market segments.
          </p>
          <p>
            By combining cohort diagnostics with margin simulation models, we design structured growth pathways that translate raw market signals into reliable commercial execution.
          </p>
        </div>
      </section>

      <section className="tier-capabilities" aria-label="Capabilities">
        <h2>Capabilities</h2>
        <div className="tier-grid grid-4-cols">
          {capabilitiesList.map((cap) => (
            <article key={cap.title} className="tier-card">
              <h3>{cap.title}</h3>
              <ul className="tier-card-list">
                {cap.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="tier-delivery" aria-label="Delivery Formats">
        <h2>What You Recieve</h2>
        <div className="tier-delivery-grid">
          {deliveryFormats.map((format) => (
            <article key={format.title} className="tier-delivery-item">
              <h4>{format.title}</h4>
              <p>{format.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="tier-closing-note" aria-label="Closing note">
        <p>
          Convert market signals into rapid commercial milestones with Intellivist's Advanced growth services.
        </p>
      </section>
    </main>
  )
}

export default AdvancedPage
