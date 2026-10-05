import { Award, ExternalLink } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { achievements } from '../data/content'

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="05 / Recognition" title="Achievements" className="bg-surface">
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 90}
            className="card card-hover flex items-start gap-4 bg-elevated p-6"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg
                         border border-accent/25 bg-accent/[0.08] text-accent"
            >
              <Award size={18} />
            </span>

            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-semibold">{item.title}</h3>
                <span className="font-mono text-xs text-accent">{item.period}</span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
              {item.certificate && (
                <a
                  href={item.certificate.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent
                             hover:underline underline-offset-4"
                >
                  {item.certificate.label}
                  <ExternalLink size={14} aria-hidden="true" />
                  <span className="sr-only">(PDF, opens in a new tab)</span>
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
