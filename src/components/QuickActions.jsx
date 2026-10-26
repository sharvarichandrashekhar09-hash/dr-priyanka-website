import { clinicConfig, clinicMapsUrl, whatsappUrl } from '../siteConfig.js'

const actions = [
  { symbol: '⌕', title: 'Call the clinic', subtitle: clinicConfig.phoneDisplay, href: `tel:${clinicConfig.phoneLink}`, type: 'phone' },
  { symbol: '◉', title: 'WhatsApp', subtitle: 'Send an enquiry', href: whatsappUrl, type: 'external' },
  { symbol: '⌖', title: 'Find the clinic', subtitle: 'Search the address in Maps', href: clinicMapsUrl, type: 'external' },
]

function QuickActions() {
  return (
    <section className="quick-actions-section" aria-label="Quick clinic actions">
      <div className="page-shell quick-actions">
        {actions.map((action) => (
          <a
            className="quick-action"
            href={action.href}
            key={action.title}
            target={action.type === 'external' ? '_blank' : undefined}
            rel={action.type === 'external' ? 'noreferrer' : undefined}
          >
            <span className="quick-symbol" aria-hidden="true">{action.symbol}</span>
            <span className="quick-action-copy"><strong>{action.title}</strong><small>{action.subtitle}</small></span>
            <span className="quick-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default QuickActions
