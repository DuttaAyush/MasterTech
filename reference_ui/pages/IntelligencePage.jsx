import { Link } from 'react-router-dom'
import Seo from '../components/common/Seo'
import { pageSeo } from '../config/seo'
import { intelligenceAreas } from '../data/intelligenceAreas'
import './IntelligencePage.css'

function IntelligencePage() {
  return (
    <main className="iv-page-shell intelligence-page">
      <Seo {...pageSeo('intelligence')} />

      <section className="intelligence-hero">
        <div className="intelligence-hero__grid">
          <div>
            <p className="intelligence-kicker">Cross-Industry Intelligence</p>
            <h1>Where Technology, Capital, and Strategy Converge</h1>
            <p className="intelligence-hero__copy">
              We help organizations identify where markets are heading, where competitive advantages are emerging, and where future growth will be created.
            </p>
            <div className="intelligence-hero__pills" aria-label="Strategic focus questions">
              <span>Where to invest</span>
              <span>Where to compete</span>
              <span>Where to grow</span>
            </div>
          </div>
          <div className="intelligence-hero__panel">
            <p>Key Intersections to Watch</p>
            <ul>
              <li>Autonomous Systems x Defense</li>
              <li>Energy x Digital Infrastructure</li>
              <li>Logistics x Geopolitics</li>
              <li>Industrial Technology x Security</li>
              <li>Policy x Capital x Innovation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="intelligence-areas" aria-labelledby="intelligence-areas-title">
        <div className="intelligence-areas__head">
          <p className="intelligence-kicker">Intelligence Areas</p>
          <h2 id="intelligence-areas-title">Our Five Core Intelligence Areas</h2>
          <p>
            At Intellivist, we do not see Aerospace and Defense, Automotive, Energy and Power, ICT, and Semiconductor
            in isolation. We see intelligence converging across all of them.
          </p>
        </div>

        <div className="intelligence-areas__grid">
          {intelligenceAreas.map((area) => (
            <Link key={area.id} to={`/intelligence/${area.id}`} className="intelligence-area-link reveal-on-scroll">
              <article className="intelligence-area-card">
                <p className="intelligence-area-card__strap">{area.strap}</p>
                <h3>{area.title}</h3>
                <p className="intelligence-area-card__summary">{area.summary}</p>
                <ul>
                  {area.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="intelligence-band">
        <p>
          From autonomy to energy, digital infrastructure to geopolitics - we map the systems shaping tomorrow&apos;s
          strategic economy.
        </p>
      </section>
    </main>
  )
}

export default IntelligencePage
