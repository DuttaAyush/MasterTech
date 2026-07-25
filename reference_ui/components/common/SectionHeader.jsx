function SectionHeader({ title, subtitle }) {
  return (
    <header className="iv-section-header reveal-on-scroll">
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </header>
  )
}

export default SectionHeader

