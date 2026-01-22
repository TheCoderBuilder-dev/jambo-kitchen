// Main JavaScript for Jambo Kitchen

// Mobile navigation
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Active navigation on scroll
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const headerHeight = document.querySelector('.site-header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Reservation form
function initReservationForm() {
    const form = document.getElementById('reservation-form');
    if (!form) return;
    
    // Create form fields
    form.innerHTML = `
        <div class="form-group">
            <label for="res-name">Full Name</label>
            <input type="text" id="res-name" name="name" required placeholder="Your name">
        </div>
        <div class="form-group">
            <label for="res-phone">Phone Number</label>
            <input type="tel" id="res-phone" name="phone" required placeholder="+254 7XX XXX XXX">
        </div>
        <div class="form-group">
            <label for="res-date">Date</label>
            <input type="date" id="res-date" name="date" required>
        </div>
        <div class="form-group">
            <label for="res-time">Time</label>
            <select id="res-time" name="time" required>
                <option value="">Select time</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="21:00">9:00 PM</option>
            </select>
        </div>
        <div class="form-group">
            <label for="res-guests">Number of Guests</label>
            <select id="res-guests" name="guests" required>
                <option value="">Select guests</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6+">6+ People</option>
            </select>
        </div>
        <div class="form-group">
            <label for="res-occasion">Occasion (Optional)</label>
            <select id="res-occasion" name="occasion">
                <option value="">Select occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="business">Business Meeting</option>
                <option value="date">Date Night</option>
                <option value="other">Other</option>
            </select>
        </div>
        <button type="submit" class="btn-primary">Book Table</button>
    `;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        console.log('Reservation:', Object.fromEntries(formData.entries()));
        alert('Thank you for your reservation! We will confirm via SMS shortly.');
        form.reset();
    });
}

// Intersection Observer for animations
function initAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.about-wrapper, .menu-item, .special-card, .event-card').forEach(el => {
        observer.observe(el);
    });
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initSmoothScroll();
    initScrollSpy();
    initReservationForm();
    initAnimations();
});

// Add responsive styles dynamically
const responsiveStyles = document.createElement('style');
responsiveStyles.textContent = `
    @media (max-width: 1024px) {
        .about-wrapper,
        .reservation-wrapper,
        .contact-wrapper {
            grid-template-columns: 1fr;
        }
        
        .specials-grid {
            grid-template-columns: 1fr;
        }
        
        .special-card.featured {
            grid-row: auto;
        }
        
        .events-grid,
        .testimonials-slider {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .footer-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    
    @media (max-width: 768px) {
        .header-top {
            display: none;
        }
        
        .hero-section {
            margin-top: 70px;
        }
        
        .nav-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: var(--white);
            flex-direction: column;
            padding: 1rem;
            box-shadow: var(--shadow);
        }
        
        .nav-menu.active {
            display: flex;
        }
        
        .btn-book {
            display: none;
        }
        
        .hamburger {
            display: block;
        }
        
        .slide-content h1 {
            font-size: 2rem;
        }
        
        .hero-features {
            flex-direction: column;
            gap: 1.5rem;
            padding: 2rem;
        }
        
        .events-grid,
        .testimonials-slider,
        .footer-grid {
            grid-template-columns: 1fr;
        }
        
        .reservation-form {
            grid-template-columns: 1fr;
        }
        
        .reservation-form .btn-primary,
        .form-group.full-width {
            grid-column: auto;
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(responsiveStyles);
