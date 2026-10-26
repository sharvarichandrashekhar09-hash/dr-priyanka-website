import { Link } from 'react-router-dom'
import logo from '../assets/matruja-logo.jpeg'

const approachPoints = [
  {
    title: 'Patient-Centred Care',
    description: 'Every woman is treated as an individual.',
  },
  {
    title: 'Compassion & Privacy',
    description: 'A comfortable and confidential environment.',
  },
  {
    title: 'Evidence-Based Practice',
    description: 'Medical decisions guided by current evidence and individual needs.',
  },
  {
    title: 'Continuity of Care',
    description: 'Supporting women beyond a single consultation.',
  },
]

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="page-shell about-page-content">
        <div className="about-intro">
          <div className="about-stamp">
            <img className="about-logo" src={logo} alt="Matruja Women's Clinic logo" />
          </div>
          <div className="about-copy">
            <p className="eyebrow">About Matruja Women&apos;s Clinic</p>
            <h2>Where women&apos;s health meets <em>compassionate, personalized care.</em></h2>
            <p className="lead">
              Matruja Women&apos;s Clinic was founded by Dr. Priyanka Suryawanshi-Raut, MBBS, DNB,
              Gynaecologist &amp; Obstetrician, with a vision to create a welcoming and trusted
              space where women can openly discuss their health concerns and receive personalized
              medical care.
            </p>
            <p>
              At Matruja Women&apos;s Clinic, we believe that every woman&apos;s healthcare journey is
              unique. From menstrual and reproductive health to pregnancy, fertility, menopause
              and beyond, our approach focuses on understanding each patient&apos;s individual needs
              and providing thoughtful, evidence-based care.
            </p>
            <p>
              Our aim is to create an environment where women feel <strong>heard, respected,
              comfortable and confident</strong> about their healthcare decisions.
            </p>
          </div>
        </div>

        <div className="about-values">
          <section className="about-vision">
            <p className="eyebrow">Our vision</p>
            <h3>Care that supports women through <em>every stage of life.</em></h3>
            <p>
              To provide accessible, compassionate and evidence-based healthcare that supports
              women through every stage of life.
            </p>
          </section>

          <section className="about-approach" aria-labelledby="about-approach-title">
            <p className="eyebrow">Our approach</p>
            <h3 id="about-approach-title">Care shaped around <em>you.</em></h3>
            <div className="about-approach-grid">
              {approachPoints.map((point, index) => (
                <article className="about-approach-card" key={point.title}>
                  <span aria-hidden="true">0{index + 1}</span>
                  <div>
                    <h4>{point.title}</h4>
                    <p>{point.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="about-founder">
          <div>
            <strong>Dr. Priyanka Suryawanshi-Raut</strong>
            <span>Founder, Matruja Women&apos;s Clinic</span>
            <span>MBBS, DNB · Gynaecologist &amp; Obstetrician</span>
          </div>
          <Link className="button button-outline" to="/about#doctor">
            Know more about Dr. Priyanka <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About
