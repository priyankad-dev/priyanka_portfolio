import { GraduationCap } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { education } from '../data/content'

export default function Education() {
  return (
    <Section id="education" eyebrow="06 / Education" title="Education">
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item, i) => (
          <Reveal
            key={item.degree}
            delay={i * 90}
            className="card card-hover flex items-start gap-4 bg-elevated p-6"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg
                         border border-accent/25 bg-accent/[0.08] text-accent"
            >
              <GraduationCap size={18} />
            </span>

            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-semibold">{item.degree}</h3>
                <span className="font-mono text-xs text-accent">{item.year}</span>
              </div>
              <p className="mt-1.5 text-sm text-muted">{item.institution}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
