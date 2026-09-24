import useInView from '../hooks/useInView'
import useCountUp from '../hooks/useCountUp'
import { stats } from '../data/content'

/**
 * Rules between cells. The grid is 2-up below `lg` and 4-up at `lg`, so which
 * cell starts a row changes per breakpoint — `divide-x` can't express that
 * (it would rule the first cell of the second row). Only responsive variants
 * overlap here, never two unprefixed utilities for the same property.
 */
function cellClasses(i) {
  const startsMobileRow = i % 2 === 0
  const vertical = startsMobileRow ? 'pl-0' : 'border-l border-line pl-5 sm:pl-6'
  const verticalLg = i === 0 ? 'lg:border-l-0 lg:pl-0' : 'lg:border-l lg:border-line lg:pl-6'
  const horizontal = i >= 2 ? 'border-t border-line lg:border-t-0' : ''
  return `py-8 pr-5 sm:pr-6 md:py-10 ${vertical} ${verticalLg} ${horizontal}`
}

function Stat({ stat, active, index }) {
  const value = useCountUp(stat.count, active)

  return (
    <div
      style={active ? { animationDelay: `${index * 90}ms` } : undefined}
      className={`${cellClasses(index)} ${active ? 'animate-rise-in' : 'opacity-0'}`}
    >
      <p className="font-mono text-[clamp(1.875rem,4vw,2.5rem)] font-bold leading-none text-accent">
        {/* tabular-nums stops the layout jittering as the digits tick over. */}
        <span className="tabular-nums">{value}</span>
        {stat.suffix}
        {stat.unit && <span className="ml-2 text-base font-medium text-content">{stat.unit}</span>}
      </p>
      <p className="mt-3 text-sm leading-snug text-muted">{stat.label}</p>
    </div>
  )
}

export default function Stats() {
  const [ref, inView] = useInView({ rootMargin: '0px 0px -15% 0px', threshold: 0.2 })

  return (
    <section aria-label="Key figures" className="border-b border-line bg-surface">
      <div ref={ref} className="shell grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Stat key={stat.label} stat={stat} active={inView} index={i} />
        ))}
      </div>
    </section>
  )
}
