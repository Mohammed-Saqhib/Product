// ===== ENHANCED KRITIYA WEBSITE FUNCTIONALITY =====

// Global variables
let cart = JSON.parse(localStorage.getItem('kritiyaCart')) || [];
let isLoading = true;
let particlesInstance = null;

// ===== PAGE LOADER AND INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM Content Loaded - Initializing Gen Z Experience');
    
    // Initialize page loader
    const loader = document.querySelector('.page-loader');
    
    // Simulate loading time with random quotes
    const loadingQuotes = [
        "Crafting your vibe...",
        "Loading epic designs...",
        "Preparing fire content...",
        "Almost ready to slay..."
    ];
    
    let quoteIndex = 0;
    const quoteElement = document.querySelector('.loading-text');
    
    if (quoteElement) {
        const quoteInterval = setInterval(() => {
            quoteElement.textContent = loadingQuotes[quoteIndex];
            quoteIndex = (quoteIndex + 1) % loadingQuotes.length;
        }, 800);
        
        setTimeout(() => clearInterval(quoteInterval), 3000);
    }
    
    setTimeout(() => {
        initializeWebsite();
    }, 1000);
    
    // Hide loader after all content is loaded
    window.addEventListener('load', function() {
        setTimeout(() => {
            if (loader) {
                loader.classList.add('fade-out');
                setTimeout(() => {
                    loader.remove();
                    isLoading = false;
                    initParticles();
                    showWelcomeNotification();
                }, 500);
            }
        }, 2000);
    });
});

function initializeWebsite() {
    console.log('✨ Initializing next-level website experience...');
    
    try {
        // Initialize GSAP if available
        if (typeof gsap !== 'undefined') {
            initGSAPAnimations();
        } else {
            console.warn('GSAP not loaded, using fallback animations');
            initFallbackAnimations();
        }
        
        // Initialize AOS if available
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1200,
                once: true,
                offset: 50,
                easing: 'ease-out-cubic'
            });
        }
        
        // Initialize all features
        initThemeToggle();
        initMobileMenu();
        initSmoothScrolling();
        initContactForm();
        initShoppingCart();
        initScrollEffects();
        initLazyLoading();
        initMicroInteractions();
        initCounterAnimations();
        initCyberEffects();
        initAdvancedAnimations();
        
        // Initialize testimonials section
        initTestimonialsSection();
        
        console.log('🎉 Website initialized successfully! Ready to rock!');
        
    } catch (error) {
        console.error('❌ Error initializing website:', error);
    }
}

// ===== PARTICLE SYSTEM =====
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 50,
                    density: { enable: true, value_area: 800 }
                },
                color: { value: ['#ff006e', '#8338ec', '#06ffa5', '#ffbe0b'] },
                shape: {
                    type: 'circle',
                    stroke: { width: 0 }
                },
                opacity: {
                    value: 0.6,
                    random: true,
                    anim: { enable: true, speed: 1, opacity_min: 0.1 }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: { enable: true, speed: 2, size_min: 0.1 }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ff006e',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    repulse: { distance: 100, duration: 0.4 },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }
}

// ===== CYBER EFFECTS =====
function initCyberEffects() {
    // Glitch effect on hover for special elements
    document.querySelectorAll('.neon-text').forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.classList.add('glitch');
            setTimeout(() => this.classList.remove('glitch'), 500);
        });
    });
    
    // Random neon pulse for badges
    setInterval(() => {
        const badges = document.querySelectorAll('.trending-badge, .sale-badge');
        badges.forEach(badge => {
            if (Math.random() > 0.7) {
                badge.style.animation = 'none';
                setTimeout(() => {
                    badge.style.animation = 'pulse-badge 2s ease-in-out infinite';
                }, 100);
            }
        });
    }, 5000);
}

// ===== ADVANCED ANIMATIONS =====
function initAdvancedAnimations() {
    // Magnetic buttons effect
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0) scale(1)';
        });
    });
    
    // Parallax effect for product cards
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        document.querySelectorAll('.product-card').forEach((card, index) => {
            const speed = 0.5 + (index % 3) * 0.1;
            const rect = card.getBoundingClientRect();
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = -(scrollY * speed);
                card.style.transform = `translateY(${yPos}px)`;
            }
        });
    });
}

