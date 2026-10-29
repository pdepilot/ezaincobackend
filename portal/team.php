<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#F5F8F5">
  <title>E-ZAINCO BRICK — Team</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/admin.css">
  <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js" defer></script>
  <script src="js/admin.js" defer></script>
  <!-- Favicon Icons -->
  <link rel="icon" type="image/png" href="../assets/favicon-icons/camera_alt_45dp_E3E3E3.png">
  <link rel="icon" type="image/png" sizes="45x45" href="../assets/favicon-icons/push_pin_45dp_E3E3E3.png">
  <link rel="apple-touch-icon" href="../assets/favicon-icons/camera_alt_45dp_E3E3E3.png">
</head>
<body>
<div class="scrim" id="scrim"></div>
<aside class="sidebar" id="sidebar">
  <div class="brand">
    <a href="dashboard.php" class="brand-link" title="E-ZAINCO BRICK Operations Portal">
      <img src="../assets/logo/ezainco-brick-logo.png" alt="E-ZAINCO BRICK Logo" class="brand-logo-img">
      <div class="brand-copy">
        <strong>E-ZAINCO BRICK</strong>
        <small>OPERATIONS PORTAL</small>
      </div>
    </a>
    <button class="icon-btn sidebar-close" id="sidebarClose" aria-label="Close menu"><i data-lucide="x"></i></button>
  </div>
  <div class="workspace"><span class="workspace-dot"></span><div><b>Factory &amp; Site Operations</b><small>Pure Brick Architecture &amp; Masonry</small></div><i data-lucide="chevrons-up-down"></i></div>
  <nav class="nav" id="nav">
    <p class="nav-caption">OVERVIEW</p>
    <a class="nav-link" href="dashboard.php" data-page="dashboard"><i data-lucide="layout-dashboard"></i><span>Dashboard</span></a>
    <a class="nav-link" href="analytics.php" data-page="analytics"><i data-lucide="chart-no-axes-combined"></i><span>Analytics</span></a>
    <p class="nav-caption">STUDIO CONTENT</p>
    <a class="nav-link" href="projects.php" data-page="projects"><i data-lucide="panels-top-left"></i><span>Projects & Portfolio</span><em id="count-projects">0</em></a>
    <a class="nav-link" href="journal.php" data-page="journal"><i data-lucide="notebook-pen"></i><span>Journal / Blog</span></a>
    <a class="nav-link" href="services.php" data-page="services"><i data-lucide="armchair"></i><span>Services</span></a>
    <a class="nav-link" href="pages.php" data-page="pages"><i data-lucide="files"></i><span>Website Pages</span></a>
    <a class="nav-link" href="homepage.php" data-page="homepage"><i data-lucide="panorama"></i><span>Homepage & Hero</span></a>
    <p class="nav-caption">CLIENT EXPERIENCE</p>
    <a class="nav-link" href="consultations.php" data-page="consultations"><i data-lucide="calendar-check"></i><span>Consultations</span><em id="count-consultations">0</em></a>
    <a class="nav-link" href="boq.php" data-page="boq"><i data-lucide="clipboard-list"></i><span>Project briefs / BOQ</span></a>
    <a class="nav-link active" href="team.php" data-page="team"><i data-lucide="users"></i><span>Team</span></a>
    <a class="nav-link" href="testimonials.php" data-page="testimonials"><i data-lucide="message-square-quote"></i><span>Testimonials</span></a>
    <a class="nav-link" href="faqs.php" data-page="faqs"><i data-lucide="circle-help"></i><span>FAQs</span></a>
    <a class="nav-link" href="materials.php" data-page="materials"><i data-lucide="layers"></i><span>Materials library</span></a>
    <a class="nav-link" href="whatsapp.php" data-page="whatsapp"><i data-lucide="messages-square"></i><span>WhatsApp enquiries</span></a>
    <p class="nav-caption">WORKSPACE</p>
    <a class="nav-link" href="profile.php" data-page="profile"><i data-lucide="user-round"></i><span>Admin profile</span></a>
    <a class="nav-link" href="settings.php" data-page="settings"><i data-lucide="settings-2"></i><span>Settings</span></a>
  </nav>
  <div class="sidebar-bottom"><div class="help-card"><span class="help-icon"><i data-lucide="life-buoy"></i></span><div><b>Need a hand?</b><small>View the setup guide</small></div><button class="icon-btn" id="helpBtn" aria-label="Setup guide"><i data-lucide="arrow-up-right"></i></button></div><div class="admin-mini"><div class="avatar"><img src="../assets/logo/ezainco-brick-logo.png" alt="Admin" style="width:100%;height:100%;object-fit:contain;background:#fff;"></div><div class="admin-meta"><b id="sideAdminName">Operations Admin</b><small>Plant &amp; Site Manager</small></div><button class="icon-btn" id="profileShortcut" aria-label="Profile"><i data-lucide="ellipsis"></i></button></div></div>
</aside>
<main class="main">
  <header class="topbar"><div class="top-left"><button class="icon-btn menu-btn" id="menuBtn" aria-label="Open menu"><i data-lucide="menu"></i></button><button class="icon-btn collapse-btn" id="collapseBtn" aria-label="Collapse sidebar"><i data-lucide="panel-left"></i></button><div class="crumbs"><span>Workspace</span><i data-lucide="chevron-right"></i><b id="crumbTitle">Team</b></div></div><div class="top-actions"><div class="live-pill"><span></span> All systems ready</div><button class="icon-btn theme-btn" id="themeBtn" aria-label="Toggle theme"><i data-lucide="moon"></i></button><button class="icon-btn" id="notificationsBtn" aria-label="Notifications"><i data-lucide="bell"></i><span class="notification-dot"></span></button><div class="top-user"><div class="avatar"><img src="../assets/logo/ezainco-brick-logo.png" alt="Admin" style="width:100%;height:100%;object-fit:contain;background:#fff;"></div><div><b id="topAdminName">Operations Admin</b><small>Plant &amp; Site Manager</small></div></div></div></header>
  <section class="page-wrap"><div id="pageContent"></div><footer class="footer"><span>© <span id="year"></span> E-ZAINCO BRICK Nigeria Ltd.</span><span>Building Strength. Creating Legacy. <i data-lucide="shield-check"></i></span></footer></section>
</main>
<div class="toast-region" id="toasts" aria-live="polite"></div>
<div class="modal-backdrop" id="modalBackdrop"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle"><header class="modal-head"><div><p class="eyebrow">CONTENT WORKSPACE</p><h2 id="modalTitle">Add item</h2></div><button class="icon-btn" id="modalClose" aria-label="Close"><i data-lucide="x"></i></button></header><form id="itemForm"><div id="formFields" class="form-grid"></div><div class="modal-actions"><button type="button" class="btn btn-quiet" id="cancelModal">Cancel</button><button class="btn btn-primary" type="submit"><i data-lucide="check"></i> Save changes</button></div></form></section></div>
</body></html>