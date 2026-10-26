import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'
import ClinicMap from '../components/ClinicMap.jsx'
import doctorPhoto from '../assets/dr-priyanka.jpeg'
import maternityPhoto from '../assets/WhatsApp Image 2026-09-10 at 10.14.03 PM.jpeg'
import surgeryPhoto from '../assets/WhatsApp Image 2026-09-10 at 10.14.04 PM (2).jpeg'
import DoctorProfile from '../components/DoctorProfile.jsx'
import FAQ from '../components/FAQ.jsx'
import Hero from '../components/Hero.jsx'
import Appointment from '../components/Appointment.jsx'
import PatientEducation from '../components/PatientEducation.jsx'
import PatientExperience from '../components/PatientExperience.jsx'
import QuickActions from '../components/QuickActions.jsx'
import Specialities from '../components/Specialities.jsx'
import Services from '../components/Services.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import { clinicConfig, clinicMapsUrl, whatsappUrl } from '../siteConfig.js'
import { educationArticles, serviceCategories, services, serviceDetails, serviceVisitGuides } from '../siteData.js'
import ArticleFAQs from '../components/ArticleFAQs.jsx'

const MIN_APPOINTMENT_DATE = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10)

function PageIntro({ eyebrow, title, emphasis, description }) {
  return (
    <section className="page-intro">
      <div className="page-shell">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title} {emphasis && <em>{emphasis}</em>}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  )
}

function PageCallout({ title = 'Your next step starts with a conversation.', description = 'Contact Matruja Women’s Clinic to ask a question or enquire about arranging a visit.' }) {
  return (
    <section className="page-callout">
      <div className="page-shell page-callout-inner">
        <div>
          <p className="eyebrow">Matruja Women&apos;s Clinic · Pune</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="page-callout-actions">
          <Link className="button button-light" to="/appointment">Book Appointment <span aria-hidden="true">↗</span></Link>
          <a className="button button-ghost" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp us</a>
        </div>
      </div>
    </section>
  )
}

function PageLink({ to, children, className = 'button button-outline' }) {
  return <Link className={className} to={to}>{children} <span aria-hidden="true">↗</span></Link>
}

function MapAction({ className = 'button button-outline' }) {
  return <a className={className} href={clinicMapsUrl} target="_blank" rel="noreferrer">Open in Google Maps <span aria-hidden="true">↗</span></a>
}

function HomePage() {
  return (
    <>
      <Hero />
      <QuickActions />
      <About />
      <Services />
      <WhyChooseUs />
      <PatientExperience />
      <OnlineConsultationSection />
      <PatientEducation />
      <FAQ />
      <Contact />
      <Appointment />
    </>
  )
}

function OnlineConsultationSection() {
  return (
    <section className="section online-consultation-section" aria-labelledby="online-consultation-heading">
      <div className="page-shell online-consultation-layout">
        <div>
          <p className="eyebrow">Consult from home</p>
          <h2 id="online-consultation-heading">Thoughtful care, <em>wherever you are.</em></h2>
          <p>
            Online consultations may be requested by patients in India and abroad for selected
            women&apos;s health concerns. Requests from outside India are subject to applicable
            local requirements, clinical suitability and confirmation by the clinic.
          </p>
          <Link className="button" to="/online-consultation">Explore online consultation <span aria-hidden="true">↗</span></Link>
        </div>
        <aside className="online-consultation-note">
          <h3>May be suitable for</h3>
          <ul>
            <li>Follow-up discussions</li>
            <li>Menstrual or PCOS-related concerns</li>
            <li>Pregnancy-related questions</li>
            <li>Fertility and menopause discussions</li>
            <li>Reviewing reports with your clinician</li>
          </ul>
          <p>Online consultation is not a substitute for emergency care or an in-person examination when one is needed.</p>
        </aside>
      </div>
    </section>
  )
}

function OnlineConsultationPage() {
  return (
    <>
      <PageIntro
        eyebrow="Online consultation"
        title="Care from"
        emphasis="where you are."
        description="Request an online consultation with Dr. Priyanka for selected women's health concerns from India or abroad."
      />
      <OnlineConsultationSection />
      <PageCallout
        title="Request an online consultation."
        description="Choose online consultation on the appointment page. Requests from outside India depend on applicable local requirements, clinical suitability and clinic confirmation."
      />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Matruja Women’s Clinic"
        title="Personal care for"
        emphasis="every stage of life."
        description="A welcoming Pune clinic for thoughtful, compassionate women’s healthcare."
      />
      <About />
      <DoctorProfile />
      <PageCallout title="We’re here to listen." />
    </>
  )
}

function SpecialitiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our specialities"
        title="Comprehensive care for"
        emphasis="women."
        description="Explore the areas of women’s health you can discuss with Dr. Priyanka Suryawanshi-Raut."
      />
      <Specialities />
      <div className="page-shell speciality-route-links">
        {[
          ['Pregnancy Care', 'pregnancy-care'],
          ['PCOS / PCOD', 'pcos-pcod'],
          ['Fertility', 'fertility'],
          ['Menstrual Health', 'menstrual-health'],
          ["Women's Wellness", 'womens-wellness'],
          ['Family Planning', 'family-planning'],
        ].map(([title, slug]) => <PageLink key={slug} to={`/services/${slug}`}>{title}</PageLink>)}
      </div>
      <PageCallout />
    </>
  )
}

function ServiceCard({ service }) {
  return (
    <article className="service-page-card">
      <span className="service-card-icon" aria-hidden="true">✳</span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link className="text-link" to={`/services/${service.slug}`}>Learn more <span aria-hidden="true">→</span></Link>
    </article>
  )
}

function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our services"
        title="Comprehensive women’s"
        emphasis="healthcare."
        description="Personalized, compassionate and evidence-based care for women through every stage of life."
      />
      <section className="section service-directory">
        <div className="page-shell">
          {serviceCategories.map((category) => (
            <section className="service-category" key={category.title}>
              <h2>{category.title}</h2>
              <div className="service-directory-grid">
                {category.services.map((service, index) => (
                  <ServiceCard key={`${category.title}-${service.title}-${index}`} service={service} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
      <PageCallout />
    </>
  )
}

function Breadcrumbs({ current }) {
  return (
    <nav className="breadcrumbs page-shell" aria-label="Breadcrumb">
      <Link to="/">Home</Link><span aria-hidden="true">/</span>
      <Link to="/services">Services</Link><span aria-hidden="true">/</span>
      <span aria-current="page">{current}</span>
    </nav>
  )
}

function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)
  const detail = serviceDetails[slug]

  if (!service || !detail) return <NotFoundPage />

  const relatedServices = services.filter((item) => item.slug !== slug).slice(0, 3)
  const serviceImage = slug === 'normal-cesarean-delivery'
    || ['pregnancy-care', 'antenatal-care', 'postnatal-care', 'high-risk-pregnancy', 'nst'].includes(slug)
    ? { src: maternityPhoto, alt: 'A clinician caring for a mother and newborn' }
    : ['laparoscopic-gynaecology', 'hysterectomy-guidance', 'tubal-ligation-guidance'].includes(slug)
      ? { src: surgeryPhoto, alt: 'Gynaecological surgical care' }
      : { src: doctorPhoto, alt: 'Dr. Priyanka Suryawanshi-Raut at Matruja Women’s Clinic' }
  const serviceFaqs = [
    {
      question: `What can I discuss at a ${service.title.toLowerCase()} consultation?`,
      answer: `You can discuss ${detail.concerns.slice(0, 2).join(' and ').toLowerCase()}, along with any related questions. Your clinician can tailor the conversation to your history and needs.`,
    },
    {
      question: 'What should I bring to my appointment?',
      answer: 'Bring any relevant reports, prescriptions, test results or previous medical records you have. It may also help to note your questions and when your concerns began.',
    },
    {
      question: 'Will I need a test or treatment?',
      answer: 'Not necessarily. Any examination, investigation or treatment recommendation depends on your individual situation and a clinician’s assessment.',
    },
    {
      question: 'How do I request an appointment?',
      answer: 'Use the Book Appointment option to send an appointment request to the clinic. The clinic can help confirm the suitable consultation and availability.',
    },
  ]

  return (
    <>
      <Breadcrumbs current={service.title} />
      <PageIntro eyebrow="Matruja services" title={service.title} description={detail.intro} />
      <section className="section detail-content">
        <div className="page-shell">
          <div className="service-detail-feature">
            <div className="service-detail-overview">
              <p className="eyebrow">About this care</p>
              <h2>Understanding your <em>options.</em></h2>
              <p>{detail.overview}</p>
            </div>
            <div className="service-detail-image-wrap">
              <img src={serviceImage.src} alt={serviceImage.alt} />
              <span>Matruja Women&apos;s Clinic <span aria-hidden="true">·</span> Pune</span>
            </div>
          </div>
          <div className="detail-layout">
            <div className="detail-panel">
              <h2>Questions you may wish to discuss</h2>
              <ul>{detail.concerns.map((concern) => <li key={concern}>{concern}</li>)}</ul>
            </div>
            <div className="detail-panel">
              <h2>What your consultation may cover</h2>
              <p>{serviceVisitGuides[slug]}</p>
              <p>Your clinician can explain options and next steps based on your history and assessment. Recommendations are individual and may differ from person to person.</p>
            </div>
            <div className="detail-panel detail-panel-wide">
              <h2>Preparing for your visit</h2>
              <ul>
                <li>Bring relevant medical reports, prescriptions or previous test results if available.</li>
                <li>Note your questions, symptoms and when they started; for cycle concerns, dates can be helpful.</li>
                <li>For pregnancy-related visits, bring any pregnancy records or scan reports you have.</li>
              </ul>
              <p>Only an in-person clinician can advise whether an examination or further tests are needed.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section service-faq-section">
        <div className="page-shell">
          <ArticleFAQs items={serviceFaqs} idPrefix={`${slug}-service`} />
        </div>
      </section>
      <PageCallout title={`Questions about ${service.title.toLowerCase()}?`} />
      <section className="section related-section">
        <div className="page-shell">
          <h2>Related services</h2>
          <div className="service-directory-grid">
            {relatedServices.map((item) => <ServiceCard key={item.slug} service={item} />)}
          </div>
        </div>
      </section>
    </>
  )
}

function EducationCard({ article }) {
  return (
    <article className="education-page-card">
      <span className="education-index">PATIENT EDUCATION</span>
      <h2>{article.title}</h2>
      <p>{article.intro}</p>
      <span className="article-reading-time">{article.readingTime}</span>
      <Link className="text-link" to={`/patient-education/${article.slug}`}>Read more <span aria-hidden="true">→</span></Link>
    </article>
  )
}

function EducationPage() {
  return (
    <>
      <PageIntro
        eyebrow="Patient education"
        title="Learn, reflect,"
        emphasis="ask."
        description="General information to help you prepare for conversations with your healthcare professional."
      />
      <section className="section education-directory">
        <div className="page-shell education-directory-grid">
          {educationArticles.map((article) => <EducationCard key={article.slug} article={article} />)}
        </div>
        <p className="education-disclaimer">Educational information is for general awareness and does not replace consultation with a qualified healthcare professional.</p>
      </section>
      <PageCallout />
    </>
  )
}

function EducationArticlePage() {
  const { slug } = useParams()
  const article = educationArticles.find((item) => item.slug === slug)

  useEffect(() => {
    if (!article) return undefined

    const previousTitle = document.title
    const descriptionTag = document.querySelector('meta[name="description"]')
    const previousDescription = descriptionTag?.content
    document.title = `${article.title} | Matruja Women’s Clinic`
    if (descriptionTag) descriptionTag.content = article.metaDescription

    return () => {
      document.title = previousTitle
      if (descriptionTag && previousDescription) descriptionTag.content = previousDescription
    }
  }, [article])

  if (!article) return <NotFoundPage />

  const renderBlocks = (blocks) => blocks?.map((block, index) => {
    if (block.type === 'list') {
      return (
        <div className="article-list-block" key={`${block.title || 'list'}-${index}`}>
          {block.title && <h3>{block.title}</h3>}
          <ul>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      )
    }
    if (block.type === 'callout') {
      return (
        <aside className={`article-callout article-callout-${block.tone || 'helpful'}`} key={`${block.title}-${index}`}>
          {block.title && <h3>{block.title}</h3>}
          <p>{block.text}</p>
        </aside>
      )
    }
    if (block.type === 'subheading') {
      return <h3 key={`${block.text}-${index}`}>{block.text}</h3>
    }
    return <p key={`${block.text}-${index}`}>{block.text}</p>
  })

  return (
    <>
      <nav className="breadcrumbs page-shell" aria-label="Breadcrumb">
        <Link to="/">Home</Link><span aria-hidden="true">/</span>
        <Link to="/patient-education">Patient Education</Link><span aria-hidden="true">/</span>
        <span aria-current="page">{article.title}</span>
      </nav>
      <PageIntro eyebrow="Patient education" title={article.title} description={article.intro} />
      <article className="article-content">
        <div className="article-body page-shell">
          <Link className="text-link article-back-link" to="/patient-education">← Back to Patient Education</Link>
          <section className="article-takeaways">
            <h2>Key takeaways</h2>
            <ul>{article.keyTakeaways.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          {article.sections.map((section) => (
            <section className="article-topic" key={section.heading}>
              <h2>{section.heading}</h2>
              {renderBlocks(section.blocks)}
            </section>
          ))}
          <section className="article-consult">
            <h2>{article.whenToConsult.heading}</h2>
            {renderBlocks(article.whenToConsult.blocks)}
          </section>
          {article.urgentNote && (
            <aside className="article-callout article-callout-urgent">
              <h3>{article.urgentNote.title}</h3>
              <p>{article.urgentNote.text}</p>
            </aside>
          )}
          <ArticleFAQs items={article.faqs} idPrefix={article.slug} />
          <aside className="article-medical-disclaimer">
            <h2>Medical Disclaimer</h2>
            <p>
              The information provided on this page is intended for general educational purposes only.
              It does not replace an individual medical consultation, diagnosis or treatment plan from a
              qualified healthcare professional. Every patient is different, and medical advice should
              be based on individual history, examination and appropriate investigations.
            </p>
            <p>If you have severe or urgent symptoms, seek immediate medical attention.</p>
          </aside>
          <section className="article-references">
            <h2>References &amp; Further Reading</h2>
            <ul>
              {article.references.map((reference) => (
                <li key={reference.url}>
                  <a href={reference.url} target="_blank" rel="noreferrer">{reference.label} <span aria-hidden="true">↗</span></a>
                </li>
              ))}
            </ul>
            <p className="article-review-status">
              Sources checked: {article.sourcesChecked}. Medical review by a qualified clinician: pending.
            </p>
          </section>
          <div className="article-cta">
            <div>
              <p className="eyebrow">Matruja Women&apos;s Clinic · Pune</p>
              <h2>{article.cta}</h2>
              <p>Contact the clinic to discuss your individual needs and appointment availability.</p>
            </div>
            <Link className="button" to="/appointment">Book a consultation <span aria-hidden="true">↗</span></Link>
          </div>
          <section className="article-related">
            <h2>Related articles</h2>
            <div className="education-directory-grid">
              {article.related.map((relatedSlug) => {
                const related = educationArticles.find((item) => item.slug === relatedSlug)
                if (!related) return null
                return (
                  <article className="education-page-card" key={related.slug}>
                    <span className="education-index">PATIENT EDUCATION</span>
                    <h3>{related.title}</h3>
                    <p>{related.intro}</p>
                    <Link className="text-link" to={`/patient-education/${related.slug}`}>Read article <span aria-hidden="true">→</span></Link>
                  </article>
                )
              })}
            </div>
          </section>
        </div>
      </article>
    </>
  )
}

function FAQsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Frequently asked questions"
        title="A few things to"
        emphasis="know."
        description="Quick answers about requesting and preparing for a consultation."
      />
      <FAQ showIntro={false} />
      <PageCallout />
    </>
  )
}

function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact Matruja"
        title="We’re here to"
        emphasis="help."
        description="Reach out to the clinic to enquire about arranging a visit or discuss how to get started."
      />
      <Contact />
    </>
  )
}

