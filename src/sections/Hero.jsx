import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import Reveal from '../components/Reveal'
import { contact, profile, resume } from '../data/content'

/**
 * Opening sequence. The hero sits above the fold, so every Reveal here runs in
 * `immediate` mode and the delays play as one staged entrance rather than
 * waiting on a scroll observer.
 */
const STEP = {
  rail: 0,
  name: 60,
  role: 200,
  headline: 290,
  description: 380,
  portrait: 330,
  tech: 470,
  actions: 620,
}

// Derived from profile.name so the data structure stays untouched.
const [firstName, ...restName] = profile.name.split(' ')
const lastName = restName.join(' ')

export default function Hero() {
  const { photo } = profile

  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      {/* Decorative depth: engineering grid, faded on every edge. */}
      <div aria-hidden="true" className="grid-texture pointer-events-none absolute inset-0" />

      <div className="shell relative flex gap-8 xl:gap-12">
        {/* Spine: a thin vertical axis anchoring the composition. Desktop only. */}
        <div
          aria-hidden="true"
          className="hidden w-5 shrink-0 flex-col items-center gap-6 pb-24 pt-16 lg:flex"
        >
          <span
            style={{ animationDelay: `${STEP.rail}ms` }}
            className="h-20 w-px origin-top animate-draw-y bg-gradient-to-b from-accent to-line"
          />
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.32em] text-muted [writing-mode:vertical-rl]">
            {profile.designation}
          </span>
          <span
            style={{ animationDelay: `${STEP.rail + 120}ms` }}
            className="w-px flex-1 origin-top animate-draw-y bg-line"
          />
        </div>

        <div
          className="grid min-w-0 flex-1 gap-y-10 pb-20 pt-12 md:pb-28 md:pt-16
                     lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-x-14 lg:gap-y-12 xl:gap-x-20"
        >
          {/* 1 — identity. Name first on every breakpoint; role sits under it. */}
          <div className="flex flex-col lg:col-start-1 lg:row-start-1 lg:self-center">
            <Reveal immediate variant="rise" delay={STEP.name}>
              {/*
                The name is split across two lines for the visual composition
                only. Stacked spans concatenate without whitespace, so the
                accessible name is supplied once, correctly spaced, and the
                display halves are hidden — they carry no extra information.
              */}
              <h1 className="masthead">
                <span className="sr-only">
                  {profile.name} — {profile.positioning}
                </span>
                <span aria-hidden="true" className="block text-content">
                  {firstName}
                </span>
                <span aria-hidden="true" className="masthead-indent block text-accent">
                  {lastName}
                </span>
              </h1>
            </Reveal>

            <Reveal immediate variant="rise" delay={STEP.role}>
              <p className="masthead-indent mt-6 flex items-center gap-4">
                <span
                  aria-hidden="true"
                  style={{ animationDelay: `${STEP.role + 60}ms` }}
                  className="h-px w-10 origin-left animate-draw-x bg-accent"
                />
                <span className="font-mono text-xs uppercase tracking-label text-muted sm:text-[0.8125rem]">
                  {profile.positioning}
                </span>
              </p>
            </Reveal>
          </div>

          {/* 2 — headline and supporting copy. */}
          <div className="lg:col-start-1 lg:row-start-2">
            <Reveal immediate variant="rise" delay={STEP.headline}>
              <p className="max-w-[20ch] text-[clamp(1.375rem,2.5vw,1.9375rem)] font-semibold leading-[1.28] tracking-[-0.015em] text-content sm:max-w-[24ch]">
                Building reliable backend systems with{' '}
                <span className="accent-glow text-accent">Java &amp; Spring Boot</span>.
              </p>
            </Reveal>

            <Reveal immediate variant="rise" delay={STEP.description}>
              <p className="mt-6 max-w-xl leading-[1.75] text-muted">{profile.heroDescription}</p>
            </Reveal>
          </div>

          {/* 3 — portrait with résumé metadata, anchoring the right column. */}
          {photo && (
            <Reveal
              immediate
              variant="scale"
              delay={STEP.portrait}
              className="relative lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center"
            >
              <div
                aria-hidden="true"
                className="radial-glow pointer-events-none absolute left-1/2 top-1/2 h-[160%] w-[160%]
                           -translate-x-1/2 -translate-y-1/2 blur-2xl"
              />

              <div className="relative mx-auto w-52 sm:w-60 lg:w-[292px]">
                <div className="portrait-frame">
                  <img
                    src={photo.src}
                    srcSet={`${photo.src} 1x, ${photo.src2x} 2x`}
                    alt={photo.alt}
                    width="400"
                    height="400"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* Small metadata block — all résumé facts, used as composition. */}
                <dl className="mt-5 space-y-1.5 border-l border-line pl-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
                  <div>
                    <dt className="sr-only">Company</dt>
                    <dd className="text-content">{profile.company}</dd>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2">
                    <dt className="sr-only">Experience</dt>
                    <dd>{profile.experienceLabel}</dd>
                    <span aria-hidden="true" className="text-accent">
                      /
                    </span>
                    <dt className="sr-only">Location</dt>
                    <dd>{profile.location}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          )}

          {/* 4 — indexed technical band, spanning the full width on desktop. */}
          <div className="lg:col-span-2 lg:row-start-3">
            <ul
              aria-label="Primary technologies"
              className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5"
            >
              {profile.heroPills.map((pill, i) => (
                <li
                  key={pill}
                  style={{ animationDelay: `${STEP.tech + i * 70}ms` }}
                  className="tech-card animate-rise-in"
                >
                  <span className="font-mono text-[0.6875rem] tracking-[0.18em] text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="mt-1.5 block text-[0.9375rem] font-medium tracking-tight text-content">
                    {pill}
                  </span>
                </li>
              ))}
            </ul>

            <Reveal immediate variant="rise" delay={STEP.actions}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href="#projects" className="btn-primary group">
                  View Projects
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>

                <a href={resume.href} download={resume.downloadName} className="btn-secondary">
                  <Download size={17} aria-hidden="true" />
                  {resume.label}
                </a>

                {/* Deliberately small: GitHub is a social link here, not a headline CTA. */}
                <span className="flex items-center gap-1 sm:ml-2">
                  <a
                    href={contact.linkedin.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn profile"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-muted
                               transition-[color,transform] duration-300 hover:-translate-y-px hover:text-accent"
                  >
                    <Linkedin size={19} aria-hidden="true" />
                  </a>
                  <a
                    href={contact.github.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub profile"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-muted
                               transition-[color,transform] duration-300 hover:-translate-y-px hover:text-accent"
                  >
                    <Github size={19} aria-hidden="true" />
                  </a>
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
