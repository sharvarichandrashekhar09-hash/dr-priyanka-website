import { useState } from 'react'

function ArticleFAQs({ items, idPrefix }) {
  const [openQuestion, setOpenQuestion] = useState(null)

  return (
    <section className="article-faq-section" aria-labelledby={`${idPrefix}-faq-title`}>
      <h2 id={`${idPrefix}-faq-title`}>Frequently Asked Questions</h2>
      <div className="faq-list">
        {items.map((item, index) => {
          const isOpen = openQuestion === index
          const answerId = `${idPrefix}-faq-answer-${index}`

          return (
            <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.question}>
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenQuestion(isOpen ? null : index)}
                >
                  {item.question}<span aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
              </h3>
              <p id={answerId} className="faq-answer" hidden={!isOpen}>{item.answer}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ArticleFAQs
