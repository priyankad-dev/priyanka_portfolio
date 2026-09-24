import { Braces, Database, Gauge, GitCompareArrows, ShieldCheck } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { additional, engineeringFocus, expertise, profile } from '../data/content'

// Only the icons content.js actually references, so the bundle stays small.
const icons = { Braces, Database, GitCompareArrows, ShieldCheck, Gauge }

export default function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="Professional Summary">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <Reveal variant="left">
            <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
          </Reveal>

          {/* Visual labels, not ratings. */}
          <Reveal variant="left" delay={100} className="mt-8">
            <h3 className="eyebrow">Engineering focus</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {engineeringFocus.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-line bg-elevated px-3 py-1.5 text-sm text-content"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal variant="right" delay={80} className="space-y-6">
          {additional.map((item) => (
            <div key={item.title} className="border-l-2 border-accent/40 pl-4">
              <h3 className="eyebrow">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </Reveal>
      </div>

      {/* Day-to-day work, in the résumé's own terms. */}
      <div className="mt-14">
        <Reveal>
          <h3 className="text-lg font-semibold tracking-tight">What I work with</h3>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, i) => {
            const Icon = icons[item.icon]
            return (
              <Reveal
                key={item.title}
                delay={i * 70}
                className="card card-hover flex flex-col gap-3 bg-elevated p-6"
              >
                {Icon && (
                  <span
                    aria-hidden="true"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg
                               border border-accent/25 bg-accent/[0.08] text-accent"
                  >
                    <Icon size={18} />
                  </span>
                )}
                <h4 className="text-[1.0625rem] font-semibold">{item.title}</h4>
                <p className="text-sm leading-relaxed text-muted">{item.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