function AppointmentPage() {
  const [status, setStatus] = useState('')
  const [fields, setFields] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    reason: '',
    type: 'clinic',
    consultationLocation: 'india',
    country: '',
  })

  function updateField(event) {
    setFields((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const phoneDigits = fields.phone.replace(/\D/g, '')

    if (phoneDigits.length < 8 || phoneDigits.length > 15) {
      setStatus('Please enter a valid phone number so the clinic can respond to your request.')
      return
    }

    const message = [
      'Hello Dr. Priyanka,',
      '',
      "I would like to request an appointment at Matruja Women's Clinic.",
      '',
      `Consultation type: ${fields.type === 'online' ? 'Online consultation' : 'Clinic visit'}`,
      ...(fields.type === 'online'
        ? [`Consultation location: ${fields.consultationLocation === 'abroad' ? `Outside India${fields.country.trim() ? ` (${fields.country.trim()})` : ''}` : 'India'}`]
        : []),
      `Name: ${fields.name.trim()}`,
      `Phone: ${fields.phone.trim()}`,
      `Preferred Date: ${fields.date}`,
      `Preferred Time: ${fields.time}`,
      `Reason: ${fields.reason.trim()}`,
      '',
      'Thank you.',
    ].join('\n')
    const bookingUrl = `https://wa.me/${clinicConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(bookingUrl, '_blank', 'noopener,noreferrer')
    setStatus('WhatsApp opened with your appointment request. Please review and send the message; this does not confirm an appointment.')
  }

  return (
    <>
      <PageIntro
        eyebrow="Consulting location"
        title="Visit the"
        emphasis="clinic."
        description="Contact Matruja Women’s Clinic in Pune to request a consultation."
      />
      <section className="section appointment-page-section">
        <div className="page-shell appointment-page-grid">
          <aside className="appointment-location-card">
            <span className="appointment-pin" aria-hidden="true">⌖</span>
            <p className="eyebrow">Consulting location</p>
            <h2>Matruja Women&apos;s Clinic</h2>
            <p className="location-city">Pune, Maharashtra</p>
            <ClinicMap />
            <address>{clinicConfig.address}</address>
            <a className="location-phone" href={`tel:${clinicConfig.phoneLink}`}>{clinicConfig.phoneDisplay}</a>
            <MapAction />
          </aside>
          <section className="appointment-form-card" aria-labelledby="appointment-form-title">
            <p className="eyebrow">Book via WhatsApp</p>
            <h2 id="appointment-form-title">Request a consultation</h2>
            <p className="form-intro">Share your preferred details and WhatsApp will open a message for you to review and send.</p>
            <form onSubmit={handleSubmit}>
              <label>
                Consultation type
                <select name="type" value={fields.type} onChange={updateField} required>
                  <option value="clinic">Clinic visit</option>
                  <option value="online">Online consultation</option>
                </select>
              </label>
              {fields.type === 'online' && (
                <>
                  <label>
                    Where will you be during the consultation?
                    <select name="consultationLocation" value={fields.consultationLocation} onChange={updateField} required>
                      <option value="india">India</option>
                      <option value="abroad">Outside India</option>
                    </select>
                  </label>
                  {fields.consultationLocation === 'abroad' && (
                    <label>
                      Country
                      <input name="country" autoComplete="country-name" value={fields.country} onChange={updateField} required />
                    </label>
                  )}
                  <p className="form-privacy">
                    Online consultation requests from India and abroad are subject to applicable local requirements, clinical suitability and confirmation by the clinic.
                  </p>
                </>
              )}
              <label>
                Your name
                <input autoComplete="name" name="name" required value={fields.name} onChange={updateField} />
              </label>
              <label>
                Phone number
                <input autoComplete="tel" name="phone" type="tel" inputMode="tel" required value={fields.phone} onChange={updateField} />
              </label>
              <div className="form-row">
                <label>
                  Preferred date
                  <input name="date" type="date" min={MIN_APPOINTMENT_DATE} required value={fields.date} onChange={updateField} />
                </label>
                <label>
                  Preferred time
                  <input name="time" type="time" required value={fields.time} onChange={updateField} />
                </label>
              </div>
              <label>
                Reason for consultation
                <textarea name="reason" rows="3" required value={fields.reason} onChange={updateField} />
              </label>
              <p className="form-location"><strong>Location:</strong> Matruja Women&apos;s Clinic — Pune</p>
              <button className="button form-submit" type="submit">Book appointment on WhatsApp <span aria-hidden="true">↗</span></button>
              {status && <p className="form-status" role="status">{status}</p>}
              <p className="form-privacy">Your information is included in a WhatsApp message only when you submit this request. Do not include urgent or sensitive details here.</p>
            </form>
          </section>
        </div>
      </section>
    </>
  )
}

function NotFoundPage() {
  return (
    <section className="not-found page-shell">
      <p className="eyebrow">Page not found · 404</p>
      <h1>We can&apos;t find that <em>page.</em></h1>
      <p>The link may have changed or the page may no longer be available.</p>
      <Link className="button" to="/">Return to home</Link>
    </section>
  )
}

export {
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
}
