import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { navLinks, profile, resume } from '../data/content'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const sections = navLinks.map(({ id }) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const condensed = scrolled || open

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        condensed
          ? 'border-line bg-bg/80 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/65'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className={`shell flex items-center justify-between gap-4 transition-[height] duration-300 ${
          condensed ? 'h-16' : 'h-20'
        }`}
      >
        {/* Brand mark: a teal dot that pops in once on load, then the name. */}
        <a href="#top" className="group relative flex shrink-0 items-center gap-2.5 py-1">
          <span
            aria-hidden="true"
            className="h-[7px] w-[7px] shrink-0 animate-dot-in rounded-full bg-accent"
          />
          <span
            className="text-[1.125rem] font-semibold uppercase tracking-[0.05em] text-content
                       transition-colors duration-300 group-hover:text-accent sm:text-[1.1875rem]"
          >
            {profile.name}
          </span>
          <span
            aria-hidden="true"
            className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent
                       transition-[width] duration-300 ease-out group-hover:w-full"
          />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`relative block px-3.5 py-2 text-[0.9375rem] transition-colors duration-200
                            hover:text-accent ${active === id ? 'text-accent' : 'text-muted'}`}
              >
                {label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3.5 bottom-0.5 h-0.5 origin-left rounded-full bg-accent
                              transition-transform duration-300 ease-out ${
                                active === id ? 'scale-x-100' : 'scale-x-0'
                              }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />

          <a
            href={resume.href}
            download={resume.downloadName}
            className="hidden items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-2
                       text-[0.9375rem] font-medium text-accent transition-[background-color,border-color,transform]
                       duration-300 ease-out hover:-translate-y-px hover:border-accent/60 hover:bg-accent/20
                       sm:inline-flex"
          >
            <Download size={15} aria-hidden="true" />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line
                       bg-elevated text-muted transition-colors hover:border-accent/50 hover:text-accent lg:hidden"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg lg:hidden">
          <ul className="shell flex flex-col py-2">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`block border-l-2 py-3 pl-3 text-[0.9375rem] transition-colors ${
                    active === id
                      ? 'border-accent text-accent'
                      : 'border-transparent text-muted hover:text-accent'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="py-3 pl-3">
              <a
                href={resume.href}
                download={resume.downloadName}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10
                           px-4 py-2 text-[0.9375rem] font-medium text-accent"
              >
                <Download size={15} aria-hidden="true" />
                {resume.label}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
