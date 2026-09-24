import { Braces, Database, Gauge, GitCompareArrows, ShieldCheck } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { expertise } from '../data/content'

// Only the icons content.js actually references, so the bundle stays small.
const icons = { Braces, Database, GitCompareArrows, ShieldCheck, Gauge }

export default function Expertise() {
  return (
    <Section id="expertise" eyebrow="02 / Focus" title="What I Work With" className="bg-surface">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((item, i) => {
          const Icon = icons[item.icon]
          return (
            <Reveal
              key={item.title}
              delay={i * 60}
              className="card flex flex-col gap-3 bg-elevated p-6 transition-colors hover:border-accent/40"
            >
              {Icon && <Icon size={20} className="text-accent" aria-hidden="true" />}
              <h3 className="text-[1.0625rem] font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.text}</p>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
