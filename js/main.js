/**
 * E-ZAINCO BRICK — Pure Brick Manufacturing & Architectural Masonry
 * Building Strength. Creating Legacy.
 */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initThemeToggle();
  initStickyNav();
  initMobileMenu();
  initCustomCursor();
  initBeforeAfterSlider();
  initHeroWidget();
  initPortfolioFilter();
  initProjectModal();
  initFurnitureFilter();
  initMaterialModal();
  initThemeFilterTriggers();
  initCounterAnimations();
  initScrollReveal();
  initFaqAccordion();
  initBookingForm();
  initBackToTop();
  initArticleShare();
  initLucideIcons();
});

/* ==========================================================================
   0. Architectural Preloader (Index Page Exclusive)
   E-Zainco Brick Masonry Unveiling
   ========================================================================== */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  const fill = document.getElementById('preloader-fill');
  const percent = document.getElementById('preloader-percent');
  const status = document.getElementById('preloader-status');

  let currentProgress = 0;
  let targetProgress = 20;
  let isWindowLoaded = false;
  let isCompleted = false;

  const statusPhases = [
    { min: 0, text: 'INITIALIZING BRICK YARD ARCHIVES' },
    { min: 32, text: 'PREPARING COMPRESSED EARTH BLOCKS' },
    { min: 68, text: 'CALIBRATING MASONRY SPECIFICATIONS' },
    { min: 94, text: 'WELCOME TO E-ZAINCO BRICK' }
  ];

  function setStatusText(val) {
    if (!status) return;
    for (let i = statusPhases.length - 1; i >= 0; i--) {
      if (val >= statusPhases[i].min) {
        if (status.textContent !== statusPhases[i].text) {
          status.style.opacity = '0.35';
          setTimeout(() => {
            status.textContent = statusPhases[i].text;
            status.style.opacity = '1';
          }, 100);
        }
        break;
      }
    }
  }

  // Active interpolation ticker
  const interval = setInterval(() => {
    // Before window.load, gradually advance target progress toward 90%
    if (!isWindowLoaded && targetProgress < 90) {
      targetProgress += Math.random() * 5 + 2;
      if (targetProgress > 90) targetProgress = 90;
    }

    if (currentProgress < targetProgress) {
      const delta = targetProgress - currentProgress;
      const step = Math.max(1, delta * 0.22);
      currentProgress = Math.min(targetProgress, currentProgress + step);
    }

    const displayed = Math.floor(currentProgress);
    if (fill) fill.style.width = `${displayed}%`;
    if (percent) percent.textContent = `${String(displayed).padStart(2, '0')}%`;
    setStatusText(displayed);

    if (currentProgress >= 100 && !isCompleted) {
      isCompleted = true;
      clearInterval(interval);

      if (fill) fill.style.width = '100%';
      if (percent) percent.textContent = '100%';
      if (status) status.textContent = 'WELCOME TO E-ZAINCO BRICK';

      // Brief cinematic pause at 100%
      setTimeout(() => {
        preloader.classList.add('loaded');
        document.body.classList.remove('preloader-active');

        // Remove from view & accessibility tree after shutter reveal completes
        setTimeout(() => {
          preloader.style.display = 'none';
          preloader.setAttribute('aria-hidden', 'true');
        }, 900);
      }, 220);
    }
  }, 28);

  const markWindowLoaded = () => {
    isWindowLoaded = true;
    targetProgress = 100;
  };

  if (document.readyState === 'complete') {
    markWindowLoaded();
  } else {
    window.addEventListener('load', markWindowLoaded);
    // Hard fallback after 1.8s to guarantee instantaneous release
    setTimeout(markWindowLoaded, 1800);
  }
}

/* ==========================================================================
   1. Theme Toggler (Verdant Luxe Light / Obsidian Cypress Dark)
   ========================================================================== */
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const currentTheme = localStorage.getItem('brists-theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }

  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('brists-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('brists-theme', 'dark');
    }
    initLucideIcons();
  });
}

/* ==========================================================================
   2. Sticky Navigation
   ========================================================================== */
function initStickyNav() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   3. Mobile Navigation Drawer
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (!menuBtn || !mobileNav) return;

  const closeBtn = mobileNav.querySelector('.mobile-nav__close') || document.getElementById('mobile-nav-close');

  const setMenuState = (open) => {
    mobileNav.classList.toggle('open', open);
    menuBtn.classList.toggle('is-active', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mobileNav.classList.contains('open');
    setMenuState(!isOpen);
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setMenuState(false);
    });
  }

  // Close when clicking outside drawer
  document.addEventListener('click', (e) => {
    if (mobileNav.classList.contains('open') && !mobileNav.contains(e.target) && !menuBtn.contains(e.target)) {
      setMenuState(false);
    }
  });

  // Close when clicking any nav link
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      setMenuState(false);
    }
  });

  // Close if window is resized past mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && mobileNav.classList.contains('open')) {
      setMenuState(false);
    }
  }, { passive: true });
}

