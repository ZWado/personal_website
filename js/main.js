(function () {
  'use strict';

  /* ---- Full publication list (rendered on demand) ---- */
  var toggle = document.getElementById('pubs-toggle');
  var fullList = document.getElementById('pubs-full');
  var selectedList = document.getElementById('pubs-selected');
  var rendered = false;

  function boldSelf(authors) {
    return authors.replace(/Yi Zhang/g, '<strong>Yi Zhang</strong>');
  }

  function renderFullList() {
    var byYear = {};
    PUBLICATIONS.forEach(function (p) {
      (byYear[p.year] = byYear[p.year] || []).push(p);
    });
    var years = Object.keys(byYear).sort(function (a, b) { return b - a; });
    var html = years.map(function (year) {
      var items = byYear[year].map(function (p) {
        return (
          '<li class="pub">' +
            '<span class="pub-venue">' + p.venue + ' ' + p.year + '</span>' +
            '<div class="pub-body">' +
              '<p class="pub-title">' + p.title + '</p>' +
              '<p class="pub-authors">' + boldSelf(p.authors) + '</p>' +
              (p.award ? '<p class="pub-award">&#9733; ' + p.award + '</p>' : '') +
            '</div>' +
          '</li>'
        );
      }).join('');
      return '<div class="pub-year-group"><h3 class="pub-year">' + year + '</h3><ul class="pub-list">' + items + '</ul></div>';
    }).join('');
    fullList.innerHTML = html;
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var showingAll = fullList.hasAttribute('hidden') === false;
      if (showingAll) {
        fullList.setAttribute('hidden', '');
        selectedList.removeAttribute('hidden');
        toggle.textContent = 'Show all ' + PUBLICATIONS.length + ' publications';
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        if (!rendered) { renderFullList(); rendered = true; }
        fullList.removeAttribute('hidden');
        selectedList.setAttribute('hidden', '');
        toggle.textContent = 'Show selected publications';
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
    toggle.textContent = 'Show all ' + PUBLICATIONS.length + ' publications';
  }

  /* ---- Scroll reveal along the trace ---- */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealed = document.querySelectorAll('.reveal');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    revealed.forEach(function (el) { observer.observe(el); });
  } else {
    revealed.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- Footer year ---- */
  var yearEl = document.getElementById('footer-year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
})();
