// Fallback translations in case translations.json fails to load
const fallbackTranslations = {
  en: {
    // ... (same fallback translations as provided in the previous response)
    "meta.title": "Mr Solution - Revolutionary Tech Solutions & AI-Powered Insights | 2025",
    "nav.logo": "Mr Solution",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.testimonials": "Testimonials",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.premium": "Get Premium",
    "hero.title": "Revolutionary Tech Solutions",
    "hero.subtitle": "Empowering businesses with AI-driven innovation and cutting-edge technology that transforms possibilities into reality",
    "hero.explore": "Explore Solutions",
    "hero.start": "Start Your Journey",
    "stats.clients": "Satisfied Clients",
    "stats.projects": "Projects Completed",
    "stats.success": "Success Rate %",
    "stats.support": "24/7 Support",
    "services.title": "Our Premium Services",
    "services.ai.title": "AI-Powered Analytics",
    "services.ai.description": "Transform raw data into actionable insights with our advanced machine learning algorithms and predictive analytics platform.",
    "services.cloud.title": "Cloud Infrastructure",
    "services.cloud.description": "Experience unparalleled scalability and reliability with our cloud infrastructure solutions.",
    "services.cybersecurity.title": "Cybersecurity Suite",
    "services.cybersecurity.description": "Protect your digital assets with our comprehensive cybersecurity suite.",
    "services.custom.title": "Custom Development",
    "services.custom.description": "Our custom development services deliver bespoke software solutions tailored to your unique requirements.",
    "services.bi.title": "Business Intelligence",
    "services.bi.description": "Unlock the power of your data with our business intelligence tools.",
    "services.digital.title": "Digital Transformation",
    "services.digital.description": "Accelerate your business with our digital transformation services.",
    "testimonials.title": "What Industry Leaders Say",
    "testimonials.t1.text": "Mr Solution transformed our entire tech infrastructure. Their AI solutions increased our efficiency by 40% and revolutionized how we approach data analytics.",
    "testimonials.t1.author": "Sarah Johnson",
    "testimonials.t1.role": "CEO, TechNova Inc.",
    "testimonials.t2.text": "The premium support and custom development services exceeded all expectations. Their team delivered solutions that perfectly aligned with our vision.",
    "testimonials.t2.author": "Michael Chen",
    "testimonials.t2.role": "CTO, InnovateX",
    "testimonials.t3.text": "Outstanding cybersecurity implementation. We've had zero security incidents since partnering with Mr Solution. Their proactive approach is unmatched.",
    "testimonials.t3.author": "Emily Rodriguez",
    "testimonials.t3.role": "CISO, SecureCore",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "What services does Mr Solution offer?",
    "faq.a1": "Mr Solution provides AI-powered analytics, cloud infrastructure, cybersecurity, custom development, business intelligence, and digital transformation services tailored to your business needs.",
    "faq.q2": "How can I get started with a free trial?",
    "faq.a2": "Contact us via the form in the footer or click 'Start Free Trial' in the CTA section, and our team will guide you through the process.",
    "faq.q3": "Is my data secure with your solutions?",
    "faq.a3": "Absolutely. Our cybersecurity suite uses advanced threat detection and encryption to ensure your data is protected at all times.",
    "faq.q4": "Do you offer support for custom projects?",
    "faq.a4": "Yes, our custom development team specializes in building bespoke solutions tailored to your unique requirements.",
    "cta.title": "Ready to Transform Your Business?",
    "cta.description": "Join thousands of companies already leveraging our premium solutions to stay ahead in the digital revolution. Get started with our exclusive premium plan today.",
    "cta.button": "Start Free Trial",
    "cta.view": "View Pricing",
    "footer.about.title": "Mr Solution",
    "footer.about.description": "Leading the future of technology with innovative solutions that empower businesses to achieve unprecedented growth and efficiency.",
    "footer.services.title": "Services",
    "footer.links.title": "Quick Links",
    "footer.contact.title": "Contact",
    "footer.newsletter.title": "Newsletter",
    "footer.newsletter.description": "Stay updated with the latest tech insights and offers!",
    "footer.copyright": "© 2025 Mr Solution. All rights reserved.",
    "form.label.name": "Your Name",
    "form.name": "Your Name",
    "form.label.email": "Your Email",
    "form.email": "Your Email",
    "form.label.message": "Your Message",
    "form.message": "Your Message",
    "form.submit": "Send Message",
    "form.success": "Message sent successfully!",
    "form.required": "Please fill out all fields.",
    "form.invalidEmail": "Please enter a valid email address.",
    "newsletter.submit": "Subscribe",
    "newsletter.success": "Subscribed successfully!",
    "newsletter.invalidEmail": "Please enter a valid email address.",
    "chat.title": "Live Support",
    "chat.welcome": "Welcome! How can we assist you today?",
    "chat.input": "Type your message...",
    "chat.submit": "Send",
    "chat.response": "Thank you for your message! Our team will get back to you soon.",
    "modal.cta": "Get Started",
    "error.loading": "Failed to load resources. Please try again later."
  }
};

