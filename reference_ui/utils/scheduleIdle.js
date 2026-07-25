export function scheduleIdleWork(callback, timeout = 1500) {
  if (typeof window === 'undefined') {
    callback()
    return undefined
  }

  const isMobile = window.matchMedia('(max-width: 768px)').matches
  if (!isMobile) {
    callback()
    return undefined
  }

  if ('requestIdleCallback' in window) {
    const idleId = window.requestIdleCallback(callback, { timeout })
    return () => window.cancelIdleCallback(idleId)
  }

  const timeoutId = window.setTimeout(callback, 300)
  return () => window.clearTimeout(timeoutId)
}

export function getInitialMobileMatch() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(max-width: 768px)').matches
}
