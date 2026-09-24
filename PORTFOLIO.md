# Portfolio Website — Build Spec

**Owner:** Priyanka Kashyap — Java Backend Developer
**Source of truth:** `Priyanka Java Bakend Developer.pdf` (resume, rev. 2026-07-17)
**Goal:** A single-page personal portfolio that gets a recruiter or hiring manager from "who is this" to "let's talk" in under 60 seconds, and gives an engineering interviewer enough technical depth to ask good questions.

---

## 1. Positioning

The site is **not** a generic "creative developer" portfolio. It is a backend engineer's site. The visual weight should go to *systems, numbers, and architecture* — not animations.

**One-line positioning:** Java backend developer, ~3 years, builds scalable Spring Boot REST APIs and microservices with a focus on performance and resilience.

**Primary audience:** Recruiters and hiring managers screening for Java/Spring Boot backend roles (Pune / remote India).
**Secondary audience:** Tech leads reviewing depth before an interview.

**Primary CTA:** Email (`pri.kashyap5@gmail.com`) — repeated in hero and footer.
**Secondary CTAs:** Download Résumé (PDF), GitHub, LinkedIn.

---

## 2. Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **React 18 + Vite** | Matches the ReactJS listed on the résumé; fast build, zero config. |
| Styling | **Tailwind CSS** | No custom CSS architecture to maintain; consistent spacing/type scale out of the box. |
| Icons | **lucide-react** | Clean, single-stroke, no brand-logo licensing issues. |
| Content | **Single `src/data/content.js`** | All résumé content lives in one file, so updating the site means editing one object. Components stay dumb. |
| Deploy | **Vercel** (or GitHub Pages) | Push-to-deploy, free, custom domain support. |
| Analytics | Optional — Vercel Analytics | Only if she wants to know whether recruiters actually land. |

**Deliberately excluded:** CMS, backend/server, database, contact-form API, framer-motion. A portfolio with five static sections needs none of it. Contact is a `mailto:` link. Adding a Spring Boot backend to serve a contact form is a tempting way to show off the stack — do it as a *separate* project, not as this site's dependency.

**Repo layout:**

```
priyanka-portfolio/
├── public/
│   ├── resume.pdf              # copy of the source PDF, renamed
│   └── favicon.svg
├── src/
│   ├── data/content.js         # ALL résumé content
│   ├── components/
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
└── package.json
```

---

## 3. Page structure

Single page, anchor-scroll nav. Order is deliberate: the two strongest assets (quantified experience, real projects) sit above the fold-and-a-half.

1. Nav (sticky)
2. Hero
3. About / Summary
4. Technical Skills
5. Experience
6. Projects  ← *the centerpiece*
7. Achievements + Education (side by side on desktop)
8. Contact / Footer

---

## 4. Section content

All copy below is drawn from the résumé. Where the résumé phrasing is CV-terse, the rewrite for web is given — the site should read like prose, not bullet shorthand.

### 4.1 Nav

- Left: `PK` monogram or `Priyanka Kashyap`
- Right: About · Skills · Experience · Projects · Contact
- Far right: **Résumé** button (downloads `/resume.pdf`)
- Sticky, translucent backdrop-blur on scroll. Collapses to a hamburger below `md`.

### 4.2 Hero

```
Priyanka Kashyap
Java Backend Developer

I build scalable REST APIs and microservices with Spring Boot —
with a focus on performance, resilience, and clean data flow.

[ Get in touch ]  [ View projects ]  [ ↓ Résumé ]

Pune, India · github.com/priyankad-dev · linkedin.com/in/priyanka505
```

Tech chip row under the CTAs: `Spring Boot` `Microservices` `REST APIs` `Spring Data JPA` `MySQL` `Redis` `Docker` `AWS`

No photo required. If one is added, keep it small and right-aligned — it should not outweigh the headline.

### 4.3 About

Adapted from the Professional Summary. Web version — first person, shorter sentences:

> I'm a Java backend developer with around three years of experience designing and building scalable, high-performance RESTful APIs using Java, Spring Boot, and microservices architecture.
>
> My work centers on making backend systems resilient and fast — Redis caching, Resilience4j circuit breakers, and database optimization to keep response times low and failures contained. I work comfortably with MySQL and PostgreSQL, JWT-based authentication, and transaction management, in Agile teams.
>
> Currently a Software Engineer at Samyotech Software Solution. Outside of feature work, I'm most interested in database performance optimization and system design.

**Stat strip** — three numbers in large type; these are the résumé's strongest proof points:

