/**
 * Islamic Engagement Invitation Interactive Engine
 * Handles countdown, RSVP storage, guestbook, audio ambience, canvas stars, lightbox, and calendar export.
 */

document.addEventListener('DOMContentLoaded', () => {
  initInvitationCover();
  populateContentFromConfig();
  initCountdown();
  initHeroStarfield();
  initAudioAmbience();
  initGalleryLightbox();
  initRSVPForm();
  initGuestbook();
  initNavbarAndScroll();
  initSocialSharing();
  initCalendarExport();
});

/* ==========================================================================
   1. INVITATION COVER EXPERIENCE
   ========================================================================== */
function initInvitationCover() {
  const cover = document.getElementById('invitation-cover');
  const enterBtn = document.getElementById('btn-enter-invitation');

  if (!cover || !enterBtn) return;

  // Add cover-active class to body to prevent scroll until opened
  document.body.classList.add('cover-active');

  enterBtn.addEventListener('click', () => {
    cover.classList.add('opened');
    document.body.classList.remove('cover-active');

    // Attempt subtle audio start if user clicks audio icon or wants it
    setTimeout(() => {
      cover.style.display = 'none';
    }, 1300);

    showToast("Ahlan Wa Sahlan — Welcome to our Engagement Celebration!");
  });
}

/* ==========================================================================
   2. CONTENT POPULATION FROM INVITATION_CONFIG
   ========================================================================== */
function populateContentFromConfig() {
  const cfg = window.INVITATION_CONFIG;
  if (!cfg) return;

  // Cover details
  setText('cover-bride-name', cfg.couple.bride.fullName);
  setText('cover-groom-name', cfg.couple.groom.fullName);
  setText('cover-arabic-names', `${cfg.couple.bride.arabicName}  &  ${cfg.couple.groom.arabicName}`);

  // Hero details
  setText('hero-bride-name', cfg.couple.bride.fullName);
  setText('hero-groom-name', cfg.couple.groom.fullName);
  setText('hero-arabic-calligraphy', `${cfg.couple.bride.arabicName}  &  ${cfg.couple.groom.arabicName}`);
  setText('hero-subtitle', `"${cfg.couple.subtitle}"`);
  setText('hero-date', cfg.dateFormatted);
  setText('hero-venue-name', cfg.venue.name);

  // Couple Section
  setImage('bride-photo', cfg.couple.bride.photo, cfg.couple.bride.fullName);
  setText('bride-name', cfg.couple.bride.fullName);
  setText('bride-arabic', cfg.couple.bride.arabicName);
  setText('bride-parents', `${cfg.couple.bride.fatherName} & ${cfg.couple.bride.motherName}`);
  setText('bride-bio', cfg.couple.bride.bio);

  setImage('groom-photo', cfg.couple.groom.photo, cfg.couple.groom.fullName);
  setText('groom-name', cfg.couple.groom.fullName);
  setText('groom-arabic', cfg.couple.groom.arabicName);
  setText('groom-parents', `${cfg.couple.groom.fatherName} & ${cfg.couple.groom.motherName}`);
  setText('groom-bio', cfg.couple.groom.bio);

  // Quran Verses
  setText('quran-arabic-primary', cfg.verses.primary.arabic);
  setText('quran-trans-primary', cfg.verses.primary.english);
  setText('quran-ref-primary', cfg.verses.primary.reference);

  setText('quran-arabic-secondary', cfg.verses.secondary.arabic);
  setText('quran-trans-secondary', cfg.verses.secondary.english);
  setText('quran-ref-secondary', cfg.verses.secondary.reference);

  // Venue Section
  setText('venue-name-display', cfg.venue.name);
  setText('venue-address-display', cfg.venue.address);
  setText('venue-landmark-display', cfg.venue.landmark);
  setText('venue-dress-display', cfg.venue.dressCode);
  const mapBtn = document.getElementById('btn-get-directions');
  if (mapBtn) mapBtn.href = cfg.venue.mapDirectLink;
  const mapIframe = document.getElementById('venue-map-iframe');
  if (mapIframe) mapIframe.src = cfg.venue.mapEmbedUrl;

  // Closing Section
  setText('closing-dua-arabic', cfg.verses.closingDua.arabic);
  setText('closing-dua-trans', cfg.verses.closingDua.english);
  setText('closing-names', `${cfg.couple.bride.fullName} & ${cfg.couple.groom.fullName}`);

  // Populate Story Timeline
  renderStoryTimeline(cfg.story);

  // Populate Events
  renderEventCards(cfg.events);

  // Populate Gallery
  renderGallery(cfg.gallery);
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el && text) el.textContent = text;
}

