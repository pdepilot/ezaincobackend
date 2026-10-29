<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#1a2b3d">
  <title>E-ZAINCO BRICK — Enterprise Portal Sign In | Factory &amp; Operations</title>
  <meta name="description" content="Sign in to the E-ZAINCO BRICK management portal for batch production, hydraulic CEB compression metrics, BOQ estimation, and nationwide site logistics.">

  <!-- Google Fonts: Cormorant Garamond & Manrope -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- Stylesheet -->
  <link rel="stylesheet" href="css/login.css">

  <!-- Lucide Icons & Authentication Logic -->
  <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js" defer></script>
  <script src="js/login.js" defer></script>

  <!-- Favicon Icons -->
  <link rel="icon" type="image/png" href="../assets/logo/ezainco-brick-logo.png">
  <link rel="apple-touch-icon" href="../assets/logo/ezainco-brick-logo.png">
</head>
<body>

  <main class="login-shell">
    
    <!-- ==========================================================================
         LEFT SHOWCASE PANE (Architectural Masonry & Operational Telemetry)
         ========================================================================== -->
    <aside class="login-visual" aria-label="E-ZAINCO BRICK Factory Showcase">
      <div class="visual-bg-wrapper">
        <img class="visual-bg" src="../assets/image-web/south1.jpeg" alt="The Civic Brick Residence by E-ZAINCO BRICK">
      </div>
      <div class="visual-scrim" aria-hidden="true"></div>
      <div class="visual-mesh" aria-hidden="true"></div>
      <div class="visual-glow" aria-hidden="true"></div>

      <!-- Top Brand Header -->
      <div class="visual-top">
        <div class="visual-brand">
          <img src="../assets/logo/ezainco-brick-logo.png" alt="E-ZAINCO BRICK Logo" class="visual-brand__logo">
          <div class="visual-brand__text">
            <span class="visual-brand__title">E-ZAINCO BRICK</span>
            <span class="visual-brand__subtitle">OPERATIONS &amp; LOGISTICS PORTAL</span>
          </div>
        </div>
      </div>

      <!-- Center Narrative & Telemetry Metrics -->
      <div class="visual-bottom">
        <div class="visual-content">
          <div class="visual-status-pill">
            <span class="pulse-dot"></span>
            <span>Factory &amp; Site Operations • Live</span>
          </div>
          <h2 class="visual-headline">
            Engineered Density. <br><span>Built for Legacy.</span>
          </h2>
          <p class="visual-lead">
            Orchestrating hydraulic soil stabilization, precision kiln firing schedules, automated BOQ calculations, and nationwide site delivery from Owerri, Imo State.
          </p>
        </div>

        <!-- Real-Time Metrics Strip -->
        <div class="visual-stats-grid">
          <div class="visual-stat-item">
            <span class="visual-stat-num">12.5 MPa</span>
            <span class="visual-stat-label">Compressive Strength</span>
          </div>
          <div class="visual-stat-item">
            <span class="visual-stat-num">100% Solid</span>
            <span class="visual-stat-label">Earth &amp; Clay Masonry</span>
          </div>
          <div class="visual-stat-item">
            <span class="visual-stat-num">140+ Sites</span>
            <span class="visual-stat-label">Delivered Nationwide</span>
          </div>
        </div>

        <!-- Footer Meta Seals -->
        <div class="visual-meta">
          <span><i data-lucide="shield-check"></i> 256-Bit TLS Enterprise Encryption</span>
          <span><i data-lucide="map-pin"></i> Ikenegbu Factory Yard, Owerri</span>
        </div>
      </div>
    </aside>

    <!-- ==========================================================================
         RIGHT AUTHENTICATION FORM PANE
         ========================================================================== -->
    <section class="login-form-panel">
      
      <!-- Top Action Navigation -->
      <nav class="form-header-nav" aria-label="Portal Navigation">
        <a href="../index.php" class="nav-back-link" title="Return to public website">
          <i data-lucide="arrow-left"></i>
          <span>Return to Website</span>
        </a>

        <div class="nav-actions-right">
          <div class="system-status-indicator">
            <span class="live-dot"></span>
            <span>All Systems Operational</span>
          </div>

          <button class="theme-toggle-btn" id="themeToggle" type="button" aria-label="Toggle Light and Dark Mode" title="Toggle Theme">
            <i data-lucide="moon"></i>
          </button>
        </div>
      </nav>

      <!-- Main Form Container -->
      <div class="form-wrapper">
        
        <!-- Mobile Brand (Visible only on mobile/tablet) -->
        <div class="form-badge-mobile">
          <img src="../assets/logo/ezainco-brick-logo.png" alt="E-ZAINCO BRICK Logo">
          <div>
            <strong style="color:var(--heading); font-size:16px; letter-spacing:1px; display:block;">E-ZAINCO BRICK</strong>
            <small style="color:var(--accent); font-weight:700; letter-spacing:1.2px; font-size:10px; text-transform:uppercase;">OPERATIONS PORTAL</small>
          </div>
        </div>

        <div class="form-title-group">
          <span class="form-eyebrow"><i data-lucide="shield" style="width:14px; height:14px;"></i> SECURE ACCESS PROTOCOL</span>
          <h1>Welcome back</h1>
          <p>Authenticate with your credentials to manage brick production, dispatch manifests, and client estimations.</p>
        </div>

        <!-- One-Click Demo Credentials Quick Fill -->
        <div class="demo-badge-wrap">
          <div class="demo-info">
            <b><i data-lucide="sparkles"></i> One-Click Demo Access</b>
            <small>Engr. Chukwudi Zainco • Managing Director</small>
          </div>
          <button type="button" class="btn-fill-demo" id="btnFillDemo">Auto-fill</button>
        </div>

        <!-- Sign In Form -->
        <form class="login-form" id="loginForm" novalidate>
          
          <!-- Email / Username -->
          <div class="input-block">
            <div class="input-label-row">
              <label for="email">Work Email Address</label>
            </div>
            <div class="input-field-wrap">
              <i data-lucide="mail" class="field-icon"></i>
              <input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="name@ezaincobrick.com" 
                autocomplete="email" 
                required 
                autofocus
              >
            </div>
          </div>

          <!-- Password -->
          <div class="input-block">
            <div class="input-label-row">
              <label for="password">Security Password</label>
              <a href="#forgot" id="forgotPasswordLink">Forgot password?</a>
            </div>
            <div class="input-field-wrap">
              <i data-lucide="lock" class="field-icon"></i>
              <input 
                id="password" 
                name="password" 
                type="password" 
                placeholder="••••••••••••" 
                autocomplete="current-password" 
                required
              >
              <button type="button" class="field-btn" id="togglePassword" aria-label="Toggle password visibility">
                <i data-lucide="eye"></i>
              </button>
            </div>
          </div>

          <!-- Remember Me Checkbox -->
          <div class="remember-row">
            <label class="checkbox-label">
              <input type="checkbox" id="rememberMe" name="rememberMe" checked>
              <span>Keep this device authenticated</span>
            </label>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="btn-submit" id="submitBtn">
            <span class="btn-text">Authenticate &amp; Enter Portal</span>
            <i data-lucide="arrow-right"></i>
            <span class="spinner" aria-hidden="true"></span>
          </button>
        </form>

        <!-- Footer Trust Seals -->
        <div class="form-footer-seals">
          <div class="seal-item">
            <i data-lucide="lock"></i>
            <span>TLS 1.3 Certified</span>
          </div>
          <div class="seal-item">
            <i data-lucide="key-round"></i>
            <span>RBAC Protected</span>
          </div>
          <div class="seal-item">
            <i data-lucide="database"></i>
            <span>Zero Data Leakage</span>
          </div>
        </div>

        <p class="form-footer-copyright">
          &copy; <span id="currentYear">2026</span> E-ZAINCO BRICK Nigeria Ltd. All rights reserved.
        </p>

      </div>
      <div></div>
    </section>

  </main>

  <!-- Interactive Toast Notification Container -->
  <div class="toast-region" id="toasts" aria-live="polite"></div>

  <!-- Forgot Password Modal -->
  <div class="modal-overlay" id="forgotModal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
    <div class="modal-card">
      <div class="modal-header">
        <div>
          <span style="font-size:10px; font-weight:800; letter-spacing:1.5px; color:var(--accent); text-transform:uppercase;">CREDENTIAL RECOVERY</span>
          <h3 id="modalTitle">Reset Access Credentials</h3>
        </div>
        <button class="modal-close-btn" id="closeForgotModal" type="button" aria-label="Close modal">
          <i data-lucide="x"></i>
        </button>
      </div>

      <div class="modal-body">
        <p>
          Enter the corporate administrator email associated with your E-ZAINCO BRICK operations account. A time-limited reset key will be dispatched immediately.
        </p>

        <form id="forgotForm">
          <div class="input-block">
            <label for="resetEmail" style="font-size:12px; font-weight:700; color:var(--heading);">Administrator Email</label>
            <div class="input-field-wrap">
              <i data-lucide="mail" class="field-icon"></i>
              <input id="resetEmail" type="email" placeholder="name@ezaincobrick.com" required>
            </div>
          </div>

          <div class="modal-actions">
            <button type="button" class="btn-secondary" id="cancelForgot">Cancel</button>
            <button type="submit" class="btn-modal-submit">Dispatch Reset Key</button>
          </div>
        </form>
      </div>
    </div>
  </div>

</body>
</html>
