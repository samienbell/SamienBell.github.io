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
    role: "AI Developer I",
    company: "Intact Financial Corporation",
    companyUrl: "https://www.intactfc.com/",
    period: "May 2026 — August 2026",
    location: "Toronto, ON",
    summary:
      "Developed and implemented enhancements for an internal AI application, improving functionality, maintainability, and system performance.",
    highlights: [
      "Implemented LLM cost tracking by logging usage events to a database and developing API endpoints to retrieve cost data.",
      "Designed and built a cost-tracking dashboard in the frontend for admin users.",
      "Assisted in the first production deployment of the application, collaborating with cross-functional teams to validate functionality, resolve deployment issues, and ensure a successful launch.",
    ],
    tags: ["Python", "React", "PostgreSQL", "AWS", "Docker"],
  },
  {
    role: "Software Developer Intern",
    company: "Geotab",
    companyUrl: "https://www.geotab.com/",
    period: "September 2025 — December 2025",
    location: "Kitchener, ON",
    summary:
      "Full-stack developer on the customer-facing fleet management web platform MyGeotab, primarily working on the Electric Vehicle Suitability Assessment (EVSA).",
    highlights: [
      "Resolved frontend bugs that arose during the migration of EVSA into the MyGeotab monorepo.",
      "Built validators to ensure no logic errors were present before sending API requests.",
    ],
    tags: ["C#/.NET", "React", "TypeScript", "PostgreSQL", "Docker"],
  },
  ];
