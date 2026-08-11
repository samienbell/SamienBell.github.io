/* =========================================================================
   Site behavior
   - Projects: rendered from window.PROJECTS (see projects.js).
   - Experience: rendered from window.EXPERIENCE (see experience.js).
   - Reveal-on-scroll: progressive enhancement via IntersectionObserver.
   ========================================================================= */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    renderExperience();
    renderProjects();
    setupReveal();

    const yearEl = document.getElementById("footer-year");
    if (yearEl) yearEl.textContent = "©" + new Date().getFullYear();
  });

  /* ---- Projects ------------------------------------------------------- */
  // Minimal escaping so project data can't inject markup.
  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  const ICON_EXTERNAL =
    '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>';
  const ICON_SOURCE =
    '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12"/></svg>';

  function projectCard(p) {
    const tags = (p.tags || [])
      .map((t) => `<li>${esc(t)}</li>`)
      .join("");

    const links = [];
    if (p.links && p.links.demo) {
      links.push(
        `<a href="${esc(p.links.demo)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(
          p.name
        )} live demo" title="Live demo">${ICON_EXTERNAL}</a>`
      );
    }
    if (p.links && p.links.source) {
      links.push(
        `<a href="${esc(p.links.source)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(
          p.name
        )} source code" title="Source code">${ICON_SOURCE}</a>`
      );
    }

    const li = document.createElement("li");
    li.className = "card reveal";
    li.innerHTML =
      `<div class="card__head">` +
      `<div class="card__icon" aria-hidden="true">${esc(p.icon || "•")}</div>` +
      `<div class="card__links">${links.join("")}</div>` +
      `</div>` +
      `<h3 class="card__title">${esc(p.name)}</h3>` +
      `<p class="card__desc">${esc(p.blurb)}</p>` +
      `<ul class="card__tags">${tags}</ul>`;
    return li;
  }

  function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    const projects = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
    grid.innerHTML = "";

    if (projects.length === 0) {
      grid.innerHTML =
        '<li class="projects__loading">No projects yet — add some in projects.js.</li>';
      return;
    }

    const frag = document.createDocumentFragment();
    projects.forEach((p) => frag.appendChild(projectCard(p)));
    grid.appendChild(frag);
  }

  /* ---- Experience ----------------------------------------------------- */
  function experienceEntry(job) {
    const highlights = (job.highlights || [])
      .map((h) => `<li>${esc(h)}</li>`)
      .join("");

    const tags = (job.tags || [])
      .map((t) => `<li>${esc(t)}</li>`)
      .join("");

    const company = job.companyUrl
      ? `<a href="${esc(job.companyUrl)}" target="_blank" rel="noopener noreferrer">${esc(
          job.company
        )}</a>`
      : esc(job.company);

    const meta = [job.period, job.location]
      .filter(Boolean)
      .map((m) => esc(m))
      .join(" · ");

    const li = document.createElement("li");
    li.className = "timeline__item reveal";
    li.innerHTML =
      `<div class="timeline__marker" aria-hidden="true"></div>` +
      `<div class="timeline__body">` +
      `<div class="timeline__headline">` +
      `<h3 class="timeline__role">${esc(job.role)} <span class="timeline__at">·</span> <span class="timeline__company">${company}</span></h3>` +
      `<p class="timeline__meta">${meta}</p>` +
      `</div>` +
      (job.summary ? `<p class="timeline__summary">${esc(job.summary)}</p>` : "") +
      (highlights ? `<ul class="timeline__highlights">${highlights}</ul>` : "") +
      (tags ? `<ul class="card__tags timeline__tags">${tags}</ul>` : "") +
      `</div>`;
    return li;
  }

  function renderExperience() {
    const list = document.getElementById("experience-list");
    if (!list) return;

    const jobs = Array.isArray(window.EXPERIENCE) ? window.EXPERIENCE : [];
    list.innerHTML = "";

    if (jobs.length === 0) {
      list.innerHTML =
        '<li class="timeline__loading">No experience yet — add some in experience.js.</li>';
      return;
    }

    const frag = document.createDocumentFragment();
    jobs.forEach((job) => frag.appendChild(experienceEntry(job)));
    list.appendChild(frag);
  }

  /* ---- Reveal on scroll ---------------------------------------------- */
  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // If the browser can't observe or motion is reduced, just show everything.
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((el) => observer.observe(el));
  }
})();
