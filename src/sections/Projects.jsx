import { Lock } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="05 / Projects"
      title="Projects"
      lead="Backend systems built at Samyotech Software Solution. These are company projects, so the source code is not publicly available."
    >
      <div className="space-y-6">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80} className="card p-6 md:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {project.title}
                  <span className="font-normal text-muted"> — {project.subtitle}</span>
                </h3>
              </div>

              {/* No repository link: this is private company work. */}
              <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-md border
                               border-line bg-elevated px-2.5 py-1 font-mono text-[0.7rem] text-muted">
                <Lock size={11} aria-hidden="true" />
                {project.badge}
              </span>
            </div>

            <p className="mt-4 max-w-3xl leading-relaxed text-muted">{project.description}</p>

            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {project.contributions.map((c) => (
                <li key={c.lead} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <p className="text-sm leading-relaxed text-muted">
                    <span className="font-semibold text-content">{c.lead}:</span> {c.text}
                  </p>
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
              {project.tech.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