function setImage(id, src, alt) {
  const el = document.getElementById(id);
  if (el && src) {
    el.src = src;
    if (alt) el.alt = alt;
  }
}

function renderStoryTimeline(storyList) {
  const container = document.getElementById('story-timeline-container');
  if (!container || !storyList) return;

  container.innerHTML = storyList.map((item, idx) => `
    <div class="timeline-item ${idx % 2 === 0 ? 'left' : 'right'}">
      <div class="timeline-marker"><i class="fa-solid fa-star"></i></div>
      <div class="timeline-card">
        <span class="timeline-date">${item.date}</span>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-arabic-title">${item.arabicSubtitle}</p>
        <p class="timeline-text">${item.description}</p>
      </div>
    </div>
  `).join('');
}

function renderEventCards(eventsList) {
  const container = document.getElementById('events-grid-container');
  if (!container || !eventsList) return;

  container.innerHTML = eventsList.map((evt) => `
    <div class="event-card" id="event-${evt.id}">
      <div class="event-card-header">
        <span class="event-badge">${evt.badge}</span>
        <div class="event-icon-circle">
          <i class="fa-solid ${evt.icon}"></i>
        </div>
        <h3 class="event-title">${evt.title}</h3>
        <p class="event-arabic-title">${evt.arabicTitle}</p>
      </div>
      <div class="event-card-body">
        <ul class="event-info-list">
          <li class="event-info-item">
            <i class="fa-regular fa-calendar-check"></i>
            <div><strong>${evt.date}</strong></div>
          </li>
          <li class="event-info-item">
            <i class="fa-regular fa-clock"></i>
            <div>${evt.time}</div>
          </li>
          <li class="event-info-item">
            <i class="fa-solid fa-location-dot"></i>
            <div>${evt.venue}</div>
          </li>
        </ul>
        <p class="event-description">${evt.description}</p>
        <div class="event-card-footer">
          <button type="button" class="btn-event-cal" data-event-title="${evt.title}" data-event-date="${evt.date}" data-event-time="${evt.time}" data-event-venue="${evt.venue}">
            <i class="fa-solid fa-calendar-plus"></i> Add to Calendar
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderGallery(galleryList) {
  const container = document.getElementById('gallery-grid-container');
  if (!container || !galleryList) return;

  container.innerHTML = galleryList.map((item, idx) => `
    <div class="gallery-item" data-category="${item.category}" data-index="${idx}">
      <img src="${item.url}" alt="${item.caption}" loading="lazy" />
      <div class="gallery-overlay">
        <p class="gallery-caption">${item.caption}</p>
        <span class="gallery-expand-hint"><i class="fa-solid fa-magnifying-glass-plus"></i> View Full Frame</span>
      </div>
    </div>
  `).join('');

  initGalleryFilters();
}

/* ==========================================================================
   3. LIVE COUNTDOWN TIMER
   ========================================================================== */
function initCountdown() {
  const targetDateStr = window.INVITATION_CONFIG ? window.INVITATION_CONFIG.eventDate : "2026-10-08T12:00:00";
  const targetDate = new Date(targetDateStr).getTime();

  const daysEl = document.getElementById('count-days');
  const hoursEl = document.getElementById('count-hours');
  const minsEl = document.getElementById('count-mins');
  const secsEl = document.getElementById('count-secs');
  const endedMsg = document.getElementById('countdown-ended');
  const countdownGrid = document.querySelector('.countdown-grid');

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      if (countdownGrid) countdownGrid.style.display = 'none';
      if (endedMsg) {
        endedMsg.style.display = 'block';
        endedMsg.textContent = "Alhamdulillah — Today is the Day!";
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   4. HERO GOLDEN DUST & STARFIELD CANVAS
   ========================================================================== */
function initHeroStarfield() {
  const canvas = document.getElementById('hero-stars-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = 65;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.6,
      alpha: Math.random() * 0.7 + 0.2,
      velocity: {
        x: (Math.random() - 0.5) * 0.35,
        y: -Math.random() * 0.45 - 0.1
      },
      twinkleSpeed: Math.random() * 0.03 + 0.01,
      twinklePhase: Math.random() * Math.PI * 2
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let p of particles) {
      p.x += p.velocity.x;
      p.y += p.velocity.y;
      p.twinklePhase += p.twinkleSpeed;

      // Wrap around
      if (p.y < 0) {
        p.y = height;
        p.x = Math.random() * width;
      }
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      const dynamicAlpha = Math.sin(p.twinklePhase) * 0.3 + p.alpha;
      const safeAlpha = Math.max(0.1, Math.min(1, dynamicAlpha));

      ctx.save();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(207, 168, 88, ${safeAlpha})`;
      ctx.shadowBlur = 12;
      ctx.shadowColor = 'rgba(235, 203, 133, 0.8)';
      ctx.fill();
      ctx.restore();
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   5. ISLAMIC AMBIENCE AUDIO SYNTHESIS (Zero External Dependency)
   Permissible meditative harmonic frequency chime / gentle harp tones
   ========================================================================== */
function initAudioAmbience() {
  const audioBtn = document.getElementById('btn-nav-audio');
  if (!audioBtn) return;

  let audioCtx = null;
  let isPlaying = false;
  let synthInterval = null;

  // Gentle pentatonic peaceful scale chords (Middle Eastern Hijaz / Saba serene ambient tones)
  const notes = [220.00, 246.94, 261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 523.25];

  function playHarmonicChime(freq, delay = 0) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);

    gain.gain.setValueAtTime(0.001, audioCtx.currentTime + delay);
    gain.gain.exponentialRampToValueAtTime(0.045, audioCtx.currentTime + delay + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + delay + 3.8);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(audioCtx.currentTime + delay);
    osc.stop(audioCtx.currentTime + delay + 4.0);
  }

  function triggerSereneAmbience() {
    const note = notes[Math.floor(Math.random() * notes.length)];
    const harmony = notes[Math.floor(Math.random() * notes.length)];
    playHarmonicChime(note, 0);
    playHarmonicChime(harmony * 1.5, 0.4);
  }

  function toggleAudio() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isPlaying = !isPlaying;

    if (isPlaying) {
      audioBtn.classList.add('playing');
      audioBtn.title = "Pause Ambience";
      audioBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
      triggerSereneAmbience();
      synthInterval = setInterval(triggerSereneAmbience, 3200);
      showToast("Ambience enabled (Permissible serene meditative tones)");
    } else {
      audioBtn.classList.remove('playing');
      audioBtn.title = "Play Ambience";
      audioBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
      clearInterval(synthInterval);
      showToast("Ambience muted");
    }
  }

  audioBtn.addEventListener('click', toggleAudio);
}

