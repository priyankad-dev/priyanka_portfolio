import { useEffect, useRef, useState } from 'react'

/**
 * Fires once, the first time the element scrolls into view.
 *
 * Returns `[ref, inView]`. Users who prefer reduced motion — and browsers
 * without IntersectionObserver — get `inView: true` immediately, so content
 * is never hidden behind an animation that will not run.
 */
export default function useInView({ rootMargin = '0px 0px -10% 0px', threshold = 0.05 } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return [ref, inView]
}
