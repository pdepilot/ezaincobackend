<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Masonry Journal &amp; Brick Guides — E-ZAINCO BRICK | Owerri, Nigeria</title>
  <meta name="description" content="Technical articles on pure brick construction in Nigeria, compressive strength testing, calculating brick quantities, comparing clay vs. CEB blocks, and masonry cost analysis." />
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
  <link rel="stylesheet" href="css/style.css" />
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
        <a class="nav-link" href="catalog.php">Catalog</a>
      </nav>

      <!-- Center Brand Logo -->
      <a class="brand" href="index.php" aria-label="E-ZAINCO BRICK Home">
        <img src="assets/logo/ezainco-brick-logo.png" alt="E-ZAINCO BRICK Logo" class="brand__logo-img" />
      </a>

      <div class="nav-right">
        <!-- Nav Links Right -->
        <nav class="nav-links nav-links--right" aria-label="Primary Navigation Right">
          <a class="nav-link" href="about.php">About</a>
          <a class="nav-link active" href="journal.php">Journal</a>
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
      <li><a class="mobile-nav__link" href="catalog.php"><span>Catalog</span> <i data-lucide="arrow-right" class="icon-16"></i></a></li>
      <li><a class="mobile-nav__link" href="about.php"><span>About</span> <i data-lucide="arrow-right" class="icon-16"></i></a></li>
      <li><a class="mobile-nav__link active" href="journal.php"><span>Journal</span> <i data-lucide="arrow-right" class="icon-16"></i></a></li>
      <li><a class="mobile-nav__link" href="contact.php"><span>Contact</span> <i data-lucide="arrow-right" class="icon-16"></i></a></li>
    </ul>

    <div class="mobile-nav__actions">
      <a class="btn btn--primary" href="contact.php#booking">
        <span>Request Quote</span>
        <i data-lucide="arrow-up-right"></i>
      </a>
      <a class="btn btn--glacier" href="https://wa.me/2347014093037?text=Hello%20E-zainco%20Brick,%20I'd%20like%20to%20learn%20more%20about%20your%20brick%20guides..." target="_blank" rel="noopener">
        <i data-lucide="message-circle"></i>
        <span>Chat on WhatsApp</span>
      </a>
    </div>

    <div class="mobile-nav__footer">
      <div>
        <p style="font-weight:700; color:var(--text-heading); font-size:0.9rem;">Factory Yard</p>
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
          <span>Journal</span>
        </div>
        <span class="kicker">Brick Engineering Editorial &amp; Technical Insights</span>
        <h1 class="page-hero__title">Guides for Discerning Property Builders.</h1>
        <p class="page-hero__lead">
          Essential articles on structural brick masonry, compressive strength calculations, cost drivers in Nigerian construction, and climate-resilient building engineering.
        </p>
      </div>
    </section>

    <!-- ==========================================================================
         ARTICLES GRID
         ========================================================================== -->
    <section class="section" style="padding-top:4rem;">
      <div class="container">
        <div class="journal-grid" data-reveal>
          <!-- Article 1 -->
          <article class="journal-card">
            <a class="journal-card__thumb" href="contact.php#booking" aria-label="Read How to Plan a Pure Brick Construction Project">
              <img class="journal-card__img" src="assets/image-web/south8.jpeg" alt="How to Plan a Pure Brick Construction Project in Nigeria" loading="lazy" />
            </a>
            <div class="journal-card__body">
              <span class="journal-card__date">October 2026 • 6 Min Read</span>
              <h3 class="journal-card__title">
                <a href="contact.php#booking" style="color:inherit; text-decoration:none;">How to Plan a Pure Brick Construction Project in Nigeria</a>
              </h3>
              <p class="journal-card__excerpt">
                Why load-bearing masonry saves up to 35% on building costs by eliminating column formwork, wall plastering, screeding, and recurrent repainting.
              </p>
              <a class="btn btn--ghost" href="contact.php#booking" style="margin-top:auto; padding-left:0;">
                <span>Read Full Guide</span>
                <i data-lucide="arrow-right"></i>
              </a>
            </div>
          </article>

          <!-- Article 2 -->
          <article class="journal-card">
            <a class="journal-card__thumb" href="contact.php#booking" aria-label="Read Sandcrete vs Compressed Earth Bricks">
              <img class="journal-card__img" src="assets/image-web/south9.jpeg" alt="Sandcrete Blocks vs Compressed Earth Bricks in Nigeria" loading="lazy" />
            </a>
            <div class="journal-card__body">
              <span class="journal-card__date">September 2026 • 7 Min Read</span>
              <h3 class="journal-card__title">
                <a href="contact.php#booking" style="color:inherit; text-decoration:none;">Sandcrete Blocks vs. Compressed Earth Bricks: The 2026 Durability Breakdown</a>
              </h3>
              <p class="journal-card__excerpt">
                A laboratory compressive test comparison: 2.5 MPa hollow sandcrete vs. 10.5 MPa hydraulic stabilized earth bricks, water porosity, and generational lifespan.
              </p>
              <a class="btn btn--ghost" href="contact.php#booking" style="margin-top:auto; padding-left:0;">
                <span>Read Full Guide</span>
                <i data-lucide="arrow-right"></i>
              </a>
            </div>
          </article>

          <!-- Article 3 -->
          <article class="journal-card">
            <a class="journal-card__thumb" href="contact.php#booking" aria-label="Read Calculating Brick Quantities for a 4-Bedroom Duplex">
              <img class="journal-card__img" src="assets/image-web/south10.jpeg" alt="Calculating Brick Quantities for a 4-Bedroom Duplex" loading="lazy" />
            </a>
            <div class="journal-card__body">
              <span class="journal-card__date">August 2026 • 5 Min Read</span>
              <h3 class="journal-card__title">
                <a href="contact.php#booking" style="color:inherit; text-decoration:none;">Calculating Brick Quantities for a 4-Bedroom Duplex</a>
              </h3>
              <p class="journal-card__excerpt">
                A step-by-step quantity takeoff guide: converting wall square meters into stretcher and header unit counts with realistic breakage allowances.
              </p>
              <a class="btn btn--ghost" href="contact.php#booking" style="margin-top:auto; padding-left:0;">
                <span>Read Full Guide</span>
                <i data-lucide="arrow-right"></i>
              </a>
            </div>
          </article>

          <!-- Article 4 -->
          <article class="journal-card">
            <a class="journal-card__thumb" href="contact.php#booking" aria-label="Read English Bond vs Flemish Bond">
              <img class="journal-card__img" src="assets/image-web/south11.jpeg" alt="English Bond vs Flemish Bond in Bricklaying" loading="lazy" />
            </a>
            <div class="journal-card__body">
              <span class="journal-card__date">July 2026 • 6 Min Read</span>
              <h3 class="journal-card__title">
                <a href="contact.php#booking" style="color:inherit; text-decoration:none;">English Bond vs. Flemish Bond: Structural Strength vs. Facade Aesthetics</a>
              </h3>
              <p class="journal-card__excerpt">
                Which masonry bonding pattern to specify for heavy perimeter security walls, double-skin cavities, and decorative residential facades.
              </p>
              <a class="btn btn--ghost" href="contact.php#booking" style="margin-top:auto; padding-left:0;">
                <span>Read Full Guide</span>
                <i data-lucide="arrow-right"></i>
              </a>
            </div>
          </article>

          <!-- Article 5 -->
          <article class="journal-card">
            <a class="journal-card__thumb" href="contact.php#booking" aria-label="Read Combating Efflorescence in Tropical Brickwork">
              <img class="journal-card__img" src="assets/image-web/south12.jpeg" alt="Combating Efflorescence in Tropical Brickwork" loading="lazy" />
            </a>
            <div class="journal-card__body">
              <span class="journal-card__date">June 2026 • 5 Min Read</span>
              <h3 class="journal-card__title">
                <a href="contact.php#booking" style="color:inherit; text-decoration:none;">Combating Efflorescence &amp; Moisture in Tropical Brickwork</a>
              </h3>
              <p class="journal-card__excerpt">
                How anti-efflorescence polymer mortars and silane hydrophobic impregnators prevent white salt stains and dampness during southern Nigeria's monsoon season.
              </p>
              <a class="btn btn--ghost" href="contact.php#booking" style="margin-top:auto; padding-left:0;">
                <span>Read Full Guide</span>
                <i data-lucide="arrow-right"></i>
              </a>
            </div>
          </article>

          <!-- Article 6 -->
          <article class="journal-card">
            <a class="journal-card__thumb" href="contact.php#booking" aria-label="Read Exposed Brick Facade Cladding">
              <img class="journal-card__img" src="assets/image-web/south13.jpeg" alt="Exposed Brick Facade Cladding on Concrete Buildings" loading="lazy" />
            </a>
            <div class="journal-card__body">
              <span class="journal-card__date">May 2026 • 6 Min Read</span>
              <h3 class="journal-card__title">
                <a href="contact.php#booking" style="color:inherit; text-decoration:none;">Exposed Brick Cladding: Transforming Existing Concrete Buildings</a>
              </h3>
              <p class="journal-card__excerpt">
                How 20–30mm extruded terracotta brick slips and mechanical stainless ties give existing concrete structures a prestigious exposed brick appearance.
              </p>
              <a class="btn btn--ghost" href="contact.php#booking" style="margin-top:auto; padding-left:0;">
                <span>Read Full Guide</span>
                <i data-lucide="arrow-right"></i>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         FEATURED COVER STORY / DEEP-DIVE
         ========================================================================== -->
    <section class="section" style="background:var(--bg-surface); border-top:1px solid var(--border-subtle); border-bottom:1px solid var(--border-subtle);">
      <div class="container">
        <div class="split-grid--editorial" data-reveal>
          <div>
            <span class="chip chip--accent" style="margin-bottom:1rem;">
              <i data-lucide="award"></i>
              <span>Editor's Engineering Feature</span>
            </span>
            <h2 class="h-section" style="margin-bottom:1.25rem;">
              <a href="contact.php#booking" style="color:inherit; text-decoration:none;">The Masonry Renaissance: Why Pure Brick Architecture is Defining Modern Nigeria.</a>
            </h2>
            <p class="lead" style="margin-bottom:1.5rem;">
              For decades, Nigerian construction relied on cheap sandcrete blocks coated with layers of plaster that peel after two rainy seasons. Today, visionary developers and diaspora homeowners are returning to pure brick masonry: honest, load-bearing, naturally cool, and indestructible.
            </p>
            <div style="background:var(--bg-secondary); padding:1.75rem; border-radius:var(--radius-md); border-left:4px solid var(--accent-gold); margin-bottom:1.5rem;">
              <p style="font-family:var(--font-display); font-size:1.25rem; font-style:italic; color:var(--text-heading); line-height:1.6;">
                "A sandcrete building starts deteriorating the day you hand it over. A genuine brick building gets stronger and more distinguished with every passing decade."
              </p>
              <span style="font-size:0.8rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted); display:block; margin-top:0.5rem;">— Chukwudi Zainco, Chief Masonry Engineer</span>
            </div>
            <div style="display:flex; gap:1rem; flex-wrap:wrap;">
              <a class="btn btn--primary" href="contact.php#booking">
                <span>Request Brick Supply Quote</span>
                <i data-lucide="arrow-right"></i>
              </a>
              <a class="btn btn--secondary" href="catalog.php">
                <span>Explore Brick Catalog</span>
                <i data-lucide="arrow-up-right"></i>
              </a>
            </div>
          </div>

          <a class="media-frame" href="catalog.php" style="aspect-ratio:4/4.5; display:block;" aria-label="Read Pure Brick Architecture in Owerri">
            <img src="assets/image-web/south1.jpeg" alt="Pure Brick Architecture in Owerri, Imo State" style="width:100%; height:100%; object-fit:cover;" />
          </a>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         2026 BRICK CONSTRUCTION & BOQ HANDBOOK (LEAD MAGNET)
         ========================================================================== -->
    <section class="section" style="border-bottom:1px solid var(--border-subtle);">
      <div class="container">
        <div class="lead-magnet-card" data-reveal>
          <div>
            <span class="kicker">Complimentary Factory Publication</span>
            <h2 class="h-section" style="margin:0.75rem 0 1rem;">The 2026 Nigeria Brick Construction &amp; BOQ Handbook.</h2>
            <p class="lead" style="margin-bottom:1.5rem;">
              A 36-page technical manual for builders, architects, and diaspora developers planning pure brick construction across Owerri, Port Harcourt, Enugu, and Lagos.
            </p>
            <ul class="service-card__deliverables" style="border:none; padding:0; margin-bottom:1.5rem;">
              <li><i data-lucide="check" class="text-accent"></i> Direct factory pallet pricing and flatbed haulage estimates</li>
              <li><i data-lucide="check" class="text-accent"></i> 10 critical tests to verify brick compressive load capacity on site</li>
              <li><i data-lucide="check" class="text-accent"></i> Bond pattern guide: English vs. Flemish vs. Interlocking blockwork</li>
            </ul>
            <div style="display:flex; gap:1rem; flex-wrap:wrap;">
              <a class="btn btn--glacier btn--lg" href="https://wa.me/2347014093037?text=Hello%20E-zainco%20Brick,%20please%20send%20me%20the%202026%20Brick%20Construction%20%26%20BOQ%20Handbook." target="_blank" rel="noopener">
                <i data-lucide="download"></i>
                <span>Request Handbook via WhatsApp</span>
              </a>
              <a class="btn btn--secondary btn--lg" href="contact.php#booking">
                <span>Request Immediate Quote</span>
              </a>
            </div>
          </div>

          <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:2rem; text-align:center; box-shadow:var(--shadow-sm);">
            <div style="width:64px; height:64px; border-radius:50%; background:var(--accent-gold-light); color:var(--accent-gold); display:flex; align-items:center; justify-content:center; margin:0 auto 1.25rem;">
              <i data-lucide="file-check" class="icon-32"></i>
            </div>
            <h3 style="font-family:var(--font-display); font-size:1.4rem;">Edition 2026 / Vol. 1</h3>
            <p class="text-muted" style="font-size:0.85rem; margin:0.5rem 0 1.25rem;">Direct digital download available for verified builders &amp; developers.</p>
            <span class="chip chip--accent" style="width:fit-content; margin:0 auto;">
              <i data-lucide="lock"></i>
              <span>Zero Spam Guarantee</span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         EDITORIAL ADVISORY FAQ
         ========================================================================== -->
    <section class="section" style="background:var(--bg-surface); border-bottom:1px solid var(--border-subtle);">
      <div class="container">
        <div class="sec-head sec-head--center" data-reveal>
          <span class="kicker">Editorial Advisory</span>
          <h2 class="h-section">Frequently Answered Brick Questions.</h2>
          <p class="text-muted" style="max-width:580px;">
            Technical insights on common dilemmas faced when selecting bricks and constructing in Nigeria.
          </p>
        </div>

        <div class="faq-grid" data-reveal>
          <div class="faq-item">
            <button class="faq-trigger" type="button" aria-expanded="false">
              <span>Is building with pure bricks cheaper than sandcrete blocks in Nigeria?</span>
              <i data-lucide="chevron-down" class="faq-icon"></i>
            </button>
            <div class="faq-body">
              <p>While the initial unit cost of a high-density brick may appear slightly higher than a low-quality sandcrete block, a pure brick building eliminates sand and cement plastering, exterior paint, and continuous maintenance. Overall project savings consistently average 20% to 35% at completion.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-trigger" type="button" aria-expanded="false">
              <span>Do brick homes stay cool during hot Nigerian dry seasons?</span>
              <i data-lucide="chevron-down" class="faq-icon"></i>
            </button>
            <div class="faq-body">
              <p>Yes. Bricks have high thermal mass, which means they absorb the intense afternoon heat slowly and prevent it from transferring indoors. At night, they release heat gradually, keeping indoor ambient temperatures significantly cooler than hollow block buildings.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-trigger" type="button" aria-expanded="false">
              <span>Can brick perimeter security walls withstand high wind and soil pressures?</span>
              <i data-lucide="chevron-down" class="faq-icon"></i>
            </button>
            <div class="faq-body">
              <p>Yes. When built with English bond masonry and reinforced intermediate brick piers every 3 meters, solid brick walls offer superior shear and wind resistance compared to brittle hollow sandcrete walls that commonly crack or tip over.</p>
            </div>
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
              <span>Engineering Advisory</span>
            </span>
            <h2 class="h-section">Have Specific Questions About Your Brick Build?</h2>
            <p>
              Our masonry engineers regularly consult with property developers and diaspora builders across Nigeria. Let's analyze your drawings and calculate your exact brick requirements.
            </p>
            <div class="conversion-band__actions">
              <a class="btn btn--glacier btn--lg" href="contact.php#booking">
                <span>Request Brick Supply Quote</span>
                <i data-lucide="arrow-up-right"></i>
              </a>
              <a class="btn btn--secondary btn--lg" href="https://wa.me/2347014093037?text=Hello%20E-zainco%20Brick,%20I'd%20like%20to%20discuss%20a%20brick%20project..." target="_blank" rel="noopener" style="color:#fff; border-color:rgba(255,255,255,0.4);">
                <i data-lucide="message-circle"></i>
                <span>Chat via WhatsApp (+234 701 409 3037)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

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
