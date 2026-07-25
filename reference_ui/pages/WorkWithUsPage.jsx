import { Link } from 'react-router-dom'
import Seo from '../components/common/Seo'
import { pageSeo } from '../config/seo'
import './WorkWithUsPage.css'

const whyJoinUs = [
  {
    title: 'Decision-Critical Work',
    description:
      'Every engagement influences high-stakes commercial choices across market entry, product strategy, and growth planning.',
  },
  {
    title: 'Cross-Industry Exposure',
    description:
      'Work across autonomy, energy transition, digital infrastructure, mobility, and geopolitics while building deep domain fluency.',
  },
  {
    title: 'High Ownership Culture',
    description:
      'Teams are trusted to lead workstreams end-to-end with clear accountability and direct client-facing impact.',
  },
]

const culturePillars = [
  {
    title: 'Intellectual Honesty',
    detail: 'We prioritize clarity over noise, challenge assumptions, and ground recommendations in verifiable evidence.',
  },
  {
    title: 'Collaborative Excellence',
    detail: 'Research, strategy, and analytics teams work together to translate insights into business actions.',
  },
  {
    title: 'Builder Mindset',
    detail: 'We move fast, refine continuously, and focus on outcomes that create measurable enterprise value.',
  },
]

const benefits = [
  'Competitive compensation with performance-linked growth',
  'Flexible hybrid work model and focused deep-work days',
  'Health coverage and wellness support programs',
  'Structured mentorship and leadership access',
  'High-ownership project opportunities from early stages',
  'Recognition framework tied to measurable impact',
]

const learningTracks = [
  {
    title: 'Market Intelligence Academy',
    points: ['Advanced research frameworks', 'Sector modeling and forecasting', 'Strategic storytelling for executives'],
  },
  {
    title: 'Commercial Strategy Labs',
    points: ['Go-to-market diagnostics', 'Competitive response planning', 'Revenue impact quantification'],
  },
  {
    title: 'Leadership Development',
    points: ['Client communication', 'Team leadership', 'Problem-framing and decision design'],
  },
]

function WorkWithUsPage() {
  return (
    <main className="wwu-page">
      <Seo {...pageSeo('careers')} />

      {/* HERO */}
      <section className="wwu-hero" aria-label="Careers hero">
        <img src="/images/work-with-us.avif" alt="Office environment" className="wwu-hero-image" />
        <div className="wwu-hero-overlay" />
        <div className="wwu-hero-content">
          <p className="wwu-breadcrumb">
            <Link to="/">Who we are</Link>
            <span aria-hidden="true"> &gt; </span>
            <span>Careers</span>
          </p>
          <h1>Build the Intelligence<br />That Moves Markets.</h1>
          <p className="wwu-hero-sub">
            Join a team where your research directly shapes the decisions of industry leaders, investors, and Fortune 500 executives.
          </p>
          <Link to="/open-roles" className="wwu-hero-cta">View Open Roles &rarr;</Link>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="wwu-why-section">
        <div className="wwu-why-inner">
          <div className="wwu-why-header">
            <h2>Why Intellivist</h2>
            <p>We don't just study markets. We shape the strategies that lead them.</p>
          </div>
          <div className="wwu-why-grid">
            {whyJoinUs.map((item, i) => (
              <article key={item.title} className={`wwu-why-card ${i === 0 ? 'wwu-why-card--featured' : ''}`}>
                <span className="wwu-why-num">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE — Dark Section */}
      <section className="wwu-culture-section" aria-label="Culture">
        <div className="wwu-culture-inner">
          <h2>Our Culture</h2>
          <p className="wwu-culture-intro">
            Intellivist operates at the intersection of rigorous analysis and strategic urgency. Our culture reflects that.
          </p>
          <div className="wwu-culture-grid">
            {culturePillars.map((item) => (
              <article key={item.title} className="wwu-culture-card">
                <div className="wwu-culture-accent" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="wwu-benefits-section" aria-label="Benefits">
        <div className="wwu-benefits-inner">
          <div className="wwu-benefits-copy">
            <h2>What You Get</h2>
            <p>We invest in our people the same way we invest in insights — with precision and long-term thinking.</p>
          </div>
          <ul className="wwu-benefits-list">
            {benefits.map((item) => (
              <li key={item} className="wwu-benefit-item">
                <span className="wwu-benefit-check" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* LEARNING & GROWTH */}
      <section className="wwu-learning-section" aria-label="Learning and Growth">
        <div className="wwu-learning-inner">
          <h2>Learning &amp; Growth</h2>
          <p className="wwu-learning-intro">
            Structured development programs that turn sharp analysts into strategic leaders.
          </p>
          <div className="wwu-learning-grid">
            {learningTracks.map((track) => (
              <article key={track.title} className="wwu-learning-card">
                <h3>{track.title}</h3>
                <ul className="wwu-learning-list">
                  {track.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="wwu-closing-section" aria-label="Closing CTA">
        <div className="wwu-closing-inner">
          <h2>Ready to Make an Impact?</h2>
          <p>Explore open roles and find where your expertise meets our mission.</p>
          <Link to="/open-roles" className="wwu-closing-cta">See Open Positions</Link>
        </div>
      </section>
    </main>
  )
}

export default WorkWithUsPage
