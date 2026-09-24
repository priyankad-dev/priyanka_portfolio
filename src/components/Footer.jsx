import { Github, Linkedin, Mail } from 'lucide-react'
import { contact, footer, profile } from '../data/content'

const socials = [
  { icon: Mail, label: 'Email', href: `mailto:${contact.email}`, external: false },
  { icon: Linkedin, label: 'LinkedIn', href: contact.linkedin.href, external: true },
  { icon: Github, label: 'GitHub', href: contact.github.href, external: true },
]

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.positioning}</p>
          <p className="mt-3 font-mono text-xs text-muted">{footer.stackLine}</p>
        </div>

        <div className="sm:text-right">
          <div className="flex items-center gap-1 sm:justify-end">
            {socials.map(({ icon: Icon, label, href, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted
                           transition-colors hover:text-accent"
              >
                <Icon size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-3 font-mono text-xs text-muted">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
