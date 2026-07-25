import Seo from '../components/common/Seo'
import { pageSeo } from '../config/seo'

function TermsPage() {
  return (
    <main className="iv-page-shell">
      <Seo {...pageSeo('terms')} />
      <section className="iv-section iv-legal-page">
        <div className="iv-legal-page__inner">
          <p className="iv-legal-page__eyebrow">Legal</p>
          <h1 className="iv-page-title">Terms & Conditions</h1>
          <p className="iv-copy">
            These Terms & Conditions govern your access to and use of Intellivist websites, research reports,
            subscriptions, downloads, and related market intelligence services. By using our platform, you agree
            to these terms.
          </p>

          <h2>1. Use of Services</h2>
          <p className="iv-copy">
            Intellivist provides market research, industry intelligence, analyst insight, and related business
            content for informational and commercial use. You may use our services only in accordance with
            applicable law and these terms.
          </p>

          <h2>2. Intellectual Property</h2>
          <p className="iv-copy">
            All reports, graphics, written analysis, datasets, and website content are owned by Intellivist or its
            licensors. Purchase or access does not transfer ownership. Content may not be reproduced, republished,
            redistributed, or commercially exploited without prior written permission, except where expressly allowed
            under a purchased license.
          </p>

          <h2>3. Report Licenses and Downloads</h2>
          <p className="iv-copy">
            Access to reports is subject to the license purchased by the client or user. Unless otherwise stated,
            licenses are limited, non-transferable, and intended for internal business use only. Sharing purchased
            reports outside the approved user scope is not permitted.
          </p>

          <h2>4. User Responsibilities</h2>
          <p className="iv-copy">
            You agree to provide accurate information when submitting inquiries, purchasing reports, or creating an
            account. You must not misuse the platform, attempt unauthorized access, disrupt site operations, or use
            our materials in a misleading or unlawful manner.
          </p>

          <h2>5. No Professional Advice</h2>
          <p className="iv-copy">
            Intellivist content is intended for general strategic and commercial insight. It does not constitute legal,
            financial, tax, investment, or other regulated professional advice. Clients should evaluate findings in
            light of their own internal requirements and external advisors.
          </p>

          <h2>6. Accuracy and Forward-Looking Information</h2>
          <p className="iv-copy">
            We aim to provide high-quality and timely research, but markets change quickly. Intellivist does not
            guarantee that all information will always be complete, current, or error-free. Forecasts, estimates,
            and strategic opinions involve assumptions and may change without notice.
          </p>

          <h2>7. Payments and Refunds</h2>
          <p className="iv-copy">
            Pricing for reports and services is displayed at the time of purchase unless otherwise agreed in writing.
            Because digital research products are delivered immediately or made available for download, refunds are
            generally not provided once access has been granted, except where required by law or approved by Intellivist.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p className="iv-copy">
            To the maximum extent permitted by law, Intellivist will not be liable for indirect, incidental, special,
            or consequential damages arising from use of the website, reports, or related services. Our aggregate
            liability in relation to any claim will not exceed the amount paid by you for the relevant service or report.
          </p>

          <h2>9. Third-Party Links and Resources</h2>
          <p className="iv-copy">
            Our website may reference or link to third-party websites, tools, or sources for convenience. Intellivist
            is not responsible for the availability, accuracy, or practices of third-party resources.
          </p>

          <h2>10. Changes to These Terms</h2>
          <p className="iv-copy">
            We may update these Terms & Conditions from time to time to reflect changes in our services, operations,
            or legal obligations. Continued use of the website or services after changes are published constitutes
            acceptance of the updated terms.
          </p>

          <h2>11. Contact</h2>
          <p className="iv-copy">
            For questions regarding these Terms & Conditions, licensing, or use of Intellivist research content,
            please contact us through the contact page.
          </p>
        </div>
      </section>
    </main>
  )
}

export default TermsPage
