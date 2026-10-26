import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/matruja-logo.jpeg'
import { serviceCategories } from '../siteData.js'

function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [servicesDismissed, setServicesDismissed] = useState(false)
  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setServicesOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const linkClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`
  const closeMenus = () => setServicesOpen(false)
  const closeServicesAfterSelection = () => {
    setServicesOpen(false)
    setServicesDismissed(true)
  }
  const updateDesktopMenu = (open) => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setServicesOpen(open)
    }
  }
  const openServicesFromHeading = () => {
    setServicesDismissed(false)
    updateDesktopMenu(true)
  }

  return (
    <header className="site-header">
      <nav className="navbar page-shell" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="Matruja Women's Clinic home" onClick={closeMenus}>
          <img className="brand-logo" src={logo} alt="Matruja logo" />
          <span className="brand-copy">
            <strong>Matruja Women&apos;s Clinic</strong>
            <small>Dr. Priyanka Suryawanshi-Raut</small>
          </span>
        </Link>
        <div className="nav-links" id="primary-links">
          <NavLink className={linkClass} to="/" end onClick={closeMenus}>Home</NavLink>
          <NavLink className={linkClass} to="/about" onClick={closeMenus}>About</NavLink>
          <NavLink className={linkClass} to="/specialities" onClick={closeMenus}>Specialities</NavLink>
          <div
            className={`nav-services${servicesOpen ? ' services-open' : ''}${servicesDismissed ? ' services-dismissed' : ''}`}
            onMouseEnter={() => {
              if (!servicesDismissed) updateDesktopMenu(true)
            }}
            onMouseLeave={() => updateDesktopMenu(false)}
            onFocus={openServicesFromHeading}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) updateDesktopMenu(false)
            }}
          >
            <div className="nav-services-heading" onMouseEnter={openServicesFromHeading}>
              <NavLink className={linkClass} to="/services" onClick={closeMenus}>Services</NavLink>
              <button
                className="services-menu-toggle"
                type="button"
                aria-label="Show services menu"
                aria-controls="services-dropdown"
                aria-expanded={servicesOpen}
                onClick={() => {
                  setServicesDismissed(false)
                  setServicesOpen((open) => !open)
                }}
              ><span aria-hidden="true" /></button>
            </div>
            <div className="services-mega-menu" id="services-dropdown">
              {serviceCategories.map((category) => (
                <section key={category.title}>
                  <h2>{category.title}</h2>
                  {category.services.map((service, index) => (
                    <Link key={`${service.slug}-${service.title}-${index}`} to={`/services/${service.slug}`} onClick={closeServicesAfterSelection}>
                      {service.title}
                    </Link>
                  ))}
                </section>
              ))}
            </div>
          </div>
          <NavLink className={linkClass} to="/patient-education" onClick={closeMenus}>Patient Education</NavLink>
          <NavLink className={linkClass} to="/online-consultation" onClick={closeMenus}>Online Consultation</NavLink>
          <NavLink className={linkClass} to="/faqs" onClick={closeMenus}>FAQs</NavLink>
          <NavLink className={linkClass} to="/contact" onClick={closeMenus}>Contact</NavLink>
          <Link className="button button-small" to="/appointment" onClick={closeMenus}>
            Book Appointment <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
