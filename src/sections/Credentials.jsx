import { Award, GraduationCap } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { achievements, education } from '../data/content'

export default function Credentials() {
  return (
    <Section id="credentials" eyebrow="06 / Record" title="Achievements & Education" className="bg-surface">
      <div className="grid gap-10 md:grid-cols-2 md:gap-8">
        <Reveal>
          <h3 className="mb-5 inline-flex items-center gap-2 text-sm font-semibold">
            <Award size={16} className="text-accent" aria-hidden="true" />
            Achievements
          </h3>
          <ul className="space-y-4">
            {achievements.map((item) => (
              <li key={item.title} className="card bg-elevated p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-semibold">{item.title}</p>
                  <p className="font-mono text-xs text-accent">{item.period}</p>
                </div>
                <p className="mt-1.5 text-sm text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={80}>
          <h3 className="mb-5 inline-flex items-center gap-2 text-sm font-semibold">
            <GraduationCap size={16} className="text-accent" aria-hidden="true" />
            Education
          </h3>
          <ul className="space-y-4">
            {education.map((item) => (
              <li key={item.degree} className="card bg-elevated p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-semibold">{item.degree}</p>
                  <p className="font-mono text-xs text-accent">{item.year}</p>
                </div>
                <p className="mt-1.5 text-sm text-muted">{item.institution}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
