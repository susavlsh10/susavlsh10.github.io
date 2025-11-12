// Custom JavaScript for modern interactions
(function() {
  'use strict';

  // Add fade-in animation on scroll
  function addScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe cards and sections
    const elements = document.querySelectorAll(
      '.publication-card, .interest-card, .experience-item, .project-card'
    );
    
    elements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
      observer.observe(el);
    });
  }

  // Add hover effect enhancements
  function enhanceButtons() {
    const buttons = document.querySelectorAll('.btn-pub, .btn--research, .btn--download');
    buttons.forEach(btn => {
      btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
      });
      btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#0') {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }

  // Add loading class removal for smooth page load
  function handlePageLoad() {
    document.body.classList.add('loaded');
  }

  // Initialize all functions when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      addScrollAnimations();
      enhanceButtons();
      initSmoothScroll();
      handlePageLoad();
    });
  } else {
    addScrollAnimations();
    enhanceButtons();
    initSmoothScroll();
    handlePageLoad();
  }
})();