/* ==========================================================================
   6. GALLERY LIGHTBOX & CATEGORY FILTERS
   ========================================================================== */
let currentLightboxIndex = 0;

function initGalleryFilters() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const items = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      items.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

function initGalleryLightbox() {
  const modal = document.getElementById('gallery-lightbox');
  const modalImg = document.getElementById('lightbox-image');
  const modalCaption = document.getElementById('lightbox-caption-text');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  if (!modal) return;

  function openLightbox(index) {
    const items = window.INVITATION_CONFIG.gallery;
    if (!items || !items[index]) return;

    currentLightboxIndex = index;
    modalImg.src = items[index].url;
    modalCaption.textContent = items[index].caption;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function changeImage(direction) {
    const items = window.INVITATION_CONFIG.gallery;
    if (!items || items.length === 0) return;

    currentLightboxIndex = (currentLightboxIndex + direction + items.length) % items.length;
    modalImg.src = items[currentLightboxIndex].url;
    modalCaption.textContent = items[currentLightboxIndex].caption;
  }

  // Delegated click for gallery items
  document.getElementById('gallery-grid-container').addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;
    const idx = parseInt(item.getAttribute('data-index'), 10);
    openLightbox(idx);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => changeImage(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => changeImage(1));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
  });
}

/* ==========================================================================
   7. INTERACTIVE RSVP FORM & LOCAL STORAGE
   ========================================================================== */
