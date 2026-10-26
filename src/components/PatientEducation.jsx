import { Link } from 'react-router-dom'
import { educationArticles } from '../siteData.js'

function PatientEducation() {
  return (
    <section className="section education-section" id="education">
      <div className="page-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Patient education</p>
            <h2>Patient education for <em>informed conversations.</em></h2>
          </div>
          <p>Clear, practical information to help you prepare questions for a conversation with your clinician.</p>
        </div>
        <div className="education-grid">
          {educationArticles.map((topic, index) => (
            <article className="education-card" key={topic.slug}>
              <span className="education-index">PATIENT EDUCATION · 0{index + 1}</span>
              <h3>{topic.title}</h3>
              <p>{topic.intro}</p>
              <div className="education-card-footer">
                <span>{topic.readingTime}</span>
                <Link className="text-link education-toggle" to={`/patient-education/${topic.slug}`}>Read article <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          ))}
        </div>
        <p className="education-disclaimer">
          Educational information is for general awareness and does not replace a consultation with a qualified healthcare professional.
        </p>
      </div>
    </section>
  )
}

export default PatientEducation
