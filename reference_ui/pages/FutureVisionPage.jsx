import { Link } from 'react-router-dom'
import Seo from '../components/common/Seo'
import { pageSeo } from '../config/seo'
import './FutureVisionPage.css'

function FutureVisionPage() {
  return (
    <main className="future-vision-page">
      <Seo {...pageSeo('futureVision')} />

      <section className="future-vision-hero">
        <img src="/images/space.avif" alt="Future vision backdrop" className="future-vision-hero-image" />
        <div className="future-vision-hero-overlay" />
        <div className="future-vision-hero-content">
          <p className="shared-hero-breadcrumb">
            <Link to="/purpose-and-values">Who we are</Link>
            <span aria-hidden="true"> &gt; </span>
            <span>Future Vision</span>
          </p>
          <h1>Future Vision</h1>
          <p className="future-vision-hero-desc">
            We envision a future where every leadership team can detect shifts early, simulate outcomes quickly,
            and make high-confidence strategic choices with synchronized execution.
          </p>
        </div>
      </section>

      <section className="mission-story">
        <div className="mission-story-copy">
          <p>
            To become a leading intelligence and research partner for organizations navigating industrial transformation, technological convergence, and evolving market ecosystems.
          </p>
          <p>
            Intellivist aims to establish a distinct position between commoditized report providers and broad-spectrum consulting firms by delivering focused, high-value intelligence with analytical depth, contextual understanding, and executive-level relevance.
          </p>
          <p>
            Our vision is to build an intelligence-driven organization recognized for helping businesses understand not only where markets are today, but where industries, technologies, and commercial ecosystems are moving next.
          </p>
        </div>
      </section>

      <section className="future-vision-preview-section">
        <div className="future-vision-headline">
          <h2>The Future We See</h2>
          <p>
            We believe the next decade will be defined by the convergence of intelligence, automation, sustainability,
            and ecosystem-driven growth. Organizations that can anticipate these shifts early will create lasting competitive advantages.
          </p>
        </div>

        <div className="future-vision-preview-grid">
          <article className="future-vision-preview-card reveal-on-scroll">
            <span className="future-vision-preview-index">01</span>
            <h3>AI Industries</h3>
            <p>Industries where AI augments decision-making, operations, and product design across core workflows.</p>
          </article>
          <article className="future-vision-preview-card reveal-on-scroll">
            <span className="future-vision-preview-index">02</span>
            <h3>Intelligent Enterprises</h3>
            <p>Organizations built on connected data, adaptive workflows, and real-time leadership decisions.</p>
          </article>
          <article className="future-vision-preview-card reveal-on-scroll">
            <span className="future-vision-preview-index">03</span>
            <h3>Sustainable Systems</h3>
            <p>Models that balance growth, resilience, responsible resource use, and long-term stakeholder value.</p>
          </article>
          <article className="future-vision-preview-card reveal-on-scroll">
            <span className="future-vision-preview-index">04</span>
            <h3>Connected Ecosystems</h3>
            <p>Networks of partners, platforms, and capabilities that create stronger outcomes together.</p>
          </article>
        </div>
      </section>

      <section className="future-vision-roadmap-section">
        <div className="future-vision-roadmap-media">
          <img src="/images/roadmap.avif" alt="Future vision roadmap" loading="lazy" />
        </div>
      </section>

    </main>
  )
}

export default FutureVisionPage
