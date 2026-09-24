# Priyanka Kashyap — Portfolio

Personal portfolio for a Java Backend Developer. React + Vite + Tailwind CSS, deployed on Vercel.

## Commands

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # -> dist/
npm run preview   # serve the production build locally
```

## Editing content

**All copy lives in `src/data/content.js`.** Components read from it and hardcode nothing,
so updating the site means editing that one file.

| Export | Drives |
|---|---|
| `profile` | Name, positioning, designation, hero copy, summary, photo |
| `resume` | Résumé download path and button label |
| `contact` | Email, phone, location, LinkedIn, GitHub |
| `stats` | The four-figure strip |
| `experience` | Professional Experience section |
| `projects` | The two project cards |
| `skillGroups`, `focusLine` | Technical Skills — `tier` controls prominence |
| `expertise` | "What I work with" cards (inside About) |
| `engineeringFocus` | Focus labels in About |
| `achievements` | Achievements section |
| `education` | Education section |
| `additional` | About sidebar |
| `navLinks`, `footer` | Navigation and footer |

### Rules this content follows

The site is deliberately constrained to what the résumé supports, so every claim is
defensible in an interview:

- **`positioning` ≠ `designation`.** "Java Backend Developer" is the professional
  positioning; **"Software Engineer"** is the real employment title and is the only thing
  shown under Experience. Don't merge them.
- **No repository links on Auto CRM or Factory ERP.** Both are private company work and
  carry a `Professional Project` badge instead. Never add a GitHub URL to them.
- **No invented technologies.** JPQL, Java Streams, Multithreading, JavaScript, HTML/CSS,
  Kubernetes, Terraform, Azure, GCP, Kafka and RabbitMQ are absent on purpose — they are
  not on the résumé. Add one to the site only after adding it to the résumé.
- **No skill percentage bars.** `skillGroups` uses a `tier` field (`primary` /
  `supporting`) instead, so Redis, Resilience4j, PostgreSQL and AWS appear as real
  experience without being presented as the specialization.
- **Metrics come from the résumé verbatim:** 20+ APIs, 20% faster response time, 15+
  production issues, 25% incident reduction, 50,000+ monthly records, 1,000+ product
  records, 25% manual-effort reduction.

## Résumé

Served from `public/resume.pdf`. The download button carries
`download="Priyanka_Kashyap_Java_Backend_Developer_Resume.pdf"`, so the URL stays short
while recruiters get a professionally named file in their downloads folder. To swap the
résumé, replace `public/resume.pdf`; to change the saved name, edit `resume.downloadName`
in `content.js`.

Known issues in the current PDF worth fixing at the source (the site already works around
the first one):

- `• 15+ production issues, increasing system stability…` is missing its verb. The site
  renders **"Resolved** 15+ production issues…".
- The Auto CRM API bullet ends with a double period: `optimized response time..`
- The last Experience bullet has no closing period.
- The original filename reads **"Bakend"** rather than "Backend".

## Before deploying

1. **Set the real domain.** `https://priyanka-kashyap.vercel.app/` is a placeholder in four
   places — `index.html` (`<link rel="canonical">`, `og:url`, JSON-LD `url`),
   `public/robots.txt` and `public/sitemap.xml`. Update them once the Vercel URL or custom
   domain is known.
2. **Optional: publish the phone number.** `contact.phone` exists in `content.js` but is
   not rendered — a public number attracts spam. Add it to `src/sections/Contact.jsx` if
   wanted.

## Structure

```
src/
├── components/   Nav, Footer, Section, Reveal, ThemeToggle
├── hooks/        useInView, useCountUp
├── sections/     Hero, Stats, About, Experience, Projects,
│                 Skills, Achievements, Education, Contact
├── data/content.js
├── App.jsx, main.jsx, index.css
```

Design primitives live in `src/index.css` as `@layer components`: `.card` /
`.card-hover`, `.chip` / `.chip-accent`, `.btn-primary` / `.btn-secondary`,
`.eyebrow`, `.portrait-frame` and the `.grid-texture` utility. Colours are CSS
custom properties mapped to Tailwind tokens in `tailwind.config.js`, so both
themes are defined independently rather than one being an inversion of the other.

**Motion.** `Reveal` wraps `useInView` and takes `variant` (`rise` / `left` /
`right` / `scale`) plus `delay` for stagger. The only continuous animation on
the site is the hero portrait's gradient sweep. Everything stops under
`prefers-reduced-motion`, including hover transforms and the stat count-up,
which jumps straight to its final value.

## Images

| File | Purpose |
|---|---|
| `public/profile.webp`, `public/profile@2x.webp` | Hero headshot, 400px and 800px (9.6 kB / 26 kB) |
| `public/og.png` | 1200×630 link-preview card for Open Graph and Twitter |
| `src/assets/profile-source.png` | Full-resolution 1024px original — kept as the source, **not** served |

All three were generated from the source PNG with `sharp`, which was installed for the
one-off and then removed. To regenerate after swapping the photo:
`npm i -D sharp`, re-run the resize, then `npm uninstall sharp`. Set `profile.photo` to
`null` in `content.js` to drop the headshot from the hero entirely.

## Deploy

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

Or import the repo at [vercel.com/new](https://vercel.com/new) — `vercel.json` already sets
the framework, build command and output directory.
