import { Link, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/common/Seo'
import { intelligenceAreaSeo } from '../config/seo'
import { buildBreadcrumbJsonLd } from '../utils/seo'
import { getIntelligenceAreaById } from '../data/intelligenceAreas'
import './IntelligenceAreaDetailsPage.css'

const OVERVIEW_VISUALS = {
  'autonomous-systems-intelligence': {
    src: '/images/intelligence/autonomous.avif',
    alt: 'Autonomous systems intelligence visual',
  },
  'cyber-ai-digital-intelligence': {
    src: '/images/intelligence/cyber.avif',
    alt: 'Cyber, AI and digital infrastructure intelligence visual',
  },
  'energy-transition-intelligence': {
    src: '/images/intelligence/energy.avif',
    alt: 'Energy transition intelligence visual',
  },
  'mobility-logistics-intelligence': {
    src: '/images/intelligence/mobility.avif',
    alt: 'Mobility and logistics intelligence visual',
  },
  'aerospace-defense-geo-intelligence': {
    src: '/images/intelligence/aerospace.avif',
    alt: 'Aerospace, defense and geopolitical intelligence visual',
  },
}

const AREA_IMAGE_DEFAULTS = {
  autonomous: '/images/intelligence/autonomous/robotic.avif',
  energy: '/images/intelligence/energy/energy.avif',
  cyber: '/images/intelligence/cyber/cyber.avif',
  mobility: '/images/intelligence/mobility.avif',
  aerospace: '/images/intelligence/aerospace.avif',
}

const SUBSECTOR_IMAGES = {
  autonomous: {
    'industrial robotics & automation': '/images/intelligence/autonomous/robotic.avif',
    'autonomous vehicles (land, air, sea)': '/images/intelligence/autonomous/vehicle.avif',
    'drones & uav ecosystems': '/images/intelligence/autonomous/drone.avif',
    'autonomous defense systems': '/images/intelligence/autonomous/defence.avif',
    'robotics-as-a-service (raas)': '/images/intelligence/autonomous/raas.avif',
    'warehouse & supply chain automation': '/images/intelligence/autonomous/warehouse.avif',
    'edge ai & sensor systems': '/images/intelligence/autonomous/edge-ai.avif',
    'human-machine collaboration': '/images/intelligence/autonomous/human-robo.avif',
    'smart manufacturing systems': '/images/intelligence/autonomous/manufacturing.avif',
  },
  energy: {
    'renewable energy': '/images/intelligence/energy/renewable.avif',
    'grid modernization & smart grids': '/images/intelligence/energy/grid.avif',
    'energy storage & batteries': '/images/intelligence/energy/battery.avif',
    'hydrogen economy': '/images/intelligence/energy/hydrogen.avif',
    'carbon capture & decarbonization': '/images/intelligence/energy/carbon.avif',
    'ev charging infrastructure': '/images/intelligence/energy/charging-station.avif',
    'climate tech': '/images/intelligence/energy/climate.avif',
    'nuclear innovation (smrs, fusion)': '/images/intelligence/energy/nuclear.avif',
    'esg & energy policy': '/images/intelligence/energy/energy.avif',
  },
  cyber: {
    'artificial intelligence & machine learning': '/images/intelligence/autonomous/edge-ai.avif',
    'cybersecurity & cyber defense': '/images/intelligence/cyber/cyber.avif',
    'cloud & edge computing': '/images/intelligence/cyber/cloud.avif',
    'data centers & semiconductor infrastructure': '/images/intelligence/cyber/datacenter.avif',
    'quantum computing': '/images/intelligence/energy/nuclear.avif',
    'telecommunications (5g/6g)': '/images/intelligence/cyber/telecommunication.avif',
    'digital sovereignty': '/images/intelligence/cyber/digital.avif',
    'enterprise automation': '/images/intelligence/cyber/automation.avif',
    'web3 & blockchain infrastructure': '/images/intelligence/cyber/blockchain.avif',
    'national critical infrastructure security': '/images/intelligence/cyber/security.avif',
  },
  mobility: {
    'electric mobility ecosystems': '/images/intelligence/autonomous/robotic.avif',
    'freight digitization': '/images/intelligence/mobility/freight.avif',
    'last-mile optimization': '/images/intelligence/mobility/lastmile.avif',
    'port & corridor intelligence': '/images/intelligence/mobility/port.avif',
    'fleet intelligence systems': '/images/intelligence/mobility/fleet.avif',
    'urban air mobility': '/images/intelligence/mobility/urban.avif',
  },
  aerospace: {
    'space economy & satellite systems': '/images/intelligence/aerospace/space.avif',
    'defense technology': '/images/intelligence/autonomous/defence.avif',
    'military modernization': '/images/intelligence/autonomous/vehicle.avif',
    'missile & strategic systems': '/images/intelligence/aerospace/missile.avif',
    'cyber warfare': '/images/intelligence/cyber/security.avif',
    'dual-use technologies': '/images/intelligence/cyber/datacenter.avif',
    'geopolitical risk': '/images/intelligence/aerospace/geopolitics.avif',
    'defense supply chains': '/images/intelligence/autonomous/manufacturing.avif',
    'intelligence & surveillance systems': '/images/intelligence/aerospace/surveillance.avif',
    'national security policy': '/images/intelligence/cyber/digital.avif',
  },
}

function getSubsectorImage(areaDotClass, title) {
  const map = SUBSECTOR_IMAGES[areaDotClass]
  if (!map) return ''
  return map[title.toLowerCase()] || AREA_IMAGE_DEFAULTS[areaDotClass] || ''
}

function IntelligenceAreaDetailsPage() {
  const toTitleCase = (value) =>
    value
      .toLowerCase()
      .split(' ')
      .map((word) => {
        const normalized = word.replace(/[^a-z0-9]/gi, '')
        const acronyms = new Set(['ai', 'ml', 'uav', 'ict', 'esg', 'ev', 'h2'])
        if (acronyms.has(normalized)) return word.toUpperCase()
        return word ? word[0].toUpperCase() + word.slice(1) : word
      })
      .join(' ')

  const { areaId } = useParams()
  const area = getIntelligenceAreaById(areaId)
  const overviewVisual = OVERVIEW_VISUALS[areaId]

  if (!area) {
    return (
      <main className="iv-page-shell intelligence-detail-page">
        <section className="intelligence-detail-shell">
          <h1>Intelligence area not found</h1>
          <p>Please select one from the Intelligence page.</p>
          <Link to="/intelligence" className="intelligence-detail-back">Back to Intelligence</Link>
        </section>
      </main>
    )
  }

  return (
    <main className="iv-page-shell intelligence-detail-page">
      <Seo
        {...intelligenceAreaSeo(area)}
        jsonLd={buildBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Intelligence', path: '/intelligence' },
          { name: area.title, path: `/intelligence/${area.id}` },
        ])}
      />

      <section className="intelligence-detail-hero">
        <p className="shared-hero-breadcrumb">
          <Link to="/intelligence">Intelligence</Link>
          <span aria-hidden="true"> &gt; </span>
          <span>{area.title}</span>
        </p>
        <p className="intelligence-detail-kicker">Subsectors Covered</p>
        <h1>{area.title}</h1>
        <p>{area.summary}</p>
      </section>

      <section className="intelligence-energy-section" aria-label={`${area.title} overview placeholder`}>
        <div className="intelligence-energy-container">
          <div className="intelligence-energy-left">
            <div className="intelligence-energy-eyebrow">Strategic Intelligence Overview</div>
            <h2>{area.title}</h2>
            <div className="intelligence-energy-line" />
            <p>{area.detailText || area.summary}</p>
            <Link to={`/reports?intelligenceArea=${encodeURIComponent(area.id)}`} className="intelligence-energy-btn">
              Explore Industry Insights
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="intelligence-energy-placeholder">
            {overviewVisual ? (
              <img
                className="intelligence-energy-image"
                src={overviewVisual.src}
                alt={overviewVisual.alt}
                loading="eager"
              />
            ) : null}
          </div>
        </div>
      </section>

      <section className={`intelligence-detail-subsector intelligence-detail-subsector--${area.dotClass}`}>
        <p className="intelligence-detail-subsector__title">
          <span className={`intelligence-subsector-dot intelligence-subsector-dot--${area.dotClass}`} aria-hidden="true" />
          SUBSECTORS COVERED - {area.title.toUpperCase()}
        </p>
        <div className="intelligence-detail-subsector__grid">
          {area.subsectors.map((item) => (
            <Link
              key={item.title}
              to={`/reports?intelligenceArea=${encodeURIComponent(area.id)}&subsector=${encodeURIComponent(item.title)}`}
              className="intelligence-detail-subsector__card reveal-on-scroll"
              style={{ backgroundImage: `url(${getSubsectorImage(area.dotClass, item.title)})` }}
            >
              <div className="intelligence-detail-subsector__overlay" />
              <div className="intelligence-detail-subsector__content">
                <h3>{toTitleCase(item.title)}</h3>
                <p>{item.description}</p>
              </div>
              <span className="intelligence-detail-subsector__arrow" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="intelligence-detail-cta">
        <p className="intelligence-detail-cta__lead">Want to Deep Dive into Intelligence?</p>
        <p>Connect with our analysts for a focused discussion tailored to your priorities.</p>
        <Link to="/contact-us" className="intelligence-detail-cta__btn">Talk to Expert</Link>
      </section>
    </main>
  )
}

export default IntelligenceAreaDetailsPage
