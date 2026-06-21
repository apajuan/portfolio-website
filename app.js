/* ============================================================
   Juan Raphael Dilag — portfolio
   Vanilla logic ported from the Claude Design prototype:
   theme toggle, tag filtering, project modal -> case-study
   overlay, and the full-bleed hero canvas (flow field / life).
   ============================================================ */
(function () {
  'use strict';

  /* ---------- project case-study data (ported from the prototype) ---------- */
  var PROJECTS = [
    {
      id: 'fmcg', num: '01', title: 'Business Analysis & QA Internship',
      org: 'Major FMCG / food manufacturer · PH', year: '2026',
      role: 'IT Business Analyst Intern', confidential: true, terminal: false,
      tags: ['BA', 'QA', 'Requirements', 'FSD', 'Process Mapping', 'Jira', 'draw.io', 'Excel', 'UAT', 'Defect Management'],
      problem: 'Business-critical processes and production systems needed clear functional specification and rigorous validation before rollout across a large-scale national distribution network.',
      contribution: 'I worked as a functional business analyst and stepped into a cross-functional QA role on two separate production-bound projects, partnering directly with stakeholders and developers.',
      outcomeSummary: 'Validated a billing/invoicing reconfiguration impacting ~800 retail stores via 1,000+ test cases, and ran regression on an Android upgrade across hundreds of field devices — each surfacing release-blocking defects fixed before go-live.',
      approach: [
        { label: 'BA track', body: 'Ran requirements-elicitation sessions with 5+ stakeholders across two departments, mapped As-Is and To-Be process flows in draw.io, and authored a Functional Specification Document for an internal, ISO-aligned quality-audit workflow.' },
        { label: 'QA track', body: 'Designed and executed test cases in Excel, tracked and managed defects in Jira, and partnered with developers on resolution across two projects: an invoicing/billing reconfiguration and an Android OS upgrade for a field-delivery tablet application.' }
      ],
      outcomes: [
        'Validated a customer billing/invoicing reconfiguration impacting ~800 retail stores nationwide via 1,000+ test cases, surfacing multiple release-blocking defects resolved before go-live.',
        'Ran regression testing (200+ test cases) on an Android OS upgrade deployed across hundreds of field devices, catching a critical blocking defect that kept a faulty release out of production logistics.'
      ],
      stack: ['Business Analysis', 'Requirements Elicitation', 'FSD', 'As-Is/To-Be Mapping', 'Jira', 'draw.io', 'Excel', 'UAT', 'Defect Management'],
      repoLink: null
    },
    {
      id: 'subtitle', num: '02', title: 'Subtitle-Localization Tooling',
      org: 'Self-initiated · freelance', year: '2023–25',
      role: 'Builder', confidential: false, terminal: true,
      tags: ['Automation', 'QA/Validation', 'Python', 'CLI', 'Google Speech-to-Text', 'AI tooling', 'Process Improvement'],
      problem: 'Managing subtitle-timing progress and quality across 40+ videos per project by hand was slow and error-prone — and I wanted to know whether AI could accelerate the first draft.',
      contribution: 'I built the tooling myself to solve a real bottleneck in my freelance localization work (1M+ content views sustained over several years), then evaluated an AI-assisted approach and made a clear-eyed call on its fitness.',
      outcomeSummary: 'A command-line dashboard with automated .ass quality checks and one-click packaging — and a working but deliberately shelved AI drafting prototype, kept out of production after rigorous accuracy evaluation.',
      approach: [
        { label: 'CLI progress + QA dashboard', body: 'Built a Python command-line dashboard tracking progress across every video in a project, with automated quality validation on .ass subtitle files — programmatic checks flagging overlong, too-short, and malformed lines, essentially a custom test suite for subtitle quality. Added one-click end-of-project packaging that zips deliverables and auto-drafts the client email with completion statistics.' },
        { label: 'AI-assisted drafting prototype', body: 'Prototyped a tool integrating Google’s speech-to-text API to auto-generate .ass drafts for human review. I present this as an exploration: it proved out API integration, AI-assisted automation, and end-to-end pipeline design — and after evaluating its accuracy limitations I decided it was not production-ready. Knowing when not to ship is part of the work.' }
      ],
      outcomes: [
        'Cut manual progress-tracking and QA overhead across 40+ videos per project down to a single command.',
        'Caught overlong, too-short and malformed lines automatically before delivery, instead of by eye.',
        'Validated an AI drafting pipeline end-to-end, then made a documented decision not to ship it — accuracy below the bar.'
      ],
      stack: ['Python', 'CLI', 'Automation', 'QA/Validation', 'Google Speech-to-Text API', 'AI tooling', 'Process Improvement'],
      repoLink: 'https://github.com/apajuan'
    },
    {
      id: 'capstone', num: '03', title: 'Community-Based Reporting & Response System',
      org: 'Biñan City CDRRMO · Capstone', year: '2025',
      role: 'Lead Researcher & Developer', confidential: false, terminal: false,
      tags: ['BA', 'System Architecture', 'Mobile', 'Web Portal', 'AES-256/RBAC/MFA', 'Agile/Scrum', 'Civic Tech', 'Security'],
      problem: 'The Biñan City CDRRMO relied on manual, verbal-only incident-reporting workflows with no real-time coordination and no data trail.',
      contribution: 'I led requirements analysis and stakeholder validation, designed the system architecture, and coordinated development across the team.',
      outcomeSummary: 'A cross-platform system on a four-layer modular architecture that replaced an entirely manual process with live, data-driven incident reporting and dispatch for a real government office.',
      approach: [
        { label: 'Architecture & build', body: 'Designed and built a four-layer modular system: a mobile app for geotagged incident reporting and real-time responder coordination; a responder interface; and a centralized web administrative portal for incident validation, resource dispatching, and geographic data analytics.' },
        { label: 'Security & delivery', body: 'Implemented a Data Privacy Act–compliant security framework (AES-256/SSL encryption, role-based access control, MFA), and delivered the system through one-week Agile Scrum sprints with continuous stakeholder validation.' }
      ],
      outcomes: [
        'Replaced an entirely manual, verbal-only process with a live, data-driven reporting and dispatch system for a real city government office.',
        'Built in geotagged reporting, real-time responder coordination, and a central portal for validation, dispatch and geographic analytics.',
        'Shipped a DPA-compliant security framework (AES-256/SSL, RBAC, MFA) from day one.'
      ],
      stack: ['Requirements Analysis', 'Stakeholder Management', 'System Architecture', 'Mobile Development', 'Web Portal', 'AES-256 / RBAC / MFA', 'Agile/Scrum'],
      repoLink: null
    },
    {
      id: 'parking', num: '04', title: 'IoT-Based Smart Parking System',
      org: 'Academic · hardware build', year: '2024',
      role: 'Hardware Lead & Full-Stack Developer', confidential: false, terminal: false,
      tags: ['IoT', 'Arduino', 'Wemos R1', 'RFID', 'Next.js', 'Supabase', 'PostgreSQL', 'Full-stack'],
      problem: 'Manual parking management with no automated access control and no real-time occupancy data.',
      contribution: 'I led the hardware and built the full stack — from the microcontroller firmware through the database to the monitoring dashboard.',
      outcomeSummary: 'A working access-control system spanning microcontrollers, sensors, a real-time database, and a remote dashboard.',
      approach: [
        { label: 'Hardware', body: 'Arduino + Wemos R1 microcontrollers interfacing with RFID sensors for gate access control.' },
        { label: 'Backend & dashboard', body: 'A Supabase/PostgreSQL backend handling real-time logs, automated timestamping and duration calculations, with a Next.js dashboard for remote monitoring and status reporting.' }
      ],
      outcomes: [
        'Automated gate access via RFID, replacing manual control.',
        'Captured real-time entry/exit logs with automatic timestamping and duration calculation.',
        'Surfaced live occupancy and status through a remote Next.js dashboard.'
      ],
      stack: ['IoT', 'Arduino', 'Wemos R1', 'RFID', 'Next.js', 'Supabase', 'PostgreSQL'],
      repoLink: 'https://github.com/apajuan'
    },
    {
      id: 'bettergov', num: '05', title: 'BetterGov.ph — Calamba City Portal',
      org: 'Open-source civic tech', year: '2025–26',
      role: 'Open-source contributor', confidential: false, terminal: false,
      tags: ['Civic Tech', 'Open Source', 'Front-end', 'Public Sector', 'Philippine LGU'],
      problem: 'Philippine local government units often lack a clean, consistent transparency presence. BetterGov.ph is a community-maintained answer; the Calamba City portal needed to be built and themed from the project template.',
      contribution: 'I contribute front-end implementation work to the open-source project, building out the Calamba City portal and theming it to the city’s official branding (Gold, Red, Blue, Grey, White).',
      outcomeSummary: 'Front-end implementation and theming for a real LGU transparency portal, contributed to a community-maintained open-source project.',
      approach: [
        { label: 'Implementation', body: 'Built the Calamba City portal out from the shared project template, implementing pages and components in the front-end stack.' },
        { label: 'Theming', body: 'Applied the city’s official brand palette — Gold, Red, Blue, Grey and White — consistently across the portal.' }
      ],
      outcomes: [
        'Contributed front-end work to a live, community-maintained civic-tech project.',
        'Themed the portal to Calamba City’s official branding.',
        'Did it because Philippine governance and transparency matter to me — the kind of work I want more of.'
      ],
      stack: ['Civic Tech', 'Open Source', 'Front-end', 'Philippine LGU', 'Public-sector Transparency'],
      repoLink: 'https://github.com/apajuan'
    }
  ];

  var PROJECT_BY_ID = {};
  PROJECTS.forEach(function (p) { PROJECT_BY_ID[p.id] = p; });

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  /* =========================================================
     THEME
     ========================================================= */
  function initTheme() {
    var stored = null;
    try { stored = localStorage.getItem('apa-theme'); } catch (e) {}
    var theme = stored;
    if (theme !== 'light' && theme !== 'dark') {
      var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      theme = prefersDark ? 'dark' : 'light';
    }
    applyTheme(theme);

    $$('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        try { localStorage.setItem('apa-theme', next); } catch (e) {}
        if (bg) bg.onThemeChange();
      });
    });
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    $$('[data-theme-toggle]').forEach(function (btn) {
      btn.textContent = theme === 'dark' ? 'Light' : 'Dark';
    });
  }

  /* =========================================================
     PROJECT FILTERING
     ========================================================= */
  function initFilter() {
    var row = $('[data-filter-row]');
    if (!row) return;
    row.addEventListener('click', function (ev) {
      var btn = ev.target.closest('[data-filter]');
      if (btn) applyFilter(btn.getAttribute('data-filter'));
    });
  }
  function applyFilter(filter) {
    $$('[data-filter]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-filter') === filter ? 'true' : 'false');
    });
    $$('[data-cards] .card').forEach(function (card) {
      var tags = (card.getAttribute('data-tags') || '').split(',');
      var match = filter === 'All' || tags.indexOf(filter) !== -1;
      card.hidden = !match;
    });
  }

  /* skills "→ projects" cross-link */
  function initExplore() {
    $$('[data-explore]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyFilter(btn.getAttribute('data-explore'));
        var el = $('#projects');
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
      });
    });
  }

  /* =========================================================
     MODAL + CASE-STUDY OVERLAYS
     ========================================================= */
  var overlayRoot, lastFocus = null;

  function lockScroll(on) { document.body.style.overflow = on ? 'hidden' : ''; }

  function closeOverlays() {
    overlayRoot.innerHTML = '';
    lockScroll(false);
    if (lastFocus && lastFocus.focus) { lastFocus.focus(); lastFocus = null; }
  }

  function openModal(id) {
    var p = PROJECT_BY_ID[id];
    if (!p) return;
    lastFocus = document.activeElement;
    var nda = p.confidential
      ? '<span class="nda-badge">Confidential · NDA — details generalized</span>' : '';
    var tags = p.tags.map(function (t) { return '<span class="modal-tag">' + esc(t) + '</span>'; }).join('');
    overlayRoot.innerHTML =
      '<div class="overlay" data-close role="dialog" aria-modal="true" aria-label="' + esc(p.title) + '">' +
        '<div class="modal" role="document">' +
          '<div class="modal-head">' +
            '<div>' +
              '<div class="tagline"><span class="num">' + esc(p.num) + '</span>' + nda + '</div>' +
              '<h3>' + esc(p.title) + '</h3>' +
              '<div class="meta">' + esc(p.role) + ' · ' + esc(p.org) + ' · ' + esc(p.year) + '</div>' +
            '</div>' +
            '<button class="icon-btn" data-close aria-label="Close">×</button>' +
          '</div>' +
          '<div class="modal-body">' +
            '<div class="eyebrow-accent">Problem</div><p>' + esc(p.problem) + '</p>' +
            '<div class="eyebrow-accent">Outcome</div><p>' + esc(p.outcomeSummary) + '</p>' +
            '<div class="modal-tags">' + tags + '</div>' +
          '</div>' +
          '<div class="modal-actions">' +
            '<button class="btn btn-primary btn-md" data-open-detail="' + esc(p.id) + '">Open full case study →</button>' +
            '<button class="btn btn-outline btn-md" data-close>Close</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    lockScroll(true);
    var modal = $('.modal', overlayRoot);
    if (modal) modal.querySelector('[data-close]').focus();
  }

  function terminalBlock() {
    return '' +
      '<div class="terminal" data-reveal>' +
        '<div class="bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span>' +
        '<span class="title">subqa — project dashboard</span></div>' +
        '<pre><span class="g">$</span> subqa status --project ep_2026\n' +
'<span class="dim">────────────────────────────────────────────</span>\n' +
' PROJECT ep_2026          43 videos       <span class="g">87% complete</span>\n' +
'<span class="dim">────────────────────────────────────────────</span>\n' +
' ep_01.ass   <span class="g">✓ pass</span>     312 lines    0 issues\n' +
' ep_02.ass   <span class="g">✓ pass</span>     298 lines    0 issues\n' +
' ep_17.ass   <span class="warn">! review</span>   341 lines    3 overlong\n' +
' ep_22.ass   <span class="err">✗ fail</span>     —            malformed timestamp\n' +
' ...\n' +
'<span class="dim">────────────────────────────────────────────</span>\n' +
' QA SUITE     1,284 lines checked   <span class="warn">11 flagged</span>   <span class="err">2 errors</span>\n' +
'<span class="g">$</span> subqa package --zip --draft-email\n' +
' ✓ deliverables.zip written (43 files)\n' +
' ✓ client email drafted with completion stats</pre>' +
      '</div>';
  }

  function openDetail(id) {
    var p = PROJECT_BY_ID[id];
    if (!p) return;
    if (!lastFocus) lastFocus = document.activeElement;
    var nda = p.confidential ? '<span class="nda-badge">Confidential · NDA — details generalized</span>' : '';
    var tags = p.tags.map(function (t) { return '<span class="detail-tag">' + esc(t) + '</span>'; }).join('');
    var approach = p.approach.map(function (b) {
      return '<div class="approach-blk"><h3>' + esc(b.label) + '</h3><p>' + esc(b.body) + '</p></div>';
    }).join('');
    var outcomes = p.outcomes.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('');
    var stack = p.stack.map(function (s) { return '<span class="detail-tag">' + esc(s) + '</span>'; }).join('');
    var repo = p.repoLink
      ? '<a class="repo-link" href="' + esc(p.repoLink) + '" target="_blank" rel="noopener">View on GitHub ↗</a>' : '';
    var terminal = p.terminal ? terminalBlock() : '';

    overlayRoot.innerHTML =
      '<div class="detail" role="dialog" aria-modal="true" aria-label="' + esc(p.title) + ' case study">' +
        '<div class="detail-bar"><div class="inner">' +
          '<button data-close>← Back to projects</button>' +
          '<a href="resume.pdf" download>Résumé ↓</a>' +
        '</div></div>' +
        '<article>' +
          '<div class="tagline"><span class="num">' + esc(p.num) + '</span>' + nda + '</div>' +
          '<h1>' + esc(p.title) + '</h1>' +
          '<div class="meta">' + esc(p.role) + ' · ' + esc(p.org) + ' · ' + esc(p.year) + '</div>' +
          '<div class="detail-tags">' + tags + '</div>' +
          terminal +
          '<div class="detail-sections">' +
            '<div><div class="detail-label">Problem</div><p>' + esc(p.problem) + '</p></div>' +
            '<div><div class="detail-label">My role</div><p>' + esc(p.contribution) + '</p></div>' +
            '<div><div class="detail-label">Approach</div><div class="approach-list">' + approach + '</div></div>' +
            '<div><div class="detail-label">Outcome</div><ul class="outcome-list">' + outcomes + '</ul></div>' +
            '<div class="stack-block"><div class="label">Stack &amp; methods</div>' +
              '<div class="detail-tags" style="margin-bottom:0;">' + stack + '</div>' + repo +
            '</div>' +
          '</div>' +
          '<div class="detail-back"><button class="btn btn-outline btn-md" data-close>← Back to all projects</button></div>' +
        '</article>' +
      '</div>';
    lockScroll(true);
    var detail = $('.detail', overlayRoot);
    if (detail) {
      detail.scrollTop = 0;
      detail.querySelector('[data-close]').focus();
      observeReveals(detail);
    }
  }

  function initOverlays() {
    overlayRoot = $('[data-overlay-root]');

    $$('[data-cards] .card').forEach(function (card) {
      card.addEventListener('click', function () { openModal(card.getAttribute('data-id')); });
    });

    // delegated handling for dynamically-injected overlay controls
    overlayRoot.addEventListener('click', function (ev) {
      var detailBtn = ev.target.closest('[data-open-detail]');
      if (detailBtn) { openDetail(detailBtn.getAttribute('data-open-detail')); return; }
      var closer = ev.target.closest('[data-close]');
      if (closer) { closeOverlays(); }
    });

    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && overlayRoot.firstChild) closeOverlays();
    });
  }

  /* =========================================================
     SCROLL REVEAL (images/mockups only — never text)
     ========================================================= */
  function observeReveals(root) {
    if (!('IntersectionObserver' in window)) {
      $$('[data-reveal]', root).forEach(function (n) { n.classList.add('revealed'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    $$('[data-reveal]', root).forEach(function (n) { io.observe(n); });
  }

  /* =========================================================
     HERO BACKGROUND — flow field / game of life
     Full-bleed width is handled in CSS (canvas spans 100vw);
     this reads clientWidth/Height, so it picks up the width.
     ========================================================= */
  var BG_MODES = ['flow', 'wind', 'signal', 'contour', 'life'];

  function HeroBackground(canvas) {
    var self = this;
    this.canvas = canvas;
    this.mode = 'flow';
    try { var m = localStorage.getItem('apa-bg'); if (BG_MODES.indexOf(m) !== -1) this.mode = m; } catch (e) {}
    this.reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.perlin = makePerlin(20260620);
    this.bg = null;
    this.last = 0;
    this.raf = 0;

    // pointer interaction: the cursor carves a small "blocked" zone that the
    // particle modes (flow/wind/signal) flow or fade around. Life is exempt.
    this.mouse = { x: 0, y: 0, active: false };
    this.mouseR = 90;

    this.syncControl();
    this.size();
    this.setup();
    this.bindPointer();
    this.start();

    window.addEventListener('resize', function () { self.size(); self.setup(); });
    var sel = $('[data-bg-select]');
    if (sel) sel.addEventListener('change', function () { self.setMode(sel.value); });
  }

  HeroBackground.prototype.colors = function () {
    if (document.documentElement.getAttribute('data-theme') === 'light')
      return { bg: '#f3f5f1', fade: '243,245,241', accent: '60,122,74', flowA: 0.22, lifeA: 0.18, fadeStep: 0.05 };
    return { bg: '#121512', fade: '18,21,18', accent: '127,180,135', flowA: 0.16, lifeA: 0.13, fadeStep: 0.055 };
  };
  HeroBackground.prototype.syncControl = function () {
    var sel = $('[data-bg-select]');
    if (sel) sel.value = this.mode;
  };
  // The canvas is pointer-events:none, so track the pointer on window and map
  // it into canvas-local CSS pixels. Active only while inside the canvas box.
  HeroBackground.prototype.bindPointer = function () {
    var self = this;
    var onMove = function (ev) {
      var rect = self.canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) { self.mouse.active = false; return; }
      var x = ev.clientX - rect.left, y = ev.clientY - rect.top;
      self.mouse.x = x; self.mouse.y = y;
      self.mouse.active = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onMove, { passive: true });
    document.addEventListener('pointerleave', function () { self.mouse.active = false; });
  };
  // Deflect a particle's intended step (px,py -> nx,ny) around the cursor zone:
  // if the destination falls inside the radius, push it back out to the ring and
  // slide it tangentially in its direction of travel, so streamlines flow around.
  HeroBackground.prototype.avoid = function (px, py, nx, ny) {
    var mo = this.mouse;
    if (!mo.active) return null;
    var R = this.mouseR;
    var dx = nx - mo.x, dy = ny - mo.y;
    var d = Math.sqrt(dx * dx + dy * dy);
    if (d >= R) return null;
    if (d < 0.001) { dx = nx - px; dy = ny - py; d = Math.sqrt(dx * dx + dy * dy) || 1; }
    var ux = dx / d, uy = dy / d;            // outward radial unit vector
    var tx = -uy, ty = ux;                    // tangent; pick the side of travel
    if ((nx - px) * tx + (ny - py) * ty < 0) { tx = -tx; ty = -ty; }
    var slide = (R - d) * 0.6;
    return { x: mo.x + ux * R + tx * slide, y: mo.y + uy * R + ty * slide };
  };
  HeroBackground.prototype.setMode = function (mode) {
    if (this.mode === mode || BG_MODES.indexOf(mode) === -1) return;
    this.mode = mode;
    try { localStorage.setItem('apa-bg', mode); } catch (e) {}
    this.syncControl();
    if (this.bg) this.bg.ctx.clearRect(0, 0, this.bg.w, this.bg.h);
    this.setup();
  };
  HeroBackground.prototype.onThemeChange = function () {
    var s = this.bg;
    // these modes full-clear each animation frame, but repaint the backdrop on theme
    // flip so a paused / reduced-motion canvas isn't left on the old theme's bg
    if (s && (this.mode === 'flow' || this.mode === 'wind')) {
      s.ctx.fillStyle = this.colors().bg; s.ctx.fillRect(0, 0, s.w, s.h);
    }
  };
  HeroBackground.prototype.size = function () {
    var canvas = this.canvas;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) { this.bg = null; return; }
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    var ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.bg = { ctx: ctx, w: w, h: h };
  };
  HeroBackground.prototype.setup = function () {
    if (!this.bg) return;
    switch (this.mode) {
      case 'life': this.setupLife(); break;
      case 'wind': this.setupWind(); break;
      case 'signal': this.setupSignal(); break;
      case 'contour': this.setupContour(); break;
      default: this.setupFlow();
    }
  };
  HeroBackground.prototype.draw = function (dt) {
    switch (this.mode) {
      case 'life': this.drawLife(dt); break;
      case 'wind': this.drawWind(dt); break;
      case 'signal': this.drawSignal(dt); break;
      case 'contour': this.drawContour(dt); break;
      default: this.drawFlow(dt);
    }
  };
  HeroBackground.prototype.onScreen = function () {
    var sec = this.canvas.parentNode;
    if (!sec) return false;
    var r = sec.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;
    return r.bottom > 0 && r.top < vh;
  };
  HeroBackground.prototype.start = function () {
    var self = this;
    if (this.reduced) {
      this.draw(16);
      return;
    }
    this.last = performance.now();
    var loop = function (now) {
      var dt = Math.min(now - self.last, 60);
      self.last = now;
      if (self.onScreen()) self.draw(dt);
      self.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
  };
  // flow field
  HeroBackground.prototype.setupFlow = function () {
    var s = this.bg; if (!s) return;
    var count = Math.round((s.w * s.h) / 1500);
    var self = this;
    this.particles = [];
    for (var i = 0; i < count; i++) this.particles.push(self.spawn(s));
    s.ctx.fillStyle = this.colors().bg;
    s.ctx.fillRect(0, 0, s.w, s.h);
    this.flowT = 0;
  };
  HeroBackground.prototype.spawn = function (s) {
    return {
      hist: [],                                  // flat [x, y, …] history → finite self-cleaning trail
      x: Math.random() * s.w, y: Math.random() * s.h, life: 20 + Math.random() * 140
    };
  };
  HeroBackground.prototype.drawFlow = function (dt) {
    var s = this.bg; if (!s) return;
    var ctx = s.ctx, col = this.colors();
    // full clear — finite per-particle history trails (below) replace the old
    // translucent fade, so nothing accumulates or ghosts between frames
    ctx.fillStyle = col.bg;
    ctx.fillRect(0, 0, s.w, s.h);
    if (this.reduced) return;
    this.flowT += dt * 0.00004;
    var scale = 0.0019, speed = dt * 0.045;
    var cap = 22;                                // trail length in points
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (var i = 0; i < this.particles.length; i++) {
      var pt = this.particles[i];
      var ang = this.perlin(pt.x * scale, pt.y * scale + this.flowT) * Math.PI * 2.2;
      var nx = pt.x + Math.cos(ang) * speed * 22;
      var ny = pt.y + Math.sin(ang) * speed * 22;
      var av = this.avoid(pt.x, pt.y, nx, ny);
      if (av) { nx = av.x; ny = av.y; }
      var edge = Math.min(pt.x, pt.y, s.w - pt.x, s.h - pt.y);
      var fadeIn = Math.max(0, Math.min(1, edge / 70));

      // record + cap history → finite, self-cleaning trail
      pt.hist.push(pt.x, pt.y);
      while (pt.hist.length > cap * 2) { pt.hist.shift(); pt.hist.shift(); }

      // draw trail as a fading, tapering polyline (oldest = faintest + thinnest)
      var segs = pt.hist.length / 2 - 1;
      for (var j = 0; j < segs; j++) {
        var t = (j + 1) / segs;                  // 0 = tail end, 1 = head
        ctx.strokeStyle = 'rgba(' + col.accent + ',' + (col.flowA * t * fadeIn) + ')';
        ctx.lineWidth = 0.4 + t * 1.1;
        ctx.beginPath();
        ctx.moveTo(pt.hist[j * 2],     pt.hist[j * 2 + 1]);
        ctx.lineTo(pt.hist[j * 2 + 2], pt.hist[j * 2 + 3]);
        ctx.stroke();
      }

      pt.x = nx; pt.y = ny; pt.life -= dt * 0.06;
      if (pt.life <= 0 || pt.x < -5 || pt.y < -5 || pt.x > s.w + 5 || pt.y > s.h + 5) {
        var ns = this.spawn(s);
        pt.x = ns.x; pt.y = ns.y; pt.life = ns.life;
        pt.hist.length = 0;                      // drop trail so it doesn't streak across on respawn
      }
    }
  };

  // wind gusts — drifting green particles, each leaving a short fading trailing
  // streamline, blown by a turbulent wind whose direction slowly wanders and that
  // periodically surges then settles (ebb and flow). A slow breeze, not a storm.
  // Tuning knobs:
  //   density     -> the / 3400 divisor below (higher = sparser/calmer)
  //   gusts       -> gustPeak range + gustCooldown ranges
  //   trail length-> the maxLen in drawWind (per-particle position history cap)
  //   opacity     -> the lineA base values (0.13 light / 0.13 dark)
  //   swirliness  -> the turb * 0.42 multiplier in drawWind
  HeroBackground.prototype.setupWind = function () {
    var s = this.bg; if (!s) return;
    var count = Math.round((s.w * s.h) / 3400);
    this.wind = [];
    for (var i = 0; i < count; i++) this.wind.push(this.spawnWind(s));
    s.ctx.fillStyle = this.colors().bg;
    s.ctx.fillRect(0, 0, s.w, s.h);
    this.windPhase = 0;
    this.gust = 0;
    this.gustPeak = 0;
    this.gustAttack = false;
    this.gustCooldown = 1800 + Math.random() * 2200;
  };
  HeroBackground.prototype.spawnWind = function (s) {
    var rnd = Math.random();
    return {
      x: Math.random() * s.w,
      y: Math.random() * s.h,
      spd: 0.5 + Math.random() * 1.1,
      drift: (Math.random() - 0.5) * 0.5,
      r: rnd < 0.22 ? 1.5 + Math.random() * 1.2 : 0.7 + Math.random() * 0.6,  // ~22% larger "lead" dots
      hist: []  // flat [x, y, x, y, …] position history → self-cleaning finite trail
    };
  };
  HeroBackground.prototype.drawWind = function (dt) {
    var s = this.bg; if (!s) return;
    var ctx = s.ctx, col = this.colors(), w = s.w, h = s.h;
    var light = document.documentElement.getAttribute('data-theme') === 'light';

    // 1. full clear — solid background each frame. Trails come from per-particle
    //    position history (below), not from compositing translucent rects, so
    //    nothing accumulates and tails clean themselves up completely.
    ctx.fillStyle = col.bg;
    ctx.fillRect(0, 0, w, h);

    if (this.reduced) {                        // one near-static frame, no integration
      ctx.fillStyle = 'rgba(' + col.accent + ',' + ((light ? 0.13 : 0.10) * 2.1) + ')';
      for (var k = 0; k < this.wind.length; k++) {
        var q = this.wind[k];
        ctx.beginPath(); ctx.arc(q.x, q.y, q.r, 0, 6.2832); ctx.fill();
      }
      return;
    }

    // 2. gust envelope — fast-ish attack toward a peak, then slow decay to calm
    this.gustCooldown -= dt;
    if (this.gustCooldown <= 0) {
      this.gustPeak = 0.5 + Math.random() * 0.45;
      this.gustAttack = true;
      this.gustCooldown = 6500 + Math.random() * 6500;
    }
    if (this.gustAttack) {
      this.gust += (this.gustPeak - this.gust) * Math.min(1, dt * 0.0018);
      if (this.gust >= this.gustPeak - 0.03) this.gustAttack = false;
    } else {
      this.gust += (0 - this.gust) * Math.min(1, dt * 0.00085);
    }

    // 3. turbulent global direction — a slowly wandering base angle (radians)
    this.windPhase += dt * 0.00003;
    var meanAng = Math.sin(this.windPhase * 1.3) * 0.5 + this.perlin(this.windPhase, 10) * 0.6;

    // 4. per particle
    var scale = 0.0016;
    var speed = dt * 0.05 * (1 + this.gust * 1.5);
    // layered history segments read a touch fainter than the old single stroke, so the base is bumped up
    var lineA = (light ? 0.13 : 0.13) * (0.5 + this.gust * 0.7);  // gust brightens slightly
    var dotA = lineA * 2.1;
    var maxLen = Math.round(8 + this.gust * 14);                 // tails grow during gusts
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (var i = 0; i < this.wind.length; i++) {
      var pt = this.wind[i];
      var turb = this.perlin(pt.x * scale, pt.y * scale + this.windPhase * 4) * Math.PI;
      var ang = meanAng + turb * 0.42 + pt.drift;
      var sp = speed * pt.spd * 18;
      var nx = pt.x + Math.cos(ang) * sp, ny = pt.y + Math.sin(ang) * sp;
      var av = this.avoid(pt.x, pt.y, nx, ny);
      if (av) { nx = av.x; ny = av.y; }
      var edge = Math.min(pt.x, pt.y, w - pt.x, h - pt.y);
      var fadeIn = Math.max(0, Math.min(1, edge / 60));        // soften near edges

      // record position + cap history → finite self-cleaning trail
      pt.hist.push(pt.x, pt.y);
      var cap = Math.round(maxLen * (0.6 + pt.spd * 0.4));
      while (pt.hist.length > cap * 2) { pt.hist.shift(); pt.hist.shift(); }

      // fading, tapering curved polyline — quadratic curves through each point's
      // midpoint so tails curl smoothly with the turbulence instead of looking faceted
      var segs = pt.hist.length / 2 - 1;
      for (var j = 0; j < segs; j++) {
        var t = (j + 1) / segs;                                // 0 = tail end, 1 = head
        var x0 = pt.hist[j * 2],     y0 = pt.hist[j * 2 + 1];
        var x1 = pt.hist[j * 2 + 2], y1 = pt.hist[j * 2 + 3];
        ctx.strokeStyle = 'rgba(' + col.accent + ',' + (lineA * t * fadeIn) + ')';
        ctx.lineWidth = 0.4 + t * (pt.r * 0.9);
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.quadraticCurveTo(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
        ctx.lineTo(x1, y1);
        ctx.stroke();
      }

      // drifting dot head — soft bloom on the larger "lead" dots only
      var lead = pt.r > 1.4;
      if (lead) { ctx.shadowBlur = 6 + this.gust * 6; ctx.shadowColor = 'rgba(' + col.accent + ',' + (0.5 * fadeIn) + ')'; }
      ctx.fillStyle = 'rgba(' + col.accent + ',' + (dotA * fadeIn) + ')';
      ctx.beginPath(); ctx.arc(nx, ny, pt.r, 0, 6.2832); ctx.fill();
      if (lead) ctx.shadowBlur = 0;            // clear so trail strokes stay crisp and cheap

      pt.x = nx; pt.y = ny;
      if (pt.x < -8 || pt.y < -8 || pt.x > w + 8 || pt.y > h + 8) {
        var ns = this.spawnWind(s);
        pt.x = ns.x; pt.y = ns.y; pt.spd = ns.spd; pt.drift = ns.drift; pt.r = ns.r;
        pt.hist.length = 0;                    // drop trail so it doesn't streak across on wrap
      }
    }
  };

  // dot matrix / signal sweep — a quiet grid of dots with a soft brightness wave
  HeroBackground.prototype.setupSignal = function () {
    var s = this.bg; if (!s) return;
    this.sigCell = 24;
    this.sigCols = Math.ceil(s.w / this.sigCell) + 1;
    this.sigRows = Math.ceil(s.h / this.sigCell) + 1;
    this.sweep = 0;
    s.ctx.fillStyle = this.colors().bg;
    s.ctx.fillRect(0, 0, s.w, s.h);
  };
  HeroBackground.prototype.drawSignal = function (dt) {
    var s = this.bg; if (!s) return;
    var ctx = s.ctx, col = this.colors();
    ctx.fillStyle = col.bg;
    ctx.fillRect(0, 0, s.w, s.h);
    var band = 230;
    var span = s.w + s.h;
    if (!this.reduced) this.sweep += dt * 0.45;
    // sweep position travels diagonally (x + y), wrapping with a short pause between passes
    var cycle = span + band * 2 + 240;
    var pos = (this.sweep % cycle) - band;
    var cell = this.sigCell;
    var baseA = 0.10, peakA = 0.85;       // base grid is always visible; the wave brightens it
    for (var gy = 0; gy < this.sigRows; gy++) {
      for (var gx = 0; gx < this.sigCols; gx++) {
        var px = gx * cell, py = gy * cell;
        var dist = Math.abs((px + py) - pos);
        var pulse = dist < band ? (1 - dist / band) : 0;
        pulse = pulse * pulse;
        if (this.mouse.active) {                 // cursor casts a shadow on the sweep
          var mdx = px - this.mouse.x, mdy = py - this.mouse.y;
          var md = Math.sqrt(mdx * mdx + mdy * mdy);
          if (md < this.mouseR) { var k = md / this.mouseR; pulse *= k * k; }
        }
        var a = baseA + (peakA - baseA) * pulse;
        ctx.fillStyle = 'rgba(' + col.accent + ',' + a + ')';
        var r = 1.5 + 3.4 * pulse;
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(px - r / 2, py - r / 2, r, r, r / 2);
        else ctx.rect(px - r / 2, py - r / 2, r, r);
        ctx.fill();
      }
    }
  };

  // contour topography of Calamba — Mt. Makiling (dominant peak, south) sloping
  // down to Laguna de Bay (flat lowland/water, north). Morphing iso-lines via
  // marching squares over the terrain height field + slowly drifting noise.
  HeroBackground.prototype.setupContour = function () {
    var s = this.bg; if (!s) return;
    this.conCell = 22;
    var C = this.conCols = Math.ceil(s.w / this.conCell);
    var R = this.conRows = Math.ceil(s.h / this.conCell);
    var W = C + 1;
    this.conField = new Float32Array(W * (R + 1));
    this.conBase = new Float32Array(W * (R + 1));
    for (var y = 0; y <= R; y++) {
      for (var x = 0; x <= C; x++) {
        var u = x / C, v = y / R;                 // north (Laguna de Bay) is up (small v)
        var h = (v - 0.42) * 1.05;                // regional slope: rises toward the south
        h += 1.05 * peakBump(u, v, 0.40, 0.80, 0.20, 0.24);  // Mt. Makiling, primary cone
        h += 0.45 * peakBump(u, v, 0.52, 0.86, 0.15, 0.16);  // lower twin shoulder
        h += 0.30 * peakBump(u, v, 0.67, 0.60, 0.30, 0.11);  // foothill ridge trending NE
        if (v < 0.26) {                            // flatten the northern strip to lake level
          var w = (0.26 - v) / 0.26;
          h = h * (1 - w) + (-0.62) * w;
        }
        this.conBase[y * W + x] = h;
      }
    }
    this.conT = 0;
    s.ctx.fillStyle = this.colors().bg;
    s.ctx.fillRect(0, 0, s.w, s.h);
  };
  HeroBackground.prototype.drawContour = function (dt) {
    var s = this.bg; if (!s) return;
    var ctx = s.ctx, col = this.colors();
    ctx.fillStyle = col.bg;
    ctx.fillRect(0, 0, s.w, s.h);
    if (!this.reduced) this.conT += dt * 0.00006;
    var C = this.conCols, R = this.conRows, cs = this.conCell, W = C + 1;
    var F = this.conField, B = this.conBase;
    var ns = cs * 0.0024, amp = 0.33;
    for (var y = 0; y <= R; y++) {
      for (var x = 0; x <= C; x++) {
        var idx = y * W + x;
        F[idx] = B[idx] + this.perlin(x * cs * ns, y * cs * ns + this.conT) * amp;
      }
    }
    var li = 0;
    for (var L = -0.7; L <= 1.6; L += 0.16, li++) {
      var index = (li % 4 === 0);                  // bolder "index" contour, like a real topo map
      ctx.strokeStyle = 'rgba(' + col.accent + ',' + (col.flowA * (index ? 1.7 : 1.0)) + ')';
      ctx.lineWidth = index ? 1.4 : 1;
      ctx.beginPath();
      for (var cy = 0; cy < R; cy++) {
        for (var cx = 0; cx < C; cx++) {
          var i = cy * W + cx;
          marchCell(ctx, F[i], F[i + 1], F[i + 1 + W], F[i + W], L, cx * cs, cy * cs, cs);
        }
      }
      ctx.stroke();
    }
  };

  // game of life
  HeroBackground.prototype.setupLife = function () {
    var s = this.bg; if (!s) return;
    this.cell = 26;
    this.cols = Math.ceil(s.w / this.cell);
    this.rows = Math.ceil(s.h / this.cell);
    var n = this.cols * this.rows;
    this.grid = new Uint8Array(n);
    this.alpha = new Float32Array(n);
    this.seedLife(0.10);
    this.stepT = 0;
  };
  HeroBackground.prototype.seedLife = function (density) {
    for (var i = 0; i < this.grid.length; i++) this.grid[i] = Math.random() < density ? 1 : 0;
  };
  HeroBackground.prototype.stepLife = function () {
    var C = this.cols, R = this.rows, g = this.grid;
    var next = new Uint8Array(g.length);
    var alive = 0;
    for (var y = 0; y < R; y++) {
      for (var x = 0; x < C; x++) {
        var n = 0;
        for (var dy = -1; dy <= 1; dy++) for (var dx = -1; dx <= 1; dx++) {
          if (dx === 0 && dy === 0) continue;
          n += g[((y + dy + R) % R) * C + ((x + dx + C) % C)];
        }
        var idx = y * C + x;
        next[idx] = g[idx] ? (n === 2 || n === 3 ? 1 : 0) : (n === 3 ? 1 : 0);
        alive += next[idx];
      }
    }
    this.grid = next;
    if (alive < g.length * 0.03) this.seedLife(0.09);
  };
  HeroBackground.prototype.drawLife = function (dt) {
    var s = this.bg; if (!s) return;
    var ctx = s.ctx, col = this.colors();
    ctx.clearRect(0, 0, s.w, s.h);
    if (!this.reduced) {
      this.stepT += dt;
      if (this.stepT > 520) { this.stepT = 0; this.stepLife(); }
    }
    var cell = this.cell, inset = 5, r = 3;
    var ease = this.reduced ? 1 : 0.12;
    for (var y = 0; y < this.rows; y++) {
      for (var x = 0; x < this.cols; x++) {
        var idx = y * this.cols + x;
        var target = this.grid[idx] ? 1 : 0;
        this.alpha[idx] += (target - this.alpha[idx]) * ease;
        var a = this.alpha[idx];
        if (a < 0.01) continue;
        ctx.fillStyle = 'rgba(' + col.accent + ',' + (a * col.lifeA) + ')';
        var px = x * cell + inset, py = y * cell + inset, sz = cell - inset * 2;
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(px, py, sz, sz, r); else ctx.rect(px, py, sz, sz);
        ctx.fill();
      }
    }
  };

  /* gaussian-ish hill centred at (cu,cv) with radii (ru,rv); returns ~0..1 */
  function peakBump(u, v, cu, cv, ru, rv) {
    var du = (u - cu) / ru, dv = (v - cv) / rv;
    return Math.exp(-(du * du + dv * dv));
  }

  /* one marching-squares cell -> appends iso-line segment(s) to the current path.
     corners: a=top-left, b=top-right, c=bottom-right, d=bottom-left. */
  function marchCell(ctx, a, b, c, d, L, px, py, cs) {
    var aL = a > L, bL = b > L, cL = c > L, dL = d > L;
    var pts = [];
    if (aL !== bL) pts.push(px + cs * (L - a) / (b - a), py);                 // top edge
    if (bL !== cL) pts.push(px + cs, py + cs * (L - b) / (c - b));            // right edge
    if (cL !== dL) pts.push(px + cs - cs * (L - c) / (d - c), py + cs);       // bottom edge
    if (dL !== aL) pts.push(px, py + cs - cs * (L - d) / (a - d));            // left edge
    if (pts.length === 4) {        // 2 crossings -> one segment
      ctx.moveTo(pts[0], pts[1]); ctx.lineTo(pts[2], pts[3]);
    } else if (pts.length === 8) { // saddle: 4 crossings -> connect (T-R) and (B-L)
      ctx.moveTo(pts[0], pts[1]); ctx.lineTo(pts[2], pts[3]);
      ctx.moveTo(pts[4], pts[5]); ctx.lineTo(pts[6], pts[7]);
    }
  }

  function makePerlin(seed) {
    var perm = [];
    for (var i = 0; i < 256; i++) perm[i] = i;
    var s = seed || 1234;
    var rnd = function () { s = (s * 16807) % 2147483647; return s / 2147483647; };
    for (var i2 = 255; i2 > 0; i2--) {
      var j = Math.floor(rnd() * (i2 + 1));
      var t = perm[i2]; perm[i2] = perm[j]; perm[j] = t;
    }
    var p = new Uint8Array(512);
    for (var i3 = 0; i3 < 512; i3++) p[i3] = perm[i3 & 255];
    var fade = function (t) { return t * t * t * (t * (t * 6 - 15) + 10); };
    var lerp = function (a, b, t) { return a + t * (b - a); };
    var grad = function (h, x, y) { return ((h & 1) ? -x : x) + ((h & 2) ? -y : y); };
    return function (x, y) {
      var X = Math.floor(x) & 255, Y = Math.floor(y) & 255;
      x -= Math.floor(x); y -= Math.floor(y);
      var u = fade(x), v = fade(y);
      var a = p[X] + Y, b = p[X + 1] + Y;
      return lerp(lerp(grad(p[a], x, y), grad(p[b], x - 1, y), u),
                  lerp(grad(p[a + 1], x, y - 1), grad(p[b + 1], x - 1, y - 1), u), v);
    };
  }

  /* =========================================================
     PACKET NETWORK — decorative "closed private network" in the skills
     grid. Six hosts (3 + 3) send data packets through a two-switch spine
     with hop-by-hop routing, switch congestion queues, ACK returns, and
     the occasional drop + single retransmit. Two-glyph coding: filled
     square = data out, hollow square = ack back.
     ========================================================= */
  var SWITCHTIME = 200;                          // ms a switch is busy per packet

  function roundRectPath(ctx, x, y, w, h, r) {
    ctx.beginPath();
    if (ctx.roundRect) { ctx.roundRect(x, y, w, h, r); return; }
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }
  function netSegPos(q) {                         // lerp along the current waypoint segment
    var a = q.way[q.seg], b = q.way[q.seg + 1];
    return { x: a.x + (b.x - a.x) * q.t, y: a.y + (b.y - a.y) * q.t };
  }
  function netRespawn(q) {                         // same path, but this attempt succeeds (no drop)
    return { kind: 'data', way: q.way, seg: 0, t: 0, spd: q.spd, st: 'move', retried: true, alpha: 1, sz: 1, atIndex: 0, atId: null };
  }

  function PacketNet(canvas) {
    var self = this;
    this.canvas = canvas;
    this.reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.packets = [];
    this.spawnCooldown = 350;
    this.switchFree = { A: 0, B: 0 };              // timestamp each switch is free again
    this.bg = null;
    this.last = 0;
    this.size();
    window.addEventListener('resize', function () { self.size(); });
    this.start();
  }
  PacketNet.prototype.size = function () {
    var c = this.canvas, dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = c.clientWidth, h = c.clientHeight;
    if (!w || !h) { this.bg = null; return; }
    c.width = Math.round(w * dpr); c.height = Math.round(h * dpr);
    var ctx = c.getContext('2d'); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.bg = { ctx: ctx, w: w, h: h };
    this.topo = this.buildTopo(w, h);
  };
  PacketNet.prototype.buildTopo = function (w, h) {
    var swA = { x: w * 0.40, y: h * 0.5, id: 'A' };
    var swB = { x: w * 0.60, y: h * 0.5, id: 'B' };
    var hosts = [
      { x: w * 0.09,  y: h * 0.18, sw: 'A' },
      { x: w * 0.045, y: h * 0.5,  sw: 'A' },
      { x: w * 0.09,  y: h * 0.82, sw: 'A' },
      { x: w * 0.91,  y: h * 0.18, sw: 'B' },
      { x: w * 0.955, y: h * 0.5,  sw: 'B' },
      { x: w * 0.91,  y: h * 0.82, sw: 'B' }
    ];
    return { swA: swA, swB: swB, sw: { A: swA, B: swB }, hosts: hosts };
  };
  PacketNet.prototype.colors = function () {
    var light = document.documentElement.getAttribute('data-theme') === 'light';
    return { accent: light ? '60,122,74' : '127,180,135', muted: '120,130,120' };
  };
  PacketNet.prototype.onScreen = function () {
    var r = this.canvas.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;
    return r.bottom > 0 && r.top < vh;
  };
  PacketNet.prototype.start = function () {
    var self = this;
    if (this.reduced) { this.draw(0, performance.now()); return; }
    this.last = performance.now();
    var loop = function (now) {
      var dt = Math.min(now - self.last, 60); self.last = now;
      if (self.onScreen()) self.draw(dt, now);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  };
  PacketNet.prototype.spawnPacket = function () {
    var hosts = this.topo.hosts;
    var si = Math.floor(Math.random() * hosts.length);
    var di = Math.floor(Math.random() * hosts.length);
    while (di === si) di = Math.floor(Math.random() * hosts.length);
    var src = hosts[si], dst = hosts[di], way;
    if (src.sw === dst.sw) way = [src, this.topo.sw[src.sw], dst];           // same switch: 2 hops
    else way = [src, this.topo.sw[src.sw], this.topo.sw[dst.sw], dst];       // cross-switch: 3 hops
    this.packets.push({ kind: 'data', way: way, seg: 0, t: 0, spd: 0.85 + Math.random() * 0.5, st: 'move', retried: false, alpha: 1, sz: 1, atIndex: 0, atId: null });
  };
  PacketNet.prototype.arriveSwitch = function (q, now) {
    this.switchFree[q.atId] = now + SWITCHTIME;
    q.st = 'switch';
    q.dwellEnd = this.switchFree[q.atId];
  };
  PacketNet.prototype.drawPkt = function (pos, q, accent) {
    var ctx = this.bg.ctx, s = 3 * (q.sz || 1);
    if (q.kind === 'data') {                       // filled square = data out
      ctx.fillStyle = 'rgba(' + accent + ',' + q.alpha + ')';
      ctx.fillRect(pos.x - s / 2, pos.y - s / 2, s, s);
    } else {                                       // hollow square = ack back
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(' + accent + ',' + (0.7 * q.alpha) + ')';
      ctx.strokeRect(pos.x - s / 2, pos.y - s / 2, s, s);
    }
  };
  PacketNet.prototype.drawTopology = function (ctx, w, h, accent, muted) {
    var t = this.topo; if (!t) return;
    // closed-network frame: muted rounded border + inner dashed accent rect
    ctx.lineWidth = 1;
    roundRectPath(ctx, 2, 2, w - 4, h - 4, 8);
    ctx.strokeStyle = 'rgba(' + muted + ',0.32)'; ctx.stroke();
    ctx.setLineDash([3, 4]);
    roundRectPath(ctx, 8, 8, w - 16, h - 16, 6);
    ctx.strokeStyle = 'rgba(' + accent + ',0.12)'; ctx.stroke();
    ctx.setLineDash([]);

    // links: host -> its switch, then the switch-to-switch spine
    ctx.strokeStyle = 'rgba(' + accent + ',0.14)';
    for (var i = 0; i < t.hosts.length; i++) {
      var hn = t.hosts[i], swn = t.sw[hn.sw];
      ctx.beginPath(); ctx.moveTo(hn.x, hn.y); ctx.lineTo(swn.x, swn.y); ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(' + accent + ',0.2)'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(t.swA.x, t.swA.y); ctx.lineTo(t.swB.x, t.swB.y); ctx.stroke();

    // hosts: 8x8 stroked squares
    ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(' + accent + ',0.5)';
    for (var j = 0; j < t.hosts.length; j++) ctx.strokeRect(t.hosts[j].x - 4, t.hosts[j].y - 4, 8, 8);

    // switches: stroked + filled diamonds
    var sws = [t.swA, t.swB];
    for (var k = 0; k < sws.length; k++) {
      var sw = sws[k];
      ctx.save();
      ctx.translate(sw.x, sw.y); ctx.rotate(Math.PI / 4);
      ctx.fillStyle = 'rgba(' + accent + ',0.10)';
      ctx.strokeStyle = 'rgba(' + muted + ',0.7)';
      ctx.beginPath(); ctx.rect(-6, -6, 12, 12); ctx.fill(); ctx.stroke();
      ctx.restore();
    }
  };
  PacketNet.prototype.draw = function (dt, now) {
    var s = this.bg; if (!s) return;
    var ctx = s.ctx, w = s.w, h = s.h;
    var col = this.colors(), accent = col.accent, muted = col.muted;

    ctx.clearRect(0, 0, w, h);                     // full clear — no fade-rect residue
    this.drawTopology(ctx, w, h, accent, muted);
    if (this.reduced) return;                      // static topology only

    // spawn control — keep it busy: spawn while fewer than 5 data packets are in flight
    this.spawnCooldown -= dt;
    var dataInFlight = 0, p;
    for (p = 0; p < this.packets.length; p++) if (this.packets[p].kind === 'data') dataInFlight++;
    if (this.spawnCooldown <= 0 && dataInFlight < 5) {
      this.spawnPacket();
      this.spawnCooldown = 360 + Math.random() * 700;
    }

    // advance + draw each packet; rebuild the list and tally per-switch queue depth
    var next = [], queuedBy = { A: 0, B: 0 };
    for (var pi = 0; pi < this.packets.length; pi++) {
      var q = this.packets[pi];

      if (q.st === 'drop') {                        // dropped: fade + grow, then retransmit once
        q.alpha -= dt / 320; q.sz += dt / 600;
        if (q.alpha > 0) { this.drawPkt(netSegPos(q), q, accent); next.push(q); }
        else if (!q.retried) this.packets.push(netRespawn(q));
        continue;
      }
      if (q.st === 'queued') {                      // waiting for a busy switch
        queuedBy[q.atId]++;
        if (now >= this.switchFree[q.atId]) this.arriveSwitch(q, now);
        this.drawPkt(q.way[q.atIndex], q, accent); next.push(q); continue;
      }
      if (q.st === 'switch') {                      // dwelling inside the switch
        if (now >= q.dwellEnd) {
          if (q.kind === 'data' && !q.retried && Math.random() < 0.09) q.st = 'drop';
          else { q.seg = q.atIndex; q.t = 0; q.st = 'move'; }
        }
        this.drawPkt(q.way[q.atIndex], q, accent); next.push(q); continue;
      }

      // moving along a segment
      q.t += dt * 0.0018 * q.spd;
      if (q.t >= 1) {
        q.t = 1;
        var arrived = q.seg + 1;
        if (arrived === q.way.length - 1) {         // reached destination host
          if (q.kind === 'data')                    // send ACK back along the reverse path
            this.packets.push({ kind: 'ack', way: q.way.slice().reverse(), seg: 0, t: 0, spd: q.spd * 1.15, st: 'move', alpha: 1, sz: 1, atIndex: 0, atId: null });
          continue;                                 // consumed
        }
        q.atIndex = arrived; q.atId = q.way[arrived].id;   // arrived at an intermediate switch
        if (q.kind === 'data') {
          if (now < this.switchFree[q.atId]) q.st = 'queued';   // switch busy → queue
          else this.arriveSwitch(q, now);
          this.drawPkt(q.way[arrived], q, accent); next.push(q); continue;
        } else { q.seg = arrived; q.t = 0; }              // ACK passes straight through
      }
      this.drawPkt(netSegPos(q), q, accent); next.push(q);
    }
    this.packets = next;

    // queue indicators — stack a dot per queued packet above each switch
    var ids = ['A', 'B'];
    for (var ii = 0; ii < ids.length; ii++) {
      var id = ids[ii], swn = this.topo.sw[id];
      ctx.fillStyle = 'rgba(' + accent + ',0.55)';
      for (var qd = 0; qd < queuedBy[id]; qd++) {
        ctx.beginPath(); ctx.arc(swn.x, swn.y - 15 - qd * 5, 1.4, 0, 6.2832); ctx.fill();
      }
    }
  };

  /* =========================================================
     BOOT
     ========================================================= */
  var bg = null;
  function init() {
    initTheme();
    initFilter();
    initExplore();
    initOverlays();
    var canvas = $('[data-bg-canvas]');
    if (canvas) bg = new HeroBackground(canvas);
    var net = $('[data-net]');
    if (net) new PacketNet(net);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
