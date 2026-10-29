<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Brick Masonry Catalog &amp; Case Studies — E-ZAINCO BRICK | Owerri, Nigeria</title>
  <meta name="description" content="Explore our brick masonry catalog and selected case studies by E-zainco Brick. High-density solid bricks, decorative pavers, eco-hydraform blocks, and architectural finishes in Owerri, Nigeria." />
  <meta name="theme-color" content="#1a2b3d" />

  <!-- Google Fonts Preconnect -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>

  <!-- Favicon Icons -->
  <link rel="icon" type="image/png" href="assets/logo/ezainco-brick-logo.png" />
  <link rel="apple-touch-icon" href="assets/logo/ezainco-brick-logo.png" />

  <!-- Stylesheet -->
  <link rel="stylesheet" href="css/style.css?v=<?= filemtime(__DIR__ . '/css/style.css') ?>" />
</head>
<body>

  <!-- Film Grain Texture Overlay -->
  <div class="grain" aria-hidden="true"></div>

  <!-- Interactive Custom Cursor (Desktop) -->
  <div class="cursor-dot" aria-hidden="true"></div>
  <div class="cursor-ring" aria-hidden="true"></div>

  <!-- ==========================================================================
       SITE NAVIGATION
       ========================================================================== -->
  <header class="site-nav" id="site-nav">
    <div class="container nav-inner">
      <!-- Nav Links Left -->
      <nav class="nav-links nav-links--left" aria-label="Primary Navigation Left">
        <a class="nav-link" href="index.php">Home</a>
        <a class="nav-link" href="services.php">Services</a>
        <a class="nav-link active" href="catalog.php">Catalog</a>
      </nav>

      <!-- Center Brand Logo -->
      <a class="brand" href="index.php" aria-label="E-ZAINCO BRICK Home">
        <img src="assets/logo/ezainco-brick-logo.png" alt="E-ZAINCO BRICK Logo" class="brand__logo-img" />
      </a>

      <div class="nav-right">
        <!-- Nav Links Right -->
        <nav class="nav-links nav-links--right" aria-label="Primary Navigation Right">
          <a class="nav-link" href="about.php">About</a>
          <a class="nav-link" href="journal.php">Journal</a>
          <a class="nav-link" href="contact.php">Contact</a>
        </nav>

        <div class="nav-actions">
          <!-- Theme Toggler -->
          <button class="theme-toggle" id="theme-toggle" type="button" aria-label="Toggle Light and Dark Theme" title="Toggle Theme">
            <i data-lucide="sun" class="icon-sun"></i>
            <i data-lucide="moon" class="icon-moon"></i>
          </button>

          <a class="btn btn--primary btn--sm" href="contact.php#booking">
            <span>Request Quote</span>
            <i data-lucide="arrow-up-right"></i>
          </a>

          <!-- Mobile Menu Toggle Button -->
          <button class="menu-toggle" id="menu-toggle" type="button" aria-label="Toggle navigation menu" aria-expanded="false">
            <i data-lucide="menu" class="icon-menu"></i>
            <i data-lucide="x" class="icon-close"></i>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Navigation Drawer -->
  <div class="mobile-nav" id="mobile-nav" aria-label="Mobile Navigation">
    <div class="mobile-nav__header">
      <a class="brand" href="index.php" style="text-decoration:none;">
        <img src="assets/logo/ezainco-brick-logo.png" alt="E-ZAINCO BRICK Logo" style="height:44px; width:auto; object-fit:contain;" />
      </a>
      <button class="mobile-nav__close" id="mobile-nav-close" type="button" aria-label="Close mobile navigation">&times;</button>
    </div>

    <ul class="mobile-nav__links">
      <li><a class="mobile-nav__link" href="index.php"><span>Home</span> <i data-lucide="arrow-right" class="icon-16"></i></a></li>
      <li><a class="mobile-nav__link" href="services.php"><span>Services</span> <i data-lucide="arrow-right" class="icon-16"></i></a></li>
      <li><a class="mobile-nav__link active" href="catalog.php"><span>Catalog</span> <i data-lucide="arrow-right" class="icon-16"></i></a></li>
      <li><a class="mobile-nav__link" href="about.php"><span>About</span> <i data-lucide="arrow-right" class="icon-16"></i></a></li>
      <li><a class="mobile-nav__link" href="journal.php"><span>Journal</span> <i data-lucide="arrow-right" class="icon-16"></i></a></li>
      <li><a class="mobile-nav__link" href="contact.php"><span>Contact</span> <i data-lucide="arrow-right" class="icon-16"></i></a></li>
    </ul>

    <div class="mobile-nav__actions">
      <a class="btn btn--primary" href="contact.php#booking">
        <span>Request Quote</span>
        <i data-lucide="arrow-up-right"></i>
      </a>
      <a class="btn btn--glacier" href="https://wa.me/2347014093037?text=Hello%20E-zainco%20Brick,%20I'd%20like%20to%20inquire%20about%20your%20completed%20brick%20projects..." target="_blank" rel="noopener">
        <i data-lucide="message-circle"></i>
        <span>Chat on WhatsApp</span>
      </a>
    </div>

    <div class="mobile-nav__footer">
      <div>
        <p style="font-weight:700; color:var(--text-heading); font-size:0.9rem;">Brick Factory &amp; Yard</p>
        <p class="text-muted" style="font-size:0.85rem;">Suite 11, Municipal Plaza, Umez Eronini St, Ikenegbu, Owerri, Imo State</p>
      </div>
    </div>
  </div>

  <main>
    <!-- ==========================================================================
         PAGE HERO
         ========================================================================== -->
    <section class="page-hero">
      <div class="container">
        <div class="page-hero__breadcrumbs">
          <a href="index.php">Home</a>
          <i data-lucide="chevron-right" class="icon-14"></i>
          <span>Catalog</span>
        </div>
        <span class="kicker">Architectural Brick Catalog &amp; Archives</span>
        <h1 class="page-hero__title">Brick Masonry Catalog &amp; Case Studies.</h1>
        <p class="page-hero__lead">
          Explore our complete catalog of high-density architectural bricks, interlocking blocks, pavers, and completed structural masonry works engineered with precision compressive strength.
        </p>
      </div>
    </section>

    <!-- ==========================================================================
         PORTFOLIO GRID & FILTERS
         ========================================================================== -->
    <section class="section" id="curated-gallery" style="padding-top:4rem;">
      <div class="container">
        <!-- Filter Controls -->
        <div class="gallery-filters-wrapper" data-reveal>
          <div class="portfolio-filters portfolio-filters--scrollable" role="tablist" aria-label="Project Categories">
            <button class="filter-btn active" type="button" data-filter="all" role="tab" aria-selected="true">
              <span>All Works</span>
              <span class="filter-btn__count">12</span>
            </button>
            <button class="filter-btn" type="button" data-filter="residential" role="tab" aria-selected="false">
              <span>Residential Masonry</span>
              <span class="filter-btn__count">4</span>
            </button>
            <button class="filter-btn" type="button" data-filter="commercial" role="tab" aria-selected="false">
              <span>Commercial &amp; Civic</span>
              <span class="filter-btn__count">3</span>
            </button>
            <button class="filter-btn" type="button" data-filter="facades" role="tab" aria-selected="false">
              <span>Facades &amp; Cladding</span>
              <span class="filter-btn__count">2</span>
            </button>
            <button class="filter-btn" type="button" data-filter="perimeter" role="tab" aria-selected="false">
              <span>Perimeter &amp; Paving</span>
              <span class="filter-btn__count">3</span>
            </button>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="portfolio-grid" data-reveal>
          <!-- Project 1 -->
          <article class="project-card" data-category="residential" data-project-id="1">
            <div class="project-card__thumb">
              <img class="project-card__img" src="assets/image-web/south1.jpeg" alt="The Civic Brick Residence in New Owerri" loading="lazy" />
              <div class="project-card__overlay">
                <span class="project-card__view-btn">
                  <span>View Case Study</span>
                  <i data-lucide="arrow-up-right"></i>
                </span>
              </div>
            </div>
            <div class="project-card__body">
              <div class="project-card__meta">
                <span>Residential • Compressed Earth Bricks</span>
                <span>8.5 MPa</span>
              </div>
              <h3 class="project-card__title">The Civic Brick Residence</h3>
              <p class="project-card__loc"><i data-lucide="map-pin" class="icon-14"></i> New Owerri, Imo State</p>
            </div>
          </article>

          <!-- Project 2 -->
          <article class="project-card" data-category="residential" data-project-id="2">
            <div class="project-card__thumb">
              <img class="project-card__img" src="assets/image-web/south2.jpeg" alt="Sanctuary Brick Villa in Port Harcourt" loading="lazy" />
              <div class="project-card__overlay">
                <span class="project-card__view-btn">
                  <span>View Case Study</span>
                  <i data-lucide="arrow-up-right"></i>
                </span>
              </div>
            </div>
            <div class="project-card__body">
              <div class="project-card__meta">
                <span>Residential • Red Clay Facing Masonry</span>
                <span>12.0 MPa</span>
              </div>
              <h3 class="project-card__title">Sanctuary Brick Villa</h3>
              <p class="project-card__loc"><i data-lucide="map-pin" class="icon-14"></i> GRA Phase 2, Port Harcourt</p>
            </div>
          </article>

          <!-- Project 3 -->
          <article class="project-card" data-category="facades" data-project-id="3">
            <div class="project-card__thumb">
              <img class="project-card__img" src="assets/image-web/south3.jpeg" alt="Monolith Terracotta Cladding in Asaba" loading="lazy" />
              <div class="project-card__overlay">
                <span class="project-card__view-btn">
                  <span>View Case Study</span>
                  <i data-lucide="arrow-up-right"></i>
                </span>
              </div>
            </div>
            <div class="project-card__body">
              <div class="project-card__meta">
                <span>Facades • Exterior Brick Cladding</span>
                <span>Weather-Sealed</span>
              </div>
              <h3 class="project-card__title">Monolith Terracotta Cladding</h3>
              <p class="project-card__loc"><i data-lucide="map-pin" class="icon-14"></i> Asaba, Delta State</p>
            </div>
          </article>

          <!-- Project 4 -->
          <article class="project-card" data-category="commercial" data-project-id="4">
            <div class="project-card__thumb">
              <img class="project-card__img" src="assets/image-web/south4.jpeg" alt="Aura Brick Corporate Headquarters in Victoria Island" loading="lazy" />
              <div class="project-card__overlay">
                <span class="project-card__view-btn">
                  <span>View Case Study</span>
                  <i data-lucide="arrow-up-right"></i>
                </span>
              </div>
            </div>
            <div class="project-card__body">
              <div class="project-card__meta">
                <span>Commercial • Structural Brick Envelope</span>
                <span>10.5 MPa</span>
              </div>
              <h3 class="project-card__title">Aura Brick Headquarters</h3>
              <p class="project-card__loc"><i data-lucide="map-pin" class="icon-14"></i> Victoria Island, Lagos</p>
            </div>
          </article>

          <!-- Project 5 -->
          <article class="project-card" data-category="perimeter" data-project-id="5">
            <div class="project-card__thumb">
              <img class="project-card__img" src="assets/image-web/south5.jpeg" alt="Heritage Brick Perimeter Estate in Lekki" loading="lazy" />
              <div class="project-card__overlay">
                <span class="project-card__view-btn">
                  <span>View Case Study</span>
                  <i data-lucide="arrow-up-right"></i>
                </span>
              </div>
            </div>
            <div class="project-card__body">
              <div class="project-card__meta">
                <span>Perimeter • Heavy-Duty Boundary Wall</span>
                <span>3.2m Height</span>
              </div>
              <h3 class="project-card__title">Heritage Perimeter Estate</h3>
              <p class="project-card__loc"><i data-lucide="map-pin" class="icon-14"></i> Lekki Phase 1, Lagos</p>
            </div>
          </article>

          <!-- Project 6 -->
          <article class="project-card" data-category="perimeter" data-project-id="6">
            <div class="project-card__thumb">
              <img class="project-card__img" src="assets/image-web/south6.jpeg" alt="Sovereign Interlocking Courtyard in Enugu" loading="lazy" />
              <div class="project-card__overlay">
                <span class="project-card__view-btn">
                  <span>View Case Study</span>
                  <i data-lucide="arrow-up-right"></i>
                </span>
              </div>
            </div>
            <div class="project-card__body">
              <div class="project-card__meta">
                <span>Paving • Interlocking Pavers</span>
                <span>520 sq.m</span>
              </div>
              <h3 class="project-card__title">Sovereign Interlocking Courtyard</h3>
              <p class="project-card__loc"><i data-lucide="map-pin" class="icon-14"></i> Independence Layout, Enugu</p>
            </div>
          </article>

          <!-- Project 7 -->
          <article class="project-card" data-category="residential" data-project-id="7">
            <div class="project-card__thumb">
              <img class="project-card__img" src="assets/image-web/south7.jpeg" alt="Nordic Red Brick Residence in Enugu" loading="lazy" />
              <div class="project-card__overlay">
                <span class="project-card__view-btn">
                  <span>View Case Study</span>
                  <i data-lucide="arrow-up-right"></i>
                </span>
              </div>
            </div>
            <div class="project-card__body">
              <div class="project-card__meta">
                <span>Residential • Flemish Bond Masonry</span>
                <span>420 sq.m</span>
              </div>
              <h3 class="project-card__title">Nordic Red Brick Residence</h3>
              <p class="project-card__loc"><i data-lucide="map-pin" class="icon-14"></i> Independence Layout, Enugu</p>
            </div>
          </article>

          <!-- Project 8 -->
          <article class="project-card" data-category="commercial" data-project-id="8">
            <div class="project-card__thumb">
              <img class="project-card__img" src="assets/image-web/south8.jpeg" alt="Westbank Commercial Brick Pavilion in Asaba" loading="lazy" />
              <div class="project-card__overlay">
                <span class="project-card__view-btn">
                  <span>View Case Study</span>
                  <i data-lucide="arrow-up-right"></i>
                </span>
              </div>
            </div>
            <div class="project-card__body">
              <div class="project-card__meta">
                <span>Commercial • Double-Height Masonry</span>
                <span>720 sq.m</span>
              </div>
              <h3 class="project-card__title">Westbank Commercial Pavilion</h3>
              <p class="project-card__loc"><i data-lucide="map-pin" class="icon-14"></i> Asaba, Delta State</p>
            </div>
          </article>

          <!-- Project 9 -->
          <article class="project-card" data-category="residential" data-project-id="9">
            <div class="project-card__thumb">
              <img class="project-card__img" src="assets/image-web/south9.jpeg" alt="Eco-Block Modern Bungalow in Owerri" loading="lazy" />
              <div class="project-card__overlay">
                <span class="project-card__view-btn">
                  <span>View Case Study</span>
                  <i data-lucide="arrow-up-right"></i>
                </span>
              </div>
            </div>
            <div class="project-card__body">
              <div class="project-card__meta">
                <span>Residential • Compressed Earth Blocks</span>
                <span>290 sq.m</span>
              </div>
              <h3 class="project-card__title">Eco-Block Modern Bungalow</h3>
              <p class="project-card__loc"><i data-lucide="map-pin" class="icon-14"></i> Works Layout, Owerri</p>
            </div>
          </article>

          <!-- Project 10 -->
          <article class="project-card" data-category="perimeter" data-project-id="10">
            <div class="project-card__thumb">
              <img class="project-card__img" src="assets/image-web/south10.jpeg" alt="High-Density Interlocking Driveway in Port Harcourt" loading="lazy" />
              <div class="project-card__overlay">
                <span class="project-card__view-btn">
                  <span>View Case Study</span>
                  <i data-lucide="arrow-up-right"></i>
                </span>
              </div>
            </div>
            <div class="project-card__body">
              <div class="project-card__meta">
                <span>Civil • Heavy-Duty Paver Estate</span>
                <span>640 sq.m</span>
              </div>
              <h3 class="project-card__title">Heavy-Duty Interlocking Driveway</h3>
              <p class="project-card__loc"><i data-lucide="map-pin" class="icon-14"></i> Port Harcourt, Rivers State</p>
            </div>
          </article>

          <!-- Project 11 -->
          <article class="project-card" data-category="commercial" data-project-id="11">
            <div class="project-card__thumb">
              <img class="project-card__img" src="assets/image-web/south11.jpeg" alt="Municipal Civic Center Facade in Abuja" loading="lazy" />
              <div class="project-card__overlay">
                <span class="project-card__view-btn">
                  <span>View Case Study</span>
                  <i data-lucide="arrow-up-right"></i>
                </span>
              </div>
            </div>
            <div class="project-card__body">
              <div class="project-card__meta">
                <span>Civic • Exposed Brick Elevation</span>
                <span>1,100 sq.m</span>
              </div>
              <h3 class="project-card__title">Municipal Civic Center Facade</h3>
              <p class="project-card__loc"><i data-lucide="map-pin" class="icon-14"></i> Central Business District, Abuja</p>
            </div>
          </article>

          <!-- Project 12 -->
          <article class="project-card" data-category="perimeter" data-project-id="12">
            <div class="project-card__thumb">
              <img class="project-card__img" src="assets/image-web/south12.jpeg" alt="Reinforced Perimeter Wall & Coping in Owerri" loading="lazy" />
              <div class="project-card__overlay">
                <span class="project-card__view-btn">
                  <span>View Case Study</span>
                  <i data-lucide="arrow-up-right"></i>
                </span>
              </div>
            </div>
            <div class="project-card__body">
              <div class="project-card__meta">
                <span>Perimeter • Security Masonry Wall</span>
                <span>220m Length</span>
              </div>
              <h3 class="project-card__title">Reinforced Perimeter Wall</h3>
              <p class="project-card__loc"><i data-lucide="map-pin" class="icon-14"></i> New Owerri, Imo State</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         TRANSFORMATION SHOWCASE (Interactive Before & After Slider)
         ========================================================================== -->
    <section class="section before-after" id="before-after" aria-labelledby="ba-title">
      <div class="container">
        <div class="ba-container" data-reveal>
          <div class="ba-info">
            <span class="kicker">Structural Evolution</span>
            <h2 class="h-section" id="ba-title">Foundation to Completed Brickwork.</h2>
            <p class="lead" style="margin: 1.25rem 0;">
              Drag the interactive slider to see the structural transformation: from reinforced concrete slab footings to a completed load-bearing exposed brick masterpiece.
            </p>
            <div style="display:flex; flex-direction:column; gap:0.85rem; margin-top:1.5rem;">
              <div style="display:flex; align-items:center; gap:0.75rem;">
                <i data-lucide="check-circle" class="text-accent"></i>
                <span style="font-weight:600; font-size:0.95rem;">High compressive load-bearing brick construction</span>
              </div>
              <div style="display:flex; align-items:center; gap:0.75rem;">
                <i data-lucide="check-circle" class="text-accent"></i>
                <span style="font-weight:600; font-size:0.95rem;">Integrated damp-proof membrane &amp; reinforced brick lintels</span>
              </div>
              <div style="display:flex; align-items:center; gap:0.75rem;">
                <i data-lucide="check-circle" class="text-accent"></i>
                <span style="font-weight:600; font-size:0.95rem;">Zero plastering or painting required — lifetime durability</span>
              </div>
            </div>
            <a class="btn btn--primary btn--md" href="contact.php#booking" style="margin-top:2rem;">
              <span>Discuss Your Brick Build</span>
              <i data-lucide="arrow-up-right"></i>
            </a>
          </div>

          <div class="ba-slider-wrap" id="ba-slider" aria-label="Before and after transformation slider">
            <img class="ba-slider-img ba-slider-img--before" src="assets/image-web/south10.jpeg" alt="Foundation trenching and concrete sub-base" />
            <span class="ba-badge ba-badge--before">Foundation Stage</span>

            <img class="ba-slider-img ba-slider-img--after" src="assets/image-web/south11.jpeg" alt="Completed exposed brick building by E-zainco Brick" />
            <span class="ba-badge ba-badge--after">Completed Brick Build</span>

            <div class="ba-handle" aria-hidden="true">
              <div class="ba-handle__btn">
                <i data-lucide="chevrons-left-right" class="icon-18"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         TRACK RECORD & TYPOLOGY ANALYTICS
         ========================================================================== -->
    <section class="section" style="background:var(--bg-surface); border-bottom:1px solid var(--border-subtle);">
      <div class="container">
        <div class="sec-head sec-head--row" data-reveal>
          <div>
            <span class="kicker">Execution Analytics</span>
            <h2 class="h-section">Project Typologies &amp; Masonry Track Record.</h2>
          </div>
          <p class="text-muted" style="max-width:440px;">
            A verified look at how our brick supplies and masonry builds are distributed across projects in Nigeria.
          </p>
        </div>

        <div class="grid-4-cols" data-reveal>
          <div style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:2rem; text-align:center;">
            <span style="font-family:var(--font-display); font-size:3rem; font-weight:600; color:var(--text-heading); line-height:1;">45%</span>
            <h4 style="font-size:1.05rem; margin-top:0.5rem; color:var(--text-heading);">Residential Duplexes</h4>
            <p class="text-muted" style="font-size:0.825rem; margin-top:0.35rem;">Load-bearing villas, duplexes, and private country homes.</p>
          </div>

          <div style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:2rem; text-align:center;">
            <span style="font-family:var(--font-display); font-size:3rem; font-weight:600; color:var(--text-heading); line-height:1;">25%</span>
            <h4 style="font-size:1.05rem; margin-top:0.5rem; color:var(--text-heading);">Perimeter Security Walls</h4>
            <p class="text-muted" style="font-size:0.825rem; margin-top:0.35rem;">Fortified brick boundaries with reinforced capping.</p>
          </div>

          <div style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:2rem; text-align:center;">
            <span style="font-family:var(--font-display); font-size:3rem; font-weight:600; color:var(--text-heading); line-height:1;">18%</span>
            <h4 style="font-size:1.05rem; margin-top:0.5rem; color:var(--text-heading);">Commercial &amp; Civic</h4>
            <p class="text-muted" style="font-size:0.825rem; margin-top:0.35rem;">Corporate headquarters, banks, and religious edifices.</p>
          </div>

          <div style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:2rem; text-align:center;">
            <span style="font-family:var(--font-display); font-size:3rem; font-weight:600; color:var(--text-heading); line-height:1;">12%</span>
            <h4 style="font-size:1.05rem; margin-top:0.5rem; color:var(--text-heading);">Interlocking Driveways</h4>
            <p class="text-muted" style="font-size:0.825rem; margin-top:0.35rem;">Heavy vehicular load-rated paver courtyards.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         DIASPORA TURNKEY CASE STUDY WALKTHROUGH
         ========================================================================== -->
    <section class="section" style="border-bottom:1px solid var(--border-subtle);">
      <div class="container">
        <div class="split-grid" data-reveal>
          <div class="media-frame">
            <img src="assets/image-web/south13.jpeg" alt="Diaspora Brick Case Study: London to New Owerri" style="width:100%; height:100%; object-fit:cover;" />
            <span class="chip" style="position:absolute; top:1.25rem; left:1.25rem; background:rgba(10,15,20,0.85); color:#fff; border:none;">
              <i data-lucide="plane"></i>
              <span>London → New Owerri Brick Build</span>
            </span>
          </div>

          <div>
            <span class="kicker">Case Study Anatomy</span>
            <h2 class="h-section" style="margin:0.75rem 0 1.25rem;">Building with Pure Bricks From Abroad.</h2>
            <p class="lead" style="margin-bottom:1.5rem;">
              For Chief K. &amp; Family, building a 5-bedroom brick villa in Owerri from London required trust and zero material diversion. Here is how E-zainco Brick guaranteed absolute transparency and structural integrity.
            </p>
            <div style="display:flex; flex-direction:column; gap:1.25rem;">
              <div style="display:flex; gap:1rem;">
                <span style="font-weight:700; color:var(--accent-gold); font-family:var(--font-display); font-size:1.2rem;">Wk 1</span>
                <div>
                  <h4 style="font-size:1rem; color:var(--text-heading);">Digital Blueprint Takeoff &amp; Pallet Calculation</h4>
                  <p class="text-muted" style="font-size:0.875rem;">Architectural drawing review on Zoom and exact brick unit requirement takeoff.</p>
                </div>
              </div>
              <div style="display:flex; gap:1rem;">
                <span style="font-weight:700; color:var(--accent-gold); font-family:var(--font-display); font-size:1.2rem;">Wk 3</span>
                <div>
                  <h4 style="font-size:1rem; color:var(--text-heading);">Direct Factory Dispatch &amp; Compressive Certs</h4>
                  <p class="text-muted" style="font-size:0.875rem;">Palletized bricks delivered to site with lab certified compressive strength certificates.</p>
                </div>
              </div>
              <div style="display:flex; gap:1rem;">
                <span style="font-weight:700; color:var(--accent-gold); font-family:var(--font-display); font-size:1.2rem;">Wk 6</span>
                <div>
                  <h4 style="font-size:1rem; color:var(--text-heading);">Master Bricklaying &amp; Bi-Weekly 4K Drone Logs</h4>
                  <p class="text-muted" style="font-size:0.875rem;">Laser-verified plumb checks and video walkthroughs sent directly via WhatsApp.</p>
                </div>
              </div>
              <div style="display:flex; gap:1rem;">
                <span style="font-weight:700; color:var(--accent-gold); font-family:var(--font-display); font-size:1.2rem;">Wk 10</span>
                <div>
                  <h4 style="font-size:1rem; color:var(--text-heading);">Lintel Capping &amp; Hydrophobic Seal Handover</h4>
                  <p class="text-muted" style="font-size:0.875rem;">Finished weather-sealed brick structure handed over on time and on budget.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         ARCHITECTURAL BRICK BOND STYLES
         ========================================================================== -->
    <section class="section themes-section" id="design-themes" aria-labelledby="themes-title">
      <div class="container">
        <div class="sec-head sec-head--center" data-reveal>
          <span class="kicker">Structural Geometry</span>
          <h2 class="h-section" id="themes-title">Architectural Brick Bond Patterns.</h2>
          <p class="text-muted" style="max-width:680px;">
            The bond pattern defines both the structural strength and the aesthetic texture of a masonry wall. Explore the bond languages executed by our master bricklaying crews.
          </p>
        </div>

        <div class="themes-grid" data-reveal>
          <!-- Theme 1: English Bond -->
          <article class="theme-card">
            <div class="theme-card__icon">
              <i data-lucide="shield" class="icon-24"></i>
            </div>
            <span class="theme-card__subtitle">Maximum Load Bearing</span>
            <h3 class="theme-card__title">English Bond</h3>
            <p class="theme-card__ethos">
              Alternating courses of stretchers and headers. Renowned in structural engineering as the strongest bond in bricklaying, ideal for heavy perimeter walls and multi-story load-bearing buildings.
            </p>
            <div class="theme-card__swatches" title="Tone Palette">
              <div class="swatch-item">
                <div class="swatch-color" style="background:#b45309;"></div>
                <span class="swatch-label">Red Clay</span>
              </div>
              <div class="swatch-item">
                <div class="swatch-color" style="background:#d5a571;"></div>
                <span class="swatch-label">Ochre</span>
              </div>
              <div class="swatch-item">
                <div class="swatch-color" style="background:#1a2b3d;"></div>
                <span class="swatch-label">Slate</span>
              </div>
              <div class="swatch-item">
                <div class="swatch-color" style="background:#4b5563;"></div>
                <span class="swatch-label">Mortar</span>
              </div>
            </div>
            <ul class="theme-card__features">
              <li class="theme-card__feature-item"><i data-lucide="check" class="icon-14"></i><span>Alternating headers and stretchers</span></li>
              <li class="theme-card__feature-item"><i data-lucide="check" class="icon-14"></i><span>Eliminates vertical shear planes</span></li>
              <li class="theme-card__feature-item"><i data-lucide="check" class="icon-14"></i><span>Superior seismic &amp; storm resilience</span></li>
            </ul>
            <button class="theme-card__btn js-theme-filter" type="button" data-theme-target="residential">
              <span>View Residential Builds</span>
              <i data-lucide="arrow-right" class="icon-14"></i>
            </button>
          </article>

          <!-- Theme 2: Flemish Bond -->
          <article class="theme-card">
            <div class="theme-card__icon">
              <i data-lucide="grid" class="icon-24"></i>
            </div>
            <span class="theme-card__subtitle">Architectural Elegance</span>
            <h3 class="theme-card__title">Flemish Bond</h3>
            <p class="theme-card__ethos">
              Each course comprises alternating headers and stretchers. Creates an intricate decorative diamond rhythm across building facades while preserving high structural load capacity.
            </p>
            <div class="theme-card__swatches" title="Tone Palette">
              <div class="swatch-item">
                <div class="swatch-color" style="background:#c2410c;"></div>
                <span class="swatch-label">Terracotta</span>
              </div>
              <div class="swatch-item">
                <div class="swatch-color" style="background:#78350f;"></div>
                <span class="swatch-label">Burnt Umber</span>
              </div>
              <div class="swatch-item">
                <div class="swatch-color" style="background:#fef3c7;"></div>
                <span class="swatch-label">Light Sand</span>
              </div>
              <div class="swatch-item">
                <div class="swatch-color" style="background:#1f2937;"></div>
                <span class="swatch-label">Iron</span>
              </div>
            </div>
            <ul class="theme-card__features">
              <li class="theme-card__feature-item"><i data-lucide="check" class="icon-14"></i><span>Balanced visual texture on exterior facades</span></li>
              <li class="theme-card__feature-item"><i data-lucide="check" class="icon-14"></i><span>Uniform 10mm recessed mortar pointing</span></li>
              <li class="theme-card__feature-item"><i data-lucide="check" class="icon-14"></i><span>Classic civic &amp; luxury estate aesthetic</span></li>
            </ul>
            <button class="theme-card__btn js-theme-filter" type="button" data-theme-target="commercial">
              <span>View Commercial Facades</span>
              <i data-lucide="arrow-right" class="icon-14"></i>
            </button>
          </article>

          <!-- Theme 3: Interlocking CEB -->
          <article class="theme-card">
            <div class="theme-card__icon">
              <i data-lucide="layers" class="icon-24"></i>
            </div>
            <span class="theme-card__subtitle">Modern Sustainable</span>
            <h3 class="theme-card__title">Interlocking CEB</h3>
            <p class="theme-card__ethos">
              Compressed Earth Bricks engineered with male-female interlocking tongues and grooves. Drastically reduces mortar consumption, speeds up construction by 40%, and provides natural insulation.
            </p>
            <div class="theme-card__swatches" title="Tone Palette">
              <div class="swatch-item">
                <div class="swatch-color" style="background:#d5a571;"></div>
                <span class="swatch-label">Earth</span>
              </div>
              <div class="swatch-item">
                <div class="swatch-color" style="background:#a16207;"></div>
                <span class="swatch-label">Laterite</span>
              </div>
              <div class="swatch-item">
                <div class="swatch-color" style="background:#e5e7eb;"></div>
                <span class="swatch-label">Cement</span>
              </div>
              <div class="swatch-item">
                <div class="swatch-color" style="background:#1a2b3d;"></div>
                <span class="swatch-label">Navy</span>
              </div>
            </div>
            <ul class="theme-card__features">
              <li class="theme-card__feature-item"><i data-lucide="check" class="icon-14"></i><span>Precision tongue-and-groove self-alignment</span></li>
              <li class="theme-card__feature-item"><i data-lucide="check" class="icon-14"></i><span>Natural passive cooling &amp; high thermal mass</span></li>
              <li class="theme-card__feature-item"><i data-lucide="check" class="icon-14"></i><span>35% cost savings over conventional blocks</span></li>
            </ul>
            <button class="theme-card__btn js-theme-filter" type="button" data-theme-target="residential">
              <span>View Eco-Bungalows</span>
              <i data-lucide="arrow-right" class="icon-14"></i>
            </button>
          </article>

          <!-- Theme 4: Brise-Soleil / Cladding -->
          <article class="theme-card">
            <div class="theme-card__icon">
              <i data-lucide="sun" class="icon-24"></i>
            </div>
            <span class="theme-card__subtitle">Solar Screening</span>
            <h3 class="theme-card__title">Brise-Soleil &amp; Cladding</h3>
            <p class="theme-card__ethos">
              Perforated brickwork (hit-and-miss masonry) and thin terracotta cladding slips that diffuse harsh tropical sunlight, enable cross-ventilation, and add architectural depth to building envelopes.
            </p>
            <div class="theme-card__swatches" title="Tone Palette">
              <div class="swatch-item">
                <div class="swatch-color" style="background:#ea580c;"></div>
                <span class="swatch-label">Burnt Clay</span>
              </div>
              <div class="swatch-item">
                <div class="swatch-color" style="background:#f3f4f6;"></div>
                <span class="swatch-label">Air Gap</span>
              </div>
              <div class="swatch-item">
                <div class="swatch-color" style="background:#374151;"></div>
                <span class="swatch-label">Anchor</span>
              </div>
              <div class="swatch-item">
                <div class="swatch-color" style="background:#9a3412;"></div>
                <span class="swatch-label">Rust</span>
              </div>
            </div>
            <ul class="theme-card__features">
              <li class="theme-card__feature-item"><i data-lucide="check" class="icon-14"></i><span>Natural airflow and solar glare screening</span></li>
              <li class="theme-card__feature-item"><i data-lucide="check" class="icon-14"></i><span>Mechanical stainless steel anchoring</span></li>
              <li class="theme-card__feature-item"><i data-lucide="check" class="icon-14"></i><span>Hydrophobic weatherproof coating</span></li>
            </ul>
            <button class="theme-card__btn js-theme-filter" type="button" data-theme-target="facades">
              <span>View Facade Cladding</span>
              <i data-lucide="arrow-right" class="icon-14"></i>
            </button>
          </article>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         PRODUCT CATALOG: HIGH-DENSITY BRICK UNITS
         ========================================================================== -->
    <section class="section furniture-section" id="furniture-catalog" aria-labelledby="furniture-title">
      <div class="container">
        <div class="sec-head sec-head--center" data-reveal>
          <span class="kicker">Direct Factory Production</span>
          <h2 class="h-section" id="furniture-title">Product Catalog: High-Density Bricks &amp; Units.</h2>
          <p class="text-muted" style="max-width:680px;">
            Every brick unit is manufactured to millimeter dimensional tolerance at our automated Owerri yard. Engineered for certified compressive strength, low moisture absorption, and generational longevity.
          </p>
        </div>

        <!-- Brick Filter Tabs -->
        <div class="furniture-tabs" data-reveal>
          <button class="furniture-tab-btn active" type="button" data-furniture-filter="all-bricks">
            <span>All Brick Units (4)</span>
          </button>
          <button class="furniture-tab-btn" type="button" data-furniture-filter="ceb">
            <span>Compressed Earth Bricks</span>
          </button>
          <button class="furniture-tab-btn" type="button" data-furniture-filter="clay">
            <span>Facing Bricks</span>
          </button>
          <button class="furniture-tab-btn" type="button" data-furniture-filter="paver">
            <span>Interlocking Pavers</span>
          </button>
          <button class="furniture-tab-btn" type="button" data-furniture-filter="coping">
            <span>Perimeter Units</span>
          </button>
        </div>

        <!-- Product Cards Grid -->
        <div class="furniture-grid" data-reveal>
          <!-- Piece 1: CEB Block -->
          <article class="furniture-card" data-furniture-category="ceb">
            <div class="furniture-card__thumb">
              <img class="furniture-card__img" src="assets/image-web/south7.jpeg" alt="Hydraulic Compressed Earth Brick" loading="lazy" />
              <span class="furniture-card__badge">Eco Certified</span>
            </div>
            <div class="furniture-card__body">
              <span class="furniture-card__type">Hydraulic Compressed Earth</span>
              <h3 class="furniture-card__title">E-Zainco Hydraulic CEB Eco-Block</h3>
              <div class="furniture-specs-list">
                <div class="furniture-spec-row">
                  <span class="furniture-spec-label">Dimensions:</span>
                  <span class="furniture-spec-val">290mm L × 140mm W × 115mm H</span>
                </div>
                <div class="furniture-spec-row">
                  <span class="furniture-spec-label">Strength:</span>
                  <span class="furniture-spec-val">8.5 – 10.5 MPa Certified</span>
                </div>
                <div class="furniture-spec-row">
                  <span class="furniture-spec-label">Composition:</span>
                  <span class="furniture-spec-val">Stabilized Laterite &amp; Portland Matrix</span>
                </div>
                <div class="furniture-spec-row">
                  <span class="furniture-spec-label">Packaging:</span>
                  <span class="furniture-spec-val">Palletized 400 Units / Shrink-Wrapped</span>
                </div>
              </div>
              <div class="furniture-card__actions">
                <a class="btn-custom-inquiry" href="https://wa.me/2347014093037?text=Hello%20E-zainco%20Brick,%20I'd%20like%20to%20inquire%20about%20ordering%20the%20E-Zainco%20Hydraulic%20CEB%20Eco-Block..." target="_blank" rel="noopener">
                  <i data-lucide="message-circle" class="icon-16"></i>
                  <span>Inquire on Pallet Pricing</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Piece 2: Clay Facing Brick -->
          <article class="furniture-card" data-furniture-category="clay">
            <div class="furniture-card__thumb">
              <img class="furniture-card__img" src="assets/image-web/south8.jpeg" alt="Heritage Red Clay Facing Brick" loading="lazy" />
              <span class="furniture-card__badge">Kiln Fired</span>
            </div>
            <div class="furniture-card__body">
              <span class="furniture-card__type">Architectural Facing Brick</span>
              <h3 class="furniture-card__title">Heritage Red Clay Facing Brick</h3>
              <div class="furniture-specs-list">
                <div class="furniture-spec-row">
                  <span class="furniture-spec-label">Dimensions:</span>
                  <span class="furniture-spec-val">215mm L × 102.5mm W × 65mm H</span>
                </div>
                <div class="furniture-spec-row">
                  <span class="furniture-spec-label">Strength:</span>
                  <span class="furniture-spec-val">12.0+ MPa Industrial Grade</span>
                </div>
                <div class="furniture-spec-row">
                  <span class="furniture-spec-label">Water Absorption:</span>
                  <span class="furniture-spec-val">&lt; 7% Low Porosity</span>
                </div>
                <div class="furniture-spec-row">
                  <span class="furniture-spec-label">Packaging:</span>
                  <span class="furniture-spec-val">Palletized 500 Units / Strapped</span>
                </div>
              </div>
              <div class="furniture-card__actions">
                <a class="btn-custom-inquiry" href="https://wa.me/2347014093037?text=Hello%20E-zainco%20Brick,%20I'd%20like%20to%20inquire%20about%20ordering%20the%20Heritage%20Red%20Clay%20Facing%20Brick..." target="_blank" rel="noopener">
                  <i data-lucide="message-circle" class="icon-16"></i>
                  <span>Inquire on Pallet Pricing</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Piece 3: Interlocking Paver -->
          <article class="furniture-card" data-furniture-category="paver">
            <div class="furniture-card__thumb">
              <img class="furniture-card__img" src="assets/image-web/south9.jpeg" alt="Heavy-Duty Interlocking Paver" loading="lazy" />
              <span class="furniture-card__badge">High Load Rated</span>
            </div>
            <div class="furniture-card__body">
              <span class="furniture-card__type">Vehicular Interlocking Paver</span>
              <h3 class="furniture-card__title">Heavy-Duty Interlocking Paver</h3>
              <div class="furniture-specs-list">
                <div class="furniture-spec-row">
                  <span class="furniture-spec-label">Thickness:</span>
                  <span class="furniture-spec-val">60mm (Driveway) / 80mm (Industrial)</span>
                </div>
                <div class="furniture-spec-row">
                  <span class="furniture-spec-label">Strength:</span>
                  <span class="furniture-spec-val">35.0+ MPa Compressive Rating</span>
                </div>
                <div class="furniture-spec-row">
                  <span class="furniture-spec-label">Edge Profile:</span>
                  <span class="furniture-spec-val">Chamfered Anti-Chipping Bevel</span>
                </div>
                <div class="furniture-spec-row">
                  <span class="furniture-spec-label">Coverage:</span>
                  <span class="furniture-spec-val">38 Units per Square Meter</span>
                </div>
              </div>
              <div class="furniture-card__actions">
                <a class="btn-custom-inquiry" href="https://wa.me/2347014093037?text=Hello%20E-zainco%20Brick,%20I'd%20like%20to%20inquire%20about%20ordering%20Heavy-Duty%20Interlocking%20Pavers..." target="_blank" rel="noopener">
                  <i data-lucide="message-circle" class="icon-16"></i>
                  <span>Inquire on Square Meter Pricing</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Piece 4: Coping Unit -->
          <article class="furniture-card" data-furniture-category="coping">
            <div class="furniture-card__thumb">
              <img class="furniture-card__img" src="assets/image-web/south10.jpeg" alt="Weatherproof Perimeter Coping Stone" loading="lazy" />
              <span class="furniture-card__badge">Weatherproof</span>
            </div>
            <div class="furniture-card__body">
              <span class="furniture-card__type">Perimeter Boundary Masonry</span>
              <h3 class="furniture-card__title">Weatherproof Ridge Coping Unit</h3>
              <div class="furniture-specs-list">
                <div class="furniture-spec-row">
                  <span class="furniture-spec-label">Dimensions:</span>
                  <span class="furniture-spec-val">300mm L × 150mm W × 75mm H</span>
                </div>
                <div class="furniture-spec-row">
                  <span class="furniture-spec-label">Features:</span>
                  <span class="furniture-spec-val">Dual Drip Groove (Anti-Stain Runoff)</span>
                </div>
                <div class="furniture-spec-row">
                  <span class="furniture-spec-label">Durability:</span>
                  <span class="furniture-spec-val">15.0+ MPa Water-Repellent Cast</span>
                </div>
                <div class="furniture-spec-row">
                  <span class="furniture-spec-label">Application:</span>
                  <span class="furniture-spec-val">Perimeter Wall Capping &amp; Parapets</span>
                </div>
              </div>
              <div class="furniture-card__actions">
                <a class="btn-custom-inquiry" href="https://wa.me/2347014093037?text=Hello%20E-zainco%20Brick,%20I'd%20like%20to%20inquire%20about%20ordering%20Weatherproof%20Ridge%20Coping%20Units..." target="_blank" rel="noopener">
                  <i data-lucide="message-circle" class="icon-16"></i>
                  <span>Inquire on Linear Meter Pricing</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         BRICK MATERIALS & TECHNICAL SPECIFICATIONS
         ========================================================================== -->
    <section class="section materials-section" id="materials-specs" aria-labelledby="materials-title">
      <div class="container">
        <!-- Hero Specimen Card -->
        <div class="materials-hero-card" data-reveal>
          <div class="materials-hero-img-wrap">
            <img class="materials-hero-img" src="assets/image-web/south12.jpeg" alt="High density brick specimens and masonry laboratory testing" loading="lazy" />
          </div>
          <div>
            <span class="kicker">Materiality Lab</span>
            <h2 class="h-section" id="materials-title" style="margin-bottom:1rem;">Brick Quality &amp; Density Standards.</h2>
            <p class="text-muted" style="line-height:1.7; margin-bottom:1.5rem;">
              We eliminate brittle blocks, sand washouts, and rapid tropical deterioration. Every brick batch produced by E-zainco is hydraulically pressed and tested for load capacity, moisture resistance, and anti-efflorescence performance.
            </p>
            <div style="display:flex; flex-wrap:wrap; gap:0.65rem;">
              <span class="chip" style="background:var(--bg-surface);"><i data-lucide="shield-check" class="text-accent"></i> 100% Anti-Efflorescence</span>
              <span class="chip" style="background:var(--bg-surface);"><i data-lucide="droplets" class="text-accent"></i> Hydrophobic Sealed</span>
              <span class="chip" style="background:var(--bg-surface);"><i data-lucide="sun" class="text-accent"></i> High Thermal Mass</span>
            </div>
          </div>
        </div>

        <!-- 7 Material Cards -->
        <div class="materials-grid" data-reveal>
          <!-- Material 1 -->
          <div class="material-card js-open-material" data-material-key="ceb" role="button" tabindex="0" aria-label="View Compressed Earth Brick Specifications">
            <div class="material-card__color-bar" style="background:#d5a571;"></div>
            <span class="material-card__type">Hydraulic Masonry Block</span>
            <h3 class="material-card__name">Compressed Earth Brick (CEB)</h3>
            <div class="material-card__rating">
              <i data-lucide="award" class="icon-14"></i>
              <span>7.5 – 10.5 MPa Load Tested</span>
            </div>
            <span class="material-card__cta">
              <span>View Technical Specs</span>
              <i data-lucide="arrow-up-right" class="icon-14"></i>
            </span>
          </div>

          <!-- Material 2 -->
          <div class="material-card js-open-material" data-material-key="clay" role="button" tabindex="0" aria-label="View Red Clay Facing Brick Specifications">
            <div class="material-card__color-bar" style="background:#b45309;"></div>
            <span class="material-card__type">Kiln-Fired Facing Brick</span>
            <h3 class="material-card__name">Red Clay Facing Brick</h3>
            <div class="material-card__rating">
              <i data-lucide="award" class="icon-14"></i>
              <span>12.0+ MPa Industrial Grade</span>
            </div>
            <span class="material-card__cta">
              <span>View Technical Specs</span>
              <i data-lucide="arrow-up-right" class="icon-14"></i>
            </span>
          </div>

          <!-- Material 3 -->
          <div class="material-card js-open-material" data-material-key="paver" role="button" tabindex="0" aria-label="View Interlocking Paver Specifications">
            <div class="material-card__color-bar" style="background:#1a2b3d;"></div>
            <span class="material-card__type">Vehicular Paving Block</span>
            <h3 class="material-card__name">Interlocking Paver Unit</h3>
            <div class="material-card__rating">
              <i data-lucide="award" class="icon-14"></i>
              <span>35.0+ MPa Heavy Load</span>
            </div>
            <span class="material-card__cta">
              <span>View Technical Specs</span>
              <i data-lucide="arrow-up-right" class="icon-14"></i>
            </span>
          </div>

          <!-- Material 4 -->
          <div class="material-card js-open-material" data-material-key="cladding" role="button" tabindex="0" aria-label="View Terracotta Cladding Specifications">
            <div class="material-card__color-bar" style="background:#c2410c;"></div>
            <span class="material-card__type">Architectural Facade Slips</span>
            <h3 class="material-card__name">Terracotta Facade Cladding</h3>
            <div class="material-card__rating">
              <i data-lucide="award" class="icon-14"></i>
              <span>&lt; 3% Low Water Absorption</span>
            </div>
            <span class="material-card__cta">
              <span>View Technical Specs</span>
              <i data-lucide="arrow-up-right" class="icon-14"></i>
            </span>
          </div>

          <!-- Material 5 -->
          <div class="material-card js-open-material" data-material-key="coping" role="button" tabindex="0" aria-label="View Ridge Coping Stone Specifications">
            <div class="material-card__color-bar" style="background:#4b5563;"></div>
            <span class="material-card__type">Perimeter Wall Capping</span>
            <h3 class="material-card__name">Weatherproof Coping Unit</h3>
            <div class="material-card__rating">
              <i data-lucide="award" class="icon-14"></i>
              <span>Dual Drip Water Barrier</span>
            </div>
            <span class="material-card__cta">
              <span>View Technical Specs</span>
              <i data-lucide="arrow-up-right" class="icon-14"></i>
            </span>
          </div>

          <!-- Material 6 -->
          <div class="material-card js-open-material" data-material-key="mortar" role="button" tabindex="0" aria-label="View Anti-Efflorescence Mortar Specifications">
            <div class="material-card__color-bar" style="background:#9ca3af;"></div>
            <span class="material-card__type">Polymer Masonry Binder</span>
            <h3 class="material-card__name">Anti-Efflorescence Mortar</h3>
            <div class="material-card__rating">
              <i data-lucide="award" class="icon-14"></i>
              <span>High-Bond Polymeric Mix</span>
            </div>
            <span class="material-card__cta">
              <span>View Technical Specs</span>
              <i data-lucide="arrow-up-right" class="icon-14"></i>
            </span>
          </div>

          <!-- Material 7 -->
          <div class="material-card js-open-material" data-material-key="stabilizer" role="button" tabindex="0" aria-label="View Hydraulic Soil Stabilizer Specifications">
            <div class="material-card__color-bar" style="background:#78350f;"></div>
            <span class="material-card__type">Soil Compaction Additive</span>
            <h3 class="material-card__name">Hydraulic Soil Stabilizer</h3>
            <div class="material-card__rating">
              <i data-lucide="award" class="icon-14"></i>
              <span>Anti-Washout Polymer</span>
            </div>
            <span class="material-card__cta">
              <span>View Technical Specs</span>
              <i data-lucide="arrow-up-right" class="icon-14"></i>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         LIVE JOB SITES PHOTO STREAM
         ========================================================================== -->
    <section class="section instagram-stream-section" id="instagram-stream" aria-labelledby="insta-title">
      <div class="container">
        <div class="instagram-stream-header" data-reveal>
          <div>
            <div class="instagram-brand-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>Active Sites &amp; Factory Yard</span>
            </div>
            <h2 class="h-section" id="insta-title">Live From The Factory Yard &amp; Job Sites.</h2>
            <p class="text-muted" style="max-width:560px;">
              Follow real-time brick compression, pallet dispatch, plumb alignment checks, and active structural builds across Nigeria.
            </p>
          </div>
          <div>
            <a class="btn btn--outline" href="https://wa.me/2347014093037?text=Hello%20E-zainco%20Brick,%20I'd%20like%20to%20view%20more%20live%20site%20photos..." target="_blank" rel="noopener">
              <i data-lucide="message-circle"></i>
              <span>Inquire via WhatsApp</span>
              <i data-lucide="arrow-up-right"></i>
            </a>
          </div>
        </div>

        <!-- Marquee Track -->
        <div class="instagram-marquee-container" data-reveal>
          <div class="instagram-marquee-track">
            <!-- Set 1 -->
            <a class="instagram-tile" href="#curated-gallery" aria-label="View project photo">
              <img class="instagram-tile__img" src="assets/image-web/south1.jpeg" alt="The Civic Brick Residence under construction" loading="lazy" />
              <div class="instagram-tile__overlay">
                <div class="instagram-tile__stats">
                  <span class="instagram-tile__stat"><i data-lucide="shield" class="icon-14"></i> 8.5 MPa</span>
                  <span class="instagram-tile__stat"><i data-lucide="map-pin" class="icon-14"></i> Owerri</span>
                </div>
                <p class="instagram-tile__caption">High-density CEB masonry walls rising in New Owerri.</p>
              </div>
            </a>

            <a class="instagram-tile" href="#curated-gallery" aria-label="View project photo">
              <img class="instagram-tile__img" src="assets/image-web/south2.jpeg" alt="Kiln fired red clay bricklaying in Port Harcourt" loading="lazy" />
              <div class="instagram-tile__overlay">
                <div class="instagram-tile__stats">
                  <span class="instagram-tile__stat"><i data-lucide="shield" class="icon-14"></i> 12.0 MPa</span>
                  <span class="instagram-tile__stat"><i data-lucide="map-pin" class="icon-14"></i> Port Harcourt</span>
                </div>
                <p class="instagram-tile__caption">English bond precision bricklaying on private villa.</p>
              </div>
            </a>

            <a class="instagram-tile" href="#curated-gallery" aria-label="View project photo">
              <img class="instagram-tile__img" src="assets/image-web/south3.jpeg" alt="Exterior terracotta brick facade installation" loading="lazy" />
              <div class="instagram-tile__overlay">
                <div class="instagram-tile__stats">
                  <span class="instagram-tile__stat"><i data-lucide="shield" class="icon-14"></i> Cladding</span>
                  <span class="instagram-tile__stat"><i data-lucide="map-pin" class="icon-14"></i> Asaba</span>
                </div>
                <p class="instagram-tile__caption">Mechanical anchoring of exterior terracotta facade slips.</p>
              </div>
            </a>

            <a class="instagram-tile" href="#curated-gallery" aria-label="View project photo">
              <img class="instagram-tile__img" src="assets/image-web/south4.jpeg" alt="Structural brick corporate pavilion in Lagos" loading="lazy" />
              <div class="instagram-tile__overlay">
                <div class="instagram-tile__stats">
                  <span class="instagram-tile__stat"><i data-lucide="shield" class="icon-14"></i> 10.5 MPa</span>
                  <span class="instagram-tile__stat"><i data-lucide="map-pin" class="icon-14"></i> Lagos</span>
                </div>
                <p class="instagram-tile__caption">Aura Brick commercial headquarters structural piers.</p>
              </div>
            </a>

            <a class="instagram-tile" href="#curated-gallery" aria-label="View project photo">
              <img class="instagram-tile__img" src="assets/image-web/south5.jpeg" alt="Reinforced brick boundary perimeter fence" loading="lazy" />
              <div class="instagram-tile__overlay">
                <div class="instagram-tile__stats">
                  <span class="instagram-tile__stat"><i data-lucide="shield" class="icon-14"></i> 180m</span>
                  <span class="instagram-tile__stat"><i data-lucide="map-pin" class="icon-14"></i> Lekki</span>
                </div>
                <p class="instagram-tile__caption">Heavy-duty brick perimeter security wall with coping.</p>
              </div>
            </a>

            <a class="instagram-tile" href="#curated-gallery" aria-label="View project photo">
              <img class="instagram-tile__img" src="assets/image-web/south6.jpeg" alt="Heavy duty interlocking paver courtyard" loading="lazy" />
              <div class="instagram-tile__overlay">
                <div class="instagram-tile__stats">
                  <span class="instagram-tile__stat"><i data-lucide="shield" class="icon-14"></i> 35.0 MPa</span>
                  <span class="instagram-tile__stat"><i data-lucide="map-pin" class="icon-14"></i> Enugu</span>
                </div>
                <p class="instagram-tile__caption">Heavy-duty interlocking pavers on estate driveway.</p>
              </div>
            </a>

            <!-- Set 2 (Seamless loop duplicate) -->
            <a class="instagram-tile" href="#curated-gallery" aria-hidden="true" tabindex="-1">
              <img class="instagram-tile__img" src="assets/image-web/south7.jpeg" alt="The Civic Brick Residence under construction" loading="lazy" />
              <div class="instagram-tile__overlay">
                <div class="instagram-tile__stats">
                  <span class="instagram-tile__stat"><i data-lucide="shield" class="icon-14"></i> 8.5 MPa</span>
                  <span class="instagram-tile__stat"><i data-lucide="map-pin" class="icon-14"></i> Owerri</span>
                </div>
                <p class="instagram-tile__caption">High-density CEB masonry walls rising in New Owerri.</p>
              </div>
            </a>

            <a class="instagram-tile" href="#curated-gallery" aria-hidden="true" tabindex="-1">
              <img class="instagram-tile__img" src="assets/image-web/south8.jpeg" alt="Kiln fired red clay bricklaying in Port Harcourt" loading="lazy" />
              <div class="instagram-tile__overlay">
                <div class="instagram-tile__stats">
                  <span class="instagram-tile__stat"><i data-lucide="shield" class="icon-14"></i> 12.0 MPa</span>
                  <span class="instagram-tile__stat"><i data-lucide="map-pin" class="icon-14"></i> Port Harcourt</span>
                </div>
                <p class="instagram-tile__caption">English bond precision bricklaying on private villa.</p>
              </div>
            </a>

            <a class="instagram-tile" href="#curated-gallery" aria-hidden="true" tabindex="-1">
              <img class="instagram-tile__img" src="assets/image-web/south9.jpeg" alt="Exterior terracotta brick facade installation" loading="lazy" />
              <div class="instagram-tile__overlay">
                <div class="instagram-tile__stats">
                  <span class="instagram-tile__stat"><i data-lucide="shield" class="icon-14"></i> Cladding</span>
                  <span class="instagram-tile__stat"><i data-lucide="map-pin" class="icon-14"></i> Asaba</span>
                </div>
                <p class="instagram-tile__caption">Mechanical anchoring of exterior terracotta facade slips.</p>
              </div>
            </a>

            <a class="instagram-tile" href="#curated-gallery" aria-hidden="true" tabindex="-1">
              <img class="instagram-tile__img" src="assets/image-web/south10.jpeg" alt="Structural brick corporate pavilion in Lagos" loading="lazy" />
              <div class="instagram-tile__overlay">
                <div class="instagram-tile__stats">
                  <span class="instagram-tile__stat"><i data-lucide="shield" class="icon-14"></i> 10.5 MPa</span>
                  <span class="instagram-tile__stat"><i data-lucide="map-pin" class="icon-14"></i> Lagos</span>
                </div>
                <p class="instagram-tile__caption">Aura Brick commercial headquarters structural piers.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         CLOSING CTA
         ========================================================================== -->
    <section class="section" aria-label="Request Quote">
      <div class="container">
        <div class="conversion-band" data-reveal>
          <div class="conversion-band__glow" aria-hidden="true"></div>
          <div class="conversion-band__content">
            <span class="chip chip--accent" style="width:fit-content; background:rgba(213,165,113,0.2); color:#fff; border-color:rgba(213,165,113,0.4);">
              <i data-lucide="package"></i>
              <span>Bring Your Brick Vision To Life</span>
            </span>
            <h2 class="h-section">Inspired by One of Our Completed Brick Projects?</h2>
            <p>
              Schedule an in-person factory yard visit in Owerri or an online consultation. We will analyze your architectural blueprints and prepare an itemized quantity takeoff.
            </p>
            <div class="conversion-band__actions">
              <a class="btn btn--glacier btn--lg" href="contact.php#booking">
                <span>Request Brick Supply Quote</span>
                <i data-lucide="arrow-up-right"></i>
              </a>
              <a class="btn btn--secondary btn--lg" href="https://wa.me/2347014093037?text=Hello%20E-zainco%20Brick,%20I'd%20like%20to%20inquire%20about%20a%20brick%20project..." target="_blank" rel="noopener" style="color:#fff; border-color:rgba(255,255,255,0.4);">
                <i data-lucide="message-circle"></i>
                <span>WhatsApp (+234 701 409 3037)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- ==========================================================================
       CASE STUDY DETAIL & LIGHTBOX MODAL WITH HIGH-RES ZOOM
       ========================================================================== -->
  <div class="modal-overlay" id="project-modal" role="dialog" aria-modal="true" aria-label="Project Case Study Lightbox">
    <div class="modal-content" style="max-width:850px;">
      <button class="modal-close" type="button" aria-label="Close modal">
        <i data-lucide="x"></i>
      </button>

      <div style="display:flex; flex-direction:column; gap:1.5rem;">
        <!-- Lightbox Zoom Viewport -->
        <div class="lightbox-zoom-viewport" title="Double click or use buttons to zoom. Click and drag to pan when zoomed.">
          <img class="lightbox-zoom-img js-modal-img" src="" alt="High resolution brick project view" />
          <span class="chip js-modal-cat" style="position:absolute; top:1rem; left:1rem; background:rgba(10,15,20,0.85); color:#fff; border:none; z-index:9;"></span>
          
          <!-- Zoom Controls Toolbar -->
          <div class="lightbox-zoom-toolbar">
            <button class="zoom-btn js-zoom-out" type="button" aria-label="Zoom Out" title="Zoom Out">
              <i data-lucide="minus" class="icon-14"></i>
            </button>
            <span class="zoom-level-text js-zoom-level">100%</span>
            <button class="zoom-btn js-zoom-in" type="button" aria-label="Zoom In" title="Zoom In">
              <i data-lucide="plus" class="icon-14"></i>
            </button>
            <button class="zoom-btn js-zoom-reset" type="button" aria-label="Reset Zoom" title="Reset Zoom">
              <i data-lucide="rotate-ccw" class="icon-14"></i>
            </button>
          </div>
        </div>

        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.35rem;">
            <h2 class="h-section js-modal-title" style="margin-bottom:0;"></h2>
            <span class="dimension-badge">
              <i data-lucide="maximize-2" class="icon-14"></i>
              <span class="js-modal-dim"></span>
            </span>
          </div>
          <p class="text-accent js-modal-loc" style="font-weight:600; font-size:0.95rem;"></p>
        </div>

        <!-- Style Tags -->
        <div>
          <h4 style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--text-light); margin-bottom:0.4rem;">Masonry &amp; Engineering Tags</h4>
          <div class="style-tags-container js-modal-tags"></div>
        </div>

        <div class="modal-meta-grid" style="padding:1.25rem 0; border-top:1px solid var(--border-subtle); border-bottom:1px solid var(--border-subtle);">
          <div>
            <h4 style="font-size:0.85rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--text-light); margin-bottom:0.4rem;">Project Scope</h4>
            <p class="js-modal-scope" style="font-size:0.95rem; font-weight:600; color:var(--text-heading);"></p>
          </div>
          <div>
            <h4 style="font-size:0.85rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--text-light); margin-bottom:0.4rem;">Execution Period</h4>
            <p class="js-modal-timeline" style="font-size:0.95rem; font-weight:600; color:var(--text-heading);"></p>
          </div>
        </div>

        <div>
          <h4 style="font-size:1.15rem; font-family:var(--font-display); color:var(--text-heading); margin-bottom:0.4rem;">The Architectural Brief</h4>
          <p class="js-modal-brief text-muted" style="line-height:1.7; font-size:0.95rem;"></p>
        </div>

        <div>
          <h4 style="font-size:1.15rem; font-family:var(--font-display); color:var(--text-heading); margin-bottom:0.4rem;">Masonry Approach &amp; Engineering</h4>
          <p class="js-modal-approach text-muted" style="line-height:1.7; font-size:0.95rem;"></p>
        </div>

        <div style="background:var(--bg-secondary); padding:1.5rem; border-radius:var(--radius-md); border-left:3px solid var(--accent-gold);">
          <p class="js-modal-test font-display" style="font-size:1.15rem; font-style:italic; color:var(--text-heading); line-height:1.6;"></p>
        </div>

        <!-- Modal CTA Group -->
        <div class="modal-cta-group">
          <a class="btn-request-style js-modal-request-style" href="#" target="_blank" rel="noopener">
            <i data-lucide="message-circle" class="icon-18"></i>
            <span>Inquire About This Build</span>
          </a>
          <a class="btn btn--outline" href="contact.php#booking">
            <span>Request Brick Takeoff</span>
            <i data-lucide="arrow-up-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- ==========================================================================
       MATERIALS & SPECS DRAWER / MODAL
       ========================================================================== -->
  <div class="modal-overlay" id="material-modal" role="dialog" aria-modal="true" aria-label="Material Technical Specifications">
    <div class="modal-content material-drawer-content">
      <button class="modal-close" type="button" aria-label="Close modal">
        <i data-lucide="x"></i>
      </button>

      <div style="display:flex; flex-direction:column; gap:1.25rem;">
        <div class="material-card__color-bar js-material-colorbar" style="height:10px; border-radius:var(--radius-full);"></div>

        <div>
          <span class="js-material-type" style="font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:var(--accent-gold);"></span>
          <h2 class="h-section js-material-name" style="margin:0.25rem 0 0.5rem;"></h2>
        </div>

        <!-- Spec Highlights -->
        <div class="material-spec-highlight">
          <div class="material-spec-box">
            <span class="material-spec-box__title">Durability Rating</span>
            <span class="material-spec-box__val js-material-durability"></span>
          </div>
          <div class="material-spec-box">
            <span class="material-spec-box__title">Specification Standard</span>
            <span class="material-spec-box__val js-material-tensile"></span>
          </div>
          <div class="material-spec-box">
            <span class="material-spec-box__title">Climate Suitability</span>
            <span class="material-spec-box__val" style="color:var(--accent-gold);">100% Tropical Rated</span>
          </div>
        </div>

        <div class="material-protocol-section">
          <div class="material-protocol-item">
            <i data-lucide="shield-check"></i>
            <div>
              <h4 style="font-size:0.95rem; color:var(--text-heading); margin-bottom:0.25rem;">Tropical Climate Resistance</h4>
              <p class="js-material-climate text-muted" style="font-size:0.875rem; line-height:1.6;"></p>
            </div>
          </div>

          <div class="material-protocol-item">
            <i data-lucide="sparkles"></i>
            <div>
              <h4 style="font-size:0.95rem; color:var(--text-heading); margin-bottom:0.25rem;">Care &amp; Maintenance Protocol</h4>
              <p class="js-material-care text-muted" style="font-size:0.875rem; line-height:1.6;"></p>
            </div>
          </div>

          <div class="material-protocol-item">
            <i data-lucide="layout-template"></i>
            <div>
              <h4 style="font-size:0.95rem; color:var(--text-heading); margin-bottom:0.25rem;">Architectural Applications</h4>
              <p class="js-material-apps text-muted" style="font-size:0.875rem; line-height:1.6;"></p>
            </div>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; padding-top:1rem; border-top:1px solid var(--border-subtle);">
          <a class="btn-request-style js-material-cta" href="#" target="_blank" rel="noopener">
            <i data-lucide="message-circle" class="icon-18"></i>
            <span>Request Physical Brick Sample</span>
          </a>
          <button class="btn btn--outline modal-close" type="button">
            <span>Dismiss</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- ==========================================================================
       SITE FOOTER
       ========================================================================== -->
  <footer class="site-footer">
    <div class="footer-watermark" aria-hidden="true">E-ZAINCO</div>

    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <a class="brand" href="index.php">
            <img src="assets/logo/ezainco-brick-logo.png" alt="E-ZAINCO BRICK Logo" class="brand__logo-img" style="height:52px;" />
          </a>
          <p class="text-muted" style="font-size:0.925rem; line-height: 1.65; max-width: 320px;">
            A premier brick manufacturing factory and architectural masonry practice. Engineering high-strength Compressed Earth Bricks, structural facing masonry, and turnkey brick builds across Nigeria and diaspora commissions.
          </p>
          <div style="display:flex; align-items:center; gap:0.75rem; margin-top:0.5rem;">
            <span class="watermark-badge">
              <i data-lucide="shield-check" class="icon-14"></i>
              <span>ISO-Standard Compressive Testing</span>
            </span>
          </div>

          <!-- Social Links -->
          <div class="footer-social-row" aria-label="Follow E-ZAINCO BRICK on Social Media">
            <a class="footer-social-btn social-instagram" href="https://instagram.com" target="_blank" rel="noopener" aria-label="E-ZAINCO on Instagram" title="Follow on Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a class="footer-social-btn social-whatsapp" href="https://wa.me/2347014093037?text=Hello%20E-zainco%20Brick,%20I'd%20like%20to%20make%20an%20inquiry%20about%20a%20project..." target="_blank" rel="noopener" aria-label="Chat with E-ZAINCO on WhatsApp" title="Chat on WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
            <a class="footer-social-btn social-facebook" href="https://facebook.com" target="_blank" rel="noopener" aria-label="E-ZAINCO on Facebook" title="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a class="footer-social-btn social-linkedin" href="https://linkedin.com" target="_blank" rel="noopener" aria-label="E-ZAINCO on LinkedIn" title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Navigation</h4>
          <ul class="footer-links">
            <li><a href="index.php">Home</a></li>
            <li><a href="services.php">Brick Services</a></li>
            <li><a href="catalog.php">Brick Catalog</a></li>
            <li><a href="about.php">About Factory</a></li>
            <li><a href="journal.php">Masonry Journal</a></li>
            <li><a href="contact.php">Request Quote</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Brick Capabilities</h4>
          <ul class="footer-links">
            <li><a href="services.php#bulk-supply">Bulk Brick Supply</a></li>
            <li><a href="services.php#masonry">Structural Masonry</a></li>
            <li><a href="services.php#cladding">Exposed Brick Cladding</a></li>
            <li><a href="services.php#perimeter">Perimeter Fencing &amp; Paving</a></li>
            <li><a href="contact.php#booking">Diaspora Project Oversight</a></li>
            <li><a href="journal.php">Technical Guides</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Factory &amp; Yard</h4>
          <ul class="footer-contact-list">
            <li class="footer-contact-item">
              <i data-lucide="map-pin"></i>
              <span>Suite 11, Municipal Plaza, Umez Eronini Street, Ikenegbu, Owerri, Imo State</span>
            </li>
            <li class="footer-contact-item">
              <i data-lucide="phone"></i>
              <a href="tel:+2347014093037" style="color:inherit; text-decoration:none;">+234 701 409 3037 (Direct Yard)</a>
            </li>
            <li class="footer-contact-item">
              <i data-lucide="message-circle"></i>
              <a href="https://wa.me/2347014093037" target="_blank" rel="noopener" style="color:inherit; text-decoration:none;">WhatsApp: +234 701 409 3037</a>
            </li>
            <li class="footer-contact-item">
              <i data-lucide="clock"></i>
              <span>Monday – Saturday: 8:00 AM – 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom__left">
          <span>&copy; 2026 E-ZAINCO BRICK. All rights reserved.</span>
          <span>•</span>
          <span>Building Strength. Creating Legacy.</span>
          <span>•</span>
          <span class="watermark-badge">
            <i data-lucide="sparkles" class="icon-12"></i>
            <span>Pure Brick Edition</span>
          </span>
        </div>

        <div class="footer-bottom__right">
          <a href="#site-nav" style="color:inherit; text-decoration:none; font-weight:600;">Back to top &uarr;</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Floating Actions -->
  <a class="floating-whatsapp" href="https://wa.me/2347014093037?text=Hello%20E-zainco%20Brick,%20I'd%20like%20to%20make%20an%20inquiry%20about%20brick%20supplies%20and%20masonry%20construction..." target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <i data-lucide="message-circle" class="icon-24"></i>
    <span class="floating-whatsapp-tooltip">Chat with E-Zainco Brick</span>
  </a>
  <button class="back-to-top" id="back-to-top" type="button" aria-label="Back to top">
    <i data-lucide="arrow-up" class="icon-20"></i>
  </button>

  <script src="js/main.js"></script>
</body>
</html>
