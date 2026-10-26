import { Link } from 'react-router-dom'
import { serviceCategories } from '../siteData.js'

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="page-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">How we can support you</p>
            <h2>Care for your <em>whole journey.</em></h2>
          </div>
          <p>Contact the clinic to discuss your needs and confirm the appropriate consultation or service.</p>
        </div>
        <div className="service-grid">
          {serviceCategories.slice(0, 2).flatMap((category) => category.services).slice(0, 8).map((service, index) => (
            <Link className="service-item" key={`${service.slug}-${service.title}`} to={`/services/${service.slug}`}>
              <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="service-heart" aria-hidden="true">♡</span>
              <h3>{service.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