function initRSVPForm() {
  const form = document.getElementById('engagement-rsvp-form');
  const successBox = document.getElementById('rsvp-success-confirmation');
  const guestCountInput = document.getElementById('rsvp-guest-count');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('rsvp-fullname').value.trim();
    const phone = document.getElementById('rsvp-phone').value.trim();
    const email = document.getElementById('rsvp-email').value.trim();
    const guests = guestCountInput ? guestCountInput.value : 1;
    const attendance = form.querySelector('input[name="attendance"]:checked')?.value || 'Yes, Insha\'Allah';
    const message = document.getElementById('rsvp-message').value.trim();

    if (!fullName || !phone) {
      showToast("Please provide your name and phone number.");
      return;
    }

    const rsvpSubmission = {
      id: Date.now(),
      fullName,
      phone,
      email,
      guests,
      attendance,
      message,
      submittedAt: new Date().toISOString()
    };

    // Store in localStorage
    const savedRSVPs = JSON.parse(localStorage.getItem('wedding_rsvp_list') || '[]');
    savedRSVPs.push(rsvpSubmission);
    localStorage.setItem('wedding_rsvp_list', JSON.stringify(savedRSVPs));

    // Show confirmation
    form.style.display = 'none';
    if (successBox) {
      successBox.style.display = 'block';
    }

    showToast("JazakAllahu Khairan! Your RSVP has been confirmed.");
  });
}

/* ==========================================================================
   8. INTERACTIVE GUESTBOOK WITH AMEEN REACTIONS
   ========================================================================== */
const DEFAULT_BLESSINGS = [
  {
    id: 1,
    name: "Uncle Haroon & Auntie Farida",
    city: "London, UK",
    message: "Barakallahu lakuma wa baraka alaikuma wa jama'a baynakuma fee khayr. May Allah bless your beautiful union with immense peace, barakah, and eternal love.",
    ameenCount: 24,
    time: "2 hours ago"
  },
  {
    id: 2,
    name: "Dr. Bilal & Family",
    city: "Dubai, UAE",
    message: "May Allah grant both Amina and Zayd righteous descendants, boundless tranquility (sakina), and make you the coolness of each other's eyes. Insha'Allah a lifetime of happiness!",
    ameenCount: 19,
    time: "5 hours ago"
  },
  {
    id: 3,
    name: "Maryam & Zain",
    city: "Toronto, Canada",
    message: "Warmest congratulations on this auspicious day! Sending heartfelt prayers and duas from across the globe. You make a magnificent pair, Masha'Allah!",
    ameenCount: 15,
    time: "Yesterday"
  }
];

function initGuestbook() {
  const container = document.getElementById('guestbook-messages-list');
  const form = document.getElementById('guestbook-form');
  if (!container) return;

  // Retrieve stored or defaults
  let stored = JSON.parse(localStorage.getItem('wedding_guestbook_items') || 'null');
  if (!stored || stored.length === 0) {
    stored = DEFAULT_BLESSINGS;
    localStorage.setItem('wedding_guestbook_items', JSON.stringify(stored));
  }

  function renderList() {
    container.innerHTML = stored.map(item => `
      <div class="guestbook-card" data-id="${item.id}">
        <div class="guestbook-card-header">
          <span class="guestbook-author">${item.name}</span>
          <span class="guestbook-city"><i class="fa-solid fa-location-dot"></i> ${item.city}</span>
        </div>
        <p class="guestbook-body">"${item.message}"</p>
        <div class="guestbook-footer">
          <span>${item.time}</span>
          <button type="button" class="btn-ameen-counter" data-id="${item.id}">
            <span>آمين</span> Ameen (${item.ameenCount || 0})
          </button>
        </div>
      </div>
    `).join('');
  }

  renderList();

  // Ameen Click handler
  container.addEventListener('click', (e) => {
    const ameenBtn = e.target.closest('.btn-ameen-counter');
    if (!ameenBtn) return;
    const id = parseInt(ameenBtn.getAttribute('data-id'), 10);
    const item = stored.find(i => i.id === id);
    if (item) {
      item.ameenCount = (item.ameenCount || 0) + 1;
      localStorage.setItem('wedding_guestbook_items', JSON.stringify(stored));
      renderList();
      showToast("Ameen! May Allah accept your prayer.");
    }
  });

  // Submit Blessing
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('guestbook-name').value.trim();
      const city = document.getElementById('guestbook-city').value.trim() || 'Well-wisher';
      const msg = document.getElementById('guestbook-message').value.trim();

      if (!name || !msg) {
        showToast("Please enter your name and du'a.");
        return;
      }

      const newDua = {
        id: Date.now(),
        name,
        city,
        message: msg,
        ameenCount: 1,
        time: "Just now"
      };

      stored.unshift(newDua);
      localStorage.setItem('wedding_guestbook_items', JSON.stringify(stored));
      renderList();
      form.reset();
      showToast("JazakAllahu Khairan! Your Du'a has been posted.");
    });
  }
}

