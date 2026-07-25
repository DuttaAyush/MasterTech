import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/common/Seo'
import { pageSeo } from '../config/seo'
import { expertExpertiseAreas, expertSeniorityLevels } from '../data/expertProfileOptions'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  linkedInProfile: '',
  country: '',
  city: '',
  currentCompany: '',
  designation: '',
  seniorityLevel: '',
  yearsOfExperience: '',
  industry: '',
  functionalExpertise: '',
  previousCompanies: '',
  expertiseAreas: [],
  tags: '',
  biography: '',
  keyAchievements: '',
  languages: '',
  availability: '',
}

const initialConsents = {
  consentContactByIntellivist: false,
  consentResearchUse: false,
  consentNoConfidentialInfo: false,
}

const expertConsentItems = [
  {
    key: 'consentContactByIntellivist',
    label: 'I agree to be contacted by Intellivist',
  },
  {
    key: 'consentResearchUse',
    label: 'I understand my insights may be used in research outputs',
  },
  {
    key: 'consentNoConfidentialInfo',
    label: 'I confirm I will not share confidential employer information',
  },
]

function ExpertNetworkPage() {
  const [form, setForm] = useState(initialForm)
  const [consents, setConsents] = useState(initialConsents)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const toggleExpertiseArea = (area) => {
    setForm((prev) => ({
      ...prev,
      expertiseAreas: prev.expertiseAreas.includes(area)
        ? prev.expertiseAreas.filter((item) => item !== area)
        : [...prev.expertiseAreas, area],
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setMessage('')
    setError('')

    if (!consents.consentContactByIntellivist || !consents.consentResearchUse || !consents.consentNoConfidentialInfo) {
      setError('Please accept all consent statements before submitting.')
      setSubmitting(false)
      return
    }

    try {
      await new Promise((resolve) => {
        window.setTimeout(resolve, 400)
      })
      setMessage('Thank you. Your expert profile has been submitted to the Intellivist intelligence network.')
      setForm(initialForm)
      setConsents(initialConsents)
    } catch (nextError) {
      setError(nextError.message || 'Could not submit your profile right now.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="iv-page-shell">
      <Seo {...pageSeo('expertNetwork')} />

      <section className="iv-section iv-contact-v2">
        <div className="iv-contact-v2-head">
          <h1>Join our intelligence expert network</h1>
          <p>
            Share your operating experience, functional depth, and sector perspective. We build a searchable expert
            database to match the right voices to research, diligence, and advisory projects.
          </p>
        </div>

        <div className="iv-contact-v2-layout">
          <form className="iv-contact-v2-form iv-contact-v2-form--expert" onSubmit={handleSubmit}>
            <h2>Expert profile</h2>

            <p className="iv-form-section-title iv-contact-v2-full">Personal information</p>
            <input placeholder="Name *" aria-label="Name" value={form.name} onChange={(event) => updateField('name', event.target.value)} required />
            <input type="email" placeholder="Email *" aria-label="Email" value={form.email} onChange={(event) => updateField('email', event.target.value)} required />
            <input placeholder="Phone" aria-label="Phone" value={form.phone} onChange={(event) => updateField('phone', event.target.value)} />
            <input placeholder="LinkedIn profile" aria-label="LinkedIn profile" value={form.linkedInProfile} onChange={(event) => updateField('linkedInProfile', event.target.value)} />
            <input placeholder="Country" aria-label="Country" value={form.country} onChange={(event) => updateField('country', event.target.value)} />
            <input placeholder="City" aria-label="City" value={form.city} onChange={(event) => updateField('city', event.target.value)} />

            <p className="iv-form-section-title iv-contact-v2-full">Professional information</p>
            <input placeholder="Current company" aria-label="Current company" value={form.currentCompany} onChange={(event) => updateField('currentCompany', event.target.value)} />
            <input placeholder="Designation" aria-label="Designation" value={form.designation} onChange={(event) => updateField('designation', event.target.value)} />
            <select aria-label="Seniority level" value={form.seniorityLevel} onChange={(event) => updateField('seniorityLevel', event.target.value)}>
              <option value="">Seniority level</option>
              {expertSeniorityLevels.map((level) => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
            <input type="number" min="0" placeholder="Years of experience" aria-label="Years of experience" value={form.yearsOfExperience} onChange={(event) => updateField('yearsOfExperience', event.target.value)} />
            <input placeholder="Industry" aria-label="Industry" value={form.industry} onChange={(event) => updateField('industry', event.target.value)} />
            <input placeholder="Functional expertise" aria-label="Functional expertise" value={form.functionalExpertise} onChange={(event) => updateField('functionalExpertise', event.target.value)} />
            <input className="iv-contact-v2-full" placeholder="Previous companies" aria-label="Previous companies" value={form.previousCompanies} onChange={(event) => updateField('previousCompanies', event.target.value)} />

            <p className="iv-form-section-title iv-contact-v2-full">Expertise areas</p>
            <div className="iv-contact-v2-check-grid iv-contact-v2-full">
              {expertExpertiseAreas.map((area) => (
                <label key={area} className="iv-contact-v2-check-item">
                  <input
                    type="checkbox"
                    checked={form.expertiseAreas.includes(area)}
                    onChange={() => toggleExpertiseArea(area)}
                  />
                  <span>{area}</span>
                </label>
              ))}
            </div>

            <input
              className="iv-contact-v2-full"
              placeholder="Expert tags (comma separated) e.g. UAVs, EAF, India"
              aria-label="Expert tags"
              value={form.tags}
              onChange={(event) => updateField('tags', event.target.value)}
            />

            <p className="iv-form-section-title iv-contact-v2-full">Additional information</p>
            <textarea className="iv-contact-v2-full" placeholder="Biography" aria-label="Biography" rows="4" value={form.biography} onChange={(event) => updateField('biography', event.target.value)} />
            <textarea className="iv-contact-v2-full" placeholder="Key achievements" aria-label="Key achievements" rows="4" value={form.keyAchievements} onChange={(event) => updateField('keyAchievements', event.target.value)} />
            <input placeholder="Languages" aria-label="Languages" value={form.languages} onChange={(event) => updateField('languages', event.target.value)} />
            <input placeholder="Availability" aria-label="Availability" value={form.availability} onChange={(event) => updateField('availability', event.target.value)} />

            <div className="iv-consent-block iv-contact-v2-full">
              {expertConsentItems.map((item) => (
                <label key={item.key} className="iv-consent-item">
                  <input
                    type="checkbox"
                    checked={consents[item.key]}
                    onChange={(event) => setConsents((prev) => ({ ...prev, [item.key]: event.target.checked }))}
                    required
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>

            {error ? <p className="iv-form-feedback iv-form-feedback--error iv-contact-v2-full">{error}</p> : null}
            {message ? <p className="iv-form-feedback iv-contact-v2-full">{message}</p> : null}

            <div className="iv-contact-v2-full">
              <button className="iv-submit-btn" type="submit" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit expert profile'}
              </button>
            </div>
          </form>

          <aside className="iv-contact-v2-panel">
            <h3>Why join</h3>
            <ul>
              <li>Contribute to sector research, diligence, and executive advisory projects.</li>
              <li>Get matched by industry, geography, expertise, and functional role.</li>
              <li>Build a tagged profile that helps our team find the right expert instantly.</li>
            </ul>
            <p className="iv-contact-v2-panel-note">
              Example tags: Defense, UAVs, Aerospace Materials, India — or Steel, Scrap Recycling, EAF, India.
            </p>
            <Link to="/newsletter" className="iv-contact-v2-inline-link">Subscribe to newsletter</Link>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default ExpertNetworkPage
