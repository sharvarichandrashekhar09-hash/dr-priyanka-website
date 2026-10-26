import { clinicConfig, clinicMapsUrl, whatsappUrl } from '../siteConfig.js'
import ClinicMap from './ClinicMap.jsx'

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="page-shell contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Visit Matruja</p>
          <h2>A welcoming space<br />in <em>Pune.</em></h2>
          <p className="contact-doctor">
            {clinicConfig.doctor}<br />
            {clinicConfig.qualifications} · {clinicConfig.specialty}
          </p>
          <address>{clinicConfig.address}</address>
          <div className="contact-details">
            <a href={`tel:${clinicConfig.phoneLink}`}><span>Call</span><strong>{clinicConfig.phoneDisplay}</strong></a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>Send an enquiry</strong></a>
            {clinicConfig.email !== 'CLINIC_EMAIL' && <a href={`mailto:${clinicConfig.email}`}><span>Email</span><strong>{clinicConfig.email}</strong></a>}
            <div><span>Clinic timings</span><strong>{clinicConfig.timings}</strong></div>
          </div>
        </div>
        <div className="contact-map-card">
          <ClinicMap />
          <div className="map-card-bottom">
            <p><strong>Search this address</strong><span>Check the result before travelling.</span></p>
            <a className="button button-small" href={clinicMapsUrl} target="_blank" rel="noreferrer">Open Maps <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
