import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { featureContent, navData, primaryNavItems } from '../../../config/navigation'
import './Navbar.css'

function Icon({ children, className = '' }) {
  return <span className={`icon ${className}`}>{children}</span>
}

function Navbar() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredPrimary, setHoveredPrimary] = useState(null)
  const [pinnedPrimary, setPinnedPrimary] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenuItem, setActiveMenuItem] = useState('')
  const navRef = useRef(null)

  const activePrimary = hoveredPrimary || pinnedPrimary
  const activeData = useMemo(
    () => (activePrimary ? navData[activePrimary] : navData['Who we are']),
    [activePrimary]
  )
  const activeLinks = useMemo(() => {
    if (activeData.linksByRail) {
      const selectedRail = activeMenuItem || activeData.rail[0]
      const railLinks = activeData.linksByRail[selectedRail]
      if (Array.isArray(railLinks) && railLinks.length > 0) return railLinks
      return selectedRail ? [selectedRail] : []
    }
    return activeData.links || []
  }, [activeData, activeMenuItem])

  useEffect(() => {
    const onEsc = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setHoveredPrimary(null)
        setPinnedPrimary(null)
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [])

  useEffect(() => {
    const onClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false)
        setPinnedPrimary(null)
        setHoveredPrimary(null)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  useEffect(() => {
    if (!activeData.rail.includes(activeMenuItem)) {
      setActiveMenuItem(activeData.rail[0])
    }
  }, [activeData, activeMenuItem])
  const primaryRoutes = {
    'Who we are': '/purpose-and-values',
    Intelligence: '/intelligence',
    'What we do': '/services',
    Perspectives: '/blogs',
    Blogs: '/blogs',
    Careers: '/work-with-us',
    'Get in touch': '/contact-us',
    'Our Thinking': '/blogs',
  }
  const secondaryRoutes = {
    'What we are': '/purpose-and-values',
    'Purpose & Values': '/purpose-and-values',
    'What we believe in': '/purpose-and-values',
    'Future vision': '/futurevision',
    'Future Vision': '/futurevision',
    'Our mission': '/our-mission',
    'Our Mission': '/our-mission',
    'Expertise Behind Intellivist': '/expertise-behind-intellivist',
    'Our Team': '/our-team',
    'Contact Us': '/contact-us',
    'Contact us': '/contact-us',
    Connect: '/contact-us',
    'Get in touch': '/contact-us',
    'Intelligence Areas': '/intelligence',
    'Autonomous Systems Intelligence': '/intelligence/autonomous-systems-intelligence',
    'Energy Transition Intelligence': '/intelligence/energy-transition-intelligence',
    'Cyber, AI and Digital Infrastructure Intelligence': '/intelligence/cyber-ai-digital-intelligence',
    'Mobility and Logistics Intelligence': '/intelligence/mobility-logistics-intelligence',
    'Aerospace, Defense and Geopolitical Intelligence': '/intelligence/aerospace-defense-geo-intelligence',
    Blogs: '/blogs',
    Services: '/services',
    Reports: '/reports',
    'Research Reports': '/reports',
    Essentials: '/services',
    Advanced: '/services',
    Premium: '/services',
    'Market Assessment': '/services',
    'Ecosystem Mapping': '/services',
    'Supply & Demand Assessment': '/services',
    'Opportunity Assessment': '/services',
    'Competitive Intelligence': '/services',
    'Customer Assessment': '/services',
    'Channel Strategy': '/services',
    'Pricing Intelligence': '/services',
    'Growth Strategy': '/services',
    'Market Entry Strategy': '/services',
    'Portfolio Strategy': '/services',
    'White Space Analysis': '/services',
    'M&A Due Diligence': '/services',
    'New Product Development': '/services',
    'Defence Procurement Facilitation': '/services',
    'Work with us': '/work-with-us',
    'Open roles': '/open-roles',
    'Search jobs': '/open-roles',
    Culture: '/work-with-us#culture',
    Benefits: '/work-with-us#benefits',
    'Learning & Growth': '/work-with-us#learning-growth',
    'Get in touch': '/contact-us',
    Newsletter: '/newsletter',
    'Expert Network': '/expert-network',
  }
  const submenuRoutes = {
    'Contact us': '/contact-us',
    'Newsletter': '/newsletter',
    'Expert Network': '/expert-network',
  }

  return (
    <header
      ref={navRef}
      className="navbar"
      onMouseLeave={() => {
      setHoveredPrimary(null)
      if (!pinnedPrimary) setMenuOpen(false)
    }}
  >
      <div className="navbar-inner">
        <div className="left cmp-header__logo__menu-wrapper">
          <button
            className="hamburger"
            aria-label="Open menu"
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <Link to="/" className="logo cmp-header__logo" aria-label="Intellivist home">
            <img src="/images/brand/intellivist.png" alt="Intellivist" className="logo-image" width="160" height="40" decoding="async" />
          </Link>

          <nav className="primary-nav" aria-label="Primary">
            {primaryNavItems.map((item) => (
              <button
                key={item}
                type="button"
                className={`nav-link ${activePrimary === item ? 'active' : ''}`}
                aria-expanded={menuOpen && activePrimary === item}
                onMouseEnter={() => {
                  setHoveredPrimary(item)
                  setMenuOpen(true)
                }}
                onFocus={() => {
                  setHoveredPrimary(item)
                  setMenuOpen(true)
                }}
                onClick={() => {
                  navigate(primaryRoutes[item] || '/')
                }}
              >
                <span>{item}</span>
                <Icon>
                  <svg viewBox="0 0 12 12" aria-hidden="true">
                    <path d="M2 4.2 6 8 10 4.2" />
                  </svg>
                </Icon>
              </button>
            ))}
          </nav>
        </div>

        <ul className="utilities cmp-header__actions-list" aria-label="Utilities">
          <li className="action-item">
            <button className="utility search" type="button" aria-label="Search" onClick={() => navigate('/reports')}>
              <Icon>
                <svg viewBox="0 0 24 24">
                  <circle cx="10.5" cy="10.5" r="7.4" />
                  <path d="m16.2 16.2 4.8 4.8" />
                </svg>
              </Icon>
              <span>Search</span>
            </button>
          </li>
          <li className="action-item">
            <button className="utility icon-only" type="button" aria-label="Contact" onClick={() => navigate('/contact-us')}>
              <Icon>
                <svg viewBox="0 0 24 24">
                  <rect x="2.5" y="5.5" width="19" height="13" rx="1.2" />
                  <path d="m3.3 6.8 8.7 6.4 8.7-6.4" />
                </svg>
              </Icon>
            </button>
          </li>
        </ul>
      </div>

      <div className={`mega-menu ${menuOpen ? 'open' : ''}`} {...(!menuOpen ? { inert: '' } : {})}>
        <aside className="menu-rail">
          {activeData.rail.map((item) => (
            <button
              key={item}
              type="button"
              className={`rail-link ${activeMenuItem === item ? 'selected' : ''}`}
              onMouseEnter={() => setActiveMenuItem(item)}
              onFocus={() => setActiveMenuItem(item)}
              onClick={() => {
                const route = secondaryRoutes[item]
                if (route) navigate(route)
              }}
            >
              <span>{item}</span>
              <Icon>
                <svg viewBox="0 0 12 12">
                  <path d="M4 2 8 6 4 10" />
                </svg>
              </Icon>
            </button>
          ))}
        </aside>

        <section className="menu-main">
          {activeLinks.map((item) => (
            <Link
              key={item}
              to={secondaryRoutes[item] || submenuRoutes[item] || '/'}
              className="menu-main-link"
            >
              {item}
            </Link>
          ))}
        </section>

        <aside className="menu-feature">
          <h3>{featureContent.title}</h3>
          <img
            className="feature-image"
            src={featureContent.image}
            alt={featureContent.imageAlt}
            width={250}
            height={141}
            loading="lazy"
            decoding="async"
          />
          <p className="menu-feature__heading">{featureContent.heading}</p>
          <Link to={featureContent.ctaHref} className="menu-feature__cta">
            {featureContent.cta}
          </Link>
        </aside>
      </div>

      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        {primaryNavItems.map((item) => (
          <details key={item} className="drawer-group">
            <summary className="drawer-link">{item}</summary>
            <div className="drawer-submenu">
              {navData[item].rail.map((rail) => (
                <div key={rail} className="drawer-rail-block">
                  <button
                    type="button"
                    className="drawer-rail-link"
                    onClick={() => {
                      const route = secondaryRoutes[rail] || primaryRoutes[item] || '/'
                      navigate(route)
                      setMobileOpen(false)
                    }}
                  >
                    {rail}
                  </button>
                  <div className="drawer-rail-items">
                    {(navData[item].linksByRail ? navData[item].linksByRail[rail] : navData[item].links || []).map((sub) => (
                      <button
                        key={`${rail}-${sub}`}
                        type="button"
                        className="drawer-sub-link"
                        onClick={() => {
                          const route = secondaryRoutes[sub] || secondaryRoutes[rail] || primaryRoutes[item] || '/'
                          navigate(route)
                          setMobileOpen(false)
                        }}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </header>
  )
}

export default Navbar





