import { useEffect } from 'react'
import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import {
  AboutPage,
  AppointmentPage,
  ContactPage,
  EducationArticlePage,
  EducationPage,
  FAQsPage,
  HomePage,
  NotFoundPage,
  OnlineConsultationPage,
  ServiceDetailPage,
  ServicesPage,
  SpecialitiesPage,
} from './pages/SitePages.jsx'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content"><Outlet /></main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

function RouteTable() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="specialities" element={<SpecialitiesPage />} />
        <Route path="online-consultation" element={<OnlineConsultationPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<ServiceDetailPage />} />
        <Route path="patient-education" element={<EducationPage />} />
        <Route path="patient-education/:slug" element={<EducationArticlePage />} />
        <Route path="faqs" element={<FAQsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="appointment" element={<AppointmentPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <RouteTable />
    </BrowserRouter>
  )
}

export default App
