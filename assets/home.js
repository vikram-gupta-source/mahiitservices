(function () {
  function normalizeInstagramPostUrl(url) {
    try {
      var parsedUrl = new URL(String(url).trim());
      var hostname = parsedUrl.hostname.toLowerCase();
      if (hostname !== 'instagram.com' && hostname !== 'www.instagram.com') {
        return '';
      }

      var pathMatch = parsedUrl.pathname.match(/^\/(p|reel|tv)\/([A-Za-z0-9_-]+)\/?$/i);
      if (!pathMatch) {
        return '';
      }

      return 'https://www.instagram.com/' + pathMatch[1].toLowerCase() + '/' + pathMatch[2] + '/';
    } catch (error) {
      return '';
    }
  }

  var instagramPosts = [
    'https://www.instagram.com/p/DVxvtiHjceL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/DVvMVNTjXUo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/DVvLqGWjZvp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/DVsjM3YDfOy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/DVsid9TDVEy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/DVqTAtmDdsY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/DVqNWdljRu9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/DVqJ3UEDb8c/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/DVqImJMjaIZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  ];

  var categoryTone = {
    Government: 'tone-gov',
    Cyber: 'tone-cyber',
    IT: 'tone-it'
  };

  var services = [
    { category: 'IT', name: 'Data Base Services', details: 'Database setup, support and management services', price: 'Visit Website', icon: '&#128190;', link: 'https://db-services.mahiitservices.in/' },
    { category: 'Government', name: 'New PAN Card', price: 'INR 250', details: 'Aadhaar, photo, mobile number', icon: '&#128179;' },
    { category: 'Government', name: 'PAN Card Correction', price: 'INR 350', details: 'Name, DOB, address updates', icon: '&#9998;' },
    { category: 'Government', name: 'Passport Assistance', price: 'From INR 1600', details: 'Fresh and renewal support', icon: '&#128706;' },
    { category: 'Government', name: 'GST Registration', price: 'From INR 800', details: 'Business GST filing setup', icon: '&#128209;' },
    { category: 'Government', name: 'Shop Act and Gumasta', price: 'From INR 800', details: 'License and registration help', icon: '&#127970;' },
    { category: 'Government', name: 'Income Certificate', price: 'INR 250', details: 'Document preparation guidance', icon: '&#128176;' },
    { category: 'Cyber', name: 'Digital Signature DSC', price: 'From INR 1000', details: 'Class and token support', icon: '&#128274;' },
    { category: 'Cyber', name: 'Police Clearance PCC', price: 'INR 300', details: 'Application and checklist', icon: '&#128737;' },
    { category: 'IT', name: 'Laptop and PC Repair', price: 'Visit from INR 500', details: 'Hardware, software and upgrades', icon: '&#128187;' },
    { category: 'IT', name: 'Windows and Office Setup', price: 'From INR 500', details: 'OS install, drivers and updates', icon: '&#128421;' },
    { category: 'IT', name: 'CCTV Installation', price: 'On visit', details: 'Home and office security setup', icon: '&#128249;' },
    { category: 'IT', name: 'Web Development', price: 'From INR 5000', details: 'Business website and SEO basics', icon: '&#127760;' }
  ];

  function getServiceIconType(service) {
    var name = service.name.toLowerCase();
    if (name.includes('pan') && name.includes('correction')) return 'edit';
    if (name.includes('pan')) return 'id';
    if (name.includes('passport')) return 'passport';
    if (name.includes('gst')) return 'doc';
    if (name.includes('income') || name.includes('certificate')) return 'certificate';
    if (name.includes('ration')) return 'home';
    if (name.includes('digital signature')) return 'key';
    if (name.includes('police')) return 'shield';
    if (name.includes('pf') || name.includes('uan')) return 'bank';
    if (name.includes('laptop') || name.includes('pc')) return 'laptop';
    if (name.includes('windows') || name.includes('office')) return 'monitor';
    if (name.includes('ssd') || name.includes('ram')) return 'chip';
    if (name.includes('cctv')) return 'camera';
    if (name.includes('web')) return 'globe';
    return service.category === 'Cyber' ? 'shield' : service.category === 'IT' ? 'monitor' : 'id';
  }

  function renderInstagramPosts(postUrls) {
    var feed = document.getElementById('instagramFeed');
    if (!feed) {
      return;
    }

    var validPosts = (postUrls || [])
      .map(function (url) {
        return normalizeInstagramPostUrl(url);
      })
      .filter(Boolean);

    if (!validPosts.length) {
      feed.innerHTML = '<p class="instagram-empty">Add your Instagram post links in the page script to display updates here.</p>';
      return;
    }

    feed.innerHTML = validPosts.map(function (url, index) {
      var postNumber = index + 1;
      return (
        '<a class="instagram-card instagram-link-card" href="' + url + '" target="_blank" rel="noopener noreferrer" aria-label="Open Instagram post ' + postNumber + '">' +
          '<span class="instagram-card-badge">Post ' + postNumber + '</span>' +
          '<strong>Instagram update ' + postNumber + '</strong>' +
          '<span>Open on Instagram</span>' +
        '</a>'
      );
    }).join('');
  }

  function renderServices(query) {
    var grid = document.getElementById('serviceGrid');
    if (!grid) {
      return;
    }

    var term = (query || '').trim().toLowerCase();
    var filtered = services.filter(function (service) {
      return service.name.toLowerCase().includes(term) || service.category.toLowerCase().includes(term) || service.details.toLowerCase().includes(term);
    });

    if (!filtered.length) {
      grid.innerHTML = '<article class="card"><h3>No service found</h3><p>Try another keyword or send us a custom requirement.</p></article>';
      return;
    }

    grid.innerHTML = filtered.map(function (service) {
      var whatsappText = encodeURIComponent('Hi Vikram, I am interested in ' + service.name);
      var tone = categoryTone[service.category] || 'tone-it';
      var iconType = getServiceIconType(service);
      var serviceHref = service.link || ('https://wa.me/919773383276?text=' + whatsappText);
      var serviceTarget = service.link ? ' target="_blank" rel="noopener noreferrer"' : '';

      return (
        '<article class="card service-card ' + tone + '">' +
          '<div class="service-card-link">' +
            '<span class="service-badge service-badge-' + iconType + '" aria-hidden="true"></span>' +
            '<span class="service-category">' + service.category + '</span>' +
            '<h3>' + service.name + '</h3>' +
            '<span class="service-price">' + service.price + '</span>' +
            '<a class="service-apply-btn" href="' + serviceHref + '"' + serviceTarget + '>Apply</a>' +
          '</div>' +
        '</article>'
      );
    }).join('');
  }

  var serviceSearch = document.getElementById('serviceSearch');
  if (serviceSearch) {
    serviceSearch.addEventListener('input', function (event) {
      renderServices(event.target.value);
    });
  }

  var customSendBtn = document.getElementById('customSendBtn');
  if (customSendBtn) {
    customSendBtn.addEventListener('click', function () {
      var customNeed = document.getElementById('customNeed');
      var value = customNeed ? customNeed.value.trim() : '';
      var message = value ? 'Custom inquiry: ' + value : 'I need help with a service';
      var target = 'https://wa.me/919773383276?text=' + encodeURIComponent(message);
      window.open(target, '_blank', 'noopener');
    });
  }

  var currentYear = document.getElementById('currentYear');
  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }

  renderInstagramPosts(instagramPosts);
  renderServices('');
})();