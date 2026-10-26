import { useState } from 'react'
import { clinicConfig } from '../siteConfig.js'

const questions = [
  {
    question: 'How do I request a consultation?',
    answer: 'Use the appointment request page to prepare a WhatsApp message. Review and send it, then wait for the clinic to reply. Sending a request does not confirm an appointment.',
  },
  {
    question: 'What should I bring to my visit?',
    answer: 'Bring any relevant reports or prescriptions you would like to discuss, along with a short list of your questions.',
  },
  {
    question: 'Is my appointment confirmed when I send the WhatsApp request?',
    answer: 'No. The message is an enquiry only. Your appointment is not confirmed until the clinic responds to you.',
  },
  {
    question: 'What should I do if I need urgent medical help?',
    answer: 'This website and WhatsApp enquiry are not emergency services. For urgent medical concerns, contact local emergency services or go to the nearest emergency department.',
  },
]

function FAQ({ showIntro = true }) {
  const [openQuestion, setOpenQuestion] = useState(null)

  return (
    <section className="section faq-section" id="faq">
      <div className={`page-shell faq-layout${showIntro ? '' : ' faq-layout-single'}`}>
        {showIntro && (
          <div className="faq-heading">
            <p className="eyebrow">Frequently asked questions</p>
            <h2>A few things to <em>know.</em></h2>
            <p>Need more information? Our clinic team can help point you in the right direction.</p>
            <a className="text-link" href={`tel:${clinicConfig.phoneLink}`}>Call the clinic <span aria-hidden="true">↗</span></a>
          </div>
        )}
        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = openQuestion === index
            const answerId = `faq-answer-${index}`

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
      </div>
    </section>
  )
}

export default FAQ