// Initialize the application
function initialize() {
  let translations = fallbackTranslations; // Default to fallback translations

  // DOM Content Loaded Handler
  document.addEventListener('DOMContentLoaded', async () => {
    const loadingScreen = document.getElementById('loadingScreen');

    // Attempt to fetch translations
    try {
      const response = await fetch('translations.json');
      if (!response.ok) {
        throw new Error('Failed to load translations');
      }
      translations = await response.json();
    } catch (error) {
      console.error('Initialization failed:', error);
      const lang = localStorage.getItem('language') || 'en';
      alert(translations[lang]?.['error.loading'] || 'Failed to load resources. Using default content.');
    } finally {
      // Hide loading screen if it exists
      if (loadingScreen) {
        setTimeout(() => {
          loadingScreen.style.opacity = '0';
          setTimeout(() => {
            loadingScreen.style.display = 'none';
          }, 500);
        }, 1000);
      }
    }

    // Service Details
    //const serviceDetails = {
    //  'AI-Powered Analytics': { icon: '🚀', description: '' },
    //  'Cloud Infrastructure': { icon: '⚡', description: '' },
    //  'Cybersecurity Suite': { icon: '🛡️', description: '' },
    //  'Custom Development': { icon: '🔧', description: '' },
    //  'Business Intelligence': { icon: '📊', description: '' },
    //  'Digital Transformation': { icon: '🌐', description: '' }
    //};

    const serviceDetails = {
      'AI-Powered Analytics': {
        icon: '🚀',
        description: 'Our AI-Powered Analytics platform leverages advanced machine learning and predictive modeling to transform your raw data into actionable insights. Gain a competitive edge with real-time analytics, customizable dashboards, and deep learning algorithms tailored to your business needs.'
      },
      'Cloud Infrastructure': {
        icon: '⚡',
        description: 'Experience unparalleled scalability and reliability with our cloud infrastructure solutions. We offer secure, high-performance cloud environments with 99.9% uptime, seamless integration, and automated scaling to support your business growth.'
      },
      'Cybersecurity Suite': {
        icon: '🛡️',
        description: 'Protect your digital assets with our comprehensive cybersecurity suite. Featuring advanced threat detection, real-time monitoring, and proactive defense mechanisms, our solutions ensure your data remains secure against evolving threats.'
      },
      'Custom Development': {
        icon: '🔧',
        description: 'Our custom development services deliver bespoke software solutions tailored to your unique requirements. Using the latest frameworks and technologies, we build scalable, secure, and user-friendly applications that drive business success.'
      },
      'Business Intelligence': {
        icon: '📊',
        description: 'Unlock the power of your data with our business intelligence tools. Our real-time dashboards, advanced reporting, and data visualization solutions provide deep insights into performance metrics, helping you make informed strategic decisions.'
      },
      'Digital Transformation': {
        icon: '🌐',
        description: 'Accelerate your business with our digital transformation services. We modernize your operations, integrate cutting-edge technologies, and streamline processes to enhance efficiency and maintain a competitive advantage in the digital era.'
      }
    };

    // Custom Cursor
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursorFollower');
    document.addEventListener('mousemove', (e) => {
      if (cursor && cursorFollower) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        setTimeout(() => {
          cursorFollower.style.left = e.clientX + 'px';
          cursorFollower.style.top = e.clientY + 'px';
        }, 50);
      }
    });

    const hoverElements = document.querySelectorAll('a, button, input, textarea, select, .service-card, .testimonial-card');
    hoverElements.forEach(elem => {
      elem.addEventListener('mouseenter', () => {
        if (cursor && cursorFollower) {
          cursor.classList.add('hover');
          cursorFollower.classList.add('hover');
        }
      });
      elem.addEventListener('mouseleave', () => {
        if (cursor && cursorFollower) {
          cursor.classList.remove('hover');
          cursorFollower.classList.remove('hover');
        }
      });
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    });

    // Mobile Menu
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelector('.nav-links');
    if (mobileMenu && navLinks) {
      mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        const hamburgers = mobileMenu.querySelectorAll('.hamburger');
        hamburgers[0].style.transform = navLinks.classList.contains('active')
          ? 'rotate(45deg) translate(5px, 5px)'
          : 'none';
        hamburgers[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
        hamburgers[2].style.transform = navLinks.classList.contains('active')
          ? 'rotate(-45deg) translate(7px, -7px)'
          : 'none';
      });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks && mobileMenu) {
          navLinks.classList.remove('active');
          mobileMenu.classList.remove('active');
          const hamburgers = mobileMenu.querySelectorAll('.hamburger');
          hamburgers[0].style.transform = 'none';
          hamburgers[1].style.opacity = '1';
          hamburgers[2].style.transform = 'none';
        }
      });
    });

    // Scroll Indicator
    const scrollIndicator = document.getElementById('scrollIndicator');
    window.addEventListener('scroll', () => {
      if (scrollIndicator) {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = (window.scrollY / windowHeight) * 100;
        scrollIndicator.style.transform = `scaleX(${scrollProgress / 100})`;
      }
    });

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light' && themeIcon) {
      document.body.classList.add('light');
      themeIcon.textContent = '☀️';
    }

    if (themeToggle && themeIcon) {
      themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light');
        const isLight = document.body.classList.contains('light');
        themeIcon.textContent = isLight ? '☀️' : '🌙';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        trackEvent('Theme Toggle', 'Toggle', isLight ? 'Light' : 'Dark');
      });
    }

    // Back to Top Button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
        if (typeof gsap !== 'undefined') {
          gsap.to(backToTop, { opacity: 1, scale: 1, duration: 0.3 });
        }
      } else {
        backToTop.classList.remove('visible');
        if (typeof gsap !== 'undefined') {
          gsap.to(backToTop, { opacity: 0, scale: 0.8, duration: 0.3 });
        }
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      trackEvent('Button Click', 'Click', 'Back to Top');
    });
  }


    // Contact Form
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    if (contactForm && formMessage) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const message = document.getElementById('message')?.value.trim();
        const lang = localStorage.getItem('language') || 'en';

        if (name && email && message) {
          if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            formMessage.textContent = translations[lang]['form.success'] || 'Message sent successfully!';
            formMessage.style.color = 'var(--electric)';
            formMessage.classList.add('show');
            contactForm.reset();
            trackEvent('Form Submission', 'Submit', 'Contact Form');
            setTimeout(() => formMessage.classList.remove('show'), 3000);
          } else {
            formMessage.textContent = translations[lang]['form.invalidEmail'] || 'Please enter a valid email address.';
            formMessage.style.color = 'var(--accent)';
            formMessage.classList.add('show');
          }
        } else {
          formMessage.textContent = translations[lang]['form.required'] || 'Please fill out all fields.';
          formMessage.style.color = 'var(--accent)';
          formMessage.classList.add('show');
        }
      });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterMessage = document.getElementById('newsletterMessage');
    if (newsletterForm && newsletterMessage) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsletterEmail')?.value.trim();
        const lang = localStorage.getItem('language') || 'en';

        if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          newsletterMessage.textContent = translations[lang]['newsletter.success'] || 'Subscribed successfully!';
          newsletterMessage.style.color = 'var(--electric)';
          newsletterMessage.classList.add('show');
          newsletterForm.reset();
          trackEvent('Form Submission', 'Submit', 'Newsletter Form');
          setTimeout(() => newsletterMessage.classList.remove('show'), 3000);
        } else {
          newsletterMessage.textContent = translations[lang]['newsletter.invalidEmail'] || 'Please enter a valid email address.';
          newsletterMessage.style.color = 'var(--accent)';
          newsletterMessage.classList.add('show');
        }
      });
    }

    // Live Chat Widget
    const chatButton = document.getElementById('chatButton');
    const chatBox = document.getElementById('chatBox');
    const chatClose = document.getElementById('chatClose');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = chatBox?.querySelector('.chat-messages');
    const lang = localStorage.getItem('language') || 'en';

    if (chatButton && chatBox && chatClose && chatForm && chatInput && chatMessages) {
      chatButton.addEventListener('click', () => {
        chatBox.classList.toggle('active');
        chatBox.setAttribute('aria-hidden', !chatBox.classList.contains('active'));
        if (chatBox.classList.contains('active')) {
          chatInput.focus();
          gsap.fromTo(chatBox, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.3 });
          trackEvent('Chat Interaction', 'Open', 'Live Chat');
        } else {
          gsap.to(chatBox, { opacity: 0, y: 20, duration: 0.3, onComplete: () => chatBox.classList.remove('active') });
        }
      });

      chatClose.addEventListener('click', () => {
        gsap.to(chatBox, { opacity: 0, y: 20, duration: 0.3, onComplete: () => {
          chatBox.classList.remove('active');
          chatBox.setAttribute('aria-hidden', 'true');
        } });
        trackEvent('Chat Interaction', 'Close', 'Live Chat');
      });

      chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (message) {
          const messageElement = document.createElement('p');
          messageElement.textContent = `You: ${message}`;
          chatMessages.appendChild(messageElement);
          chatMessages.scrollTop = chatMessages.scrollHeight;

          // Simulate bot response
          setTimeout(() => {
            const botMessage = document.createElement('p');
            botMessage.textContent = translations[lang]['chat.response'] || 'Thank you for your message! Our team will get back to you soon.';
            chatMessages.appendChild(botMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
          }, 1000);

          chatInput.value = '';
          trackEvent('Chat Interaction', 'Send Message', 'Live Chat');
        }
      });
    }

  // Service Modal
  //const modal = document.getElementById('serviceModal');
  //const modalClose = document.getElementById('modalClose');
  //const modalIcon = document.getElementById('modalIcon');
  //const modalTitle = document.getElementById('modalTitle');
  //const modalDescription = document.getElementById('modalDescription');
  //const serviceCards = document.querySelectorAll('.service-card');


