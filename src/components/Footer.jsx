import { Github, Linkedin, Mail } from 'lucide-react'
import { contact, footer } from '../data/content'

const socials = [
  { icon: Mail, label: 'Email', href: `mailto:${contact.email}`, external: false },
  { icon: Linkedin, label: 'LinkedIn', href: contact.linkedin.href, external: true },
  { icon: Github, label: 'GitHub', href: contact.github.href, external: true },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="shell flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm text-content">{footer.line}</p>
          <p className="mt-1 font-mono text-xs text-muted">{footer.built}</p>
        </div>

        <div className="flex items-center gap-1">
          {socials.map(({ icon: Icon, label, href, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted
                         transition-colors hover:text-accent"
            >
              <Icon size={17} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
