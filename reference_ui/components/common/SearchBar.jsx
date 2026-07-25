import { useEffect, useState } from 'react'

function SearchBar({ onSearch, initialValue = '' }) {
  const [value, setValue] = useState(initialValue)
  const prompts = [
    'Search reports, industries, technologies, or market trends...',
    'Try: electric vehicles market outlook',
    'Try: AI chips demand forecast 2030',
    'Try: India healthcare diagnostics growth'
  ]
  const [promptIndex, setPromptIndex] = useState(0)
  const [typedPlaceholder, setTypedPlaceholder] = useState('')

  useEffect(() => {
    const fullText = prompts[promptIndex]
    let charIndex = 0
    let deleting = false

    const typeInterval = setInterval(() => {
      if (!deleting) {
        charIndex += 1
        setTypedPlaceholder(fullText.slice(0, charIndex))
        if (charIndex >= fullText.length) {
          deleting = true
          return
        }
      } else {
        charIndex -= 1
        setTypedPlaceholder(fullText.slice(0, Math.max(charIndex, 0)))
        if (charIndex <= 0) {
          setPromptIndex((prev) => (prev + 1) % prompts.length)
        }
      }
    }, deleting ? 28 : 52)

    return () => clearInterval(typeInterval)
  }, [promptIndex])

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch(value)
  }

  return (
    <form className="market-hero__search-wrap market-hero__actions" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={value ? '' : typedPlaceholder}
        className="market-hero__search-input market-hero__search-input--typing"
        aria-label="Search reports"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" className="market-hero__search-btn"><svg className="market-hero__search-btn-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.8" /><path d="m15.7 15.7 4.3 4.3" /></svg><span>Search</span></button>
    </form>
  )
}

export default SearchBar
