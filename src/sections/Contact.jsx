import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { contact } from '../data/content'

// Plain links only — no form, no backend, no database.
const links = [
  {
    icon: Mail,
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    external: false,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: contact.linkedin.label,
    href: contact.linkedin.href,
    external: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: contact.github.label,
    href: contact.github.href,
    external: true,
  },
]

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="07 / Contact"
      title="Get in touch"
      lead="Open to Java backend roles. Email is the fastest way to reach me."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {links.map(({ icon: Icon, label, value, href, external }, i) => (
          <Reveal key={label} delay={i * 60}>
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
              className="card flex h-full flex-col gap-2 bg-elevated p-5 transition-colors hover:border-accent/50"
            >
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-accent">
                <Icon size={14} aria-hidden="true" />
                {label}
              </span>
              <span className="break-all text-sm text-content">{value}</span>
            </a>
          </Reveal>
        ))}

        <Reveal delay={180}>
          <div className="card flex h-full flex-col gap-2 bg-elevated p-5">
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-accent">
              <MapPin size={14} aria-hidden="true" />
              Location
            </span>
            <span className="text-sm text-content">{contact.location}</span>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