/* ==========================================================================
   4. Custom Interactive Cursor
   ========================================================================== */
function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  const render = () => {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);

  const hoverTargets = 'a, button, input, select, textarea, .project-card, .service-card, .filter-btn, .ba-slider-wrap';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

/* ==========================================================================
   5. Interactive Before & After Comparison Slider
   ========================================================================== */
function initBeforeAfterSlider() {
  const container = document.getElementById('ba-slider');
  if (!container) return;

  const afterImg = container.querySelector('.ba-slider-img--after');
  const handle = container.querySelector('.ba-handle');
  if (!afterImg || !handle) return;

  let isDragging = false;

  const getClientX = (e) => {
    if (e.touches && e.touches.length > 0) return e.touches[0].clientX;
    if (e.changedTouches && e.changedTouches.length > 0) return e.changedTouches[0].clientX;
    return e.clientX;
  };

  const setPosition = (x) => {
    if (typeof x !== 'number' || isNaN(x)) return;
    const rect = container.getBoundingClientRect();
    if (!rect.width) return;
    let pos = (x - rect.left) / rect.width;
    pos = Math.max(0.05, Math.min(0.95, pos));
    const percent = pos * 100;

    afterImg.style.clipPath = `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0 100%)`;
    handle.style.left = `${percent}%`;
  };

  const onPointerDown = (e) => {
    isDragging = true;
    setPosition(getClientX(e));
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    setPosition(getClientX(e));
  };

  const onPointerUp = () => {
    isDragging = false;
  };

  container.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);

  container.addEventListener('touchstart', onPointerDown, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });
  window.addEventListener('touchend', onPointerUp);
  window.addEventListener('touchcancel', onPointerUp);
}

/* ==========================================================================
   6. Hero Automatic Multi-Image Carousel & Indicators
   ========================================================================== */
const heroSlides = [
  {
    image: 'assets/image-web/south1.jpeg',
    tag: 'Signature Brickwork',
    title: 'The Civic Brick Residence',
    location: 'New Owerri, Imo State'
  },
  {
    image: 'assets/image-web/south2.jpeg',
    tag: 'Interlocking CEB Villa',
    title: 'Sanctuary Brick Villa',
    location: 'Ikenegbu, Owerri'
  },
  {
    image: 'assets/image-web/south3.jpeg',
    tag: 'Commercial Masonry',
    title: 'Aura Commercial Brick Plaza',
    location: 'Municipal Plaza, Owerri'
  },
  {
    image: 'assets/image-web/south4.jpeg',
    tag: 'Terracotta Facade',
    title: 'Terracotta Facade Pavilion',
    location: 'Federal Housing Estate, Owerri'
  },
  {
    image: 'assets/image-web/south5.jpeg',
    tag: 'Perimeter Masonry',
    title: 'Heritage Brick Perimeter Estate',
    location: 'Works Layout, Owerri'
  }
];

function initHeroWidget() {
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  const bgSlides = heroSection.querySelectorAll('.hero__slide');
  const dots = heroSection.querySelectorAll('.hero__dot');
  const widget = document.getElementById('hero-widget');

  const img = widget ? widget.querySelector('.hero-widget__img') : null;
  const tag = widget ? widget.querySelector('.hero-widget__tag') : null;
  const title = widget ? widget.querySelector('.hero-widget__title') : null;
  const loc = widget ? widget.querySelector('.hero-widget__loc') : null;
  const page = widget ? widget.querySelector('.hero-widget__pagination') : null;

  let currentIndex = 0;
  let autoplayTimer = null;
  const SLIDE_INTERVAL = 5000; // 5 seconds automatic slide transition

  const goToSlide = (index) => {
    currentIndex = (index + heroSlides.length) % heroSlides.length;
    const slide = heroSlides[currentIndex];

    // 1. Cross-fade background images
    if (bgSlides.length > 0) {
      bgSlides.forEach((s, idx) => {
        if (idx === currentIndex) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      });
    }

    // 2. Update active indicator dots at the bottom
    if (dots.length > 0) {
      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.add('active');
          dot.setAttribute('aria-current', 'true');
        } else {
          dot.classList.remove('active');
          dot.removeAttribute('aria-current');
        }
      });
    }

    // 3. Smoothly update floating showcase card
    if (img && slide) {
      img.style.opacity = '0';
      setTimeout(() => {
        img.src = slide.image;
        if (tag) tag.textContent = slide.tag;
        if (title) title.textContent = slide.title;
        if (loc) loc.textContent = slide.location;
        if (page) page.textContent = `0${currentIndex + 1} / 0${heroSlides.length}`;
        img.style.opacity = '1';
      }, 200);
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, SLIDE_INTERVAL);
  };

  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  // Add click listener to indicator dots so clicking directly switches the slide
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetIdx = parseInt(dot.getAttribute('data-slide'), 10);
      if (!isNaN(targetIdx) && targetIdx !== currentIndex) {
        goToSlide(targetIdx);
        startAutoplay(); // Reset interval countdown cleanly
      }
    });
  });

  // Start automatic animation immediately
  startAutoplay();
}

