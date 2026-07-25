import { industries } from '../data/industries'
import IndustryCard from '../components/common/IndustryCard'
import SectionHeader from '../components/common/SectionHeader'
import Seo from '../components/common/Seo'
import { pageSeo } from '../config/seo'

function IndustriesPage() {
  return (
    <main className="iv-page-shell">
      <Seo {...pageSeo('industries')} />
      <section className="iv-section">
        <SectionHeader title="Industries" subtitle="Coverage designed for sector-specific strategic decisions." />
        <div className="iv-grid">{industries.map((industry) => <IndustryCard key={industry.id} industry={industry} />)}</div>
      </section>
    </main>
  )
}

export default IndustriesPage

