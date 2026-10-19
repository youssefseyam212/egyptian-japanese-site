/**
* Template Name: Append
* Template URL: https://bootstrapmade.com/append-bootstrap-website-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const scrollBehavior = () => reducedMotion.matches ? 'auto' : 'smooth';

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  const body = document.body;

  function toggleScrolled() {
    body.classList.toggle('scrolled', window.scrollY > 100);
  }

  document.addEventListener('scroll', toggleScrolled, { passive: true });
  toggleScrolled();

  /**
   * Mobile nav: a real button, closes on link tap, backdrop tap and Escape
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  const mobileNavIcon = mobileNavToggleBtn.querySelector('i');
  const navmenu = document.querySelector('#navmenu');

  function setMobileNav(open) {
    body.classList.toggle('mobile-nav-active', open);
    mobileNavIcon.classList.toggle('bi-list', !open);
    mobileNavIcon.classList.toggle('bi-x', open);
    mobileNavToggleBtn.setAttribute('aria-expanded', String(open));
  }

  function labelMobileNavToggle() {
    mobileNavToggleBtn.setAttribute('aria-label', document.documentElement.lang === 'ar' ? 'القائمة' : 'Menu');
  }

  mobileNavToggleBtn.addEventListener('click', () => {
    setMobileNav(!body.classList.contains('mobile-nav-active'));
  });

  document.querySelectorAll('#navmenu a').forEach(link => {
    link.addEventListener('click', () => setMobileNav(false));
  });

  // Tapping the dimmed backdrop (the nav itself, outside the list) closes the menu
  navmenu.addEventListener('click', (e) => {
    if (e.target === navmenu) setMobileNav(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && body.classList.contains('mobile-nav-active')) {
      setMobileNav(false);
      mobileNavToggleBtn.focus();
    }
  });

  document.addEventListener('languagechange', labelMobileNavToggle);
  labelMobileNavToggle();

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    scrollTop.classList.toggle('active', window.scrollY > 100);
  }

  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
  });

  document.addEventListener('scroll', toggleScrollTop, { passive: true });
  toggleScrollTop();

  /**
   * Animation on scroll. Started straight away (not on window load) so content
   * below the fold is never held back waiting for images.
   */
  AOS.init({
    duration: 500,
    easing: 'ease-out-cubic',
    once: true,
    mirror: false,
    disable: () => reducedMotion.matches
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  // Pick up translated captions when the language changes
  document.addEventListener('languagechange', () => glightbox.reload());

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function() {
    if (!window.location.hash) return;
    const section = document.querySelector(window.location.hash);
    if (!section) return;
    const scrollMarginTop = parseInt(getComputedStyle(section).scrollMarginTop) || 0;
    window.scrollTo({ top: section.offsetTop - scrollMarginTop, behavior: scrollBehavior() });
  });

  /**
   * Navmenu Scrollspy
   */
  const navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    const position = window.scrollY + 200;
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      const section = document.querySelector(navmenulink.hash);
      if (!section) return;
      const inView = position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight);
      navmenulink.classList.toggle('active', inView);
    });
  }

  document.addEventListener('scroll', navmenuScrollspy, { passive: true });
  navmenuScrollspy();

})();
