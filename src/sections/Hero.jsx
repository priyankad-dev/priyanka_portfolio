import { ArrowRight, Download, Github, Linkedin, MapPin } from 'lucide-react'
import Reveal from '../components/Reveal'
import { contact, profile, resume } from '../data/content'

export default function Hero() {
  return (
    <section className="relative border-b border-line pb-16 pt-14 md:pb-24 md:pt-24">
      <div className="shell">
        <Reveal>
          {/* The name sits inside the h1 for SEO; the positioning line carries the visual weight. */}
          <h1 className="tracking-tight">
            <span className="mb-3 block font-mono text-sm font-normal text-accent">
              {profile.name}
            </span>
            <span className="block text-[clamp(2.25rem,6vw,3.75rem)] font-bold leading-[1.08]">
              {profile.positioning}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-muted">
            <span className="text-content">{profile.designation}</span>
            <span aria-hidden="true" className="text-line">|</span>
            <span>{profile.experienceLabel}</span>
            <span aria-hidden="true" className="text-line">|</span>
            <span>{profile.stack.join(' • ')}</span>
          </p>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {profile.heroDescription}
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm
                         font-semibold text-bg transition-opacity hover:opacity-90"
            >
              View Projects
              <ArrowRight size={16} aria-hidden="true" />
            </a>

            <a
              href={resume.href}
              download
              className="inline-flex items-center gap-2 rounded-md border border-line bg-elevated px-5 py-2.5
                         text-sm font-semibold text-content transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Download size={16} aria-hidden="true" />
              {resume.label}
            </a>

            {/* Deliberately small: GitHub is a social link here, not a headline CTA. */}
            <span className="flex items-center gap-1 sm:ml-2">
              <a
                href={contact.linkedin.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted
                           transition-colors hover:text-accent"
              >
                <Linkedin size={18} aria-hidden="true" />
              </a>
              <a
                href={contact.github.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted
                           transition-colors hover:text-accent"
              >
                <Github size={18} aria-hidden="true" />
              </a>
            </span>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-9 inline-flex items-center gap-2 font-mono text-xs text-muted">
            <MapPin size={13} aria-hidden="true" />
            {profile.location}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
