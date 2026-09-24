/**
 * Single source of truth for every string on the site.
 *
 * Everything factual here is taken from the résumé PDF in this repo
 * (public/resume.pdf). Nothing is invented — no extra technologies, metrics,
 * repositories or awards. If the résumé changes, change this file; the
 * components read from it and hardcode nothing.
 */

export const profile = {
  name: 'Priyanka Kashyap',
  // Professional positioning — how the portfolio presents her.
  positioning: 'Java Backend Developer',
  // Actual employment designation — never used as the positioning headline.
  designation: 'Software Engineer',
  company: 'Samyotech Software Solution',
  experienceLabel: '3+ Years Experience',
  location: 'Pune, India',
  stack: ['Java', 'Spring Boot', 'REST APIs', 'Microservices'],

  // Hero copy.
  headline: 'Building reliable backend systems with Java & Spring Boot.',
  heroDescription:
    'Software Engineer with 3+ years of experience building REST APIs, transactional workflows and backend systems using Java, Spring Boot, JPA/Hibernate and MySQL.',
  // Small pills under the hero text — the specialization at a glance.
  heroPills: ['Java', 'Spring Boot', 'REST APIs', 'JPA / Hibernate', 'MySQL'],

  summary:
    'I’m a Java Backend Developer with 3+ years of experience designing and developing scalable RESTful APIs using Java, Spring Boot and Microservices architecture. I have worked on backend systems involving transactional workflows, database optimization, caching, authentication and production issue resolution. My experience includes MySQL, PostgreSQL, Redis, Resilience4j Circuit Breaker, JWT authentication and transaction management.',

  // The real uploaded photograph, resized and re-encoded only.
  // Source of record: src/assets/profile-source.png. Set to `null` to remove.
  photo: {
    src: '/profile.webp',
    src2x: '/profile@2x.webp',
    alt: 'Priyanka Kashyap - Java Backend Developer',
  },
}

/** Visual labels for the About section — not ratings, not percentages. */
export const engineeringFocus = [
  'Backend Development',
  'API Design',
  'Database Optimization',
  'Security',
  'Performance',
]

export const resume = {
  href: '/resume.pdf',
  // The `download` attribute renames the file on save, so the URL stays short
  // while recruiters get a professionally named PDF in their downloads folder.
  downloadName: 'Priyanka_Kashyap_Java_Backend_Developer_Resume.pdf',
  label: 'Download Resume',
}

export const contact = {
  email: 'pri.kashyap5@gmail.com',
  phone: '+91-7024688009',
  location: 'Pune, India',
  linkedin: {
    label: 'linkedin.com/in/priyanka505',
    href: 'https://www.linkedin.com/in/priyanka505',
  },
  github: {
    label: 'github.com/priyankad-dev',
    href: 'https://github.com/priyankad-dev',
  },
}

/**
 * `count`/`suffix` drive the count-up animation; `unit` is the static word
 * rendered beside the number. Every figure is résumé-supported.
 */
export const stats = [
  { count: 3, suffix: '+', unit: 'Years', label: 'Professional Experience' },
  { count: 20, suffix: '+', unit: 'APIs', label: 'RESTful APIs' },
  { count: 20, suffix: '%', unit: '', label: 'API Response-Time Improvement' },
  { count: 15, suffix: '+', unit: '', label: 'Production Issues Resolved' },
]

export const experience = [
  {
    designation: 'Software Engineer',
    company: 'Samyotech Software Solution',
    location: 'Indore, India',
    period: 'Sep 2023 – Present',
    current: true,
    points: [
      'Engineered 20+ scalable RESTful APIs using Spring Boot, enabling modular microservices architecture.',
      'Built transactional workflows using Spring Data JPA and Hibernate, ensuring data consistency across critical operations.',
      'Optimized MySQL queries and indexing strategies, reducing API response time by 20%.',
      // The résumé writes this with the bare annotation; keep the code voice in the UI.
      'Introduced centralized exception handling using @ControllerAdvice, improving API consistency and debugging efficiency.',
      // Résumé bullet is missing its verb ("15+ production issues, increasing…"); "Resolved" restores it.
      'Resolved 15+ production issues, improving system stability and reducing incidents by 25%.',
      'Collaborated with cross-functional teams to define API contracts and improve system integration.',
    ],
    // Pulled from the bullets above for visual emphasis — no new numbers.
    metrics: [
      { value: '20+', label: 'REST APIs' },
      { value: '20%', label: 'Faster responses' },
      { value: '15+', label: 'Production issues' },
      { value: '25%', label: 'Fewer incidents' },
    ],
  },
]

