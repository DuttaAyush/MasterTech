import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function useScrollReveal(selector = '.reveal-on-scroll') {
  const { pathname } = useLocation()

  useEffect(() => {
    const elements = document.querySelectorAll(selector)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [selector, pathname])
}

export default useScrollReveal
