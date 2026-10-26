import doctorPhoto from '../assets/dr-priyanka.jpeg'
import { Link } from 'react-router-dom'
import { clinicConfig } from '../siteConfig.js'

const careAreas = [
  'Pregnancy',
  'PCOS / PCOD',
  'Menstrual health',
  'Fertility guidance',
  'Family planning',
  "Women's wellness",
]

function DoctorProfile() {
  return (
    <section className="section doctor-section" id="doctor">
      <div className="page-shell doctor-layout">
        <div className="doctor-photo-wrap">
          <img src={doctorPhoto} alt="Dr. Priyanka Suryawanshi-Raut" loading="lazy" />
          <span className="doctor-photo-caption">Matruja Women&apos;s Clinic · Pune</span>
        </div>
        <div className="doctor-copy">
          <p className="eyebrow">Meet your doctor</p>
          <h2>{clinicConfig.doctor}</h2>
          <p className="doctor-qualifications">{clinicConfig.qualifications} <span aria-hidden="true">·</span> {clinicConfig.specialty}</p>
          <p>
            Dr. Priyanka Suryawanshi-Raut is a Gynaecologist and Obstetrician providing comprehensive women&apos;s healthcare in Pune. She focuses on personalized, compassionate and evidence-based care for women at every stage of life.
          </p>
          <h3>Areas of care</h3>
          <ul className="care-tags">
            {careAreas.map((area) => <li key={area}>{area}</li>)}
          </ul>
          <Link className="button" to="/appointment">Enquire about a visit <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  )
}

export default DoctorProfile
