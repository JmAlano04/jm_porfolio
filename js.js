 // Header scroll effect
    window.addEventListener('scroll', function() {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
      });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');
    
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      overlay.classList.toggle('active');
    });
    
    overlay.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
    });

    // Scroll animations
    function animateOnScroll() {
      const elements = document.querySelectorAll('.project-card, .client-card, .service-card, .experience-item, .contact-form, .form-group');
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.8;
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        
        if (elementPosition < triggerPoint) {
          element.classList.add('animate');
        }
      });
      
      // Animate form groups sequentially
      const formGroups = document.querySelectorAll('.form-group');
      formGroups.forEach((group, index) => {
        if (group.getBoundingClientRect().top < triggerPoint) {
          group.style.transitionDelay = `${index * 0.1}s`;
          group.classList.add('animate');
        }
      });
    }

    // Initialize animations on load
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);