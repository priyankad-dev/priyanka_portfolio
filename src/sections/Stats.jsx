import Reveal from '../components/Reveal'
import { stats } from '../data/content'

export default function Stats() {
  return (
    <section aria-label="Key figures" className="border-b border-line bg-surface">
      <div className="shell grid grid-cols-2 gap-px lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 60}
            className="py-8 pr-6 md:py-10"
          >
            <p className="font-mono text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-none text-accent">
              {stat.value}
              {stat.unit && (
                <span className="ml-1.5 text-base font-medium text-content">{stat.unit}</span>
              )}
            </p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
