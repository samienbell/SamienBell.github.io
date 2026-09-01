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
    name: "The Gang Online",
    blurb:
      "A web application for online multiplayer gameplay of the card game The Gang.",
    tags: ["React", "TypeScript"],
    icon: "TGO",
    links: {
      demo: "https://the-gang.coop-poker-online.workers.dev",
      source: "https://github.com/samienbell/the-gang-online",
    },
  },
  {
    name: "Chess",
    blurb:
      "An object-oriented chess program with custom piece graphic designs and a chess engine built from scratch.",
    tags: ["C++", "X11"],
    icon: "C",
    links: {      
      source: "https://github.com/myra-gupta238/CS246-Chess-Project",
    },
  },
  {
    name: "GetAway Guru",
    blurb:
      "A travel recommendation program with a custom GUI and a database with 100+ destinations.",
    tags: ["Java", "Swing"],
    icon: "GG",
    links: {
      source: "https://github.com/samienbell/GetawayGuru",
    },
  },  
];
