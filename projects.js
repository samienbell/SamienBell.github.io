/**
 * Project data.
 *
 * This is the single place to edit your portfolio — add, remove, or reorder
 * entries here and the cards on the page update automatically. Keeping content
 * as data (rather than hand-written HTML) means no markup duplication and no
 * risk of malformed cards.
 *
 * Fields:
 *   name    {string}  Project title.
 *   blurb   {string}  1–2 sentence description of what it does / why it matters.
 *   tags    {string[]} Tech stack or topics (shown as pills).
 *   icon    {string}  Short label shown in the card badge (1–2 chars works best).
 *   links   {object}  Optional { demo, source } URLs. Omit either to hide it.
 */
window.PROJECTS = [
  {
    name: "Distributed Task Queue",
    blurb:
      "A horizontally-scalable job queue with at-least-once delivery, exponential backoff, and a live web dashboard. Handles 10k jobs/sec on commodity hardware.",
    tags: ["Go", "Redis", "gRPC", "Docker"],
    icon: "TQ",
    links: {
      demo: "https://example.com/demo",
      source: "https://github.com/samienbell/task-queue",
    },
  },
  {
    name: "TypeScript Query Builder",
    blurb:
      "A fully type-safe SQL query builder that infers result types from your schema at compile time. Zero runtime dependencies.",
    tags: ["TypeScript", "SQL", "DX"],
    icon: "QB",
    links: {
      source: "https://github.com/samienbell/query-builder",
    },
  },
  {
    name: "Realtime Collab Editor",
    blurb:
      "Collaborative document editor with conflict-free replicated data types (CRDTs) for offline-first editing and instant sync across clients.",
    tags: ["React", "WebSocket", "CRDT", "Rust/WASM"],
    icon: "CE",
    links: {
      demo: "https://example.com/editor",
      source: "https://github.com/samienbell/collab-editor",
    },
  },
  {
    name: "Observability CLI",
    blurb:
      "A terminal dashboard that streams metrics, logs, and traces from Kubernetes clusters into a single navigable TUI. Built for on-call speed.",
    tags: ["Rust", "Kubernetes", "OpenTelemetry"],
    icon: "OB",
    links: {
      source: "https://github.com/samienbell/observe-cli",
    },
  },
];