| Number | Label |
|---|---|
| 3+ yrs | Backend experience |
| 20+ | Production REST APIs shipped |
| 20% | API response time reduction |

### 4.4 Technical Skills

Six grouped cards, verbatim from the résumé. Do **not** use skill percentage bars or star ratings — they read as arbitrary and reviewers discount them.

- **Language** — Java (Core Java, OOP, Collections, Exception Handling)
- **Frameworks** — Spring Boot, Spring Framework, Spring Data JPA, Hibernate, Resilience4j Circuit Breaker
- **Databases** — MySQL, PostgreSQL, Redis, SQL (queries, joins, indexing, query optimization), caching
- **Microservices & APIs** — REST APIs, microservices architecture, JWT authentication, transaction management
- **Tools** — Maven, Git, GitHub, Jenkins, Docker, AWS, Postman
- **Frontend (basic)** — ReactJS  ← keep the "basic" qualifier; honesty here prevents a bad screening call

### 4.5 Experience

Single timeline entry, rendered as a card with a left rule.

**Software Engineer** — Samyotech Software Solution, Indore, India
*Sep 2023 – Present*

- Engineered 20+ scalable RESTful APIs using Spring Boot, enabling a modular microservices architecture.
- Built transactional workflows with Spring Data JPA and Hibernate, ensuring data consistency across critical operations.
- Optimized MySQL queries and indexing strategies, reducing API response time by 20%.
- Introduced centralized exception handling via `@ControllerAdvice`, improving API consistency and debugging efficiency.
- **Resolved 15+ production issues**, increasing system stability and reducing incidents by 25%.
- Collaborated with cross-functional teams to define API contracts and improve system integration.

> **Résumé fix needed:** the source bullet reads "15+ production issues, increasing system stability…" — the verb is missing. Use "Resolved 15+ production issues" on the site, and fix it in the PDF too.

### 4.6 Projects — the centerpiece

Two cards, full-width, stacked. Each card: title, one-line descriptor, 4–5 contribution bullets with bolded lead-ins, tech-stack chip row, and — if the repos are public — a GitHub link.

**1. Auto CRM — Automotive Dealership Backend Platform**

- **API development:** Designed and developed scalable RESTful APIs using Spring Boot, processing 50,000+ monthly records with high availability and optimized response times.
- **Transactional processing:** Built transactional workflows with Spring Data JPA and Hibernate, ensuring data consistency across lead-to-booking operations.
- **Performance optimization:** Improved API performance with pagination, sorting, and optimized MySQL queries, cutting report generation time.
- **Data validation:** Applied Bean Validation to enforce API-level constraints and protect data integrity.
- **Security:** Secured APIs with Spring Security and JWT authentication/authorization.
- *Tech:* Java · Spring Boot · Spring Data JPA · Hibernate · MySQL · Spring Security · JWT · REST APIs · Maven · Git

**2. Factory ERP — Production & Inventory Management**

- **Microservices architecture:** Built a modular system with Spring Boot handling 1,000+ product records with high availability.
- **Data modeling:** Designed complex entity relationships (one-to-many, many-to-many) using Spring Data JPA for efficient data handling.
- **Transaction management:** Used Spring transaction management to guarantee atomic stock operations and eliminate negative-inventory bugs.
- **State-driven workflow automation:** Implemented automated production lifecycles with controlled state transitions (Pending → In Progress → Completed), enabling real-time sync and cutting manual effort by 25%.
- **Security:** Integrated Spring Security with JWT for role-based access control over inventory operations.
- *Tech:* Java · Spring Boot · Spring Data JPA · Hibernate · MySQL · Spring Security · JWT · REST APIs · Maven · Git

**Optional upgrade, high impact:** add a small architecture diagram to each project card — client → controller → service layer → JPA → MySQL, with Redis and the circuit breaker drawn in. For a backend portfolio this is worth more than any animation, because it shows *how she thinks about systems*, which a bullet list cannot.

### 4.7 Achievements & Education

Two columns on desktop, stacked on mobile.

**Achievements**

- Pacesetter Award (Q3 FY25) — backend performance contributions
- Pat on the Back Award (Q4 FY24) — consistent performance

**Education**

- M.Sc. Mathematics — Vikram University, Ujjain (2022)
- B.Sc. Mathematics — Vikram University, Ujjain (2018)

*Optional one-liner under Education:* "A mathematics background that shows up in how I approach algorithms, data modeling, and query optimization." — this ties the non-CS degree into a strength rather than leaving it unexplained.

### 4.8 Contact / Footer

