import { whatsappUrl } from '../siteConfig.js'

function FloatingWhatsApp() {
  return (
    <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contact Matruja Women's Clinic on WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 11.7a8.35 8.35 0 0 1-12.3 7.35L3 20.5l1.5-5a8.35 8.35 0 1 1 16-3.8Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M8.5 8.3c.3-.5.7-.4 1-.4.2 0 .4 0 .5.4l.7 1.7c.1.3.1.5-.1.7l-.5.6c-.2.2-.2.4-.1.6.5.9 1.2 1.6 2 2.1.3.2.5.2.7-.1l.7-.8c.2-.2.4-.3.7-.2l1.6.8c.3.1.4.3.4.5 0 .3-.2 1.2-.8 1.6-.5.4-1.2.6-2 .4-1-.2-2.3-.8-3.7-2-1.1-1-2-2.2-2.3-3.3-.4-1.1 0-2.1.4-2.6Z" fill="currentColor" />
      </svg>
      <span>WhatsApp</span>
    </a>
  )
}

export default FloatingWhatsApp
