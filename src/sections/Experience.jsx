import { MapPin } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="04 / Work" title="Professional Experience" className="bg-surface">
      <div className="space-y-8">
        {experience.map((role) => (
          <Reveal key={`${role.company}-${role.period}`} className="card bg-elevated p-6 md:p-8">
            <div className="flex flex-col gap-4 border-b border-line pb-5 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{role.designation}</h3>
                <p className="mt-1 text-accent">{role.company}</p>
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
                <p className="mt-1 inline-flex items-center gap-1.5 font-mono text-xs text-muted md:justify-end">
                  <MapPin size={12} aria-hidden="true" />
                  {role.location}
                </p>
              </div>
            </div>

            <ul className="mt-5 space-y-3">
              {role.points.map((point) => (
                <li key={point} className="flex gap-3 text-muted">
                  <span aria-hidden="true" className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