/* ==========================================================================
   9. NAVBAR, HAMBURGER & SCROLL NAVIGATION
   ========================================================================== */
function initNavbarAndScroll() {
  const navbar = document.querySelector('.floating-navbar');
  const hamburger = document.getElementById('hamburger-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerClose = document.getElementById('drawer-close-btn');
  const backToTop = document.getElementById('btn-back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    if (window.scrollY > 500) {
      backToTop?.classList.add('visible');
    } else {
      backToTop?.classList.remove('visible');
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function openDrawer() {
    mobileDrawer?.classList.add('open');
    drawerBackdrop?.classList.add('active');
  }

  function closeDrawer() {
    mobileDrawer?.classList.remove('open');
    drawerBackdrop?.classList.remove('active');
  }

  if (hamburger) hamburger.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   10. SOCIAL SHARING & COPY UTILS
   ========================================================================== */
function initSocialSharing() {
  const modal = document.getElementById('share-invitation-modal');
  const shareOpenBtns = document.querySelectorAll('.trigger-share-modal');
  const shareCloseBtn = document.getElementById('share-modal-close-btn');

  shareOpenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal?.classList.add('active');
    });
  });

  if (shareCloseBtn) {
    shareCloseBtn.addEventListener('click', () => {
      modal?.classList.remove('active');
    });
  }

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  const coupleNames = `${window.INVITATION_CONFIG.couple.bride.fullName} & ${window.INVITATION_CONFIG.couple.groom.fullName}`;
  const shareText = `You are cordially invited to celebrate the Engagement Ceremony of ${coupleNames}. "Two Hearts, One Beautiful Journey, Insha'Allah." View the invitation here:`;
  const shareUrl = window.location.href;

  const waBtn = document.getElementById('share-btn-whatsapp');
  if (waBtn) {
    waBtn.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
    waBtn.target = "_blank";
  }

  const fbBtn = document.getElementById('share-btn-facebook');
  if (fbBtn) {
    fbBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    fbBtn.target = "_blank";
  }

  const xBtn = document.getElementById('share-btn-x');
  if (xBtn) {
    xBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    xBtn.target = "_blank";
  }

  const copyLinkBtn = document.getElementById('share-btn-copylink');
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(shareUrl).then(() => {
        showToast("Invitation Link copied to clipboard!");
        modal?.classList.remove('active');
      });
    });
  }

  const copyAddressBtn = document.getElementById('btn-copy-venue-address');
  if (copyAddressBtn) {
    copyAddressBtn.addEventListener('click', () => {
      const address = window.INVITATION_CONFIG.venue.address;
      navigator.clipboard.writeText(address).then(() => {
        showToast("Venue address copied to clipboard!");
      });
    });
  }
}

/* ==========================================================================
   11. ADD TO CALENDAR (.ICS GENERATION)
   ========================================================================== */
function initCalendarExport() {
  document.addEventListener('click', (e) => {
    const calBtn = e.target.closest('.btn-event-cal');
    if (!calBtn) return;

    const title = calBtn.getAttribute('data-event-title') || "Muslim Engagement Ceremony";
    const dateStr = calBtn.getAttribute('data-event-date') || "2026-10-24";
    const venue = calBtn.getAttribute('data-event-venue') || window.INVITATION_CONFIG.venue.name;

    // Build .ics standard iCalendar file content
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Islamic Engagement Invitation//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `SUMMARY:${window.INVITATION_CONFIG.couple.bride.fullName} & ${window.INVITATION_CONFIG.couple.groom.fullName} - ${title}`,
      `DESCRIPTION:Engagement Celebration - Two Hearts\\, One Beautiful Journey\\, Insha'Allah.`,
      `LOCATION:${venue}`,
      "DTSTART:20261024T133000Z",
      "DTEND:20261024T183000Z",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Engagement_${title.replace(/\s+/g, '_')}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast(`Added "${title}" to your calendar!`);
  });
}

/* ==========================================================================
   12. GLOBAL TOAST NOTIFICATION
   ========================================================================== */
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('global-toast');
  const toastMsg = document.getElementById('toast-text');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('active');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('active');
  }, 3800);
}
