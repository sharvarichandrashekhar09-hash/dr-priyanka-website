import { Link } from 'react-router-dom'

const specialities = [
  { number: '01', symbol: '✳', title: 'Pregnancy Care', detail: 'Low- and high-risk pregnancy care, antenatal and postnatal consultations.', slug: 'pregnancy-care' },
  { number: '02', symbol: '◌', title: 'PCOS / PCOD', detail: 'Consultations about PCOS, irregular periods, lifestyle and hormonal health.', slug: 'pcos-pcod' },
  { number: '03', symbol: '♡', title: 'Fertility', detail: 'Fertility-related guidance, preconception counselling and reproductive health.', slug: 'fertility' },
  { number: '04', symbol: '◷', title: 'Menstrual Health', detail: 'Conversations about irregular, painful or heavy periods and menstrual health.', slug: 'menstrual-health' },
  { number: '05', symbol: '✿', title: "Women's Wellness", detail: 'Preventive and routine gynaecological care, including post-menopausal health.', slug: 'womens-wellness' },
  { number: '06', symbol: '⌂', title: 'Family Planning', detail: 'Contraceptive counselling and family planning conversations.', slug: 'family-planning' },
]

function Specialities() {
  return (
    <section className="section specialities-section" id="specialities">
      <div className="page-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Areas of care</p>
            <h2>Here for what matters <em>to you.</em></h2>
          </div>
          <p>Every person and every visit is different. Start with a conversation about what you need.</p>
        </div>
        <div className="speciality-grid">
          {specialities.map((item) => (
            <Link className="speciality-card" to={`/services/${item.slug}`} key={item.number}>
              <span className="speciality-symbol" aria-hidden="true">{item.symbol}</span>
              <span className="card-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </Link>
          ))}
        </div>
        <Link className="text-link speciality-directory-link" to="/services">Browse all services <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  )
}

export default Specialities
