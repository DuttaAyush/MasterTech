import { Link } from 'react-router-dom'
import Seo from '../../components/common/Seo'
import { pageSeo } from '../../config/seo'
import './ServiceTiers.css'

const capabilitiesList = [
  {
    title: 'Market Assessment',
    points: [
      'Market size and growth mapping',
      'Demand drivers and constraints',
      'Segment attractiveness evaluation'
    ]
  },
  {
    title: 'Competitive Intelligence',
    points: [
      'Competitor positioning and moves',
      'Pricing and product benchmark',
      'Strategic response recommendations'
    ]
  },
  {
    title: 'Ecosystem Mapping',
    points: [
      'Stakeholder and value-chain mapping',
      'Partner and channel landscape',
      'Capability and influence analysis'
    ]
  },
  {
    title: 'Supply & Demand Assessment',
    points: [
      'Supply-side capacity analysis',
      'Demand forecasting scenarios',
      'Gap and imbalance identification'
    ]
  },
  {
    title: 'Opportunity Assessment',
    points: [
      'Adjacent and whitespace opportunities',
      'Commercial viability filters',
      'Prioritization by ROI potential'
    ]
  }
]

const deliveryFormats = [
  {
    title: 'Executive Briefing',
    description: 'A concise leadership-ready summary with key findings and recommendations.'
  },
  {
    title: 'Intelligence Dashboard',
    description: ' Interactive visualizations and market tracking tools.'
  },
  {
    title: 'Strategic Recommendations',
    description: 'Action-oriented insights aligned to business objectives.'
  }
]

function EssentialsPage() {
  return (
    <main className="tier-page theme-essentials">
      <Seo {...pageSeo('essentials')} />
      
      <section className="tier-hero" aria-label="Essentials hero">
        <div className="tier-hero-overlay" />
        <div className="tier-hero-content">
          <p className="tier-breadcrumb">
            <Link to="/">What we do</Link>
            <span aria-hidden="true"> &gt; </span>
            <Link to="/services">Services</Link>
            <span aria-hidden="true"> &gt; </span>
            <span>Essentials</span>
          </p>
          <h1>Essentials Services</h1>
          <p className="tier-hero-punchline">Foundational market understanding, ecosystem mapping, and competitive baseline services designed to validate strategic pathways.</p>
        </div>
      </section>

      <section className="tier-story">
        <div className="tier-story-copy">
          <h2>Core Intelligence Foundation</h2>
          <p>
            Intellivist's Essentials tier provides the rigorous empirical grounding every strategic initiative requires. Instead of rely on high-level estimates, we map specific value chains, evaluate historical supply-demand fluctuations, and build bottom-up market sizing models.
          </p>
          <p>
            This foundational level of research ensures that your commercial plans are anchored in precise competitor metrics, structured buyer landscapes, and realistic growth forecasts.
          </p>
        </div>
      </section>

      <section className="tier-capabilities" aria-label="Capabilities">
        <h2>Capabilities</h2>
        <div className="tier-grid">
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
          Establish a clean, bulletproof factual foundation for your team's next growth initiative with Intellivist's Essentials services.
        </p>
      </section>
    </main>
  )
}

export default EssentialsPage