/* ==========================================================================
   7. Portfolio Filter & Dynamic Pills
   ========================================================================== */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.portfolio-filters .filter-btn');
  const projectCards = document.querySelectorAll('.portfolio-grid .project-card');
  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px) scale(0.97)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   8. Project Case Study & Lightbox Modal with High-Res Zoom & Metadata
   ========================================================================== */
const projectData = {
  '1': {
    title: 'The Civic Brick Residence',
    category: 'Residential • Facing Clay Brick',
    location: 'New Owerri, Imo State',
    image: 'assets/image-web/south1.jpeg',
    dimensions: '480 sq.m Wall Area • 8.5 MPa Compressive Strength',
    styleTags: ['Compressed Earth Brick', 'Flemish Bond', 'Weatherproof Sealing', 'Zero Plastering'],
    brief: 'A two-story private residential villa designed for a diaspora property owner desiring natural thermal insulation, permanent zero-paint maintenance, and authentic exposed brick aesthetics.',
    approach: 'Supplied high-density red clay facing bricks and deployed master bricklayers executing tight Flemish bond masonry with water-shedding concave pointing and silicone weather-seal.',
    scope: 'External Load-Bearing Walls, Brick Columns, Lintels, Weatherproof Pointing',
    timeline: '8 Weeks Handover',
    testimonial: '"The bricks keep our home naturally cool in Owerri heat. We have had zero paint peeling and zero plastering costs. Truly exceptional quality." — K. Nze, Homeowner'
  },
  '2': {
    title: 'Sanctuary Brick Villa',
    category: 'Residential • Interlocking CEB',
    location: 'Ikenegbu, Owerri',
    image: 'assets/image-web/south2.jpeg',
    dimensions: '380 sq.m Living Footprint • Interlocking System',
    styleTags: ['Interlocking Eco-Block', 'Mortarless Masonry', 'Thermal Cooling', 'Exposed Terracotta'],
    brief: 'A modern family villa built entirely with interlocking compressed earth blocks (CEB) to achieve structural solidity while cutting mortar consumption by 65%.',
    approach: 'Precision hydraulic pressing of stabilized earth blocks with tongue-and-groove alignment, dry-stacked and grouted at key structural cores for earthquake and storm resistance.',
    scope: 'Structural Interlocking Walls, Thermal Buffer Walls, Patio Paving',
    timeline: '4 Weeks Handover',
    testimonial: '"The speed of construction was unbelievable. The interlocking blocks fit with millimeter accuracy, and the natural brick color is stunning."'
  },
  '3': {
    title: 'Aura Commercial Brick Plaza',
    category: 'Commercial • Structural Masonry',
    location: 'Municipal Plaza, Owerri',
    image: 'assets/image-web/south3.jpeg',
    dimensions: '850 sq.m Multi-Story Commercial Masonry',
    styleTags: ['Load-Bearing Brick Columns', 'Reinforced Lintels', 'Stretcher Bond', 'Commercial Grade'],
    brief: 'A distinguished 3-story commercial and office plaza requiring a durable exterior facade that conveys permanence, prestige, and requires zero periodic painting.',
    approach: 'Engineered heavy-duty load-bearing brickwork with integrated concrete column jackets, anti-efflorescence pointing mortar, and structural brick parapets.',
    scope: 'Facade Brickwork, Entrance Brick Colonnade, Structural Parapets',
    timeline: '6 Weeks Handover',
    testimonial: '"Tenants and visitors constantly remark on the authority and solidity of our building. E-zainco bricks delivered superior commercial value."'
  },
  '4': {
    title: 'Terracotta Facade Pavilion',
    category: 'Facades • Cladding & Arches',
    location: 'Federal Housing Estate, Owerri',
    image: 'assets/image-web/south4.jpeg',
    dimensions: '260 sq.m Architectural Facade Cladding',
    styleTags: ['Exposed Brick Arches', 'Weatherproof Pointing', 'Natural Clay Red', 'Anti-Efflorescence'],
    brief: 'An architectural renovation converting a worn plastered exterior into a warm, contemporary exposed brick facade with classical brick arches.',
    approach: 'Applied high-adhesion mechanical ties with kiln-fired terracotta brick slips and deep recessed mortar pointing for dramatic shadow lines.',
    scope: 'Exterior Cladding, Feature Arches, Window Surrounds',
    timeline: '5 Weeks Handover',
    testimonial: '"The transformation from peeling paint to timeless exposed brickwork completely changed the curb appeal and value of our property."'
  },
  '5': {
    title: 'Heritage Brick Perimeter Estate',
    category: 'Perimeter • Heavy-Duty Boundary Wall',
    location: 'Victoria Island / Lekki, Lagos',
    image: 'assets/image-web/south5.jpeg',
    dimensions: '180m Linear Perimeter • 3.2m Height',
    styleTags: ['Heavy-Duty Brick Wall', 'Reinforced Capping', 'Anti-Climb Coping', 'Foundational Footing'],
    brief: 'A high-security private estate perimeter wall requiring robust defense, erosion resistance, and premium architectural appearance.',
    approach: 'Constructed double-skin solid brickwork with reinforced intermediate piers every 3 meters, capped with water-shedding triangular coping bricks.',
    scope: 'Foundational Footing, Reinforced Brick Piers, Coping Capping',
    timeline: '5 Weeks Handover',
    testimonial: '"Solid as a fortress and beautiful from every angle. Much stronger and better looking than ordinary sandcrete perimeter walls."'
  },
  '6': {
    title: 'Sovereign Interlocking Courtyard',
    category: 'Paving • Interlocking Pavers',
    location: 'Independence Layout, Enugu',
    image: 'assets/image-web/south6.jpeg',
    dimensions: '520 sq.m Driveway & Courtyard Paving',
    styleTags: ['Heavy-Duty Pavers', 'Vehicular Load Rated', 'Precision Edge Restraints', 'Permeable Drainage'],
    brief: 'An expansive estate driveway and reception courtyard subject to heavy SUV traffic and heavy rainy season water runoff.',
    approach: 'Compacted crusher-run base with 60mm heavy-duty interlocking pavers arranged in a herringbone pattern with polymeric joint sand.',
    scope: 'Sub-Base Compaction, Edge Curbs, Paver Installation, Joint Sealing',
    timeline: '3 Weeks Handover',
    testimonial: '"Zero sinking, zero pooling water after downpours. The driveway handles heavy vehicles easily without a single cracked paver."'
  },
  '7': {
    title: 'Nordic Red Brick Residence',
    category: 'Residential • Flemish Bond Masonry',
    location: 'Independence Layout, Enugu',
    image: 'assets/image-web/south7.jpeg',
    dimensions: '420 sq.m Duplex Masonry • 9.0 MPa Clay',
    styleTags: ['Kiln-Fired Red Clay', 'Flemish Decorative Bond', 'Recessed Joints', 'Natural Insulation'],
    brief: 'A bespoke country residence featuring deep red kiln-fired bricks with textured faces and Flemish bond rhythm.',
    approach: 'Selected top-tier clay bricks, blended across kiln batches for subtle color nuance, and laid with 10mm uniform mortar joints.',
    scope: 'Exterior Facing, Balcony Balustrades, Chimney Masonry',
    timeline: '4 Weeks Handover',
    testimonial: '"The thermal performance is remarkable. The house stays cool throughout the day even before powering on the generator."'
  },
  '8': {
    title: 'Westbank Commercial Brick Pavilion',
    category: 'Commercial • Double-Height Masonry',
    location: 'Asaba, Delta State',
    image: 'assets/image-web/south8.jpeg',
    dimensions: '720 sq.m Office Pavilion • 10.2 MPa Strength',
    styleTags: ['Acoustic Brick Walls', 'Structural Buttresses', 'Energy Efficient', 'Low Embodied Carbon'],
    brief: 'A double-height corporate building seeking sustainable low-carbon construction and high acoustic isolation from adjacent expressway traffic.',
    approach: 'Dual-cavity brick wall construction with high-density compressed earth blocks on the inner skin and red clay facing bricks on the outer envelope.',
    scope: 'Dual-Cavity Envelope, Buttress Columns, Fire-Rated Partition Walls',
    timeline: '5 Weeks Handover',
    testimonial: '"The acoustic isolation from highway traffic is phenomenal. Solid brick construction gave our corporate campus unmatched durability."'
  },
  '9': {
    title: 'Eco-Block Modern Bungalow',
    category: 'Residential • Compressed Earth Blocks',
    location: 'Works Layout, Owerri',
    image: 'assets/image-web/south9.jpeg',
    dimensions: '290 sq.m 4-Bedroom Bungalow • Hydraulic CEB',
    styleTags: ['Hydraulic CEB Blocks', 'Local Soil Stabilization', 'Zero Paint Maintenance', 'Thermal Comfort'],
    brief: 'An affordable, ultra-durable modern bungalow utilizing locally sourced stabilized earth blocks for climate resilience.',
    approach: 'On-site hydraulic compression of stabilized laterite-clay soil, cured for 28 days to reach 7.5 MPa strength, laid with minimal mortar beds.',
    scope: 'Full Structural Build, Lintels, Gables, Exposed Interior Brick Finishes',
    timeline: '3.5 Weeks Handover',
    testimonial: '"We saved over 35% compared to conventional sandcrete construction and the home feels solid and naturally air-conditioned."'
  },
  '10': {
    title: 'High-Density Interlocking Driveway',
    category: 'Civil • Heavy-Duty Paver Estate',
    location: 'Port Harcourt, Rivers State',
    image: 'assets/image-web/south10.jpeg',
    dimensions: '640 sq.m Industrial & Residential Access',
    styleTags: ['60mm Industrial Pavers', 'Polymeric Sanding', 'High Compressive Strength', 'Erosion Resistant'],
    brief: 'A high-load driveway and parking area in a marshy coastal environment prone to erosion and heavy monsoon rains.',
    approach: 'Installed geotextile separation membranes, stabilized granular base, and machine-cut interlocking pavers with chamfered edge bevels.',
    scope: 'Drainage Channels, Kerb Edging, Interlocking Pavers, Compaction',
    timeline: '4 Weeks Handover',
    testimonial: '"Our ground used to wash away every rainy season. Since E-zainco installed these interlocking pavers, the compound is dry and firm."'
  },
  '11': {
    title: 'Municipal Civic Center Facade',
    category: 'Civic • Exposed Brick Elevation',
    location: 'Central Business District, Abuja',
    image: 'assets/image-web/south11.jpeg',
    dimensions: '1,100 sq.m Civic Facade • Weather-Sealed',
    styleTags: ['Architectural Terracotta', 'Sunshade Brick Louvers', 'Structural Durability', 'Monumental Brickwork'],
    brief: 'A civic auditorium building requiring monumental permanence, solar shading, and natural terracotta materials.',
    approach: 'Engineered custom brick sunshade louvers (brise-soleil) using cantilevered high-tensile brick ties and weather-sealed terracotta units.',
    scope: 'Brise-Soleil Brick Screening, Cladding Panels, Column Surrounds',
    timeline: '6 Weeks Handover',
    testimonial: '"The brick screening acts as natural air cooling and light dispersion. A masterclass in modern tropical masonry."'
  },
  '12': {
    title: 'Reinforced Perimeter Wall & Coping',
    category: 'Perimeter • Security Masonry Wall',
    location: 'New Owerri, Imo State',
    image: 'assets/image-web/south12.jpeg',
    dimensions: '220m Perimeter Wall • 3.0m Height',
    styleTags: ['Double-Skin Brickwork', 'Expansion Joints', 'Reinforced Brick Piers', 'Weatherproof Capping'],
    brief: 'A boundary perimeter fence for a multi-acre property, built to withstand wind loads, soil pressure, and intense tropical weather.',
    approach: 'Excavated continuous reinforced concrete footings, constructed double-skin brick piers with expansion joints every 6m, and installed angled coping stones.',
    scope: 'Foundation Trenching, Double-Skin Brickwork, Waterproof Coping',
    timeline: '3 Weeks Handover',
    testimonial: '"The clean brick pointing and solid construction give our entire property high security and distinguished elegance."'
  },
  '13': {
    title: 'Heritage Brick Architectural Compound',
    category: 'Civic & Residential • Master Masonry Build',
    location: 'Imo State Government Reserved Area (GRA), Owerri',
    image: 'assets/image-web/south13.jpeg',
    dimensions: '1,450 sq.m Total Built Area • Compressive Hydraulic CEB',
    styleTags: ['High Compressive Strength', 'Monolithic Brick Masonry', 'Natural Thermal Regulation', 'Zero Maintenance Facade'],
    brief: 'A sprawling private architectural estate commissioned to showcase the enduring prestige of pure brick masonry without sandcrete plaster.',
    approach: 'Deployed precision interlocking hydraulic blocks paired with selected kiln-fired accent headers, finished with weather-resistant pointing.',
    scope: 'Comprehensive Structural Masonry, Cladding, Boundary Piers & Courtyard Paving',
    timeline: '8 Weeks Handover',
    testimonial: '"A lifetime investment. In our tropical climate, this building stays cool, requires zero repainting, and exudes timeless architectural prestige."'
  }
};

