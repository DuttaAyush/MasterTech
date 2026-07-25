import { Link } from 'react-router-dom'
import './Footer.css'

const primaryLinks = ['Get in touch', 'Explore careers', 'View locations', 'Learn about Intellivist']
const siteLinks = ['Who we are', 'What we do', 'Our thinking', 'Submit RFP']
const mediaLinks = ['Newsroom', 'Events', 'Press releases']
const socialLinks = ['f', 'X', 'in', 'YT']
const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-and-conditions' },
]

function Footer() {
  const siteRoute = (item) => {
    if (item === 'Who we are') return '/purpose-and-values'
    if (item === 'What we do') return '/reports'
    if (item === 'Our thinking') return '/blogs'
    return '/contact-us'
  }

  return (
    <footer className="deloitte-footer">
      <div className="footer-main">
        <h2 className="footer-title">Let's connect</h2>
        <div className="footer-grid">
          <div className="footer-col footer-col-primary">
            {primaryLinks.map((item) => <Link key={item} to={item === 'Explore careers' ? '/careers' : '/contact-us'} className="footer-top-link">{item}</Link>)}
          </div>
          <div className="footer-col">
            {siteLinks.map((item) => <Link key={item} to={siteRoute(item)} className="footer-sub-link">{item}</Link>)}
          </div>
          <div className="footer-col">
            {mediaLinks.map((item) => <Link key={item} to="/blogs" className="footer-sub-link">{item}</Link>)}
          </div>
          <div className="footer-social">
            <Link to="/" className="footer-brand__link footer-brand__link--social" aria-label="Intellivist home">
              <img src="/images/brand/intellivist.png" alt="Intellivist" className="footer-brand__logo footer-brand__logo--social" width="160" height="40" decoding="async" />
            </Link>
            <p>Follow us</p>
            <div className="footer-social-icons">{socialLinks.map((item) => <a key={item} href="#" aria-label={`Follow on ${item}`}>{item}</a>)}</div>
          </div>
        </div>
        <div className="footer-legal-links">
          {legalLinks.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
        </div>
      </div>
    </footer>
  )
}

export default Footer

