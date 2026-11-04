/**
 * BACS3233 Computer Game Design Portfolio - Interactive Script
 * Dash Quack Studio Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isExpanded = navMenu.classList.contains('open');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('open');
      }
    });
  }

  // Tab Component System
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const container = btn.closest('.tabs-container') || document;
      const targetId = btn.getAttribute('data-tab');

      // Deactivate all sibling buttons
      container.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
      // Deactivate all sibling panes
      container.querySelectorAll('.tab-pane').forEach((p) => p.classList.remove('active'));

      // Activate clicked button and target pane
      btn.classList.add('active');
      const targetPane = container.querySelector(`#${targetId}`);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  // Active Nav Link highlighting based on current page path
  const currentPath = window.location.pathname;
  const pageName = currentPath.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach((link) => {
    const linkHref = link.getAttribute('href');
    if (linkHref === pageName || (pageName === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    }
  });

  console.log('🎮 BACS3233 Game Design Portfolio Initialized: Dash Quack Studio');
});
