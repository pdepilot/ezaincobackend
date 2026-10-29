/**
 * E-ZAINCO BRICK — Enterprise Portal Authentication System
 */
(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const CMS_KEY = 'ezainco_brick_cms_v1';
  const AUTH_KEY = 'brists_admin_auth'; // keep key compatible with portal dashboard
  const THEME_KEY = 'ezainco-theme';

  function icon(name) {
    return `<i data-lucide="${name}"></i>`;
  }

  function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  function toast(message, type = 'info') {
    const region = $('#toasts');
    if (!region) return;

    const el = document.createElement('div');
    el.className = `toast ${type}`;
    let iconName = 'info';
    if (type === 'success') iconName = 'check-circle';
    if (type === 'error') iconName = 'alert-circle';

    el.innerHTML = `${icon(iconName)} <span>${message}</span>`;
    region.appendChild(el);
    refreshIcons();

    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
      el.style.transition = 'all 0.25s ease';
      setTimeout(() => el.remove(), 260);
    }, 3500);
  }

  // --- Theme Controller ---
  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
    const btn = $('#themeToggle');
    if (btn) {
      btn.innerHTML = icon(theme === 'dark' ? 'sun' : 'moon');
      btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
    refreshIcons();
  }

  function toggleTheme() {
    const current = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(current);
  }

  // --- Password Visibility Toggle ---
  function initPasswordToggle() {
    const toggleBtn = $('#togglePassword');
    const pwdInput = $('#password');
    if (!toggleBtn || !pwdInput) return;

    toggleBtn.addEventListener('click', () => {
      const isPassword = pwdInput.type === 'password';
      pwdInput.type = isPassword ? 'text' : 'password';
      toggleBtn.innerHTML = icon(isPassword ? 'eye-off' : 'eye');
      toggleBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
      refreshIcons();
    });
  }

  // --- Quick Fill Demo Credentials ---
  function initDemoFill() {
    const btn = $('#btnFillDemo');
    const emailInput = $('#email');
    const pwdInput = $('#password');
    if (!btn || !emailInput || !pwdInput) return;

    btn.addEventListener('click', () => {
      emailInput.value = 'admin@ezaincobrick.com';
      pwdInput.value = 'ZaincoBrick2026!';
      toast('Demo credentials auto-filled: Engr. Chukwudi Zainco', 'info');
      
      const submitBtn = $('#submitBtn');
      if (submitBtn) submitBtn.focus();
    });
  }

  // --- Form Submission & Simulated Authentication ---
  function initFormSubmit() {
    const form = $('#loginForm');
    const submitBtn = $('#submitBtn');
    const formWrap = $('.form-wrapper');

    if (!form || !submitBtn) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = $('#email').value.trim();
      const password = $('#password').value.trim();
      const remember = $('#rememberMe')?.checked || false;

      // Validation
      if (!email || !password) {
        if (formWrap) {
          formWrap.classList.remove('shake');
          void formWrap.offsetWidth; // trigger reflow
          formWrap.classList.add('shake');
        }
        toast('Please enter both your work email and password.', 'error');
        return;
      }

      // Start Loading State
      submitBtn.classList.add('loading');

      setTimeout(() => {
        const authData = {
          authenticated: true,
          email: email,
          name: 'Engr. Chukwudi Zainco',
          role: 'Managing Director & Chief Engineer',
          loginTime: new Date().toISOString(),
          remember: remember
        };

        if (remember) {
          localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
        } else {
          sessionStorage.setItem(AUTH_KEY, JSON.stringify(authData));
        }

        toast('Access granted. Initializing operations command...', 'success');

        setTimeout(() => {
          window.location.href = 'dashboard.php';
        }, 650);
      }, 750);
    });
  }

  // --- Forgot Password Modal ---
  function initForgotModal() {
    const trigger = $('#forgotPasswordLink');
    const modal = $('#forgotModal');
    const closeBtn = $('#closeForgotModal');
    const cancelBtn = $('#cancelForgot');
    const forgotForm = $('#forgotForm');
    const resetEmailInput = $('#resetEmail');

    if (!modal) return;

    function openModal() {
      modal.classList.add('open');
      const curEmail = $('#email')?.value || '';
      if (resetEmailInput && curEmail) {
        resetEmailInput.value = curEmail;
      }
      if (resetEmailInput) resetEmailInput.focus();
      refreshIcons();
    }

    function closeModal() {
      modal.classList.remove('open');
    }

    if (trigger) trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    if (forgotForm) {
      forgotForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const em = resetEmailInput?.value.trim();
        if (!em) {
          toast('Please enter your authorized administrator email.', 'error');
          return;
        }
        closeModal();
        toast(`Password reset instructions sent to ${em}`, 'success');
      });
    }
  }

  function init() {
    // 1. Initialize Theme
    const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
    setTheme(savedTheme);

    const themeBtn = $('#themeToggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', toggleTheme);
    }

    // 2. Setup Year in Copyright
    const yearEl = $('#currentYear');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    // 3. Initialize Interactive Features
    initPasswordToggle();
    initDemoFill();
    initFormSubmit();
    initForgotModal();
    refreshIcons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
