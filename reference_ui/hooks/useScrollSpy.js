import { useEffect } from 'react'

const DEFAULT_OFFSET = 132

export function useScrollSpy(sectionIds, onActiveChange, options = {}) {
  const offset = options.offset ?? DEFAULT_OFFSET
  const enabled = options.enabled ?? true

  useEffect(() => {
    if (!enabled || !sectionIds.length) return undefined

    let frameId = 0

    const updateActive = () => {
      let activeId = sectionIds[0]

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (!element) continue

        const top = element.getBoundingClientRect().top
        if (top - offset <= 1) {
          activeId = id
        }
      }

      onActiveChange(activeId)
    }

    const scheduleUpdate = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(updateActive)
    }

    const setup = () => {
      const hasTargets = sectionIds.some((id) => document.getElementById(id))
      if (!hasTargets) return false

      scheduleUpdate()
      window.addEventListener('scroll', scheduleUpdate, { passive: true })
      window.addEventListener('resize', scheduleUpdate)
      return true
    }

    let retryTimer = null
    if (!setup()) {
      retryTimer = window.setTimeout(setup, 120)
    }

    return () => {
      cancelAnimationFrame(frameId)
      if (retryTimer) window.clearTimeout(retryTimer)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [sectionIds, onActiveChange, offset, enabled])
}

export function scrollToSection(id, options = {}) {
  const offset = options.offset ?? DEFAULT_OFFSET
  const element = document.getElementById(id)
  if (!element) return false

  const top = element.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
  return true
}
