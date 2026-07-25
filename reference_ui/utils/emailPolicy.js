export function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase()
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidEmail(email) {
  return EMAIL_PATTERN.test(normalizeEmail(email))
}

export function getInvalidEmailMessage() {
  return 'Enter a valid email address.'
}
