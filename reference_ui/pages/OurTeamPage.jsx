import { Link } from 'react-router-dom'
import Seo from '../components/common/Seo'
import { pageSeo } from '../config/seo'
import './OurTeamPage.css'

function OurTeamPage() {
  return (
    <main className="our-team-page">
      <Seo {...pageSeo('team')} />

      <section className="our-team-hero">
        <img src="/images/our_team.avif" alt="Our team collaborating" className="our-team-hero-image" />
        <div className="our-team-hero-overlay" />
        <div className="our-team-hero-content">
          <p className="shared-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> &gt; </span>
            <span>Expertise Behind Intellivist</span>
          </p>
          <h1>Expertise Behind Intellivist</h1>
          <p className="our-team-hero-desc">
            Our partners are experts in their domain, with practical experience and the subject-matter
            expertise needed to pinpoint and understand the nature of the opportunities or challenges that clients face.
            Our team draws on a reservoir of first-hand knowledge.
          </p>
        </div>
      </section>

      <section className="expertise-section">
        <div className="expertise-grid">
          <div className="expertise-copy">
            <p>
              We bring together expertise across technology, infrastructure, industrial systems, and strategic intelligence to deliver decision-oriented insights.
            </p>
          </div>

          <div className="expertise-media">
            <img src="/images/collaboration.avif" alt="Collaborative expertise at Intellivist" />
          </div>
        </div>
      </section>

      <section className="cross-expertise-section">
        <div className="cross-expertise-header">
          <p className="our-team-kicker">Cross Functional Expertise</p>
          <h2>Intelligence across markets, technologies, and strategic systems.</h2>
          <p>
            We combine research, technical assessment, modeling, competitive analysis,
            and advisory thinking to turn market complexity into strategic clarity.
          </p>
        </div>

        <div className="cross-expertise-list">
          <div className="cross-expertise-item">Industry Intelligence</div>
          <div className="cross-expertise-item">Technology Assessment</div>
          <div className="cross-expertise-item">Strategic Research</div>
          <div className="cross-expertise-item">Market Modeling</div>
          <div className="cross-expertise-item">Competitive Intelligence</div>
          <div className="cross-expertise-item">Ecosystem Mapping</div>
          <div className="cross-expertise-item">Executive Advisory</div>
        </div>
      </section>

      <section className="contributor-network-section">
        <div className="contributor-network-header">
          <p className="our-team-kicker">Our Contributor Network</p>
          <h2>Connected expertise across high-impact sectors.</h2>
        </div>
        <div className="contributor-network-map">
          <img src="/images/team-network.avif" alt="Contributor network across high-impact sectors" className="contributor-network-image" />
        </div>
      </section>

      <section className="our-team-cta">
        <h3>Built for decision-makers operating in complex markets.</h3>
        <Link to="/intelligence">Explore Intelligence Services</Link>
      </section>
      <section className="our-team-bottom-space">
        <div />
      </section>
    </main>
  )
}

export default OurTeamPage
