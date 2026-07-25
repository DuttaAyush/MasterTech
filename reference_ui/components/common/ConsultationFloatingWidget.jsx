import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Calendar, Mail, MessageCircle } from 'lucide-react'
import './ConsultationFloatingWidget.css'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL
const HOME_SCROLL_CM = 5
const homeScrollThresholdPx = () => HOME_SCROLL_CM * (96 / 2.54)

function buildWhatsAppUrl(number) {
  const digits = String(number || '').replace(/\D/g, '')
  return digits ? `https://wa.me/${digits}` : ''
}

function ConsultationFloatingWidget() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [open, setOpen] = useState(false)
  const [homeScrollReady, setHomeScrollReady] = useState(() => {
    if (typeof window === 'undefined') return true
    if (window.location.pathname !== '/') return true
    if (window.matchMedia('(min-width: 769px)').matches) return true
    return window.scrollY >= homeScrollThresholdPx()
  })
  const widgetRef = useRef(null)

  const whatsappUrl = buildWhatsAppUrl(WHATSAPP_NUMBER)
  const emailHref = CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : ''

  useEffect(() => {
    if (!open) return undefined

    const handlePointerDown = (event) => {
      if (!widgetRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  useEffect(() => {
    if (!isHome) {
      setHomeScrollReady(true)
      return undefined
    }

    const mobileQuery = window.matchMedia('(max-width: 768px)')

    const syncVisibility = () => {
      if (!mobileQuery.matches) {
        setHomeScrollReady(true)
        return
      }

      setHomeScrollReady(window.scrollY >= homeScrollThresholdPx())
    }

    syncVisibility()
    window.addEventListener('scroll', syncVisibility, { passive: true })
    mobileQuery.addEventListener('change', syncVisibility)

    return () => {
      window.removeEventListener('scroll', syncVisibility)
      mobileQuery.removeEventListener('change', syncVisibility)
    }
  }, [isHome])

  useEffect(() => {
    if (!homeScrollReady && open) {
      setOpen(false)
    }
  }, [homeScrollReady, open])

  const close = () => setOpen(false)

  return (
    <div
      className={`consultation-widget ${open ? 'is-open' : ''} ${homeScrollReady ? '' : 'is-home-gated'}`}
      ref={widgetRef}
    >
      <div className="consultation-widget__shutter" aria-hidden={!open}>
        <div className="consultation-widget__shutter-inner">
          <div className="consultation-widget__options" role="menu" aria-label="Consultation options">
            <Link className="consultation-widget__option" to="/contact-us" role="menuitem" onClick={close}>
              <Calendar size={18} />
              <span>Schedule a Call</span>
            </Link>

            {whatsappUrl ? (
              <a
                className="consultation-widget__option"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                onClick={close}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </a>
            ) : null}

            {emailHref ? (
              <a className="consultation-widget__option" href={emailHref} role="menuitem" onClick={close}>
                <Mail size={18} />
                <span>Email Us</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="consultation-widget__trigger"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <span>Schedule a consultation</span>
      </button>
    </div>
  )
}

export default ConsultationFloatingWidget
