import './TestimonialsSection.css'

const testimonials = [
  {
    quote: 'Intellivist gave our category leadership team a common source of truth across 19 markets. We accelerated decision cycles and improved launch confidence quarter over quarter.',
    name: 'Amanda Lewis',
    role: 'SVP, Global Strategy',
    company: 'Fortune 100 CPG Group'
  },
  {
    quote: 'Their industry-level demand intelligence helped us re-prioritize capital allocation within six weeks. The board now reviews these signals in every planning cycle.',
    name: 'Victor Han',
    role: 'Chief Growth Officer',
    company: 'Global Retail Enterprise'
  },
  {
    quote: 'What stood out was consistency: clear methodology, transparent assumptions, and practical recommendations our regional teams could execute immediately.',
    name: 'Neha Kapoor',
    role: 'Head of Market Insights',
    company: 'Top 50 Technology Firm'
  },
  {
    quote: 'We used Intellivist benchmarks to redesign our go-to-market model in APAC. Within two quarters, we saw stronger pipeline quality and better forecast accuracy.',
    name: 'Daniel Brooks',
    role: 'Regional President',
    company: 'Enterprise Software Leader'
  },
  {
    quote: 'The reports are not just data-heavy; they are decision-ready. Every insight maps directly to pricing, portfolio, or channel strategy for senior leadership.',
    name: 'Sara Mehta',
    role: 'VP, Corporate Planning',
    company: 'Fortune 500 Industrial Group'
  }
]

const track = [...testimonials, ...testimonials]

function TestimonialsSection() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="testimonials-head">
        <p className="testimonials-kicker">Client Voice</p>
        <h2 id="testimonials-heading">What Our Clients Say</h2>
        <p className="testimonials-subtitle">
          Trusted by strategy, growth, and insights teams
          <br />
          at leading global enterprises.
        </p>
      </div>

      <div className="testimonials-marquee" aria-label="Client testimonials">
        <div className="testimonials-track">
          {track.map((item, index) => (
            <article key={`${item.name}-${index}`} className="testimonial-card">
              <p className="testimonial-quote">"{item.quote}"</p>
              <div className="testimonial-person">
                <span className="testimonial-avatar" aria-hidden="true">{item.name.charAt(0)}</span>
                <div>
                  <p className="testimonial-name">{item.name}</p>
                  <p className="testimonial-role">{item.role}</p>
                  <p className="testimonial-company">{item.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