let modalZoomScale = 1.0;
let modalPanX = 0;
let modalPanY = 0;
let modalIsDragging = false;
let modalStartX = 0;
let modalStartY = 0;

function updateModalZoomTransform(imgEl) {
  if (!imgEl) return;
  imgEl.style.transform = `scale(${modalZoomScale}) translate(${modalPanX}px, ${modalPanY}px)`;
  const levelText = document.querySelector('.js-zoom-level');
  if (levelText) {
    levelText.textContent = `${Math.round(modalZoomScale * 100)}%`;
  }
  const viewport = imgEl.closest('.lightbox-zoom-viewport');
  if (viewport) {
    if (modalZoomScale > 1.0) {
      viewport.classList.add('is-zoomed');
    } else {
      viewport.classList.remove('is-zoomed');
    }
  }
}

function resetModalZoom(imgEl) {
  modalZoomScale = 1.0;
  modalPanX = 0;
  modalPanY = 0;
  updateModalZoomTransform(imgEl);
}

function initLightboxZoom() {
  const viewport = document.querySelector('.lightbox-zoom-viewport');
  const img = document.querySelector('.lightbox-zoom-img');
  const zoomInBtn = document.querySelector('.js-zoom-in');
  const zoomOutBtn = document.querySelector('.js-zoom-out');
  const zoomResetBtn = document.querySelector('.js-zoom-reset');

  if (!viewport || !img) return;

  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      modalZoomScale = Math.min(2.5, modalZoomScale + 0.25);
      updateModalZoomTransform(img);
    });
  }

  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      modalZoomScale = Math.max(1.0, modalZoomScale - 0.25);
      if (modalZoomScale === 1.0) {
        modalPanX = 0;
        modalPanY = 0;
      }
      updateModalZoomTransform(img);
    });
  }

  if (zoomResetBtn) {
    zoomResetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      resetModalZoom(img);
    });
  }

  // Double-click toggle
  viewport.addEventListener('dblclick', () => {
    if (modalZoomScale > 1.0) {
      resetModalZoom(img);
    } else {
      modalZoomScale = 1.75;
      updateModalZoomTransform(img);
    }
  });

  // Mouse pan/drag when zoomed
  viewport.addEventListener('mousedown', (e) => {
    if (modalZoomScale <= 1.0) return;
    modalIsDragging = true;
    modalStartX = e.clientX - modalPanX;
    modalStartY = e.clientY - modalPanY;
    viewport.classList.add('is-dragging');
  });

  window.addEventListener('mousemove', (e) => {
    if (!modalIsDragging) return;
    modalPanX = e.clientX - modalStartX;
    modalPanY = e.clientY - modalStartY;
    updateModalZoomTransform(img);
  });

  window.addEventListener('mouseup', () => {
    if (modalIsDragging) {
      modalIsDragging = false;
      viewport.classList.remove('is-dragging');
    }
  });
}

function initProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close');
  const projectCards = document.querySelectorAll('.project-card');
  const modalImg = modal.querySelector('.js-modal-img');

  const openModal = (id) => {
    const data = projectData[id];
    if (!data) return;

    resetModalZoom(modalImg);

    modalImg.src = data.image;
    modalImg.alt = `${data.title} — Pure Brick Architecture by E-zainco Brick`;
    modal.querySelector('.js-modal-cat').textContent = data.category;
    modal.querySelector('.js-modal-title').textContent = data.title;
    modal.querySelector('.js-modal-loc').textContent = data.location;
    modal.querySelector('.js-modal-brief').textContent = data.brief;
    modal.querySelector('.js-modal-approach').textContent = data.approach;
    modal.querySelector('.js-modal-scope').textContent = data.scope;
    modal.querySelector('.js-modal-timeline').textContent = data.timeline;
    modal.querySelector('.js-modal-test').textContent = data.testimonial;

    // Room Dimensions
    const dimEl = modal.querySelector('.js-modal-dim');
    if (dimEl) dimEl.textContent = data.dimensions || 'Custom Spatial Planning';

    // Style Tags
    const tagsContainer = modal.querySelector('.js-modal-tags');
    if (tagsContainer) {
      tagsContainer.innerHTML = '';
      if (data.styleTags && data.styleTags.length) {
        data.styleTags.forEach(tag => {
          const pill = document.createElement('span');
          pill.className = 'style-tag-pill';
          pill.textContent = tag;
          tagsContainer.appendChild(pill);
        });
      }
    }

    // Direct CTA: "Request This Brick Specification" on WhatsApp with pre-filled message
    const reqBtn = modal.querySelector('.js-modal-request-style');
    if (reqBtn) {
      const tagsStr = (data.styleTags || []).join(', ');
      const msg = `Hello E-zainco Brick, I'd like to make an inquiry about requesting the "${data.title}" specification (${data.dimensions}) for my project. Tags: ${tagsStr}.`;
      reqBtn.href = `https://wa.me/2347014093037?text=${encodeURIComponent(msg)}`;
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    initLucideIcons();
  };

  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    resetModalZoom(modalImg);
  };

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.projectId;
      openModal(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  initLightboxZoom();
}

