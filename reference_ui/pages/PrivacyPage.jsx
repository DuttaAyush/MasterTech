import Seo from '../components/common/Seo'
import { pageSeo } from '../config/seo'

function PrivacyPage() {
  return (
    <main className="iv-page-shell">
      <Seo {...pageSeo('privacy')} />
      <section className="iv-section iv-legal-page">
        <div className="iv-legal-page__inner">
          <p className="iv-legal-page__eyebrow">Legal</p>
          <h1 className="iv-page-title">Privacy Policy</h1>
          <p className="iv-copy">
            This Privacy Policy explains how Intellivist collects, uses, stores, and protects information when you
            visit our website, submit an inquiry, subscribe to updates, purchase research, or otherwise engage with
            our market intelligence services.
          </p>

          <h2>1. Information We Collect</h2>
          <p className="iv-copy">
            We may collect information such as your name, company name, business email address, phone number,
            billing details, inquiry details, and information you provide when requesting reports, demos, analyst
            support, or contact from our team.
          </p>

          <h2>2. How We Use Information</h2>
          <p className="iv-copy">
            Intellivist uses collected information to respond to inquiries, deliver research products, process
            transactions, provide customer support, improve our website and offerings, send business updates or
            newsletters where permitted, and maintain the security of our systems and services.
          </p>

          <h2>3. Business Communications</h2>
          <p className="iv-copy">
            If you contact us or register interest in our reports or services, we may communicate with you about
            relevant market intelligence, service updates, subscriptions, or account-related matters. You may opt
            out of non-essential promotional communications at any time.
          </p>

          <h2>4. Sharing of Information</h2>
          <p className="iv-copy">
            We do not sell personal information. We may share information with trusted service providers, payment
            processors, technology partners, or professional advisors who support our operations and are required to
            handle data appropriately. We may also disclose information when required by law or to protect our rights.
          </p>

          <h2>5. Cookies and Website Usage Data</h2>
          <p className="iv-copy">
            Our website may use cookies, analytics tools, and similar technologies to understand traffic patterns,
            improve user experience, and monitor website performance. These tools may collect browser, device, IP,
            and interaction data.
          </p>

          <h2>6. Data Security</h2>
          <p className="iv-copy">
            Intellivist takes reasonable technical and organizational measures to protect information against
            unauthorized access, misuse, loss, alteration, or disclosure. However, no method of internet transmission
            or electronic storage can be guaranteed as completely secure.
          </p>

          <h2>7. Data Retention</h2>
          <p className="iv-copy">
            We retain information only for as long as necessary for business, contractual, legal, compliance, and
            operational purposes, including recordkeeping, transaction support, and dispute resolution.
          </p>

          <h2>8. Your Choices and Rights</h2>
          <p className="iv-copy">
            Subject to applicable law, you may request access to, correction of, or deletion of your personal
            information, or ask us to limit certain uses of it. You may also unsubscribe from marketing emails using
            the option included in those communications.
          </p>

          <h2>9. Third-Party Services</h2>
          <p className="iv-copy">
            Our website may contain links to third-party websites or use third-party tools for payments, analytics,
            or communications. We are not responsible for the privacy practices of those third parties.
          </p>

          <h2>10. Policy Updates</h2>
          <p className="iv-copy">
            We may update this Privacy Policy from time to time to reflect changes in our services, technologies,
            or legal requirements. The latest version published on this website will apply.
          </p>

          <h2>11. Contact</h2>
          <p className="iv-copy">
            If you have questions about this Privacy Policy or how Intellivist handles information, please contact us
            through the contact page.
          </p>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPage
