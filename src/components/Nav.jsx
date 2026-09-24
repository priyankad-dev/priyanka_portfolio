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
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)
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

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled || open
          ? 'border-line bg-bg/85 backdrop-blur-md supports-[backdrop-filter]:bg-bg/70'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between gap-4" aria-label="Primary">
        <a
          href="#main"
          className="font-mono text-sm font-medium tracking-tight text-content hover:text-accent"
        >
          <span className="text-accent">{'<'}</span>
          {profile.name.split(' ')[0]}
          <span className="text-accent">{' />'}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors hover:text-accent ${
                  active === id ? 'text-accent' : 'text-muted'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href={resume.href}
            download
            className="hidden items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-3 py-2
                       text-sm font-medium text-accent transition-colors hover:bg-accent/20 sm:inline-flex"
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
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line
                       bg-elevated text-muted transition-colors hover:text-accent md:hidden"
          >
            {open ? <X size={17} aria-hidden="true" /> : <Menu size={17} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg md:hidden">
          <ul className="shell flex flex-col py-2">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-2 py-3 text-sm transition-colors hover:text-accent ${
                    active === id ? 'text-accent' : 'text-muted'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="px-2 py-3">
              <a
                href={resume.href}
                download
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10
                           px-3 py-2 text-sm font-medium text-accent"
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