// ===== ENHANCED NOTIFICATIONS =====
function showWelcomeNotification() {
    const messages = [
        "Welcome to Kritiya! 🔥 Ready to create something epic?",
        "Hey Gen Z! 👋 Let's design your perfect vibe!",
        "Welcome to the future of fashion! ✨",
        "Ready to express your unique style? 🚀"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showNotification(randomMessage, 'success', 4000);
}

function showNotification(message, type = 'info', duration = 5000) {
    const existing = document.querySelectorAll('.notification');
    existing.forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    // Add emoji based on type
    const emojis = {
        success: '✅',
        error: '❌', 
        info: 'ℹ️',
        warning: '⚠️'
    };
    
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-emoji">${emojis[type] || emojis.info}</span>
            <span class="notification-text">${message}</span>
        </div>
    `;
    
    const colors = {
        success: 'linear-gradient(135deg, #06ffa5, #00d4aa)',
        error: 'linear-gradient(135deg, #ff006e, #d63384)',
        info: 'linear-gradient(135deg, #8338ec, #6f42c1)',
        warning: 'linear-gradient(135deg, #ffbe0b, #fd7e14)'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 15px 25px;
        border-radius: 15px;
        z-index: 10000;
        max-width: 350px;
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        animation: slideInRight 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        cursor: pointer;
        font-weight: 600;
        display: flex;
        align-items: center;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    notification.querySelector('.notification-emoji').style.cssText = `
        font-size: 1.2em;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)';
            setTimeout(() => notification.remove(), 400);
        }
    }, duration);
    
    notification.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)';
        setTimeout(() => notification.remove(), 400);
    });
}

// ===== ENHANCED SCROLL EFFECTS =====
function initScrollEffects() {
    let ticking = false;
    let lastScrollTop = 0;
    let scrollDirection = 'up';
    
    function updateScrollEffects() {
        const scrollY = window.scrollY;
        const scrollThreshold = 100;
        
        // Determine scroll direction
        if (scrollY > lastScrollTop && scrollY > scrollThreshold) {
            scrollDirection = 'down';
        } else if (scrollY < lastScrollTop) {
            scrollDirection = 'up';
        }
        lastScrollTop = scrollY;
        
        // Enhanced navbar effects with transparency
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            // Remove all previous classes
            navbar.classList.remove('navbar-transparent', 'navbar-semi-transparent', 'navbar-hidden', 'navbar-visible');
            
            // Apply transparency based on scroll position and direction
            if (scrollY < 50) {
                // At the top - minimal transparency
                navbar.classList.remove('scrolled');
            } else if (scrollY > 50 && scrollY < 200) {
                // Light scrolling - semi-transparent
                navbar.classList.add('scrolled', 'navbar-semi-transparent');
            } else {
                // Heavy scrolling - full transparency when going down
                navbar.classList.add('scrolled');
                
                if (scrollDirection === 'down' && scrollY > 200) {
                    navbar.classList.add('navbar-transparent');
                    // Optional: auto-hide navbar when scrolling down fast
                    if (scrollY > 400) {
                        navbar.classList.add('navbar-hidden');
                    }
                } else if (scrollDirection === 'up') {
                    navbar.classList.add('navbar-visible');
                    // Less transparent when scrolling up
                    if (scrollY > 300) {
                        navbar.classList.add('navbar-semi-transparent');
                    }
                }
            }
        }
        
        // Parallax effect for hero section
        const heroSection = document.querySelector('.hero-section');
        if (heroSection && scrollY < window.innerHeight) {
            heroSection.style.transform = `translateY(${scrollY * 0.5}px)`;
        }
        
        // Cyber grid movement
        const cyberGrid = document.querySelector('.cyber-grid');
        if (cyberGrid) {
            cyberGrid.style.transform = `translate(${scrollY * 0.1}px, ${scrollY * 0.1}px)`;
        }
        
        // Back to top button
        const backToTop = document.querySelector('.back-to-top');
        if (backToTop) {
            if (scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        }
        
        ticking = false;
    }
    
    // Throttled scroll handler
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
    
    // Initial call
    updateScrollEffects();
}

