/**
 * Work experience.
 *
 * Edit this file to update your career timeline — each entry becomes a row in
 * the Experience section automatically. Order newest-first (top of the page).
 *
 * Fields:
 *   role        {string}   Your job title.
 *   company     {string}   Employer name.
 *   companyUrl  {string=}  Optional link to the company.
 *   period      {string}   e.g. "2022 — Present" or "2019 — 2022".
 *   location    {string=}  Optional location / "Remote".
 *   summary     {string}   1–2 sentences on your scope and impact.
 *   highlights  {string[]} Bullet points — favor measurable outcomes.
 *   tags        {string[]} Tech / tools used (shown as pills).
 */
window.EXPERIENCE = [
  {
    role: "Senior Software Engineer",
    company: "Acme Corp",
    companyUrl: "https://example.com",
    period: "2022 — Present",
    location: "Remote",
    summary:
      "Lead engineer on the platform team, owning the services that power billing and usage metering for millions of requests per day.",
    highlights: [
      "Cut p99 API latency 45% by redesigning the caching layer and query paths.",
      "Drove migration from a monolith to event-driven services with zero downtime.",
      "Mentored 4 engineers; established the team's code-review and on-call practices.",
    ],
    tags: ["Go", "PostgreSQL", "Kafka", "AWS", "Kubernetes"],
  },
  {
    role: "Software Engineer",
    company: "Globex",
    companyUrl: "https://example.com",
    period: "2019 — 2022",
    location: "New York, NY",
    summary:
      "Full-stack engineer on the customer-facing web app, shipping features end-to-end from database to UI.",
    highlights: [
      "Built a self-serve onboarding flow that lifted activation by 30%.",
      "Introduced end-to-end testing, reducing regressions caught in production by half.",
    ],
    tags: ["TypeScript", "React", "Node.js", "GraphQL"],
  },
  {
    role: "Software Engineer Intern",
    company: "Initech",
    period: "Summer 2018",
    location: "San Francisco, CA",
    summary:
      "Prototyped internal tooling for the data team and shipped it to production.",
    highlights: [
      "Automated a manual reporting pipeline, saving ~10 hours of analyst time weekly.",
    ],
    tags: ["Python", "Flask", "Pandas"],
  },
];
