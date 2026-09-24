import Reveal from './Reveal'

/**
 * Standard section shell: consistent rhythm, an optional monospace eyebrow,
 * and a heading that is always an <h2> so the document outline stays valid.
 */
export default function Section({ id, eyebrow, title, lead, children, className = '' }) {
  return (
    <section id={id} aria-labelledby={title ? `${id}-heading` : undefined} className={`py-16 md:py-24 ${className}`}>
      <div className="shell">
        {title && (
          <Reveal className="mb-10 md:mb-14">
            {eyebrow && (
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
            )}
            <h2 id={`${id}-heading`} className="text-3xl font-bold tracking-tight md:text-[2rem]">
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