// ===== ENHANCED GSAP ANIMATIONS =====
function initGSAPAnimations() {
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }
    
    // Epic hero animations
    const heroTl = gsap.timeline();
    heroTl.from('.hero-title', { 
        duration: 1.2, 
        y: 100, 
        opacity: 0, 
        ease: 'back.out(1.7)',
        stagger: 0.1
    })
    .from('.hero-subtitle', { 
        duration: 1, 
        y: 50, 
        opacity: 0, 
        ease: 'power3.out' 
    }, '-=0.6')
    .from('.hero-buttons .btn', { 
        duration: 0.8, 
        y: 30, 
        opacity: 0, 
        stagger: 0.2,
        ease: 'back.out(1.7)' 
    }, '-=0.4')
    .from('.floating-card', { 
        duration: 1.5, 
        y: 200, 
        opacity: 0, 
        rotation: 15,
        stagger: 0.3, 
        ease: 'elastic.out(1, 0.5)' 
    }, '-=0.8');
    
    // Product cards animation
    gsap.utils.toArray('.product-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 60,
            opacity: 0,
            rotation: 5,
            ease: 'back.out(1.7)'
        });
    });
    
    // Section titles with split text effect
    gsap.utils.toArray('.section-title').forEach(title => {
        const chars = title.textContent.split('');
        title.innerHTML = chars.map(char => `<span>${char === ' ' ? '&nbsp;' : char}</span>`).join('');
        
        gsap.from(title.children, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 100,
            opacity: 0,
            stagger: 0.05,
            ease: 'back.out(1.7)'
        });
    });
}

// ===== ENHANCED CART FUNCTIONALITY =====
function addToCart(productId) {
    const product = getProductById(productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
        showNotification(`🔥 Added another ${product.name} to cart!`, 'success');
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
        showNotification(`✨ ${product.name} added to cart!`, 'success');
    }
    
    saveCart();
    updateCartDisplay();
    animateCartButton();
    
    // Add confetti effect
    createConfetti();
}

