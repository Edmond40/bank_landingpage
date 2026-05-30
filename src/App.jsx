import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import LandingPage from './pages/LandingPage'
import ReceiptPage from './pages/ReceiptPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default function App() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/login"
          element={
            <PageTransition>
              <LoginPage />
            </PageTransition>
          }
        />
        <Route
          path="/"
          element={
            <PublicLayout>
              <PageTransition>
                <LandingPage />
              </PageTransition>
            </PublicLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PublicLayout>
              <PageTransition>
                <AboutPage />
              </PageTransition>
            </PublicLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <PublicLayout>
              <PageTransition>
                <ContactPage />
              </PageTransition>
            </PublicLayout>
          }
        />
        <Route
          path="/receipt"
          element={
            <PageTransition>
              <ReceiptPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}
