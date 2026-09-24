import Reveal from './Reveal'

/**
 * Standard section shell: consistent rhythm, a monospace eyebrow with a hairline
 * rule, and a heading that is always an <h2> so the document outline stays valid.
 */
export default function Section({ id, eyebrow, title, lead, children, className = '' }) {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-heading` : undefined}
      className={`scroll-mt-24 py-16 md:py-24 ${className}`}
    >
      <div className="shell">
        {title && (
          <Reveal className="mb-10 md:mb-14">
            {eyebrow && (
              <div className="mb-4 flex items-center gap-3">
                <span className="eyebrow">{eyebrow}</span>
                <span aria-hidden="true" className="h-px flex-1 bg-line" />
              </div>
            )}
            <h2
              id={`${id}-heading`}
              className="text-[clamp(1.75rem,3.5vw,2.25rem)] font-bold tracking-tight"
            >
              {title}
            </h2>
            {lead && <p className="mt-4 max-w-2xl text-muted">{lead}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}
