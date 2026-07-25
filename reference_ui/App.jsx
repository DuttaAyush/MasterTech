import { lazy, Suspense, useEffect } from 'react'
import { Navigate, Routes, Route, useLocation, useParams } from 'react-router-dom'
import Navbar from './components/layout/header/Navbar'
import Footer from './components/layout/footer/Footer'
import useScrollReveal from './hooks/useScrollReveal'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'))
const IntelligencePage = lazy(() => import('./pages/IntelligencePage'))
const IntelligenceAreaDetailsPage = lazy(() => import('./pages/IntelligenceAreaDetailsPage'))
const ReportsPage = lazy(() => import('./pages/ReportsPage'))
const ReportDetailsPage = lazy(() => import('./pages/ReportDetailsPage'))
const Blogs = lazy(() => import('./pages/Blogs'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const ConsultationFloatingWidget = lazy(() => import('./components/common/ConsultationFloatingWidget'))
const ExpertNetworkPage = lazy(() => import('./pages/ExpertNetworkPage'))
const InsightsPage = lazy(() => import('./pages/InsightsPage'))
const NewsletterSubscribePage = lazy(() => import('./pages/NewsletterSubscribePage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const PurposeAndValuesPage = lazy(() => import('./pages/PurposeAndValuesPage'))
const FutureVisionPage = lazy(() => import('./pages/FutureVisionPage'))
const OurTeamPage = lazy(() => import('./pages/OurTeamPage'))
const OurMissionPage = lazy(() => import('./pages/OurMissionPage'))
const ServicesPage = lazy(() => import('./pages/services/ServicesPage'))
const EssentialsPage = lazy(() => import('./pages/services/EssentialsPage'))
const AdvancedPage = lazy(() => import('./pages/services/AdvancedPage'))
const PremiumPage = lazy(() => import('./pages/services/PremiumPage'))
const WorkWithUsPage = lazy(() => import('./pages/WorkWithUsPage'))
const OpenRolesPage = lazy(() => import('./pages/OpenRolesPage'))

function PageFallback() {
  return <div className="page-route-fallback" aria-hidden="true" />
}

function LegacyBlogRedirect() {
  const { slug } = useParams()
  return <Navigate to={`/blogs/${slug}`} replace />
}

function App() {
  useScrollReveal()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="page">
      <Navbar />
      <main id="main-content">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/purpose-and-values" element={<PurposeAndValuesPage />} />
            <Route path="/futurevision" element={<FutureVisionPage />} />
            <Route path="/our-mission" element={<OurMissionPage />} />
            <Route path="/expertise-behind-intellivist" element={<OurTeamPage />} />
            <Route path="/our-team" element={<Navigate to="/expertise-behind-intellivist" replace />} />
            <Route path="/contacts" element={<Navigate to="/contact-us" replace />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/intelligence" element={<IntelligencePage />} />
            <Route path="/intelligence/:areaId" element={<IntelligenceAreaDetailsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/essentials" element={<EssentialsPage />} />
            <Route path="/services/advanced" element={<AdvancedPage />} />
            <Route path="/services/premium" element={<PremiumPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/reports/:slug" element={<ReportDetailsPage />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<InsightsPage />} />
            <Route path="/insights/:slug" element={<LegacyBlogRedirect />} />
            <Route path="/our-thinking" element={<Navigate to="/blogs" replace />} />
            <Route path="/our-thinking/:slug" element={<LegacyBlogRedirect />} />
            <Route path="/careers" element={<Navigate to="/work-with-us" replace />} />
            <Route path="/work-with-us" element={<WorkWithUsPage />} />
            <Route path="/open-roles" element={<OpenRolesPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/newsletter" element={<NewsletterSubscribePage />} />
            <Route path="/expert-network" element={<ExpertNetworkPage />} />
            <Route path="/contactus" element={<Navigate to="/contact-us" replace />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ConsultationFloatingWidget />
      </Suspense>
      <button type="button" className="home-scroll-top" onClick={scrollToTop} aria-label="Back to top">
        ↑
      </button>
    </div>
  )
}

export default App
