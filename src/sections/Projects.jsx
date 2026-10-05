import { ArrowUpRight, Award, Github, Lock } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 / Projects"
      title="Projects"
      lead="Backend systems built at Samyotech Software Solution, plus personal and hackathon projects. Company project source code is not publicly available."
    >
      <div className="space-y-6">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 90} className="card card-hover p-6 md:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <h3 className="text-xl font-semibold tracking-tight">
                {project.title}
                <span className="block text-base font-normal text-muted sm:mt-1">
                  {project.subtitle}
                </span>
              </h3>

              <div className="flex shrink-0 flex-wrap items-center gap-2 self-start">
                <span
                  className="inline-flex items-center gap-1.5 rounded-md border border-line
                             bg-elevated px-2.5 py-1 font-mono text-[0.7rem] text-muted"
                >
                  {/* Lock marks private company work; those never get a repository link. */}
                  {!project.repo && <Lock size={11} aria-hidden="true" />}
                  {project.badge}
                </span>

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source code on GitHub`}
                    className="inline-flex items-center gap-1.5 rounded-md border border-accent/25
                               bg-accent/[0.07] px-2.5 py-1 font-mono text-[0.7rem] text-accent
                               transition-colors hover:bg-accent/[0.14]"
                  >
                    <Github size={12} aria-hidden="true" />
                    GitHub
                    <ArrowUpRight size={11} aria-hidden="true" />
                  </a>
                )}

                {project.certificate && (
                  <a
                    href={project.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} hackathon certificate (PDF, opens in a new tab)`}
                    className="inline-flex items-center gap-1.5 rounded-md border border-accent/25
                               bg-accent/[0.07] px-2.5 py-1 font-mono text-[0.7rem] text-accent
                               transition-colors hover:bg-accent/[0.14]"
                  >
                    <Award size={12} aria-hidden="true" />
                    Certificate
                    <ArrowUpRight size={11} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>

            <p className="mt-5 max-w-3xl leading-relaxed text-muted">{project.description}</p>

            {project.result && (
              <p
                className="mt-6 inline-flex flex-wrap items-baseline gap-2 rounded-lg border
                           border-accent/25 bg-accent/[0.07] px-4 py-3"
              >
                <span className="font-mono text-2xl font-bold leading-none text-accent">
                  {project.result.value}
                </span>
                <span className="text-sm text-content">{project.result.label}</span>
              </p>
            )}

            <ul className="mt-7 grid gap-x-8 gap-y-4 md:grid-cols-2">
              {project.contributions.map((c) => (
                <li key={c.lead}>
                  <span className="chip-accent">{c.lead}</span>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-7 border-t border-line pt-5">
              <h4 className="eyebrow mb-3">Tech stack</h4>
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
