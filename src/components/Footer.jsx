import logo from '../assets/matruja-logo.jpeg'
import { clinicConfig } from '../siteConfig.js'
import { Link } from 'react-router-dom'

const quickLinks = [
  ['Home', '/'],
  ['About', '/about'],
  ['Specialities', '/specialities'],
  ['Services', '/services'],
  ['Patient Education', '/patient-education'],
  ['FAQs', '/faqs'],
  ['Contact', '/contact'],
]

const footerServices = [
  ['Pregnancy care', '/services/pregnancy-care'],
  ['PCOS / PCOD', '/services/pcos-pcod'],
  ['Fertility guidance', '/services/fertility'],
  ['Menstrual health', '/services/menstrual-health'],
  ['Family planning', '/services/family-planning'],
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-main">
        <div className="footer-about">
          <Link className="brand footer-brand" to="/">
            <img className="brand-logo" src={logo} alt="" />
            <span className="brand-name">Matruja Women&apos;s Clinic <small>{clinicConfig.doctor}</small></span>
          </Link>
          <p>{clinicConfig.doctor}<br />{clinicConfig.qualifications}<br />{clinicConfig.specialty}</p>
          <a className="footer-phone" href={`tel:${clinicConfig.phoneLink}`}>{clinicConfig.phoneDisplay} <span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          {quickLinks.map(([label, href]) => <Link to={href} key={href}>{label}</Link>)}
        </div>
        <div className="footer-column">
          <h2>Areas of care</h2>
          {footerServices.map(([label, href]) => <Link to={href} key={label}>{label}</Link>)}
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <span>© 2026 Matruja Clinic. All rights reserved.</span>
        <Link to="/">Back to home ↑</Link>
      </div>
    </footer>
  )
}

export default Footer