/* ==========================================================================
   ROADMAP: BRICK & MASONRY PRODUCTS FILTER
   ========================================================================== */
function initFurnitureFilter() {
  const tabs = document.querySelectorAll('.furniture-tab-btn');
  const cards = document.querySelectorAll('.furniture-card');
  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.dataset.furnitureFilter;
      cards.forEach(card => {
        const cat = card.dataset.furnitureCategory;
        if (target === 'all-seating' || target === 'all-bricks' || cat === target) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px) scale(0.97)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // Dynamic Inquire Custom Order WhatsApp Links
  cards.forEach(card => {
    const title = card.querySelector('.furniture-card__title')?.textContent || 'Brick Product';
    const type = card.querySelector('.furniture-card__type')?.textContent || 'Masonry Unit';
    const inquireBtn = card.querySelector('.btn-custom-inquiry');
    if (inquireBtn) {
      const msg = `Hello E-zainco Brick, I'd like to make an inquiry about ordering the "${title}" (${type}).`;
      inquireBtn.href = `https://wa.me/2347014093037?text=${encodeURIComponent(msg)}`;
    }
  });
}

/* ==========================================================================
   ROADMAP: BRICK MATERIALS & TECHNICAL SPECS DRAWER
   ========================================================================== */
const materialsData = {
  ceb: {
    name: 'Compressed Earth Brick (CEB)',
    type: 'Hydraulic High-Density Eco-Block',
    durability: '7.5 – 10.5 MPa Compressive Strength',
    tensile: 'Stabilized Laterite-Clay Matrix',
    climate: 'Naturally breathable thermal mass. Delivers passive interior cooling up to 6°C below tropical ambient heat, drastically reducing indoor air conditioning expenses.',
    care: 'Virtually maintenance-free. Requires no plastering or painting. Optional periodic application of breathable silane-siloxane clear water-repellent every 8–10 years.',
    applications: 'Residential perimeter load-bearing walls, partition walls, eco-villas, and low-energy sustainable homes.',
    colorBar: '#d5a571'
  },
  clay: {
    name: 'Standard Red Clay Facing Brick',
    type: 'Kiln-Fired Architectural Clay Brick',
    durability: '12.0+ MPa Industrial Grade',
    tensile: 'High-Temperature Kiln Vitrification',
    climate: 'Vitrified moisture-proof exterior skin impervious to torrential monsoon downpours, coastal salt fog, and extreme UV solar radiation.',
    care: 'Zero painting required for life. Rinse occasionally with clean tap water or pressure washer if dust accumulates during harmattan.',
    applications: 'Exterior building facades, classical brick arches, structural columns, and prominent feature walls.',
    colorBar: '#b45309'
  },
  paver: {
    name: 'Heavy-Duty Interlocking Paver',
    type: 'Vehicular Paving & Civil Masonry',
    durability: '35.0+ MPa Heavy Load Capacity',
    tensile: 'High-Compaction Vibration Cast',
    climate: 'Engineered with chamfered drainage edges that eliminate puddles and soil erosion during heavy downpours. Resists oil drips and vehicle tire scuffs.',
    care: 'Sweep debris regularly. Replenish polymeric sand in interlocking joints every 3–5 years for maximum pavement rigidity.',
    applications: 'Estate driveways, commercial parking plazas, pedestrian walkways, and courtyard aprons.',
    colorBar: '#1a2b3d'
  },
  cladding: {
    name: 'Terracotta Facade Cladding Brick',
    type: 'Protective Architectural Brick Slips',
    durability: 'Zero Water Absorption (<3%)',
    tensile: 'Precision Extruded Terracotta',
    climate: 'Permanently eliminates exterior wall plaster peeling, damp ingress, and fungal discoloration common on painted walls in southern Nigeria.',
    care: 'Zero maintenance required. Permanent mineral fired color will not fade or wash off in tropical heat or rains.',
    applications: 'Building exterior retrofits, commercial entrance porticos, pillar cladding, and boundary wall accents.',
    colorBar: '#c2410c'
  },
  coping: {
    name: 'Weatherproof Coping & Capping Unit',
    type: 'Perimeter Wall Protective Cap',
    durability: 'High-Density Precast Masonry',
    tensile: 'Water-Shedding Dual Slope Profile',
    climate: 'Features engineered drip grooves that prevent rainwater from running down wall faces, keeping perimeter walls clean and dry.',
    care: 'Check mortar joints annually to ensure continuous watertight capping seal.',
    applications: 'Perimeter boundary wall crests, parapet wall crowns, and entrance gate pillars.',
    colorBar: '#78350f'
  },
  mortar: {
    name: 'Anti-Efflorescence Masonry Mortar',
    type: 'Polymer-Modified Pointing Compound',
    durability: 'High Shear & Bond Strength',
    tensile: 'Elastic Polymer Additives',
    climate: 'Chemically formulated with waterproofing additives to prevent white salt bleeding (efflorescence) and joint mortar cracking.',
    care: 'Cured to permanent rock solidity. No additional treatment needed.',
    applications: 'Brick joint laying, architectural pointing, and waterproof boundary masonry.',
    colorBar: '#64748b'
  },
  stabilizer: {
    name: 'Hydraulic Soil Stabilizer Compound',
    type: 'Eco-Friendly Mineral Binder',
    durability: 'Enhances Compressive Rating 400%',
    tensile: 'Micro-Silica Pozzolanic Reaction',
    climate: 'Binds soil particles into an impermeable stone-like matrix, preventing swelling and contraction across wet and dry seasons.',
    care: 'Integrated into brick production matrix.',
    applications: 'Raw compressed earth block formulation and interlocking block manufacturing.',
    colorBar: '#475569'
  }
};

function initMaterialModal() {
  const modal = document.getElementById('material-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close');
  const triggers = document.querySelectorAll('.js-open-material');

  const openDrawer = (key) => {
    const data = materialsData[key];
    if (!data) return;

    modal.querySelector('.js-material-name').textContent = data.name;
    modal.querySelector('.js-material-type').textContent = data.type;
    modal.querySelector('.js-material-durability').textContent = data.durability;
    modal.querySelector('.js-material-tensile').textContent = data.tensile;
    modal.querySelector('.js-material-climate').textContent = data.climate;
    modal.querySelector('.js-material-care').textContent = data.care;
    modal.querySelector('.js-material-apps').textContent = data.applications;

    const colorBar = modal.querySelector('.js-material-colorbar');
    if (colorBar) colorBar.style.background = data.colorBar;

    const cta = modal.querySelector('.js-material-cta');
    if (cta) {
      const msg = `Hello E-zainco Brick, I'd like to request a specimen sample and technical specification sheet for "${data.name}" (${data.type}) for my project.`;
      cta.href = `https://wa.me/2347014093037?text=${encodeURIComponent(msg)}`;
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    initLucideIcons();
  };

  const closeDrawer = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const key = trigger.dataset.materialKey;
      openDrawer(key);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeDrawer();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   ROADMAP: DESIGN THEMES GALLERY JUMP & FILTER
   ========================================================================== */
function initThemeFilterTriggers() {
  const themeBtns = document.querySelectorAll('.js-theme-filter');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetFilter = btn.dataset.themeTarget;
      const gallerySection = document.getElementById('curated-gallery');
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: 'smooth' });
      }

      // Activate corresponding filter tab
      if (targetFilter) {
        const matchingTab = document.querySelector(`.portfolio-filters .filter-btn[data-filter="${targetFilter}"]`);
        if (matchingTab) {
          matchingTab.click();
        }
      }
    });
  });
}

