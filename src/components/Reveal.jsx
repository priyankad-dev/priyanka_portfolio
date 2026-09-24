import useInView from '../hooks/useInView'

const VARIANTS = {
  rise: 'animate-rise-in',
  left: 'animate-slide-in-left',
  right: 'animate-slide-in-right',
  scale: 'animate-scale-in',
}

/**
 * Animates its children in once — on mount for above-the-fold content
 * (`immediate`), otherwise the first time they scroll into view.
 *
 * `variant` picks the entrance and `delay` staggers siblings. Reduced-motion
 * users get the content immediately with no transform (see useInView).
 */
export default function Reveal({
  children,
  variant = 'rise',
  delay = 0,
  immediate = false,
  as: Tag = 'div',
  className = '',
  ...rest
}) {
  const [ref, inView] = useInView()
  // Hero elements are already on screen at load; waiting for an observer
  // callback would delay the opening sequence by a frame or two.
  const shown = immediate || inView

  return (
    <Tag
      ref={ref}
      style={shown && delay ? { animationDelay: `${delay}ms` } : undefined}
      className={`${shown ? VARIANTS[variant] ?? VARIANTS.rise : 'opacity-0'} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