function createConfetti() {
    const colors = ['#ff006e', '#8338ec', '#06ffa5', '#ffbe0b'];
    
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: 50%;
            left: 50%;
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            animation: confetti-fall 3s ease-out forwards;
        `;
        
        const randomX = (Math.random() - 0.5) * 200;
        const randomY = (Math.random() - 0.5) * 200;
        const randomRotation = Math.random() * 360;
        
        confetti.style.setProperty('--random-x', randomX + 'px');
        confetti.style.setProperty('--random-y', randomY + 'px');
        confetti.style.setProperty('--random-rotation', randomRotation + 'deg');
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

// ===== ENHANCED MICRO-INTERACTIONS =====
function initMicroInteractions() {
    // Enhanced button hover effects
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            if (this.classList.contains('btn-primary')) {
                this.style.transform = 'translateY(-3px) scale(1.05)';
                this.style.filter = 'brightness(1.1)';
            }
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.filter = 'brightness(1)';
        });
        
        // Click effect
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple-effect 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Enhanced card hover effects
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateX(5deg) rotateY(2deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
        });
    });
}

// Enhanced testimonials functionality
function initTestimonialsSection() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    // Add hover effects to testimonial cards
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Auto-pause carousel on hover
    const carousel = document.getElementById('testimonialCarousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', function() {
            const carouselInstance = bootstrap.Carousel.getInstance(this);
            if (carouselInstance) {
                carouselInstance.pause();
            }
        });
        
        carousel.addEventListener('mouseleave', function() {
            const carouselInstance = bootstrap.Carousel.getInstance(this);
            if (carouselInstance) {
                carouselInstance.cycle();
            }
        });
    }
    
    // Add touch/swipe support for mobile
    if ('ontouchstart' in window) {
        let startX = 0;
        let endX = 0;
        
        carousel.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
        });
        
        carousel.addEventListener('touchend', function(e) {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const carouselInstance = bootstrap.Carousel.getInstance(carousel);
            if (carouselInstance) {
                if (endX < startX - 50) {
                    carouselInstance.next();
                } else if (endX > startX + 50) {
                    carouselInstance.prev();
                }
            }
        }
    }
}

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('kritiya-theme') || 'dark';
        this.init();
    }

    init() {
        // Set initial theme
        this.setTheme(this.currentTheme);
        
        // Add event listeners
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('kritiya-theme', theme);
        
        // Update meta theme-color for mobile browsers
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', theme === 'dark' ? '#1a1a1a' : '#6c5ce7');
        }
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    getTheme() {
        return this.currentTheme;
    }
}

// Initialize theme manager
let themeManager;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme management
    themeManager = new ThemeManager();
    
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Page loader
    const pageLoader = document.querySelector('.page-loader');
    if (pageLoader) {
        setTimeout(() => {
            pageLoader.style.opacity = '0';
            setTimeout(() => {
                pageLoader.style.display = 'none';
            }, 500);
        }, 2000);
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Counter animation
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 16);
    };

    // Initialize counters when visible
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter-value');
                counters.forEach(counter => {
                    if (!counter.dataset.animated) {
                        animateCounter(counter);
                        counter.dataset.animated = 'true';
                    }
                });
            }
        });
    }, observerOptions);

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        counterObserver.observe(statsSection);
    }

    // Initialize particles if available
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 50 },
                color: { value: '#ff006e' },
                shape: { type: 'circle' },
                opacity: { value: 0.3 },
                size: { value: 3 },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    out_mode: 'out'
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' }
                }
            }
        });
    }

    // Back to top button
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    // Shopping cart functionality
    const cart = {
        items: JSON.parse(localStorage.getItem('kritiya-cart')) || [],
        
        add(product) {
            const existingItem = this.items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.items.push({ ...product, quantity: 1 });
            }
            this.save();
            this.updateUI();
        },
        
        remove(productId) {
            this.items = this.items.filter(item => item.id !== productId);
            this.save();
            this.updateUI();
        },
        
        save() {
            localStorage.setItem('kritiya-cart', JSON.stringify(this.items));
        },
        
        updateUI() {
            const cartCount = document.querySelector('.cart-count');
            const totalItems = this.items.reduce((total, item) => total + item.quantity, 0);
            if (cartCount) {
                cartCount.textContent = totalItems;
                cartCount.style.display = totalItems > 0 ? 'block' : 'none';
            }
        }
    };

    // Initialize cart UI
    cart.updateUI();

    // Add to cart buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = e.target.getAttribute('data-product-id');
            // Add product to cart logic here
            cart.add({ id: productId, name: 'Product', price: 799 });
        }
    });

    // Cookie consent
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptBtn = document.querySelector('.accept-cookies-btn');
    
    if (!localStorage.getItem('kritiya-cookies-accepted')) {
        cookieConsent.style.display = 'block';
    }
    
    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('kritiya-cookies-accepted', 'true');
            cookieConsent.style.display = 'none';
        });
    }

    console.log('Kritiya website loaded successfully!');
    console.log('Current theme:', themeManager.getTheme());
});

// Additional CSS for back to top button
const backToTopCSS = `
.back-to-top {
    position: fixed;
    bottom: 80px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--neon-gradient);
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 5px 20px rgba(255, 0, 110, 0.4);
}

.back-to-top.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.back-to-top:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(255, 0, 110, 0.6);
}
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = backToTopCSS;
document.head.appendChild(style);

// Add CSS for new animations
const enhancedStyle = document.createElement('style');
enhancedStyle.textContent = `
    @keyframes confetti-fall {
        0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(var(--random-x), 200px) rotate(var(--random-rotation));
            opacity: 0;
        }
    }
    
    @keyframes ripple-effect {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(2); opacity: 0; }
    }
    
    @keyframes slideInRight {
        from { transform: translateX(100%) scale(0.8); opacity: 0; }
        to { transform: translateX(0) scale(1); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0) scale(1); opacity: 1; }
        to { transform: translateX(100%) scale(0.8); opacity: 0; }
    }
`;
document.head.appendChild(enhancedStyle);

console.log('🚀 Enhanced Gen Z script loaded successfully! Ready to slay! ✨');
