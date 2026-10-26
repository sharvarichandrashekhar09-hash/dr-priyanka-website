import { clinicConfig, whatsappUrl } from '../siteConfig.js'
import { Link } from 'react-router-dom'

function Appointment() {
  return (
    <section className="appointment-section" id="appointment">
      <div className="page-shell appointment-inner">
        <div>
          <p className="eyebrow">Your next step</p>
          <h2>Book your <em>consultation.</em></h2>
          <p className="appointment-description">Take the next step towards better women&apos;s health. Get in touch with the clinic to enquire about arranging a visit.</p>
        </div>
        <div className="appointment-actions">
          <Link className="button button-light" to="/appointment">Book Appointment <span aria-hidden="true">↗</span></Link>
          <a className="button button-ghost" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
          <a className="appointment-link" href={`tel:${clinicConfig.phoneLink}`}>Call {clinicConfig.phoneDisplay}</a>
        </div>
        <span className="appointment-decoration" aria-hidden="true">✳</span>
      </div>
    </section>
  )
}

export default Appointment
