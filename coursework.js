/* ============================================================
   Juan Raphael Dilag — portfolio
   coursework.js — theme sync + screenshot lightbox for
   coursework.html. Dependency-free, matches app.js conventions.
   Theme uses the same localStorage key ('apa-theme') as the
   main site so the choice persists across pages.
   ============================================================ */
(function () {
  'use strict';

  var $$ = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };

  /* ---------------- theme (shared with index.html) ---------------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    $$('[data-theme-toggle]').forEach(function (btn) {
      btn.textContent = theme === 'dark' ? 'Light' : 'Dark';
    });
  }
  function initTheme() {
    var stored = null;
    try { stored = localStorage.getItem('apa-theme'); } catch (e) {}
    applyTheme(stored === 'dark' || stored === 'light' ? stored : 'light');
    $$('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        try { localStorage.setItem('apa-theme', next); } catch (e) {}
      });
    });
  }

  /* ---------------- screenshot lightbox ---------------- */
  /* Only fires when a real <img> has replaced a placeholder inside a
     .shot-frame. Placeholders have no <img>, so they are inert. */
  var lb = null, lastFocus = null;

  function closeLightbox() {
    if (!lb) return;
    lb.remove();
    lb = null;
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) { lastFocus.focus(); lastFocus = null; }
  }

  function openLightbox(img) {
    lastFocus = document.activeElement;
    lb = document.createElement('div');
    lb.className = 'lb';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', img.alt || 'Screenshot');

    var big = document.createElement('img');
    big.src = img.currentSrc || img.src;
    big.alt = img.alt || '';

    var close = document.createElement('button');
    close.className = 'lb-close';
    close.setAttribute('aria-label', 'Close');
    close.innerHTML = '&times;';

    lb.appendChild(big);
    lb.appendChild(close);

    // caption: prefer the figure's <figcaption> text
    var fig = img.closest('figure');
    var cap = fig ? fig.querySelector('figcaption') : null;
    if (cap) {
      var c = document.createElement('div');
      c.className = 'lb-cap';
      c.textContent = cap.textContent;
      lb.appendChild(c);
    }

    lb.addEventListener('click', function (ev) {
      if (ev.target === lb || ev.target === close) closeLightbox();
    });

    document.body.appendChild(lb);
    document.body.style.overflow = 'hidden';
    close.focus();
  }

  function initLightbox() {
    document.addEventListener('click', function (ev) {
      var img = ev.target.closest && ev.target.closest('.shot-frame img');
      if (img) openLightbox(img);
    });
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && lb) closeLightbox();
    });
  }

  /* ---------------- boot ---------------- */
  function init() {
    initTheme();
    initLightbox();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
