import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import './HeroSection.css'
import SearchBar from '../../common/SearchBar'
import Hero3DVisual from './Hero3DVisual'
import { getInitialMobileMatch } from '../../../utils/scheduleIdle'

function HeroSection({ onSearch, onBrowseIndustries, onExplorePerspectives, onWhatWeDo }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const [storyStage, setStoryStage] = useState('intro')
  const [isMobileView, setIsMobileView] = useState(getInitialMobileMatch)

  useEffect(() => {
    const updateViewportMode = () => setIsMobileView(window.matchMedia('(max-width: 768px)').matches)
    updateViewportMode()
    window.addEventListener('resize', updateViewportMode)
    return () => window.removeEventListener('resize', updateViewportMode)
  }, [])

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    let nextStage = 'metrics'
    if (value < 0.03) nextStage = 'intro'
    else if (value < 0.12) nextStage = 'global'
    else if (value < 0.24) nextStage = 'analytics'
    setStoryStage((prev) => (prev === nextStage ? prev : nextStage))
  })

  const wallY = useTransform(scrollYProgress, [0.3, 0.4], ['100%', '0%'])
  const metricsY = useTransform(scrollYProgress, [0.24, 0.5], [-145, -205])

  return (
    <section className={`market-hero-wrapper ${isMobileView ? 'market-hero-wrapper--mobile-lite' : ''}`} ref={containerRef}>
      <motion.div className="market-hero-natural-intro" style={{ display: isMobileView || storyStage === 'intro' ? 'flex' : 'none' }}>
        <div className="market-hero-side-container" style={{ position: 'absolute', inset: 0 }}>
          <div className="market-hero-intro-card">
            <div className="market-hero-intro-left">
              <h1 className="market-hero-intro-title">
                Intelligence That Shapes <br />
                <span className="text-gradient"><span className="market-intelligence-word">Better Decisions</span></span>
              </h1>
              <p className="market-hero-intro-subtitle">
                We connect market insight directly to strategy and quantify its revenue impact. For companies where the cost of a wrong move is too high to guess.
              </p>
            </div>

            <div className="market-hero-intro-right">
              <div className="market-hero-search-glass">
                <SearchBar onSearch={onSearch || (() => {})} />
              </div>
            <div className="market-hero-intro-actions">
              <div className="market-hero-intro-trust">
                <div className="trust-stats">
                  <span className="trust-number">Revenue-Linked</span>
                  <span className="trust-label">EVERY ENGAGEMENT</span>
                </div>
                <div className="trust-divider" />
                <div className="trust-stats">
                  <span className="trust-number">C-Suite Ready</span>
                  <span className="trust-label">DELIVERABLE STANDARD</span>
                </div>
                <div className="trust-divider" />
                <div className="trust-stats">
                  <span className="trust-number">Strategy-First</span>
                  <span className="trust-label">OUR ONLY MODE</span>
                </div>
              </div>
              <p className="market-hero-intro-support">Built for executives who need clarity before committing capital, resources and strategy.</p>
              <button type="button" className="market-hero-intro-btn" onClick={onBrowseIndustries}>
                Explore intelligence area
              </button>
            </div>
            </div>
          </div>
        </div>
      </motion.div>

      {isMobileView && (
        <div className="market-hero-mobile-insights">
          <section className="market-hero-mobile-panel market-hero-mobile-panel--global">
            <h2 className="market-side-heading">Global Insights</h2>
            <p className="market-side-desc">Macro & Microeconomic Analysis</p>
            <p className="market-side-body">
              Leverage our proprietary data networks to understand global market shifts before they happen.
              Equip your board with intelligence that mitigates risk and identifies high-growth pockets.
            </p>
            <button type="button" className="market-side-cta-btn" onClick={onExplorePerspectives || onBrowseIndustries}>
              Explore Perspectives
            </button>
          </section>

          <section className="market-hero-mobile-panel market-hero-mobile-panel--analytics">
            <h2 className="market-side-heading">Analytics</h2>
            <p className="market-side-desc">Predictive Forecasting Engine</p>
            <p className="market-side-body">
              Harness AI-driven predictive modeling to forecast industry trajectories with higher confidence and
              faster decision cycles.
            </p>
            <button type="button" className="market-side-cta-btn" onClick={onWhatWeDo || onBrowseIndustries}>
              What We Do
            </button>
          </section>
        </div>
      )}

      {!isMobileView && <div className="market-hero-sticky">
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <motion.div className="hero-wall-triangle" style={{ y: wallY }} />

          <div className="market-hero-canvas">
            <Hero3DVisual scrollProgress={scrollYProgress} />
          </div>

          <motion.div className="market-hero-side-container market-hero-side-container--global" style={{ display: storyStage === 'global' ? 'flex' : 'none' }}>
            <div className="market-hero-side-text market-hero-side-text--highlight left">
              <h2 className="market-side-heading">Global Insights</h2>
              <p className="market-side-desc">Macro & Microeconomic Analysis</p>
              <p className="market-side-body">Leverage our proprietary data networks to understand global market shifts before they happen. Equip your board with intelligence that mitigates risk, identifies high-growth pockets, and tracks demand volatility across regions. Compare market maturity, pricing pressure, supply chain constraints, and competitive movement in one unified strategic view.</p>
              <button type="button" className="market-side-cta-btn" onClick={onExplorePerspectives || onBrowseIndustries}>
                Explore Perspectives
              </button>
            </div>
          </motion.div>

          <motion.div className="market-hero-side-container market-hero-side-container--analytics" style={{ display: storyStage === 'analytics' ? 'flex' : 'none' }}>
            <div className="market-hero-side-text market-hero-side-text--analytics left">
              <h2 className="market-side-heading">Analytics</h2>
              <p className="market-side-desc">Predictive Forecasting Engine</p>
              <p className="market-side-body">Harness AI-driven predictive modeling to forecast 5-year industry trajectories with higher confidence and faster decision cycles.</p>
              <p className="market-side-body">Track leading indicators, demand elasticity, margin pressure, and regional growth momentum in one executive-ready analytics layer.</p>
              <button type="button" className="market-side-cta-btn" onClick={onWhatWeDo || onBrowseIndustries}>
                What We Do
              </button>
              <div className="market-analytics-visual" aria-hidden="true">
                <span className="analytics-dot" />
                <div className="analytics-bars">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="analytics-trend" />
              </div>
            </div>
          </motion.div>

          <motion.div className="market-hero-side-container market-hero-side-container--metrics" style={{ display: storyStage === 'metrics' ? 'flex' : 'none', y: metricsY }}>
            <div className="market-growth-metrics-wrap">
              <div className="market-growth-metrics-grid">
                <article className="market-growth-metric-card">
                  <div className="market-metric-topline">
                    <span className="market-metric-icon market-metric-icon--world" aria-hidden="true" />
                  </div>
                  <h4>90+</h4>
                  <p>
                    Countries tracking $7.2T in consumer spending
                    <span className="market-metric-subtext">Live demand benchmarks</span>
                    <span className="market-metric-subtext">Weekly trend snapshots</span>
                  </p>
                </article>
                <article className="market-growth-metric-card">
                  <div className="market-metric-topline">
                    <span className="market-metric-icon market-metric-icon--stack" aria-hidden="true" />
                  </div>
                  <h4>177M</h4>
                  <p>
                    Products covered across 21M+ stores
                    <span className="market-metric-subtext">Cross-region assortment tracking</span>
                    <span className="market-metric-subtext">Category-level visibility</span>
                  </p>
                </article>
                <article className="market-growth-metric-card">
                  <div className="market-metric-topline">
                    <span className="market-metric-icon market-metric-icon--grid" aria-hidden="true" />
                  </div>
                  <h4>1,800+</h4>
                  <p>
                    Categories across FMCG, tech, and durables
                    <span className="market-metric-subtext">Sector-level performance snapshots</span>
                    <span className="market-metric-subtext">Comparable market baselines</span>
                  </p>
                </article>
                <article className="market-growth-metric-card">
                  <div className="market-metric-topline">
                    <span className="market-metric-icon market-metric-icon--pulse" aria-hidden="true" />
                  </div>
                  <h4>3.1T</h4>
                  <p>
                    Data records processed each week
                    <span className="market-metric-subtext">Continuously refreshed signal layer</span>
                    <span className="market-metric-subtext">Decision-ready intelligence feed</span>
                  </p>
                </article>
              </div>
            </div>
          </motion.div>

        </div>
      </div>}
    </section>
  )
}

export default HeroSection
