import { MapPin } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="02 / Work" title="Professional Experience" className="bg-surface">
      {/* Timeline rail. Decorative, so it is hidden from assistive tech. */}
      <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-10">
        {experience.map((role, i) => (
          <li key={`${role.company}-${role.period}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[calc(1.5rem+4.5px)] top-7 h-2 w-2 rounded-full bg-accent
                         ring-4 ring-surface sm:-left-[calc(2.5rem+4.5px)]"
            />

            <Reveal delay={i * 90} className="card card-hover bg-elevated p-6 md:p-8">
              <div className="flex flex-col gap-4 border-b border-line pb-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{role.designation}</h3>
                  <p className="mt-1 font-medium text-accent">{role.company}</p>
                </div>

                <div className="shrink-0 md:text-right">
                  <p className="inline-flex items-center gap-2 font-mono text-sm text-content">
                    {role.period}
                    {role.current && (
                      <span
                        aria-hidden="true"
                        className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
                      />
                    )}
                  </p>
                  <p className="mt-1.5 flex items-center gap-1.5 font-mono text-xs text-muted md:justify-end">
                    <MapPin size={12} aria-hidden="true" />
                    {role.location}
                  </p>
                </div>
              </div>

              {/* Figures restated from the bullets below, for scannability. */}
              {role.metrics && (
                <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {role.metrics.map((metric) => (
                    <li
                      key={metric.label}
                      className="rounded-lg border border-line bg-surface px-3 py-3"
                    >
                      <p className="font-mono text-lg font-bold leading-none text-accent">
                        {metric.value}
                      </p>
                      <p className="mt-1.5 text-xs leading-snug text-muted">{metric.label}</p>
                    </li>
                  ))}
                </ul>
              )}

              <ul className="mt-6 space-y-3">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3 text-muted">
                    <span
                      aria-hidden="true"
                      className="mt-[0.62rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
