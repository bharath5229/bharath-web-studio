// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const mobileBtnIcon = mobileBtn.querySelector('i');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle icon between bars and times (close)
    if (navLinks.classList.contains('active')) {
        mobileBtnIcon.classList.remove('fa-bars');
        mobileBtnIcon.classList.add('fa-times');
    } else {
        mobileBtnIcon.classList.remove('fa-times');
        mobileBtnIcon.classList.add('fa-bars');
    }
});

// Close mobile menu when a nav link is clicked
const navItems = document.querySelectorAll('.nav-link');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileBtnIcon.classList.remove('fa-times');
            mobileBtnIcon.classList.add('fa-bars');
        }
    });
});

// Sticky Navbar & Active Link Update on Scroll
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.scrollY;
    
    // Sticky Navbar
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Active Navigation Link
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Adjust for navbar height (80px)
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
        // Fallback for contact button (special case)
        if (current === 'contact' && item.classList.contains('nav-cta')) {
            item.classList.add('active');
        }
    });
});

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.service-card, .pricing-card, .review-card, .section-header, .contact-box');

// Adding reveal class initially
revealElements.forEach(el => {
    el.classList.add('reveal');
});

function reveal() {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;
    
    revealElements.forEach(el => {
        // Handle element reveal
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
}

// Check on initial load
reveal();

// Check on scroll
window.addEventListener('scroll', reveal);
