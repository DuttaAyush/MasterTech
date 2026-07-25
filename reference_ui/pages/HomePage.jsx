import { useNavigate } from 'react-router-dom'
import HeroSection from '../components/sections/hero/HeroSection'
import FeaturedBlogsSection from '../components/sections/featured/FeaturedBlogsSection'
import LatestReportsSection from '../components/sections/latest-reports/LatestReportsSection'
import IndustryViewSection from '../components/sections/industry-view/IndustryViewSection'
import TestimonialsSection from '../components/sections/testimonials/TestimonialsSection'
import Seo from '../components/common/Seo'
import { pageSeo } from '../config/seo'
import { buildOrganizationJsonLd, buildWebsiteJsonLd } from '../utils/seo'

function HomePage() {
  const navigate = useNavigate()

  return (
    <>
      <Seo
        {...pageSeo('home')}
        jsonLd={[buildOrganizationJsonLd(), buildWebsiteJsonLd()]}
      />
      <HeroSection
        onSearch={(query) => navigate(`/reports?q=${encodeURIComponent(query)}`)}
        onBrowseIndustries={() => navigate('/intelligence')}
        onExplorePerspectives={() => navigate('/blogs')}
        onWhatWeDo={() => navigate('/services')}
      />
      <FeaturedBlogsSection />
      <LatestReportsSection />
      <IndustryViewSection />
      <TestimonialsSection />
    </>
  )
}

export default HomePage
