import { Link } from 'react-router-dom'
import Seo from '../components/common/Seo'
import { pageSeo } from '../config/seo'
import './OurMissionPage.css'

const missionMetrics = [
  { label: 'Decision windows reduced', value: '35%' },
  { label: 'Strategic scenarios modeled', value: '120+' },
  { label: 'Cross-sector signal categories', value: '40+' },
  { label: 'Enterprise priority tracks', value: '12' },
]

const missionCapabilities = [
  {
    title: 'Market Expansion',
    points: ['Entry prioritization', 'Region attractiveness scans', 'Execution risk mapping'],
  },
  {
    title: 'Innovation Planning',
    points: ['Whitespace identification', 'Demand viability signals', 'Commercialization pathways'],
  },
  {
    title: 'Investment Evaluation',
    points: ['Opportunity screening', 'Scenario-based return logic', 'Competitive downside checks'],
  },
]

function OurMissionPage() {
  return (
    <main className="our-mission-page">
      <Seo {...pageSeo('mission')} />

      <section className="our-mission-hero">
        <img src="/images/mission.avif" alt="Our mission backdrop" className="our-mission-hero-image" />
        <div className="our-mission-hero-overlay" />
        <div className="our-mission-hero-content">
          <p className="shared-hero-breadcrumb">
            <Link to="/purpose-and-values">Who we are</Link>
            <span aria-hidden="true"> &gt; </span>
            <span>Our Mission</span>
          </p>
          <h1>Our Mission</h1>
          <p className="our-mission-hero-desc">
            Our mission is to provide decision-oriented market intelligence that helps organizations anticipate change,
            evaluate opportunities with confidence, and navigate complexity with strategic clarity.
          </p>
        </div>
      </section>

      <section className="our-mission-story">
        <div className="our-mission-story-copy">
          <p>
            To convert complex market, technology, and ecosystem intelligence into commercially meaningful decisions, growth opportunities, and long-term competitive advantage.
          </p>
          <p>
            Our mission is to help organizations move beyond fragmented information and develop a clearer understanding of the forces shaping industries, competitive landscapes, and emerging opportunities.
          </p>
          <p>
            We deliver intelligence that supports market entry, innovation planning, investment evaluation, strategic positioning, and future-focused decision-making across evolving sectors and business ecosystems.
          </p>
        </div>
      </section>

      <section className="our-mission-metrics">
        <div className="our-mission-headline">
          <h2>Mission Metrics</h2>
        </div>
        <div className="our-mission-metrics-grid">
          {missionMetrics.map((item, index) => (
            <article key={item.label} className="our-mission-metric-card reveal-on-scroll">
              <span className="our-mission-metric-index">0{index + 1}</span>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="our-mission-delivery">
        <h2>Mission Delivery Model</h2>
        <div className="our-mission-delivery-grid">
          {missionCapabilities.map((capability) => (
            <article key={capability.title} className="our-mission-delivery-card reveal-on-scroll">
              <span className="our-mission-delivery-title">{capability.title}</span>
              <ul className="our-mission-delivery-list">
                {capability.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default OurMissionPage
