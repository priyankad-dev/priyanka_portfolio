import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { focusLine, skillGroups } from '../data/content'

function Group({ group }) {
  const isPrimary = group.tier === 'primary'

  return (
    <div
      className={`card p-6 transition-colors ${
        isPrimary ? 'bg-elevated hover:border-accent/40' : 'bg-transparent'
      }`}
    >
      <h3 className="flex flex-wrap items-baseline gap-2 text-sm font-semibold">
        <span className={isPrimary ? 'text-content' : 'text-muted'}>{group.name}</span>
        {group.note && (
          <span className="font-mono text-[0.7rem] font-normal text-muted">— {group.note}</span>
        )}
      </h3>

      <ul className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item}
            className={`chip ${isPrimary ? 'border-accent/25 text-content' : ''}`}
          >
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
    <Section id="skills" eyebrow="03 / Stack" title="Technical Skills">
      <Reveal className="card mb-8 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-accent/30 bg-accent/[0.06] p-5">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
          {focusLine.label}
        </span>
        <span className="text-sm font-medium text-content">{focusLine.value}</span>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {primary.map((group, i) => (
          <Reveal key={group.name} delay={i * 60}>
            <Group group={group} />
          </Reveal>
        ))}
      </div>

      {/* Real experience, but deliberately not presented as the specialization. */}
      <Reveal className="mt-10">
        <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-muted">
          Also worked with
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          {supporting.map((group) => (
            <Group key={group.name} group={group} />
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
