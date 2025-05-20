class ScrollFadeTimeline {
    constructor() {
      this.timeline = document.querySelector('.timeline');
      this.timelineItems = document.querySelectorAll('.timeline li');
      
      // Configuration options
      this.config = {
        maxOpacity: 1.0,     // Maximum opacity for centered items
        minOpacity: 0.2,     // Minimum opacity for far items
        fadeDistance: 0.6,   // Viewport percentage to consider for fading (0.6 = 60% of viewport)
        transformAmount: 20, // Maximum pixel amount for transform effect
        mobileBreakpoint: 768 // Mobile breakpoint in pixels
      };
      
      // Check if elements exist 
      if (this.timeline && this.timelineItems.length) {
        this.init();
      }
    }
  
    init() {
      this.timelineItems.forEach(item => {
        item.style.opacity = `${this.config.minOpacity}`;
        item.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
      });

      this.handleScroll = this.handleScroll.bind(this);
      
      // Add scroll listener
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleScroll);

      setTimeout(this.handleScroll, 100);
    }
    
    handleScroll() {
      if (!this.timeline) return;
      
      const viewportHeight = window.innerHeight;
      const isMobile = window.innerWidth < this.config.mobileBreakpoint;

      this.timelineItems.forEach(item => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterY = itemRect.top + (itemRect.height / 2);

        const viewportCenterY = viewportHeight / 2;
        const distanceFromCenter = Math.abs(itemCenterY - viewportCenterY);
        const maxDistance = viewportHeight * this.config.fadeDistance;
        
        // Calculate opacity based on distance
        let opacity = this.config.maxOpacity - ((distanceFromCenter / maxDistance) * 
                     (this.config.maxOpacity - this.config.minOpacity));
                     
        // Clamp opacity between min and max values
        opacity = Math.max(this.config.minOpacity, Math.min(this.config.maxOpacity, opacity));
        
        // Calculate transform amount (move slightly based on scroll position)
        let transform = 0;
        if (opacity < 0.8) {
          transform = (1 - opacity) * this.config.transformAmount;
        }
        
        item.style.opacity = opacity.toString();
        
        // Mobile
        if (isMobile) {
          item.style.transform = `translateY(${transform}px)`;
        } else {
          // Desktop
          const isEvenItem = Array.from(this.timelineItems).indexOf(item) % 2 === 0;
          const direction = isEvenItem ? 1 : -1;
          item.style.transform = `translateX(${direction * transform}px)`;
        }
      });
    }

    update() {
      this.handleScroll();
    }

    destroy() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleScroll);
    }
  }
  
  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    const timelineEffect = new ScrollFadeTimeline();
    
    window.timelineEffect = timelineEffect;
  });