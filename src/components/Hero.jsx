import doctorPhoto from '../assets/dr-priyanka.jpeg'
import { Link } from 'react-router-dom'
import { clinicConfig } from '../siteConfig.js'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="page-shell hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-consultation">Matruja Women&apos;s Clinic · Pune</p>
          <h1>Compassionate care for <em>every stage of womanhood.</em></h1>
          <p className="hero-description">
            Personalized gynaecological and obstetric care by Dr. Priyanka Suryawanshi-Raut, focused on listening, understanding and thoughtful, evidence-based care.
          </p>
          <div className="doctor-credentials">
            <span className="credential-rule" />
            <span>
              <strong>{clinicConfig.doctor}</strong>
              <small>{clinicConfig.qualifications} <span aria-hidden="true">·</span> {clinicConfig.specialty}</small>
            </span>
          </div>
          <div className="hero-actions">
            <Link className="button" to="/appointment">Book an appointment <span aria-hidden="true">↗</span></Link>
            <a className="button button-outline hero-phone" href={`tel:${clinicConfig.phoneLink}`}>
              Call {clinicConfig.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-photo-frame">
            <img className="hero-photo" src={doctorPhoto} alt="Dr. Priyanka Suryawanshi-Raut, Gynaecologist and Obstetrician" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
