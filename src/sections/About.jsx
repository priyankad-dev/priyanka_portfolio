import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { additional, profile } from '../data/content'

export default function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="Professional Summary">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
        </Reveal>

        <Reveal delay={80} className="space-y-6">
          {additional.map((item) => (
            <div key={item.title} className="border-l-2 border-accent/40 pl-4">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted">{item.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}
