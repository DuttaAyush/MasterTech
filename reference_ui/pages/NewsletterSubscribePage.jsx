import { useState } from 'react'
import Seo from '../components/common/Seo'
import { pageSeo } from '../config/seo'
import { newsletterTopicSections } from '../data/newsletterTopics'

const initialForm = {
  name: '',
  email: '',
  industry: '',
  country: '',
  topics: [],
}

const initialConsents = {
  consentReceiveEmails: false,
}

function NewsletterSubscribePage() {
  const [form, setForm] = useState(initialForm)
  const [consents, setConsents] = useState(initialConsents)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const toggleTopic = (topic) => {
    setForm((prev) => ({
      ...prev,
      topics: prev.topics.includes(topic)
        ? prev.topics.filter((item) => item !== topic)
        : [...prev.topics, topic],
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setMessage('')
    setError('')

    if (!consents.consentReceiveEmails) {
      setError('Please consent to receive emails and newsletters before subscribing.')
      setSubmitting(false)
      return
    }

    try {
      await new Promise((resolve) => {
        window.setTimeout(resolve, 400)
      })
      setMessage('You are subscribed. We will send updates based on the topics you selected.')
      setForm(initialForm)
      setConsents(initialConsents)
    } catch (nextError) {
      setError(nextError.message || 'Could not subscribe right now.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="iv-page-shell">
      <Seo {...pageSeo('newsletter')} />

      <section className="iv-section iv-contact-v2">
        <div className="iv-contact-v2-head">
          <h1>Subscribe to intelligence that matches your market focus</h1>
          <p>Choose the industries and formats you care about, from weekly roundups to fast market alerts and sector-specific insight drops.</p>
        </div>

        <div className="iv-contact-v2-layout">
          <form className="iv-contact-v2-form" onSubmit={handleSubmit}>
            <h2>Build your subscription profile</h2>

            <input
              placeholder="Name"
              aria-label="Name"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            />
            <input
              type="email"
              placeholder="Email *"
              aria-label="Email"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              required
            />
            <input
              placeholder="Industry"
              aria-label="Industry"
              value={form.industry}
              onChange={(event) => setForm((prev) => ({ ...prev, industry: event.target.value }))}
            />
            <input
              placeholder="Country"
              aria-label="Country"
              value={form.country}
              onChange={(event) => setForm((prev) => ({ ...prev, country: event.target.value }))}
            />

            {newsletterTopicSections.map((section) => (
              <div key={section.title} className="iv-contact-v2-full">
                <p className="iv-contact-v2-check-title">{section.title}</p>
                <div className="iv-contact-v2-check-grid">
                  {section.options.map((topic) => (
                    <label key={topic} className="iv-contact-v2-check-item">
                      <input
                        type="checkbox"
                        checked={form.topics.includes(topic)}
                        onChange={() => toggleTopic(topic)}
                      />
                      <span>{topic}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="iv-consent-block iv-contact-v2-full">
              <label className="iv-consent-item">
                <input
                  type="checkbox"
                  checked={consents.consentReceiveEmails}
                  onChange={(event) => setConsents({ consentReceiveEmails: event.target.checked })}
                  required
                />
                <span>I consent to receive emails and newsletters from Intellivist</span>
              </label>
            </div>

            {error ? <p className="iv-form-feedback iv-form-feedback--error iv-contact-v2-full">{error}</p> : null}
            {message ? <p className="iv-form-feedback iv-contact-v2-full">{message}</p> : null}

            <div className="iv-contact-v2-full">
              <button className="iv-submit-btn" type="submit" disabled={submitting}>
                {submitting ? 'Subscribing...' : 'Subscribe now'}
              </button>
            </div>
          </form>

          <aside className="iv-contact-v2-panel">
            <h3>What you will receive</h3>
            <ul>
              <li>Weekly newsletter with research signals, briefs, and strategic takeaways.</li>
              <li>Market alerts when sectors shift, policy changes land, or deal activity spikes.</li>
              <li>Industry-specific insights for Steel, Chemicals, Defense, Infrastructure, and adjacent markets.</li>
            </ul>
            <p className="iv-contact-v2-panel-note">
              Topic-based distribution instead of one generic blast. Coverage shaped around your market interests and geography.
            </p>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default NewsletterSubscribePage
