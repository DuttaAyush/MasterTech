import { Link } from 'react-router-dom'
import Seo from '../../components/common/Seo'
import { pageSeo } from '../../config/seo'
import './ServiceTiers.css'

const capabilitiesList = [
  {
    title: 'Market Entry Strategy',
    points: [
      'Entry model and geography selection',
      'Risk and regulatory readiness',
      'Go-to-market execution blueprint'
    ]
  },
  {
    title: 'M&A Due Diligence',
    points: [
      'Target landscape assessment',
      'Strategic and commercial diligence',
      'Synergy and risk evaluation'
    ]
  },
  {
    title: 'Portfolio Strategy',
    points: [
      'Portfolio fit and performance diagnostics',
      'Allocation and prioritization decisions',
      'Category expansion strategy'
    ]
  },
  {
    title: 'White Space Analysis',
    points: [
      'Underserved demand pockets',
      'Emerging category whitespace',
      'Defensible differentiation angles'
    ]
  },
  {
    title: 'New Product Development',
    points: [
      'Concept-market fit validation',
      'Commercial launch readiness',
      'Performance KPI architecture'
    ]
  },
  {
    title: 'Defence Procurement Facilitation',
    points: [
      'Procurement process mapping',
      'Bid positioning and compliance support',
      'Strategic partner enablement'
    ]
  }
]

const deliveryFormats = [
  {
    title: 'Dedicated Analyst Desk',
    description: 'On-demand direct interaction with our principal strategists and industry experts for ad-hoc advisory.'
  },
  {
    title: 'Board Presentation Decks',
    description: 'C-suite ready, highly-polished reporting frameworks designed for corporate boardrooms and investment committees.'
  },
  {
    title: 'Executive War-Rooms',
    description: 'Secure, dedicated digital portals compiling predictive models, ecosystem matrices, and competitive trackers.'
  }
]

function PremiumPage() {
  return (
    <main className="tier-page theme-premium">
      <Seo {...pageSeo('premium')} />
      
      <section className="tier-hero" aria-label="Premium hero">
        <div className="tier-hero-overlay" />
        <div className="tier-hero-content">
          <p className="tier-breadcrumb">
            <Link to="/">What we do</Link>
            <span aria-hidden="true"> &gt; </span>
            <Link to="/services">Services</Link>
            <span aria-hidden="true"> &gt; </span>
            <span>Premium</span>
          </p>
          <h1>Premium Services</h1>
          <p className="tier-hero-punchline">Boardroom-priority research, bespoke transaction due diligence, and category whitespace analysis built for enterprise-scale transformation.</p>
        </div>
      </section>

      <section className="tier-story">
        <div className="tier-story-copy">
          <h2>Boardroom-Level Strategy &amp; Diligence</h2>
          <p>
            Intellivist's Premium tier is engineered for high-stakes strategic choices. When enterprises evaluate massive investments, orchestrate acquisitions, entering completely new geographical markets, or launch transformative categories, conventional syndicated data falls short.
          </p>
          <p>
            We deploy bespoke primary research networks, specialized technical analysts, and advanced ecosystem simulation tools to deliver tailored intelligence that is immediately actionable for CEOs, boards, and corporate development leaders.
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
          Secure maximum strategic leverage for your enterprise's defining commercial moments with Intellivist's Premium advisor networks.
        </p>
      </section>
    </main>
  )
}

export default PremiumPage