export const projects = [
  {
    title: 'Auto CRM',
    subtitle: 'Automotive Dealership Backend Platform',
    // Source code is private company work — no repository link, ever.
    badge: 'Professional Project',
    description:
      'Backend platform for automotive dealership operations, focused on scalable REST APIs, lead-to-booking workflows, data validation, security and performance optimization.',
    contributions: [
      {
        lead: 'API development',
        text: 'Designed and developed scalable RESTful APIs using Spring Boot, processing 50,000+ monthly records.',
      },
      {
        lead: 'Transactional processing',
        text: 'Built transactional workflows using Spring Data JPA and Hibernate for lead-to-booking operations.',
      },
      {
        lead: 'Performance optimization',
        text: 'Improved API performance through pagination, sorting and optimized MySQL queries.',
      },
      {
        lead: 'Data validation',
        text: 'Applied Bean Validation to enforce API-level constraints and improve data integrity.',
      },
      {
        lead: 'Security',
        text: 'Secured APIs using Spring Security with JWT authentication and authorization.',
      },
    ],
    // Headline result, restated from the contributions above.
    result: { value: '50,000+', label: 'monthly records processed' },
    tech: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'MySQL',
      'Spring Security',
      'JWT',
      'REST APIs',
      'Maven',
      'Git',
    ],
  },
  {
    title: 'Factory ERP',
    subtitle: 'Production & Inventory Management',
    badge: 'Professional Project',
    description:
      'Backend system supporting production and inventory management with transactional stock operations, entity relationships, production workflows and role-based security.',
    contributions: [
      {
        lead: 'Modular architecture',
        text: 'Developed a modular Spring Boot system handling 1,000+ product records.',
      },
      {
        lead: 'Data modeling',
        text: 'Designed complex One-to-Many and Many-to-Many entity relationships using Spring Data JPA.',
      },
      {
        lead: 'Transaction management',
        text: 'Implemented Spring Transaction Management for atomic stock operations and prevention of negative inventory issues.',
      },
      {
        lead: 'Workflow automation',
        text: 'Designed state-driven production workflows with controlled transitions (Pending → In Progress → Completed), reducing manual effort by 25%.',
      },
      {
        lead: 'Security',
        text: 'Integrated Spring Security and JWT for role-based access control and secure inventory operations.',
      },
    ],
    result: { value: '25%', label: 'reduction in manual effort' },
    tech: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'MySQL',
      'Spring Security',
      'JWT',
      'REST APIs',
      'Maven',
      'Git',
    ],
  },
]

/**
 * `primary` groups carry the specialization and are rendered prominently.
 * `supporting` groups are real résumé experience, grouped under "Also worked
 * with" so PostgreSQL, Redis, Resilience4j, AWS and ReactJS never read as the
 * specialization. Every item here appears on the résumé.
 */
export const skillGroups = [
  {
    name: 'Core Java',
    tier: 'primary',
    items: ['Java', 'OOP', 'Collections', 'Exception Handling'],
  },
  {
    name: 'Backend',
    tier: 'primary',
    items: ['Spring Boot', 'Spring Framework', 'Spring Data JPA', 'Hibernate'],
  },
  {
    name: 'APIs & Architecture',
    tier: 'primary',
    items: [
      'REST APIs',
      'Microservices Architecture',
      'JWT Authentication',
      'Transaction Management',
    ],
  },
  {
    name: 'Databases',
    tier: 'primary',
    items: ['MySQL', 'SQL', 'Joins', 'Indexing', 'Query Optimization'],
  },
  {
    name: 'Performance & Caching',
    tier: 'supporting',
    items: ['PostgreSQL', 'Redis', 'Caching'],
  },
  {
    name: 'Reliability',
    tier: 'supporting',
    items: ['Resilience4j Circuit Breaker'],
  },
  {
    name: 'Tools',
    tier: 'supporting',
    items: ['Maven', 'Git', 'GitHub', 'Jenkins', 'Docker', 'AWS', 'Postman'],
  },
  {
    name: 'Frontend',
    tier: 'supporting',
    items: ['ReactJS'],
    note: 'Basic knowledge',
  },
]

export const focusLine = {
  label: 'Primary specialization',
  value: 'Java Backend · Spring Boot · REST APIs · JPA/Hibernate · Databases',
}

export const expertise = [
  {
    icon: 'Braces',
    title: 'REST API Development',
    text: 'Designing and developing scalable RESTful APIs using Spring Boot.',
  },
  {
    icon: 'Database',
    title: 'Database & Query Optimization',
    text: 'Working with MySQL, PostgreSQL, SQL, indexing, joins and query optimization.',
  },
  {
    icon: 'GitCompareArrows',
    title: 'Transactional Workflows',
    text: 'Building reliable business workflows using Spring Data JPA, Hibernate and transaction management.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Security',
    text: 'Implementing JWT-based authentication, authorization and role-based access control using Spring Security.',
  },
  {
    icon: 'Gauge',
    title: 'Reliability & Performance',
    text: 'Using caching, Redis, Resilience4j Circuit Breaker and database optimization techniques to improve application reliability and performance.',
  },
]

export const achievements = [
  {
    title: 'Pacesetter Award',
    period: 'Q3 FY25',
    text: 'For backend performance contributions.',
  },
  {
    title: 'Pat on the Back Award',
    period: 'Q4 FY24',
    text: 'For consistent performance.',
  },
]

export const education = [
  {
    degree: 'M.Sc. in Mathematics',
    institution: 'Vikram University, Ujjain',
    year: '2022',
  },
  {
    degree: 'B.Sc. in Mathematics',
    institution: 'Vikram University, Ujjain',
    year: '2018',
  },
]

export const additional = [
  {
    title: 'Problem Solving',
    text: 'Strong understanding of Data Structures and Algorithms.',
  },
  {
    title: 'Interests',
    text: 'Database Performance Optimization and System Design.',
  },
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
]

export const footer = {
  stackLine: 'Java • Spring Boot • REST APIs • MySQL',
  copyright: `© ${new Date().getFullYear()} Priyanka Kashyap`,
}
