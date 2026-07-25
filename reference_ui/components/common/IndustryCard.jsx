function IndustryCard({ industry }) {
  return (
    <article className="iv-card reveal-on-scroll">
      <div className="iv-industry-icon" aria-hidden="true">{industry.icon}</div>
      <h3>{industry.name}</h3>
      <p>{industry.description}</p>
      <p className="iv-muted">{industry.reportCount} reports</p>
      <div className="iv-card-tags">{industry.trendingTopics.map((topic) => <span key={topic}>{topic}</span>)}</div>
    </article>
  )
}

export default IndustryCard

