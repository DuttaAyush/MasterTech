import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/common/Seo'
import { pageSeo } from '../config/seo'
import ContactDatePicker from '../components/contact/ContactDatePicker'

const decisionOptions = [
  'Enter a New Market',
  'Identify Growth Opportunities',
  'Evaluate a Technology',
  'Assess Competition',
  'Find Strategic Partners',
  'Conduct Due Diligence',
  'Validate an Investment Opportunity',
  'Understand Customer Needs',
  'Other',
]

const timelineOptions = ['Immediate', '30 Days', '90 Days', 'Exploring']

const initialForm = {
  name: '',
  email: '',
  company: '',
  phone: '',
  country: '',
  decisionTopics: [],
  timeline: '',
  preferredDate: '',
}

function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [consentTermsAccepted, setConsentTermsAccepted] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    document.body.classList.add('contact-page-active')

    return () => {
      document.body.classList.remove('contact-page-active')
    }
  }, [])

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const toggleDecisionTopic = (option) => {
    setForm((prev) => ({
      ...prev,
      decisionTopics: prev.decisionTopics.includes(option)
        ? prev.decisionTopics.filter((item) => item !== option)
        : [...prev.decisionTopics, option],
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setMessage('')
    setError('')

    if (!consentTermsAccepted) {
      setError('You must agree to the terms and conditions before submitting.')
      setSubmitting(false)
      return
    }

    try {
      await new Promise((resolve) => {
        window.setTimeout(resolve, 400)
      })
      setMessage('Thank you. Your inquiry has been submitted and our team will be in touch shortly.')
      setForm(initialForm)
      setConsentTermsAccepted(false)
    } catch (nextError) {
      setError(nextError.message || 'Could not submit your inquiry right now.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="iv-page-shell">
      <Seo {...pageSeo('contact')} />
      <section className="iv-section iv-contact-v2">
        <div className="iv-contact-v2-head">
          <h1>Tell Us About Your Challenge</h1>
          <p>Whether you&apos;re evaluating a market, technology, competitor, investment, or growth opportunity, our team can help.</p>
        </div>

        <form className="iv-contact-v2-layout" onSubmit={handleSubmit}>
          <div className="iv-contact-v2-form">
            <h2>Ready to grow with Intellivist? Let&apos;s talk business.</h2>
            <input placeholder="Name *" aria-label="Name" value={form.name} onChange={(event) => updateField('name', event.target.value)} required />
            <input type="email" placeholder="Work Email *" aria-label="Work Email" value={form.email} onChange={(event) => updateField('email', event.target.value)} required />
            <input placeholder="Company *" aria-label="Company" value={form.company} onChange={(event) => updateField('company', event.target.value)} required />
            <input placeholder="Phone" aria-label="Phone" value={form.phone} onChange={(event) => updateField('phone', event.target.value)} />
            <input placeholder="Country" aria-label="Country" value={form.country} onChange={(event) => updateField('country', event.target.value)} />

            <p className="iv-contact-v2-check-title iv-contact-v2-full">What decision are you trying to make?</p>
            <div className="iv-contact-v2-check-grid iv-contact-v2-full">
              {decisionOptions.map((option) => (
                <label key={option} className="iv-contact-v2-check-item">
                  <input
                    type="checkbox"
                    checked={form.decisionTopics.includes(option)}
                    onChange={() => toggleDecisionTopic(option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>

            <p className="iv-contact-v2-check-title iv-contact-v2-full">Timeline</p>
            <div className="iv-contact-v2-radio-grid iv-contact-v2-full">
              {timelineOptions.map((option) => (
                <label key={option} className="iv-contact-v2-radio-item">
                  <input
                    type="radio"
                    name="timeline"
                    value={option}
                    checked={form.timeline === option}
                    onChange={(event) => updateField('timeline', event.target.value)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>

            <div className="iv-consent-block iv-contact-v2-full">
              <label className="iv-consent-item">
                <input
                  type="checkbox"
                  checked={consentTermsAccepted}
                  onChange={(event) => setConsentTermsAccepted(event.target.checked)}
                  required
                />
                <span>
                  I agree to the{' '}
                  <Link to="/terms-and-conditions" target="_blank" rel="noopener noreferrer">
                    terms and conditions
                  </Link>
                </span>
              </label>
            </div>
          </div>

          <aside className="iv-contact-v2-panel">
            <h3>Start a Strategic Conversation</h3>
            <ContactDatePicker
              value={form.preferredDate}
              onChange={(preferredDate) => updateField('preferredDate', preferredDate)}
            />
          </aside>

          <div className="iv-contact-v2-form-footer">
            {error ? <p className="iv-form-feedback iv-form-feedback--error">{error}</p> : null}
            {message ? <p className="iv-form-feedback">{message}</p> : null}

            <div className="iv-contact-v2-actions">
              <button type="submit" className="iv-submit-btn" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Start the Conversation'}
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  )
}

export default ContactPage
