class AboutPage {
  constructor() {
    this.init();
  }

  init() {
    this.setupHeader();
    this.setupMobileNav();
    this.setupTheme();
    this.setupTestimonialSlider();
    this.setupAnimations();
  }

  // ---------- 1. HEADER MANAGEMENT ----------
  setupHeader() {
    this.header = document.querySelector('.header');
    this.scrollThreshold = 50;
    
    this.toggleHeader = this.toggleHeader.bind(this);
    window.addEventListener('scroll', this.toggleHeader);
    this.toggleHeader(); // Initial check
  }

  toggleHeader() {
    this.header.classList.toggle('scrolled', window.scrollY > this.scrollThreshold);
  }

  // ---------- 2. MOBILE NAVIGATION ----------
  setupMobileNav() {
    this.burgerBtn = document.querySelector('.burger');
    this.nav = document.querySelector('.nav');
    
    this.burgerBtn.addEventListener('click', () => this.toggleNav(true));
    
    // Close on link click
    this.nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => this.toggleNav(false));
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!this.nav.contains(e.target) && !this.burgerBtn.contains(e.target)) {
        this.toggleNav(false);
      }
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.toggleNav(false);
    });
  }

  toggleNav(force) {
    this.nav.classList.toggle('open', force);
    this.burgerBtn.setAttribute('aria-expanded', force);
  }

  // ---------- 3. THEME MANAGEMENT ----------
  setupTheme() {
    this.themeBtn = document.querySelector('.theme-toggle');
    this.THEME_KEY = 'site-theme';
    
    this.loadTheme();
    this.themeBtn.addEventListener('click', () => this.toggleTheme());
  }

  loadTheme() {
    const saved = localStorage.getItem(this.THEME_KEY);
    const isDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    document.body.classList.toggle('dark', isDark);
    this.themeBtn.textContent = isDark ? '☀️' : '🌙';
  }

  toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem(this.THEME_KEY, isDark ? 'dark' : 'light');
    this.themeBtn.textContent = isDark ? '☀️' : '🌙';
  }

  // ---------- 4. TESTIMONIAL SLIDER ----------
  setupTestimonialSlider() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const testimonials = document.querySelectorAll('.testimonial');
    const dotsContainer = document.querySelector('.dots');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    let autoAdvanceInterval;
    let isAnimating = false;

    if (!testimonials.length) return;

    // Create dots
    testimonials.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'dot';
      dot.setAttribute('aria-label', `View testimonial ${index + 1}`);
      dot.addEventListener('click', () => {
        if (!isAnimating) {
          clearInterval(autoAdvanceInterval);
          showTestimonial(index);
          startAutoAdvance();
        }
      });
      dotsContainer.appendChild(dot);
    });

    function showTestimonial(index) {
      if (isAnimating) return;
      isAnimating = true;

      // Update slider position with smooth transition
      sliderWrapper.style.transition = 'transform 0.7s ease';
      sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
      
      // Update dots
      dotsContainer.children[currentIndex].classList.remove('active');
      dotsContainer.children[index].classList.add('active');
      
      // Update current index
      currentIndex = index;

      // Reset animation flag after transition
      setTimeout(() => {
        isAnimating = false;
      }, 700);
    }

    function startAutoAdvance() {
      // Clear any existing interval
      clearInterval(autoAdvanceInterval);
      
      // Start new interval
      autoAdvanceInterval = setInterval(() => {
        if (!isAnimating) {
          const nextIndex = (currentIndex + 1) % testimonials.length;
          showTestimonial(nextIndex);
        }
      }, 5000); // Change every 5 seconds
    }

    // Setup navigation buttons
    prevBtn.addEventListener('click', () => {
      if (!isAnimating) {
        const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(newIndex);
        startAutoAdvance(); // Reset timer after manual navigation
      }
    });

    nextBtn.addEventListener('click', () => {
      if (!isAnimating) {
        const newIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(newIndex);
        startAutoAdvance(); // Reset timer after manual navigation
      }
    });

    // Pause auto-advance on hover
    sliderWrapper.addEventListener('mouseenter', () => clearInterval(autoAdvanceInterval));
    sliderWrapper.addEventListener('mouseleave', startAutoAdvance);

    // Show first testimonial and start auto-advance
    showTestimonial(0);
    startAutoAdvance();
  }

  // ---------- 5. ANIMATIONS ----------
  setupAnimations() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.timeline li, .mission-item, .team-member')
      .forEach(el => this.observer.observe(el));
  }
}

// Initialize the page when ready
document.addEventListener('DOMContentLoaded', () => new AboutPage());