const principles = [
  'Personalized care',
  'Compassionate approach',
  'Confidential consultations',
  'Evidence-based healthcare',
  'Comprehensive women’s care',
  'Patient-centred conversations',
]

function WhyChooseUs() {
  return (
    <section className="section why-section" id="why-us">
      <div className="page-shell why-layout">
        <div className="why-heading">
          <p className="eyebrow">The Matruja approach</p>
          <h2>Care that puts <em>you first.</em></h2>
          <p>Healthcare should feel like a partnership: respectful, clear and centred on your questions.</p>
        </div>
        <div className="benefit-grid">
          {principles.map((principle, index) => (
            <article className="benefit-card" key={principle}>
              <span aria-hidden="true">{['♡', '✳', '◌', '＋', '✿', '↗'][index]}</span>
              <h3>{principle}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
