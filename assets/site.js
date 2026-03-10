(function () {
  function isCyberPage() {
    var body = document.body;
    return !!body && (body.classList.contains('cyber-home') || body.classList.contains('cyber-subpage'));
  }

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

  function setupCyberStatusWidget() {
    if (!document.body || !document.body.classList.contains('cyber-subpage')) {
      return;
    }

    var topbars = document.querySelectorAll('.topbar');
    if (!topbars.length) {
      return;
    }

    topbars.forEach(function (topbar) {
      if (topbar.querySelector('.status-pill')) {
        return;
      }

      var status = document.createElement('div');
      status.className = 'status-pill';
      status.setAttribute('role', 'status');
      status.setAttribute('aria-label', 'System Status Optimal');
      status.innerHTML = '<span class="status-dot" aria-hidden="true"></span><span>System Status: Optimal</span>';

      var ctaLink = topbar.querySelector('.cta-link');
      if (ctaLink) {
        topbar.insertBefore(status, ctaLink);
      } else {
        topbar.appendChild(status);
      }
    });
  }

  function setupCyberWhatsAppWidget() {
    if (!isCyberPage() || document.querySelector('.cy-whatsapp-widget')) {
      return;
    }

    var kicker = document.querySelector('.kicker');
    var scope = '';
    if (kicker && kicker.textContent) {
      scope = kicker.textContent.replace('Service Area:', '').trim();
    }

    var message = scope
      ? 'Hi Mahi IT Services, I need secure support for ' + scope
      : 'Hi Mahi IT Services, I need secure WhatsApp support.';

    var widget = document.createElement('a');
    widget.className = 'cy-whatsapp-widget';
    widget.href = 'https://wa.me/919773383276?text=' + encodeURIComponent(message);
    widget.target = '_blank';
    widget.rel = 'noopener noreferrer';
    widget.setAttribute('aria-label', 'Secure WhatsApp Support Live Status Online');
    widget.innerHTML =
      '<span class="wa-icon" aria-hidden="true">' +
        '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
          '<path d="M20 12C20 16.42 16.42 20 12 20C10.47 20 9.04 19.57 7.82 18.82L4 20L5.23 16.32C4.45 15.08 4 13.61 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>' +
          '<path d="M9 9.2C9.16 10.75 10.47 12.57 12.16 13.44C13.05 13.9 13.79 13.85 14.63 13.27" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>' +
        '</svg>' +
      '</span>' +
      '<span class="wa-copy">' +
        '<strong>Secure WhatsApp Support</strong>' +
        '<span class="wa-status"><span class="wa-status-dot" aria-hidden="true"></span>Live Status: Online</span>' +
      '</span>';

    document.body.appendChild(widget);
  }

  function setupStaggeredReveal() {
    if (!isCyberPage()) {
      return;
    }

    document.documentElement.classList.add('js-cyber-motion');

    var revealNodes = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    if (!revealNodes.length) {
      return;
    }

    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    revealNodes.forEach(function (node, index) {
      var delay = (index % 4) * 0.06;
      if (node.classList.contains('delay-1')) {
        delay += 0.05;
      }
      if (node.classList.contains('delay-2')) {
        delay += 0.1;
      }
      if (node.classList.contains('delay-3')) {
        delay += 0.15;
      }
      node.style.transitionDelay = reducedMotion ? '0s' : delay.toFixed(2) + 's';
    });

    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealNodes.forEach(function (node) {
        node.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, currentObserver) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    revealNodes.forEach(function (node) {
      observer.observe(node);
    });
  }

  function setupParallaxMotion() {
    if (!isCyberPage()) {
      return;
    }

    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      return;
    }

    var noise = document.querySelector('.cyber-noise');
    var heroVisual = document.querySelector('.cy-hero-visual');
    var heroPanels = Array.prototype.slice.call(document.querySelectorAll('.hero-panel'));
    if (!noise && !heroVisual && !heroPanels.length) {
      return;
    }

    var ticking = false;

    function updateParallax() {
      var scrollY = window.scrollY || window.pageYOffset || 0;

      if (noise) {
        var noiseShift = Math.max(-24, Math.min(24, scrollY * -0.05));
        noise.style.transform = 'translate3d(0,' + noiseShift.toFixed(2) + 'px,0)';
      }

      if (heroVisual) {
        var visualRect = heroVisual.getBoundingClientRect();
        var visualOffset = window.innerHeight * 0.52 - (visualRect.top + visualRect.height / 2);
        var visualShift = Math.max(-18, Math.min(18, visualOffset * 0.08));
        heroVisual.style.transform = 'translate3d(0,' + visualShift.toFixed(2) + 'px,0)';
      }

      heroPanels.forEach(function (panel, index) {
        var panelRect = panel.getBoundingClientRect();
        var panelOffset = window.innerHeight * 0.5 - (panelRect.top + panelRect.height / 2);
        var panelShift = Math.max(-10, Math.min(10, panelOffset * (0.045 + index * 0.01)));
        panel.style.transform = 'translate3d(0,' + panelShift.toFixed(2) + 'px,0)';
      });

      ticking = false;
    }

    function requestUpdate() {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateParallax);
    }

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    updateParallax();
  }

  setupCyberStatusWidget();
  setupMobileMenu();
  setupBackToTop();
  setupCyberWhatsAppWidget();
  setupStaggeredReveal();
  setupParallaxMotion();
})();
