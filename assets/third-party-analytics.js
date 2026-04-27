(function () {
  var G_TAG_ID = 'G-LQKHWKD1WL';
  var GTM_ID = 'GTM-5QCKRFSF';
  var AHREFS_KEY = 'bGqaw8faHk0xvw8vtr3fzA';
  var CONTENTSQUARE_SRC = 'https://t.contentsquare.net/uxa/368deb9cd72d9.js';
  var hasLoaded = false;

  function appendAsyncScript(src, dataAttrs) {
    var script = document.createElement('script');
    script.async = true;
    script.src = src;

    if (dataAttrs) {
      Object.keys(dataAttrs).forEach(function (key) {
        script.setAttribute('data-' + key, dataAttrs[key]);
      });
    }

    document.head.appendChild(script);
  }

  function scheduleIdleTask(task, timeoutMs) {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(task, { timeout: timeoutMs || 2000 });
      return;
    }

    window.setTimeout(task, Math.min(timeoutMs || 2000, 1200));
  }

  function setupGoogleTag() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', G_TAG_ID);

    appendAsyncScript('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(G_TAG_ID));
  }

  function setupGoogleTagManager() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });

    appendAsyncScript('https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(GTM_ID));
  }

  function loadThirdPartyTracking() {
    if (hasLoaded) {
      return;
    }
    hasLoaded = true;

    scheduleIdleTask(function () {
      setupGoogleTag();
      setupGoogleTagManager();
    }, 1500);

    scheduleIdleTask(function () {
      appendAsyncScript('https://analytics.ahrefs.com/analytics.js', { key: AHREFS_KEY });
    }, 2500);

    window.setTimeout(function () {
      appendAsyncScript(CONTENTSQUARE_SRC);
    }, 4000);
  }

  if (document.readyState === 'complete') {
    loadThirdPartyTracking();
    return;
  }

  window.addEventListener('load', loadThirdPartyTracking, { once: true });
})();