// Service Modal
  const modal = document.getElementById('serviceModal');
  const modalClose = document.getElementById('modalClose');
  const modalIcon = document.getElementById('modalIcon');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const serviceCards = document.querySelectorAll('.service-card');

  if (modal && modalClose && modalIcon && modalTitle && modalDescription && serviceCards.length) {
    serviceCards.forEach(card => {
      card.addEventListener('click', () => {
        const title = card.querySelector('.service-title')?.textContent;
        if (!title) {
          console.error('Service title not found');
          return;
        }
        const lang = localStorage.getItem('language') || 'en';
        // Map translated titles to serviceDetails keys
        const serviceMap = {
          [translations[lang]['services.ai.title']]: 'AI-Powered Analytics',
          [translations[lang]['services.cloud.title']]: 'Cloud Infrastructure',
          [translations[lang]['services.cybersecurity.title']]: 'Cybersecurity Suite',
          [translations[lang]['services.custom.title']]: 'Custom Development',
          [translations[lang]['services.bi.title']]: 'Business Intelligence',
          [translations[lang]['services.digital.title']]: 'Digital Transformation'
        };
        const serviceKey = serviceMap[title] || title;
        modalIcon.textContent = serviceDetails[serviceKey]?.icon || '🚀';
        modalTitle.textContent = title;
        modalDescription.textContent = serviceDetails[serviceKey]?.description || card.querySelector('.service-description')?.textContent || '';
        
        modal.style.display = 'flex';
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Lock scroll

        if (typeof gsap !== 'undefined') {
          gsap.fromTo(
            modal.querySelector('.modal-content'),
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
          );
        }

        trackEvent('Modal Open', 'Open', title);
        modalClose.focus(); // Accessibility
      });
    });

    const closeModal = () => {
      if (typeof gsap !== 'undefined') {
        gsap.to(modal.querySelector('.modal-content'), {
          opacity: 0,
          y: 50,
          duration: 0.3,
          ease: 'power3.in',
          onComplete: () => {
            modal.classList.remove('active');
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = ''; // Unlock scroll
          }
        });
      } else {
        modal.classList.remove('active');
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
      trackEvent('Modal Close', 'Close', modalTitle.textContent);
    };

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  } else {
    console.error('Modal elements or service cards not found');
  }

  //if (modal && modalClose && modalIcon && modalTitle && modalDescription && serviceCards.length) {
  //  serviceCards.forEach(card => {
  //    card.addEventListener('click', () => {
  //      console.log('Service card clicked:', card); // Debug
  //      const title = card.querySelector('.service-title')?.textContent;
  //      if (!title) {
  //        console.error('Service title not found');
  //        return;
  //      }
  //      const lang = localStorage.getItem('language') || 'en';
  //      // Map service titles to serviceDetails keys
  //      const serviceMap = {
  //        [translations[lang]['services.ai.title']]: 'AI-Powered Analytics',
  //        [translations[lang]['services.cloud.title']]: 'Cloud Infrastructure',
  //        [translations[lang]['services.cybersecurity.title']]: 'Cybersecurity Suite',
  //        [translations[lang]['services.custom.title']]: 'Custom Development',
  //        [translations[lang]['services.bi.title']]: 'Business Intelligence',
  //        [translations[lang]['services.digital.title']]: 'Digital Transformation'
  //      };
  //      const serviceKey = serviceMap[title] || title;
  //      console.log('Service Key:', serviceKey); // Debug
  //      modalIcon.textContent = serviceDetails[serviceKey]?.icon || '🚀';
  //      modalTitle.textContent = title;
  //      modalDescription.textContent =
  //        translations[lang][`services.${serviceKey.toLowerCase().replace(/\s+/g, '')}.description`] ||
  //        card.querySelector('.service-description')?.textContent ||
  //        '';
  //      modal.style.display = 'flex'; // Ensure modal is visible
  //      modal.classList.add('active');
  //      modal.setAttribute('aria-hidden', 'false');
  //      if (typeof gsap !== 'undefined') {
  //        gsap.fromTo(
  //          modal.querySelector('.modal-content'),
  //          { opacity: 0, y: 50 },
  //          { opacity: 1, y: 0, duration: 0.5 }
  //        );
  //      }
  //      document.body.style.overflow = 'hidden';
  //      trackEvent('Modal Open', 'Open', title);
  //    });
  //  });

  //  modalClose.addEventListener('click', () => {
  //    if (typeof gsap !== 'undefined') {
  //      gsap.to(modal.querySelector('.modal-content'), {
  //        opacity: 0,
  //        y: 50,
  //        duration: 0.3,
  //        onComplete: () => {
  //          modal.classList.remove('active');
  //          modal.style.display = 'none';
  //          modal.setAttribute('aria-hidden', 'true');
  //          document.body.style.overflow = '';
  //        }
  //      });
  //    } else {
  //      modal.classList.remove('active');
  //      modal.style.display = 'none';
  //      modal.setAttribute('aria-hidden', 'true');
  //      document.body.style.overflow = '';
  //    }
  //    trackEvent('Modal Close', 'Close', modalTitle.textContent);
  //  });

  //  modal.addEventListener('click', (e) => {
  //    if (e.target === modal) {
  //      if (typeof gsap !== 'undefined') {
  //        gsap.to(modal.querySelector('.modal-content'), {
  //          opacity: 0,
  //          y: 50,
  //          duration: 0.3,
  //          onComplete: () => {
  //            modal.classList.remove('active');
  //            modal.style.display = 'none';
  //            modal.setAttribute('aria-hidden', 'true');
  //            document.body.style.overflow = '';
  //          }
  //        });
  //      } else {
  //        modal.classList.remove('active');
  //        modal.style.display = 'none';
  //        modal.setAttribute('aria-hidden', 'true');
  //        document.body.style.overflow = '';
  //      }
  //      trackEvent('Modal Close', 'Close', modalTitle.textContent);
  //    }
  //  });
  //} else {
  //  console.error('Modal elements or service cards not found');
  //}
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      if (question && answer) {
        question.addEventListener('click', () => {
          const isOpen = question.getAttribute('aria-expanded') === 'true';
          faqItems.forEach(i => {
            const q = i.querySelector('.faq-question');
            const a = i.querySelector('.faq-answer');
            if (i !== item && q && a) {
              q.setAttribute('aria-expanded', 'false');
              a.style.maxHeight = null;
            }
          });
          question.setAttribute('aria-expanded', !isOpen);
          answer.style.maxHeight = isOpen ? null : `${answer.scrollHeight}px`;
          trackEvent('FAQ Interaction', 'Toggle', question.querySelector('.faq-text').textContent);
        });
      }
    });

    // Multilingual Support
    const languageSwitcher = document.getElementById('languageSwitcher');
    const currentLang = localStorage.getItem('language') || 'en';
    if (languageSwitcher) {
      languageSwitcher.value = currentLang;
      applyTranslations(translations, currentLang);

      languageSwitcher.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        localStorage.setItem('language', selectedLang);
        applyTranslations(translations, selectedLang);
        trackEvent('Language Switch', 'Change', selectedLang);
      });
    }

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    // Hero Section Animation
    gsap.from('.hero-content', {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: 'power3.out',
      delay: 0.5
    });

    gsap.to('#heroTitle', {
      text: translations[currentLang]['hero.title'],
      duration: 1.5,
      ease: 'none',
      delay: 0.5
    });

    // Stats Animation
    gsap.utils.toArray('.stat-number').forEach(stat => {
      gsap.to(stat, {
        textContent: stat.getAttribute('data-count'),
        duration: 2,
        ease: 'power1.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: stat,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Services Animation
    gsap.utils.toArray('.service-card').forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        delay: i * 0.2
      });
    });

    // Testimonials Animation
    gsap.utils.toArray('.testimonial-card').forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        x: i % 2 === 0 ? -50 : 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        delay: i * 0.2
      });
    });

    // CTA Animation
    gsap.from('.cta-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // Footer Animation
    gsap.from('.footer-section', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });

    // Floating Elements Parallax
    gsap.utils.toArray('.floating-element').forEach(element => {
      const speed = parseFloat(element.getAttribute('data-parallax-speed'));
      gsap.to(element, {
        y: '-=100',
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: speed
        }
      });
    });

    // Analytics Placeholder
    function trackEvent(category, action, label) {
      console.log(`Event Tracked: ${category}, ${action}, ${label}`);
    }

    // Apply Translations Function
    function applyTranslations(translations, lang) {
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
          // For FAQ questions, update only the .faq-text span
          const faqText = element.querySelector('.faq-text');
          if (faqText) {
            faqText.textContent = translations[lang][key];
          } else {
            element.textContent = translations[lang][key];
          }
        }
      });

      document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
          element.placeholder = translations[lang][key];
        }
      });

      document.title = translations[lang]['meta.title'] || 'Mr Solution';
    }
  });
}

// Start the application
initialize();