Heading: **Let's build something**
Sub: "Open to Java backend roles. The fastest way to reach me is email."

- pri.kashyap5@gmail.com — `mailto:` link, also the primary CTA button
- +91-7024688009
- Pune, India
- linkedin.com/in/priyanka505
- github.com/priyankad-dev

Footer line: `© 2026 Priyanka Kashyap · Built with React & Tailwind`

---

## 5. Design system

**Direction:** dark-first, technical, restrained. Closer to API documentation than to an agency site.

**Palette**

| Token | Light | Dark |
|---|---|---|
| `bg` | `#FFFFFF` | `#0B0F14` |
| `surface` | `#F6F8FA` | `#141A21` |
| `text` | `#111827` | `#E6EDF3` |
| `muted` | `#5B6673` | `#8B98A5` |
| `accent` | `#0F766E` (teal-700) | `#2DD4BF` (teal-400) |
| `border` | `#E5E7EB` | `#222C37` |

Teal reads technical without the "every dev portfolio" feel of electric blue or purple. Accent is used for links, chips, stat numbers, and section rules — nowhere else.

**Type**

- Headings: Inter or Plus Jakarta Sans, 600/700
- Body: Inter, 400, `1.0625rem`, `line-height: 1.7`
- Code, chips, stats: JetBrains Mono — the monospace numerals make the stat strip land

**Scale:** hero `clamp(2.5rem, 6vw, 4rem)` · section headings `2rem` · card titles `1.25rem`

**Layout:** `max-width: 1100px`, centered, `px-6`. Section rhythm `py-24` desktop, `py-16` mobile. Breakpoints `sm 640` / `md 768` / `lg 1024`.

**Motion:** fade-and-rise on scroll-into-view via `IntersectionObserver`, 400ms, once only. Nothing else. Respect `prefers-reduced-motion`.

**Dark mode:** system preference by default, with a manual toggle in the nav that persists to `localStorage`.

---

## 6. Non-negotiables

- **Responsive** down to 360px. Nothing scrolls horizontally.
- **Accessible:** semantic landmarks (`<header> <main> <section> <footer>`), one `<h1>`, visible focus rings, AA contrast in both themes, alt text on any image, keyboard-navigable mobile menu.
- **Fast:** Lighthouse ≥ 95 on Performance and Accessibility. No more than two font weights per family.
- **SEO / social:** `<title>Priyanka Kashyap — Java Backend Developer</title>`, meta description from the positioning line, Open Graph image, and `Person` JSON-LD with `jobTitle`, `knowsAbout`, and both profile URLs.
- **Résumé always downloadable** — a recruiter who cannot find the PDF in five seconds leaves.

---

## 7. Build plan

1. **Scaffold** — `npm create vite@latest . -- --template react`, add Tailwind, set the color and font tokens in `tailwind.config.js`.
2. **Content first** — write `src/data/content.js` with every string from §4 before touching a component. This is the step that keeps copy from scattering across ten JSX files.
3. **Layout shell** — `App.jsx`, `Nav`, `Footer`, a section container component, dark-mode toggle.
4. **Sections in priority order** — Hero → Projects → Experience → Skills → About → Education/Achievements. Build Projects early; it is the section most likely to need design iteration.
5. **Polish** — scroll animations, active-link highlighting in the nav, hover states.
6. **Audit** — Lighthouse, 360px check, keyboard-only pass, both themes.
7. **Deploy** — push to GitHub, connect Vercel. Optional custom domain (`priyankakashyap.dev`).

---

## 8. Open items for Priyanka

These need her input and are **not** answerable from the résumé:

1. **Are the Auto CRM / Factory ERP repos public?** If yes, link them — a live GitHub link is worth more than any bullet. If they are client work that cannot be shared, say nothing rather than linking a private repo that 404s for visitors.
2. **Professional photo?** Optional. Improves recall, adds nothing technically.
3. **Custom domain**, or `*.vercel.app`?
4. **Blog section?** Skip for v1. Add it only if she will actually publish — an empty blog reads worse than no blog.
5. **"Around 3 years" is now understated.** As of September 2026 the Samyotech tenure is 3 years exactly, so site copy should say "3+ years."

---

## 9. Résumé corrections spotted

Worth fixing in the PDF, not just on the site:

- "15+ production issues" → **"Resolved 15+ production issues"** (missing verb)
- Auto CRM bullet ends with a double period: "optimized response time.."
- Source filename reads "Bakend" → **"Backend"** — recruiters see the filename
- The last experience bullet is missing its closing period
