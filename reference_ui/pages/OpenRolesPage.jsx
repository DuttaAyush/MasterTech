import { Link } from 'react-router-dom'
import Seo from '../components/common/Seo'
import { pageSeo } from '../config/seo'
import './OpenRolesPage.css'

const openings = [
  {
    title: 'Market Intelligence Analyst',
    type: 'Full-time',
    location: 'Hybrid • India',
    summary:
      'Build market sizing models, competitive scans, and decision-ready client briefings across priority sectors.',
  },
  {
    title: 'Business Strategy Associate',
    type: 'Full-time',
    location: 'Hybrid • India',
    summary:
      'Support growth strategy engagements, GTM recommendations, and strategic roadmap design for enterprise clients.',
  },
  {
    title: 'Research Operations Specialist',
    type: 'Full-time',
    location: 'On-site • India',
    summary:
      'Drive research workflows, quality control standards, and cross-team delivery execution for high-impact projects.',
  },
  {
    title: 'Data & Insights Analyst',
    type: 'Full-time',
    location: 'Remote • India',
    summary:
      'Transform raw datasets into strategic insights through analysis, dashboards, and executive narrative synthesis.',
  },
]

const hiringSteps = [
  {
    step: '01',
    title: 'Application Review',
    detail: 'We review your profile, experience, and alignment with the role requirements.',
  },
  {
    step: '02',
    title: 'Analytical Assessment',
    detail: 'A case-based or analytical task designed to evaluate your problem-solving approach.',
  },
  {
    step: '03',
    title: 'Team Interview',
    detail: 'A functional conversation with research and strategy teams to assess depth and collaboration.',
  },
  {
    step: '04',
    title: 'Final Discussion',
    detail: 'A discussion on role fit, ownership expectations, and your growth trajectory at Intellivist.',
  },
]

function OpenRolesPage() {
  return (
    <main className="or-page">
      <Seo {...pageSeo('openRoles')} />

      {/* HERO */}
      <section className="or-hero" aria-label="Open roles hero">
        <img src="/images/open-roles.avif" alt="Team environment" className="or-hero-image" />
        <div className="or-hero-overlay" />
        <div className="or-hero-content">
          <p className="or-breadcrumb">
            <Link to="/work-with-us">Careers</Link>
            <span aria-hidden="true"> &gt; </span>
            <span>Open Roles</span>
          </p>
          <h1>Find Your Role.<br />Shape the Future.</h1>
          <p className="or-hero-sub">
            Join Intellivist to solve complex market and strategy challenges with teams that value ownership, clarity, and measurable business impact.
          </p>
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section className="or-openings-section" aria-label="Current openings">
        <div className="or-openings-inner">
          <div className="or-openings-header">
            <h2>Current Openings</h2>
            <p>We are looking for sharp, curious minds who want to do work that matters.</p>
          </div>
          <div className="or-openings-list">
            {openings.slice(0, 4).map((role) => (
              <article key={role.title} className="or-role-card">
                <div className="or-role-info">
                  <h3>{role.title}</h3>
                  <p className="or-role-summary">{role.summary}</p>
                </div>
                <div className="or-role-meta-col">
                  <span className="or-role-badge">{role.type}</span>
                  <span className="or-role-location">{role.location}</span>
                  <a href="mailto:careers@intellivist.com" className="or-apply-link">Apply &rarr;</a>
                </div>
              </article>
            ))}
          </div>
          <div className="or-openings-actions">
            <Link to="/work-with-us" className="or-view-all-btn">View All Openings</Link>
          </div>
        </div>
      </section>

      {/* PARALLAX QUOTE */}
      <section className="or-parallax-quote" aria-label="Quote">
        <div className="or-parallax-overlay" />
        <div className="or-parallax-content">
          <p>We don&apos;t hire for roles. We hire for impact.</p>
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className="or-process-section" aria-label="Hiring process">
        <div className="or-process-inner">
          <h2>How We Hire</h2>
          <p className="or-process-intro">
            Our process is designed to be transparent, efficient, and respectful of your time.
          </p>
          <div className="or-process-grid">
            {hiringSteps.map((item) => (
              <div key={item.step} className="or-process-step">
                <span className="or-step-num">{item.step}</span>
                <div className="or-step-connector" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY CTA */}
      <section className="or-apply-section" aria-label="How to apply">
        <div className="or-apply-inner">
          <h2>Ready to Apply?</h2>
          <p>Send your resume and a short note about the role you're interested in.</p>
          <a href="mailto:careers@intellivist.com" className="or-apply-cta">careers@intellivist.com</a>
          <Link to="/work-with-us" className="or-back-link">&larr; Back to Careers</Link>
        </div>
      </section>
    </main>
  )
}

export default OpenRolesPage
