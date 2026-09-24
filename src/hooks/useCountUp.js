import { useEffect, useState } from 'react'

/**
 * Counts from 0 to `target` once `active` becomes true.
 *
 * Reduced-motion users (and anyone whose browser lacks rAF) get the final value
 * immediately — the number must always be readable, animation is the extra.
 */
export default function useCountUp(target, active, duration = 1100) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced || typeof requestAnimationFrame === 'undefined') {
      setValue(target)
      return
    }

    let frame
    let start

    const tick = (now) => {
      if (start === undefined) start = now
      const progress = Math.min((now - start) / duration, 1)
      // easeOutCubic — fast out of the gate, settles gently on the final value.
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, active, duration])

  return value
}
