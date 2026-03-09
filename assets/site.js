(function () {
  function setupBackToTop() {
    var backToTop = document.querySelector('.back-to-top-float');
    if (!backToTop) {
      return;
    }

    var minScroll = 240;

    function toggleBackToTop() {
      if (window.scrollY > minScroll) {
        backToTop.classList.add('is-visible');
      } else {
        backToTop.classList.remove('is-visible');
      }
    }

    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    window.addEventListener('resize', toggleBackToTop);

    backToTop.addEventListener('click', function (event) {
      event.preventDefault();
      var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
    });

    toggleBackToTop();
  }

  function setupMobileMenu() {
    var topbars = document.querySelectorAll('.topbar');
    if (!topbars.length) {
      return;
    }

    topbars.forEach(function (topbar) {
      var toggle = topbar.querySelector('.menu-toggle');
      var navLinks = topbar.querySelector('.nav-links');
      var ctaLink = topbar.querySelector('.cta-link');
      if (!toggle || !navLinks) {
        return;
      }

      function setExpanded(value) {
        toggle.setAttribute('aria-expanded', value ? 'true' : 'false');
        topbar.classList.toggle('menu-open', value);
      }

      toggle.addEventListener('click', function () {
        setExpanded(!topbar.classList.contains('menu-open'));
      });

      navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          setExpanded(false);
        });
      });

      if (ctaLink) {
        ctaLink.addEventListener('click', function () {
          setExpanded(false);
        });
      }

      window.addEventListener('resize', function () {
        if (window.innerWidth > 680) {
          setExpanded(false);
        }
      });

      setExpanded(false);
    });
  }

  setupBackToTop();
  setupMobileMenu();
})();
