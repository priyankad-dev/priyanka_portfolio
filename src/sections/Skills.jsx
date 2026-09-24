import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { focusLine, skillGroups } from '../data/content'

function Group({ group }) {
  const isPrimary = group.tier === 'primary'

  return (
    <div
      className={
        isPrimary
          ? 'card card-hover h-full bg-elevated p-6'
          : 'card h-full border-dashed bg-transparent p-5'
      }
    >
      <h3 className="flex flex-wrap items-baseline gap-2">
        <span className={isPrimary ? 'font-semibold text-content' : 'text-sm text-muted'}>
          {group.name}
        </span>
        {group.note && (
          <span className="font-mono text-[0.7rem] font-normal text-muted">— {group.note}</span>
        )}
      </h3>

      <ul className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li key={item} className={isPrimary ? 'chip-accent' : 'chip'}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Skills() {
  const primary = skillGroups.filter((g) => g.tier === 'primary')
  const supporting = skillGroups.filter((g) => g.tier === 'supporting')

  return (
    <Section id="skills" eyebrow="04 / Stack" title="Technical Skills">
      <Reveal
        className="card mb-8 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-accent/30
                   bg-accent/[0.06] p-5"
      >
        <span className="eyebrow">{focusLine.label}</span>
        <span className="text-sm font-medium text-content">{focusLine.value}</span>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {primary.map((group, i) => (
          <Reveal key={group.name} delay={i * 70}>
            <Group group={group} />
          </Reveal>
        ))}
      </div>

      {/* Real résumé experience, deliberately not presented as the specialization. */}
      <div className="mt-12">
        <Reveal>
          <div className="mb-5 flex items-center gap-3">
            <h3 className="font-mono text-xs uppercase tracking-label text-muted">
              Also worked with
            </h3>
            <span aria-hidden="true" className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {supporting.map((group, i) => (
            <Reveal key={group.name} delay={i * 70}>
              <Group group={group} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