/* ==========================================================================
   9. Animated Stats Counters
   ========================================================================== */
function initCounterAnimations() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const isDecimal = target % 1 !== 0;
    const duration = 2000;
    const startTime = performance.now();

    const update = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = isDecimal ? (target * ease).toFixed(1) : Math.floor(target * ease);

      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = isDecimal ? target.toFixed(1) : target;
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(counter => observer.observe(counter));
}

/* ==========================================================================
   10. Scroll Reveal Animations
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('[data-reveal]');
  if (!reveals.length) return;

  const isMobile = window.innerWidth <= 768 || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  if (isMobile) {
    reveals.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01, rootMargin: '0px 0px 180px 0px' });

  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) + 200) {
      el.classList.add('revealed');
    } else {
      observer.observe(el);
    }
  });
}

/* ==========================================================================
   11. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(other => {
        other.classList.remove('active');
        const otherTrigger = other.querySelector('.faq-trigger');
        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   12. Interactive Booking & Consultation Form (PRD Section 7 & 8)
   ========================================================================== */
function initBookingForm() {
  const form = document.getElementById('consultation-form');
  const successBox = document.getElementById('form-success-box');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="fullname"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const service = form.querySelector('[name="service"]').value;
    const location = form.querySelector('[name="location"]').value.trim();
    const budget = form.querySelector('[name="budget"]').value;
    const notes = form.querySelector('[name="notes"]').value.trim();

    if (!name || !phone) {
      alert('Please provide your full name and WhatsApp / phone number.');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Transmitting Request...</span>';
    submitBtn.disabled = true;

    setTimeout(() => {
      form.style.display = 'none';
      if (successBox) {
        successBox.classList.add('show');
        const summary = successBox.querySelector('.js-booking-summary');
        if (summary) {
          summary.innerHTML = `Thank you, <strong>${name}</strong>. Your inquiry for <strong>${service || 'Brick Supply & Masonry'}</strong> in <strong>${location || 'Owerri'}</strong> has been registered. Our structural brick engineering team will reach out via WhatsApp at <strong>${phone}</strong> within 4 business hours.`;
        }
      }

      // Prepare direct WhatsApp trigger
      const waBtn = document.getElementById('wa-direct-send');
      if (waBtn) {
        const message = `Hello E-zainco Brick,%0A%0AI have submitted a brick supply / masonry inquiry via your website:%0A• Name: ${encodeURIComponent(name)}%0A• Service: ${encodeURIComponent(service)}%0A• Location: ${encodeURIComponent(location)}%0A• Estimated Units/Scope: ${encodeURIComponent(budget)}%0A• Notes: ${encodeURIComponent(notes)}`;
        waBtn.href = `https://wa.me/2347014093037?text=${message}`;
      }

      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      initLucideIcons();
    }, 900);
  });
}

/* ==========================================================================
   13. Back To Top
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   14. Article Sharing / Copy Link Helper
   ========================================================================== */
function initArticleShare() {
  const copyBtns = document.querySelectorAll('.js-copy-link');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href).then(() => {
          const originalTitle = btn.getAttribute('title') || 'Copy Link';
          btn.setAttribute('title', 'Link Copied to Clipboard!');
          const icon = btn.querySelector('i');
          if (icon) {
            icon.setAttribute('data-lucide', 'check');
            if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
            setTimeout(() => {
              icon.setAttribute('data-lucide', 'link-2');
              btn.setAttribute('title', originalTitle);
              if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
            }, 2000);
          }
        });
      }
    });
  });
}

/* ==========================================================================
   15. Lucide Icons Fallback/Activation
   ========================================================================== */
function initLucideIcons() {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

